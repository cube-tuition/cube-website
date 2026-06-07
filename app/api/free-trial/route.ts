import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const DAY_ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export async function POST(req: Request) {
  const {
    year, subjects, availability,
    studentFirstName, studentLastName, studentEmail, studentPhone, school, referredBy,
    parentFirstName, parentLastName, relationship, parentEmail, parentPhone,
    notes,
  } = (await req.json()) as {
    year?: string
    subjects?: string[]
    availability?: Record<string, string[]>
    studentFirstName?: string
    studentLastName?: string
    studentEmail?: string
    studentPhone?: string
    school?: string
    referredBy?: string
    parentFirstName?: string
    parentLastName?: string
    relationship?: string
    parentEmail?: string
    parentPhone?: string
    notes?: string
  }

  // Forward submission to portal (non-fatal)
  const portalUrl = process.env.PORTAL_URL ?? 'https://portal.cubetuition.com.au'
  try {
    await fetch(`${portalUrl}/api/trial-submission`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        year, subjects, availability,
        studentFirstName, studentLastName, studentEmail, studentPhone, school, referredBy,
        parentFirstName, parentLastName, relationship, parentEmail, parentPhone,
        notes,
      }),
    })
  } catch (err) {
    console.error('[free-trial] Portal save failed (non-fatal):', err)
  }

  // Render availability grouped by day, in calendar order.
  const availabilityHtml = (() => {
    if (!availability || Object.keys(availability).length === 0) {
      return '<p><em>No availability provided.</em></p>'
    }
    const rows = DAY_ORDER
      .filter(d => (availability[d]?.length ?? 0) > 0)
      .map(d => `<li><strong>${d}:</strong> ${availability[d].join(', ')}</li>`)
      .join('')
    return `<ul>${rows}</ul>`
  })()

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'admin@cubetuition.com.au',
      subject: `New free trial — ${studentFirstName ?? ''} ${studentLastName ?? ''} (${year ?? 'unknown year'})`,
      html: `
        <h2>New Free Trial Request</h2>

        <h3>Student</h3>
        <p><strong>Name:</strong> ${studentFirstName ?? ''} ${studentLastName ?? ''}</p>
        <p><strong>Email:</strong> ${studentEmail || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${studentPhone || 'Not provided'}</p>
        <p><strong>Year:</strong> ${year ?? 'Not provided'}</p>
        <p><strong>Subjects:</strong> ${(subjects ?? []).join(', ') || 'Not provided'}</p>
        <p><strong>School:</strong> ${school || 'Not provided'}</p>
        <p><strong>Referred by:</strong> ${referredBy || 'Not provided'}</p>

        <h3>Availability</h3>
        ${availabilityHtml}

        <h3>Parent / Guardian</h3>
        <p><strong>Name:</strong> ${parentFirstName ?? ''} ${parentLastName ?? ''}</p>
        <p><strong>Relationship:</strong> ${relationship || 'Not provided'}</p>
        <p><strong>Email:</strong> ${parentEmail ?? 'Not provided'}</p>
        <p><strong>Phone:</strong> ${parentPhone || 'Not provided'}</p>

        <h3>Notes</h3>
        <p>${notes || 'None'}</p>
      `,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
