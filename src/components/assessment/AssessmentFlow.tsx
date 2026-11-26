"use client"

import { useCallback, useMemo } from "react"
import { StartScreen } from "@/components/assessment/StartScreen"
import { QuestionStep } from "@/components/assessment/QuestionStep"
import { LegBreak } from "@/components/assessment/LegBreak"
import { MatchingStep } from "@/components/assessment/MatchingStep"
import { CelebrateStep } from "@/components/assessment/CelebrateStep"
import { ResultStep } from "@/components/assessment/ResultStep"
import { UnlockStep } from "@/components/assessment/UnlockStep"
import { isComplete, useAssessment } from "@/hooks/useAssessment"
import { getHouse } from "@/lib/houses"
import { evidenceFor, scoreAnswers } from "@/lib/scoring"

type AssessmentFlowProps = {
  preset?: string
  grade?: string
}

export function AssessmentFlow({ preset, grade }: AssessmentFlowProps) {
  const [state, dispatch] = useAssessment(preset)
  const ranking = useMemo(() => scoreAnswers(state.answers), [state.answers])
  const finished = Object.values(state.answers).filter(isComplete).length
  const toCelebrate = useCallback(() => dispatch({ type: "go", screen: "celebrate" }), [dispatch])

  switch (state.screen) {
    case "start":
      return (
        <StartScreen
          initialName={state.nickname}
          initialGrade={grade ?? state.grade}
          onBegin={(nickname, grade) => dispatch({ type: "begin", nickname, grade })}
        />
      )
    case "question":
      return (
        <QuestionStep
          index={state.index}
          answer={state.answers[state.index]}
          bannerOpen={state.bannerOpen}
          finished={finished}
          onRate={(activity, rating) => dispatch({ type: "rate", activity, rating })}
          onPick={(activity) => dispatch({ type: "pick", activity })}
          onNext={() => dispatch({ type: "next" })}
          onBack={() => dispatch({ type: "back" })}
          onCloseBanner={() => dispatch({ type: "closeBanner" })}
        />
      )
    case "break":
      return <LegBreak nickname={state.nickname} index={state.index} onContinue={() => dispatch({ type: "continue" })} />
    case "matching":
      return <MatchingStep nickname={state.nickname} onDone={toCelebrate} hold={preset === "matching"} />
    case "celebrate":
      return (
        <CelebrateStep
          nickname={state.nickname}
          house={getHouse(ranking[0].id)}
          onNext={() => dispatch({ type: "go", screen: "result" })}
        />
      )
    case "result":
      return (
        <ResultStep
          nickname={state.nickname}
          ranking={ranking}
          evidence={evidenceFor(ranking[0].id, state.answers)}
          onUnlock={() => dispatch({ type: "go", screen: "unlock" })}
        />
      )
    case "unlock":
      return <UnlockStep nickname={state.nickname} ranking={ranking} onBack={() => dispatch({ type: "go", screen: "result" })} />
  }
}
