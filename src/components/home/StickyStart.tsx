"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight } from "@phosphor-icons/react"
import { START_HREF, START_LABEL } from "@/lib/routes"

export function StickyStart() {
  const [pastHero, setPastHero] = useState(false)
  const [formInView, setFormInView] = useState(false)
  const visible = pastHero && !formInView

  useEffect(() => {
    const heroCta = document.querySelector("#start .starter")
    const form = document.querySelector("#start-here")
    if (!heroCta || !form) return
    const heroObserver = new IntersectionObserver(([entry]) =>
      setPastHero(!entry.isIntersecting && entry.boundingClientRect.bottom < 0),
    )
    const formObserver = new IntersectionObserver(([entry]) => setFormInView(entry.isIntersecting))
    heroObserver.observe(heroCta)
    formObserver.observe(form)
    return () => {
      heroObserver.disconnect()
      formObserver.disconnect()
    }
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-surface/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <Link href={START_HREF} className="starter w-full" tabIndex={visible ? 0 : -1}>
        {START_LABEL}
        <ArrowRight size={20} weight="bold" aria-hidden="true" />
      </Link>
    </div>
  )
}
