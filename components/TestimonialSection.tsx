const testimonials = [
  {
    quote:
      'CUBE has helped my child become much more confident in Maths. The weekly homework and quizzes make it easy to see progress.',
    name: 'Year 6 Parent',
  },
  {
    quote:
      'The small class environment is really helpful. My child gets enough attention from the teacher while still learning with other students.',
    name: 'Year 8 Parent',
  },
  {
    quote:
      'The lessons are structured and the resources are very clear. We like that CUBE gives regular feedback and tracks student progress.',
    name: 'Year 10 Parent',
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-[#F4F4F4] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm tracking-[0.35em] text-[#325099] font-semibold uppercase mb-4">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-[#364466] mb-5">
            What families say about CUBE
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Our students and families value structured lessons, small classes,
            clear resources and consistent progress tracking.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`rounded-[2rem] p-8 md:p-10 shadow-sm border transition-all duration-300 hover:shadow-xl ${
                index === 1
                  ? 'bg-[#DEE7FF] border-[#BACBFF]'
                  : 'bg-white border-[#DEE7FF]'
              }`}
            >
              <div className="text-[#325099] text-4xl mb-6 leading-none">
                “
              </div>

              <p className="text-[#364466] text-sm md:text-base leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#BACBFF] flex items-center justify-center text-[#364466] font-bold">
                  {testimonial.name.charAt(0)}
                </div>

                <p className="text-sm font-semibold text-[#364466]">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}