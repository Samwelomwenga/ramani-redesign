import type { Metadata } from "next"
import { AssessmentFlow } from "@/components/assessment/AssessmentFlow"

export const metadata: Metadata = {
  title: "Career assessment · Ramani",
}

type AssessmentPageProps = {
  searchParams: Promise<{ state?: string; grade?: string }>
}

export default async function AssessmentPage({ searchParams }: AssessmentPageProps) {
  const { state, grade } = await searchParams
  return <AssessmentFlow key={state ?? "start"} preset={state} grade={grade} />
}
