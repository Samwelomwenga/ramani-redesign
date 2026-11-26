---
name: Ramani
description: Career assessment homepage for Kenyan students and parents, built as committed brand-colour fields
colors:
  ramani-blue: "#2563eb"
  ramani-blue-press: "#1d4ed8"
  school-navy: "#1b294b"
  school-navy-deep: "#131e38"
  logo-amber: "#f59e0b"
  amber-deep: "#9a5b05"
  amber-wash: "#fff4dc"
  blue-wash: "#e3ecff"
  sky-text: "#eef4ff"
  ink: "#0f1729"
  ink-soft: "#3d4a63"
  ink-muted: "#5b6780"
  surface: "#ffffff"
  ground: "#edf2fc"
  rule: "#dde3ec"
  chalk: "#f4f7fc"
  chalk-soft: "#b9c3d9"
  clay: "#c2410c"
  teal: "#0d9488"
  rose: "#db2777"
typography:
  display:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 80"
  headline:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.4rem + 1.9vw, 3rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 80"
  title:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 80"
  lead:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  control: "14px"
  card: "20px"
  pill: "9999px"
spacing:
  gutter-mobile: "16px"
  gutter: "32px"
  section: "80px"
  section-lg: "112px"
  container: "76rem"
components:
  button-primary:
    backgroundColor: "{colors.ramani-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.ramani-blue-press}"
  button-on-blue:
    backgroundColor: "{colors.logo-amber}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "28px"
  chip:
    backgroundColor: "{colors.blue-wash}"
    textColor: "{colors.ramani-blue}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
---

# Design System: Ramani

## Overview

**Creative direction: "The Bright Classroom Wall"**

Ramani's homepage is the category standard for a free personality-style test, built to the polish of 16Personalities, Duolingo, Khan Academy and Brilliant. Whole sections are solid brand colour. The page moves from a blue hero to an amber band, pale blue, white, navy, amber wash and navy again, so it never reads as a white page with accents. White appears as cards sitting on colour, and as one breathing section for the step images.

The content is the live ramani.app copy, Ramani's own photographs and illustrations, and the Caroline Mutoko video playing inline. Colour fields meet on soft convex curves rather than ruled lines. The first viewport proves the product by letting the visitor answer a real question from the test.

**Key Characteristics:**
- Committed colour fields, one per section, with white cards on top.
- Curved field edges, no dividers or rules.
- Real imagery at large size, never thumbnails.
- Instrument Sans condensed for every heading.
- One action label everywhere: "Take the Test".

## Colors

Three brand colours own whole regions. Supporting hues give each tool, step and grade its own identity.

### Primary
- **Ramani Blue** (`ramani-blue`): the hero field, primary buttons, links, the schools band and selected states.
- **School Navy** (`school-navy`, `school-navy-deep`): the proof section, the career-change section, the footer and dark cards.

### Secondary
- **Logo Amber** (`logo-amber`): the stats band, the primary button whenever it sits on a blue field, and the large proof numbers on navy.
- **Amber Wash** (`amber-wash`): the partners and schools sections.

### Tertiary
- **Clay, Teal, Rose** (`clay`, `teal`, `rose`): identity colours for the four steps, the three free tools and the grade cards. They are solid card fills or tinted image mats, never text on white below 4.5:1.

### Neutral
- **Blue Wash** (`blue-wash`): the start-here and free-tools sections.
- **Sky Text** (`sky-text`): secondary text on Ramani Blue (4.6:1).
- **Ink, Ink Soft, Ink Muted**: text on light grounds.
- **Chalk Soft** (`chalk-soft`): secondary text on navy.

### Named Rules
**The Field Rule.** Every section owns one solid field colour. A section that is white needs a reason, such as photographs that need neutral space.

**The No-Line Rule.** Never separate regions with rules or dividers. Change the field colour, curve the edge, or use space.

## Typography

**Display Font:** Instrument Sans at 80% width, weight 650.
**Body Font:** Instrument Sans at normal width, weight 400.

**Character:** One family. Headings are condensed and confident, and body text stays open and readable on low-end phones.

### Hierarchy
- **Display** (650, fluid 2.5 to 4.5rem, 1.02): the hero headline only.
- **Headline** (650, fluid 1.875 to 3rem, 1.08): section headings.
- **Title** (650, 1.375rem, 1.25): card and sub-section headings. Step and tool titles step up to 1.5 to 2rem.
- **Lead** (400, 1.1875rem, 1.55): section intros and testimonials, max about 36rem.
- **Body** (400, 1rem, 1.6): running copy.
- **Label** (600, 0.875rem): meta lines and chips. Sentence case, no tracking.

### Named Rules
**The No-Kicker Rule.** Headings stand alone. There are no eyebrow labels above them.

## Layout

The container is 76rem wide, with a 16px gutter on mobile and 32px from 640px. Sections use 80px vertical padding, or 112px from 1024px. A section that starts with a curved edge adds about 32px more at the top. The hero is a two-column split: copy on the left, and on the right the live question card with the student cutout standing behind it. How-it-works alternates image and text in a zigzag. Proof splits testimonials and the video, with the video first on mobile. Everything collapses to one column below 768px, and the mobile layout keeps every section.

## Elevation & Depth

Depth is soft and ambient. Cards lift off colour fields with offset, blurred shadows. There are no hard offset shadows and no glow halos.

### Shadow Vocabulary
- **Raised** (`0 1px 2px rgb(15 23 41 / .06), 0 8px 24px -8px rgb(15 23 41 / .14)`): cards on light fields.
- **Lifted** (`0 2px 4px rgb(15 23 41 / .08), 0 18px 40px -12px rgb(15 23 41 / .28)`): photos, video, the start-here card.
- **Hero card** (`0 30px 60px -20px rgb(15 23 41 / .5)`): the question card on blue.

## Shapes

Generously rounded. Controls are 14px, cards and photos 20px, chips are pills. Step photos sit on a tinted mat rotated plus or minus 2 degrees, which is the one playful shape in the system. Field edges are a single convex curve, 32px tall on mobile and 64px from 640px.

## Components

### Buttons
- **Shape:** gently rounded (14px), 52px tall.
- **Primary:** Ramani Blue with white text and a soft blue shadow. It darkens to the press blue on hover and drops 1px when pressed.
- **On blue:** Logo Amber with ink text. Use it whenever the button sits on a Ramani Blue field.
- **Text link:** white or blue text with a translucent underline that turns solid on hover.

### Chips
- **Style:** pill. Blue Wash with blue text on light grounds, white at 55% on amber, white at 20% on solid tool cards.

### Cards / Containers
- **Corner Style:** 20px.
- **Background:** white on colour fields, or a solid identity colour with white text for the free tools.
- **Shadow Strategy:** Raised, Lifted on hover.
- **Border:** none.

### Inputs / Fields
- **Style:** 2px border in the rule colour, 10 to 14px radius, white fill.
- **Selected:** border in the option's identity colour, a tint of that colour, and a check mark.

### Navigation
- **Style:** white logo tile and sky-text links on the navy hero. The mobile menu is a details disclosure holding a white card.

### Hero photo
The hero's signature. A photo of a student in school uniform, pen at the chin, sits in a 4:5 frame with a soft white ring. White chips for six career areas float around it: Science, Arts, Technology, Medicine, Law and Music. Below 640px the chips sit inside the frame so nothing leaves the screen.

## Do's and Don'ts

### Do:
- **Do** use the live ramani.app copy and assets, and fix only typos, "&amp;" and dashes.
- **Do** give each section a solid field colour, and meet fields on the curved edge.
- **Do** put the amber button on blue fields and the blue button everywhere else.
- **Do** play videos inline with poster and controls, muted autoplay in view, never under reduced motion.

### Don't:
- **Don't** add rules, dividers or lane lines.
- **Don't** add eyebrow labels above headings.
- **Don't** use gradient text, glow halos or hard offset shadows.
- **Don't** shrink Ramani's photos into thumbnails or icon bubbles.
- **Don't** invent claims, labels or statistics the live site does not make.
