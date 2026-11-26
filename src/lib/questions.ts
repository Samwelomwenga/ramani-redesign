import type { Activity, QuestionScreen } from "@/types/assessment"
import { houses, type HouseId } from "@/lib/houses"

export const SCREENS_PER_PART = 6
export const TOTAL_SCREENS = 24

export const parts = [
  { name: "School days", next: "Things you love" },
  { name: "Things you love", next: "Working with others" },
  { name: "Working with others", next: "Big dreams" },
  { name: "Big dreams", next: "" },
]

export const ratingLabels = ["No way", "Not really", "It's OK", "I like it", "Love it!"] as const

const pool: Record<HouseId, { label: string; icon: string }[]> = {
  makers: [
    { label: "Fixing a broken bicycle", icon: "Bicycle" },
    { label: "Building a model house", icon: "HouseLine" },
    { label: "Planting a vegetable garden", icon: "Plant" },
    { label: "Taking a radio apart", icon: "Radio" },
  ],
  explorers: [
    { label: "Finding out why it rains", icon: "CloudSun" },
    { label: "Doing a science experiment", icon: "Flask" },
    { label: "Solving a tricky puzzle", icon: "PuzzlePiece" },
    { label: "Watching insects up close", icon: "Bug" },
  ],
  creators: [
    { label: "Drawing a comic strip", icon: "PencilSimple" },
    { label: "Making up a song", icon: "MusicNotes" },
    { label: "Acting in a school play", icon: "MaskHappy" },
    { label: "Designing a new school badge", icon: "PaintBrush" },
  ],
  helpers: [
    { label: "Teaching a friend to read", icon: "BookOpen" },
    { label: "Looking after a sick pet", icon: "PawPrint" },
    { label: "Helping a new pupil settle in", icon: "HandWaving" },
    { label: "Visiting a grandparent who is unwell", icon: "Heart" },
  ],
  leaders: [
    { label: "Leading your team at sports day", icon: "Flag" },
    { label: "Selling snacks at the school fair", icon: "Storefront" },
    { label: "Planning a class trip", icon: "MapTrifold" },
    { label: "Speaking at assembly", icon: "Microphone" },
  ],
  organisers: [
    { label: "Keeping the class register", icon: "ListChecks" },
    { label: "Sorting books in the library", icon: "Books" },
    { label: "Counting money for a class party", icon: "Coins" },
    { label: "Making a timetable for the week", icon: "ClipboardText" },
  ],
}

const lastScreen: Activity[] = [
  { id: "q24-0", label: "Sitting with someone who is frightened", house: "helpers", icon: "Heart" },
  { id: "q24-1", label: "Running a food stall at the fair", house: "leaders", icon: "Storefront" },
  { id: "q24-2", label: "Making something beautiful with others", house: "creators", icon: "Palette" },
  { id: "q24-3", label: "Writing the rules down clearly", house: "organisers", icon: "Scroll" },
]

function buildScreen(index: number): QuestionScreen {
  const part = Math.floor(index / SCREENS_PER_PART)
  if (index === TOTAL_SCREENS - 1) {
    return { index, part, activities: lastScreen, real: true }
  }
  const variant = Math.floor(index / houses.length) % 4
  const activities = [0, 1, 2, 3].map((slot) => {
    const house = houses[(index + slot * 2 + Math.floor(slot / 2)) % houses.length]
    const item = pool[house.id][(variant + slot) % 4]
    return { id: `q${index + 1}-${slot}`, label: item.label, house: house.id, icon: item.icon }
  })
  return { index, part, activities, real: false }
}

export const questionScreens: QuestionScreen[] = Array.from({ length: TOTAL_SCREENS }, (_, i) => buildScreen(i))
