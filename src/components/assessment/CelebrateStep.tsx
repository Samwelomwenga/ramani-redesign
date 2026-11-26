import { ArrowRight } from "@phosphor-icons/react"
import { InterestBadge } from "@/components/assessment/InterestBadge"
import { useFocusOnMount } from "@/hooks/useFocusOnMount"
import type { Interest } from "@/lib/interests"
import { TOTAL_SCREENS } from "@/lib/questions"

type CelebrateStepProps = {
  nickname: string
  interest: Interest
  onNext: () => void
}

export function CelebrateStep({ nickname, interest, onNext }: CelebrateStepProps) {
  const headingRef = useFocusOnMount<HTMLHeadingElement>("celebrate")
  return (
    <div className="bg-doodles-cream flex min-h-dvh flex-col">
      <main className="mx-auto flex w-full max-w-[34rem] flex-1 flex-col items-center justify-center px-4 pb-8 pt-16 text-center">
        <div className="motion-safe:animate-[badge-in_700ms_var(--ease-out-expo)_both]">
          <InterestBadge interest={interest} size="lg" />
        </div>
        <p className="mt-8 rounded-full bg-field px-3.5 py-1 text-meta font-semibold text-white">
          {TOTAL_SCREENS} of {TOTAL_SCREENS} done
        </p>
        <h1 ref={headingRef} tabIndex={-1} className="mt-4 text-headline outline-none">
          You did it, {nickname}!
        </h1>
        <p className="mt-4 text-lead text-ink-soft">
          Your strongest interest is <strong className="font-semibold" style={{ color: interest.color }}>{interest.name}</strong>.
          You love {interest.loves.charAt(0).toLowerCase() + interest.loves.slice(1)}.
        </p>
      </main>
      <div className="mx-auto w-full max-w-[34rem] px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <button type="button" onClick={onNext} className="starter w-full">
          See my results
          <ArrowRight size={20} weight="bold" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
