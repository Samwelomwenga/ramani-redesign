import { useEffect, useRef } from "react"

export function useFocusOnMount<T extends HTMLElement>(key: unknown) {
  const ref = useRef<T>(null)
  useEffect(() => {
    ref.current?.focus({ preventScroll: false })
  }, [key])
  return ref
}
