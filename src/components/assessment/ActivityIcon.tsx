import {
  Bicycle,
  BookOpen,
  Books,
  Bug,
  ClipboardText,
  CloudSun,
  Coins,
  Flag,
  Flask,
  HandWaving,
  Heart,
  HouseLine,
  ListChecks,
  MapTrifold,
  MaskHappy,
  Microphone,
  MusicNotes,
  PaintBrush,
  Palette,
  PawPrint,
  PencilSimple,
  Plant,
  PuzzlePiece,
  Radio,
  Scroll,
  Storefront,
  type Icon,
} from "@phosphor-icons/react"

const icons: Record<string, Icon> = {
  Bicycle,
  BookOpen,
  Books,
  Bug,
  ClipboardText,
  CloudSun,
  Coins,
  Flag,
  Flask,
  HandWaving,
  Heart,
  HouseLine,
  ListChecks,
  MapTrifold,
  MaskHappy,
  Microphone,
  MusicNotes,
  PaintBrush,
  Palette,
  PawPrint,
  PencilSimple,
  Plant,
  PuzzlePiece,
  Radio,
  Scroll,
  Storefront,
}

type ActivityIconProps = {
  name: string
  size?: number
}

export function ActivityIcon({ name, size = 26 }: ActivityIconProps) {
  const IconComponent = icons[name]
  if (!IconComponent) throw new Error(`Unknown activity icon: ${name}`)
  return <IconComponent size={size} weight="duotone" aria-hidden="true" />
}
