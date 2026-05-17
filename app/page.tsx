import Link from 'next/link'
import CtaBanner from '@/components/CtaBanner'
import LocationSection from '@/components/LocationSection'
import TestimonialSection from '@/components/TestimonialSection'
import Differentiators from '@/components/Differentiators'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#EEF4FF] to-[#BFD1FF] px-6 py-24 md:py-32">
        {/* Decorative glow blobs */}
        <div
          className="absolute top-16 -right-20 w-[28rem] h-[28rem] rounded-full bg-[#BACBFF]/40 blur-3xl pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-white/50 blur-3xl pointer-events-none"
          aria-hidden
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Eyebrow */}
          <span
            className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-7 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 backdrop-blur-sm"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#325099]" aria-hidden />
            Years 5 – 12 · Chatswood, Sydney
          </span>

          {/* Heading */}
          <h1
            className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight text-[#2A2035] mb-7"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Small classes.
            <br />
            <span className="italic text-[#325099]">Stronger results.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#2A2035]/70 max-w-xl leading-relaxed mb-10">
            Tutoring built around every student — expert tutors, structured
            resources, and progress reports that show real improvement every
            term.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/free-trial"
              className="inline-flex items-center justify-center bg-[#39496B] text-white px-8 py-4 rounded-full text-sm md:text-base font-semibold tracking-[0.12em] hover:opacity-90 transition shadow-md"
            >
              Begin my trial
            </Link>
            <Link
              href="/timetable"
              className="inline-flex items-center justify-center bg-white/80 text-[#39496B] px-8 py-4 rounded-full text-sm md:text-base font-semibold tracking-[0.12em] border border-[#DEE7FF] hover:bg-white transition backdrop-blur-sm"
            >
              See timetable
            </Link>
          </div>

          {/* Trust ticks */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-[#364466]/70 font-medium">
            {[
              'Classes capped at 7 students',
              'Progress tracked every term',
              'Expert subject specialists',
            ].map(t => (
              <span key={t} className="inline-flex items-center gap-2">
                <span className="text-[#325099]" aria-hidden>✓</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why CUBE — 4 differentiators */}
      <Differentiators />

      <LocationSection />

      <TestimonialSection />

      <CtaBanner />
    </main>
  )
}
