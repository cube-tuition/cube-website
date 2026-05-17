import Link from 'next/link'

export default function WhyCubeHero({
  tagline,
  heading,
  description,
}: {
  tagline: string
  heading: string
  description: string
}) {
  return (
    <section className="bg-gradient-to-r from-[#F8FAFF] via-[#EEF4FF] to-[#BFD1FF] px-6 py-20 md:py-24">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/#why-cube"
          className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#325099] font-semibold mb-6 hover:text-[#062E63] transition"
        >
          <span>←</span> Why CUBE?
        </Link>
        <p
          className="text-xs tracking-[0.35em] uppercase text-[#325099] font-semibold mb-4"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          {tagline}
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#2A2035] mb-5"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          {heading}
        </h1>
        <p className="text-base md:text-lg text-[#2A2035]/70 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  )
}
