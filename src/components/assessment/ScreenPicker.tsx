import Link from "next/link"
import { SquaresFour } from "@phosphor-icons/react/dist/ssr"

const screens = [
  { state: "start", label: "Start" },
  { state: "q1", label: "First question" },
  { state: "partial", label: "Question, half rated" },
  { state: "answered", label: "Question, answered" },
  { state: "mid", label: "Question 10" },
  { state: "break", label: "Halfway" },
  { state: "last", label: "Last question" },
  { state: "matching", label: "Matching" },
  { state: "celebrate", label: "Celebrate" },
  { state: "result", label: "Free result" },
  { state: "unlock", label: "Full report unlock" },
]

export function ScreenPicker({ current }: { current: string }) {
  return (
    <details className="group fixed left-1/2 top-3 z-50 -translate-x-1/2 sm:bottom-6 sm:left-6 sm:top-auto sm:translate-x-0">
      <summary className="flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-full bg-gold px-3.5 sm:min-h-11 sm:px-4 text-meta font-semibold text-field shadow-lifted [&::-webkit-details-marker]:hidden">
        <SquaresFour size={18} weight="fill" aria-hidden="true" />
        Screens
      </summary>
      <nav aria-label="Jump to a screen" className="absolute left-1/2 top-12 w-60 -translate-x-1/2 rounded-[16px] bg-surface p-2 shadow-lifted sm:bottom-14 sm:left-0 sm:top-auto sm:translate-x-0">
        <ul>
          {screens.map(({ state, label }) => (
            <li key={state}>
              <Link
                href={`/assessment?state=${state}`}
                aria-current={state === current ? "page" : undefined}
                className="flex min-h-10 items-center rounded-[10px] px-3 text-meta font-medium text-ink hover:bg-ground aria-[current=page]:bg-field aria-[current=page]:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  )
}
