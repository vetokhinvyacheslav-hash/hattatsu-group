'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MissionItem {
  eyebrow: string
  title: string
  body: string
  icon: ReactNode
}

interface ApproachItem {
  number: string
  title: string
  description: string
}

const MISSION_ITEMS: MissionItem[] = [
  {
    eyebrow: 'Наша цель',
    title: 'Стать лучшей консалтинговой производственной экосистемой в России и СНГ',
    body: 'Мы строим долгосрочные партнёрства с предприятиями, которые хотят работать на уровне мировых стандартов — системно, измеримо и с устойчивым результатом.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    eyebrow: 'Наша миссия',
    title: 'Выявляем скрытый потенциал производств и трансформируем его в успех',
    body: 'Внедряем культуру непрерывных улучшений и научный подход к управлению, превращая скрытый потенциал предприятий в измеримые и устойчивые результаты.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

const APPROACHES: ApproachItem[] = [
  {
    number: '01',
    title: 'Научность',
    description:
      'Выстраивание системы управления и бизнес-процессов на основе анализа данных и конкретных кейсов.',
  },
  {
    number: '02',
    title: 'Адаптация',
    description:
      'Внедрение изменений на производстве и в бизнес-структурах с учётом локальных особенностей.',
  },
  {
    number: '03',
    title: 'Синергия',
    description:
      'Связь научного менеджмента и адаптивности позволяют эффективно использовать международный опыт в конкретной компании.',
  },
]

const EASE = [0.16, 1, 0.3, 1] as const

export function MissionSection() {
  return (
    <section className="overflow-hidden">
      <div className="grid lg:grid-cols-[5fr_6fr_5fr]" style={{ minHeight: '92vh' }}>

        {/* ── Left: Цель + Миссия ── */}
        <motion.div
          className="flex flex-col justify-center bg-white p-8 xl:p-14"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {/* Section eyebrow */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-primary" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-primary">
              Зачем мы существуем
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {MISSION_ITEMS.map((item, i) => (
              <motion.div
                key={item.eyebrow}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.15 + i * 0.15 }}
                className="relative overflow-hidden rounded-2xl bg-surface p-6"
              >
                {/* Gradient left accent bar */}
                <div
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-[3px] rounded-l-2xl"
                  style={{
                    background: 'linear-gradient(180deg, #3B30E8 0%, #110F56 100%)',
                  }}
                />
                <div className="pl-2">
                  {/* Icon + label row */}
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-primary text-white">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-blue-primary">
                      {item.eyebrow}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="text-[15px] font-bold leading-snug text-ink">
                    {item.title}
                  </h3>
                  {/* Body — was not shown before */}
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Center: Photo with overlay + floating stat ── */}
        <div className="relative min-h-[380px] lg:min-h-0">
          <Image
            src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=80"
            alt="Производственный эксперт на предприятии"
            fill
            sizes="(min-width: 1024px) 37vw, 100vw"
            className="object-cover object-center"
          />
          {/* Gradient overlay: subtle blue top, dark bottom */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(17,15,86,0.18) 0%, rgba(0,0,0,0) 35%, rgba(32,37,47,0.72) 100%)',
            }}
          />

          {/* Floating stat badge — bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          >
            <div
              className="rounded-2xl p-5 ring-1 ring-white/15"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
              }}
            >
              <p className="text-3xl font-extrabold text-white">100+</p>
              <p className="mt-1 text-[13px] text-white/75">предприятий трансформировано</p>
              <p className="mt-0.5 text-xs text-white/45">В 15+ отраслях промышленности</p>
            </div>
          </motion.div>
        </div>

        {/* ── Right: Approaches ── */}
        <div className="relative flex flex-col justify-center overflow-hidden bg-blue-primary p-8 xl:p-12">
          {/* Dot pattern background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-white/30" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                Методология
              </span>
            </div>

            <motion.h2
              className="mb-10 text-2xl font-bold leading-snug text-white"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              Используем уникальные подходы
            </motion.h2>

            <div>
              {APPROACHES.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.2 + index * 0.12 }}
                >
                  {index > 0 && <div className="my-6 border-t border-white/10" />}
                  <div className="flex gap-5">
                    {/* Number badge */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                      <span className="text-[11px] font-bold tabular-nums text-white/55">
                        {item.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA link */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <a
                href="/consulting"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 transition-all duration-200 hover:gap-3 hover:text-white"
              >
                Подробнее о методологии <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
