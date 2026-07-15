// Term 3, 2026 timetable for CUBE Tuition.
// Fallback snapshot of the portal's website_timetable view (taken 15 Jul 2026);
// the live page fetches fresh data and only uses this if the fetch fails.

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
  /** Course fee in AUD for the term (omitted when no price is set) */
  price?: number
  /** Delivery mode if specified */
  mode?: 'Online' | 'In Person'
}

export const term = {
  name: 'Term 3',
  year: 2026,
  weeks: [
    { week: 1,  dates: '20 Jul – 26 Jul' },
    { week: 2,  dates: '27 Jul – 2 Aug' },
    { week: 3,  dates: '3 Aug – 9 Aug' },
    { week: 4,  dates: '10 Aug – 16 Aug' },
    { week: 5,  dates: '17 Aug – 23 Aug' },
    { week: 6,  dates: '24 Aug – 30 Aug' },
    { week: 7,  dates: '31 Aug – 6 Sep' },
    { week: 8,  dates: '7 Sep – 13 Sep' },
    { week: 9,  dates: '14 Sep – 20 Sep' },
    { week: 10, dates: '21 Sep – 27 Sep' },
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
  { id: 'c-613',             subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 5,  title: 'Year 5 Maths',                 day: 'Sat', startMin: t(15, 0), endMin: t(16, 30), timeLabel: '3:00pm – 4:30pm', price: 600 },
  { id: 'c-636',             subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 6,  title: 'Year 6 Maths',                 day: 'Sat', startMin: t(15, 0), endMin: t(16, 30), timeLabel: '3:00pm – 4:30pm', price: 600 },
  { id: 'c-624',             subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 8,  title: 'Year 8 Maths',                 day: 'Mon', startMin: t(16, 30), endMin: t(18, 0), timeLabel: '4:30pm – 6:00pm', price: 600 },
  { id: 'c-628',             subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 9,  title: 'Year 9 Maths',                 day: 'Mon', startMin: t(16, 30), endMin: t(18, 0), timeLabel: '4:30pm – 6:00pm', price: 650 },
  { id: 'c-637',             subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 9,  title: 'Year 9 Maths',                 day: 'Fri', startMin: t(18, 0), endMin: t(19, 30), timeLabel: '6:00pm – 7:30pm', price: 650 },
  { id: 'c-600',             subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 10, title: 'Year 10 Maths',                day: 'Wed', startMin: t(18, 30), endMin: t(20, 0), timeLabel: '6:30pm – 8:00pm', price: 650 },
  { id: 'c-607',             subject: 'Maths', subjectLabel: 'Maths',   yearLevel: 11, title: 'Year 11 Ext 1 Maths',     level: 'Ext 1',    day: 'Tue', startMin: t(18, 0), endMin: t(20, 0), timeLabel: '6:00pm – 8:00pm', price: 880 },

  // ── English ─────────────────────────────────────────────────────────────
  { id: 'c-612',             subject: 'English', subjectLabel: 'English', yearLevel: 5,  title: 'Year 5 English',               day: 'Sat', startMin: t(13, 0), endMin: t(14, 30), timeLabel: '1:00pm – 2:30pm', price: 600 },
  { id: 'c-615',             subject: 'English', subjectLabel: 'English', yearLevel: 6,  title: 'Year 6 English',               day: 'Wed', startMin: t(16, 0), endMin: t(17, 30), timeLabel: '4:00pm – 5:30pm', price: 600 },
  { id: 'c-635',             subject: 'English', subjectLabel: 'English', yearLevel: 6,  title: 'Year 6 English',               day: 'Sat', startMin: t(13, 0), endMin: t(14, 30), timeLabel: '1:00pm – 2:30pm', price: 600 },
  { id: 'c-614',             subject: 'English', subjectLabel: 'English', yearLevel: 6,  title: 'Year 6 English',               day: 'Sat', startMin: t(16, 15), endMin: t(17, 45), timeLabel: '4:15pm – 5:45pm', price: 600 },
  { id: 'c-621',             subject: 'English', subjectLabel: 'English', yearLevel: 8,  title: 'Year 8 English',               day: 'Tue', startMin: t(17, 0), endMin: t(18, 30), timeLabel: '5:00pm – 6:30pm', price: 600 },
  { id: 'c-626',             subject: 'English', subjectLabel: 'English', yearLevel: 9,  title: 'Year 9 English',               day: 'Sat', startMin: t(11, 0), endMin: t(12, 30), timeLabel: '11:00am – 12:30pm', price: 650 },
  { id: 'c-599',             subject: 'English', subjectLabel: 'English', yearLevel: 10, title: 'Year 10 English',              day: 'Sat', startMin: t(10, 30), endMin: t(12, 0), timeLabel: '10:30am – 12:00pm', price: 650 },
  { id: 'c-604',             subject: 'English', subjectLabel: 'English', yearLevel: 11, title: 'Year 11 EALD English',    level: 'EALD',     day: 'Sat', startMin: t(14, 30), endMin: t(15, 30), timeLabel: '2:30pm – 3:30pm' },

  // ── Science / Chemistry ─────────────────────────────────────────────────
  { id: 'c-602',             subject: 'Science', subjectLabel: 'Chemistry', yearLevel: 11, title: 'Year 11 Chemistry',            day: 'Wed', startMin: t(18, 0), endMin: t(20, 0), timeLabel: '6:00pm – 8:00pm', price: 880 },
]

/** Time range shown on the grid (11:00am – 8:00pm) */
export const gridStartMin = t(11, 0)
export const gridEndMin = t(20, 0)

// ─────────────────────────────────────────────────────────────────────────────
// Dynamic timetable — pulled live from the CUBE portal database.
//
// The portal exposes a read-only, PII-free view (`website_timetable`) containing
// only published terms and group classes. This page picks the term to display by
// date (the current term until it ends, then the upcoming term) and converts the
// rows into the ClassEntry shape the view component already renders. If anything
// fails, it falls back to the hardcoded data above so the page never breaks.
// ─────────────────────────────────────────────────────────────────────────────

export type TermMeta = {
  name: string
  year: number
  weeks: { week: number; dates: string }[]
}
export type TimetableData = { term: TermMeta; classes: ClassEntry[] }

type Row = {
  term_id: string
  term_name: string | null
  term_year: number | null
  term_number: number | null
  term_start: string
  term_end: string
  class_id: number
  class_name: string | null
  day_of_week: string | null
  start_time: string | null
  end_time: string | null
  course_name: string | null
  course_code: string | null
  course_price: string | number | null
  delivery_mode: string | null
}

const FALLBACK: TimetableData = { term, classes }

const DAY_ABBR: Record<string, Day> = {
  monday: 'Mon', tuesday: 'Tue', wednesday: 'Wed',
  thursday: 'Thu', friday: 'Fri', saturday: 'Sat',
}
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function parseMins(hhmm: string | null): number | null {
  if (!hhmm) return null
  const m = String(hhmm).match(/^(\d{1,2}):(\d{2})/)
  if (!m) return null
  return parseInt(m[1], 10) * 60 + parseInt(m[2], 10)
}

/** Today's date (YYYY-MM-DD) in Sydney, so the term flips at local midnight. */
function sydneyToday(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' })
}

function fmtDayMonth(d: Date): string {
  return `${d.getDate()} ${MONTHS[d.getMonth()]}`
}

/** Build the week strip from the term's start/end dates. */
function buildWeeks(startISO: string, endISO: string): { week: number; dates: string }[] {
  const start = new Date(`${startISO}T00:00:00`)
  const end = new Date(`${endISO}T00:00:00`)
  const weeks: { week: number; dates: string }[] = []
  const cur = new Date(start)
  let n = 1
  while (cur <= end && n < 30) {
    const wEnd = new Date(cur)
    wEnd.setDate(wEnd.getDate() + 6)
    const shown = wEnd > end ? end : wEnd
    weeks.push({ week: n, dates: `${fmtDayMonth(cur)} – ${fmtDayMonth(shown)}` })
    cur.setDate(cur.getDate() + 7)
    n += 1
  }
  return weeks
}

function detectSubject(name: string): { subject: Subject; subjectLabel: string } {
  if (/chem/i.test(name)) return { subject: 'Science', subjectLabel: 'Chemistry' }
  if (/science|phys|bio/i.test(name)) return { subject: 'Science', subjectLabel: 'Science' }
  if (/eng|ealdd?|english/i.test(name)) return { subject: 'English', subjectLabel: 'English' }
  return { subject: 'Maths', subjectLabel: 'Maths' }
}

function detectLevel(name: string): string | undefined {
  if (/ext\s*2/i.test(name)) return 'Ext 2'
  if (/ext\s*1/i.test(name)) return 'Ext 1'
  if (/\badv(anced)?\b/i.test(name)) return 'Advanced'
  if (/\bstd|standard\b/i.test(name)) return 'Standard'
  if (/eald/i.test(name)) return 'EALD'
  return undefined
}

/** "Y8 Maths Online" → "Year 8 Maths"; trims mode/1:1 markers. */
function titleFor(name: string): string {
  return name
    .replace(/^Y(?:ear)?\s*(\d+)/i, 'Year $1')
    .replace(/\s*\bonline\b/i, '')
    .replace(/\s*1:1/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

function rowToEntry(r: Row): ClassEntry | null {
  const day = DAY_ABBR[(r.day_of_week || '').trim().toLowerCase()]
  const startMin = parseMins(r.start_time)
  const endMin = parseMins(r.end_time)
  const name = r.class_name || r.course_name || 'Class'
  if (!day || startMin == null || endMin == null || endMin <= startMin) return null
  const { subject, subjectLabel } = detectSubject(name)
  const yearMatch = name.match(/Y(?:ear)?\s*(\d+)/i)
  const priceNum = r.course_price == null ? undefined : Number(r.course_price)
  return {
    id: `c-${r.class_id}`,
    subject,
    subjectLabel,
    yearLevel: yearMatch ? parseInt(yearMatch[1], 10) : 0,
    title: titleFor(name),
    level: detectLevel(name),
    day,
    startMin,
    endMin,
    timeLabel: `${formatTime(startMin)} – ${formatTime(endMin)}`,
    price: priceNum != null && !Number.isNaN(priceNum) ? priceNum : undefined,
    mode: /online/i.test(name) ? 'Online' : undefined,
  }
}

/**
 * Fetch the live timetable. Returns the hardcoded fallback if env vars are
 * missing or the request fails, so the page always renders something.
 */
export async function fetchTimetable(): Promise<TimetableData> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return FALLBACK
  try {
    const res = await fetch(`${url}/rest/v1/website_timetable?select=*`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      next: { revalidate: 1800 },
    })
    if (!res.ok) return FALLBACK
    const rows = (await res.json()) as Row[]
    if (!Array.isArray(rows) || rows.length === 0) return FALLBACK

    // Choose the term to display: the earliest published term still running or
    // upcoming (end date today or later); otherwise the most recent published one.
    const today = sydneyToday()
    const byTerm = new Map<string, Row[]>()
    for (const r of rows) {
      if (!byTerm.has(r.term_id)) byTerm.set(r.term_id, [])
      byTerm.get(r.term_id)!.push(r)
    }
    const termsList = [...byTerm.values()].map((rs) => rs[0])
    const future = termsList
      .filter((t0) => t0.term_end >= today)
      .sort((a, b) => a.term_end.localeCompare(b.term_end))
    const past = [...termsList].sort((a, b) => b.term_end.localeCompare(a.term_end))
    const chosen = future[0] || past[0]
    if (!chosen) return FALLBACK

    const entries = byTerm.get(chosen.term_id)!
      .map(rowToEntry)
      .filter((e): e is ClassEntry => e !== null)
      .sort((a, b) => a.yearLevel - b.yearLevel || a.startMin - b.startMin)
    if (entries.length === 0) return FALLBACK

    return {
      term: {
        name: chosen.term_number ? `Term ${chosen.term_number}` : (chosen.term_name || 'Term'),
        year: chosen.term_year || new Date().getFullYear(),
        weeks: buildWeeks(chosen.term_start, chosen.term_end),
      },
      classes: entries,
    }
  } catch {
    return FALLBACK
  }
}
