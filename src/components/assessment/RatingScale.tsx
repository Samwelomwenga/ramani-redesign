import { Check } from "@phosphor-icons/react"
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
    <div role="radiogroup" aria-labelledby={labelledBy} className="grid grid-cols-5 gap-1.5">
      {ratingLabels.map((label, i) => {
        const rating = (i + 1) as Rating
        const selected = value === rating
        return (
          <label
            key={label}
            className={`relative flex min-h-14 cursor-pointer items-center justify-center rounded-[10px] border-2 px-1 text-center text-[0.8125rem] font-semibold leading-tight transition-[background-color,border-color,color,transform] duration-150 has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold sm:text-meta ${
              selected
                ? "border-field bg-field text-chalk"
                : "border-rule bg-surface text-ink-soft hover:border-ink-muted active:scale-[0.97]"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={rating}
              checked={selected}
              onChange={() => onChange(rating)}
              className="sr-only"
            />
            {label}
            {selected && (
              <span className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-gold text-ink ring-2 ring-ground">
                <Check size={12} weight="bold" aria-hidden="true" />
              </span>
            )}
          </label>
        )
      })}
    </div>
  )
}
