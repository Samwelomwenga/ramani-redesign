import { ArrowRight, Scales } from "@phosphor-icons/react"
import { FocusHeader } from "@/components/assessment/FocusHeader"
import { InterestBadge } from "@/components/assessment/InterestBadge"
import { useFocusOnMount } from "@/hooks/useFocusOnMount"
import { getInterest } from "@/lib/interests"
import type { Evidence, InterestScore } from "@/lib/scoring"

type ResultStepProps = {
  nickname: string
  ranking: InterestScore[]
  evidence: Evidence[]
  onUnlock: () => void
}

const placeLabels = ["Strongest", "Close second", "Also strong"]

export function ResultStep({ nickname, ranking, evidence, onUnlock }: ResultStepProps) {
  const headingRef = useFocusOnMount<HTMLHeadingElement>("result")
  const top = getInterest(ranking[0].id)
  const topThree = ranking.slice(0, 3)
  const best = topThree[0].share

  return (
    <div className="bg-doodles min-h-dvh">
      <div className="bg-doodles-dark curved-bottom relative pb-16 text-white sm:pb-24">
        <div className="mx-auto max-w-[44rem] px-4 sm:px-6">
          <FocusHeader tone="light" />
          <div className="flex flex-col items-start gap-5 pt-6 sm:flex-row sm:items-center">
            <InterestBadge interest={top} size="md" />
            <div>
              <p className="text-meta font-semibold text-gold">{nickname}&apos;s free result</p>
              <h1 ref={headingRef} tabIndex={-1} className="mt-1 text-headline outline-none">
                {top.name} comes out on top
              </h1>
              <p className="mt-3 text-lead text-sky">{top.loves}.</p>
            </div>
          </div>
        </div>
      </div>

      <main className="relative z-10 mx-auto -mt-8 max-w-[44rem] space-y-4 px-4 pb-12 sm:-mt-12 sm:px-6">
        <section className="rounded-[20px] bg-surface p-5 shadow-raised sm:p-6" aria-labelledby="top3">
          <h2 id="top3" className="text-title">
            Your top three interests
          </h2>
          <ol className="mt-5 space-y-5">
            {topThree.map(({ id, share }, i) => {
              const interest = getInterest(id)
              return (
                <li key={id} className="flex items-center gap-4">
                  <InterestBadge interest={interest} />
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold">{interest.name}</span>
                      <span className="text-meta text-ink-muted">{placeLabels[i]}</span>
                    </div>
                    <div className="mt-2 h-3 rounded-full bg-ground">
                      <div className="h-full rounded-full" style={{ width: `${(share / best) * 100}%`, background: interest.color }} />
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        {evidence.length > 0 && (
          <section className="rounded-[20px] bg-surface p-5 shadow-raised sm:p-6" aria-labelledby="why">
            <h2 id="why" className="text-title">
              Why we think so
            </h2>
            <ul className="mt-4 space-y-2.5">
              {evidence.map((e) => (
                <li key={e.label} className="flex items-center gap-3 rounded-[14px] bg-gold-wash p-3.5">
                  <span className="text-[1.5rem] leading-none" aria-hidden="true">
                    {e.emoji}
                  </span>
                  <p>
                    You said <strong className="font-semibold">{e.rating}</strong> to{" "}
                    {e.label.charAt(0).toLowerCase() + e.label.slice(1)}.
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="flex flex-col gap-4 rounded-[20px] bg-cta-wash p-5 sm:flex-row sm:items-center sm:p-6" aria-labelledby="values">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cta text-white">
            <Scales size={22} weight="fill" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <h2 id="values" className="font-semibold">
              Values check
            </h2>
            <p className="mt-0.5 text-meta text-ink-soft">An optional 8 questions that refine your shortlist further.</p>
          </div>
          <button type="button" className="outline-btn shrink-0 bg-surface">
            Do the values check
          </button>
        </section>

        <section className="rounded-[20px] bg-field p-5 text-white sm:p-7" aria-labelledby="parents">
          <h2 id="parents" className="text-title">
            For parents and guardians
          </h2>
          <p className="mt-2 text-sky">
            The full report ranks the careers that fit {nickname}, with the senior-school pathway and the
            subjects that help.
          </p>
          <button type="button" onClick={onUnlock} className="starter mt-5 w-full sm:w-auto">
            See the full report
            <ArrowRight size={20} weight="bold" aria-hidden="true" />
          </button>
        </section>
      </main>
    </div>
  )
}
