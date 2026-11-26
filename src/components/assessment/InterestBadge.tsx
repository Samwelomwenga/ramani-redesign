import { HandHeart, ListChecks, MagnifyingGlass, Megaphone, PaintBrush, Wrench, type Icon } from "@phosphor-icons/react"
import type { Interest } from "@/lib/interests"

const icons: Record<Interest["icon"], Icon> = { HandHeart, ListChecks, MagnifyingGlass, Megaphone, PaintBrush, Wrench }

type InterestBadgeProps = {
  interest: Interest
  size?: "sm" | "md" | "lg"
}

const sizes = {
  sm: { box: "size-11", icon: 22, ring: "" },
  md: { box: "size-16", icon: 30, ring: "ring-4 ring-white/70" },
  lg: { box: "size-32", icon: 60, ring: "ring-8 ring-gold" },
}

export function InterestBadge({ interest, size = "sm" }: InterestBadgeProps) {
  const Glyph = icons[interest.icon]
  const s = sizes[size]
  return (
    <span
      className={`grid ${s.box} ${s.ring} shrink-0 place-items-center rounded-full text-white shadow-raised`}
      style={{ background: interest.color }}
      aria-hidden="true"
    >
      <Glyph size={s.icon} weight="fill" />
    </span>
  )
}
