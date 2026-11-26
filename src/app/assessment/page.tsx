import type { Metadata } from "next"
import { AssessmentFlow } from "@/components/assessment/AssessmentFlow"
import { ScreenPicker } from "@/components/assessment/ScreenPicker"

export const metadata: Metadata = {
  title: "Career assessment · Ramani",
}

type AssessmentPageProps = {
  searchParams: Promise<{ state?: string; grade?: string; clean?: string }>
}

export default async function AssessmentPage({ searchParams }: AssessmentPageProps) {
  const { state, grade, clean } = await searchParams
  return (
    <>
      <AssessmentFlow key={state ?? "start"} preset={state} grade={grade} />
      {clean === undefined && <ScreenPicker current={state ?? "start"} />}
    </>
  )
}
