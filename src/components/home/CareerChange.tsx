import Link from "next/link"
import { FieldEdge } from "@/components/home/FieldEdge"
import { AirplaneTilt, ArrowRight, Coins, Toolbox } from "@phosphor-icons/react/dist/ssr"

const points = [
  {
    icon: Toolbox,
    title: "What already carries over",
    body: "Years of work leave you with more than a job title. We show which of the strengths the new work needs you already bring, measured against your own results, not guessed from your CV.",
  },
  {
    icon: Coins,
    title: "What it really costs",
    body: "The actual course, the entry requirements, the fees, and what the work pays afterwards. If it is six years and several hundred thousand shillings, we say so, before you hand in your notice.",
  },
  {
    icon: AirplaneTilt,
    title: "Here, or abroad",
    body: "Moving country is one of the most common ways Kenyans change career. A qualification out of reach here is sometimes routine elsewhere, so we show both.",
  },
]

const moves = [
  { from: "Tour guide", to: "Clinical officer", note: "A retrain, a KMTC diploma, about 3 years" },
  { from: "Teacher", to: "Data analyst", note: "A short course bridges most of it" },
  { from: "Accountant", to: "Software developer", note: "Much of the logical work already carries over" },
]

export function CareerChange() {
  return (
    <section className="relative overflow-hidden bg-field-deep pb-20 pt-28 text-chalk lg:pb-28 lg:pt-36">
      <FieldEdge color="var(--color-cta-wash)" flip />
      <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <h2 className="text-headline">Thinking of changing career?</h2>
          <p className="mt-5 max-w-[36rem] text-lead text-chalk-soft">
            Most people never find out what the move would actually take: how long, how much, and
            whether the work they already do counts for anything. Ramani works it out from your own
            assessment and tells you straight.
          </p>
          <ul className="mt-10 space-y-6">
            {points.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-[12px] bg-gold text-ink">
                  <Icon size={22} weight="duotone" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-[650]">{title}</h3>
                  <p className="mt-1 text-chalk-soft">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="self-center rounded-[14px] bg-surface p-6 text-ink shadow-lifted sm:p-8">
          <h3 className="text-title">Moves people actually ask about</h3>
          <ul className="mt-5 space-y-3">
            {moves.map((m) => (
              <li key={m.to} className="rounded-[12px] bg-ground p-4">
                <p className="flex flex-wrap items-center gap-2 font-semibold">
                  {m.from}
                  <ArrowRight size={16} weight="bold" className="text-cta" aria-label="to" />
                  <span className="text-cta">{m.to}</span>
                </p>
                <p className="mt-1 text-meta text-ink-soft">{m.note}</p>
              </li>
            ))}
          </ul>
          <Link href="/career-change" className="starter mt-6 w-full">
            Find out what your move would take
            <ArrowRight size={20} weight="bold" aria-hidden="true" />
          </Link>
          <p className="mt-3 text-center text-meta text-ink-muted">Takes the adult assessment first, about 20 minutes.</p>
        </div>
      </div>
    </section>
  )
}
