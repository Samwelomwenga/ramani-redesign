import { ArrowLeft, ArrowRight, Check, CheckCircle, UsersThree, X } from "@phosphor-icons/react"
import { FocusHeader } from "@/components/assessment/FocusHeader"
import { RelayBar } from "@/components/assessment/RelayBar"
import { RatingScale } from "@/components/assessment/RatingScale"
import { ActivityIcon } from "@/components/assessment/ActivityIcon"
import { useFocusOnMount } from "@/hooks/useFocusOnMount"
import { isComplete } from "@/hooks/useAssessment"
import { parts, questionScreens, SCREENS_PER_PART, TOTAL_SCREENS } from "@/lib/questions"
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

function missingHint(answer: Answer | undefined) {
  const unrated = answer ? answer.ratings.filter((r) => r === null).length : 4
  if (unrated > 0) return `Rate ${unrated} more to go on`
  if (answer?.pick == null) return "Pick just one to go on"
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
  const part = parts[screen.part]
  const inPart = (index % SCREENS_PER_PART) + 1
  const last = index === TOTAL_SCREENS - 1
  const allRated = !!answer && answer.ratings.every((r) => r !== null)
  const complete = isComplete(answer)
  const headingRef = useFocusOnMount<HTMLHeadingElement>(index)
  const hint = missingHint(answer)

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[40rem] flex-col px-4 sm:px-6">
      <FocusHeader saved />

      <div className="pb-2 pt-1">
        <div className="flex h-12 items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBack}
            className="-ml-2 flex min-h-11 items-center gap-1.5 rounded-[10px] px-2 text-meta font-semibold text-ink-soft hover:bg-surface"
          >
            <ArrowLeft size={18} weight="bold" aria-hidden="true" />
            Back
          </button>
          <p className="text-meta font-semibold">
            {part.name}
            <span className="ml-2 font-medium text-ink-muted">
              {inPart} of {SCREENS_PER_PART}
            </span>
          </p>
        </div>
        <RelayBar finished={finished} current={index} />
      </div>

      {bannerOpen ? (
        <div className="mt-4 flex items-start gap-3 rounded-[10px] bg-gold-wash p-4 text-meta">
          <UsersThree size={22} weight="duotone" className="shrink-0 text-gold-deep" aria-hidden="true" />
          <p className="flex-1 text-ink-soft">
            <strong className="font-semibold text-ink">Grown-ups:</strong> read the activities aloud if it
            helps, then let your child choose. Their answers, their house.
          </p>
          <button
            type="button"
            onClick={onCloseBanner}
            className="-m-2 grid size-10 shrink-0 place-items-center rounded-full text-ink-muted hover:bg-white/60"
            aria-label="Dismiss tip for grown-ups"
          >
            <X size={16} weight="bold" aria-hidden="true" />
          </button>
        </div>
      ) : null}

      <main className="flex-1 pb-8 pt-6">
        <h1 ref={headingRef} tabIndex={-1} className="text-[1.75rem] leading-tight outline-none">
          {last ? "Last one! How much do these sound like you?" : "How much do these sound like you?"}
        </h1>
        {index === 0 && (
          <p className="mt-2 text-ink-soft">There are no wrong answers. Tap one word for each activity.</p>
        )}

        <ol className="mt-6 space-y-3">
          {screen.activities.map((activity, slot) => {
            const labelId = `${activity.id}-label`
            return (
              <li key={activity.id} className="rounded-[14px] bg-surface p-4 shadow-raised">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ground text-field">
                    <ActivityIcon name={activity.icon} />
                  </span>
                  <p id={labelId} className="text-[1.0625rem] font-semibold leading-snug">
                    {activity.label}
                  </p>
                  {answer?.ratings[slot] != null && (
                    <CheckCircle size={22} weight="fill" className="ml-auto shrink-0 text-house-makers" aria-hidden="true" />
                  )}
                </div>
                <div className="mt-3.5">
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

        <section
          aria-labelledby={`pick-${index}`}
          className={`mt-8 transition-opacity duration-300 ${allRated ? "opacity-100" : "pointer-events-none opacity-40"}`}
        >
          <h2 id={`pick-${index}`} className="text-title">
            Pick just one
          </h2>
          <p className="mt-1 text-meta text-ink-muted">
            {allRated ? "If you could only do one of these, which would it be?" : "Opens when all four are rated."}
          </p>
          <div role="radiogroup" aria-labelledby={`pick-${index}`} className="mt-4 grid grid-cols-2 gap-3">
            {screen.activities.map((activity, slot) => {
              const selected = answer?.pick === slot
              return (
                <label
                  key={activity.id}
                  className={`relative flex min-h-32 cursor-pointer flex-col justify-between gap-3 rounded-[14px] border-2 bg-surface p-4 transition-[border-color,box-shadow,transform] duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold ${
                    selected ? "-translate-y-0.5 border-field shadow-lifted" : "border-rule hover:border-ink-muted"
                  }`}
                >
                  <input
                    type="radio"
                    name={`pick-${index}`}
                    checked={selected}
                    disabled={!allRated}
                    onChange={() => onPick(slot)}
                    className="sr-only"
                  />
                  <span className={selected ? "text-field" : "text-ink-muted"}>
                    <ActivityIcon name={activity.icon} size={30} />
                  </span>
                  <span className="text-[0.9375rem] font-semibold leading-snug">{activity.label}</span>
                  {selected && (
                    <span className="absolute right-3 top-3 grid size-7 place-items-center rounded-full bg-gold text-ink">
                      <Check size={16} weight="bold" aria-hidden="true" />
                    </span>
                  )}
                </label>
              )
            })}
          </div>
        </section>

        {last && (
          <p className="mt-6 text-meta text-ink-muted">
            Want to change something?{" "}
            <button type="button" className="quiet-link" onClick={onBack}>
              Check your answers
            </button>
          </p>
        )}
      </main>

      <div className="sticky bottom-0 -mx-4 border-t border-rule bg-ground/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur sm:-mx-6 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-meta text-ink-muted" aria-live="polite">
            {hint}
          </p>
          <button
            type="button"
            onClick={onNext}
            aria-disabled={!complete}
            className="starter shrink-0"
          >
            {last ? "See my results" : "Next"}
            <ArrowRight size={20} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
