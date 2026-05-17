import Link from 'next/link'
import CtaBanner from '@/components/CtaBanner'

const steps = [
  {
    number: '1',
    title: 'Complete a short form',
    description: `Tell us your year group and which subject you'd like to try. Takes about 2 minutes.`,
  },
  {
    number: '2',
    title: 'Attend your assigned class',
    description: `We will place you in the right class for your level and schedule. Come along and meet your tutor.`,
  },
  {
    number: '3',
    title: 'Decide with no pressure',
    description: `Enjoyed it? Enrol and the two trial lessons roll into your first term. Not for you? No charge at all.`,
  },
]

const features = [
  {
    label: 'Classes',
    title: 'Small groups',
    body: 'Maximum 7 students per class for genuine individual attention.',
    bg: 'bg-[#F4F4F4]',
    border: 'border-[#DEE7FF]',
    labelColor: 'text-[#325099]',
    titleColor: 'text-[#364466]',
    bodyColor: 'text-[#364466]/60',
  },
  {
    label: 'Resources',
    title: 'Full materials',
    body: 'Workbooks, homework and revision quizzes included from day one.',
    bg: 'bg-[#DEE7FF]',
    border: 'border-[#BACBFF]',
    labelColor: 'text-[#325099]',
    titleColor: 'text-[#364466]',
    bodyColor: 'text-[#364466]/60',
  },
  {
    label: 'Tutors',
    title: 'Expert teachers',
    body: 'Qualified specialists with years of experience and proven results.',
    bg: 'bg-[#364466]',
    border: 'border-transparent',
    labelColor: 'text-[#BACBFF]',
    titleColor: 'text-white',
    bodyColor: 'text-[#DEE7FF]/80',
  },
]

export default function FreeTrialPage() {
  return (
    <main>


      {/* ── How it works ── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#325099] font-semibold mb-4"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              How it works
            </p>
            <h2
              className="text-4xl md:text-5xl font-light tracking-wide text-[#364466]"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Three simple steps
            </h2>
          </div>

          {/* Steps — horizontal line connecting them */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-20 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-[22px] left-[calc(16.67%+22px)] right-[calc(16.67%+22px)] h-px bg-[#DEE7FF] z-0" />

            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col items-center text-center px-8 relative z-10">
                {/* Number circle */}
                <div
                  className="w-16 h-16 rounded-full bg-[#364466] text-white flex items-center justify-center font-semibold mb-6 text-base leading-none select-none"
                  style={{ fontFamily: 'var(--font-outfit)' }}
                >
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-[#364466] mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        
          {/* CTA button */}
          <div className="flex justify-center">
            <Link
              href="/free-trial-form"
              className="bg-[#364466] text-white px-10 py-4 rounded-full font-semibold tracking-[0.08em] text-sm hover:opacity-90 transition w-full sm:w-auto text-center"
            >
              Begin my trial
            </Link>
          </div>

          <p className="text-xs text-gray-400 mt-8 leading-relaxed text-center max-w-md mx-auto">
            *If you continue after the 2-week trial, the full term fee applies and the two trial lessons are counted as part of the term.
          </p>

        </div>
      </section>

      <CtaBanner />
    </main>
  )
}