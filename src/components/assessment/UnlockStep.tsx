import { ArrowLeft, Check, DeviceMobile, LockKey, ShieldCheck } from "@phosphor-icons/react"
import { FocusHeader } from "@/components/assessment/FocusHeader"
import { Rosette } from "@/components/brand/Rosette"
import { useFocusOnMount } from "@/hooks/useFocusOnMount"
import { getHouse } from "@/lib/houses"
import type { HouseScore } from "@/lib/scoring"
import { PRICE_KES } from "@/lib/routes"

type UnlockStepProps = {
  nickname: string
  ranking: HouseScore[]
  onBack: () => void
}

export function UnlockStep({ nickname, ranking, onBack }: UnlockStepProps) {
  const headingRef = useFocusOnMount<HTMLHeadingElement>("unlock")
  const top = getHouse(ranking[0].id)
  const second = getHouse(ranking[1].id)
  const third = getHouse(ranking[2].id)

  const locked = [
    {
      title: `Careers that fit ${nickname}`,
      preview: top.careers,
      body: `Ranked, with why each one fits ${nickname}'s answers.`,
    },
    {
      title: "Senior-school pathway and subjects",
      preview: [top.pathway, "Visual Arts", "Mathematics"],
      body: "The CBC pathway that suits this house and the subjects to focus on now.",
    },
    {
      title: "Schools to shortlist",
      preview: ["By county", "Offers the pathway", "Day or boarding"],
      body: "Senior schools that offer the pathway, ready for the KJSEA choices.",
    },
  ]

  const included = [
    "Careers ranked for your child, with reasons",
    "CBC pathway and subjects that help",
    "Senior-school shortlist by county",
    "PDF to print and a WhatsApp link to share",
  ]

  return (
    <div className="min-h-dvh">
      <div className="mx-auto max-w-[72rem] px-4 sm:px-8">
        <FocusHeader />
        <button
          type="button"
          onClick={onBack}
          className="-ml-2 mt-2 flex min-h-11 items-center gap-1.5 rounded-[10px] px-2 text-meta font-semibold text-ink-soft hover:bg-surface"
        >
          <ArrowLeft size={18} weight="bold" aria-hidden="true" />
          Back to {nickname}&apos;s result
        </button>

        <div className="grid gap-8 pb-16 pt-4 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
          <main>
            <h1 ref={headingRef} tabIndex={-1} className="text-headline outline-none">
              {nickname}&apos;s full report is ready
            </h1>
            <p className="mt-3 max-w-[34rem] text-lead text-ink-soft">
              This is what you get for {PRICE_KES}. The free result stays yours either way.
            </p>

            <section aria-label="Free result" className="mt-8 flex items-center gap-5 rounded-[14px] bg-field p-5 text-chalk">
              <Rosette house={top.id} color={top.colorVar} size={64} className="shrink-0" />
              <div>
                <p className="text-meta text-chalk-soft">Free result · unlocked</p>
                <p className="text-title">House of {top.name}</p>
                <p className="text-meta text-chalk-soft">
                  Then {second.name} and {third.name}
                </p>
              </div>
            </section>

            <ul className="mt-5 space-y-4">
              {locked.map((section) => (
                <li key={section.title} className="relative overflow-hidden rounded-[14px] bg-surface p-5 shadow-raised">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-title">{section.title}</h2>
                      <p className="mt-1 text-meta text-ink-soft">{section.body}</p>
                    </div>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-ground text-ink-muted">
                      <LockKey size={18} weight="duotone" aria-label="Locked" />
                    </span>
                  </div>
                  <ul className="mt-4 flex select-none flex-wrap gap-2 blur-[5px]" aria-hidden="true">
                    {section.preview.map((item) => (
                      <li key={item} className="rounded-full border border-rule bg-ground px-3 py-1.5 text-meta font-semibold">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </main>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-[14px] bg-surface p-6 shadow-lifted sm:p-7">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-title">Full report</h2>
                <p className="text-[2rem] font-[650] leading-none" style={{ fontStretch: "80%" }}>
                  {PRICE_KES}
                </p>
              </div>
              <p className="mt-1 text-meta text-ink-muted">One payment. Yours to keep.</p>
              <ul className="mt-5 space-y-2.5">
                {included.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.9375rem]">
                    <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-house-makers" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <form className="mt-6 border-t border-rule pt-6" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="mpesa" className="block font-semibold">
                  M-Pesa number
                </label>
                <p id="mpesa-hint" className="mt-1 text-meta text-ink-muted">
                  We send the payment prompt and the report link here.
                </p>
                <div className="mt-3 flex h-14 items-center rounded-[10px] border-2 border-rule bg-surface focus-within:border-cta">
                  <span className="flex h-full items-center border-r border-rule px-3 font-semibold text-ink-soft">+254</span>
                  <input
                    id="mpesa"
                    inputMode="tel"
                    autoComplete="tel-national"
                    aria-describedby="mpesa-hint"
                    placeholder="712 345 678"
                    className="h-full min-w-0 flex-1 bg-transparent px-3 text-[1.125rem] outline-none"
                  />
                </div>
                <button type="submit" className="starter mt-4 w-full">
                  <DeviceMobile size={20} weight="duotone" aria-hidden="true" />
                  Pay {PRICE_KES} with M-Pesa
                </button>
                <p className="mt-3 text-center text-meta text-ink-muted">
                  Not now?{" "}
                  <button type="button" className="quiet-link">
                    Email me the free result
                  </button>
                </p>
              </form>
            </div>

            <figure className="mt-5 rounded-[14px] bg-gold-wash p-5">
              <blockquote className="text-[1.0625rem]">
                &ldquo;The report explained WHY each career fits me, not just a list. My mum finally understood my
                choices.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-meta font-semibold">
                Aisha <span className="font-medium text-ink-muted">· Grade 10</span>
              </figcaption>
            </figure>
            <p className="mt-4 flex items-start gap-2 text-meta text-ink-muted">
              <ShieldCheck size={18} weight="duotone" className="mt-px shrink-0 text-house-makers" aria-hidden="true" />
              Partners never influence rankings. Results come only from {nickname}&apos;s answers.
            </p>
          </aside>
        </div>
      </div>
    </div>
  )
}
