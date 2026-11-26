import { PARTS, SCREENS_PER_PART, TOTAL_SCREENS } from "@/lib/questions"

type PartProgressProps = {
  finished: number
  current: number
}

export function PartProgress({ finished, current }: PartProgressProps) {
  const part = Math.floor(current / SCREENS_PER_PART)
  const inPart = (current % SCREENS_PER_PART) + 1
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-meta">
        <p className="font-semibold text-white">
          Part {part + 1} <span className="font-normal text-chalk-soft">of {PARTS}</span>
        </p>
        <p className="font-semibold text-white">
          {inPart} <span className="font-normal text-chalk-soft">of {SCREENS_PER_PART}</span>
        </p>
      </div>
      <progress
        className="sr-only"
        aria-label="Assessment progress"
        max={TOTAL_SCREENS}
        value={finished}
        aria-valuetext={`Part ${part + 1} of ${PARTS}, question ${inPart} of ${SCREENS_PER_PART}`}
      />
      <div className="mt-2.5 flex gap-1.5" aria-hidden="true">
        {Array.from({ length: PARTS }, (_, i) => {
          const done = Math.min(Math.max(finished - i * SCREENS_PER_PART, 0), SCREENS_PER_PART)
          return (
            <div
              key={i}
              className="relative h-2.5 overflow-hidden rounded-full bg-white/15 transition-[flex-grow] duration-500"
              style={{ flexGrow: i === part ? 1.8 : 1 }}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gold transition-[width] duration-500 ease-out"
                style={{ width: `${(done / SCREENS_PER_PART) * 100}%` }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
