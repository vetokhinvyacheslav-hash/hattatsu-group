import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Коммуникация в Lean-проектах — Hattatsu Group',
  description:
    'Тренинг о том, как вовлечь команду в изменения и преодолеть сопротивление: психология изменений, Lean-лидерство, дейли-митинги и визуализация.',
}

interface NumberedCard {
  number: string
  title: string
  description: string
}

const PAIN_POINTS: readonly NumberedCard[] = [
  {
    number: '01',
    title: 'Сопротивление сотрудников',
    description:
      'Люди воспринимают изменения как угрозу и саботируют новые правила работы.',
  },
  {
    number: '02',
    title: 'Изменения не приживаются',
    description:
      'Улучшения внедряют сверху, но без вовлечения команды они откатываются назад.',
  },
  {
    number: '03',
    title: 'Разрыв между уровнями',
    description:
      'Руководство и линейный персонал говорят на разных языках — цели проекта не доходят до цеха.',
  },
  {
    number: '04',
    title: 'Нет регулярной обратной связи',
    description:
      'Проблемы всплывают поздно, инициатива гаснет, а команда не видит результата своих усилий.',
  },
]

interface ProgramTopic {
  title: string
  description: string
}

const PROGRAM: readonly ProgramTopic[] = [
  {
    title: 'Психология изменений',
    description:
      'Как люди проходят через изменения, какие стадии переживают и что помогает их пройти.',
  },
  {
    title: 'Работа с сопротивлением',
    description:
      'Распознаём причины сопротивления и превращаем скептиков в союзников проекта.',
  },
  {
    title: 'Lean-лидерство',
    description:
      'Как лидер изменений задаёт пример, поддерживает команду и удерживает фокус на результате.',
  },
  {
    title: 'Дейли-митинги и визуализация',
    description:
      'Короткие ежедневные встречи и визуальные доски, которые держат команду в курсе и вовлечённой.',
  },
]

const RESULTS: readonly { title: string; description: string }[] = [
  {
    title: 'Команда вовлечена в изменения',
    description:
      'Сотрудники понимают цель проекта и участвуют в улучшениях, а не сопротивляются им.',
  },
  {
    title: 'Сопротивление под контролем',
    description:
      'У участников есть инструменты, чтобы снимать страхи и возражения на ранней стадии.',
  },
  {
    title: 'Изменения закрепляются',
    description:
      'Регулярная коммуникация удерживает новые практики и не даёт процессам откатываться.',
  },
  {
    title: 'Лидеры изменений в команде',
    description:
      'Руководители осваивают Lean-лидерство и ведут за собой остальных.',
  },
]

export default function LeanCommunicationTrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-primary text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_20%_120%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_80%_120%,rgba(43,39,160,0.6),transparent_50%)]"
        />
        <div className="container section-padding relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <p className="pre-title mb-5 text-orange">
                Тренинг · Коммуникация
              </p>
              <h1 className="h1">Коммуникация в Lean-проектах</h1>
              <p className="body-text mt-6 text-white/70">
                Как вовлечь команду в изменения и преодолеть сопротивление —
                практический тренинг по коммуникации для Lean-проектов.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contacts"
                  className="!bg-orange !text-white hover:!bg-orange/90"
                >
                  Записаться на тренинг
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
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl shadow-blue-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80"
                  alt="Команда общается во время рабочей встречи"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Проблемы без коммуникации */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Контекст"
            title="Что происходит без коммуникации"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PAIN_POINTS.map((card, index) => (
            <Reveal key={card.number} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-border border-l-4 border-l-orange bg-white p-7 shadow-sm">
                <span className="text-sm font-bold tracking-wide text-orange">
                  {card.number}
                </span>
                <h3 className="mt-3 text-xl font-bold text-graphite">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {card.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Программа */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading
            preTitle="Программа"
            title="4 темы тренинга"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROGRAM.map((topic, index) => (
            <Reveal key={topic.title} delay={index * 0.06}>
              <article className="flex h-full gap-5 rounded-2xl border border-border bg-white p-7 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-primary text-lg font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-graphite">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-text">
                    {topic.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Результаты */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Результаты"
            title="Что получают участники"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {RESULTS.map((result, index) => (
            <Reveal key={result.title} delay={index * 0.06}>
              <article className="flex h-full gap-5 rounded-2xl border border-border bg-white p-7 shadow-sm">
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/15 text-xl font-bold text-orange"
                >
                  ✓
                </span>
                <div>
                  <h3 className="text-lg font-bold text-graphite">
                    {result.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-text">
                    {result.description}
                  </p>
                </div>
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
              Сделайте команду союзником изменений
            </h2>
            <p className="body-text mt-5 text-white/70">
              Проведём тренинг по коммуникации на ваших Lean-проектах и поможем
              снять сопротивление.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Записаться на тренинг
            </ButtonLink>
            <ButtonLink
              href="/diagnostics"
              variant="secondary"
              className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
            >
              Обсудить задачи
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
