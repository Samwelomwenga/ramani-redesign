"use client"

import { useEffect, useId, useRef, useState, type FormEvent } from "react"
import { ChatCircle, PaperPlaneTilt, WhatsappLogo, X } from "@phosphor-icons/react"
import { WHATSAPP_HREF } from "@/lib/routes"

const fieldClass =
  "w-full rounded-[12px] border-2 border-transparent bg-ground px-3.5 text-ink placeholder:text-ink-muted transition-colors focus:border-cta focus:bg-surface focus:outline-none"

export function FeedbackWidget() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const panelId = useId()
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!open) return
    headingRef.current?.focus()
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {open && (
        <section
          id={panelId}
          aria-labelledby={`${panelId}-title`}
          className="w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-[20px] bg-surface text-ink shadow-[0_24px_48px_-16px_rgb(15_23_41/0.45)]"
        >
          <div className="bg-cta px-5 py-4 text-white">
            <h2 id={`${panelId}-title`} ref={headingRef} tabIndex={-1} className="text-title focus:outline-none">
              Talk to us
            </h2>
            <p className="mt-0.5 text-meta text-sky">Questions, complaints or feedback. We&apos;ll text you back.</p>
          </div>

          {sent ? (
            <p className="px-5 py-8 text-center text-ink-soft" role="status">
              Message sent. We&apos;ll text you back.
            </p>
          ) : (
            <form onSubmit={send} className="space-y-4 px-5 py-5">
              <div>
                <label htmlFor={`${panelId}-name`} className="text-meta font-semibold">
                  Your name <span className="font-normal text-ink-muted">(optional)</span>
                </label>
                <input id={`${panelId}-name`} name="name" autoComplete="name" placeholder="Jane Wanjiru" className={`${fieldClass} mt-1.5 h-11`} />
              </div>
              <div>
                <label htmlFor={`${panelId}-phone`} className="text-meta font-semibold">
                  Phone number
                </label>
                <input id={`${panelId}-phone`} name="phone" type="tel" required autoComplete="tel" placeholder="07XX XXX XXX" className={`${fieldClass} mt-1.5 h-11`} />
              </div>
              <div>
                <label htmlFor={`${panelId}-message`} className="text-meta font-semibold">
                  How can we help?
                </label>
                <textarea id={`${panelId}-message`} name="message" required rows={3} placeholder="Tell us what's on your mind..." className={`${fieldClass} mt-1.5 resize-none py-2.5`} />
              </div>
              <button type="submit" className="starter w-full">
                <PaperPlaneTilt size={18} weight="bold" aria-hidden="true" />
                Send message
              </button>
              <p className="text-center text-meta text-ink-muted">We only use your number to reply to you.</p>
              <p className="flex items-center gap-3 text-meta text-ink-muted" aria-hidden="true">
                <span className="h-0.5 flex-1 rounded-full bg-ground" />
                or
                <span className="h-0.5 flex-1 rounded-full bg-ground" />
              </p>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-12 items-center justify-center gap-2 rounded-[14px] border-2 border-[#1faa52] font-semibold text-[#15803d] transition-colors hover:bg-[#25D366]/10"
              >
                <WhatsappLogo size={20} weight="fill" aria-hidden="true" />
                Chat with us on WhatsApp
              </a>
            </form>
          )}
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? "Close feedback" : "Send us feedback"}
        className="grid size-14 place-items-center rounded-full bg-cta text-white shadow-[0_12px_28px_-8px_rgb(37_99_235/0.7)] ring-4 ring-white/70 transition-colors hover:bg-cta-press"
      >
        {open ? <X size={24} weight="bold" aria-hidden="true" /> : <ChatCircle size={26} weight="bold" aria-hidden="true" />}
      </button>
    </div>
  )
}
