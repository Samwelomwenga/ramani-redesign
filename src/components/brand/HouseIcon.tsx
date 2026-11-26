import {
  ClipboardText,
  Flask,
  HandHeart,
  Megaphone,
  PaintBrush,
  Wrench,
} from "@phosphor-icons/react/dist/ssr"
import type { HouseId } from "@/lib/houses"

const icons = {
  makers: Wrench,
  explorers: Flask,
  creators: PaintBrush,
  helpers: HandHeart,
  leaders: Megaphone,
  organisers: ClipboardText,
} satisfies Record<HouseId, unknown>

type HouseIconProps = {
  house: HouseId
  size?: number
}

export function HouseIcon({ house, size = 24 }: HouseIconProps) {
  const Icon = icons[house]
  return <Icon size={size} weight="duotone" aria-hidden="true" />
}
