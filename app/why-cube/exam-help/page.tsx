import Link from 'next/link'
import WhyCubeHero from '@/components/WhyCubeHero'
import CtaBanner from '@/components/CtaBanner'

export const metadata = {
  title: 'Exam Help Drop-in Sessions — CUBE Tuition',
  description:
    'Free drop-in exam help sessions for all CUBE students. Walk in any time during exam weeks — bring any question, get one-on-one help from a tutor.',
}

// ── Mockups ─────────────────────────────────────────────────────────────────

function DropInScheduleMockup() {
  const slots = [
    { day: 'Mon', date: '2 Jun', time: '4 – 6pm',   subjects: ['Maths', 'Science'],            tutorCount: 2 },
    { day: 'Wed', date: '4 Jun', time: '4 – 6pm',   subjects: ['English', 'Chemistry'],        tutorCount: 2 },
    { day: 'Thu', date: '5 Jun', time: '5 – 7pm',   subjects: ['All subjects'],                tutorCount: 3 },
    { day: 'Sat', date: '7 Jun', time: '10 – 12pm', subjects: ['All subjects'],                tutorCount: 4 },
  ]
  const subjectColor: Record<string, string> = {
    Maths:           'bg-[#DEE7FF] text-[#325099]',
    English:         'bg-[#FCE7F3] text-[#9D174D]',
    Science:         'bg-[#D1FAE5] text-[#065F46]',
    Chemistry:       'bg-[#D1FAE5] text-[#065F46]',
    'All subjects':  'bg-[#FEF3C7] text-[#92400E]',
  }
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-6 shadow-sm w-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold mb-1">
            Exam Week · Drop-in Schedule
          </p>
          <p className="text-base font-semibold text-[#364466]">Week of 2 June</p>
        </div>
        <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#D1FAE5] text-[#065F46]">
          Free
        </span>
      </div>
      <div className="space-y-2">
        {slots.map((s) => (
          <div
            key={s.day}
            className="flex items-center gap-3 bg-[#F8FAFF] rounded-xl px-4 py-3 border border-[#DEE7FF]"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-[#DEE7FF] flex flex-col items-center justify-center shrink-0">
              <span className="text-[8px] tracking-wider uppercase text-[#325099]/60 font-semibold leading-none">
                {s.day}
              </span>
              <span className="text-[11px] font-bold text-[#364466] tabular-nums leading-tight mt-0.5">
                {s.date}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#364466] tabular-nums">{s.time}</p>
              <p className="text-[10px] text-[#364466]/50">{s.tutorCount} tutors on site · Walk-in</p>
            </div>
            <div className="flex flex-col gap-1 items-end">
              {s.subjects.map((sub) => (
                <span
                  key={sub}
                  className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${subjectColor[sub] ?? 'bg-[#DEE7FF] text-[#325099]'}`}
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function HowItWorksMockup() {
  const steps = [
    { num: 1, title: 'Browse slots',   sub: 'In your student portal' },
    { num: 2, title: 'Book a slot',    sub: 'Pick a time + your question' },
    { num: 3, title: 'Walk in',        sub: 'At your booked time' },
    { num: 4, title: 'Get unstuck',    sub: 'Tutor briefed and ready' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-[#DEE7FF] p-6 shadow-sm w-full">
      <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold mb-5">
        How a drop-in works
      </p>
      <div className="space-y-3">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-[#364466] flex items-center justify-center text-white text-xs font-bold tabular-nums shrink-0">
              {s.num}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#364466]">{s.title}</p>
              <p className="text-[11px] text-[#364466]/50">{s.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <span className="text-[#BACBFF] text-lg leading-none">↓</span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 bg-[#FEF3C7] rounded-xl p-3 border border-[#FDE68A]">
        <p className="text-[10px] tracking-[0.15em] uppercase text-[#92400E] font-semibold mb-1">
          Booking window
        </p>
        <p className="text-xs text-[#92400E]/80 leading-relaxed">
          Bookings close 24 hours before each slot starts — so tutors have time
          to prep around the questions coming in.
        </p>
      </div>
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function ExamHelpPage() {
  const stats = [
    { value: 'Free',  label: 'For all CUBE students' },
    { value: '4+',    label: 'Sessions per exam week' },
    { value: 'Any',   label: 'Subject, any question' },
  ]

  return (
    <main>
      <WhyCubeHero
        tagline="Drop-in Support"
        heading="Free exam & HW help, whenever you need it"
        description="Leading up to school exams, trial HSC, and finals, we run free drop-in sessions for all CUBE students. Bring any question, stay as long as you need."
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
                <p className="text-3xl md:text-4xl font-bold text-[#364466]">{s.value}</p>
                <p className="text-xs text-[#325099]/70 font-medium mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail rows */}
      <section className="bg-[#F8FAFF] border-b border-[#DEE7FF] px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-32">
          {/* Row 1 — How it works */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                How it Works
              </p>
              <h2
                className="text-2xl md:text-3xl font-light text-[#364466] mb-5 leading-snug"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Book a slot, walk in, get unstuck
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Every drop-in session is listed in your student portal. Pick a
                slot, note down what you need help with (a past paper, a homework
                question, anything), and walk in at your booked time — your
                tutor will already be briefed on what you’re bringing. Bookings
                close 24 hours before each slot.
              </p>
              <ul className="space-y-2">
                {[
                  'Free for every current CUBE student',
                  'Book your slot in the student portal',
                  'Add your question so the tutor can prep',
                  'Bookings close 24 hours before the slot',
                ].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-[#325099] mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:pl-8">
              <HowItWorksMockup />
            </div>
          </div>

          {/* Row 2 — Schedule (reversed) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:pr-8 order-2 md:order-1">
              <DropInScheduleMockup />
            </div>
            <div className="order-1 md:order-2">
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Schedule
              </p>
              <h2
                className="text-2xl md:text-3xl font-light text-[#364466] mb-5 leading-snug"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Extra sessions when exams are near
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Drop-ins run weekly leading up to school assessments, half-yearly
                exams, trial HSC, and the HSC itself. We add extra sessions during
                exam weeks so there’s always a tutor available when you need one.
              </p>
              <ul className="space-y-2">
                {[
                  '4+ sessions per week during exam season',
                  'Coverage rotates across all subjects',
                  'Schedule sent to students each fortnight',
                  'Held at the Chatswood centre — online option available',
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
            { href: '/why-cube/small-classes',    label: 'Small Classes' },
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
