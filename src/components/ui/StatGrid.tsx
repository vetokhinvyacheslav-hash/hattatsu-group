export interface Stat {
  value: string
  label: string
}

interface StatGridProps {
  stats: readonly Stat[]
  light?: boolean
  columns?: 2 | 3 | 4
}

export function StatGrid({ stats, light = false, columns = 4 }: StatGridProps) {
  const cols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  }[columns]

  return (
    <dl className={`grid ${cols} gap-6`}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-2xl border p-6 ${
            light
              ? 'border-white/15 bg-white/5'
              : 'border-border bg-white shadow-sm'
          }`}
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd
            className={`text-3xl font-extrabold md:text-4xl ${
              light ? 'text-white' : 'text-blue-primary'
            }`}
          >
            {stat.value}
          </dd>
          <p
            className={`mt-2 text-sm ${
              light ? 'text-white/70' : 'text-gray-text'
            }`}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </dl>
  )
}
