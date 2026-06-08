import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Упаковка бренда производственной компании — Hattatsu Group',
  description:
    'Стратегия позиционирования, фирменный стиль, сайт и контент для бренда производственной компании.',
}

const DELIVERABLES: readonly { title: string; description: string }[] = [
  {
    title: 'Стратегия позиционирования',
    description:
      'Формулируем смыслы, отстройку от конкурентов и платформу бренда.',
  },
  {
    title: 'Фирменный стиль',
    description: 'Логотип, цветовая палитра, типографика и брендбук.',
  },
  {
    title: 'Сайт',
    description:
      'Корпоративный сайт, отражающий экспертизу и ценности компании.',
  },
  {
    title: 'Корпоративные материалы',
    description:
      'Презентации, коммерческие предложения и печатные материалы.',
  },
  {
    title: 'Контент-стратегия',
    description:
      'План публикаций, темы и форматы для системного присутствия.',
  },
  {
    title: 'SMM',
    description:
      'Ведение соцсетей и отраслевых площадок для роста узнаваемости.',
  },
]

const STAGES: readonly { title: string; description: string }[] = [
  {
    title: 'Исследование',
    description: 'Анализ рынка, конкурентов и аудитории компании.',
  },
  {
    title: 'Стратегия',
    description: 'Позиционирование, платформа бренда и ключевые сообщения.',
  },
  {
    title: 'Дизайн',
    description: 'Фирменный стиль, брендбук и визуальные носители.',
  },
  {
    title: 'Внедрение',
    description: 'Сайт, материалы и сопровождение запуска бренда.',
  },
]

export default function BrandPage() {
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
              <p className="pre-title mb-5 text-orange">
                Упаковка бренда
              </p>
              <h1 className="h1">
                Упаковка бренда производственной компании
              </h1>
              <p className="body-text mt-6 max-w-xl text-white/70">
                Целостный образ компании — от стратегии до фирменного стиля и
                материалов.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contacts"
                  className="!bg-orange !text-white hover:!bg-orange/90"
                >
                  Обсудить бренд
                </ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
                alt="Элементы фирменного стиля и брендинга"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <Section>
        <Reveal>
          <SectionHeading preTitle="Состав" title="Что входит" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DELIVERABLES.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-graphite">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading preTitle="Процесс" title="Как мы работаем" />
        </Reveal>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 0.08}>
              <li className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-primary text-base font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-graphite">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {stage.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* CTA */}
      <section className="bg-dark">
        <div className="container section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h2 text-white">Соберём бренд вашей компании</h2>
            <p className="body-text mt-5 text-white/70">
              Расскажите о задаче — предложим стратегию и план упаковки бренда.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Обсудить бренд
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
