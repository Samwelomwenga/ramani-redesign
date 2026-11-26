import Link from "next/link"
import { ArrowRight, Calculator, GraduationCap, MapPin } from "@phosphor-icons/react/dist/ssr"
import { START_HREF } from "@/lib/routes"

const tools = [
  {
    href: "/tools/grade-checker",
    stage: "Finishing school",
    icon: GraduationCap,
    title: "What can I study with my grade?",
    body: "Pick your KCSE mean grade and see which careers open. Degree routes and TVET routes stay apart, so nothing is promised that isn't there.",
    cta: "Check my grade",
    color: "var(--color-rose)",
  },
  {
    href: "/tools/senior-school-finder",
    stage: "Grade 9",
    icon: MapPin,
    title: "Find your senior school",
    body: "See which schools offer your pathway, by county, and build the shortlist you will rank after KJSEA.",
    cta: "Open the finder",
    color: "var(--color-cta)",
  },
  {
    href: "/tools/kjsea-calculator",
    stage: "Grade 9",
    icon: Calculator,
    title: "Work out your KJSEA score",
    body: "Enter your subject marks to see your achievement levels and composite score, and an estimate of the pathway that fits.",
    cta: "Open the calculator",
    color: "var(--color-teal)",
  },
]

export function FreeTools() {
  return (
    <section className="bg-cta-wash py-20 lg:py-28">
      <div className="wrap">
        <div className="max-w-[42rem]">
          <h2 className="text-headline">Start with the choice in front of you</h2>
          <p className="mt-5 text-lead text-ink-soft">
            Free tools for the decisions school actually puts in front of you. None asks you to sign
            up, and all work on a phone.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <li key={tool.href}>
                <Link
                  href={tool.href}
                  className="group flex h-full flex-col rounded-[20px] p-6 text-white shadow-raised transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lifted"
                  style={{ background: tool.color }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid size-12 place-items-center rounded-[14px] bg-white/20">
                      <Icon size={26} weight="duotone" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-meta font-semibold">{tool.stage}</span>
                  </div>
                  <h3 className="mt-6 text-[1.5rem] leading-tight">{tool.title}</h3>
                  <p className="mt-2 flex-1 text-white/90">{tool.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 font-semibold" style={{ color: tool.color }}>
                    {tool.cta}
                    <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
          <p className="text-ink-soft">None of these yours?</p>
          <Link href={START_HREF} className="outline-btn">
            Take the career assessment instead
          </Link>
        </div>
      </div>
    </section>
  )
}
