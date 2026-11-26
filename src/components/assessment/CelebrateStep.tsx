import { ArrowRight } from "@phosphor-icons/react"
import { Rosette } from "@/components/brand/Rosette"
import { useFocusOnMount } from "@/hooks/useFocusOnMount"
import { houses, type House } from "@/lib/houses"
import { TOTAL_SCREENS } from "@/lib/questions"

type CelebrateStepProps = {
  nickname: string
  house: House
  onNext: () => void
}

function Bunting() {
  const flags = 14
  return (
    <svg viewBox="0 0 700 70" preserveAspectRatio="none" className="absolute inset-x-0 top-0 h-14 w-full sm:h-20" aria-hidden="true">
      <path d="M0 6 Q350 40 700 6" fill="none" stroke="var(--color-chalk)" strokeOpacity="0.5" strokeWidth="2" />
      {Array.from({ length: flags }, (_, i) => {
        const x = (700 / flags) * i + 700 / flags / 2
        const t = x / 700
        const y = 6 + 34 * 4 * t * (1 - t) * 0.85
        const color = houses[i % houses.length].colorVar
        return <path key={i} d={`M${x - 18} ${y} L${x + 18} ${y} L${x} ${y + 34} Z`} fill={color} />
      })}
    </svg>
  )
}

export function CelebrateStep({ nickname, house, onNext }: CelebrateStepProps) {
  const headingRef = useFocusOnMount<HTMLHeadingElement>("celebrate")
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-field text-chalk">
      <Bunting />
      <main className="relative mx-auto flex w-full max-w-[34rem] flex-1 flex-col items-center justify-center px-4 pb-8 pt-24 text-center">
        <div className="motion-safe:animate-[rosette-in_900ms_var(--ease-out-expo)_both]">
          <Rosette house={house.id} color={house.colorVar} size={168} />
        </div>
        <p className="mt-6 text-meta font-semibold text-gold">
          {TOTAL_SCREENS} of {TOTAL_SCREENS} done
        </p>
        <h1 ref={headingRef} tabIndex={-1} className="mt-2 text-headline outline-none">
          You did it, {nickname}!
        </h1>
        <p className="mt-4 text-lead text-chalk-soft">
          You belong to the <strong className="font-semibold text-chalk">House of {house.name}</strong>. You love{" "}
          {house.loves.charAt(0).toLowerCase() + house.loves.slice(1)}.
        </p>
      </main>
      <div className="mx-auto flex w-full max-w-[34rem] flex-col gap-3 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <button type="button" onClick={onNext} className="starter w-full">
          See what it means
          <ArrowRight size={20} weight="bold" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
