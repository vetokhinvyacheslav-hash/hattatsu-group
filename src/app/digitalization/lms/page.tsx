import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Hattatsu LMS — корпоративная платформа обучения — Hattatsu Group',
  description:
    'Корпоративная LMS с курсами под ваш бренд, тестами, аналитикой и геймификацией для промышленных предприятий.',
}

const HERO_STATS: readonly string[] = [
  'Неограниченное число пользователей',
  'Курсы под ваш бренд',
  'Аналитика и трекинг',
]

const FEATURES: readonly { title: string; description: string }[] = [
  {
    title: 'Создание курсов',
    description:
      'Конструктор курсов с видео, документами и интерактивными модулями без программирования.',
  },
  {
    title: 'Тесты и оценки',
    description:
      'Гибкие тесты, контрольные точки и автоматическая выдача сертификатов.',
  },
  {
    title: 'Дашборд руководителя',
    description:
      'Прозрачная аналитика прогресса по сотрудникам, отделам и направлениям.',
  },
  {
    title: 'Мобильное приложение',
    description:
      'Обучение с любого устройства — на рабочем месте, в цеху или в дороге.',
  },
  {
    title: 'Интеграция с HR-системой',
    description:
      'Синхронизация сотрудников, ролей и оргструктуры с вашими HR-инструментами.',
  },
  {
    title: 'Геймификация обучения',
    description:
      'Баллы, рейтинги и достижения повышают вовлечённость и завершаемость курсов.',
  },
]

const STEPS: readonly string[] = [
  'Настройка',
  'Миграция контента',
  'Обучение администраторов',
  'Запуск',
]

interface Plan {
  name: string
  scope: string
  features: readonly string[]
  featured?: boolean
}

const PLANS: readonly Plan[] = [
  {
    name: 'Старт',
    scope: 'до 50 пользователей',
    features: [
      'Создание курсов и тестов',
      'Базовая аналитика',
      'Брендирование интерфейса',
      'Email-поддержка',
    ],
  },
  {
    name: 'Бизнес',
    scope: 'до 500 пользователей',
    features: [
      'Всё из тарифа Старт',
      'Дашборд руководителя',
      'Мобильное приложение',
      'Геймификация обучения',
    ],
    featured: true,
  },
  {
    name: 'Корпоратив',
    scope: 'без ограничений',
    features: [
      'Всё из тарифа Бизнес',
      'Интеграция с HR-системой',
      'Выделенный менеджер',
      'SLA и приоритетная поддержка',
    ],
  },
]

export default function LmsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-primary text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_20%_120%,rgba(240,138,36,0.18),transparent_55%),radial-gradient(circle_at_80%_120%,rgba(43,39,160,0.6),transparent_50%)]"
        />
        <div className="container section-padding relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <p className="pre-title mb-5 text-white">Hattatsu LMS</p>
              <h1 className="h1">
                Hattatsu LMS — корпоративная платформа обучения
              </h1>
              <dl className="mt-8 space-y-4">
                {HERO_STATS.map((stat) => (
                  <div key={stat} className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="h-2 w-2 shrink-0 rounded-full bg-orange"
                    />
                    <dd className="text-base font-semibold text-white">
                      {stat}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contacts"
                  className="!bg-orange !text-white hover:!bg-orange/90"
                >
                  Получить демо-доступ
                </ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Платформа обучения на экране ноутбука"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Возможности"
            title="Что умеет Hattatsu LMS"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-graphite">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Implementation */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading
            preTitle="Внедрение"
            title="Как внедряется платформа"
          />
        </Reveal>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step} delay={index * 0.08}>
              <li className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-primary text-base font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-graphite">
                  {step}
                </h3>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Plans */}
      <Section>
        <Reveal>
          <SectionHeading preTitle="Тарифы" title="Выберите подходящий тариф" />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-8 shadow-sm ${
                  plan.featured
                    ? 'border-2 border-blue-primary shadow-md'
                    : 'border-border'
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-8 inline-flex rounded-full bg-orange px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Популярный
                  </span>
                ) : null}
                <h3 className="text-xl font-bold text-graphite">{plan.name}</h3>
                <p className="mt-1 text-sm text-gray-text">{plan.scope}</p>
                <p className="mt-6 text-3xl font-extrabold text-blue-primary">
                  по запросу
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-graphite">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                      />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex-1" />
                <ButtonLink
                  href="/contacts"
                  variant={plan.featured ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  Запросить цену
                </ButtonLink>
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
              Посмотрите Hattatsu LMS в действии
            </h2>
            <p className="body-text mt-5 text-white/70">
              Запросите демо-доступ — покажем платформу на сценариях вашего
              предприятия.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Получить демо-доступ
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
