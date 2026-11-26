"use client"

import { useEffect, useRef } from "react"
import { RAMANI_ASSETS } from "@/lib/routes"

export function CreatorVideo() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.5 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      className="aspect-[478/850] w-full rounded-[14px] bg-field-deep object-cover shadow-lifted"
      src={`${RAMANI_ASSETS}/api/v1/media/carol_1.mp4`}
      poster={`${RAMANI_ASSETS}/api/v1/media/carol_1_poster.jpg`}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Caroline Mutoko talks about Ramani"
    />
  )
}
