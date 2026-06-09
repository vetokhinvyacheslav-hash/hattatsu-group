import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Компьютерный тренажёр Lean-производство — Hattatsu Group',
  description:
    'Интерактивный симулятор бережливого производства: 90 инструментов, 27 аналитических форм, 300 показателей и два режима для отработки Lean на практике.',
}

const HERO_STATS: readonly { value: string; label: string }[] = [
  { value: '90', label: 'инструментов' },
  { value: '27', label: 'аналит. форм' },
  { value: '300', label: 'показателей' },
  { value: '2', label: 'режима' },
]

interface ModeCard {
  title: string
  tagline: string
  features: readonly string[]
}

const MODES: readonly ModeCard[] = [
  {
    title: 'Демо-версия',
    tagline: 'Знакомство с симулятором',
    features: [
      'Базовый набор Lean-инструментов',
      'Один сценарий производства',
      'Идеально для первого знакомства',
      'Быстрый старт без подготовки',
    ],
  },
  {
    title: 'Полная версия',
    tagline: 'Максимум возможностей',
    features: [
      'Все 90 инструментов бережливого производства',
      '27 аналитических форм',
      '300 показателей эффективности',
      'Углублённая аналитика и сравнение сценариев',
    ],
  },
]

const GOALS: readonly { title: string; description: string }[] = [
  {
    title: 'Освоить Lean-инструменты на практике',
    description:
      'Участники применяют инструменты бережливого производства в безопасной среде без рисков для реального процесса.',
  },
  {
    title: 'Научиться видеть потери',
    description:
      'Тренируем умение находить и устранять все виды потерь на производственном потоке.',
  },
  {
    title: 'Связать действия с показателями',
    description:
      'Каждое решение отражается в 300 показателях — видно влияние на эффективность и затраты.',
  },
  {
    title: 'Принимать решения по данным',
    description:
      'Аналитические формы учат опираться на цифры, а не на интуицию.',
  },
  {
    title: 'Закрепить системное мышление',
    description:
      'Понимание того, как локальные улучшения влияют на весь производственный поток.',
  },
]

interface Persona {
  title: string
  description: string
}

const PERSONAS: readonly Persona[] = [
  {
    title: 'Рабочие и операторы',
    description:
      'Наглядно осваивают принципы бережливого производства на своём рабочем месте.',
  },
  {
    title: 'Линейные руководители',
    description:
      'Тренируют управление потоком и принятие решений по показателям.',
  },
  {
    title: 'Студенты и преподаватели',
    description:
      'Используют симулятор как учебный инструмент для отработки Lean-навыков.',
  },
]

export default function LeanSimulatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-primary text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_20%_120%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_80%_120%,rgba(43,39,160,0.6),transparent_50%)]"
        />
        <div className="container section-padding relative">
          <div className="max-w-3xl">
            <p className="pre-title mb-5 text-white">
              Геймификация · Тренажёр
            </p>
            <h1 className="h1">Компьютерный тренажёр Lean-производство</h1>
            <p className="body-text mt-6 max-w-2xl text-white/70">
              Интерактивный симулятор, где команда осваивает бережливое
              производство на практике — без рисков для реального процесса.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink
                href="/contacts"
                className="!bg-orange !text-white hover:!bg-orange/90"
              >
                Запросить демо-доступ
              </ButtonLink>
              <ButtonLink
                href="/diagnostics"
                variant="secondary"
                className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
              >
                Пройти диагностику
              </ButtonLink>
            </div>
          </div>

          <dl className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-4xl font-extrabold md:text-5xl">
                    {stat.value}
                  </dd>
                  <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Что такое симулятор */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionHeading
                preTitle="О продукте"
                title="Что такое симулятор Lean-производства"
              />
              <p className="body-text mt-6 text-gray-text">
                Это виртуальное производство, которым управляет участник.
                Применяя инструменты бережливого производства, он видит, как
                решения отражаются на потоке, запасах и затратах.
              </p>
              <p className="body-text mt-4 text-gray-text">
                Симулятор превращает абстрактные принципы Lean в наглядный опыт:
                ошибаться безопасно, а каждое улучшение измеримо в реальных
                показателях.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl shadow-blue-primary/10">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="Компьютерный интерфейс производственного симулятора"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Два режима */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading
            preTitle="Режимы"
            title="Два режима работы"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {MODES.map((mode, index) => (
            <Reveal key={mode.title} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-border border-t-4 border-t-blue-primary bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-graphite">{mode.title}</h3>
                <p className="mt-1 text-sm font-semibold text-blue-primary">
                  {mode.tagline}
                </p>
                <ul className="mt-5 space-y-3">
                  {mode.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-graphite">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5 целей обучения */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Цели обучения"
            title="5 целей тренажёра"
          />
        </Reveal>
        <ol className="mt-12 space-y-5">
          {GOALS.map((goal, index) => (
            <Reveal key={goal.title} delay={index * 0.05} as="li">
              <article className="flex gap-5 rounded-2xl border border-border bg-white p-7 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-primary text-lg font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-graphite">
                    {goal.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-text">
                    {goal.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Для кого */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading preTitle="Для кого" title="Кому подойдёт тренажёр" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PERSONAS.map((persona, index) => (
            <Reveal key={persona.title} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-graphite">
                  {persona.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {persona.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-dark">
        <div className="container section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h2 text-white">
              Попробуйте симулятор в действии
            </h2>
            <p className="body-text mt-5 text-white/70">
              Запросите демо-доступ и оцените, как тренажёр обучает команду Lean
              на практике.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Запросить демо-доступ
            </ButtonLink>
            <ButtonLink
              href="/diagnostics"
              variant="secondary"
              className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
            >
              Обсудить внедрение
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
