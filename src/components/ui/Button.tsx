import Link from 'next/link'
import type { ComponentProps } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-secondary disabled:opacity-60 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary: 'bg-blue-primary text-white hover:bg-blue-secondary',
  secondary:
    'border border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white',
  ghost: 'text-blue-primary hover:text-blue-secondary',
}

export function buttonClasses(variant: Variant = 'primary', extra = ''): string {
  return `${base} ${variants[variant]} ${extra}`.trim()
}

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: Variant
}

export function ButtonLink({
  variant = 'primary',
  className = '',
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, className)} {...props} />
}

interface ButtonProps extends ComponentProps<'button'> {
  variant?: Variant
}

export function Button({
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonClasses(variant, className)} {...props} />
  )
}
