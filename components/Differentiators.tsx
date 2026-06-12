import Link from 'next/link'

// ── Compact mockups ──────────────────────────────────────────────────────────

// Faithful replica of the student portal's Results & Analytics page
// (course tabs → stat strip → Weekly Tracker table), with sample data.
function ProgressMockup() {
  const rows = [
    { week: 6, att: 'Present', score: '17 / 20', pct: 85, hw: 'A' },
    { week: 7, att: 'Present', score: '15 / 20', pct: 75, hw: 'B' },
    { week: 8, att: 'Present', score: '18 / 20', pct: 90, hw: 'A' },
  ]
  const hwColor: Record<string, string> = { A: 'bg-[#D1FAE5] text-[#065F46]', B: 'bg-[#DEF7FF] text-[#0E5E74]' }
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] shadow-sm w-full overflow-hidden">
      {/* Page header */}
      <div className="px-5 pt-4 pb-3 border-b border-[#DEE7FF] bg-[#F8FAFF]">
        <div className="flex items-center justify-between">
          <p className="text-[9px] tracking-[0.25em] uppercase text-[#325099] font-semibold">
            How you&rsquo;re tracking
          </p>
          <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-[#062E63] bg-white border border-[#DEE7FF] px-2 py-0.5 rounded-full">
            <span className="w-1 h-1 rounded-full bg-[#325099]" /> Term 2 2026
          </span>
        </div>
        {/* Course tabs */}
        <div className="flex gap-1.5 mt-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-[#DEE7FF] text-[#325099] border border-[#325099]/40">
            <span className="w-1 h-1 rounded-full bg-[#325099]" /> Y9 Maths
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-white text-[#364466]/60 border border-[#DEE7FF]">
            <span className="w-1 h-1 rounded-full bg-[#9D174D]" /> Y9 English
          </span>
        </div>
      </div>
      {/* Stat strip */}
      <div className="grid grid-cols-3 gap-2 px-5 py-3">
        {[
          ['Quiz average', '84%', '8 quizzes'],
          ['Homework', 'A', 'Most recent'],
          ['Attendance', '95%', '19/20 sessions'],
        ].map(([label, value, sub]) => (
          <div key={label} className="bg-[#F8FAFF] border border-[#DEE7FF] rounded-xl px-2.5 py-2">
            <p className="text-[8px] tracking-[0.15em] uppercase text-[#325099]/70 font-semibold">{label}</p>
            <p className="text-base font-bold text-[#364466] leading-tight">{value}</p>
            <p className="text-[8px] text-[#364466]/45">{sub}</p>
          </div>
        ))}
      </div>
      {/* Weekly tracker table */}
      <div className="px-5 pb-4">
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#325099]/70 font-semibold mb-1.5">Weekly Tracker</p>
        <div className="border border-[#DEE7FF] rounded-xl overflow-hidden">
          <div className="grid grid-cols-[2rem_4rem_1fr_2.5rem_2rem] gap-2 items-center bg-[#F8FAFF] border-b border-[#DEE7FF] px-3 py-1.5">
            {['Wk', 'Attend.', 'Progress', '%', 'HW'].map(h => (
              <span key={h} className="text-[8px] tracking-[0.15em] uppercase font-semibold text-[#325099]">{h}</span>
            ))}
          </div>
          {rows.map(r => (
            <div key={r.week} className="grid grid-cols-[2rem_4rem_1fr_2.5rem_2rem] gap-2 items-center px-3 py-2 border-b last:border-0 border-[#DEE7FF]">
              <span className="text-[11px] font-medium text-[#2A2035]">{r.week}</span>
              <span className="inline-flex justify-center text-[8px] font-semibold px-1.5 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F46]">{r.att}</span>
              <div className="w-full rounded-full h-1.5 bg-[#DEE7FF]">
                <div className="h-1.5 rounded-full bg-[#325099]" style={{ width: `${r.pct}%` }} />
              </div>
              <span className="text-[11px] font-semibold text-[#2A2035] tabular-nums">{r.pct}%</span>
              <span className={`inline-flex justify-center text-[8px] font-bold px-1.5 py-0.5 rounded-full ${hwColor[r.hw]}`}>{r.hw}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ResourcesMockup() {
  const items = [
    { icon: '📘', label: 'Workbook · Ch.6', sub: 'Algebra fundamentals', tag: 'Lesson 8', tagColor: 'bg-[#DEE7FF] text-[#325099]' },
    { icon: '📝', label: 'Weekly Quiz', sub: 'Worked solutions inc.', tag: 'New', tagColor: 'bg-[#D1FAE5] text-[#065F46]' },
    { icon: '📊', label: 'Mid-term Exam', sub: 'Full markscheme', tag: 'Week 5', tagColor: 'bg-[#FEF3C7] text-[#92400E]' },
    { icon: '🧮', label: 'Practice Set', sub: '40 extra questions', tag: 'Bonus', tagColor: 'bg-[#FCE7F3] text-[#9D174D]' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-5 shadow-sm w-full">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold">
          Term Resources
        </p>
        <p className="text-[10px] text-[#364466]/50">+12 more</p>
      </div>
      <div className="space-y-2">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center gap-3 bg-[#F8FAFF] rounded-xl px-3.5 py-2.5 border border-[#DEE7FF]"
          >
            <span className="text-base">{it.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#364466] truncate">{it.label}</p>
              <p className="text-[10px] text-[#364466]/50 truncate">{it.sub}</p>
            </div>
            <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${it.tagColor}`}>
              {it.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Faithful replica of the portal's class page (header chips + roster),
// with sample students. 6 of 7 seats filled.
function SmallClassesMockup() {
  const students = [
    { name: 'Mia K.',    initials: 'MK', color: 'bg-[#DEE7FF] text-[#325099]' },
    { name: 'Ethan L.',  initials: 'EL', color: 'bg-[#FCE7F3] text-[#9D174D]' },
    { name: 'Aria C.',   initials: 'AC', color: 'bg-[#D1FAE5] text-[#065F46]' },
    { name: 'Chloe S.',  initials: 'CS', color: 'bg-[#EDE9FE] text-[#5B21B6]' },
    { name: 'Lucas W.',  initials: 'LW', color: 'bg-[#DEF7FF] text-[#0E5E74]' },
    { name: 'Hannah J.', initials: 'HJ', color: 'bg-[#FEF3C7] text-[#92400E]' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] shadow-sm w-full overflow-hidden">
      {/* Class header — mirrors the portal class page */}
      <div className="px-5 pt-4 pb-3.5 border-b border-[#DEE7FF] bg-[#F8FAFF]">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[9px] tracking-[0.25em] uppercase text-[#325099] font-semibold">Class</p>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#DEE7FF] text-[#325099]">
            6 / 7 enrolled
          </span>
        </div>
        <p className="text-base font-bold text-[#062E63]">Y7 English</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5 text-[10px] text-[#364466]/60">
          <span>📅 Saturday</span>
          <span>🕐 11:00am – 12:30pm</span>
          <span>📍 Room 2</span>
          <span className="font-semibold text-[#325099]">Daniel · Lead Tutor</span>
        </div>
      </div>
      {/* Roster */}
      <div className="px-5 py-4">
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#325099]/70 font-semibold mb-2">Roster</p>
        <div className="space-y-1.5">
          {students.map(s => (
            <div key={s.initials} className="flex items-center gap-2.5 bg-[#F8FAFF] border border-[#DEE7FF] rounded-xl px-3 py-1.5">
              <span className={`w-7 h-7 rounded-full ${s.color} flex items-center justify-center text-[9px] font-bold shrink-0`}>
                {s.initials}
              </span>
              <span className="text-[11px] font-semibold text-[#364466]">{s.name}</span>
              <span className="ml-auto text-[8px] font-semibold px-1.5 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F46]">enrolled</span>
            </div>
          ))}
          <div className="flex items-center justify-center gap-2 border-2 border-dashed border-[#BACBFF] rounded-xl px-3 py-2">
            <span className="text-[10px] font-semibold text-[#325099]/70">1 spot left — capped at 7</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Faithful replica of the student drop-in booking page: session tile with
// live capacity + the book-a-spot form (subject + question).
function ExamHelpMockup() {
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] shadow-sm w-full overflow-hidden">
      <div className="px-5 pt-4 pb-3 border-b border-[#DEE7FF] bg-[#F8FAFF] flex items-center justify-between">
        <p className="text-[9px] tracking-[0.25em] uppercase text-[#325099] font-semibold">Drop-in Booking</p>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F46]">Free</span>
      </div>

      {/* Session tile */}
      <div className="px-5 pt-4">
        <div className="flex items-center gap-3 border border-[#DEE7FF] rounded-xl px-3.5 py-3 bg-[#F8FAFF]">
          <div className="w-11 h-11 rounded-xl bg-white border border-[#DEE7FF] flex flex-col items-center justify-center shrink-0">
            <span className="text-[7px] tracking-wider uppercase text-[#325099]/60 font-semibold leading-none">Thu</span>
            <span className="text-base font-bold text-[#062E63] leading-tight">25</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-[#364466]">4:00 – 6:00pm</p>
            <p className="text-[10px] text-[#364466]/55">📍 Chatswood centre · all subjects</p>
          </div>
          <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#DEE7FF] text-[#325099] shrink-0">
            9 of 12 spots left
          </span>
        </div>
      </div>

      {/* Booking form */}
      <div className="px-5 py-4">
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#325099]/70 font-semibold mb-2">Book a spot</p>
        <div className="space-y-2">
          <div>
            <p className="text-[8px] font-semibold text-[#325099]/60 uppercase tracking-wide mb-1">Subject</p>
            <div className="flex gap-1.5">
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#062E63] text-white">Maths</span>
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white border border-[#DEE7FF] text-[#364466]/60">English</span>
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white border border-[#DEE7FF] text-[#364466]/60">Chemistry</span>
            </div>
          </div>
          <div>
            <p className="text-[8px] font-semibold text-[#325099]/60 uppercase tracking-wide mb-1">What do you need help with?</p>
            <div className="border border-[#DEE7FF] rounded-xl px-3 py-2 bg-white">
              <p className="text-[10px] text-[#364466]/75">Q7 from the trial paper — circle geometry proof</p>
            </div>
          </div>
          <div className="rounded-xl bg-[#062E63] text-white text-center py-2 text-[11px] font-semibold">
            Confirm booking →
          </div>
          <p className="text-[8px] text-[#364466]/40 text-center">Bring any questions, any materials — homework, school exams, anything.</p>
        </div>
      </div>
    </div>
  )
}

// ── Rows config ──────────────────────────────────────────────────────────────

type Differentiator = {
  id: string
  tagline: string
  heading: string
  description: string
  href: string
  Mockup: () => React.ReactElement
}

const rows: Differentiator[] = [
  {
    id: 'progress',
    tagline: 'Progress Tracking & Analytics',
    heading: 'Reports + Student Portal',
    description:
      'Detailed term reports, weekly quiz tracking, and visual progress dashboards in an easy to access portal so students and parents always know where they stand.',
    href: '/why-cube/progress-reports',
    Mockup: ProgressMockup,
  },
  {
    id: 'resources',
    tagline: 'Learning Resources',
    heading: 'Workbooks, quizzes, exams — all included',
    description:
      'Structured workbooks every lesson, weekly revision quizzes, mid-term and end-of-term exams, plus extra practice sets with worked solutions.',
    href: '/why-cube/resources',
    Mockup: ResourcesMockup,
  },
  {
    id: 'small-classes',
    tagline: 'Class Size & Structure',
    heading: 'Capped at 7 students per class',
    description:
      'Small group classes mean every student gets direct teacher attention, with structured lessons that adapt to each student’s pace and gaps.',
    href: '/why-cube/small-classes',
    Mockup: SmallClassesMockup,
  },
  {
    id: 'exam-help',
    tagline: 'Drop-in Support',
    heading: 'Free exam & HW help, whenever you need it',
    description:
      'Book in for a free drop-in sessions every fortnight. Bring any questions or any materials you need help with.',
    href: '/why-cube/exam-help',
    Mockup: ExamHelpMockup,
  },
]

// ── Section ─────────────────────────────────────────────────────────────────

export default function Differentiators() {
  return (
    <section id="why-cube" className="bg-[#F8FAFF] border-t border-b border-[#DEE7FF] px-6 py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p
            className="text-xs tracking-[0.35em] uppercase text-[#325099] font-semibold mb-4"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Why CUBE
          </p>
          <h2
            className="text-3xl md:text-5xl font-light tracking-wide text-[#364466] mb-5"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            More than just tutoring
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Our services are designed to give every student the
            support, resources, and feedback they need to do their best work.
          </p>
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-24">
          {rows.map((row, i) => {
            const reverse = i % 2 === 1
            return (
              <div
                key={row.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                {/* Text */}
                <div className={reverse ? 'md:order-2 md:pl-8' : 'md:pr-8'}>
                  <p
                    className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-4"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {row.tagline}
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-light text-[#364466] mb-5 leading-snug"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {row.heading}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
                    {row.description}
                  </p>
                  <Link
                    href={row.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.12em] uppercase text-[#325099] hover:text-[#364466] transition group"
                  >
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>

                {/* Mockup */}
                <div className={reverse ? 'md:order-1' : ''}>
                  <row.Mockup />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
