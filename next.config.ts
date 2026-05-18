import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Map old Wix URLs (still in Google's index) to the new Next.js routes.
  // All use permanent (308) so Google updates its index quickly.
  async redirects() {
    return [
      // ── Year pages: old Wix slugs → /courses/year-N ─────────────────────
      { source: '/year-7',    destination: '/courses/year-7',  permanent: true },
      { source: '/year-7-1',  destination: '/courses/year-7',  permanent: true },
      { source: '/year-8',    destination: '/courses/year-8',  permanent: true },
      { source: '/year-9',    destination: '/courses/year-9',  permanent: true },
      { source: '/year-10',   destination: '/courses/year-10', permanent: true },
      { source: '/year-11',   destination: '/courses/year-11', permanent: true },
      { source: '/year-12',   destination: '/courses/year-12', permanent: true },

      // ── Wix "copy-of-..." aliases ───────────────────────────────────────
      // The old navbar pointed Year 4/5/6 at copy-of pages.
      { source: '/copy-of-year-7',  destination: '/',                permanent: true }, // was Year 4 — removed
      { source: '/copy-of-year-4',  destination: '/courses/year-5',  permanent: true },
      { source: '/copy-of-year-5',  destination: '/courses/year-6',  permanent: true },
      // Defensive: a few other plausible copy-of-* slugs Google may have indexed
      { source: '/copy-of-year-8',  destination: '/courses/year-8',  permanent: true },
      { source: '/copy-of-year-9',  destination: '/courses/year-9',  permanent: true },
      { source: '/copy-of-year-10', destination: '/courses/year-10', permanent: true },
      { source: '/copy-of-year-11', destination: '/courses/year-11', permanent: true },
      { source: '/copy-of-year-12', destination: '/courses/year-12', permanent: true },

      // Year 4 doesn't exist anymore — send to home
      { source: '/year-4', destination: '/', permanent: true },

      // ── Contact ────────────────────────────────────────────────────────
      { source: '/contact-10', destination: '/contact', permanent: true },

      // ── Terms (Wix used "copy-of-privacy-policy" for Terms & Conditions) ─
      { source: '/copy-of-privacy-policy', destination: '/terms', permanent: true },

      // ── Free trial: old "2 Week Free Trial" page title variants ─────────
      { source: '/2-week-free-trial',  destination: '/free-trial', permanent: true },
      { source: '/2-weeks-free-trial', destination: '/free-trial', permanent: true },
      { source: '/free-trial-2-weeks', destination: '/free-trial', permanent: true },
      { source: '/free-trial-2-week',  destination: '/free-trial', permanent: true },
      { source: '/trial',              destination: '/free-trial', permanent: true },
      { source: '/book-trial',         destination: '/free-trial', permanent: true },
      { source: '/book-a-trial',       destination: '/free-trial', permanent: true },
    ]
  },
}

export default nextConfig
