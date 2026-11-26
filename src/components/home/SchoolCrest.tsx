import type { Icon } from "@phosphor-icons/react"

export type CrestShape = "shield" | "roundel" | "crest" | "hex"

const outlines: Record<CrestShape, string> = {
  shield: "M24 2 L44 8 V27 C44 40 35 49 24 54 C13 49 4 40 4 27 V8 Z",
  crest: "M4 3 H18 L24 7 L30 3 H44 V28 C44 41 35 49 24 54 C13 49 4 41 4 28 Z",
  hex: "M24 2 L45 14 V42 L24 54 L3 42 V14 Z",
  roundel: "M24 4 A24 24 0 1 1 23.99 4 Z",
}

type SchoolCrestProps = {
  shape: CrestShape
  color: string
  initials: string
  emblem: Icon
}

export function SchoolCrest({ shape, color, initials, emblem: Emblem }: SchoolCrestProps) {
  const path = outlines[shape]
  const isRoundel = shape === "roundel"
  return (
    <span className="relative inline-grid h-16 w-[3.5rem] shrink-0 place-items-center" aria-hidden="true">
      <svg viewBox={isRoundel ? "0 0 48 52" : "0 0 48 56"} className="absolute inset-0 size-full drop-shadow-[0_3px_4px_rgb(15_23_41/0.25)]">
        {isRoundel ? (
          <>
            <circle cx="24" cy="26" r="23" fill={color} />
            <circle cx="24" cy="26" r="19" fill="none" stroke="white" strokeOpacity="0.7" strokeWidth="1.25" strokeDasharray="2 2" />
          </>
        ) : (
          <>
            <path d={path} fill={color} />
            <path d={path} fill="none" stroke="white" strokeOpacity="0.7" strokeWidth="1.25" transform="translate(24 28) scale(0.84) translate(-24 -28)" />
          </>
        )}
      </svg>
      <span className={`relative flex flex-col items-center text-white ${isRoundel ? "" : "-mt-1"}`}>
        <Emblem size={18} weight="fill" />
        <span className="mt-0.5 text-[0.625rem] font-bold leading-none tracking-[0.08em]">{initials}</span>
      </span>
    </span>
  )
}
