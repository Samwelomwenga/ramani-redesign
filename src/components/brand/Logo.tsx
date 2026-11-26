import Image from "next/image"
import Link from "next/link"

type LogoProps = {
  tone?: "light" | "dark"
}

export function Logo({ tone = "dark" }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Ramani home">
      <span className={`grid size-8 place-items-center rounded-lg ${tone === "light" ? "bg-chalk" : ""}`}>
        <Image src="/brand/ramani-mark.png" alt="" width={tone === "light" ? 24 : 30} height={tone === "light" ? 24 : 30} priority />
      </span>
      <span
        className={`text-[1.3rem] font-bold tracking-[-0.02em] ${tone === "light" ? "text-chalk" : "text-ink"}`}
        style={{ fontStretch: "85%" }}
      >
        Ramani
      </span>
    </Link>
  )
}
