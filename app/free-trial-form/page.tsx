'use client'

import { useState } from 'react'
import Link from 'next/link'

const YEARS = ['Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12']

const SUBJECTS: Record<string, string[]> = {
  'Year 5':  ['English', 'Maths'],
  'Year 6':  ['English', 'Maths'],
  'Year 7':  ['English', 'Maths', 'Science'],
  'Year 8':  ['English', 'Maths', 'Science'],
  'Year 9':  ['English', 'Maths', 'Science'],
  'Year 10': ['English', 'Maths', 'Science'],
  'Year 11': ['English Standard', 'English Advanced', 'Maths Standard', 'Maths Advanced', 'Maths Ext 1', 'Chemistry'],
  'Year 12': ['Maths Standard', 'Maths Advanced', 'Maths Ext 1', 'Maths Ext 2', 'Chemistry'],
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const DAY_SHORT: Record<string, string> = {
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
}

const WEEKDAY_SLOTS = ['4:00pm – 6:00pm', '6:00pm – 8:00pm']
const SATURDAY_SLOTS = [
  '10:00am – 12:00pm',
  '12:00pm – 2:00pm',
  '2:00pm – 4:00pm',
  '4:00pm – 6:00pm',
]

const SLOTS_BY_DAY: Record<string, string[]> = {
  Monday:    WEEKDAY_SLOTS,
  Tuesday:   WEEKDAY_SLOTS,
  Wednesday: WEEKDAY_SLOTS,
  Thursday:  WEEKDAY_SLOTS,
  Friday:    WEEKDAY_SLOTS,
  Saturday:  SATURDAY_SLOTS,
}

const STEPS = ['Year', 'Subjects', 'Availability', 'Student', 'Parent', 'Done']

type FormData = {
  year: string
  subjects: string[]
  /** Per-day selected time slots, e.g. { Monday: ['4:00pm – 6:00pm'], Saturday: ['10:00am – 12:00pm'] } */
  availability: Record<string, string[]>
  studentFirstName: string
  studentLastName: string
  studentEmail: string
  studentPhone: string
  school: string
  referredBy: string
  howHeard: string
  parentFirstName: string
  parentLastName: string
  relationship: string
  parentEmail: string
  parentPhone: string
  notes: string
}

// Keep in sync with cube-portal/lib/howHeard.js (HOW_HEARD_CHANNELS)
const HOW_HEARD_OPTIONS = [
  'Referral (friend / family)',
  'Google Search',
  'Google Maps',
  'Social media',
  'School word of mouth',
  'Flyer / local advertising',
  'Walked past',
  'Returning family',
  'Other',
]

export default function FreeTrialFormPage() {
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState<FormData>({
    year: '',
    subjects: [],
    availability: {},
    studentFirstName: '',
    studentLastName: '',
    studentEmail: '',
    studentPhone: '',
    school: '',
    referredBy: '',
    howHeard: '',
    parentFirstName: '',
    parentLastName: '',
    relationship: '',
    parentEmail: '',
    parentPhone: '',
    notes: '',
  })

  function toggleSubject(s: string) {
    setForm(f => ({
      ...f,
      subjects: f.subjects.includes(s)
        ? f.subjects.filter(x => x !== s)
        : [...f.subjects, s],
    }))
  }

  function toggleSlot(day: string, time: string) {
    setForm(f => {
      const current = f.availability[day] ?? []
      const next = current.includes(time)
        ? current.filter(t => t !== time)
        : [...current, time]
      const updated = { ...f.availability }
      if (next.length === 0) delete updated[day]
      else updated[day] = next
      return { ...f, availability: updated }
    })
  }

  const totalSlots = Object.values(form.availability).reduce(
    (sum, arr) => sum + arr.length,
    0
  )

  async function handleSubmit() {
    setStatus('sending')
    try {
      const res = await fetch('/api/free-trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setStep(5)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full bg-[#F8FAFF] border border-[#DEE7FF] rounded-2xl px-5 py-4 text-sm text-[#364466] placeholder-[#364466]/40 focus:outline-none focus:border-[#325099] transition'

  return (
    <main className="min-h-screen bg-[#F8FAFF]">

      {/* Header */}
      <div className="bg-[#BACEFF] px-6 py-16 text-center">
        <p
          className="text-xs tracking-[0.35em] uppercase text-[#325099] font-semibold mb-4"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          Free Trial
        </p>
        <h1
          className="text-4xl md:text-5xl font-light tracking-wide text-[#364466]"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          Book your free trial
        </h1>
        <p className="text-[#364466]/65 mt-4 text-sm max-w-sm mx-auto">
          Takes 2 minutes. No payment required.
        </p>
      </div>

      {/* Progress bar */}
      {step < 5 && (
        <div className="bg-white border-b border-[#DEE7FF] px-6 py-4">
          <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              {STEPS.slice(0, 5).map((s, i) => (
                <div key={s} className="flex items-center gap-1">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                      i < step
                        ? 'bg-[#364466] text-white'
                        : i === step
                        ? 'bg-[#BACEFF] text-[#364466] ring-2 ring-[#364466]/20'
                        : 'bg-[#F4F4F4] text-[#364466]/30'
                    }`}
                  >
                    {i < step ? '✓' : i + 1}
                  </div>
                  <span
                    className={`text-xs font-medium hidden sm:block ${
                      i === step ? 'text-[#364466]' : 'text-[#364466]/40'
                    }`}
                  >
                    {s}
                  </span>
                  {i < 4 && (
                    <div className={`w-6 h-px mx-1 ${i < step ? 'bg-[#364466]' : 'bg-[#DEE7FF]'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Form card */}
      <div className="max-w-xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl border border-[#DEE7FF] shadow-sm p-8 md:p-10">

          {/* ── Step 0: Year ── */}
          {step === 0 && (
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-3"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Step 1 of 5
              </p>
              <h2
                className="text-2xl font-light text-[#364466] mb-2"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                What year are you in?
              </h2>
              <p className="text-sm text-[#364466]/50 mb-8">
                Select your current school year.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {YEARS.map(year => (
                  <button
                    key={year}
                    onClick={() => {
                      setForm(f => ({ ...f, year, subjects: [] }))
                      setStep(1)
                    }}
                    className={`rounded-2xl border py-4 text-sm font-semibold transition-all ${
                      form.year === year
                        ? 'bg-[#364466] text-white border-[#364466]'
                        : 'bg-[#F8FAFF] text-[#364466] border-[#DEE7FF] hover:border-[#364466]/40 hover:bg-[#EEF2FF]'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 1: Subjects ── */}
          {step === 1 && (
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-3"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Step 2 of 5
              </p>
              <h2
                className="text-2xl font-light text-[#364466] mb-2"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Which subjects?
              </h2>
              <p className="text-sm text-[#364466]/50 mb-8">
                Select all subjects you would like to trial for {form.year}.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {(SUBJECTS[form.year] || []).map(subject => (
                  <button
                    key={subject}
                    onClick={() => toggleSubject(subject)}
                    className={`rounded-2xl border py-4 px-4 text-sm font-semibold transition-all text-left ${
                      form.subjects.includes(subject)
                        ? 'bg-[#364466] text-white border-[#364466]'
                        : 'bg-[#F8FAFF] text-[#364466] border-[#DEE7FF] hover:border-[#364466]/40 hover:bg-[#EEF2FF]'
                    }`}
                  >
                    <span className="mr-2">
                      {form.subjects.includes(subject) ? '✓' : '+'}
                    </span>
                    {subject}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(0)}
                  className="flex-1 border border-[#DEE7FF] text-[#364466]/60 rounded-full py-3 text-sm font-semibold hover:opacity-70 transition"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(2)}
                  disabled={form.subjects.length === 0}
                  className="flex-1 bg-[#364466] text-white rounded-full py-3 text-sm font-semibold hover:opacity-85 transition disabled:opacity-30"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* ── Step 2: Availability ── */}
          {step === 2 && (
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-3"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Step 3 of 5
              </p>
              <h2
                className="text-2xl font-light text-[#364466] mb-2"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                When are you free?
              </h2>
              <p className="text-sm text-[#364466]/50 mb-6">
                Tap every time slot you can do. Pick as many or as few as you like —
                we&apos;ll match you to a class that fits.
              </p>

              <div className="rounded-2xl border border-[#DEE7FF] bg-[#F8FAFF] overflow-hidden mb-3">
                {DAYS.map((day, idx) => {
                  const slots = SLOTS_BY_DAY[day]
                  const selected = form.availability[day] ?? []
                  return (
                    <div
                      key={day}
                      className={`flex items-start gap-3 px-4 py-3 ${
                        idx !== DAYS.length - 1 ? 'border-b border-[#DEE7FF]' : ''
                      }`}
                    >
                      <p
                        className="text-[11px] tracking-[0.2em] uppercase text-[#325099]/70 font-semibold w-10 shrink-0 pt-2"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                      >
                        {DAY_SHORT[day]}
                      </p>
                      <div className="flex flex-wrap gap-2 flex-1">
                        {slots.map(slot => {
                          const isSelected = selected.includes(slot)
                          return (
                            <button
                              key={slot}
                              onClick={() => toggleSlot(day, slot)}
                              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all tabular-nums ${
                                isSelected
                                  ? 'bg-[#364466] text-white border-[#364466]'
                                  : 'bg-white text-[#364466] border-[#DEE7FF] hover:border-[#364466]/40 hover:bg-[#EEF2FF]'
                              }`}
                            >
                              {slot}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>

              <p className="text-xs text-[#364466]/40 mb-8">
                {totalSlots === 0
                  ? 'No slots selected yet.'
                  : `${totalSlots} slot${totalSlots === 1 ? '' : 's'} selected`}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-[#DEE7FF] text-[#364466]/60 rounded-full py-3 text-sm font-semibold hover:opacity-70 transition"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={totalSlots === 0}
                  className="flex-1 bg-[#364466] text-white rounded-full py-3 text-sm font-semibold hover:opacity-85 transition disabled:opacity-30"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* ── Step 3: Student Details ── */}
          {step === 3 && (
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-3"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Step 4 of 5
              </p>
              <h2
                className="text-2xl font-light text-[#364466] mb-2"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Student details
              </h2>
              <p className="text-sm text-[#364466]/50 mb-8">
                Tell us about the student joining the trial.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="First name"
                    value={form.studentFirstName}
                    onChange={e => setForm(f => ({ ...f, studentFirstName: e.target.value }))}
                    className={inputClass}
                  />
                  <input
                    placeholder="Last name"
                    value={form.studentLastName}
                    onChange={e => setForm(f => ({ ...f, studentLastName: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Student email"
                  value={form.studentEmail}
                  onChange={e => setForm(f => ({ ...f, studentEmail: e.target.value }))}
                  className={inputClass}
                />
                <input
                  placeholder="Student phone number"
                  value={form.studentPhone}
                  onChange={e => setForm(f => ({ ...f, studentPhone: e.target.value }))}
                  className={inputClass}
                />
                <input
                  placeholder="School name"
                  value={form.school}
                  onChange={e => setForm(f => ({ ...f, school: e.target.value }))}
                  className={inputClass}
                />
                <select
                  value={form.howHeard}
                  onChange={e => setForm(f => ({ ...f, howHeard: e.target.value }))}
                  className={`${inputClass} ${form.howHeard ? '' : 'text-[#364466]/40'}`}
                >
                  <option value="">How did you hear about us?</option>
                  {HOW_HEARD_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                {/* Referred-by only appears when they chose Referral — keeps the
                    form short while still capturing the $50 program's referrer name */}
                {form.howHeard === 'Referral (friend / family)' && (
                  <div>
                    <input
                      placeholder="Who referred you? (you both get $50 off!)"
                      value={form.referredBy}
                      onChange={e => setForm(f => ({ ...f, referredBy: e.target.value }))}
                      className={inputClass}
                    />
                    {!form.referredBy && (
                      <p className="text-[11px] text-[#364466]/50 mt-1 px-1">Tell us their name so both families receive the $50 referral discount.</p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 border border-[#DEE7FF] text-[#364466]/60 rounded-full py-3 text-sm font-semibold hover:opacity-70 transition"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  disabled={!form.studentFirstName || !form.studentLastName}
                  className="flex-1 bg-[#364466] text-white rounded-full py-3 text-sm font-semibold hover:opacity-85 transition disabled:opacity-30"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* ── Step 4: Parent Details ── */}
          {step === 4 && (
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase text-[#325099] font-semibold mb-3"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Step 5 of 5
              </p>
              <h2
                className="text-2xl font-light text-[#364466] mb-2"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Parent / Guardian details
              </h2>
              <p className="text-sm text-[#364466]/50 mb-8">
                We will use these details to confirm the trial booking.
              </p>

              {/* Summary pill */}
              <div className="bg-[#F8FAFF] border border-[#DEE7FF] rounded-2xl px-5 py-4 mb-6 flex flex-wrap gap-2">
                <span className="text-xs bg-[#364466] text-white px-3 py-1 rounded-full font-medium">
                  {form.year}
                </span>
                {form.subjects.map(s => (
                  <span key={s} className="text-xs bg-[#DEE7FF] text-[#364466] px-3 py-1 rounded-full font-medium">
                    {s}
                  </span>
                ))}
                {DAYS.flatMap(day =>
                  (form.availability[day] ?? []).map(time => (
                    <span
                      key={`${day}-${time}`}
                      className="text-xs bg-[#BACEFF] text-[#364466] px-3 py-1 rounded-full font-medium tabular-nums"
                    >
                      {DAY_SHORT[day]} · {time}
                    </span>
                  ))
                )}
              </div>

              <div className="flex flex-col gap-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="First name"
                    value={form.parentFirstName}
                    onChange={e => setForm(f => ({ ...f, parentFirstName: e.target.value }))}
                    className={inputClass}
                  />
                  <input
                    placeholder="Last name"
                    value={form.parentLastName}
                    onChange={e => setForm(f => ({ ...f, parentLastName: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <select
                  value={form.relationship}
                  onChange={e => setForm(f => ({ ...f, relationship: e.target.value }))}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>Relationship to student</option>
                  <option value="Mother">Mother</option>
                  <option value="Father">Father</option>
                  <option value="Guardian">Guardian</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.parentEmail}
                  onChange={e => setForm(f => ({ ...f, parentEmail: e.target.value }))}
                  className={inputClass}
                />
                <input
                  placeholder="Phone number"
                  value={form.parentPhone}
                  onChange={e => setForm(f => ({ ...f, parentPhone: e.target.value }))}
                  className={inputClass}
                />
                <textarea
                  placeholder="Anything else you'd like us to know? (optional)"
                  value={form.notes}
                  onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                  rows={3}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center mb-4">
                  Something went wrong. Please email us at admin@cubetuition.com.au
                </p>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 border border-[#DEE7FF] text-[#364466]/60 rounded-full py-3 text-sm font-semibold hover:opacity-70 transition"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending' || !form.parentFirstName || !form.parentEmail}
                  className="flex-1 bg-[#364466] text-white rounded-full py-3 text-sm font-semibold hover:opacity-85 transition disabled:opacity-30"
                >
                  {status === 'sending' ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          )}

          {/* ── Step 5: Success ── */}
          {step === 5 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#DEE7FF] flex items-center justify-center mx-auto mb-6">
                <span className="text-[#325099] text-2xl font-bold">✓</span>
              </div>
              <h2
                className="text-2xl font-light text-[#364466] mb-3"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                You are all set!
              </h2>
              <p className="text-sm text-[#364466]/60 leading-relaxed mb-8 max-w-xs mx-auto">
                Thanks {form.parentFirstName}! We have received your trial request and will be in touch within 1 business day to confirm your class.
              </p>
              <div className="bg-[#F8FAFF] border border-[#DEE7FF] rounded-2xl px-5 py-4 mb-8 text-left">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#325099] font-semibold mb-3">
                  Your booking summary
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#364466] text-white px-3 py-1 rounded-full font-medium">
                    {form.year}
                  </span>
                  {form.subjects.map(s => (
                    <span key={s} className="text-xs bg-[#DEE7FF] text-[#364466] px-3 py-1 rounded-full font-medium">
                      {s}
                    </span>
                  ))}
                  {DAYS.flatMap(day =>
                    (form.availability[day] ?? []).map(time => (
                      <span
                        key={`${day}-${time}`}
                        className="text-xs bg-[#BACEFF] text-[#364466] px-3 py-1 rounded-full font-medium tabular-nums"
                      >
                        {DAY_SHORT[day]} · {time}
                      </span>
                    ))
                  )}
                </div>
              </div>
              <Link
                href="/"
                className="inline-block bg-[#364466] text-white px-10 py-3 rounded-full text-sm font-semibold hover:opacity-85 transition"
              >
                Back to home
              </Link>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}