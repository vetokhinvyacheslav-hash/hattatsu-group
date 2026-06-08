'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger delay in seconds, useful when revealing siblings in sequence. */
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

/**
 * Wraps content in a simple fade-up scroll reveal that fires once when the
 * element enters the viewport. Respects `prefers-reduced-motion` by rendering
 * the content immediately without animation.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as]

  if (shouldReduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  )
}
