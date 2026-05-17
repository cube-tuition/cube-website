'use client'
import { useState } from 'react'
import CtaBanner from '@/components/CtaBanner'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName:  (form.elements.namedItem('lastName')  as HTMLInputElement).value,
      email:     (form.elements.namedItem('email')     as HTMLInputElement).value,
      phone:     (form.elements.namedItem('phone')     as HTMLInputElement).value,
      message:   (form.elements.namedItem('message')   as HTMLTextAreaElement).value,
    }
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    setStatus(res.ok ? 'sent' : 'error')
  }

  return (
    <main>
      <section className="bg-cube-light py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-cube-navy" style={{fontFamily: 'var(--font-outfit)'}}>Contact Us</h1>
        <p className="text-gray-500 mt-3">Questions? We'll get back to you as soon as possible.</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact details */}
        <div className="space-y-6">
          <div>
            <p className="font-semibold text-cube-navy mb-1">📞 Phone</p>
            <a href="tel:0405369682" className="text-cube-blue">0405 369 682</a>
          </div>
          <div>
            <p className="font-semibold text-cube-navy mb-1">✉️ Email</p>
            <a href="mailto:admin@cubetuition.com.au" className="text-cube-blue">admin@cubetuition.com.au</a>
          </div>
          <div>
            <p className="font-semibold text-cube-navy mb-1">📍 Address</p>
            <p className="text-gray-600">Level 6, 2 Help Street, Chatswood NSW 2067</p>
          </div>
          <div>
            <p className="font-semibold text-cube-navy mb-2">🕐 Opening Hours</p>
            <p className="text-gray-600">Mon – Fri: 4:00pm – 8:00pm</p>
            <p className="text-gray-600">Saturday: 10:00am – 5:00pm</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>

        {/* Form */}
        <div>
          <p
            className="text-[10px] tracking-[0.25em] uppercase text-[#325099] font-semibold mb-8"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Send a message
          </p>

          {status === 'sent' ? (
            <div className="rounded-2xl bg-[#F8FAFF] border border-[#DEE7FF] px-8 py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-[#DEE7FF] flex items-center justify-center mx-auto mb-5">
                <span className="text-[#325099] text-xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-[#364466] mb-2">Message sent!</h3>
              <p className="text-sm text-[#364466]/60">
                Thanks for reaching out. We will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First name"
                  required
                  className="w-full bg-[#F8FAFF] border border-[#DEE7FF] rounded-2xl px-5 py-4 text-sm text-[#364466] placeholder-[#364466]/40 focus:outline-none focus:border-[#325099] transition"
                />
                <input
                  name="lastName"
                  placeholder="Last name"
                  required
                  className="w-full bg-[#F8FAFF] border border-[#DEE7FF] rounded-2xl px-5 py-4 text-sm text-[#364466] placeholder-[#364466]/40 focus:outline-none focus:border-[#325099] transition"
                />
              </div>
              <input
                name="email"
                type="email"
                placeholder="Email address"
                required
                className="w-full bg-[#F8FAFF] border border-[#DEE7FF] rounded-2xl px-5 py-4 text-sm text-[#364466] placeholder-[#364466]/40 focus:outline-none focus:border-[#325099] transition"
              />
              <input
                name="phone"
                placeholder="Phone number (optional)"
                className="w-full bg-[#F8FAFF] border border-[#DEE7FF] rounded-2xl px-5 py-4 text-sm text-[#364466] placeholder-[#364466]/40 focus:outline-none focus:border-[#325099] transition"
              />
              <textarea
                name="message"
                placeholder="Your message..."
                rows={6}
                required
                className="w-full bg-[#F8FAFF] border border-[#DEE7FF] rounded-2xl px-5 py-4 text-sm text-[#364466] placeholder-[#364466]/40 focus:outline-none focus:border-[#325099] transition resize-none"
              />

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please email us at admin@cubetuition.com.au
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-[#364466] text-white rounded-full py-4 font-semibold tracking-[0.08em] text-sm hover:opacity-85 transition disabled:opacity-50 mt-2"
              >
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>

      </section>

      <CtaBanner />
    </main>
  )
}