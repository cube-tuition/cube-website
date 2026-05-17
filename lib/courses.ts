export type Subject = {
  name: string
  price: number
  hoursPerLesson: number
  weeks: number
  /** Optional per-subject "What is included" bullets. Falls back to a generic list if omitted. */
  included?: string[]
}

export type YearData = {
  title: string
  subjects: Subject[]
}

// ── Standard "What is included" bullet sets, mirroring cubetuition.com.au ───

const mathsIncluded = [
  'Weekly revision tests',
  'Carefully made workbooks and homework',
  'Additional questions for supplementary practice',
  'Mid-term and end-of-term exams',
  'Thorough marking and feedback for homework and exams returned to student',
  'Progress tracking & analytics',
  'Free exam help drop-in sessions',
]

const englishIncluded = [
  'Reading comprehension, vocabulary, writing',
  'Weekly revision tests',
  'Carefully made workbooks and homework',
  'End-of-term exams',
  'Thorough marking and feedback for homework and exams returned to student',
  'Progress tracking & analytics',
  'Free exam help drop-in sessions',
]

const chemistryIncluded = [
  'Weekly revision tests',
  'Carefully made workbooks and homework',
  'Additional questions for supplementary practice',
  'Mid-term and end-of-term exams',
  'Thorough marking and feedback for homework and exams returned to student',
  'Progress tracking & analytics',
  'Free exam help drop-in sessions',
]

// ── Course data ─────────────────────────────────────────────────────────────

export const courseData: Record<string, YearData> = {
  'year-5': {
    title: 'Year 5 Courses',
    subjects: [
      { name: 'English', price: 600, hoursPerLesson: 1.5, weeks: 10, included: englishIncluded },
      { name: 'Maths',   price: 600, hoursPerLesson: 1.5, weeks: 10, included: mathsIncluded },
    ],
  },
  'year-6': {
    title: 'Year 6 Courses',
    subjects: [
      { name: 'English', price: 600, hoursPerLesson: 1.5, weeks: 10, included: englishIncluded },
      { name: 'Maths',   price: 600, hoursPerLesson: 1.5, weeks: 10, included: mathsIncluded },
    ],
  },

  // ── Years 7-12 sourced from cubetuition.com.au ───────────────────────────

  'year-7': {
    title: 'Year 7 Courses',
    subjects: [
      { name: 'Maths',   price: 600, hoursPerLesson: 1.5, weeks: 10, included: mathsIncluded },
      { name: 'English', price: 600, hoursPerLesson: 1.5, weeks: 10, included: englishIncluded },
    ],
  },
  'year-8': {
    title: 'Year 8 Courses',
    subjects: [
      { name: 'Maths',   price: 600, hoursPerLesson: 1.5, weeks: 10, included: mathsIncluded },
      { name: 'English', price: 600, hoursPerLesson: 1.5, weeks: 10, included: englishIncluded },
    ],
  },
  'year-9': {
    title: 'Year 9 Courses',
    subjects: [
      { name: 'Maths',   price: 650, hoursPerLesson: 1.5, weeks: 10, included: mathsIncluded },
      { name: 'English', price: 650, hoursPerLesson: 1.5, weeks: 10, included: englishIncluded },
    ],
  },
  'year-10': {
    title: 'Year 10 Courses',
    subjects: [
      { name: 'Maths',   price: 650, hoursPerLesson: 1.5, weeks: 10, included: mathsIncluded },
      { name: 'English', price: 650, hoursPerLesson: 1.5, weeks: 10, included: englishIncluded },
    ],
  },
  'year-11': {
    title: 'Year 11 Courses',
    subjects: [
      { name: 'Maths Standard',     price: 880, hoursPerLesson: 2, weeks: 10, included: mathsIncluded },
      { name: 'Maths Advanced',     price: 880, hoursPerLesson: 2, weeks: 10, included: mathsIncluded },
      { name: 'Maths Extension 1',  price: 880, hoursPerLesson: 2, weeks: 10, included: mathsIncluded },
      { name: 'Chemistry',          price: 880, hoursPerLesson: 2, weeks: 10, included: chemistryIncluded },
    ],
  },
  'year-12': {
    title: 'Year 12 Courses',
    subjects: [
      { name: 'Maths Standard', price: 900,  hoursPerLesson: 2,   weeks: 10, included: mathsIncluded },
      { name: 'Maths Advanced', price: 900,  hoursPerLesson: 2,   weeks: 10, included: mathsIncluded },
      { name: 'Maths Ext 1',    price: 1150, hoursPerLesson: 2.5, weeks: 10, included: mathsIncluded },
      { name: 'Maths Ext 2',    price: 1150, hoursPerLesson: 2.5, weeks: 10, included: mathsIncluded },
      { name: 'Chemistry',      price: 1150, hoursPerLesson: 2.5, weeks: 10, included: chemistryIncluded },
    ],
  },
}
