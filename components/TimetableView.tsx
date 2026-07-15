'use client'

import { useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import {
  days,
  dayFullName,
  formatTime,
  gridStartMin as DEFAULT_GRID_START,
  gridEndMin as DEFAULT_GRID_END,
  type ClassEntry,
  type Day,
  type Subject,
} from '@/lib/timetable'

// ── Subject styling tokens ──────────────────────────────────────────────────

type SubjectStyle = {
  block: string         // class block in grid view
  blockHover: string
  card: string          // card in list view
  cardHover: string
  text: string          // dark text colour
  accent: string        // accent / pill colour
  dot: string           // small subject dot hex
  ring: string          // focus ring colour
}

const subjectStyles: Record<Subject, SubjectStyle> = {
  Maths: {
    block: 'bg-[#DEE7FF] border-l-[3px] border-[#325099]',
    blockHover: 'hover:bg-[#C7D6FF]',
    card: 'bg-[#F4F7FF] border-[#DEE7FF]',
    cardHover: 'hover:border-[#BACBFF] hover:bg-[#EDF2FF]',
    text: 'text-[#1E3A8A]',
    accent: 'bg-[#325099] text-white',
    dot: '#325099',
    ring: 'focus-visible:ring-[#325099]',
  },
  English: {
    block: 'bg-[#FCE7F3] border-l-[3px] border-[#BE185D]',
    blockHover: 'hover:bg-[#FBCFE8]',
    card: 'bg-[#FDF5F9] border-[#FBE0EC]',
    cardHover: 'hover:border-[#F9C2DC] hover:bg-[#FCEAF2]',
    text: 'text-[#831843]',
    accent: 'bg-[#BE185D] text-white',
    dot: '#BE185D',
    ring: 'focus-visible:ring-[#BE185D]',
  },
  Science: {
    block: 'bg-[#D1FAE5] border-l-[3px] border-[#047857]',
    blockHover: 'hover:bg-[#A7F3D0]',
    card: 'bg-[#F1FCF6] border-[#CFEFDD]',
    cardHover: 'hover:border-[#A7DFBE] hover:bg-[#E4F8EC]',
    text: 'text-[#065F46]',
    accent: 'bg-[#047857] text-white',
    dot: '#047857',
    ring: 'focus-visible:ring-[#047857]',
  },
}

// ── Overlap layout algorithm ────────────────────────────────────────────────

type LaidOut = ClassEntry & { col: number; totalCols: number }

function layoutDay(items: ClassEntry[]): LaidOut[] {
  const sorted = [...items].sort((a, b) => a.startMin - b.startMin || a.endMin - b.endMin)
  const n = sorted.length
  if (n === 0) return []

  // Greedy column assignment
  const colEnds: number[] = []
  const cols: number[] = []
  for (const item of sorted) {
    let placed = -1
    for (let i = 0; i < colEnds.length; i++) {
      if (colEnds[i] <= item.startMin) {
        placed = i
        break
      }
    }
    if (placed === -1) {
      placed = colEnds.length
      colEnds.push(item.endMin)
    } else {
      colEnds[placed] = item.endMin
    }
    cols.push(placed)
  }

  // Union-find clusters of transitively overlapping items
  const parent = Array.from({ length: n }, (_, i) => i)
  const find = (x: number): number => (parent[x] === x ? x : (parent[x] = find(parent[x])))
  const union = (a: number, b: number) => {
    const ra = find(a), rb = find(b)
    if (ra !== rb) parent[ra] = rb
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = sorted[i], b = sorted[j]
      if (a.startMin < b.endMin && b.startMin < a.endMin) union(i, j)
    }
  }
  const clusterMaxCol: Record<number, number> = {}
  for (let i = 0; i < n; i++) {
    const root = find(i)
    clusterMaxCol[root] = Math.max(clusterMaxCol[root] ?? 0, cols[i])
  }

  return sorted.map((item, i) => ({
    ...item,
    col: cols[i],
    totalCols: clusterMaxCol[find(i)] + 1,
  }))
}

// ── Component ───────────────────────────────────────────────────────────────

const HOUR_PX = 80

const subjectOptions: Array<{ value: 'all' | Subject; label: string }> = [
  { value: 'all',     label: 'All subjects' },
  { value: 'Maths',   label: 'Maths' },
  { value: 'English', label: 'English' },
  { value: 'Science', label: 'Science' },
]

const yearOptions: Array<{ value: 'all' | number; label: string }> = [
  { value: 'all', label: 'All years' },
  ...[5, 6, 7, 8, 9, 10, 11, 12].map((y) => ({ value: y, label: `Year ${y}` })),
]

type ViewMode = 'grid' | 'list'

export default function TimetableView({ classes = [] }: { classes?: ClassEntry[] }) {
  const [subject, setSubject] = useState<'all' | Subject>('all')
  const [year, setYear] = useState<'all' | number>('all')
  const [view, setView] = useState<ViewMode>('grid')
  const [selected, setSelected] = useState<ClassEntry | null>(null)

  // Grid bounds adapt to the classes shown, falling back to the default window.
  const gridStartMin = useMemo(() => {
    const mins = classes.map((c) => c.startMin)
    return mins.length ? Math.min(DEFAULT_GRID_START, Math.floor(Math.min(...mins) / 60) * 60) : DEFAULT_GRID_START
  }, [classes])
  const gridEndMin = useMemo(() => {
    const maxes = classes.map((c) => c.endMin)
    return maxes.length ? Math.max(DEFAULT_GRID_END, Math.ceil(Math.max(...maxes) / 60) * 60) : DEFAULT_GRID_END
  }, [classes])

  // Default to list view on small screens
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
      setView('list')
    }
  }, [])

  const filtered = useMemo(() => {
    return classes.filter((c) => {
      if (subject !== 'all' && c.subject !== subject) return false
      if (year !== 'all' && c.yearLevel !== year) return false
      return true
    })
  }, [classes, subject, year])

  // Close modal on Escape
  useEffect(() => {
    if (!selected) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected])

  return (
    <div>
      {/* Controls */}
      <div className="mb-8 flex flex-col gap-5">
        <FilterRow
          label="Subject"
          options={subjectOptions}
          value={subject}
          onChange={setSubject as (v: 'all' | Subject) => void}
          renderSwatch={(v) =>
            v !== 'all' ? (
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: subjectStyles[v as Subject].dot }}
              />
            ) : null
          }
        />
        <FilterRow
          label="Year"
          options={yearOptions}
          value={year}
          onChange={setYear as (v: 'all' | number) => void}
        />

        <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
          <p className="text-sm text-[#364466]/60">
            <span className="font-semibold text-[#364466]">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'class' : 'classes'} shown
          </p>
          <div className="inline-flex p-1 bg-[#F4F7FF] rounded-full border border-[#DEE7FF]">
            <button
              onClick={() => setView('grid')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase transition ${
                view === 'grid'
                  ? 'bg-[#364466] text-white shadow-sm'
                  : 'text-[#364466]/60 hover:text-[#364466]'
              }`}
            >
              Calendar
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.12em] uppercase transition ${
                view === 'list'
                  ? 'bg-[#364466] text-white shadow-sm'
                  : 'text-[#364466]/60 hover:text-[#364466]'
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* View */}
      {filtered.length === 0 ? (
        <EmptyState onReset={() => { setSubject('all'); setYear('all') }} />
      ) : view === 'grid' ? (
        <GridView items={filtered} onSelect={setSelected} gridStartMin={gridStartMin} gridEndMin={gridEndMin} />
      ) : (
        <ListView items={filtered} onSelect={setSelected} />
      )}

      {/* Legend */}
      <div className="mt-10 flex flex-wrap gap-5 justify-center text-xs text-[#364466]/70">
        {(Object.keys(subjectStyles) as Subject[]).map((s) => (
          <div key={s} className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-sm" style={{ background: subjectStyles[s].dot }} />
            <span>{s}</span>
          </div>
        ))}
      </div>

      {/* Detail modal */}
      {selected && <DetailModal entry={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}

// ── Filter row ──────────────────────────────────────────────────────────────

function FilterRow<T extends string | number>({
  label,
  options,
  value,
  onChange,
  renderSwatch,
}: {
  label: string
  options: Array<{ value: T; label: string }>
  value: T
  onChange: (v: T) => void
  renderSwatch?: (v: T) => React.ReactNode
}) {
  return (
    <div className="flex items-baseline gap-4 flex-wrap">
      <p className="text-[10px] tracking-[0.3em] uppercase text-[#325099]/70 font-semibold w-14 shrink-0">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = opt.value === value
          return (
            <button
              key={String(opt.value)}
              onClick={() => onChange(opt.value)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm transition border ${
                active
                  ? 'bg-[#364466] text-white border-[#364466] shadow-sm'
                  : 'bg-white text-[#364466]/70 border-[#DEE7FF] hover:border-[#BACBFF] hover:text-[#364466]'
              }`}
            >
              {renderSwatch?.(opt.value)}
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ── Grid view ───────────────────────────────────────────────────────────────

function GridView({
  items,
  onSelect,
  gridStartMin,
  gridEndMin,
}: {
  items: ClassEntry[]
  onSelect: (c: ClassEntry) => void
  gridStartMin: number
  gridEndMin: number
}) {
  const TOTAL_HEIGHT = ((gridEndMin - gridStartMin) / 60) * HOUR_PX
  const hours: number[] = []
  for (let h = gridStartMin / 60; h <= gridEndMin / 60; h++) hours.push(h)

  return (
    <div className="rounded-2xl border border-[#DEE7FF] bg-white shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <div className="min-w-[780px]">
          {/* Header */}
          <div className="grid grid-cols-[64px_repeat(6,1fr)] border-b border-[#DEE7FF] bg-[#F8FAFF]">
            <div />
            {days.map((d) => (
              <div
                key={d}
                className="text-center py-3 text-[11px] tracking-[0.25em] uppercase font-semibold text-[#325099]"
              >
                {dayFullName[d]}
              </div>
            ))}
          </div>

          {/* Body */}
          <div
            className="grid grid-cols-[64px_repeat(6,1fr)] relative"
            style={{ height: TOTAL_HEIGHT }}
          >
            {/* Time column */}
            <div className="relative border-r border-[#DEE7FF] bg-[#FAFBFF]">
              {hours.map((h) => {
                const top = ((h * 60 - gridStartMin) / 60) * HOUR_PX
                return (
                  <div
                    key={h}
                    className="absolute right-2 -translate-y-1/2 text-[10px] font-medium text-[#364466]/50 tabular-nums"
                    style={{ top }}
                  >
                    {formatTime(h * 60).replace(':00', '')}
                  </div>
                )
              })}
            </div>

            {/* Day columns */}
            {days.map((day) => {
              const dayItems = items.filter((c) => c.day === day)
              const laidOut = layoutDay(dayItems)
              return (
                <div
                  key={day}
                  className="relative border-r border-[#DEE7FF] last:border-r-0"
                >
                  {/* hour gridlines */}
                  {hours.map((h) => (
                    <div
                      key={h}
                      className="absolute inset-x-0 border-t border-[#EEF2FF]"
                      style={{ top: ((h * 60 - gridStartMin) / 60) * HOUR_PX }}
                    />
                  ))}
                  {/* class blocks */}
                  {laidOut.map((c) => {
                    const top = ((c.startMin - gridStartMin) / 60) * HOUR_PX
                    const height = ((c.endMin - c.startMin) / 60) * HOUR_PX
                    const style = subjectStyles[c.subject]
                    const widthPct = 100 / c.totalCols
                    const leftPct = c.col * widthPct
                    return (
                      <button
                        key={c.id}
                        onClick={() => onSelect(c)}
                        className={`absolute rounded-lg text-left px-2.5 py-1.5 overflow-hidden transition shadow-sm ${style.block} ${style.blockHover} ${style.text} focus:outline-none focus-visible:ring-2 ${style.ring}`}
                        style={{
                          top: top + 2,
                          height: height - 4,
                          left: `calc(${leftPct}% + 3px)`,
                          width: `calc(${widthPct}% - 6px)`,
                        }}
                      >
                        <p className="text-[11px] font-semibold leading-tight">
                          {shortTitle(c)}
                        </p>
                        {c.level && (
                          <p className="text-[10px] opacity-80 leading-tight mt-0.5">
                            {c.level}
                          </p>
                        )}
                        {c.mode && (
                          <p className="text-[9px] opacity-70 leading-tight mt-0.5 uppercase tracking-wider">
                            {c.mode}
                          </p>
                        )}
                        {height >= 64 && (
                          <p className="text-[10px] opacity-70 leading-tight mt-1 tabular-nums">
                            {c.timeLabel}
                          </p>
                        )}
                      </button>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function shortTitle(c: ClassEntry): string {
  // "Year 11 Maths Standard" → "Y11 Maths" (for grid block compactness)
  const yr = `Y${c.yearLevel}`
  return `${yr} ${c.subjectLabel}`
}

// ── List view ───────────────────────────────────────────────────────────────

function ListView({
  items,
  onSelect,
}: {
  items: ClassEntry[]
  onSelect: (c: ClassEntry) => void
}) {
  // Group by day
  const grouped = useMemo(() => {
    const map = new Map<Day, ClassEntry[]>()
    for (const d of days) map.set(d, [])
    for (const c of items) map.get(c.day)!.push(c)
    for (const arr of map.values()) arr.sort((a, b) => a.startMin - b.startMin)
    return map
  }, [items])

  return (
    <div className="space-y-8">
      {days.map((day) => {
        const dayItems = grouped.get(day) ?? []
        if (dayItems.length === 0) return null
        return (
          <div key={day}>
            <div className="flex items-baseline gap-3 mb-3 pb-2 border-b border-[#DEE7FF]">
              <h3 className="text-lg font-semibold text-[#364466]">{dayFullName[day]}</h3>
              <span className="text-xs text-[#325099]/60">
                {dayItems.length} {dayItems.length === 1 ? 'class' : 'classes'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {dayItems.map((c) => {
                const style = subjectStyles[c.subject]
                return (
                  <button
                    key={c.id}
                    onClick={() => onSelect(c)}
                    className={`group text-left rounded-xl border p-4 transition shadow-sm hover:shadow-md ${style.card} ${style.cardHover}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-block w-2 h-2 rounded-full"
                          style={{ background: style.dot }}
                        />
                        <p className={`text-[10px] tracking-[0.18em] uppercase font-semibold ${style.text}`}>
                          {c.subjectLabel}
                        </p>
                      </div>
                      {c.price != null && (
                        <p className="text-sm font-bold text-[#364466] tabular-nums">${c.price}</p>
                      )}
                    </div>
                    <p className="text-base font-semibold text-[#364466] leading-snug mb-1">
                      {c.title}
                    </p>
                    <p className="text-xs text-[#364466]/60 tabular-nums">{c.timeLabel}</p>
                    {c.mode && (
                      <p className="text-[10px] mt-2 inline-block px-2 py-0.5 rounded-full bg-white/70 border border-[#DEE7FF] text-[#364466]/70 tracking-wider uppercase">
                        {c.mode}
                      </p>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Empty state ─────────────────────────────────────────────────────────────

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#DEE7FF] bg-[#F8FAFF] p-12 text-center">
      <p className="text-base text-[#364466] font-semibold mb-2">No classes match those filters</p>
      <p className="text-sm text-[#364466]/60 mb-5">Try clearing the filters to see all classes.</p>
      <button
        onClick={onReset}
        className="text-xs font-semibold tracking-[0.15em] uppercase bg-[#364466] text-white px-5 py-2.5 rounded-full hover:opacity-90 transition"
      >
        Reset filters
      </button>
    </div>
  )
}

// ── Detail modal ────────────────────────────────────────────────────────────

function DetailModal({ entry, onClose }: { entry: ClassEntry; onClose: () => void }) {
  const style = subjectStyles[entry.subject]
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2035]/40 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="h-2" style={{ background: style.dot }} />

        <div className="p-7">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ background: style.dot }}
                />
                <p className={`text-[10px] tracking-[0.2em] uppercase font-semibold ${style.text}`}>
                  {entry.subjectLabel}
                </p>
              </div>
              <h3 className="text-xl font-semibold text-[#364466] leading-snug">
                {entry.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 w-8 h-8 rounded-full bg-[#F4F7FF] hover:bg-[#DEE7FF] text-[#364466] flex items-center justify-center text-lg leading-none transition"
            >
              ×
            </button>
          </div>

          {/* Detail grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <DetailItem label="Day" value={dayFullName[entry.day]} />
            <DetailItem label="Time" value={entry.timeLabel} />
            <DetailItem label="Term length" value="10 weeks" />
            <DetailItem label="Course fee" value={entry.price != null ? `$${entry.price}` : 'Contact us'} />
            {entry.level && <DetailItem label="Level" value={entry.level} />}
            {entry.mode && <DetailItem label="Mode" value={entry.mode} />}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Link
              href="/free-trial"
              className="flex-1 text-center bg-[#364466] text-white px-5 py-3 rounded-full text-sm font-semibold tracking-[0.12em] hover:opacity-90 transition"
            >
              Book free trial
            </Link>
            <Link
              href={`/contact?class=${encodeURIComponent(entry.title)}`}
              className="flex-1 text-center bg-white border border-[#DEE7FF] text-[#364466] px-5 py-3 rounded-full text-sm font-semibold tracking-[0.12em] hover:bg-[#F8FAFF] hover:border-[#BACBFF] transition"
            >
              Enrol
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#F8FAFF] rounded-xl border border-[#DEE7FF] px-4 py-3">
      <p className="text-[10px] tracking-[0.15em] uppercase text-[#325099]/70 font-semibold mb-1">
        {label}
      </p>
      <p className="text-sm font-semibold text-[#364466]">{value}</p>
    </div>
  )
}
