import type { InterestId } from "@/lib/interests"

export type Rating = 1 | 2 | 3 | 4 | 5

export type Activity = {
  id: string
  emoji: string
  label: string
  interest: InterestId
}

export type QuestionScreen = {
  index: number
  part: number
  prompt: string
  activities: Activity[]
}

export type Answer = {
  ratings: (Rating | null)[]
  pick: number | null
}

export type Screen = "start" | "question" | "break" | "matching" | "celebrate" | "result" | "unlock"

export type AssessmentState = {
  screen: Screen
  nickname: string
  grade: string
  index: number
  answers: Record<number, Answer>
  bannerOpen: boolean
}

export type AssessmentAction =
  | { type: "begin"; nickname: string; grade: string }
  | { type: "rate"; activity: number; rating: Rating }
  | { type: "pick"; activity: number }
  | { type: "next" }
  | { type: "back" }
  | { type: "continue" }
  | { type: "go"; screen: Screen }
  | { type: "closeBanner" }
