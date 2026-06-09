import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'HR-консалтинг — Hattatsu Group',
  description:
    'Строим полноценную HR-систему для производственных предприятий: рекрутинг, адаптация, оценка, обучение и кадровый резерв под вашу стратегию.',
}

interface NumberedCard {
  number: string
  title: string
  description: string
}

const PAIN_POINTS: readonly NumberedCard[] = [
  {
    number: '01',
    title: 'HR работает фрагментарно',
    description:
      'Нет единой системы — только кадровое делопроизводство. Решения принимаются ситуативно, без связи со стратегией.',
  },
  {
    number: '02',
    title: 'Нет профилей компетенций',
    description:
      'Непонятно, какие сотрудники нужны и как их оценивать. Подбор и развитие идут наугад.',
  },
  {
    number: '03',
    title: 'Подбор и адаптация не системны',
    description:
      'Новые сотрудники уходят в первые три месяца. Каждый найм начинается с нуля и тратит ресурсы.',
  },
  {
    number: '04',
    title: 'Нет кадрового резерва',
    description:
      'Ключевые позиции закрываются месяцами. Уход одного специалиста ставит под угрозу процессы.',
  },
]

const SYSTEM_COMPONENTS: readonly NumberedCard[] = [
  {
    number: '01',
    title: 'Эффективная служба персонала',
    description:
      'HR-функция, выстроенная под цели бизнеса, с понятными процессами и зонами ответственности.',
  },
  {
    number: '02',
    title: 'Система управления талантами',
    description:
      'Выявление, развитие и удержание ключевых сотрудников на всех уровнях.',
  },
  {
    number: '03',
    title: 'Требования к деятельности и персоналу',
    description:
      'Профили должностей и компетенций — основа для подбора, оценки и развития.',
  },
  {
    number: '04',
    title: 'Система обучения персонала',
    description:
      'Программы развития навыков, привязанные к требованиям производства.',
  },
  {
    number: '05',
    title: 'Оценка персонала',
    description:
      'Прозрачные инструменты оценки эффективности и потенциала сотрудников.',
  },
  {
    number: '06',
    title: 'Система рекрутмента',
    description:
      'Воронка подбора, которая стабильно закрывает позиции нужными людьми.',
  },
  {
    number: '07',
    title: 'Коммуникационная площадка',
    description:
      'Единое пространство для сотрудников и клиентов — обратная связь и вовлечённость.',
  },
]

interface TimelineStep {
  title: string
  description: string
}

const PROJECT_STEPS: readonly TimelineStep[] = [
  {
    title: 'Диагностика HR-функции',
    description: 'Оцениваем текущее состояние процессов и зрелость HR.',
  },
  {
    title: 'Анализ бизнес-целей и оргструктуры',
    description: 'Связываем HR-задачи со стратегией предприятия.',
  },
  {
    title: 'Проектирование целевой HR-модели',
    description: 'Описываем, как HR должен работать на результат.',
  },
  {
    title: 'Описание процессов и компетенций',
    description: 'Формируем профили, регламенты и стандарты.',
  },
  {
    title: 'Внедрение оценки, адаптации, обучения и резерва',
    description: 'Запускаем инструменты в работу и сопровождаем.',
  },
]

const RESULTS: readonly { title: string; description: string }[] = [
  {
    title: 'Целевая модель HR-функции',
    description:
      'Понятная структура и процессы, работающие на стратегию предприятия.',
  },
  {
    title: 'Система компетенций и требований',
    description:
      'Профили должностей, по которым можно подбирать и оценивать людей.',
  },
  {
    title: 'Инструменты развития и оценки',
    description:
      'Программы обучения и регулярная оценка эффективности персонала.',
  },
  {
    title: 'Кадровый резерв и управление талантами',
    description:
      'Преемственность ключевых позиций и удержание сильных сотрудников.',
  },
]

const HERO_STATS: readonly { value: string; label: string }[] = [
  { value: '7', label: 'элементов системы' },
  { value: '140+', label: 'Kaizen-проектов' },
  { value: '6', label: 'стран опыта' },
]

export default function HRPage() {
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
            <p className="pre-title mb-5 text-white">HR-консалтинг</p>
            <h1 className="h1">
              Постройте HR-систему, которая работает на вашу стратегию
            </h1>
            <p className="body-text mt-6 max-w-2xl text-white/70">
              Создаём полноценную систему управления персоналом: от рекрутинга
              до кадрового резерва. Для производственных предприятий от 50
              сотрудников.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink
                href="/diagnostics"
                className="!bg-orange !text-white hover:!bg-orange/90"
              >
                Пройти диагностику
              </ButtonLink>
              <ButtonLink
                href="/contacts"
                variant="secondary"
                className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
              >
                Обсудить задачи
              </ButtonLink>
            </div>
          </div>

          <dl className="mt-14 grid gap-6 sm:grid-cols-3">
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

      {/* Feature image */}
      <section className="bg-white">
        <div className="container py-12">
          <div className="relative h-64 overflow-hidden rounded-2xl md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80"
              alt="HR-консалтинг Hattatsu Group"
              fill
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pain points */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Контекст"
            title="Проблемы, которые мы решаем"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PAIN_POINTS.map((card, index) => (
            <Reveal key={card.number} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-border border-l-4 border-l-blue-primary bg-white p-7 shadow-sm">
                <span className="text-sm font-bold tracking-wide text-blue-primary">
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

      {/* 7 components */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading
            preTitle="Состав системы"
            title="Что входит в HR-систему Hattatsu"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SYSTEM_COMPONENTS.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.05}>
              <article className="flex h-full gap-5 rounded-2xl border border-border bg-white p-7 shadow-sm">
                <span className="text-3xl font-extrabold leading-none text-white/60 md:text-4xl">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-graphite">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-text">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Project timeline */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Как проходит проект"
            title="5 этапов построения HR-системы"
          />
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-5">
          {PROJECT_STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08} as="li">
              <div className="flex h-full flex-col">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-primary text-lg font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-base font-bold text-graphite">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Results */}
      <section className="relative overflow-hidden bg-blue-primary text-white">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-blue-primary/95 via-blue-primary/85 to-dark/90"
        />
        <div className="container section-padding relative">
          <Reveal>
            <SectionHeading
              preTitle="Результаты"
              title="Что получает предприятие"
              light
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {RESULTS.map((result, index) => (
              <Reveal key={result.title} delay={index * 0.06}>
                <article className="flex h-full gap-5 rounded-2xl border border-white/15 bg-white/5 p-7">
                  <span
                    aria-hidden
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-xl font-bold text-white"
                  >
                    ✓
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {result.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {result.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark">
        <div className="container section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h2 text-white">
              Обсудите HR-задачи с экспертом Hattatsu
            </h2>
            <p className="body-text mt-5 text-white/70">
              Начните с диагностики HR-функции — покажем точки роста и предложим
              целевую модель.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/diagnostics"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Пройти диагностику
            </ButtonLink>
            <ButtonLink
              href="/contacts"
              variant="secondary"
              className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
            >
              Записаться на встречу
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
