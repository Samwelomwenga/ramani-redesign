import Link from "next/link"
import { FacebookLogo, InstagramLogo, TiktokLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import { Logo } from "@/components/brand/Logo"
import { WHATSAPP_HREF } from "@/lib/routes"

const socials = [
  { href: "https://www.facebook.com/profile.php?id=61593651404478", label: "Facebook", icon: FacebookLogo },
  { href: "https://www.instagram.com/elimuquestkenya/", label: "Instagram", icon: InstagramLogo },
  { href: "https://www.tiktok.com/@ramaniappke", label: "TikTok", icon: TiktokLogo },
]

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/data-protection", label: "Data Protection" },
  { href: "/terms", label: "Terms of Service" },
]

const columns = [
  {
    title: "Explore platform",
    links: [
      { href: "#how", label: "How it works" },
      { href: "/assessments", label: "More assessments" },
      { href: "/articles", label: "Insights and articles" },
    ],
  },
  {
    title: "For schools and parents",
    links: [
      { href: "/schools", label: "Bring Ramani to your school" },
      { href: "/challenges", label: "Educational challenges" },
      { href: "/pricing", label: "Institutional pricing" },
      { href: "/faq", label: "Frequently asked questions" },
      { href: "/get-started", label: "Free sample portal" },
      { href: "/developers", label: "For developers" },
      { href: "/dashboard/affiliate", label: "Earn with Ramani, become an affiliate", highlight: true },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-field-deep pb-28 pt-16 text-chalk-soft md:pb-12">
      <div className="wrap grid gap-12 lg:grid-cols-[1.3fr_2fr_1.3fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-[22rem] text-meta">
            Ramani helps African schools manage daily operations and guide every student toward a purposeful career, backed by science-based career research.
          </p>
          <p className="mt-6 text-meta font-semibold text-chalk">Chat with us on WhatsApp</p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-[#25D366] px-4 text-meta font-semibold text-ink transition-colors hover:bg-[#3ee07c]"
          >
            <WhatsappLogo size={20} weight="fill" aria-hidden="true" /> +254 182 323 902
          </a>
          <p className="mt-7 text-meta font-semibold text-chalk">Follow us</p>
          <ul className="mt-2 flex gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full bg-white/10 text-chalk transition-colors hover:bg-white/20 hover:text-white"
                >
                  <Icon size={20} weight="fill" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-meta font-semibold text-chalk">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-meta transition-colors hover:text-white ${"highlight" in link ? "font-semibold text-[#34d399]" : ""}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <form className="max-w-[22rem]">
          <label htmlFor="newsletter" className="text-meta font-semibold text-chalk">
            Stay informed
          </label>
          <p className="mt-1 text-meta">A short weekly email on choosing a path in Kenya: pathways, deadlines and what the grades actually require. Unsubscribe in one click.</p>
          <div className="mt-4 flex gap-2">
            <input
              id="newsletter"
              type="email"
              placeholder="you@example.com"
              className="min-h-11 min-w-0 flex-1 rounded-[10px] border border-white/20 bg-white/5 px-3 text-meta text-chalk placeholder:text-chalk-soft/70"
            />
            <button type="submit" className="min-h-11 rounded-[10px] bg-chalk px-4 text-meta font-semibold text-field">
              Join
            </button>
          </div>
        </form>
      </div>
      <div className="wrap mt-14">
        <div className="flex flex-col gap-4 rounded-[14px] bg-white/5 px-5 py-4 text-[0.8125rem]">
          <Link href="/data-protection" className="transition-colors hover:text-white">
            Registered with the Office of the Data Protection Commissioner · Data controller 28720 · Data processor 28721
          </Link>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Ramani. All rights reserved. Backed by science-based career research.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
