import Link from 'next/link'
import WhyCubeHero from '@/components/WhyCubeHero'
import CtaBanner from '@/components/CtaBanner'

export const metadata = {
  title: 'Extensive Resources — CUBE Tuition',
  description:
    'Custom in-house workbooks, weekly revision quizzes, mid-term and end-of-term exams, plus 300+ practice questions with worked solutions — all included in every CUBE course.',
}

// ── Mockups ─────────────────────────────────────────────────────────────────

function WorkbookMockup() {
  const chapters = [
    { num: '01', title: 'Quadratic Functions',        pages: 24 },
    { num: '02', title: 'Polynomial Equations',       pages: 28 },
    { num: '03', title: 'Trigonometric Identities',   pages: 32 },
    { num: '04', title: 'Logarithms & Exponentials',  pages: 26 },
    { num: '05', title: 'Calculus Foundations',       pages: 36 },
  ]
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-6 shadow-sm w-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold mb-1">
            Workbook · Year 11 Maths
          </p>
          <p className="text-base font-semibold text-[#364466]">Term 2, 2026</p>
        </div>
        <div className="bg-[#EEF2FF] rounded-xl px-3 py-1.5 text-center">
          <p className="text-[9px] text-[#325099] font-semibold">Pages</p>
          <p className="text-lg font-bold text-[#364466]">146</p>
        </div>
      </div>
      <div className="space-y-2">
        {chapters.map(c => (
          <div
            key={c.num}
            className="flex items-center gap-3 bg-[#F8FAFF] rounded-xl px-4 py-3 border border-[#DEE7FF]"
          >
            <span className="text-[10px] tracking-wider uppercase text-[#325099]/70 font-bold tabular-nums w-6">
              {c.num}
            </span>
            <p className="text-xs font-semibold text-[#364466] flex-1">{c.title}</p>
            <p className="text-[10px] text-[#364466]/50 tabular-nums">{c.pages} pp.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function AssessmentMockup() {
  const events = [
    { wk: 'W1',  type: 'Quiz',         label: 'Pre-Test (Diagnostic)',      color: 'bg-[#DEE7FF] text-[#325099]' },
    { wk: 'W2',  type: 'Quiz',         label: 'Revision Quiz',           color: 'bg-[#DEE7FF] text-[#325099]' },
    { wk: 'W3',  type: 'Quiz',         label: 'Revision Quiz',           color: 'bg-[#DEE7FF] text-[#325099]' },
    { wk: 'W4',  type: 'Quiz',         label: 'Revision Quiz',           color: 'bg-[#DEE7FF] text-[#325099]' },
    { wk: 'W5',  type: 'Mid-term',     label: 'Mid-term Exam',         color: 'bg-[#FEF3C7] text-[#92400E]' },
    { wk: 'W6',  type: 'Quiz',         label: 'Revision Quiz',           color: 'bg-[#DEE7FF] text-[#325099]' },
    { wk: 'W7',  type: 'Quiz',         label: 'Revision Quiz',           color: 'bg-[#DEE7FF] text-[#325099]' },
    { wk: 'W8',  type: 'Quiz',         label: 'Revision Quiz',           color: 'bg-[#DEE7FF] text-[#325099]' },
    { wk: 'W9',  type: 'Final',       label: 'End-of-term Exam',             color: 'bg-[#FCE7F3] text-[#9D174D]'},
    { wk: 'W10', type: 'Review',        label: 'End-of-term Exam Review + Post-test',      color: 'bg-[#D1FAE5] text-[#065F46]'},
  ]
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-6 shadow-sm w-full">
      <div className="flex items-center justify-between mb-5">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold">
          Term 2 Assessment Schedule
        </p>
        <span className="text-[10px] text-[#364466]/50 tabular-nums">10 weeks</span>
      </div>
      <div className="space-y-1.5">
        {events.map((e) => (
          <div
            key={e.wk}
            className="flex items-center gap-3 bg-[#F8FAFF] rounded-lg px-3.5 py-2 border border-[#DEE7FF]"
          >
            <span className="text-[10px] font-bold text-[#325099]/70 tabular-nums w-7">{e.wk}</span>
            <p className="text-xs font-semibold text-[#364466] flex-1">{e.label}</p>
            <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${e.color}`}>
              {e.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SolutionsMockup() {
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-6 shadow-sm w-full">
      <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold mb-1">
        Practice Question 17
      </p>
      <p className="text-sm font-semibold text-[#364466] mb-4 leading-snug">
        Solve for x: 2x² − 7x + 3 = 0
      </p>

      <div className="bg-[#F8FAFF] rounded-xl border border-[#DEE7FF] p-4 mb-3">
        <p className="text-[10px] tracking-[0.18em] uppercase text-[#325099]/70 font-semibold mb-3">
          Worked solution
        </p>
        <div className="space-y-2 text-xs text-[#364466]">
          <div className="flex items-start gap-2">
            <span className="text-[#325099] font-bold tabular-nums">1.</span>
            <span>Factor: (2x − 1)(x − 3) = 0</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#325099] font-bold tabular-nums">2.</span>
            <span>Set each factor to zero</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#325099] font-bold tabular-nums">3.</span>
            <span>Solve: x = ½ or x = 3</span>
          </div>
        </div>
      </div>

      <div className="bg-[#EEF2FF] rounded-xl p-3 border border-[#DEE7FF]">
        <p className="text-[10px] tracking-[0.15em] uppercase text-[#325099] font-semibold mb-1">
          Teacher tip
        </p>
        <p className="text-xs text-[#364466]/70 leading-relaxed">
          Always check whether the discriminant gives real roots before factoring.
        </p>
      </div>
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  const summary = [
    { value: '150+', label: 'Workbook pages per term' },
    { value: '10',   label: 'Weekly revision quizzes' },
    { value: '2',    label: 'Term exams (mid + end)' },
    { value: '300+', label: 'Practice questions' },
  ]

  return (
    <main>
      <WhyCubeHero
        tagline="Learning Resources"
        heading="Workbooks, quizzes, exams — all included"
        description="Every CUBE course comes with a complete set of resources designed in-house — built around the syllabus and refined every term."
      />

      {/* Summary strip */}
      <section className="border-b border-[#DEE7FF] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#325099] font-semibold text-center mb-6">
            What you get every term
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {summary.map((s) => (
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
          {/* Row 1 — Workbooks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Workbooks
              </p>
              <h2
                className="text-2xl md:text-3xl font-light text-[#364466] mb-5 leading-snug"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Custom workbooks, written in-house
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Every course has its own workbook, mapped chapter-by-chapter to the
                syllabus. Students get a fresh copy at the start of each term —
                structured for every lesson, with worked examples, practice
                questions, and homework all in one place.
              </p>
              <ul className="space-y-2">
                {[
                  'Updated every term to reflect syllabus changes',
                  'Worked examples before every exercise',
                  'Homework integrated into each chapter',
                  'Includes summary notes for revision',
                ].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-[#325099] mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-8">
              <WorkbookMockup />
            </div>
          </div>

          {/* Row 2 — Quizzes & Exams (reversed) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:pr-8 order-2 md:order-1">
              <AssessmentMockup />
            </div>
            <div className="order-1 md:order-2">
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Quizzes & Exams
              </p>
              <h2
                className="text-2xl md:text-3xl font-light text-[#364466] mb-5 leading-snug"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Built-in assessment from week 1
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Weekly quizzes start every lesson, so gaps are caught early and
                tracked over time. A mid-term exam in Week 5 and an end-of-term
                exam in Week 10 build real exam stamina — and feed straight into
                the term progress report.
              </p>
              <ul className="space-y-2">
                {[
                  'Short quiz at the start of every lesson',
                  'Mid-term exam in Week 5 of every term',
                  'End-of-term exam in Week 10',
                  'All scores tracked in the student portal',
                ].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-[#325099] mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 3 — Practice & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Practice & Worked Solutions
              </p>
              <h2
                className="text-2xl md:text-3xl font-light text-[#364466] mb-5 leading-snug"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Extra practice with full worked solutions
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                For students who want to push further, every course includes extra
                question sets with step-by-step worked solutions and teacher tips
                — perfect for self-study before exams.
              </p>
              <ul className="space-y-2">
                {[
                  '300+ practice questions per course',
                  'Step-by-step worked solutions for every question',
                  'Past paper questions categorised by topic',
                  'Teacher tips on common mistakes to avoid',
                ].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-[#325099] mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-8">
              <SolutionsMockup />
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
            { href: '/why-cube/small-classes',    label: 'Small Classes' },
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
