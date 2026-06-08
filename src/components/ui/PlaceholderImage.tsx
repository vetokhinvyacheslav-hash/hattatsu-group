interface PlaceholderImageProps {
  label?: string
  className?: string
  ratio?: string
}

export function PlaceholderImage({
  label = 'Изображение',
  className = '',
  ratio = 'aspect-[4/3]',
}: PlaceholderImageProps) {
  return (
    <div
      className={`${ratio} ${className} flex items-center justify-center rounded-2xl border border-border bg-light-blue`}
      role="img"
      aria-label={label}
    >
      <span className="px-6 text-center text-sm font-medium uppercase tracking-wider text-blue-primary/50">
        {label}
      </span>
    </div>
  )
}
