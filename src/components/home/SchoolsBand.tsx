import Link from "next/link"
import { ArrowRight, Chalkboard, LockKey, Path, Sparkle, UserFocus } from "@phosphor-icons/react/dist/ssr"

const values = [
  { icon: UserFocus, title: "Personalised", body: "Tailored insights that reflect who you are.", color: "var(--color-cta)" },
  { icon: Path, title: "Actionable", body: "Clear next steps you can act on today.", color: "var(--color-rose)" },
  { icon: LockKey, title: "Private and secure", body: "Your data is encrypted and protected.", color: "var(--color-teal)" },
]

export function SchoolsBand() {
  return (
    <section className="bg-gold-wash py-20 lg:py-24">
      <div className="wrap">
        <div
          className="grid items-center gap-8 rounded-[20px] bg-field p-7 text-white md:grid-cols-[auto_1fr_auto] md:p-10"
        >
          <span className="grid size-14 place-items-center rounded-full bg-white/15">
            <Chalkboard size={28} weight="duotone" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-title lg:text-[1.875rem]">We can bring the assessment to your school</h2>
            <p className="mt-2 max-w-[40rem] text-sky">
              Are you a teacher or head teacher? We come to you, run it with your students, and sit down with the results. One class or
              the whole year group, in any of the 47 counties. Tell us about your school and we will
              call to arrange a date.
            </p>
          </div>
          <Link
            href="/schools"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] bg-white px-5 font-semibold text-field transition-colors hover:bg-gold-wash"
          >
            Request a visit <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div className="flex items-start gap-3">
            <Sparkle size={28} weight="duotone" className="shrink-0 text-gold" aria-hidden="true" />
            <div>
              <h2 className="text-title">Science-backed. Student-first.</h2>
              <p className="mt-1 text-ink-soft">Built on decades of research in aptitude, interests and personality.</p>
            </div>
          </div>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, body, color }) => (
              <li key={title} className="flex gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full text-white" style={{ background: color }}>
                  <Icon size={20} weight="duotone" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-semibold">{title}</span>
                  <span className="block text-meta text-ink-soft">{body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
