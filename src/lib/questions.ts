import type { QuestionScreen } from "@/types/assessment"
import type { InterestId } from "@/lib/interests"

export const SCREENS_PER_PART = 6
export const TOTAL_SCREENS = 24
export const PARTS = 4
export const HALFWAY = TOTAL_SCREENS / 2

export const ratingLabels = ["Not for me", "Not really", "It's OK", "I like it", "I'd love this"] as const

const R: InterestId = "realistic"
const I: InterestId = "investigative"
const A: InterestId = "artistic"
const S: InterestId = "social"
const E: InterestId = "enterprising"
const C: InterestId = "conventional"

type Row = [prompt: string, items: [emoji: string, label: string, interest: InterestId][]]

const live: Row[] = [
  ["Which of these would you choose?", [["🖥️", "Laying out a page so it is easy to read", A], ["🧱", "Helping a classmate finish their model", S], ["⚖️", "Deciding on your own what is fair", E], ["🧮", "Working out which price is the better deal", C]]],
  ["Which would you rather do?", [["🍲", "Trying a new recipe and getting people to taste it", R], ["💬", "Explaining to a friend what went wrong", S], ["🩹", "Helping someone who has hurt themselves", S], ["🔬", "Finding out why the same cold spreads", I]]],
  ["Pick the one that sounds best.", [["🎹", "Playing a tune by ear", A], ["🏠", "Building a model house in a crazy design of your own", R], ["📋", "Keeping a list of who needs what", C], ["🎭", "Putting on a show for the school", E]]],
  ["Which would you be trusted with?", [["🌿", "Noticing which plants or pets look unwell", I], ["👕", "Choosing what the team should wear", A], ["📜", "Working out which rule applies here", C], ["🖨️", "Fixing the settings so the printer works", R]]],
  ["Which would you enjoy?", [["🎶", "Starting the song on a long journey", S], ["🦠", "Finding out how the body fights germs", I], ["📖", "Writing a story people want to finish", A], ["🥬", "Selling what you grew at the gate", E]]],
  ["Which would you pick?", [["🛖", "Designing and decorating your own den or playhouse", A], ["📐", "Drawing the plan before you build", R], ["🛏️", "Keeping the guest room ready and quiet", C], ["🎪", "Setting up a stall that looks good", E]]],
  ["Which sounds like you?", [["🌳", "Showing younger children how to plant and water a tree", S], ["✍️", "Writing down exactly what was agreed", C], ["🍱", "Arranging food so it looks lovely", A], ["🔧", "Taking a machine apart on your own", R]]],
  ["Which would you rather be?", [["🎤", "The one who leads the singing", A], ["🔍", "The one who spots the better bargain", I], ["📒", "The one who keeps the class notes", C], ["🗂️", "The one who decides who does what", E]]],
  ["Which would you put your hand up for?", [["🤔", "Working out which side of an argument is right", I], ["🧾", "Explaining to a trader how to count stock", S], ["🍛", "Making a plate of food look special", R], ["🥁", "Keeping a beat the others follow", A]]],
  ["Which would you take on?", [["🏫", "Showing visitors round the school", E], ["🏞️", "Finding out why the river changed colour", I], ["📝", "Writing a song or a poem", A], ["🐷", "Working out alone how to save up", C]]],
  ["Which of these is most like you?", [["🧵", "Sewing or mending until it is neat", R], ["📏", "Drawing where everything should go", C], ["💊", "Working out the right amount of medicine", I], ["👀", "Noticing a change in how someone looks", S]]],
  ["Which would you pick today?", [["🔤", "Teaching a rhyme that helps you remember", S], ["🎬", "Directing your friends in a play", E], ["🐄", "Looking after animals on a farm", R], ["📊", "Sorting data so it makes sense", C]]],
  ["Which would you be happy doing?", [["🎨", "Cheering up a friend whose painting went wrong, and helping them fix it", S], ["📈", "Working out which stall made more money", C], ["🎵", "Making up a rap or chant for the class", A], ["🪵", "Carving or shaping something by hand", R]]],
  ["Which would suit you?", [["🗄️", "Working quietly to organise the files", C], ["🎀", "Matching colours and patterns that work", A], ["🫂", "Explaining gently to someone upset", S], ["✨", "Getting people excited about an event", E]]],
  ["Which sounds best to you?", [["🧹", "Checking the rooms are ready before guests come", C], ["🎼", "Teaching a song to younger children", S], ["🏃", "Running and training until you improve", R], ["👋", "Noticing who has been left out", S]]],
  ["Which job would you volunteer for?", [["🪙", "Working out if the change is correct", I], ["✉️", "Finding the right words for a hard letter", A], ["🛠️", "Repairing something until it works again", R], ["📅", "Keeping the booking list in order", C]]],
  ["Pick the one you would enjoy.", [["🏆", "Organising a match and getting teams there", E], ["⚙️", "Working out why the engine stopped", I], ["🖌️", "Designing something nobody has seen", A], ["🔢", "Putting numbers into a table that adds up", C]]],
  ["Which would you say yes to?", [["🧺", "Selling produce from the farm at market", E], ["👗", "Making clothes fit properly", R], ["📰", "Writing out the notice everyone will read", A], ["💱", "Spotting which supplier charges too much", C]]],
  ["Which would you like best?", [["🎷", "Writing a tune of your own", A], ["🙋", "Getting a class to listen and join in", E], ["🐓", "Looking after goats or chickens", R], ["🧠", "Remembering what everyone agreed", C]]],
  ["Which one would you take on?", [["🐞", "Finding the mistake in the program", I], ["🧰", "Putting the toolbox back in order", C], ["💻", "Setting up the computer on your own", R], ["📢", "Reading aloud so everyone follows", S]]],
  ["Which would you rather join?", [["⚽", "Captaining a team on the field", E], ["🤜", "Helping a slower runner keep going", S], ["🦋", "Watching how birds or insects behave", I], ["🎚️", "Arranging the music for a show", A]]],
  ["Which of these fits you best?", [["🔥", "Cooking over a fire and judging when it is ready", R], ["💃", "Learning a dance until your body knows it", A], ["📉", "Working out how much sleep affects marks", I], ["🎶", "Leading a song that teaches something", S]]],
  ["Which would you be best at?", [["💡", "Explaining a topic until it clicks", S], ["🛎️", "Making sure every guest has what they need", E], ["🎻", "Tuning an instrument until it is right", A], ["🔣", "Working out the pattern in the numbers", I]]],
  ["Last one. Which would you pick?", [["🤍", "Sitting with someone who is frightened", S], ["🍢", "Running a food stall at the fair", E], ["🖼️", "Making something beautiful with others", A], ["📜", "Writing the rules down clearly", C]]],
]

export const questionScreens: QuestionScreen[] = live.map(([prompt, items], index) => ({
  index,
  part: Math.floor(index / SCREENS_PER_PART),
  prompt,
  activities: items.map(([emoji, label, interest], slot) => ({ id: `q${index + 1}-${slot}`, emoji, label, interest })),
}))
