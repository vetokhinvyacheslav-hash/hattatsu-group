import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Цифровизация производства и HR — Hattatsu Group',
  description:
    'Hattatsu LMS, корпоративные порталы и веб-решения для промышленных предприятий.',
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
    title: 'Hattatsu LMS',
    description:
      'Корпоративная платформа обучения с курсами под ваш бренд, тестами и аналитикой прогресса сотрудников.',
    features: [
      'Создание курсов и тестов',
      'Дашборд руководителя и трекинг',
      'Мобильное приложение',
      'Геймификация обучения',
    ],
    href: '/digitalization/lms',
    badge: 'Платформа обучения',
  },
  {
    title: 'Web-разработка',
    description:
      'Корпоративные сайты, отраслевые порталы и цифровые инструменты под ключ для производственных компаний.',
    features: [
      'Корпоративные сайты и порталы',
      'HR-порталы и базы знаний',
      'Дашборды и панели показателей',
      'Мобильные решения',
    ],
    href: '/digitalization/web',
    badge: 'Разработка под ключ',
  },
]

const FACTS: readonly { value: string; label: string }[] = [
  {
    value: '70%',
    label:
      'промышленных компаний называют цифровизацию ключевым приоритетом развития.',
  },
  {
    value: '2x',
    label:
      'быстрее адаптируются сотрудники при онлайн-обучении на единой платформе.',
  },
  {
    value: '−40%',
    label:
      'затрат на обучение и документооборот после перехода в цифровую среду.',
  },
]

export default function DigitalizationPage() {
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
              <p className="pre-title mb-5 text-white">Цифровизация</p>
              <h1 className="h1">Цифровизация производства и HR</h1>
              <p className="body-text mt-6 max-w-xl text-white/70">
                Hattatsu LMS, корпоративные порталы и веб-решения для
                промышленных предприятий.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contacts"
                  className="!bg-orange !text-white hover:!bg-orange/90"
                >
                  Обсудить проект
                </ButtonLink>
                <ButtonLink
                  href="#products"
                  variant="secondary"
                  className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
                >
                  Смотреть продукты
                </ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                alt="Цифровые технологии и сети передачи данных"
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
          <SectionHeading
            preTitle="Продукты"
            title="Два направления цифровизации"
          />
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

      {/* Why digitalization matters */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading
            preTitle="Почему это важно"
            title="Цифровизация — конкурентное преимущество производства"
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
          {FACTS.map((fact, index) => (
            <Reveal key={fact.value} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-blue-primary md:text-5xl">
                  {fact.value}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-text">
                  {fact.label}
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
            <h2 className="h2 text-white">
              Готовы перевести обучение и процессы в цифру?
            </h2>
            <p className="body-text mt-5 text-white/70">
              Расскажите о задачах — предложим платформу и план внедрения под
              ваше предприятие.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Обсудить проект
            </ButtonLink>
            <ButtonLink
              href="/digitalization/lms"
              variant="secondary"
              className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
            >
              Узнать о LMS
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
