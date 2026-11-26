import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Atom,
  Buildings,
  CheckSquareOffset,
  Code,
  Flask,
  GraduationCap,
  Heartbeat,
  Mountains,
  MoonStars,
  MusicNotes,
  Palette,
  Plant,
  Scales,
  Star,
  SunHorizon,
  Waves,

} from "@phosphor-icons/react/dist/ssr"
import type { Icon } from "@phosphor-icons/react"
import { SiteHeader } from "@/components/home/SiteHeader"
import { FieldEdge } from "@/components/home/FieldEdge"
import { SchoolCrest, type CrestShape } from "@/components/home/SchoolCrest"
import { START_HREF, START_LABEL } from "@/lib/routes"

const HERO_PHOTO = "/hero-student-uniform.jpg"

const careers: { label: string; icon: Icon; color: string; spot: string }[] = [
  { label: "Science", icon: Atom, color: "var(--color-clay)", spot: "left-2 sm:left-0 top-[12%] sm:-translate-x-1/3" },
  { label: "Arts", icon: Palette, color: "var(--color-gold-deep)", spot: "right-2 sm:right-0 top-[6%] sm:translate-x-1/4" },
  { label: "Technology", icon: Code, color: "var(--color-cta)", spot: "left-2 sm:left-0 top-[46%] sm:-translate-x-1/2" },
  { label: "Medicine", icon: Heartbeat, color: "var(--color-rose)", spot: "right-2 sm:right-0 top-[40%] sm:translate-x-1/3" },
  { label: "Law", icon: Scales, color: "var(--color-teal)", spot: "left-2 sm:left-0 bottom-[12%] sm:-translate-x-1/4" },
  { label: "Music", icon: MusicNotes, color: "var(--color-field)", spot: "right-2 sm:right-0 bottom-[16%] sm:translate-x-1/4" },
]

const stats: { value: string; label: string; icon: Icon }[] = [
  { value: "200+", label: "Schools", icon: GraduationCap },
  { value: "50K+", label: "Assessments done", icon: CheckSquareOffset },
  { value: "4.9", label: "Avg rating", icon: Star },
]

const schools: { name: string; initials: string; shape: CrestShape; color: string; emblem: Icon }[] = [
  { name: "Sunrise Academy", initials: "SA", shape: "shield", color: "var(--color-gold-deep)", emblem: SunHorizon },
  { name: "Lakeside High", initials: "LH", shape: "roundel", color: "var(--color-cta)", emblem: Waves },
  { name: "Crescent Girls", initials: "CG", shape: "crest", color: "var(--color-clay)", emblem: MoonStars },
  { name: "Valley Primary", initials: "VP", shape: "hex", color: "var(--color-teal)", emblem: Mountains },
  { name: "Metro College", initials: "MC", shape: "shield", color: "var(--color-field)", emblem: Buildings },
  { name: "Greenfield School", initials: "GS", shape: "crest", color: "#15803d", emblem: Plant },
]

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-field text-white">
        <SiteHeader />
        <div
          id="start"
          className="wrap relative z-10 grid items-center gap-14 pb-24 pt-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-32 lg:pt-14"
        >
          <div className="max-w-[36rem]">
            <h1 className="text-display">Help every student find their path</h1>
            <p className="mt-6 max-w-[33rem] text-lead text-sky">
              A quick, science-backed assessment of about 10 minutes that tells a student which
              careers genuinely fit them, with a ranked report emailed straight to their inbox.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={START_HREF} className="starter">
                {START_LABEL}
                <ArrowRight size={20} weight="bold" aria-hidden="true" />
              </Link>
              <Link href="/tools/senior-school-finder" className="outline-btn outline-btn-light">
                Which senior school?
              </Link>
            </div>
            <p className="mt-6 flex items-center gap-2 text-meta text-sky">
              <Flask size={18} weight="duotone" className="shrink-0 text-gold" aria-hidden="true" />
              Backed by science-based career research. The assessment is free.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:mr-10 lg:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_30px_60px_-20px_rgb(15_23_41/0.55)] ring-8 ring-white/15">
              <Image
                src={HERO_PHOTO}
                alt="A student in school uniform sitting outdoors with an open notebook, pen at their chin, thinking"
                fill
                sizes="(min-width: 1024px) 26rem, 22rem"
                className="object-cover object-[50%_30%]"
                priority
              />
            </div>
            <ul aria-label="Career areas the report covers">
              {careers.map(({ label, icon: CareerIcon, color, spot }, i) => (
                <li
                  key={label}
                  className={`absolute ${spot} ${i > 3 ? "hidden sm:flex" : "flex"} items-center gap-2 rounded-full bg-surface py-1.5 pl-1.5 pr-3.5 text-meta font-semibold text-ink shadow-lifted`}
                >
                  <span className="grid size-7 place-items-center rounded-full text-white" style={{ background: color }}>
                    <CareerIcon size={16} weight="bold" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <FieldEdge color="var(--color-gold-wash)" />
      </section>

      <section className="bg-gold-wash text-ink" aria-label="Ramani in numbers">
        <div className="wrap py-10 lg:py-14">
          <dl className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map(({ value, label, icon: StatIcon }) => (
              <div key={label} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-[14px] bg-field text-gold sm:size-14">
                  <StatIcon size={26} weight="fill" aria-hidden="true" />
                </span>
                <div className="flex flex-col-reverse">
                  <dt className="text-meta font-semibold text-ink-soft sm:text-[1.0625rem]">{label}</dt>
                  <dd
                    className="flex items-center gap-1 text-[2.25rem] text-ink font-[650] leading-none tracking-[-0.03em] sm:text-[3.5rem] lg:text-[4rem]"
                    style={{ fontStretch: "80%" }}
                  >
                    {value}
                    {label === "Avg rating" && (
                      <>
                        <Star weight="fill" className="size-[0.6em] text-gold" aria-hidden="true" />
                        <span className="sr-only">stars</span>
                      </>
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-10 grid gap-5 rounded-[20px] bg-surface p-5 shadow-raised lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10 lg:p-6">
            <p className="text-title">Trusted by schools across the region</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
              {schools.map(({ name, ...crest }) => (
                <li key={name} className="flex items-center gap-2.5 lg:flex-col lg:gap-2 lg:text-center">
                  <SchoolCrest {...crest} />
                  <span className="text-meta font-semibold leading-tight">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
