import { courseData } from '@/lib/courses'
import CourseCard from '@/components/CourseCard'
import CtaBanner from '@/components/CtaBanner'
import { notFound } from 'next/navigation'

// Pick a max-width per card so we fit more per row when there are more subjects.
// max-w-6xl container is 1152px; cards must total < that (incl. gaps) to fit a row.
function cardMaxWidth(count: number): string {
  if (count <= 2) return 'max-w-[420px]' // 2 per row (Y4-10)
  // 3, 4, or 5 cards all use 3 per row.
  // Y11 (4) → 3 + 1, Y12 (5) → 3 + 2.
  return 'max-w-[340px]'
}

export default function YearCoursePage({ yearId }: { yearId: string }) {
  const data = courseData[yearId]
  if (!data) return notFound()

  const maxW = cardMaxWidth(data.subjects.length)

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#F8FAFF] via-[#EEF4FF] to-[#BACBFF] px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs md:text-sm tracking-[0.35em] text-[#325099] font-semibold uppercase mb-5">
            CUBE Courses
          </p>

          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-[#364466] mb-6">
            {data.title}
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Structured small-group tutoring designed to build confidence,
            strengthen foundations and improve school performance.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-[2rem] bg-[#F4F4F4] p-8 border border-[#DEE7FF]">
              <p className="text-xs tracking-[0.25em] uppercase text-[#325099] font-semibold mb-4">
                Class Size
              </p>
              <h3 className="text-2xl font-semibold text-[#364466] mb-3">
                Small classes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maximum 7 students per class. Tutors give every student
                individual attention while keeping a strong class culture.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#DEE7FF] p-8 border border-[#BACBFF]">
              <p className="text-xs tracking-[0.25em] uppercase text-[#325099] font-semibold mb-4">
                Resources
              </p>
              <h3 className="text-2xl font-semibold text-[#364466] mb-3">
                Weekly materials
              </h3>
              <p className="text-[#364466] text-sm leading-relaxed">
                Every course includes structured workbooks, homework, revision
                quizzes and additional practice questions.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#364466] p-8">
              <p className="text-xs tracking-[0.25em] uppercase text-[#BACBFF] font-semibold mb-4">
                Progress Tracking
              </p>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Reports &amp; analytics
              </h3>
              <p className="text-[#DEE7FF] text-sm leading-relaxed">
                Detailed term reports, weekly quiz tracking and visual progress
                dashboards — so students and parents always know exactly where
                they stand and what to work on next.
              </p>
            </div>
          </div>

          {/* Course Cards */}
          <div className="mb-12 text-center">
            <p className="text-xs md:text-sm tracking-[0.35em] text-[#325099] font-semibold uppercase mb-4">
              Available Subjects
            </p>

            <h2 className="text-3xl md:text-4xl font-light tracking-wide text-[#364466]">
              Choose your course
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {data.subjects.map((subject) => (
              <div key={subject.name} className={`w-full ${maxW} flex`}>
                <CourseCard {...subject} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
