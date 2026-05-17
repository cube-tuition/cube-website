// Term 2, 2026 timetable for CUBE Tuition.
// Source: 2026 Term 2 Timetable + Pricing PDF.

export type Subject = 'Maths' | 'English' | 'Science'
export type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat'

export type ClassEntry = {
  id: string
  subject: Subject
  /** Display label, e.g. "Maths", "English", "Science", "Chemistry" */
  subjectLabel: string
  /** Numeric year level used for filtering */
  yearLevel: number
  /** Full display name, e.g. "Year 11 Advanced", "Year 6 English (Stream A)" */
  title: string
  /** Optional sub-level (Standard / Advanced / Ext 1 / Ext 2 / EALD) */
  level?: string
  day: Day
  /** Start time in minutes from midnight (e.g. 6:00pm = 1080) */
  startMin: number
  endMin: number
  /** Human time label, e.g. "6:00pm – 8:00pm" */
  timeLabel: string
  /** Course fee in AUD for the term */
  price: number
  /** Delivery mode if specified */
  mode?: 'Online' | 'In Person'
}

export const term = {
  name: 'Term 2',
  year: 2026,
  weeks: [
    { week: 1,  dates: '20 Apr – 26 Apr' },
    { week: 2,  dates: '27 Apr – 3 May' },
    { week: 3,  dates: '4 May – 10 May' },
    { week: 4,  dates: '11 May – 17 May' },
    { week: 5,  dates: '18 May – 24 May' },
    { week: 6,  dates: '25 May – 31 May' },
    { week: 7,  dates: '1 Jun – 7 Jun' },
    { week: 8,  dates: '8 Jun – 14 Jun' },
    { week: 9,  dates: '15 Jun – 21 Jun' },
    { week: 10, dates: '22 Jun – 28 Jun' },
  ],
}

export const days: Day[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const dayFullName: Record<Day, string> = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
}

/** Convert minutes-from-midnight to "6:00pm" style label */
export function formatTime(min: number): string {
  const h24 = Math.floor(min / 60)
  const m = min % 60
  const period = h24 >= 12 ? 'pm' : 'am'
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12
  return `${h12}:${m.toString().padStart(2, '0')}${period}`
}

const t = (h: number, m: number) => h * 60 + m

export const classes: ClassEntry[] = [
  // ── Mathematics ─────────────────────────────────────────────────────────
  { id: 'maths-y5',          subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 5,  title: 'Year 5 Maths',                 day: 'Sat', startMin: t(15, 0), endMin: t(16, 30), timeLabel: '3:00pm – 4:30pm', price: 600 },
  { id: 'maths-y6',          subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 6,  title: 'Year 6 Maths',                 day: 'Wed', startMin: t(18, 0), endMin: t(19, 30), timeLabel: '6:00pm – 7:30pm', price: 600 },
  { id: 'maths-y7',          subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 7,  title: 'Year 7 Maths',                 day: 'Mon', startMin: t(18, 30), endMin: t(20, 0), timeLabel: '6:30pm – 8:00pm', price: 600 },
  { id: 'maths-y8-online',   subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 8,  title: 'Year 8 Maths',                 day: 'Tue', startMin: t(17, 30), endMin: t(19, 0), timeLabel: '5:30pm – 7:00pm', price: 550, mode: 'Online' },
  { id: 'maths-y8-inperson', subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 8,  title: 'Year 8 Maths',                 day: 'Mon', startMin: t(16, 30), endMin: t(18, 0), timeLabel: '4:30pm – 6:00pm', price: 600, mode: 'In Person' },
  { id: 'maths-y9',          subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 9,  title: 'Year 9 Maths',                 day: 'Mon', startMin: t(16, 30), endMin: t(18, 0), timeLabel: '4:30pm – 6:00pm', price: 650 },
  { id: 'maths-y10',         subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 10, title: 'Year 10 Maths',                day: 'Wed', startMin: t(18, 30), endMin: t(20, 0), timeLabel: '6:30pm – 8:00pm', price: 650 },
  { id: 'maths-y11-std',     subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 11, title: 'Year 11 Maths Standard', level: 'Standard', day: 'Mon', startMin: t(18, 0), endMin: t(20, 0), timeLabel: '6:00pm – 8:00pm', price: 880 },
  { id: 'maths-y11-adv',     subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 11, title: 'Year 11 Maths Advanced', level: 'Advanced', day: 'Mon', startMin: t(18, 0), endMin: t(20, 0), timeLabel: '6:00pm – 8:00pm', price: 880 },
  { id: 'maths-y11-ext1',    subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 11, title: 'Year 11 Maths Ext 1',     level: 'Ext 1',    day: 'Tue', startMin: t(18, 0), endMin: t(20, 0), timeLabel: '6:00pm – 8:00pm', price: 880 },
  { id: 'maths-y12-std',     subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 12, title: 'Year 12 Maths Standard', level: 'Standard', day: 'Wed', startMin: t(18, 0), endMin: t(20, 0), timeLabel: '6:00pm – 8:00pm', price: 900 },
  { id: 'maths-y12-adv',     subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 12, title: 'Year 12 Maths Advanced', level: 'Advanced', day: 'Fri', startMin: t(18, 0), endMin: t(20, 0), timeLabel: '6:00pm – 8:00pm', price: 900 },
  { id: 'maths-y12-ext1',    subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 12, title: 'Year 12 Maths Ext 1',     level: 'Ext 1',    day: 'Fri', startMin: t(18, 0), endMin: t(20, 0), timeLabel: '6:00pm – 8:00pm', price: 1150 },
  { id: 'maths-y12-ext2',    subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 12, title: 'Year 12 Maths Ext 2',     level: 'Ext 2',    day: 'Thu', startMin: t(18, 0), endMin: t(20, 0), timeLabel: '6:00pm – 8:00pm', price: 1150 },

  // ── English ─────────────────────────────────────────────────────────────
  { id: 'english-y5',        subject: 'English', subjectLabel: 'English', yearLevel: 5,  title: 'Year 5 English',               day: 'Sat', startMin: t(13, 0), endMin: t(14, 30), timeLabel: '1:00pm – 2:30pm', price: 600 },
  { id: 'english-y6a',       subject: 'English', subjectLabel: 'English', yearLevel: 6,  title: 'Year 6 English (Stream A)',    day: 'Wed', startMin: t(16, 0), endMin: t(17, 30), timeLabel: '4:00pm – 5:30pm', price: 600 },
  { id: 'english-y6b',       subject: 'English', subjectLabel: 'English', yearLevel: 6,  title: 'Year 6 English (Stream B)',    day: 'Sat', startMin: t(16, 15), endMin: t(17, 45), timeLabel: '4:15pm – 5:45pm', price: 600 },
  { id: 'english-y7',        subject: 'English', subjectLabel: 'English', yearLevel: 7,  title: 'Year 7 English',               day: 'Tue', startMin: t(18, 30), endMin: t(20, 0), timeLabel: '6:30pm – 8:00pm', price: 600 },
  { id: 'english-y8',        subject: 'English', subjectLabel: 'English', yearLevel: 8,  title: 'Year 8 English',               day: 'Tue', startMin: t(17, 0), endMin: t(18, 30), timeLabel: '5:00pm – 6:30pm', price: 600 },
  { id: 'english-y9',        subject: 'English', subjectLabel: 'English', yearLevel: 9,  title: 'Year 9 English',               day: 'Sat', startMin: t(11, 0), endMin: t(12, 30), timeLabel: '11:00am – 12:30pm', price: 650 },
  { id: 'english-y10',       subject: 'English', subjectLabel: 'English', yearLevel: 10, title: 'Year 10 English',              day: 'Wed', startMin: t(16, 45), endMin: t(18, 15), timeLabel: '4:45pm – 6:15pm', price: 650 },
  { id: 'english-y11-eald',  subject: 'English', subjectLabel: 'English', yearLevel: 11, title: 'Year 11 English EALD',    level: 'EALD',     day: 'Sat', startMin: t(14, 30), endMin: t(16, 0), timeLabel: '2:30pm – 4:00pm', price: 700 },
  { id: 'english-y11-adv',   subject: 'English', subjectLabel: 'English', yearLevel: 11, title: 'Year 11 English Advanced', level: 'Advanced', day: 'Wed', startMin: t(18, 0), endMin: t(20, 0), timeLabel: '6:00pm – 8:00pm', price: 880 },
  { id: 'english-y12-adv',   subject: 'English', subjectLabel: 'English', yearLevel: 12, title: 'Year 12 English Advanced', level: 'Advanced', day: 'Mon', startMin: t(16, 30), endMin: t(18, 30), timeLabel: '4:30pm – 6:30pm', price: 900 },

  // ── Science / Chemistry ─────────────────────────────────────────────────
  { id: 'science-y10',       subject: 'Science', subjectLabel: 'Science',   yearLevel: 10, title: 'Year 10 Science',              day: 'Sat', startMin: t(15, 0), endMin: t(16, 30), timeLabel: '3:00pm – 4:30pm', price: 650 },
  { id: 'chem-y11',          subject: 'Science', subjectLabel: 'Chemistry', yearLevel: 11, title: 'Year 11 Chemistry',            day: 'Fri', startMin: t(18, 0), endMin: t(20, 0), timeLabel: '6:00pm – 8:00pm', price: 880 },
  { id: 'chem-y12',          subject: 'Science', subjectLabel: 'Chemistry', yearLevel: 12, title: 'Year 12 Chemistry',            day: 'Sat', startMin: t(11, 0), endMin: t(13, 0), timeLabel: '11:00am – 1:00pm', price: 1150 },
]

/** Time range shown on the grid (11:00am – 8:00pm) */
export const gridStartMin = t(11, 0)
export const gridEndMin = t(20, 0)
