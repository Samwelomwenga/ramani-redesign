import { useEffect, useState } from "react"
import { Check } from "@phosphor-icons/react"
import { useFocusOnMount } from "@/hooks/useFocusOnMount"

const steps = ["Adding up what you love", "Finding your house", "Matching Kenyan careers", "Picking a CBC pathway"]

type MatchingStepProps = {
  nickname: string
  onDone: () => void
  hold?: boolean
}

export function MatchingStep({ nickname, onDone, hold = false }: MatchingStepProps) {
  const [done, setDone] = useState(hold ? 2 : 0)
  const headingRef = useFocusOnMount<HTMLHeadingElement>("matching")

  useEffect(() => {
    if (hold) return
    if (done >= steps.length) {
      const t = setTimeout(onDone, 500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setDone((d) => d + 1), 750)
    return () => clearTimeout(t)
  }, [done, hold, onDone])

  return (
    <div
      className="relative flex min-h-dvh items-center overflow-hidden text-chalk"
      style={{ background: "radial-gradient(44rem 30rem at 85% 15%, rgb(37 99 235 / 0.5), transparent 60%), radial-gradient(36rem 28rem at 0% 100%, rgb(13 148 136 / 0.4), transparent 60%), var(--color-field)" }}
    >
      <main className="relative mx-auto w-full max-w-[34rem] px-4 sm:px-6">
        <h1 ref={headingRef} tabIndex={-1} className="text-headline outline-none" aria-live="polite">
          Matching your answers, {nickname}…
        </h1>
        <ul className="mt-10 space-y-4">
          {steps.map((step, i) => {
            const complete = i < done
            const active = i === done
            return (
              <li key={step} className={`flex items-center gap-4 text-lead transition-opacity duration-300 ${complete || active ? "opacity-100" : "opacity-40"}`}>
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-full border-2 transition-colors duration-300 ${
                    complete ? "border-gold bg-gold text-ink" : "border-white/30"
                  }`}
                >
                  {complete ? (
                    <Check size={18} weight="bold" aria-hidden="true" />
                  ) : active ? (
                    <span className="size-3 animate-pulse rounded-full bg-chalk" />
                  ) : null}
                </span>
                {step}
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}
