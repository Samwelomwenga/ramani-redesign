import type { HouseId } from "@/lib/houses"
import { HouseIcon } from "@/components/brand/HouseIcon"

type RosetteProps = {
  house: HouseId
  color: string
  size?: number
  className?: string
}

const PLEATS = 28

function pleatPath(cx: number, cy: number, outer: number, inner: number) {
  const points: string[] = []
  for (let i = 0; i < PLEATS * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    const a = (Math.PI * i) / PLEATS - Math.PI / 2
    points.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`)
  }
  return `M${points.join("L")}Z`
}

export function Rosette({ house, color, size = 120, className }: RosetteProps) {
  return (
    <svg
      viewBox="0 0 120 150"
      width={size}
      height={size * 1.25}
      className={className}
      aria-hidden="true"
    >
      <path d="M44 84 L30 146 L41 138 L50 148 L60 88 Z" fill={color} />
      <path d="M76 84 L90 146 L79 138 L70 148 L60 88 Z" fill={color} />
      <path d="M44 84 L30 146 L41 138 L50 148 L60 88 Z" fill="#000" opacity="0.18" />
      <path d={pleatPath(60, 58, 54, 46)} fill={color} />
      <path d={pleatPath(60, 58, 54, 46)} fill="#fff" opacity="0.14" />
      <circle cx="60" cy="58" r="44" fill={color} />
      <circle cx="60" cy="58" r="44" fill="none" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="2 3" />
      <circle cx="60" cy="58" r="33" fill="#fff" />
      <foreignObject x="38" y="36" width="44" height="44">
        <div style={{ width: 44, height: 44, display: "grid", placeItems: "center", color }}>
          <HouseIcon house={house} size={30} />
        </div>
      </foreignObject>
    </svg>
  )
}
