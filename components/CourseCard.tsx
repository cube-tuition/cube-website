import Link from 'next/link'

type Props = {
  name: string
  price: number
  hoursPerLesson: number
  weeks: number
  /** Optional per-subject "What is included" bullets. Falls back to a generic 4-bullet list when omitted. */
  included?: string[]
}

const defaultIncluded = [
  'Weekly structured lessons',
  'Workbooks and homework',
  'Revision quizzes and assessments',
  'Progress tracking & Data analysis',
]

export default function CourseCard({
  name,
  price,
  hoursPerLesson,
  weeks,
  included,
}: Props) {
  const bullets = included && included.length > 0 ? included : defaultIncluded
  return (
    <div className="group relative rounded-[2rem] bg-white border border-[#DEE7FF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      <div className="p-8 flex flex-col flex-1">
        <div className="mb-8">
          <p className="text-xs tracking-[0.25em] uppercase text-[#325099] font-semibold mb-3">
            Course
          </p>

          <h3 className="text-2xl font-semibold text-[#364466] leading-tight">
            {name}
          </h3>
        </div>

        <div className="mb-8">
          <p className="text-4xl font-semibold text-[#325099]">
            ${price}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            per {weeks}-week term
          </p>
        </div>

        <div className="rounded-2xl bg-[#F8FAFF] border border-[#DEE7FF] px-5 py-4 mb-8 flex">
          <div className="flex-1 flex flex-col gap-1">
            <p className="text-xs text-gray-400">Lesson length</p>
            <p className="text-[15px] font-semibold text-[#364466]">{hoursPerLesson} hrs</p>
          </div>
          <div className="flex-1 flex flex-col gap-1 border-l border-[#DEE7FF] pl-5">
            <p className="text-xs text-gray-400">Term length</p>
            <p className="text-[15px] font-semibold text-[#364466]">{weeks} weeks</p>
          </div>
        </div>

        <p className="text-xs tracking-[0.2em] uppercase text-[#325099]/70 font-semibold mb-3">
          What is included
        </p>
        <ul className="space-y-3 text-sm text-gray-600 mb-8 flex-1">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="text-[#325099] shrink-0">✓</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/free-trial"
          className="block w-full text-center bg-[#364466] text-white rounded-full py-4 px-6 font-semibold tracking-[0.12em] text-sm hover:opacity-85 transition mt-auto"
        >
          Trial Now
        </Link>
      </div>
    </div>
  )
}
