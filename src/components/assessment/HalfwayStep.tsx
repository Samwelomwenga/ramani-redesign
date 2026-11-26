import Link from "next/link"
import { ArrowRight, Check, FloppyDisk } from "@phosphor-icons/react"
import { FocusHeader } from "@/components/assessment/FocusHeader"
import { useFocusOnMount } from "@/hooks/useFocusOnMount"
import { HALFWAY, PARTS, SCREENS_PER_PART, TOTAL_SCREENS } from "@/lib/questions"

type HalfwayStepProps = {
  nickname: string
  onContinue: () => void
}

export function HalfwayStep({ nickname, onContinue }: HalfwayStepProps) {
  const headingRef = useFocusOnMount<HTMLHeadingElement>("halfway")
  const partsDone = HALFWAY / SCREENS_PER_PART

  return (
    <div className="bg-doodles-dark flex min-h-dvh flex-col text-white">
      <div className="mx-auto flex w-full max-w-[40rem] flex-1 flex-col px-4 sm:px-6">
        <FocusHeader tone="light" saved />
        <main className="flex flex-1 flex-col justify-center py-10">
          <div className="flex items-center gap-4">
            <span className="grid size-20 shrink-0 place-items-center rounded-full bg-gold text-field ring-8 ring-white/10">
              <span className="text-center leading-none">
                <span className="block text-[1.75rem] font-[650]" style={{ fontStretch: "80%" }}>
                  {HALFWAY}
                </span>
                <span className="block text-[0.8125rem] font-bold">of {TOTAL_SCREENS}</span>
              </span>
            </span>
            <ol className="flex flex-1 gap-1.5" aria-label={`${partsDone} of ${PARTS} parts done`}>
              {Array.from({ length: PARTS }, (_, i) => (
                <li key={i} className="flex flex-1 flex-col gap-2">
                  <span className={`h-2.5 rounded-full ${i < partsDone ? "bg-gold" : "bg-white/15"}`} />
                  <span className={`flex items-center gap-1 text-meta font-semibold ${i < partsDone ? "text-white" : "text-chalk-soft"}`}>
                    {i < partsDone && <Check size={12} weight="bold" className="text-gold" aria-hidden="true" />}
                    Part {i + 1}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <h1 ref={headingRef} tabIndex={-1} className="mt-10 text-headline outline-none">
            Halfway there, {nickname}!
          </h1>
          <p className="mt-4 max-w-[30rem] text-lead text-sky">
            Your progress is saved automatically. You can close this tab and continue later.
          </p>
        </main>

        <div className="flex flex-col gap-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:flex-row-reverse sm:justify-start">
          <button type="button" onClick={onContinue} className="starter">
            Keep going
            <ArrowRight size={20} weight="bold" aria-hidden="true" />
          </button>
          <Link href="/" className="outline-btn outline-btn-light">
            <FloppyDisk size={20} weight="duotone" aria-hidden="true" />
            Save and finish later
          </Link>
        </div>
      </div>
    </div>
  )
}
