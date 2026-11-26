import Link from "next/link"
import { CheckCircle, X } from "@phosphor-icons/react"
import { Logo } from "@/components/brand/Logo"

type FocusHeaderProps = {
  saved?: boolean
  tone?: "light" | "dark"
}

export function FocusHeader({ saved = false, tone = "dark" }: FocusHeaderProps) {
  const light = tone === "light"
  return (
    <header className="flex h-16 items-center justify-between gap-4">
      <Logo tone={light ? "light" : "dark"} />
      <div className="flex items-center gap-3">
        {saved && (
          <span className={`hidden items-center gap-1.5 text-meta sm:flex ${light ? "text-chalk-soft" : "text-ink-muted"}`}>
            <CheckCircle size={18} weight="duotone" className="text-house-makers" aria-hidden="true" />
            Progress saved
          </span>
        )}
        <Link
          href="/"
          className={`flex min-h-11 items-center gap-1.5 rounded-[10px] px-3 text-meta font-semibold ${
            light ? "text-chalk hover:bg-white/10" : "text-ink-soft hover:bg-surface"
          }`}
        >
          <X size={18} weight="bold" aria-hidden="true" />
          Exit
        </Link>
      </div>
    </header>
  )
}
