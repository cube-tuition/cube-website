'use client'

import { useState } from 'react'
import Link from 'next/link'
import CtaBanner from '@/components/CtaBanner'

const faqs = [
  {
    q: 'How does the 2-week trial work?',
    a: 'Try CUBE for two weeks with no obligation. If you choose to enrol, the two trial weeks will be included in your total term fee. If you feel it is not the right fit, there is no payment required — no strings attached.',
  },
  {
    q: 'Can I trial multiple courses?',
    a: 'Yes! Trial as many courses as you like. Mix and match Maths, English, and Science within your two-week window.',
  },
  {
    q: 'Can I join in the middle of the term?',
    a: "Yes! Jump in anytime. We'll bridge any gaps with catch-up materials, and your fees are pro-rated so you're only paying for the weeks you attend.",
  },
  {
    q: 'How do I enrol?',
    a: 'Two easy options: (1) Walk in to CUBE — our team will chat, advise, and help you enrol. (2) Fill out the free trial form and we’ll reply within 1 business day.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F8FAFF] via-[#EEF4FF] to-[#BFD1FF] px-6 py-24 md:py-28 text-center">
        <p
          className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#325099] font-semibold mb-4"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          FAQ
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight text-[#062E63] mb-5 leading-tight"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          Frequently Asked Questions
        </h1>
        <p className="text-[#062E63]/65 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Quick answers to common questions. Can&apos;t find what you&apos;re
          looking for?{' '}
          <Link
            href="/contact"
            className="text-[#325099] font-semibold hover:text-[#062E63] transition underline underline-offset-2"
          >
            Contact us
          </Link>
          {' '}directly.
        </p>
      </section>

      {/* FAQ list */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden transition-colors ${
                isOpen
                  ? 'border-[#BACBFF] bg-[#F8FAFF]'
                  : 'border-[#DEE7FF] bg-white hover:border-[#BACBFF]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 font-semibold text-[#364466]"
              >
                <span className="flex-1">{faq.q}</span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[#325099] text-xl leading-none transition-transform duration-200 ${
                    isOpen ? 'rotate-45 bg-[#DEE7FF]' : 'bg-[#F4F7FF]'
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm md:text-base text-[#364466]/70 leading-relaxed border-t border-[#DEE7FF] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          )
        })}
      </section>

      <CtaBanner />
    </main>
  )
}
