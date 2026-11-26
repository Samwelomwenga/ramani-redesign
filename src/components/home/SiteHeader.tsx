import Link from "next/link"
import { GlobeSimple, List } from "@phosphor-icons/react/dist/ssr"
import { Logo } from "@/components/brand/Logo"
import { START_HREF } from "@/lib/routes"

const links = [
  { href: "#start-here", label: "Get started" },
  { href: "/tools/senior-school-finder", label: "Senior schools" },
  { href: "/schools", label: "For schools" },
  { href: "/articles", label: "Articles" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
]

export function SiteHeader() {
  return (
    <header className="relative z-20">
      <div className="wrap flex h-18 items-center justify-between gap-6">
        <Logo tone="light" />
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.9375rem] font-medium text-sky transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="hidden items-center gap-1.5 rounded-lg px-2 py-1.5 text-[0.9375rem] font-medium text-sky hover:text-white sm:flex"
            aria-label="Language: English"
          >
            <GlobeSimple size={18} weight="duotone" aria-hidden="true" />
            EN
          </button>
          <Link href="/login" className="hidden text-[0.9375rem] font-semibold text-chalk sm:inline">
            Sign in
          </Link>
          <Link
            href={START_HREF}
            className="hidden min-h-10 items-center rounded-[10px] bg-chalk px-4 text-[0.9375rem] font-semibold text-field transition-colors hover:bg-white md:inline-flex"
          >
            Get started
          </Link>
          <details className="relative lg:hidden">
            <summary
              className="flex size-11 cursor-pointer list-none items-center justify-center rounded-[10px] text-chalk [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <List size={26} aria-hidden="true" />
            </summary>
            <div className="absolute right-0 top-12 w-64 rounded-[14px] bg-surface p-2 shadow-lifted">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-3 font-medium text-ink hover:bg-ground"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/career-change" className="block rounded-lg px-3 py-3 font-medium text-ink hover:bg-ground">
                Changing career?
              </Link>
              <Link href="/login" className="block rounded-lg px-3 py-3 font-semibold text-cta hover:bg-ground">
                Sign in
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
