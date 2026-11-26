"use client"

import { useRouter } from "next/navigation"
import { useId, useState, type ComponentType, type FormEvent, type ReactNode } from "react"
import {
  ArrowRight,
  Briefcase,
  Buildings,
  Check,
  Clock,
  EnvelopeSimple,
  MagnifyingGlass,
  Phone,
  Student,
  User,
  type IconProps,
} from "@phosphor-icons/react"
import { PRICE_KES, START_HREF } from "@/lib/routes"

const curricula = [
  { id: "cbc", flag: "🇰🇪", label: "CBC", full: "Competency-Based Curriculum" },
  { id: "necta", flag: "🇹🇿", label: "NECTA", full: "Tanzania National Curriculum" },
  { id: "igcse", flag: "🎓", label: "IGCSE", full: "Cambridge IGCSE" },
  { id: "alevel", flag: "🏫", label: "Cambridge A Level", full: "Cambridge AS and A Level" },
  { id: "ib", flag: "🌐", label: "IB", full: "International Baccalaureate" },
  { id: "american", flag: "🇺🇸", label: "American", full: "American Curriculum, Common Core" },
  { id: "british", flag: "🇬🇧", label: "British", full: "UK National Curriculum" },
  { id: "frenchbac", flag: "🇫🇷", label: "French Bac", full: "French Baccalauréat" },
  { id: "abitur", flag: "🇩🇪", label: "Abitur", full: "German Curriculum, Abitur and Ausbildung" },
  { id: "caps", flag: "🇿🇦", label: "CAPS", full: "South African CAPS" },
  { id: "cbse", flag: "🇮🇳", label: "CBSE", full: "Indian CBSE" },
]

const grades = [
  { id: "grade1-3", label: "Grade 1–3", stage: "Lower Primary, ages 6–9", questions: 20, time: "~10 min", color: "var(--color-cta)" },
  { id: "grade4-6", label: "Grade 4–6", stage: "Upper Primary, ages 9–12", questions: 24, time: "~12 min", color: "var(--color-teal)" },
  { id: "grade7-9", label: "Grade 7–9", stage: "Junior Secondary, ages 12–15", questions: 28, time: "~15 min", color: "var(--color-clay)" },
  { id: "grade10-12", label: "Grade 10–12", stage: "Senior Secondary, ages 15–18", questions: 32, time: "~15 min", color: "var(--color-rose)" },
]

const adultFirstQuestion = {
  prompt: "At work, which would you take on first?",
  options: [
    "Picking produce by how it looks and smells rather than by the label 🍅",
    "Taking the readings and recording them on the chart, exactly 📋",
    "Winning a client over to the look you have put together for them 👗",
    "Explaining it to a new colleague until it finally lands 🧑‍🏫",
  ],
}

const currentCareers = ["Tour guide", "Clinical officer", "Teacher", "Data analyst", "Accountant", "Software developer"]

type Track = "student" | "adult"

const inputClass =
  "h-12 w-full rounded-[12px] border-2 border-transparent bg-ground pl-11 pr-4 text-ink placeholder:text-ink-muted transition-colors hover:bg-cta-wash focus:border-cta focus:bg-surface focus:outline-none"

function Field({
  label,
  optional,
  hint,
  icon: Icon,
  trailing,
  children,
}: {
  label: string
  optional?: boolean
  hint?: string
  icon: ComponentType<IconProps>
  trailing?: ReactNode
  children: (ids: { id: string; hintId?: string }) => ReactNode
}) {
  const id = useId()
  const hintId = hint ? `${id}-hint` : undefined
  return (
    <div>
      <label htmlFor={id} className="text-meta font-semibold text-ink">
        {label}
        {optional && <span className="font-normal text-ink-muted"> (optional)</span>}
      </label>
      <div className="relative mt-2">
        <Icon size={20} weight="duotone" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
        {children({ id, hintId })}
        {trailing}
      </div>
      {hint && (
        <p id={hintId} className="mt-1.5 text-meta text-ink-muted">
          {hint}
        </p>
      )}
    </div>
  )
}

function ContactFields() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <Field label="Full name" icon={User}>
        {({ id }) => <input id={id} name="name" required autoComplete="name" placeholder="Jane Wanjiru Doe" className={inputClass} />}
      </Field>
      <Field label="Email address" icon={EnvelopeSimple} hint="Your results, and login details, will be sent here.">
        {({ id, hintId }) => (
          <input id={id} name="email" type="email" required autoComplete="email" placeholder="you@example.com" aria-describedby={hintId} className={inputClass} />
        )}
      </Field>
      <div className="sm:col-span-2">
        <Field
          label="Phone number"
          optional
          icon={Phone}
          hint="So we can text you your results and reminders. We'll only use it to reach you."
        >
          {({ id, hintId }) => (
            <input id={id} name="phone" type="tel" autoComplete="tel" placeholder="07XX XXX XXX" aria-describedby={hintId} className={`${inputClass} sm:max-w-[calc(50%-0.625rem)]`} />
          )}
        </Field>
      </div>
    </div>
  )
}

function AccountNote() {
  return (
    <p className="flex items-start gap-2 text-meta text-ink-muted">
      <EnvelopeSimple size={16} weight="duotone" className="mt-0.5 shrink-0" aria-hidden="true" />
      We&apos;ll create your free Ramani account and email your login details to the address above, so
      you can sign back in and revisit your results anytime.
    </p>
  )
}

function StudentForm() {
  const router = useRouter()
  const [curriculum, setCurriculum] = useState("cbc")
  const [grade, setGrade] = useState<string | null>(null)
  const picked = curricula.find((c) => c.id === curriculum)

  function begin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!grade) return
    router.push(`${START_HREF}?curriculum=${curriculum}&grade=${grade}`)
  }

  return (
    <form onSubmit={begin} className="mt-7">
      <h3 className="text-title">Career Path Assessment</h3>
      <p className="mt-1 text-meta font-semibold text-gold-deep">Most important, start here</p>
      <p className="mt-3 text-ink-soft">
        Backed by science-based career research. Ranked career report emailed to your inbox, plus an
        optional <strong className="font-semibold text-ink">Values Check</strong> that refines your
        shortlist further.
      </p>

      <div className="mt-7 space-y-7">
        <ContactFields />

        <fieldset>
          <legend className="text-meta font-semibold text-ink">Curriculum</legend>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {curricula.map((c) => {
              const selected = curriculum === c.id
              return (
                <label
                  key={c.id}
                  className={`flex min-h-12 cursor-pointer items-center gap-2.5 rounded-[12px] border-2 px-3 py-2 font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-gold ${
                    selected ? "border-cta bg-cta-wash text-cta" : "border-transparent bg-ground text-ink hover:bg-cta-wash"
                  }`}
                >
                  <input type="radio" name="curriculum" value={c.id} checked={selected} onChange={() => setCurriculum(c.id)} className="sr-only" />
                  <span className="text-[1.25rem] leading-none" aria-hidden="true">
                    {c.flag}
                  </span>
                  <span className="text-meta leading-tight">{c.label}</span>
                </label>
              )
            })}
          </div>
          {picked && (
            <p className="mt-3 text-meta text-ink-soft" aria-live="polite">
              Tailored for: <strong className="font-semibold text-ink">{picked.full}</strong>
            </p>
          )}
        </fieldset>

        <Field label="School / institution" optional icon={Buildings}>
          {({ id }) => <input id={id} name="school" autoComplete="organization" placeholder="Green Hills Academy" className={inputClass} />}
        </Field>

        <fieldset>
          <legend className="text-meta font-semibold text-ink">Education level</legend>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {grades.map((g) => {
              const selected = grade === g.id
              return (
                <label
                  key={g.id}
                  className={`relative flex min-h-24 cursor-pointer flex-col justify-between rounded-[12px] border-2 p-4 transition-all has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-gold ${
                    selected ? "shadow-raised" : "border-transparent bg-ground hover:bg-cta-wash"
                  }`}
                  style={selected ? { borderColor: g.color, background: `color-mix(in srgb, ${g.color} 8%, white)` } : undefined}
                >
                  <input type="radio" name="grade" value={g.id} required checked={selected} onChange={() => setGrade(g.id)} className="sr-only" />
                  <span className="flex items-start justify-between gap-2">
                    <span>
                      <span className="block text-[1.125rem] font-[650]" style={{ fontStretch: "85%", color: selected ? g.color : undefined }}>
                        {g.label}
                      </span>
                      <span className="block text-meta text-ink-muted">{g.stage}</span>
                    </span>
                    {selected && (
                      <span className="grid size-6 shrink-0 place-items-center rounded-full text-white" style={{ background: g.color }}>
                        <Check size={14} weight="bold" aria-hidden="true" />
                      </span>
                    )}
                  </span>
                  <span className="mt-3 flex flex-wrap items-center gap-x-2 text-meta text-ink-soft">
                    <span>{g.questions} questions</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} weight="bold" aria-hidden="true" />
                      {g.time}
                    </span>
                  </span>
                </label>
              )
            })}
          </div>
        </fieldset>

        <div className="space-y-3">
          <AccountNote />
          <button type="submit" className="starter w-full" aria-disabled={!grade}>
            Begin Career Assessment
            <ArrowRight size={20} weight="bold" aria-hidden="true" />
          </button>
          {!grade && <p className="text-center text-meta text-ink-muted">Pick an education level to begin.</p>}
        </div>
      </div>
    </form>
  )
}

function AdultForm() {
  const router = useRouter()
  const [answer, setAnswer] = useState<number | null>(null)
  const listId = useId()

  function begin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push("/career-change")
  }

  return (
    <form onSubmit={begin} className="mt-7">
      <h3 className="text-title">Adult Career Fit</h3>
      <p className="mt-3 text-ink-soft">
        Already working? Find out if it truly fits you. A teacher who loves photography, a nurse
        who&apos;s really an activist. This measures who you are and shows how well your current path
        matches, plus what else fits.
      </p>

      <div className="mt-7 space-y-7">
        <ContactFields />

        <Field
          label="What do you do now?"
          optional
          icon={Briefcase}
          hint="Pick the closest match. We'll show you how well your current path actually fits you. Not in the list? Just type it."
          trailing={
            <MagnifyingGlass size={18} weight="bold" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
          }
        >
          {({ id, hintId }) => (
            <>
              <input id={id} name="current-career" list={listId} placeholder="Search your current career..." aria-describedby={hintId} className={`${inputClass} pr-11`} />
              <datalist id={listId}>
                {currentCareers.map((career) => (
                  <option key={career} value={career} />
                ))}
              </datalist>
            </>
          )}
        </Field>

        <fieldset className="rounded-[16px] bg-ground p-4 sm:p-5">
          <legend className="sr-only">Question 1: {adultFirstQuestion.prompt}</legend>
          <p className="flex items-center gap-3 font-semibold" aria-hidden="true">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-field text-meta text-white">1</span>
            {adultFirstQuestion.prompt}
          </p>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {adultFirstQuestion.options.map((option, i) => {
              const selected = answer === i
              return (
                <label
                  key={option}
                  className={`flex min-h-14 cursor-pointer items-center rounded-[12px] border-2 bg-surface px-4 py-3 text-[0.9375rem] leading-snug transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-gold ${
                    selected ? "border-cta text-ink shadow-raised" : "border-transparent hover:border-cta-wash"
                  }`}
                >
                  <input type="radio" name="adult-q1" value={i} checked={selected} onChange={() => setAnswer(i)} className="sr-only" />
                  {option}
                </label>
              )
            })}
          </div>
          <p className="mt-3 text-meta text-ink-muted">This is question 1 of ~30. The rest continue right after you begin.</p>
        </fieldset>

        <label className="flex cursor-pointer gap-3 rounded-[16px] border-2 border-cta-wash bg-sky p-4 has-[:checked]:border-cta sm:p-5">
          <input type="checkbox" name="job-emails" className="mt-1 size-5 shrink-0 accent-[var(--color-cta)]" />
          <span>
            <span className="flex items-center gap-2 font-semibold">
              <Briefcase size={18} weight="duotone" className="text-cta" aria-hidden="true" />
              Email me jobs that fit me
            </span>
            <span className="mt-1 block text-meta text-ink-soft">
              Once you&apos;ve finished the assessment and unlocked your full report, we&apos;ll email you
              jobs posted on Ramani that fit the careers it points to, and only those. Stop any time
              from the link in each email.
            </span>
          </span>
        </label>

        <div className="rounded-[16px] bg-teal/10 p-4 sm:p-5">
          <p className="font-semibold text-teal">Finishing unlocks two things</p>
          <ul className="mt-2 space-y-1.5 text-meta text-ink-soft">
            <li className="flex gap-2">
              <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
              Jobs and internships posted by companies on Ramani. See them and apply, whatever your results say.
            </li>
            <li className="flex gap-2">
              <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
              Work Ready: 32 short lessons on how work operates in Kenya. Your payslip, your contract, your rights.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <AccountNote />
          <button type="submit" className="starter w-full">
            Begin Adult Assessment
            <ArrowRight size={20} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function StartHere() {
  const [track, setTrack] = useState<Track>("student")

  return (
    <section id="start-here" className="bg-cta-wash py-20 lg:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-8 lg:self-start lg:pt-6">
          <h2 className="text-headline">Start here</h2>
          <p className="mt-4 max-w-[26rem] text-lead text-ink-soft">
            No account to set up first. Tell us a bit about yourself and begin right away.
          </p>

          <div className="mt-8 max-w-[26rem] rounded-[14px] bg-field p-6 text-chalk shadow-lifted">
            <p className="text-title">The assessment is free.</p>
            <p className="mt-1 text-lead">
              The full report is <strong className="font-[650] text-gold">{PRICE_KES}</strong>.
            </p>
            <p className="mt-4 text-meta text-chalk-soft">
              {track === "student"
                ? "A career counsellor charges KES 5,000+. Pay only when you're ready to unlock your full ranked report."
                : "A career counsellor charges KES 5,000+. Pay only when you're ready. The report is also what you can attach to a job application."}
            </p>
          </div>
        </div>

        <div className="rounded-[20px] bg-surface p-5 shadow-lifted sm:p-8">
          <div role="group" aria-label="Who is taking the assessment" className="grid grid-cols-2 gap-1 rounded-[12px] bg-ground p-1">
            {(
              [
                { id: "student", label: "Student", icon: Student, badge: "Popular" },
                { id: "adult", label: "18+", icon: Briefcase, badge: null },
              ] as const
            ).map(({ id, label, icon: Icon, badge }) => {
              const active = track === id
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setTrack(id)}
                  className={`flex min-h-12 items-center justify-center gap-1.5 rounded-[10px] px-2 font-semibold transition-colors sm:gap-2 ${
                    active ? "bg-surface text-ink shadow-raised" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  <Icon size={20} weight="duotone" className="hidden shrink-0 sm:block" aria-hidden="true" />
                  {label}
                  {badge && <span className="shrink-0 rounded-full bg-cta-wash px-2 py-0.5 text-[0.75rem] text-cta">{badge}</span>}
                </button>
              )
            })}
          </div>

          {track === "student" ? <StudentForm /> : <AdultForm />}
        </div>
      </div>
    </section>
  )
}
