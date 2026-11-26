import type { Metadata, Viewport } from "next"
import { instrumentSans } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ramani · Career assessment for CBC learners",
  description:
    "A 12-minute career assessment for CBC learners. See your child's top interest areas free, then unlock careers and a senior-school pathway.",
}

export const viewport: Viewport = {
  themeColor: "#1b294b",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body>{children}</body>
    </html>
  )
}
