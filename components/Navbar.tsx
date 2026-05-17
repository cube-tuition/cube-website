'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const years = ['5', '6', '7', '8', '9', '10', '11', '12']

export default function Navbar() {
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const coursesRef = useRef<HTMLDivElement>(null)

  // Close the courses dropdown when clicking anywhere outside it,
  // or when pressing Escape.
  useEffect(() => {
    if (!coursesOpen) return

    function handleClickOutside(e: MouseEvent) {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node)) {
        setCoursesOpen(false)
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setCoursesOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [coursesOpen])

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold tracking-tight text-[#062E63]"
        >
          CUBE Tuition
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9 text-base font-medium text-gray-600">
          <Link href="/faq" className="hover:text-[#062E63] transition">
            FAQ
          </Link>

          {/* Courses Dropdown */}
          <div ref={coursesRef} className="relative">
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              className="hover:text-[#062E63] transition flex items-center gap-1"
            >
              Courses
              <span className="text-sm">⌄</span>
            </button>

            {coursesOpen && (
              <div className="absolute top-9 left-1/2 -translate-x-1/2 w-52 bg-white rounded-2xl shadow-lg border border-gray-100 p-3">
                <div className="flex flex-col gap-1">
                  {years.map((year) => (
                    <Link
                      key={year}
                      href={`/courses/year-${year}`}
                      onClick={() => setCoursesOpen(false)}
                      className="text-left text-sm px-4 py-2.5 rounded-xl text-gray-600 hover:bg-[#DDE7FF] hover:text-[#062E63] transition"
                    >
                      Year {year}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/timetable" className="hover:text-[#062E63] transition">
            Timetable
          </Link>

          <Link href="/contact" className="hover:text-[#062E63] transition">
            Contact
          </Link>

          <Link
            href="/free-trial"
            className="bg-[#39496B] text-white px-6 py-2.5 rounded-full text-base font-semibold hover:opacity-90 transition"
          >
            Free Trial
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-3xl text-[#062E63]"
        >
          {mobileOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6">
          <div className="flex flex-col gap-5 text-base font-medium text-gray-700">
            <Link href="/faq" onClick={() => setMobileOpen(false)}>
              FAQ
            </Link>

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
                Courses
              </p>

              <div className="grid grid-cols-3 gap-2">
                {years.map((year) => (
                  <Link
                    key={year}
                    href={`/courses/year-${year}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-center bg-[#F4F7FC] rounded-xl py-2.5 hover:bg-[#DDE7FF] transition"
                  >
                    Year {year}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/timetable" onClick={() => setMobileOpen(false)}>
              Timetable
            </Link>

            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>

            <Link
              href="/free-trial"
              onClick={() => setMobileOpen(false)}
              className="bg-[#39496B] text-white text-center px-5 py-3 rounded-full font-semibold mt-2"
            >
              Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}