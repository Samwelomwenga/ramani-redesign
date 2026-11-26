import { useReducer } from "react"
import type { Answer, AssessmentAction, AssessmentState, Rating } from "@/types/assessment"
import { HALFWAY, questionScreens, TOTAL_SCREENS } from "@/lib/questions"
import type { InterestId } from "@/lib/interests"

const leaning: InterestId[] = ["artistic", "social", "investigative"]

function sampleAnswer(index: number): Answer {
  const screen = questionScreens[index]
  const ratings = screen.activities.map((activity, slot) => {
    const rank = leaning.indexOf(activity.interest)
    const base = rank === 0 ? 5 : rank === 1 ? 4 : rank === 2 ? 3 + ((index + slot) % 2) : 1 + ((index + slot) % 3)
    return base as Rating
  })
  const best = ratings.indexOf(Math.max(...ratings) as Rating)
  return { ratings, pick: best }
}

function answersBefore(index: number): Record<number, Answer> {
  return Object.fromEntries(Array.from({ length: index }, (_, i) => [i, sampleAnswer(i)]))
}

const base: AssessmentState = {
  screen: "start",
  nickname: "",
  grade: "grade4-6",
  index: 0,
  answers: {},
  bannerOpen: true,
}

const named = { nickname: "Amani", grade: "grade4-6" }

export const presets: Record<string, AssessmentState> = {
  start: base,
  q1: { ...base, ...named, screen: "question" },
  partial: {
    ...base,
    ...named,
    screen: "question",
    index: 2,
    bannerOpen: false,
    answers: { ...answersBefore(2), 2: { ratings: [4, null, 5, null], pick: null } },
  },
  answered: {
    ...base,
    ...named,
    screen: "question",
    index: 2,
    bannerOpen: false,
    answers: { ...answersBefore(2), 2: { ratings: [4, 2, 5, 3], pick: 2 } },
  },
  mid: { ...base, ...named, screen: "question", index: 9, bannerOpen: false, answers: answersBefore(9) },
  break: { ...base, ...named, screen: "break", index: 11, bannerOpen: false, answers: answersBefore(12) },
  last: { ...base, ...named, screen: "question", index: 23, bannerOpen: false, answers: answersBefore(23) },
  matching: { ...base, ...named, screen: "matching", index: 23, bannerOpen: false, answers: answersBefore(24) },
  celebrate: { ...base, ...named, screen: "celebrate", index: 23, bannerOpen: false, answers: answersBefore(24) },
  result: { ...base, ...named, screen: "result", index: 23, bannerOpen: false, answers: answersBefore(24) },
  unlock: { ...base, ...named, screen: "unlock", index: 23, bannerOpen: false, answers: answersBefore(24) },
}

export function isComplete(answer: Answer | undefined): boolean {
  return !!answer && answer.ratings.every((r) => r !== null) && answer.pick !== null
}

function emptyAnswer(): Answer {
  return { ratings: [null, null, null, null], pick: null }
}

function reducer(state: AssessmentState, action: AssessmentAction): AssessmentState {
  switch (action.type) {
    case "begin":
      return { ...state, nickname: action.nickname, grade: action.grade, screen: "question", index: 0 }
    case "rate": {
      const current = state.answers[state.index] ?? emptyAnswer()
      const ratings = [...current.ratings]
      ratings[action.activity] = action.rating
      return { ...state, answers: { ...state.answers, [state.index]: { ...current, ratings } } }
    }
    case "pick": {
      const current = state.answers[state.index] ?? emptyAnswer()
      return { ...state, answers: { ...state.answers, [state.index]: { ...current, pick: action.activity } } }
    }
    case "next": {
      if (!isComplete(state.answers[state.index])) return state
      if (state.index === TOTAL_SCREENS - 1) return { ...state, screen: "matching" }
      if (state.index + 1 === HALFWAY) return { ...state, screen: "break" }
      return { ...state, index: state.index + 1, bannerOpen: false }
    }
    case "continue":
      return { ...state, screen: "question", index: state.index + 1 }
    case "back":
      if (state.screen === "break") return { ...state, screen: "question" }
      if (state.index === 0) return { ...state, screen: "start" }
      return { ...state, index: state.index - 1 }
    case "go":
      return { ...state, screen: action.screen }
    case "closeBanner":
      return { ...state, bannerOpen: false }
  }
}

export function useAssessment(presetKey: string | undefined) {
  const initial = (presetKey && presets[presetKey]) || base
  return useReducer(reducer, initial)
}
