import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Маркетинг для промышленных компаний — Hattatsu Group',
  description:
    'Упаковка бренда и организация мероприятий для производственных и промышленных компаний.',
}

interface ProductCard {
  title: string
  description: string
  features: readonly string[]
  href: string
  badge: string
}

const PRODUCTS: readonly ProductCard[] = [
  {
    title: 'Упаковка бренда',
    description:
      'Целостный образ компании — от стратегии позиционирования до фирменного стиля и материалов.',
    features: [
      'Стратегия позиционирования',
      'Фирменный стиль и брендбук',
      'Сайт и корпоративные материалы',
      'Контент-стратегия и SMM',
    ],
    href: '/marketing/brand',
    badge: 'Бренд',
  },
  {
    title: 'Организация Event',
    description:
      'Корпоративные и отраслевые мероприятия под ключ — от концепции до сопровождения на площадке.',
    features: [
      'Обучающие конференции',
      'Lean-симуляции',
      'Отраслевые форумы',
      'Корпоративы и team building',
    ],
    href: '/marketing/events',
    badge: 'Мероприятия',
  },
]

const B2B_POINTS: readonly { title: string; description: string }[] = [
  {
    title: 'Длинный цикл сделки',
    description:
      'Решения принимаются коллегиально и долго — маркетинг работает на доверие и экспертность.',
  },
  {
    title: 'Сложный продукт',
    description:
      'Технологичный продукт нужно объяснять простым и убедительным языком для разных ролей.',
  },
  {
    title: 'Узкая аудитория',
    description:
      'Точечный охват ЛПР и отраслевых сообществ важнее массовых каналов и широкого охвата.',
  },
]

export default function MarketingPage() {
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
              <p className="pre-title mb-5 text-orange">Маркетинг</p>
              <h1 className="h1">Маркетинг для промышленных компаний</h1>
              <p className="body-text mt-6 max-w-xl text-white/70">
                Упаковка бренда и организация мероприятий, которые усиливают
                позиции компании на рынке.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contacts"
                  className="!bg-orange !text-white hover:!bg-orange/90"
                >
                  Обсудить задачу
                </ButtonLink>
                <ButtonLink
                  href="#products"
                  variant="secondary"
                  className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
                >
                  Смотреть услуги
                </ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
              <Image
                src="https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&w=800&q=80"
                alt="Маркетинговая команда обсуждает стратегию"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <Section className="scroll-mt-24">
        <div id="products" />
        <Reveal>
          <SectionHeading preTitle="Услуги" title="Два направления маркетинга" />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.href} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-sm">
                <span className="mb-4 inline-flex w-fit rounded-full bg-light-blue px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-secondary">
                  {product.badge}
                </span>
                <h3 className="text-2xl font-bold text-graphite">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {product.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature) => (
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
                <ButtonLink href={product.href} className="w-full">
                  Подробнее
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* B2B specifics */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading
            preTitle="Особенность"
            title="Чем B2B-маркетинг отличается"
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
          {B2B_POINTS.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-border border-l-4 border-l-orange bg-white p-7 shadow-sm">
                <h3 className="text-base font-bold text-graphite">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-dark">
        <div className="container section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h2 text-white">Обсудить маркетинговую задачу</h2>
            <p className="body-text mt-5 text-white/70">
              Расскажите о задаче — предложим решение и формат работы.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Обсудить задачу
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
