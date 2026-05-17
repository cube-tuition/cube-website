export default function LocationSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-[0.25em] text-[#4C72D9] uppercase mb-4">
            Location
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#101828] mb-5">
            Visit CUBE Tuition in Chatswood
          </h2>

          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Located in the heart of Chatswood, CUBE Tuition is easily accessible
            for students and families across Sydney.
          </p>
        </div>

        {/* Image row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="rounded-3xl overflow-hidden shadow-lg bg-[#EEF4FF] h-64">
            <img
              src="/location-front.jpg"
              alt="CUBE Tuition reception"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg bg-[#EEF4FF] h-64">
            <img
              src="/location-building.jpg"
              alt="CUBE Tuition building"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg bg-[#EEF4FF] h-64">
            <img
              src="/location-classroom.jpg"
              alt="CUBE Tuition classroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info card */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#4C72D9] text-xl">
                  📍
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#101828] mb-1">
                    Level 6, 2 Help Street, Chatswood NSW 2067
                  </h3>
                  <p className="text-gray-500">
                    Conveniently located near Chatswood Station.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#4C72D9] text-xl">
                  🚶
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#101828] mb-1">
                    Easy access by public transport
                  </h3>
                  <p className="text-gray-500">
                    Close to train, metro and bus connections.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#4C72D9] text-xl">
                  🕒
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#101828] mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-gray-500">Mon – Fri: 4:00pm – 8:00pm</p>
                  <p className="text-gray-500">Saturday: 11:00am – 6:00pm</p>
                  <p className="text-gray-500">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map card */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 min-h-[360px]">
            <iframe
              title="CUBE Tuition Location"
              src="https://www.google.com/maps?q=Level%206%2C%202%20Help%20Street%2C%20Chatswood%20NSW%202067&output=embed"
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}