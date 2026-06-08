import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Геймификация и симуляторы — Hattatsu Group',
  description:
    'Промышленные симуляторы и бизнес-игры для освоения Lean, финансовой грамотности и проектного управления за 6–8 часов вместо 72.',
}

interface ComparisonRow {
  metric: string
  traditional: string
  simulator: string
}

const COMPARISON: readonly ComparisonRow[] = [
  {
    metric: 'Вовлечённость',
    traditional: '10–30%',
    simulator: '90%',
  },
  {
    metric: 'Время освоения',
    traditional: '72 часа',
    simulator: '6–8 часов',
  },
  {
    metric: 'Количество участников',
    traditional: 'ограничено',
    simulator: 'неограничено',
  },
  {
    metric: 'Удержание знаний',
    traditional: 'низкое',
    simulator: 'высокое',
  },
]

const LEAN_GOALS: readonly string[] = [
  'Знакомство с инструментами Lean',
  'Демонстрация преимуществ Lean',
  'Подготовка лидеров изменений',
  'Выявление потенциальных лидеров',
  'Повышение вовлечённости команды',
]

const LEAN_STATS: readonly { value: string; label: string }[] = [
  { value: '90', label: 'Lean-инструментов' },
  { value: '27', label: 'аналитических форм' },
  { value: '300', label: 'показателей' },
]

const PROFIT_AUDIENCE: readonly { title: string; description: string }[] = [
  {
    title: 'Малый бизнес',
    description:
      'Собственники и руководители учатся видеть бизнес как единую финансовую систему.',
  },
  {
    title: 'Средний бизнес',
    description:
      'Управленческие команды отрабатывают согласованные стратегические решения.',
  },
  {
    title: 'Крупный бизнес',
    description:
      'Менеджмент развивает финансовую грамотность и системное мышление.',
  },
]

const PROFIT_OUTCOMES: readonly { title: string; description: string }[] = [
  {
    title: 'Большая картинка',
    description: 'Целостное понимание бизнеса и взаимосвязи решений.',
  },
  {
    title: 'Стратегия',
    description: 'Навык выстраивать и удерживать стратегию через 4 квартала.',
  },
  {
    title: 'Финансы',
    description: 'Уверенное чтение финансовых результатов и показателей.',
  },
  {
    title: 'Решения',
    description: 'Принятие управленческих решений в условиях ограничений.',
  },
]

export default function GamificationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-primary text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_20%_120%,rgba(240,138,36,0.18),transparent_55%),radial-gradient(circle_at_80%_120%,rgba(43,39,160,0.6),transparent_50%)]"
        />
        <div className="container section-padding relative">
          <div className="max-w-3xl">
            <p className="pre-title mb-5 text-orange">
              Геймификация и симуляторы
            </p>
            <h1 className="h1">
              Обучение через симуляцию — быстрее, эффективнее, дешевле
            </h1>
            <p className="body-text mt-6 max-w-2xl text-white/70">
              Промышленные симуляторы и бизнес-игры для освоения Lean,
              финансовой грамотности и проектного управления за 6–8 часов
              вместо 72.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink
                href="/contacts"
                className="!bg-orange !text-white hover:!bg-orange/90"
              >
                Обсудить симулятор
              </ButtonLink>
              <ButtonLink
                href="#products"
                variant="secondary"
                className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
              >
                Узнать подробнее
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Сравнение форматов"
            title="Почему симулятор эффективнее"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-light-gray p-8">
              <h3 className="text-lg font-bold text-gray-text">
                Традиционное обучение
              </h3>
              <dl className="mt-6 space-y-5">
                {COMPARISON.map((row) => (
                  <div
                    key={row.metric}
                    className="flex items-baseline justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-gray-text">{row.metric}</dt>
                    <dd className="text-base font-semibold text-graphite">
                      {row.traditional}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-blue-primary bg-blue-primary p-8 text-white shadow-lg">
              <h3 className="text-lg font-bold text-white">Lean-симулятор</h3>
              <dl className="mt-6 space-y-5">
                {COMPARISON.map((row) => (
                  <div
                    key={row.metric}
                    className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-white/70">{row.metric}</dt>
                    <dd className="text-base font-semibold text-orange">
                      {row.simulator}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Products */}
      <Section tone="gray" className="scroll-mt-24">
        <div id="products" />
        <Reveal>
          <SectionHeading
            preTitle="Продукты"
            title="Три продукта для развития команды"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Lean simulator */}
          <Reveal>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm">
              <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                  alt="Lean-симулятор"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <span className="mb-4 inline-flex w-fit rounded-full bg-light-blue px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-secondary">
                Производственный тренажёр
              </span>
              <h3 className="text-xl font-bold text-graphite">
                Компьютерный тренажёр Lean-производство
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-text">
                Онлайн-платформа для отработки навыков без риска для
                производства.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {[
                  '2 режима',
                  '90 инструментов',
                  '27 аналит. форм',
                  '300 показателей',
                ].map((stat) => (
                  <li
                    key={stat}
                    className="rounded-xl border border-border bg-light-gray px-3 py-2 text-xs font-semibold text-blue-primary"
                  >
                    {stat}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs uppercase tracking-wide text-gray-text">
                Для: руководители производств, линейные руководители
              </p>
              <div className="mt-6 flex-1" />
              <ButtonLink
                href="/gamification/lean-simulator"
                variant="secondary"
                className="w-full"
              >
                Подробнее
              </ButtonLink>
            </article>
          </Reveal>

          {/* ProfitMania — featured */}
          <Reveal delay={0.08}>
            <article className="relative flex h-full flex-col rounded-2xl border-2 border-blue-primary bg-white p-7 shadow-md">
              <span className="absolute -top-3 left-7 inline-flex rounded-full bg-orange px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Хит
              </span>
              <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
                  alt="ПрибыльМания"
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <span className="mb-4 inline-flex w-fit rounded-full bg-light-blue px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-secondary">
                Бизнес-игра
              </span>
              <h3 className="text-xl font-bold text-graphite">
                ПрибыльМания — микро-MBA за 2 дня
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-text">
                Игровая симуляция финансово-управленческой грамотности.
              </p>
              <ul className="mt-5 grid grid-cols-3 gap-3">
                {['2 дня', '4 квартала', 'стратегия + финансы'].map((stat) => (
                  <li
                    key={stat}
                    className="rounded-xl border border-border bg-light-gray px-3 py-2 text-center text-xs font-semibold text-blue-primary"
                  >
                    {stat}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs uppercase tracking-wide text-gray-text">
                Для: малый / средний / крупный бизнес
              </p>
              <div className="mt-6 flex-1" />
              <ButtonLink
                href="/gamification/profit-mania"
                className="w-full"
              >
                Подробнее
              </ButtonLink>
            </article>
          </Reveal>

          {/* Custom simulator */}
          <Reveal delay={0.16}>
            <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm">
              <span className="mb-4 inline-flex w-fit rounded-full bg-light-blue px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-secondary">
                Под заказ
              </span>
              <h3 className="text-xl font-bold text-graphite">
                Корпоративный симулятор под ваши задачи
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-text">
                Создание симулятора под специфику вашего производства.
              </p>
              <div className="mt-6 flex-1" />
              <ButtonLink href="/contacts" variant="secondary" className="w-full">
                Обсудить
              </ButtonLink>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* Lean simulator details */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                preTitle="Lean-симулятор"
                title="Учитесь на виртуальном производстве"
              />
              <dl className="mt-10 grid grid-cols-3 gap-6">
                {LEAN_STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="text-4xl font-extrabold text-blue-primary md:text-5xl">
                      {stat.value}
                    </dd>
                    <p className="mt-2 text-sm text-gray-text">{stat.label}</p>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-light-gray p-8">
              <h3 className="mb-6 text-lg font-bold text-graphite">
                5 целей симулятора
              </h3>
              <ol className="space-y-4">
                {LEAN_GOALS.map((goal, index) => (
                  <li key={goal} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-primary text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-sm leading-relaxed text-graphite">
                      {goal}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ProfitMania details */}
      <Section tone="gray">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                preTitle="ПрибыльМания"
                title="Для кого эта бизнес-игра"
              />
              <div className="mt-10 space-y-5">
                {PROFIT_AUDIENCE.map((segment) => (
                  <div
                    key={segment.title}
                    className="rounded-2xl border border-border bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-base font-bold text-graphite">
                      {segment.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-text">
                      {segment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <SectionHeading preTitle="Результаты" title="Что получают участники" />
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {PROFIT_OUTCOMES.map((outcome) => (
                  <div
                    key={outcome.title}
                    className="rounded-2xl border border-border border-l-4 border-l-orange bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-base font-bold text-graphite">
                      {outcome.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-text">
                      {outcome.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-dark">
        <div className="container section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h2 text-white">
              Подберите подходящий симулятор для вашей команды
            </h2>
            <p className="body-text mt-5 text-white/70">
              Расскажите о задачах обучения — предложим формат и сценарий под
              ваше производство.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Обсудить задачу
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
      </section>
    </>
  )
}
