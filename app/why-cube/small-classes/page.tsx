import Link from 'next/link'
import WhyCubeHero from '@/components/WhyCubeHero'
import CtaBanner from '@/components/CtaBanner'

export const metadata = {
  title: 'Small Classes — CUBE Tuition',
  description:
    'Every CUBE class is capped at 7 students, so every student gets direct teacher attention. Lessons adapt to each student\'s pace, gaps, and goals.',
}

// ── Mockups ─────────────────────────────────────────────────────────────────

function ClassroomMockup() {
  const students = [
    { initials: 'JL', name: 'Jamie',  level: 'Year 11 Adv',  color: 'bg-[#DEE7FF] text-[#325099]' },
    { initials: 'SM', name: 'Sasha',  level: 'Year 11 Adv',  color: 'bg-[#FCE7F3] text-[#9D174D]' },
    { initials: 'AC', name: 'Alex',   level: 'Year 11 Adv',  color: 'bg-[#D1FAE5] text-[#065F46]' },
    { initials: 'RP', name: 'Ryan',   level: 'Year 11 Adv',  color: 'bg-[#FEF3C7] text-[#92400E]' },
    { initials: 'KW', name: 'Kim',    level: 'Year 11 Adv',  color: 'bg-[#EDE9FE] text-[#5B21B6]' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-7 shadow-sm w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold mb-1">
            Class · Year 11 Maths Adv
          </p>
          <p className="text-base font-semibold text-[#364466]">Mon 6:00 – 8:00pm</p>
        </div>
        <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#DEE7FF] text-[#325099]">
          5 / 7 enrolled
        </span>
      </div>

      {/* Teacher */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-[#364466] flex items-center justify-center text-white text-base font-bold mb-2 ring-4 ring-[#DEE7FF]">
          MC
        </div>
        <p className="text-sm font-semibold text-[#364466]">Mr Chen</p>
        <p className="text-[10px] text-[#325099]/60">Lead Tutor · 8 yrs experience</p>
      </div>

      {/* Students */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {students.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-[#F8FAFF] rounded-xl border border-[#DEE7FF] p-3"
          >
            <div
              className={`w-9 h-9 rounded-full ${s.color} flex items-center justify-center text-[11px] font-semibold mb-1.5`}
            >
              {s.initials}
            </div>
            <p className="text-[11px] font-semibold text-[#364466]">{s.name}</p>
            <p className="text-[9px] text-[#364466]/50">{s.level}</p>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center bg-white rounded-xl border-2 border-dashed border-[#BACBFF] p-3">
          <p className="text-[10px] text-[#325099]/60 font-semibold">2 spots left</p>
        </div>
      </div>

      <div className="bg-[#EEF2FF] rounded-xl p-3 border border-[#DEE7FF] text-center">
        <p className="text-[10px] tracking-[0.18em] uppercase text-[#325099]/70 font-semibold mb-1">
          Class cap
        </p>
        <p className="text-base font-bold text-[#364466]">7 students</p>
      </div>
    </div>
  )
}

function AttentionMockup() {
  // Time split bar for a typical 90min lesson (Weeks 2–8 structure)
  const blocks = [
    { label: 'Homework review', mins: 20, color: 'bg-[#DEE7FF]', text: 'text-[#325099]' },
    { label: 'Revision quiz',   mins: 20, color: 'bg-[#BACBFF]', text: 'text-[#1E3A8A]' },
    { label: 'Teach content',   mins: 50, color: 'bg-[#364466]', text: 'text-white' },
  ]
  const total = blocks.reduce((a, b) => a + b.mins, 0)
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-6 shadow-sm w-full">
      <div className="flex items-center justify-between mb-5">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold">
          Typical 90-min lesson
        </p>
        <span className="text-[10px] text-[#364466]/50 tabular-nums">{total} min</span>
      </div>

      {/* Time bar */}
      <div className="flex h-9 rounded-lg overflow-hidden mb-4">
        {blocks.map((b) => (
          <div
            key={b.label}
            className={`${b.color} ${b.text} flex items-center justify-center text-[10px] font-semibold`}
            style={{ width: `${(b.mins / total) * 100}%` }}
            title={b.label}
          >
            {b.mins}m
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="space-y-2 mb-5">
        {blocks.map((b) => (
          <div key={b.label} className="flex items-center gap-3">
            <span className={`inline-block w-3 h-3 rounded-sm ${b.color}`} />
            <p className="text-xs text-[#364466] flex-1">{b.label}</p>
            <p className="text-[10px] text-[#364466]/50 tabular-nums">{b.mins} min</p>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAFF] rounded-xl p-3 border border-[#DEE7FF]">
        <p className="text-[10px] tracking-[0.15em] uppercase text-[#325099] font-semibold mb-1">
          Real-time feedback
        </p>
        <p className="text-xs text-[#364466]/70 leading-relaxed">
          Marking homework and quizzes together every lesson means the tutor
          sees each student’s gaps as they happen — and can adjust the content
          block on the spot.
        </p>
      </div>
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function SmallClassesPage() {
  const stats = [
    { value: '≤ 7',   label: 'Students per class' },
    { value: '90m',   label: 'Structured per lesson' },
    { value: '100%',  label: 'Of students get individual targets' },
  ]

  return (
    <main>
      <WhyCubeHero
        tagline="Class Size"
        heading="Small group classes, real individual attention"
        description="Every CUBE class is capped at 7 students. Big enough for healthy peer discussion, small enough for the tutor to know exactly where every student is up to."
      />

      {/* Stats */}
      <section className="border-b border-[#DEE7FF] bg-white">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-[#F8FAFF] border border-[#DEE7FF] px-5 py-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#364466] tabular-nums">{s.value}</p>
                <p className="text-xs text-[#325099]/70 font-medium mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail rows */}
      <section className="bg-[#F8FAFF] border-b border-[#DEE7FF] px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-32">
          {/* Row 1 — Class composition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Class Composition
              </p>
              <h2
                className="text-2xl md:text-3xl font-light text-[#364466] mb-5 leading-snug"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Why 7 is the sweet spot
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Bigger than one-on-one, smaller than school. The right size lets
                students hear different approaches from peers and learn through
                discussion, while still giving the tutor time to check in with
                every student individually each lesson.
              </p>
              <ul className="space-y-2">
                {[
                  'Students grouped by ability and course',
                  'Tutor knows every student by name and goal',
                  'Healthy peer discussion and shared problem-solving',
                  'No student gets lost at the back of the room',
                ].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-[#325099] mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-8">
              <ClassroomMockup />
            </div>
          </div>

          {/* Row 2 — Attention model (reversed) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:pr-8 order-2 md:order-1">
              <AttentionMockup />
            </div>
            <div className="order-1 md:order-2">
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                In the Lesson
              </p>
              <h2
                className="text-2xl md:text-3xl font-light text-[#364466] mb-5 leading-snug"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Direct attention, every lesson
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Every lesson starts with marking homework and a revision quiz
                together — so the tutor sees each student’s gaps in real time
                before moving on to 50 minutes of focused new content.
              </p>
              <ul className="space-y-2">
                {[
                  'Homework reviewed together at the start of every lesson',
                  'Weekly revision quiz to catch gaps in real time',
                  '50 minutes of focused new content',
                  'Marks recorded in the class progress spreadsheet',
                ].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-[#325099] mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link to other differentiators */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs tracking-[0.3em] uppercase text-[#325099]/70 font-semibold text-center mb-6">
          Also explore
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: '/why-cube/progress-reports', label: 'Progress Reports & Analytics' },
            { href: '/why-cube/resources',        label: 'Extensive Resources' },
            { href: '/why-cube/exam-help',        label: 'Exam Help Drop-in' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-[#DEE7FF] bg-white px-5 py-4 hover:border-[#BACBFF] hover:bg-[#F8FAFF] transition flex items-center justify-between"
            >
              <span className="text-sm font-semibold text-[#364466]">{item.label}</span>
              <span className="text-[#325099] transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
