import Link from 'next/link'
import type { ComponentProps } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition duration-200 ease-out active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-secondary'

const variants: Record<Variant, string> = {
  primary:
    'bg-blue-primary text-white shadow-sm shadow-blue-primary/20 hover:bg-blue-secondary',
  secondary:
    'border border-blue-primary/30 text-blue-primary hover:border-blue-primary hover:bg-blue-primary hover:text-white',
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
