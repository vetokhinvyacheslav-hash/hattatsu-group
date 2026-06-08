import type { ReactNode } from 'react'

type Tone = 'white' | 'gray' | 'blue'

const tones: Record<Tone, string> = {
  white: 'bg-white',
  gray: 'bg-light-gray',
  blue: 'bg-light-blue',
}

interface SectionProps {
  tone?: Tone
  children: ReactNode
  className?: string
}

export function Section({ tone = 'white', children, className = '' }: SectionProps) {
  return (
    <section className={`${tones[tone]} ${className}`}>
      <div className="container section-padding">{children}</div>
    </section>
  )
}

export function BulletList({
  items,
  className = '',
}: {
  items: readonly string[]
  className?: string
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-graphite">
          <span
            aria-hidden
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
          />
          <span className="text-sm leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function NumberedList({ items }: { items: readonly string[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li key={item} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-primary text-sm font-bold text-white">
            {index + 1}
          </span>
          <span className="pt-1 text-sm leading-relaxed text-graphite">
            {item}
          </span>
        </li>
      ))}
    </ol>
  )
}
