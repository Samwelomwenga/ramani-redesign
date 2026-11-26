import { ArrowRight, Quotes, Sparkle } from "@phosphor-icons/react"
import { FocusHeader } from "@/components/assessment/FocusHeader"
import { Rosette } from "@/components/brand/Rosette"
import { HouseIcon } from "@/components/brand/HouseIcon"
import { useFocusOnMount } from "@/hooks/useFocusOnMount"
import { getHouse } from "@/lib/houses"
import type { Evidence, HouseScore } from "@/lib/scoring"

type ResultStepProps = {
  nickname: string
  ranking: HouseScore[]
  evidence: Evidence[]
  onUnlock: () => void
}

export function ResultStep({ nickname, ranking, evidence, onUnlock }: ResultStepProps) {
  const headingRef = useFocusOnMount<HTMLHeadingElement>("result")
  const top = getHouse(ranking[0].id)
  const topThree = ranking.slice(0, 3)
  const best = topThree[0].share

  return (
    <div className="min-h-dvh">
      <div className="relative bg-field text-chalk">
        <div className="mx-auto max-w-[44rem] px-4 sm:px-6">
          <FocusHeader tone="light" />
          <div className="flex flex-col items-center gap-6 pb-12 pt-6 text-center sm:flex-row sm:items-center sm:text-left">
            <Rosette house={top.id} color={top.colorVar} size={112} className="shrink-0" />
            <div>
              <p className="text-meta font-semibold text-gold">{nickname}&apos;s house</p>
              <h1 ref={headingRef} tabIndex={-1} className="mt-1 text-headline outline-none">
                House of {top.name}
              </h1>
              <p className="mt-3 text-lead text-chalk-soft">{top.loves}.</p>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[44rem] space-y-6 px-4 py-8 sm:px-6">
        <section className="rounded-[14px] bg-surface p-6 shadow-raised" aria-labelledby="why">
          <h2 id="why" className="text-title">
            Why we think so
          </h2>
          <ul className="mt-4 space-y-3">
            {evidence.map((e) => (
              <li key={e.label} className="flex gap-3 rounded-[10px] bg-ground p-3.5">
                <Quotes size={20} weight="fill" className="mt-0.5 shrink-0" style={{ color: top.colorVar }} aria-hidden="true" />
                <p>
                  You said <strong className="font-semibold">{e.rating}</strong> to {e.label.charAt(0).toLowerCase() + e.label.slice(1)}.
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[14px] bg-surface p-6 shadow-raised" aria-labelledby="top3">
          <h2 id="top3" className="text-title">
            Your top three houses
          </h2>
          <ol className="mt-5 space-y-5">
            {topThree.map(({ id, share }, i) => {
              const house = getHouse(id)
              return (
                <li key={id} className="flex items-center gap-4">
                  <span
                    className="grid size-11 shrink-0 place-items-center rounded-full"
                    style={{ color: house.colorVar, background: `color-mix(in srgb, ${house.colorVar} 12%, white)` }}
                  >
                    <HouseIcon house={id} size={24} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold">{house.name}</span>
                      <span className="text-meta text-ink-muted">{i === 0 ? "Strongest" : i === 1 ? "Close second" : "Also strong"}</span>
                    </div>
                    <div className="mt-2 h-3 rounded-full bg-ground">
                      <div className="h-full rounded-full" style={{ width: `${(share / best) * 100}%`, background: house.colorVar }} />
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        <section className="rounded-[14px] border-2 border-dashed border-rule p-6" aria-labelledby="values">
          <div className="flex items-start gap-3">
            <Sparkle size={24} weight="duotone" className="shrink-0 text-gold-deep" aria-hidden="true" />
            <div>
              <h2 id="values" className="font-semibold">
                Sharpen your results
              </h2>
              <p className="mt-1 text-meta text-ink-soft">
                Eight quick this-or-that choices about what matters to you. About 2 minutes, and you can skip it.
              </p>
              <button type="button" className="quiet-link mt-3 text-meta">
                Do the values check
              </button>
            </div>
          </div>
        </section>

        <section className="rounded-[14px] bg-gold-wash p-6" aria-labelledby="grownup">
          <h2 id="grownup" className="text-title">
            Show a grown-up
          </h2>
          <p className="mt-2 text-ink-soft">
            Your full report has careers that fit the {top.name}, the senior-school pathway and the
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
