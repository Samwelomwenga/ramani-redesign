import { ratingLabels } from "@/lib/questions"
import type { Rating } from "@/types/assessment"

type RatingScaleProps = {
  name: string
  labelledBy: string
  value: Rating | null
  onChange: (rating: Rating) => void
}

export function RatingScale({ name, labelledBy, value, onChange }: RatingScaleProps) {
  return (
    <div role="radiogroup" aria-labelledby={labelledBy} className="grid grid-cols-5 gap-1.5 sm:gap-2">
      {ratingLabels.map((label, i) => {
        const rating = (i + 1) as Rating
        const selected = value === rating
        return (
          <label
            key={label}
            className={`flex min-h-16 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-[12px] px-1 py-1.5 text-center transition-[background-color,color,transform] duration-150 has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold ${
              selected ? "bg-field text-white shadow-raised" : "bg-white/85 text-ink-soft ring-1 ring-inset ring-field/[0.08] hover:bg-white hover:ring-field/30 active:scale-[0.97]"
            }`}
          >
            <input type="radio" name={name} value={rating} checked={selected} onChange={() => onChange(rating)} className="sr-only" />
            <span className={`text-[1.0625rem] font-[650] leading-none ${selected ? "text-gold" : "text-ink"}`} aria-hidden="true">
              {rating}
            </span>
            <span className="text-[0.8125rem] font-semibold leading-tight">{label}</span>
          </label>
        )
      })}
    </div>
  )
}
