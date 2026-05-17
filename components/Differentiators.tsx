import Link from 'next/link'

// ── Compact mockups ──────────────────────────────────────────────────────────

function ProgressMockup() {
  const weeks = [42, 55, 51, 68, 63, 74, 71, 82, 79, 88]
  const max = 100
  const h = 64
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-5 shadow-sm w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold">
            Term 2 Progress
          </p>
          <p className="text-sm font-semibold text-[#364466] mt-0.5">Maths Advanced</p>
        </div>
        <div className="bg-[#EEF2FF] rounded-xl px-3 py-1.5 text-center">
          <p className="text-[9px] text-[#325099] font-semibold">Improvement</p>
          <p className="text-base font-bold text-[#364466]">+23%</p>
        </div>
      </div>
      <p className="text-[10px] tracking-[0.18em] uppercase text-[#325099]/70 font-semibold mb-2">
        Score trend
      </p>
      <div className="flex items-end gap-1" style={{ height: h + 14 }}>
        {weeks.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md"
              style={{
                height: (v / max) * h,
                background: i === weeks.length - 1 ? '#364466' : '#DEE7FF',
              }}
            />
            <span className="text-[8px] text-[#364466]/40 font-medium">W{i + 1}</span>
          </div>
        ))}
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

function SmallClassesMockup() {
  const students = [
    { initials: 'JL', color: 'bg-[#DEE7FF] text-[#325099]' },
    { initials: 'SM', color: 'bg-[#FCE7F3] text-[#9D174D]' },
    { initials: 'AC', color: 'bg-[#D1FAE5] text-[#065F46]' },
    { initials: 'RP', color: 'bg-[#FEF3C7] text-[#92400E]' },
    { initials: 'KW', color: 'bg-[#EDE9FE] text-[#5B21B6]' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-6 shadow-sm w-full">
      <div className="flex items-center justify-between mb-5">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold">
          Year 11 Maths Adv
        </p>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#DEE7FF] text-[#325099]">
          5 / 7 enrolled
        </span>
      </div>

      {/* Teacher */}
      <div className="flex flex-col items-center mb-5">
        <div className="w-14 h-14 rounded-full bg-[#364466] flex items-center justify-center text-white text-sm font-bold mb-2 ring-4 ring-[#DEE7FF]">
          MC
        </div>
        <p className="text-xs font-semibold text-[#364466]">Mr Chen</p>
        <p className="text-[10px] text-[#325099]/60">Lead Tutor</p>
      </div>

      {/* Students */}
      <div className="flex justify-center gap-2 flex-wrap mb-4">
        {students.map((s, i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center text-[11px] font-semibold`}
          >
            {s.initials}
          </div>
        ))}
        <div className="w-10 h-10 rounded-full bg-[#F4F7FF] border-2 border-dashed border-[#BACBFF] flex items-center justify-center text-[10px] text-[#325099]/60 font-semibold">
          +2
        </div>
      </div>

      <div className="bg-[#F8FAFF] rounded-xl border border-[#DEE7FF] p-3 text-center">
        <p className="text-[10px] tracking-[0.18em] uppercase text-[#325099]/70 font-semibold">
          Class capped at
        </p>
        <p className="text-base font-bold text-[#364466]">7 students</p>
      </div>
    </div>
  )
}

function ExamHelpMockup() {
  const slots = [
    { day: 'Mon', time: '4 – 6pm', subject: 'Maths',     color: 'bg-[#DEE7FF] text-[#325099]' },
    { day: 'Wed', time: '4 – 6pm', subject: 'English',   color: 'bg-[#FCE7F3] text-[#9D174D]' },
    { day: 'Thu', time: '5 – 7pm', subject: 'Chemistry', color: 'bg-[#D1FAE5] text-[#065F46]' },
    { day: 'Sat', time: '10 – 12pm', subject: 'Any',     color: 'bg-[#FEF3C7] text-[#92400E]' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-5 shadow-sm w-full">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold">
          Exam Week · Drop-in
        </p>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F46]">
          Free
        </span>
      </div>
      <div className="space-y-2">
        {slots.map((s) => (
          <div
            key={s.day}
            className="flex items-center gap-3 bg-[#F8FAFF] rounded-xl px-3.5 py-2.5 border border-[#DEE7FF]"
          >
            <div className="w-9 h-9 rounded-lg bg-white border border-[#DEE7FF] flex flex-col items-center justify-center">
              <span className="text-[8px] tracking-wider uppercase text-[#325099]/60 font-semibold leading-none">
                {s.day}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#364466]">{s.time}</p>
              <p className="text-[10px] text-[#364466]/50">Walk-in welcome</p>
            </div>
            <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${s.color}`}>
              {s.subject}
            </span>
          </div>
        ))}
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
    heading: 'See exactly how much improvement is happening',
    description:
      'Detailed term reports, weekly quiz tracking, and visual progress dashboards so students and parents always know where they stand.',
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
