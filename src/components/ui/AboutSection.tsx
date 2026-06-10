'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView, useReducedMotion, type AnimationPlaybackControls } from 'framer-motion'
import { ButtonLink } from '@/components/ui/Button'

const STATS = [
  { value: 20, suffix: '+', label: 'лет экспертизы', detail: 'С 2004 года на рынке' },
  { value: 140, suffix: '+', label: 'Kaizen-проектов', detail: 'В 15+ отраслях' },
  { value: 6, suffix: '', label: 'стран присутствия', detail: 'Россия, ЕС, Япония' },
  { value: 97, suffix: '%', label: 'клиентов возвращаются', detail: 'Долгосрочные партнёрства' },
] satisfies readonly { value: number; suffix: string; label: string; detail: string }[]

const KEY_POINTS = [
  'Внедряем изменения вместе с вашей командой, а не оставляем рекомендации',
  'Берём ответственность за результат — уходим, когда система работает самостоятельно',
  'Адаптируем мировые практики Lean под российские реалии производства',
] as const

interface StatItem {
  value: number
  suffix: string
  label: string
  detail: string
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const shouldReduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return
    const controls: AnimationPlaybackControls = animate(0, stat.value, {
      duration: 2,
      delay: index * 0.12,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, shouldReduceMotion, stat.value, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl p-6 ring-1 ring-white/10"
      style={{ background: 'rgba(255,255,255,0.055)' }}
    >
      {/* Top gradient accent line */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, rgba(59,48,232,0.8) 0%, rgba(29,26,138,0.3) 50%, transparent 100%)',
        }}
      />
      <p className="text-[2.6rem] font-extrabold leading-none tracking-tight text-white tabular-nums">
        <span aria-hidden="true">
          {shouldReduceMotion ? stat.value : display}
          {stat.suffix}
        </span>
        <span className="sr-only">{String(stat.value) + stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
      <p className="mt-0.5 text-xs text-white/40">{stat.detail}</p>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          ].join(', '),
          backgroundSize: '64px 64px',
        }}
      />
      {/* Soft radial highlight — upper-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 70% at -8% 25%, rgba(59,48,232,0.09) 0%, transparent 70%)',
        }}
      />

      <div className="container section-padding relative">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-white/30" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                О компании
              </span>
            </div>

            {/* Heading with left accent border */}
            <div className="relative border-l-2 border-white/20 pl-6">
              <h2 className="h2 text-white">
                Международная группа практиков, а не теоретиков
              </h2>
            </div>

            <p className="body-text mt-6 text-white/65">
              Hattatsu Group основана экспертами с опытом работы на производственных
              предприятиях России, Европы и Азии. Мы не просто консультируем — мы
              внедряем изменения вместе с вашей командой, берём ответственность
              за результат и уходим только тогда, когда система работает самостоятельно.
            </p>
            <p className="body-text mt-4 text-white/55">
              За 20 лет мы прошли путь от цеховых мастеров до партнёров международных
              корпораций. Этот опыт позволяет нам видеть проблемы производства изнутри
              и предлагать решения, которые действительно работают в российских реалиях.
            </p>

            {/* Key differentiators */}
            <ul className="mt-8 space-y-3">
              {KEY_POINTS.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span
                    aria-hidden
                    className="mt-[3px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-white/10 text-[9px] font-bold text-white"
                  >
                    ✓
                  </span>
                  <span className="text-[14px] leading-relaxed text-white/55">{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-9">
              <ButtonLink
                href="/team"
                variant="secondary"
                className="!border-white/25 !text-white hover:!border-white/50 hover:!bg-white/10"
              >
                Познакомиться с командой
              </ButtonLink>
            </div>
          </motion.div>

          {/* Right: animated stats grid */}
          <div className="grid grid-cols-2 gap-4 lg:mt-2">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
