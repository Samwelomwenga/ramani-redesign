import Image from "next/image"
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr"

const partners = [
  {
    src: "/partners/uniconnect.svg",
    alt: "UniConnect Centre",
    width: 168,
    height: 50,
    body: "Places Kenyan students in universities abroad: applications, visa guidance and pre-departure support.",
  },
  {
    src: "/partners/bridgetalent.png",
    alt: "BridgeTalent Management",
    width: 190,
    height: 44,
    body: "HR and recruitment firm offering structured hiring and staff assessment for employers in Kenya.",
  },
]

export function PartnersSection() {
  return (
    <section className="bg-gold-wash py-20 lg:py-24">
      <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-16">
        <div>
          <h2 className="text-headline">Who we work with</h2>
          <p className="mt-4 text-lead text-ink-soft">Partners help students act on a decision.</p>
          <p className="mt-5 flex items-start gap-3 rounded-[14px] bg-surface p-5 text-ink-soft shadow-raised">
            <ShieldCheck size={26} weight="duotone" className="shrink-0 text-teal" aria-hidden="true" />
            <span>
              They never influence it. No partnership changes which careers your report ranks, or
              whether it recommends studying at home or abroad.
            </span>
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2">
          {partners.map((p) => (
            <li key={p.alt} className="flex flex-col rounded-[14px] bg-surface p-7 shadow-raised">
              <div className="flex h-16 items-center">
                <Image unoptimized src={p.src} alt={p.alt} width={p.width} height={p.height} className="h-11 w-auto" />
              </div>
              <p className="mt-5 text-ink-soft">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
