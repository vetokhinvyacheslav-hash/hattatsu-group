interface SectionHeadingProps {
  preTitle?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  preTitle,
  title,
  subtitle,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`${alignment} max-w-3xl`}>
      {preTitle ? <p className="pre-title mb-4">{preTitle}</p> : null}
      <h2 className={`h2 ${light ? 'text-white' : 'text-graphite'}`}>{title}</h2>
      {subtitle ? (
        <p
          className={`body-text mt-5 ${
            light ? 'text-white/70' : 'text-gray-text'
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
