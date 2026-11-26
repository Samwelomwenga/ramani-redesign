import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { RAMANI_ASSETS, START_HREF, START_LABEL } from "@/lib/routes"

const steps = [
  {
    tag: "Confused",
    title: "Overwhelmed by choices",
    body: "Middle-grade students start out confused about which career path to pursue, surrounded by dozens of possibilities during classroom and lab activities.",
    image: "step1-confused-DS-LJQCL.jpg",
    alt: "Students surrounded by signs for many different careers",
    color: "var(--color-teal)",
  },
  {
    tag: "Up to 45 questions",
    title: "Interacting with Ramani",
    body: "Answering up to 45 grade-tailored questions on the Ramani system. Dozens of career possibilities narrow down into a structured shortlist.",
    image: "step2-questions-C1utv603.jpg",
    alt: "Students answering questions on a laptop",
    color: "var(--color-cta)",
  },
  {
    tag: "Narrowing down",
    title: "Refine with values",
    body: "An 8-question forced-choice assessment settles close calls. Top career choices narrow down to your ideal fit.",
    image: "step3-values-CEBAg5Pm.jpg",
    alt: "Students comparing career options together",
    color: "var(--color-clay)",
  },
  {
    tag: "Confident and ready",
    title: "Clear career direction",
    body: "You walk away with clear direction about your career path, and answers explaining why it fits.",
    image: "step4-confident-Bb0m6wsx.jpg",
    alt: "A confident student in front of a Ramani screen",
    color: "var(--color-rose)",
  },
]

export function HowItWorks() {
  return (
    <section
      id="how"
      className="overflow-hidden py-20 lg:py-28"
      style={{
        background: [
          "radial-gradient(60rem 40rem at 100% 18%, rgb(37 99 235 / 0.14), transparent 70%)",
          "radial-gradient(50rem 36rem at 0% 62%, rgb(13 148 136 / 0.2), transparent 70%)",
          "linear-gradient(180deg, var(--color-cta-wash) 0%, #f4f7ff 45%, var(--color-gold-wash) 100%)",
        ].join(", "),
      }}
    >
      <div className="wrap">
        <div className="mx-auto max-w-[44rem] text-center">
          <h2 className="text-headline">From confused to confident.</h2>
          <p className="mt-5 text-lead text-ink-soft">
            Every student starts overwhelmed by dozens of possible paths. Four quick steps later,
            you walk away knowing where you fit, and why.
          </p>
        </div>

        <ol className="mx-auto mt-16 max-w-[64rem] space-y-16 lg:space-y-24">
          {steps.map((step, i) => (
            <li key={step.title} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div
                  className="absolute -inset-2 rounded-[28px] sm:-inset-4"
                  style={{ background: `color-mix(in srgb, ${step.color} 18%, white)`, transform: `rotate(${i % 2 ? 2 : -2}deg)` }}
                  aria-hidden="true"
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-lifted">
                  <Image
                    src={`${RAMANI_ASSETS}/assets/${step.image}`}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 768px) 30rem, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="flex items-center gap-3">
                  <span
                    className="grid size-11 place-items-center rounded-full text-[1.25rem] font-[650] text-white"
                    style={{ background: step.color }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="font-semibold" style={{ color: step.color }}>
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.tag}
                  </span>
                </p>
                <h3 className="mt-4 text-[2rem] leading-tight">{step.title}</h3>
                <p className="mt-3 max-w-[30rem] text-lead text-ink-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 flex justify-center">
          <Link href={START_HREF} className="starter">
            {START_LABEL}
            <ArrowRight size={20} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
