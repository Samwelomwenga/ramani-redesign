import Link from "next/link"
import { ArrowRight, Check, FloppyDisk, PersonSimpleRun } from "@phosphor-icons/react"
import { FocusHeader } from "@/components/assessment/FocusHeader"
import { useFocusOnMount } from "@/hooks/useFocusOnMount"
import { parts, SCREENS_PER_PART } from "@/lib/questions"

type LegBreakProps = {
  nickname: string
  index: number
  onContinue: () => void
}

export function LegBreak({ nickname, index, onContinue }: LegBreakProps) {
  const donePart = Math.floor(index / SCREENS_PER_PART)
  const halfway = donePart === 1
  const headingRef = useFocusOnMount<HTMLHeadingElement>(donePart)
  const next = parts[donePart + 1]

  return (
    <div className="flex min-h-dvh flex-col bg-field text-chalk">
      <div className="mx-auto flex w-full max-w-[40rem] flex-1 flex-col px-4 sm:px-6">
        <FocusHeader tone="light" saved />
        <main className="flex flex-1 flex-col justify-center pb-10">
          <p className="text-meta font-semibold text-gold">Part {donePart + 1} done</p>
          <h1 ref={headingRef} tabIndex={-1} className="mt-2 text-headline outline-none">
            {halfway ? `Halfway there, ${nickname}!` : `Nice running, ${nickname}!`}
          </h1>
          <p className="mt-4 text-lead text-chalk-soft">
            {halfway
              ? "Two parts down, two to go. Have a stretch, then hand the baton on."
              : `Next up: ${next.name}. ${SCREENS_PER_PART} short screens.`}
          </p>

          <ol className="relative mt-12 grid grid-cols-4" aria-label="Your progress through the four parts">
            <span className="absolute left-[12.5%] right-[12.5%] top-6 h-1 rounded-full bg-white/15" aria-hidden="true" />
            <span
              className="absolute left-[12.5%] top-6 h-1 rounded-full bg-gold"
              style={{ width: `${(donePart / (parts.length - 1)) * 75}%` }}
              aria-hidden="true"
            />
            {parts.map((part, i) => {
              const done = i <= donePart
              const upNext = i === donePart + 1
              return (
                <li key={part.name} className="relative flex flex-col items-center text-center">
                  <span
                    className={`grid size-12 place-items-center rounded-full border-2 ${
                      done
                        ? "border-gold bg-gold text-ink"
                        : upNext
                          ? "border-chalk bg-field text-chalk"
                          : "border-white/25 bg-field text-chalk-soft"
                    }`}
                  >
                    {done ? (
                      <Check size={22} weight="bold" aria-hidden="true" />
                    ) : upNext ? (
                      <PersonSimpleRun size={24} weight="duotone" aria-hidden="true" />
                    ) : (
                      <span className="text-meta font-semibold">{i + 1}</span>
                    )}
                  </span>
                  <span className={`mt-3 px-1 text-[0.8125rem] font-semibold leading-tight ${done || upNext ? "text-chalk" : "text-chalk-soft"}`}>
                    {part.name}
                  </span>
                  <span className="sr-only">{done ? "done" : upNext ? "up next" : "to come"}</span>
                </li>
              )
            })}
          </ol>
        </main>

        <div className="flex flex-col gap-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:flex-row-reverse sm:justify-start">
          <button type="button" onClick={onContinue} className="starter">
            Start part {donePart + 2}: {next.name}
            <ArrowRight size={20} weight="bold" aria-hidden="true" />
          </button>
          {halfway && (
            <Link
              href="/"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-[10px] border-2 border-white/30 px-5 font-semibold text-chalk hover:border-chalk"
            >
              <FloppyDisk size={20} weight="duotone" aria-hidden="true" />
              Save and finish later
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
