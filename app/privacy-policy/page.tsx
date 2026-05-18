export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1
        className="text-4xl font-light text-[#364466] mb-8"
        style={{ fontFamily: 'var(--font-outfit)' }}
      >
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: 2025</p>
      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <p>
          CUBE Tuition is committed to protecting your privacy. This policy
          explains how we collect, use, and store your personal information.
        </p>
        <h2 className="text-lg font-semibold text-[#364466]">Information we collect</h2>
        <p>
          We collect information you provide when filling out enrolment or
          contact forms, including name, email address, phone number, and
          school details.
        </p>
        <h2 className="text-lg font-semibold text-[#364466]">How we use your information</h2>
        <p>
          Your information is used solely to contact you regarding your
          enrolment or enquiry. We do not sell or share your data with third
          parties.
        </p>
        <h2 className="text-lg font-semibold text-[#364466]">Contact</h2>
        <p>
          For any privacy related questions please contact us at{' '}
          <a href="mailto:admin@cubetuition.com.au" className="text-[#325099]">
            admin@cubetuition.com.au
          </a>
        </p>
      </div>
    </main>
  )
}