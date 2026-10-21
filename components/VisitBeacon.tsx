'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/*
 * Pageview beacon — fires once per route change, straight to the portal's
 * public /api/website-visit endpoint, which aggregates daily counts for the
 * directors' Website monitoring page. Deliberately basic analytics: a path
 * and a "first visit today" flag (this browser's own localStorage mark) —
 * no cookies, no IDs, no third parties. Fire-and-forget: a failed beacon
 * must never affect the page.
 */
const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL ?? 'https://portal.cubetuition.com.au'

export default function VisitBeacon() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return
    try {
      // First pageview of the (Sydney) day for this browser → counted as a visitor.
      const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' })
      const KEY = 'cube_visit_day'
      const first = localStorage.getItem(KEY) !== today
      if (first) localStorage.setItem(KEY, today)

      const body = JSON.stringify({ path: pathname, first })
      const url = `${PORTAL_URL}/api/website-visit`
      // sendBeacon survives navigation. The blob is text/plain because that is
      // a CORS-safelisted type (an application/json beacon gets preflighted and
      // dropped); the endpoint parses the body as JSON regardless.
      if (!(navigator.sendBeacon && navigator.sendBeacon(url, new Blob([body], { type: 'text/plain;charset=UTF-8' })))) {
        fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, body, keepalive: true }).catch(() => {})
      }
    } catch { /* storage blocked or offline — never let analytics break the site */ }
  }, [pathname])

  return null
}
