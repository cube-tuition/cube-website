export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1
        className="text-4xl font-light text-[#364466] mb-8"
        style={{ fontFamily: 'var(--font-outfit)' }}
      >
        Terms & Conditions
      </h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: 2025</p>
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <p>
          By enrolling with CUBE Tuition you agree to the following terms and
          conditions.
        </p>
        <h2 className="text-lg font-semibold text-[#364466]">Fees and payment</h2>
        <p>
          Fees are charged per term and are due at the start of each term.
          The 2-week free trial rolls into the first term invoice if you
          choose to continue.
        </p>
        <h2 className="text-lg font-semibold text-[#364466]">Cancellation</h2>
        <p>
          Please provide at least one week's notice if you wish to withdraw
          from a course. Refunds are not provided for missed lessons.
        </p>
        <h2 className="text-lg font-semibold text-[#364466]">Contact</h2>
        <p>
          For any questions please contact us at{' '}
          <a href="mailto:admin@cubetuition.com.au" className="text-[#325099]">
            admin@cubetuition.com.au
          </a>
        </p>
      </div>
    </main>
  )
}