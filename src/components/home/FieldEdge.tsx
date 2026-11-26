type FieldEdgeProps = {
  color: string
  flip?: boolean
}

export function FieldEdge({ color, flip = false }: FieldEdgeProps) {
  return (
    <svg
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 h-8 w-full sm:h-16 ${flip ? "top-0 rotate-180" : "bottom-0"}`}
      aria-hidden="true"
    >
      <path d="M0 64 V40 C 360 0, 1080 0, 1440 40 V64 Z" fill={color} />
    </svg>
  )
}
