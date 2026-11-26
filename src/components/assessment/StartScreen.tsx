"use client"

import { useState } from "react"
import { ArrowRight, Check, Clock, FloppyDisk, SmileyWink } from "@phosphor-icons/react"
import { FocusHeader } from "@/components/assessment/FocusHeader"
import { useFocusOnMount } from "@/hooks/useFocusOnMount"
import { PRICE_KES } from "@/lib/routes"

const grades = [
  { id: "grade1-3", label: "Grade 1–3", detail: "20 questions · ~10 min" },
  { id: "grade4-6", label: "Grade 4–6", detail: "24 questions · ~12 min" },
  { id: "grade7-9", label: "Grade 7–9", detail: "28 questions · ~15 min" },
  { id: "grade10-12", label: "Grade 10–12", detail: "32 questions · ~15 min" },
]

const promises = [
  { icon: Clock, text: "Four short parts. Take a break between them if you like." },
  { icon: SmileyWink, text: "No right or wrong answers. Just pick what sounds like you." },
  { icon: FloppyDisk, text: "Progress saves after every screen." },
]

type StartScreenProps = {
  initialName: string
  initialGrade: string
  onBegin: (nickname: string, grade: string) => void
}

export function StartScreen({ initialName, initialGrade, onBegin }: StartScreenProps) {
  const [nickname, setNickname] = useState(initialName)
  const [grade, setGrade] = useState(initialGrade)
  const [touched, setTouched] = useState(false)
  const headingRef = useFocusOnMount<HTMLHeadingElement>("start")
  const nameMissing = nickname.trim() === ""

  return (
    <div className="min-h-dvh lg:grid lg:grid-cols-[1fr_1.05fr]">
      <aside
        className="relative hidden overflow-hidden text-chalk lg:block"
        style={{ background: "radial-gradient(40rem 30rem at 80% 10%, rgb(37 99 235 / 0.55), transparent 60%), radial-gradient(36rem 28rem at 0% 100%, rgb(13 148 136 / 0.4), transparent 60%), var(--color-field)" }}
      >
        <div className="relative flex h-full items-center p-14">
          <div className="w-full max-w-[28rem]">
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-meta font-semibold ring-1 ring-white/15">
              Most important, start here
            </p>
            <p className="mt-6 text-[2.5rem] font-[650] leading-tight" style={{ fontStretch: "80%" }}>
              Career Path Assessment
            </p>
            <p className="mt-4 text-lead text-chalk-soft">
              Backed by science-based career research. Ranked career report emailed to your inbox,
              plus an optional Values Check that refines your shortlist further.
            </p>
            <div className="mt-8 rounded-[14px] bg-white/[0.08] p-6 ring-1 ring-white/12">
              <p className="font-semibold">
                The assessment is free. The full report is <span className="text-gold">{PRICE_KES}</span>.
              </p>
              <p className="mt-2 text-meta text-chalk-soft">
                A career counsellor charges KES 5,000+. Pay only when you&apos;re ready to unlock your
                full ranked report.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex flex-col px-4 sm:px-10 lg:px-16">
        <FocusHeader />
        <main className="mx-auto w-full max-w-[34rem] flex-1 pb-12 pt-6 lg:pt-8">
          <h1 ref={headingRef} tabIndex={-1} className="text-headline outline-none">
            Start here
          </h1>
          <p className="mt-4 text-lead text-ink-soft">
            No account to set up first. Tell us a bit about yourself and begin right away.
          </p>

          <form
            className="mt-8 space-y-7"
            onSubmit={(e) => {
              e.preventDefault()
              setTouched(true)
              if (!nameMissing) onBegin(nickname.trim(), grade)
            }}
            noValidate
          >
            <div>
              <label htmlFor="nickname" className="block font-semibold">
                What should we call you?
              </label>
              <p id="nickname-hint" className="mt-1 text-meta text-ink-muted">
                A first name or nickname is enough.
              </p>
              <input
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                autoComplete="given-name"
                aria-describedby={touched && nameMissing ? "nickname-error" : "nickname-hint"}
                aria-invalid={touched && nameMissing}
                className="mt-3 h-14 w-full rounded-[10px] border-2 border-rule bg-surface px-4 text-[1.125rem] outline-none transition-colors focus:border-cta aria-[invalid=true]:border-house-helpers"
                placeholder="e.g. Amani"
              />
              {touched && nameMissing && (
                <p id="nickname-error" className="mt-2 text-meta font-semibold text-house-helpers">
                  Type a name so we know what to call you.
                </p>
              )}
            </div>

            <fieldset>
              <legend className="font-semibold">Which grade are you in?</legend>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {grades.map((g) => {
                  const selected = grade === g.id
                  return (
                    <label
                      key={g.id}
                      className={`relative flex min-h-16 cursor-pointer flex-col justify-center rounded-[10px] border-2 px-4 py-3 transition-colors ${
                        selected ? "border-field bg-surface shadow-raised" : "border-rule bg-surface hover:border-ink-muted"
                      }`}
                    >
                      <input
                        type="radio"
                        name="grade"
                        value={g.id}
                        checked={selected}
                        onChange={() => setGrade(g.id)}
                        className="sr-only"
                      />
                      <span className="font-semibold">{g.label}</span>
                      <span className="text-meta text-ink-muted">{g.detail}</span>
                      {selected && (
                        <span className="absolute right-3 top-3 grid size-6 place-items-center rounded-full bg-gold text-ink">
                          <Check size={14} weight="bold" aria-hidden="true" />
                        </span>
                      )}
                    </label>
                  )
                })}
              </div>
              <p className="mt-3 text-meta text-ink-muted">
                Curriculum: CBC.{" "}
                <button type="button" className="quiet-link">
                  Change
                </button>
              </p>
            </fieldset>

            <ul className="space-y-3 rounded-[14px] bg-cta-wash p-5">
              {promises.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3 text-ink-soft">
                  <Icon size={22} weight="duotone" className="mt-0.5 shrink-0 text-field" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>

            <button type="submit" className="starter w-full sm:w-auto">
              Start part 1
              <ArrowRight size={20} weight="bold" aria-hidden="true" />
            </button>
          </form>
        </main>
      </div>
    </div>
  )
}
