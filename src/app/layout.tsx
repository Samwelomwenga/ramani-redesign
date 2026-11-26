import type { Metadata, Viewport } from "next"
import { instrumentSans } from "./fonts"
import "./globals.css"

const description =
  "A quick, science-backed assessment of about 10 minutes that tells a student which careers genuinely fit them, with a ranked report emailed straight to their inbox."

export const metadata: Metadata = {
  title: {
    default: "Ramani · Career assessment for CBC learners",
    template: "%s · Ramani",
  },
  description,
  applicationName: "Ramani",
  openGraph: {
    type: "website",
    siteName: "Ramani",
    locale: "en_KE",
    title: "Help every student find their path",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Help every student find their path",
    description,
  },
  robots: { index: false, follow: false },
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
