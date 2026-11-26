import { useEffect, useState } from "react"
import { Check } from "@phosphor-icons/react"
import { useFocusOnMount } from "@/hooks/useFocusOnMount"

const steps = ["Scoring your interests", "Matching Kenyan careers", "Picking a senior-school pathway"]

type MatchingStepProps = {
  nickname: string
  onDone: () => void
  hold?: boolean
}

export function MatchingStep({ nickname, onDone, hold = false }: MatchingStepProps) {
  const [done, setDone] = useState(hold ? 1 : 0)
  const headingRef = useFocusOnMount<HTMLHeadingElement>("matching")

  useEffect(() => {
    if (hold) return
    if (done >= steps.length) {
      const t = setTimeout(onDone, 500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setDone((d) => d + 1), 850)
    return () => clearTimeout(t)
  }, [done, hold, onDone])

  return (
    <div className="bg-doodles-dark flex min-h-dvh items-center text-white">
      <main className="mx-auto w-full max-w-[34rem] px-4 py-12 sm:px-6">
        <h1 ref={headingRef} tabIndex={-1} className="text-headline outline-none" aria-live="polite">
          Matching your answers, {nickname}
        </h1>
        <ul className="mt-10 space-y-3">
          {steps.map((step, i) => {
            const complete = i < done
            const active = i === done
            return (
              <li
                key={step}
                className={`flex items-center gap-4 rounded-[16px] p-4 text-lead transition-[background-color,opacity] duration-300 ${
                  complete || active ? "bg-white/[0.08] opacity-100" : "opacity-45"
                }`}
              >
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                    complete ? "bg-gold text-field" : "bg-white/10"
                  }`}
                >
                  {complete ? (
                    <Check size={18} weight="bold" aria-hidden="true" />
                  ) : active ? (
                    <span className="size-3 rounded-full bg-gold motion-safe:animate-pulse" />
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
