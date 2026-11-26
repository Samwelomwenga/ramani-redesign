import { Hero } from "@/components/home/Hero"
import { StartHere } from "@/components/home/StartHere"
import { HowItWorks } from "@/components/home/HowItWorks"
import { ProofSection } from "@/components/home/ProofSection"
import { PartnersSection } from "@/components/home/PartnersSection"
import { FreeTools } from "@/components/home/FreeTools"
import { CareerChange } from "@/components/home/CareerChange"
import { SchoolsBand } from "@/components/home/SchoolsBand"
import { SiteFooter } from "@/components/home/SiteFooter"
import { StickyStart } from "@/components/home/StickyStart"
import { FeedbackWidget } from "@/components/home/FeedbackWidget"

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <StartHere />
        <HowItWorks />
        <ProofSection />
        <PartnersSection />
        <FreeTools />
        <CareerChange />
        <SchoolsBand />
      </main>
      <SiteFooter />
      <StickyStart />
      <FeedbackWidget />
    </>
  )
}
