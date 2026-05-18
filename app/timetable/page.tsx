import TimetableView from '@/components/TimetableView'
import { term } from '@/lib/timetable'

export const metadata = {
  title: 'Timetable — CUBE Tuition',
  description:
    'CUBE Tuition Term 2 2026 timetable. Browse every Maths, English and Science class for Years 5–12 — filter by year, subject or day, and tap any class to book a free trial.',
}

export default function TimetablePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#F8FAFF] via-[#EEF4FF] to-[#BFD1FF] px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p
            className="text-xs tracking-[0.35em] uppercase text-[#325099] font-semibold mb-4"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            {term.name} · {term.year}
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-[#2A2035] mb-5"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Timetable
          </h1>
          <p className="text-base md:text-lg text-[#2A2035]/70 max-w-2xl leading-relaxed">
            All Years 5–12 classes for {term.name} {term.year}. Filter by subject or
            year, then tap a class for details and enrolment.
          </p>
        </div>
      </section>

      {/* Term dates strip */}
      <section className="border-b border-[#DEE7FF] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4 mb-3">
            <p
              className="text-[10px] tracking-[0.3em] uppercase text-[#325099] font-semibold"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              {term.name} {term.year} · Dates
            </p>
            <div className="flex-1 h-px bg-[#DEE7FF]" />
          </div>
          <div className="overflow-x-auto -mx-6 px-6">
            <div className="flex gap-2 min-w-max pb-1">
              {term.weeks.map((w) => (
                <div
                  key={w.week}
                  className="shrink-0 rounded-xl border border-[#DEE7FF] bg-[#F8FAFF] px-4 py-3 min-w-[120px]"
                >
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[#325099]/70 font-semibold mb-1">
                    Week {w.week}
                  </p>
                  <p className="text-sm font-semibold text-[#364466] tabular-nums">
                    {w.dates}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timetable */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <TimetableView />
      </section>
    </main>
  )
}
