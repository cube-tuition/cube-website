import Link from 'next/link'

const years = ['5', '6', '7', '8', '9', '10', '11', '12']

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#39496B] to-[#2A3654] text-[#DCE5FF]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-16">

        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-block text-2xl md:text-3xl font-light tracking-wide text-white"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              CUBE Tuition
            </Link>
            <p className="mt-3 text-sm text-[#DCE5FF]/60 leading-relaxed max-w-xs">
              Small-group tutoring for Years 5 – 12 in Chatswood, Sydney.
            </p>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">

            {/* About */}
            <div>
              <p
                className="text-[10px] tracking-[0.3em] uppercase text-[#BACBFF] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                About
              </p>
              <div className="flex flex-col gap-2.5 text-sm">
                <Link href="/#why-cube" className="text-[#DCE5FF]/80 hover:text-white transition">
                  Our difference
                </Link>
                <Link href="/faq" className="text-[#DCE5FF]/80 hover:text-white transition">
                  FAQs
                </Link>
                <Link href="/timetable" className="text-[#DCE5FF]/80 hover:text-white transition">
                  Timetable
                </Link>
                <Link href="/free-trial" className="text-[#DCE5FF]/80 hover:text-white transition">
                  Free trial
                </Link>
              </div>
            </div>

            {/* Courses */}
            <div>
              <p
                className="text-[10px] tracking-[0.3em] uppercase text-[#BACBFF] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Courses
              </p>
              <div className="grid grid-cols-2 gap-x-5 gap-y-2.5 text-sm">
                {years.map((year) => (
                  <Link
                    key={year}
                    href={`/courses/year-${year}`}
                    className="text-[#DCE5FF]/80 hover:text-white transition"
                  >
                    Year {year}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <p
                className="text-[10px] tracking-[0.3em] uppercase text-[#BACBFF] font-semibold mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Get in touch
              </p>
              <div className="flex flex-col gap-2.5 text-sm leading-relaxed">
                <a
                  href="mailto:admin@cubetuition.com.au"
                  className="text-[#DCE5FF]/80 hover:text-white transition break-all"
                >
                  admin@cubetuition.com.au
                </a>
                <a
                  href="tel:0405369682"
                  className="text-[#DCE5FF]/80 hover:text-white transition tabular-nums"
                >
                  0405 369 682
                </a>
                <p className="text-[#DCE5FF]/60">
                  Level 6, 2 Help Street<br />
                  Chatswood NSW 2067
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom: copyright + legal */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-3 text-xs text-[#DCE5FF]/50">
          <p>© {new Date().getFullYear()} CUBE Tuition. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
