import { useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight, Check, CheckCircle, Lightbulb, UsersThree, X } from "@phosphor-icons/react"
import { FocusHeader } from "@/components/assessment/FocusHeader"
import { PartProgress } from "@/components/assessment/PartProgress"
import { RatingScale } from "@/components/assessment/RatingScale"
import { useFocusOnMount } from "@/hooks/useFocusOnMount"
import { isComplete } from "@/hooks/useAssessment"
import { questionScreens, TOTAL_SCREENS } from "@/lib/questions"
import type { Answer, Rating } from "@/types/assessment"

type QuestionStepProps = {
  index: number
  answer: Answer | undefined
  bannerOpen: boolean
  finished: number
  onRate: (activity: number, rating: Rating) => void
  onPick: (activity: number) => void
  onNext: () => void
  onBack: () => void
  onCloseBanner: () => void
}

const cardTints = [
  "bg-[#dcf0fb]",
  "bg-[#fbf4c4]",
  "bg-[#e8f5cc]",
  "bg-[#f4ebdd]",
]

function missingHint(answer: Answer | undefined) {
  const unrated = answer ? answer.ratings.filter((r) => r === null).length : 4
  if (unrated > 0) return `Rate ${unrated} more to go on`
  if (answer?.pick == null) return "Now pick just one"
  return ""
}

export function QuestionStep({
  index,
  answer,
  bannerOpen,
  finished,
  onRate,
  onPick,
  onNext,
  onBack,
  onCloseBanner,
}: QuestionStepProps) {
  const screen = questionScreens[index]
  const last = index === TOTAL_SCREENS - 1
  const allRated = !!answer && answer.ratings.every((r) => r !== null)
  const complete = isComplete(answer)
  const headingRef = useFocusOnMount<HTMLHeadingElement>(index)
  const hint = missingHint(answer)
  const pickRef = useRef<HTMLHeadingElement>(null)
  const seen = useRef({ index, allRated })

  useEffect(() => {
    const before = seen.current
    seen.current = { index, allRated }
    if (before.index !== index || before.allRated || !allRated) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    pickRef.current?.focus({ preventScroll: true })
    pickRef.current?.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" })
  }, [index, allRated])

  return (
    <div className="bg-doodles flex min-h-dvh flex-col">
      <div className="bg-doodles-dark curved-bottom relative pb-14 text-white sm:pb-20">
        <div className="mx-auto w-full max-w-[44rem] px-4 sm:px-6">
          <FocusHeader tone="light" saved />
          <div className="pt-1">
            <PartProgress finished={finished} current={index} />
          </div>
          <h1 ref={headingRef} tabIndex={-1} className="mt-7 text-[2rem] leading-[1.08] outline-none sm:text-[2.5rem]">
            {screen.prompt}
          </h1>
          <p className="mt-2 text-sky">Rate how much each one sounds like you.</p>
        </div>
      </div>

      <main className="relative z-10 mx-auto w-full max-w-[44rem] flex-1 px-4 pb-10 sm:px-6">
        {bannerOpen && (
          <div className="-mt-6 mb-5 flex items-start gap-3 rounded-[16px] bg-gold-wash p-4 shadow-[0_2px_4px_rgb(15_23_41/0.06),0_14px_30px_-14px_rgb(15_23_41/0.35)] sm:-mt-10">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold text-field">
              <UsersThree size={20} weight="fill" aria-hidden="true" />
            </span>
            <p className="flex-1 pt-1.5 text-meta font-semibold text-ink">
              Parents or guardians, please help your child choose the best answer.
            </p>
            <button
              type="button"
              onClick={onCloseBanner}
              className="-m-1 grid size-11 shrink-0 place-items-center rounded-full text-ink-muted hover:bg-white/70"
              aria-label="Dismiss note for parents"
            >
              <X size={16} weight="bold" aria-hidden="true" />
            </button>
          </div>
        )}

        <ol className={`space-y-3 ${bannerOpen ? "" : "-mt-6 sm:-mt-10"}`}>
          {screen.activities.map((activity, slot) => {
            const labelId = `${activity.id}-label`
            const rated = answer?.ratings[slot] != null
            const tint = cardTints[(slot + index) % cardTints.length]
            return (
              <li key={activity.id} className={`rounded-[20px] p-4 shadow-[0_2px_4px_rgb(15_23_41/0.06),0_14px_30px_-14px_rgb(15_23_41/0.35)] sm:p-5 ${tint}`}>
                <div className="flex items-center gap-3">
                  <span className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-white text-[1.625rem] leading-none shadow-raised" aria-hidden="true">
                    {activity.emoji}
                  </span>
                  <p id={labelId} className="flex-1 text-[1.0625rem] font-semibold leading-snug">
                    {activity.label}
                  </p>
                  {rated && <CheckCircle size={26} weight="fill" className="shrink-0 text-field" aria-hidden="true" />}
                </div>
                <div className="mt-4">
                  <RatingScale
                    name={activity.id}
                    labelledBy={labelId}
                    value={answer?.ratings[slot] ?? null}
                    onChange={(rating) => onRate(slot, rating)}
                  />
                </div>
              </li>
            )
          })}
        </ol>

        {allRated && (
          <section
            aria-labelledby={`pick-${index}`}
            className="mt-6 scroll-mb-28 rounded-[20px] bg-field p-4 text-white shadow-lifted motion-safe:animate-[pick-in_450ms_var(--ease-out-expo)_both] sm:p-5"
          >
            <h2 ref={pickRef} id={`pick-${index}`} tabIndex={-1} className="text-title outline-none">
              If you could only do one of these, which would you pick?
            </h2>
            <div role="radiogroup" aria-labelledby={`pick-${index}`} className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
              {screen.activities.map((activity, slot) => {
                const selected = answer?.pick === slot
                return (
                  <label
                    key={activity.id}
                    className={`relative flex min-h-[4.5rem] cursor-pointer flex-col items-start gap-1.5 rounded-[14px] border-2 bg-surface p-3 pr-8 text-ink sm:flex-row sm:items-center sm:gap-2.5 transition-[border-color,box-shadow,transform] duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold ${
                      selected ? "-translate-y-0.5 border-gold shadow-lifted ring-4 ring-gold/30" : "border-transparent hover:border-gold/60"
                    }`}
                  >
                    <input type="radio" name={`pick-${index}`} checked={selected} onChange={() => onPick(slot)} className="sr-only" />
                    <span className="text-[1.625rem] leading-none" aria-hidden="true">
                      {activity.emoji}
                    </span>
                    <span className="text-[0.9375rem] font-semibold leading-snug">{activity.label}</span>
                    {selected && (
                      <span className="absolute right-2 top-2 grid size-6 place-items-center rounded-full bg-gold text-field">
                        <Check size={14} weight="bold" aria-hidden="true" />
                      </span>
                    )}
                  </label>
                )
              })}
            </div>
          </section>
        )}

        <p className="mt-5 flex items-center gap-2.5 text-meta text-ink-soft">
          <Lightbulb size={20} weight="duotone" className="shrink-0 text-gold-deep" aria-hidden="true" />
          There are no wrong answers. Choose what you enjoy most!
        </p>
      </main>

      <div className="sticky bottom-0 z-20 bg-surface/95 shadow-[0_-8px_24px_-12px_rgb(15_23_41/0.18)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-[44rem] items-center gap-3 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:px-6">
          <button type="button" onClick={onBack} className="outline-btn shrink-0 px-4">
            <ArrowLeft size={20} weight="bold" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">Previous</span>
          </button>
          <p className="flex-1 text-center text-meta text-ink-muted" aria-live="polite">
            {hint}
          </p>
          <button type="button" onClick={onNext} aria-disabled={!complete} className="starter shrink-0">
            {last ? "See my results" : "Next"}
            <ArrowRight size={20} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
