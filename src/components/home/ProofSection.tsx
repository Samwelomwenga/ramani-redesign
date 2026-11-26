import { InstagramLogo } from "@phosphor-icons/react/dist/ssr"
import { CreatorVideo } from "@/components/home/CreatorVideo"
import { FieldEdge } from "@/components/home/FieldEdge"

const testimonials = [
  {
    quote: "I always thought I'd do medicine because everyone said so. Ramani showed me I'm wired for engineering, and it just clicked.",
    name: "Brian",
    grade: "Grade 12",
    color: "var(--color-cta)",
  },
  {
    quote: "The report explained WHY each career fits me, not just a list. My mum finally understood my choices.",
    name: "Aisha",
    grade: "Grade 10",
    color: "var(--color-rose)",
  },
  {
    quote: "I was stuck on my senior-school pathway. Seeing my top matches ranked made the decision obvious.",
    name: "Wanjiku",
    grade: "Grade 9",
    color: "var(--color-teal)",
  },
]

export function ProofSection() {
  return (
    <section className="relative overflow-hidden bg-field pb-20 pt-28 text-chalk lg:pb-28 lg:pt-36">
      <FieldEdge color="var(--color-gold-wash)" flip />
      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div>
          <p className="text-[3.5rem] font-[650] leading-none text-gold sm:text-[4.5rem]" style={{ fontStretch: "80%" }}>
            1,089+
          </p>
          <p className="mt-2 text-title text-chalk sm:text-[1.75rem]">students have taken the Ramani assessment</p>

          <ul className="mt-10 space-y-4">
            {testimonials.map((t) => (
              <li key={t.name}>
                <figure className="flex gap-4 rounded-[14px] bg-white/[0.07] p-5 ring-1 ring-white/10">
                  <span
                    className="grid size-11 shrink-0 place-items-center rounded-full text-lead font-[650] text-white"
                    style={{ background: t.color }}
                    aria-hidden="true"
                  >
                    {t.name[0]}
                  </span>
                  <div>
                    <blockquote className="text-lead">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="mt-2 text-meta text-chalk-soft">
                      <strong className="font-semibold text-chalk">{t.name}</strong> · {t.grade}
                    </figcaption>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <figure className="order-first mx-auto w-full max-w-[20rem] lg:order-none">
          <h2 className="mb-4 text-title sm:text-[1.75rem]">Creators love Ramani</h2>
          <CreatorVideo />
          <figcaption className="mt-4">
            <p className="font-semibold">Caroline Mutoko</p>
            <p className="text-meta text-chalk-soft">Media personality and Ramani partner</p>
            <a
              href="https://www.instagram.com/caroline.mutoko/"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-meta font-semibold text-chalk underline decoration-white/40"
            >
              <InstagramLogo size={16} weight="duotone" aria-hidden="true" /> @caroline.mutoko
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
