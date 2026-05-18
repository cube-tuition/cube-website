import Link from 'next/link'
import WhyCubeHero from '@/components/WhyCubeHero'
import CtaBanner from '@/components/CtaBanner'

export const metadata = {
  title: 'Progress Reports & Analytics — CUBE Tuition',
  description:
    'Detailed term reports, weekly quiz tracking and visual progress dashboards — every CUBE student and parent sees exactly where they stand and what to focus on next.',
}

// ── Mockups (moved from former homepage section) ───────────────────────────

function ReportMockup() {
  const subjects = [
    { name: 'Algebra',      score: 88, color: 'bg-[#364466]' },
    { name: 'Geometry',     score: 74, color: 'bg-[#325099]' },
    { name: 'Statistics',   score: 92, color: 'bg-[#BACBFF]' },
    { name: 'Trigonometry', score: 61, color: 'bg-[#DEE7FF]' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-6 shadow-sm w-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold mb-1">Term 2 Report</p>
          <p className="text-base font-semibold text-[#364466]">Maths Advanced</p>
        </div>
        <div className="bg-[#EEF2FF] rounded-xl px-3 py-1.5 text-center">
          <p className="text-xs text-[#325099] font-semibold">Overall</p>
          <p className="text-xl font-bold text-[#364466]">79%</p>
        </div>
      </div>
      <div className="space-y-3 mb-5">
        {subjects.map(s => (
          <div key={s.name}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-[#364466] font-medium">{s.name}</span>
              <span className="text-[#325099] font-semibold">{s.score}%</span>
            </div>
            <div className="h-2 bg-[#F4F4F4] rounded-full overflow-hidden">
              <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.score}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#F8FAFF] rounded-xl p-3 border border-[#DEE7FF]">
        <p className="text-[10px] tracking-[0.15em] uppercase text-[#325099] font-semibold mb-1">Teacher Note</p>
        <p className="text-xs text-[#364466]/70 leading-relaxed">
          Great improvement in Statistics this term. Focus on Trigonometry identities before the next exam.
        </p>
      </div>
    </div>
  )
}

function AnalyticsMockup() {
  const weeks = [42, 55, 51, 68, 63, 74, 71, 82, 79, 88]
  const max = 100
  const h = 80
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-6 shadow-sm w-full">
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: 'Avg Score', value: '79%' },
          { label: 'Homework', value: '94%' },
          { label: 'Improvement', value: '+23%' },
        ].map(s => (
          <div key={s.label} className="bg-[#F8FAFF] rounded-xl p-3 text-center border border-[#DEE7FF]">
            <p className="text-lg font-bold text-[#364466]">{s.value}</p>
            <p className="text-[10px] text-[#325099]/70 font-medium mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold mb-3">Score trend — last 10 weeks</p>
      <div className="flex items-end gap-1.5" style={{ height: h + 16 }}>
        {weeks.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md transition-all"
              style={{
                height: (v / max) * h,
                background: i === weeks.length - 1 ? '#364466' : '#DEE7FF',
              }}
            />
            <span className="text-[9px] text-[#364466]/40 font-medium">W{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PortalMockup() {
  const items = [
    { icon: '📄', label: 'Term 2 Report', sub: 'Ready to download', tag: 'New', tagColor: 'bg-[#DEE7FF] text-[#325099]' },
    { icon: '📝', label: 'Week 8 Homework', sub: 'Due this Saturday', tag: 'Due', tagColor: 'bg-[#FEF3C7] text-[#92400E]' },
    { icon: '📚', label: 'Maths Workbook Ch.6', sub: 'Uploaded by Mr. Chen', tag: 'Resource', tagColor: 'bg-[#F4F4F4] text-[#364466]' },
    { icon: '🗓️', label: 'Next Class', sub: 'Thursday 5:30 PM', tag: 'Upcoming', tagColor: 'bg-[#EEF2FF] text-[#325099]' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-6 shadow-sm w-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-full bg-[#364466] flex items-center justify-center text-white text-xs font-bold">JS</div>
        <div>
          <p className="text-sm font-semibold text-[#364466]">Welcome back, Jamie</p>
          <p className="text-xs text-[#325099]/60">Year 11 · Maths Advanced</p>
        </div>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 bg-[#F8FAFF] rounded-xl px-4 py-3 border border-[#DEE7FF]">
            <span className="text-base">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#364466] truncate">{item.label}</p>
              <p className="text-[10px] text-[#364466]/50">{item.sub}</p>
            </div>
            <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${item.tagColor}`}>
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function ProgressReportsPage() {
  return (
    <main>
      <WhyCubeHero
        tagline="Progress Tracking & Analytics"
        heading="Progress Reporting & Analytics, Every Term"
        description="Every CUBE student gets detailed reports, performance analytics, and a personal portal — so learning never stops outside the classroom."
      />

      <section className="bg-[#F8FAFF] border-t border-b border-[#DEE7FF] px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-40">
          {/* Row 1 — Reports */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Progress Reports
              </p>
              <h2
                className="text-2xl md:text-3xl font-light text-[#364466] mb-5 leading-snug"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Clear reports, every term
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Every student receives a detailed term report showing quiz scores,
                mid-term and end-of-term exam results, areas mastered, and exactly
                what to focus on next.
              </p>
              <ul className="space-y-2">
                {[
                  'Quiz scores tracked week by week',
                  'Mid-term and end-of-term exam breakdowns',
                  'Colour-coded performance by topic',
                  'Teacher notes and recommended next steps',
                ].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-[#325099] mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-8">
              <ReportMockup />
            </div>
          </div>

          {/* Row 2 — Analytics (reversed) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:pr-8 order-2 md:order-1">
              <AnalyticsMockup />
            </div>
            <div className="order-1 md:order-2">
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Analytics
              </p>
              <h2
                className="text-2xl md:text-3xl font-light text-[#364466] mb-5 leading-snug"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Data-driven progress tracking
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Visual dashboards show performance trends over time so students
                and parents can see exactly how much improvement is happening
                each term.
              </p>
              <ul className="space-y-2">
                {[
                  'Performance trend graphs by subject',
                  'Comparison against class average',
                  'Homework completion rates',
                  'Exam score history at a glance',
                ].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-[#325099] mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 3 — Portal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Student Portal
              </p>
              <h2
                className="text-2xl md:text-3xl font-light text-[#364466] mb-5 leading-snug"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Everything in one place
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Students log in to access their timetable, homework, resources,
                and past reports — all in one clean, easy-to-use portal.
              </p>
              <ul className="space-y-2">
                {[
                  'Access homework and workbooks online',
                  'View upcoming class schedules',
                  'View past reports and exams',
                  'Message your tutor directly',
                ].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-[#325099] mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-8">
              <PortalMockup />
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
            { href: '/why-cube/resources',     label: 'Extensive Resources' },
            { href: '/why-cube/small-classes', label: 'Small Classes' },
            { href: '/why-cube/exam-help',     label: 'Exam Help Drop-in' },
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
