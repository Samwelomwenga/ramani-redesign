import type { Answer } from "@/types/assessment"
import { houses, type HouseId } from "@/lib/houses"
import { questionScreens } from "@/lib/questions"

export type HouseScore = { id: HouseId; share: number }

export type Evidence = { label: string; rating: string }

export function scoreAnswers(answers: Record<number, Answer>): HouseScore[] {
  const totals = Object.fromEntries(houses.map((h) => [h.id, 0])) as Record<HouseId, number>
  const maxima = Object.fromEntries(houses.map((h) => [h.id, 0])) as Record<HouseId, number>

  for (const screen of questionScreens) {
    const answer = answers[screen.index]
    screen.activities.forEach((activity, slot) => {
      maxima[activity.house] += 7
      if (!answer) return
      totals[activity.house] += answer.ratings[slot] ?? 0
      if (answer.pick === slot) totals[activity.house] += 2
    })
  }

  return houses
    .map((h) => ({ id: h.id, share: maxima[h.id] ? totals[h.id] / maxima[h.id] : 0 }))
    .sort((a, b) => b.share - a.share)
}

export function evidenceFor(house: HouseId, answers: Record<number, Answer>, limit = 2): Evidence[] {
  const found: Evidence[] = []
  for (const screen of [...questionScreens].reverse()) {
    const answer = answers[screen.index]
    if (!answer) continue
    screen.activities.forEach((activity, slot) => {
      const rating = answer.ratings[slot]
      if (activity.house === house && rating && rating >= 4 && found.length < limit) {
        found.push({ label: activity.label, rating: rating === 5 ? "Love it!" : "I like it" })
      }
    })
  }
  return found
}
