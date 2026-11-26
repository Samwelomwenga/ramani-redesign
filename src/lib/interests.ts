export type InterestId = "realistic" | "investigative" | "artistic" | "social" | "enterprising" | "conventional"

export type Interest = {
  id: InterestId
  name: string
  riasec: string
  color: string
  icon: "Wrench" | "MagnifyingGlass" | "PaintBrush" | "HandHeart" | "Megaphone" | "ListChecks"
  loves: string
  careers: string[]
  pathway: string
}

export const interests: Interest[] = [
  {
    id: "realistic",
    name: "Hands-on",
    riasec: "Realistic",
    color: "#15803d",
    icon: "Wrench",
    loves: "Building, fixing and working with your hands",
    careers: ["Civil engineer", "Electrician", "Pilot", "Agronomist"],
    pathway: "STEM",
  },
  {
    id: "investigative",
    name: "Curious",
    riasec: "Investigative",
    color: "var(--color-cta)",
    icon: "MagnifyingGlass",
    loves: "Asking why and working out how things work",
    careers: ["Doctor", "Lab scientist", "Software developer", "Pharmacist"],
    pathway: "STEM",
  },
  {
    id: "artistic",
    name: "Creative",
    riasec: "Artistic",
    color: "var(--color-clay)",
    icon: "PaintBrush",
    loves: "Drawing, music, stories and new ideas",
    careers: ["Architect", "Graphic designer", "Journalist", "Musician"],
    pathway: "Arts and Sports Science",
  },
  {
    id: "social",
    name: "Caring",
    riasec: "Social",
    color: "var(--color-rose)",
    icon: "HandHeart",
    loves: "Looking after people and helping them learn",
    careers: ["Teacher", "Nurse", "Counsellor", "Social worker"],
    pathway: "Social Sciences",
  },
  {
    id: "enterprising",
    name: "Leading",
    riasec: "Enterprising",
    color: "var(--color-gold-deep)",
    icon: "Megaphone",
    loves: "Leading a team, selling and starting things",
    careers: ["Entrepreneur", "Lawyer", "Marketing manager", "Hotel manager"],
    pathway: "Social Sciences",
  },
  {
    id: "conventional",
    name: "Organising",
    riasec: "Conventional",
    color: "var(--color-teal)",
    icon: "ListChecks",
    loves: "Planning, sorting and getting details right",
    careers: ["Accountant", "Banker", "Data analyst", "Procurement officer"],
    pathway: "STEM",
  },
]

export function getInterest(id: InterestId): Interest {
  const interest = interests.find((i) => i.id === id)
  if (!interest) throw new Error(`Unknown interest: ${id}`)
  return interest
}
