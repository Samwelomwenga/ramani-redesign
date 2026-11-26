export type HouseId = "makers" | "explorers" | "creators" | "helpers" | "leaders" | "organisers"

export type House = {
  id: HouseId
  name: string
  interest: string
  colorVar: string
  loves: string
  careers: string[]
  pathway: string
}

export const houses: House[] = [
  {
    id: "makers",
    name: "Makers",
    interest: "Realistic",
    colorVar: "var(--color-house-makers)",
    loves: "Building, fixing and working with their hands",
    careers: ["Civil engineer", "Electrician", "Pilot", "Agronomist"],
    pathway: "STEM",
  },
  {
    id: "explorers",
    name: "Explorers",
    interest: "Investigative",
    colorVar: "var(--color-house-explorers)",
    loves: "Asking why and working out how things work",
    careers: ["Doctor", "Lab scientist", "Software developer", "Pharmacist"],
    pathway: "STEM",
  },
  {
    id: "creators",
    name: "Creators",
    interest: "Artistic",
    colorVar: "var(--color-house-creators)",
    loves: "Drawing, music, stories and new ideas",
    careers: ["Architect", "Graphic designer", "Journalist", "Musician"],
    pathway: "Arts and Sports Science",
  },
  {
    id: "helpers",
    name: "Helpers",
    interest: "Social",
    colorVar: "var(--color-house-helpers)",
    loves: "Caring for people and helping them learn",
    careers: ["Teacher", "Nurse", "Counsellor", "Social worker"],
    pathway: "Social Sciences",
  },
  {
    id: "leaders",
    name: "Leaders",
    interest: "Enterprising",
    colorVar: "var(--color-house-leaders)",
    loves: "Leading a team, selling and starting things",
    careers: ["Entrepreneur", "Lawyer", "Marketing manager", "Hotel manager"],
    pathway: "Social Sciences",
  },
  {
    id: "organisers",
    name: "Organisers",
    interest: "Conventional",
    colorVar: "var(--color-house-organisers)",
    loves: "Planning, sorting and getting details right",
    careers: ["Accountant", "Banker", "Data analyst", "Procurement officer"],
    pathway: "STEM",
  },
]

export function getHouse(id: HouseId): House {
  const house = houses.find((h) => h.id === id)
  if (!house) throw new Error(`Unknown house: ${id}`)
  return house
}
