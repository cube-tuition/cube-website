import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-[#EEF4FF] via-[#DDE7FF] to-[#BACBFF] px-6 py-20 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#325099] font-semibold mb-4"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          Free Trial
        </p>

        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-bold tracking-tight text-[#062E63] mb-5 leading-tight"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          Trial now, Decide later
        </h2>

        {/* Subtitle */}
        <p className="text-[#062E63]/75 text-sm md:text-base leading-relaxed max-w-md mb-10">
          Try us for 2 lessons, obligation free. Love it? Enrol and pay. Not
          for you? It’s on us.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/free-trial"
            className="bg-[#39496B] text-white px-8 py-3.5 rounded-full font-semibold tracking-[0.12em] text-xs md:text-sm text-center hover:opacity-90 transition shadow-sm"
          >
            Begin my trial
          </Link>

          <Link
            href="/contact"
            className="bg-white text-[#39496B] px-8 py-3.5 rounded-full font-semibold tracking-[0.12em] text-xs md:text-sm text-center border border-white hover:bg-[#F8FAFF] transition shadow-sm"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
