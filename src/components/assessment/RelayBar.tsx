import { parts, SCREENS_PER_PART, TOTAL_SCREENS } from "@/lib/questions"

type RelayBarProps = {
  finished: number
  current?: number
  tone?: "light" | "dark"
}

export function RelayBar({ finished, current, tone = "dark" }: RelayBarProps) {
  const light = tone === "light"
  const label =
    current === undefined
      ? `${finished} of ${TOTAL_SCREENS} screens done`
      : `Part ${Math.floor(current / SCREENS_PER_PART) + 1} of ${parts.length}, ${parts[Math.floor(current / SCREENS_PER_PART)].name}. Screen ${(current % SCREENS_PER_PART) + 1} of ${SCREENS_PER_PART}.`
  return (
    <div>
      <progress className="sr-only" max={TOTAL_SCREENS} value={finished} aria-valuetext={label} />
      <div className="flex gap-1.5" aria-hidden="true">
        {parts.map((part, i) => {
          const done = Math.min(Math.max(finished - i * SCREENS_PER_PART, 0), SCREENS_PER_PART)
          const active = current !== undefined && Math.floor(current / SCREENS_PER_PART) === i
          return (
            <div
              key={part.name}
              className={`relative h-2 overflow-hidden rounded-full transition-[flex-grow] duration-500 ${
                light ? "bg-white/15" : "bg-rule"
              }`}
              style={{ flexGrow: active ? 1.6 : 1 }}
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
