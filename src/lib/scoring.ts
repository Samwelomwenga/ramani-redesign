import type { Answer } from "@/types/assessment"
import { interests, type InterestId } from "@/lib/interests"
import { questionScreens, ratingLabels } from "@/lib/questions"

export type InterestScore = { id: InterestId; share: number }

export type Evidence = { emoji: string; label: string; rating: string }

export function scoreAnswers(answers: Record<number, Answer>): InterestScore[] {
  const totals = Object.fromEntries(interests.map((i) => [i.id, 0])) as Record<InterestId, number>
  const maxima = Object.fromEntries(interests.map((i) => [i.id, 0])) as Record<InterestId, number>

  for (const screen of questionScreens) {
    const answer = answers[screen.index]
    screen.activities.forEach((activity, slot) => {
      maxima[activity.interest] += 7
      if (!answer) return
      totals[activity.interest] += answer.ratings[slot] ?? 0
      if (answer.pick === slot) totals[activity.interest] += 2
    })
  }

  return interests
    .map((i) => ({ id: i.id, share: maxima[i.id] ? totals[i.id] / maxima[i.id] : 0 }))
    .sort((a, b) => b.share - a.share)
}

export function evidenceFor(interest: InterestId, answers: Record<number, Answer>, limit = 2): Evidence[] {
  const found: Evidence[] = []
  for (const screen of [...questionScreens].reverse()) {
    const answer = answers[screen.index]
    if (!answer) continue
    screen.activities.forEach((activity, slot) => {
      const rating = answer.ratings[slot]
      if (activity.interest === interest && rating !== null && rating >= 4 && found.length < limit) {
        found.push({ emoji: activity.emoji, label: activity.label, rating: ratingLabels[rating - 1] })
      }
    })
    if (found.length >= limit) break
  }
  return found
}
