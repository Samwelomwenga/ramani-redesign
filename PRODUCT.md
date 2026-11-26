# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 15 App Router, TypeScript, Tailwind v4 with brand tokens in `@theme`. Instrument Sans via `next/font`. Icons from `@phosphor-icons/react`. Quiz state is client-side `useReducer`, no backend. A `?state=` query param jumps to any quiz screen for screenshots. Chosen by the user on 2026-11-25.

## Users

- Parents of CBC learners in Kenya. They decide and pay. They land on the homepage, often on a mid-range Android phone, and want to know which senior-school pathway fits their child before choosing subjects or schools.
- Children in Grade 4-6 (ages 9-12) take the assessment, usually with a parent beside them.
- Schools are a second buyer. They request an in-school assessment visit.
- Adults changing career are a third audience with their own page.

## Product Purpose

Ramani is a career assessment for CBC (now CBE) learners. A child answers about 24 scenario screens. Ramani scores them on Holland RIASEC interest types and returns ranked career matches, a senior-school pathway, and next steps. Success is a parent who finishes the quiz with their child and unlocks the full report.

## Positioning

Built for the Kenyan CBC pathway decision: results map to CBC senior-school tracks (STEM, Social Sciences, Arts and Sports Science), use Kenyan careers, and are paid by M-Pesa.

## Operating Context

- This repo is a design submission for ElimuQuest's candidate assignment, due Friday 27 November 2026. Deliverable is screenshots at 1440px and 390px plus a one-page rationale, sent as one PDF to info@ramani.app.
- Users are on mid-range Android phones with costly mobile data. WhatsApp is the common sharing channel.
- The real quiz screen: each question shows 4 activities rated on a 5-step scale, then "If you could only do one of these, which would you pick?". Progress autosaves. A parent banner asks guardians to help.

## Capabilities and Constraints

- Assessment: 24 questions for Grade 4-6, about 12 minutes, RIASEC engine, autosave and resume, Previous button.
- After the last question: computing step, optional 8-question Values Check, then a KES 1,249 M-Pesa unlock for the full report. Affiliate codes give 10% off.
- Other features that must stay reachable: senior-school finder, grade checker, calculator, adult career-change flow, articles, schools visit request, FAQ, pricing, language picker, WhatsApp chat, newsletter, ODPC registration.
- In scope: homepage (desktop and mobile), assessment start, quiz screens, finish sequence, free result, parent unlock screen.
- Out of scope: the full paid report page, audio and Kiswahili toggle, the inner pages of `/tools` and `/career-change`.
- Proposal, not current behaviour: the child gives only a nickname and grade before question 1; the parent gives phone or email at the save step (Kenya Data Protection Act s.33 parental consent).

## Brand Commitments

- Name "Ramani". Logo: blue "R" mark with a yellow dot, wordmark in bold sans.
- Colors kept from the live site: navy #1B294B, blue #2563EB, amber #F59E0B (from the logo dot). The live three-stop gradient is retired.
- Font: Instrument Sans, set the way laneway-ui sets it.
- Voice: plain and direct. The live site's "There are no wrong answers" tone is worth keeping.

## Evidence on Hand

- Stats on the live site: "200+ Schools", "50K+ Assessments Done", "4.9★", "1,088+ students have taken the Ramani assessment". Both numbers are used as-is; reconciling them is out of scope.
- Partners: UniConnect Centre (study abroad, uniconnectcentre.com) and BridgeTalent Management (HR and recruitment). Caroline Mutoko, media personality, appears as a Ramani partner in a creator video.
- Schools in the trust ribbon: Sunrise Academy, Lakeside High, Crescent Girls, Valley Primary, Metro College, Greenfield School. No logos found; shown as monograms.
- Testimonials: Brian (Grade 12), Aisha (Grade 10), Wanjiku (Grade 9).
- Real question 24 items: "Sitting with someone who is frightened", "Running a food stall at the fair", "Making something beautiful with others", "Writing the rules down clearly".
- Live-site screenshots: scratchpad `ramani/` folder of this session.
- Do not invent guarantees, discounts, timers, or new statistics. Sample questions other than question 24 are marked as samples in the rationale.

## Product Principles

1. The parent decides, the child plays. Homepage copy persuades the parent; quiz screens speak to a 9-year-old.
2. Value before ask. The child sees a real result before anyone is asked to pay or share contact details.
3. One path at a time. One CTA label, one decision per moment, no dashboard noise during the quiz.
4. Honest progress. Count finished screens, name the section, never show 100% before the last answer.
5. Light on data. No hero video, small font payload, works on a mid-range Android.

## Accessibility & Inclusion

WCAG 2.2 AA. Tap targets of 48px or larger on quiz inputs. No auto-advance (WCAG 3.2.2). Native `<progress>` with `aria-valuetext`; focus moves to the new screen heading. Respect `prefers-reduced-motion`. Reading level for quiz copy aimed at Grade 4.
