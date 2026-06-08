import type { ReactNode } from 'react'
import { PlaceholderImage } from './PlaceholderImage'

interface HeroSectionProps {
  preTitle?: string
  title: string
  description: string
  actions?: ReactNode
  imageLabel?: string
  stats?: ReactNode
  withImage?: boolean
}

export function HeroSection({
  preTitle,
  title,
  description,
  actions,
  imageLabel = 'Hattatsu Group',
  stats,
  withImage = true,
}: HeroSectionProps) {
  return (
    <section className="bg-light-gray">
      <div className="container section-padding">
        <div
          className={`grid items-center gap-12 ${
            withImage ? 'lg:grid-cols-2' : ''
          }`}
        >
          <div>
            {preTitle ? <p className="pre-title mb-5">{preTitle}</p> : null}
            <h1 className="h1 text-graphite">{title}</h1>
            <p className="body-text mt-6 max-w-xl text-gray-text">
              {description}
            </p>
            {actions ? (
              <div className="mt-8 flex flex-wrap gap-4">{actions}</div>
            ) : null}
            {stats ? <div className="mt-12">{stats}</div> : null}
          </div>
          {withImage ? (
            <PlaceholderImage
              label={imageLabel}
              ratio="aspect-[5/4]"
              className="w-full"
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}
