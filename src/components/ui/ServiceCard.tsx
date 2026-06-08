import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href?: string
  badge?: string
  items?: readonly string[]
}

export function ServiceCard({
  title,
  description,
  href,
  badge,
  items,
}: ServiceCardProps) {
  const inner = (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow duration-200 hover:shadow-md">
      {badge ? (
        <span className="mb-4 inline-flex w-fit rounded-full bg-light-blue px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-secondary">
          {badge}
        </span>
      ) : null}
      <h3 className="text-xl font-bold text-graphite">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-text">
        {description}
      </p>
      {items && items.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-graphite">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {href ? (
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-primary">
          Подробнее
          <span aria-hidden>→</span>
        </span>
      ) : null}
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-secondary"
      >
        {inner}
      </Link>
    )
  }
  return inner
}
