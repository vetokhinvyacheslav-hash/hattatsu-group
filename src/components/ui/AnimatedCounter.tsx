'use client'

import { useEffect, useRef, useState } from 'react'
import {
  animate,
  useInView,
  useReducedMotion,
  type AnimationPlaybackControls,
} from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  label: string
  className?: string
}

interface ParsedValue {
  prefix: string
  target: number
  decimals: number
  suffix: string
}

/**
 * Splits a display value such as "20+", "98%", "1.5x", "≈300" into the numeric
 * portion and any surrounding prefix/suffix so the number can be animated while
 * the symbols stay fixed.
 */
function parseValue(value: string): ParsedValue {
  const match = value.match(/-?\d[\d\s.,]*/)

  if (!match) {
    return { prefix: value, target: 0, decimals: 0, suffix: '' }
  }

  const raw = match[0]
  const start = match.index ?? 0
  const prefix = value.slice(0, start)
  const suffix = value.slice(start + raw.length)

  const normalized = raw.replace(/\s/g, '').replace(',', '.')
  const target = Number.parseFloat(normalized)
  const decimals = normalized.includes('.')
    ? normalized.split('.')[1].length
    : 0

  return {
    prefix,
    target: Number.isFinite(target) ? target : 0,
    decimals,
    suffix,
  }
}

export function AnimatedCounter({
  value,
  label,
  className = '',
}: AnimatedCounterProps) {
  const { prefix, target, decimals, suffix } = parseValue(value)

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const shouldReduceMotion = useReducedMotion()

  const [display, setDisplay] = useState(() =>
    shouldReduceMotion ? target : 0,
  )

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      return
    }

    const controls: AnimationPlaybackControls = animate(0, target, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(latest),
    })

    return () => controls.stop()
  }, [isInView, shouldReduceMotion, target])

  const formatted = display.toLocaleString('ru-RU', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <div ref={ref} className={className}>
      <p className="text-4xl font-extrabold text-blue-primary md:text-5xl">
        <span aria-hidden="true">
          {prefix}
          {formatted}
          {suffix}
        </span>
        <span className="sr-only">{value}</span>
      </p>
      <p className="mt-2 text-sm text-gray-text">{label}</p>
    </div>
  )
}
