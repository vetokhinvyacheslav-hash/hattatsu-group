import type { ReactNode } from 'react'

interface CTASectionProps {
  title: string
  description?: string
  children?: ReactNode
}

export function CTASection({ title, description, children }: CTASectionProps) {
  return (
    <section className="bg-blue-primary">
      <div className="container section-padding">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h2 text-white">{title}</h2>
          {description ? (
            <p className="body-text mt-5 text-white/70">{description}</p>
          ) : null}
        </div>
        {children ? (
          <div className="mx-auto mt-10 flex max-w-xl justify-center">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  )
}
