import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Веб-разработка для производственных компаний — Hattatsu Group',
  description:
    'Корпоративные сайты, порталы и цифровые инструменты под ключ для производственных компаний.',
}

const SERVICES: readonly { title: string; description: string }[] = [
  {
    title: 'Корпоративные сайты',
    description:
      'Сайты, которые отражают экспертизу компании и работают как инструмент развития.',
  },
  {
    title: 'Отраслевые порталы',
    description:
      'Цифровые площадки для отраслевых сообществ, партнёров и клиентов.',
  },
  {
    title: 'HR-порталы и LMS',
    description:
      'Внутренние порталы, базы знаний и платформы обучения сотрудников.',
  },
  {
    title: 'Мобильные решения',
    description:
      'Мобильные приложения и адаптивные интерфейсы для работы в любых условиях.',
  },
]

const PROCESS: readonly string[] = [
  'Бриф',
  'Дизайн',
  'Разработка',
  'Тестирование',
  'Поддержка',
]

const STACK: readonly string[] = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Prisma',
  'Docker',
]

export default function WebPage() {
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
                Веб-разработка
              </p>
              <h1 className="h1">
                Веб-разработка для производственных компаний
              </h1>
              <p className="body-text mt-6 max-w-xl text-white/70">
                Корпоративные сайты, порталы и цифровые инструменты под ключ.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contacts"
                  className="!bg-orange !text-white hover:!bg-orange/90"
                >
                  Обсудить проект
                </ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
              <Image
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80"
                alt="Рабочее место веб-разработчика с кодом на экране"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <Section>
        <Reveal>
          <SectionHeading preTitle="Услуги" title="Что делаем" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={(index % 4) * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-graphite">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {service.description}
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
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((step, index) => (
            <Reveal key={step} delay={index * 0.06}>
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

      {/* Stack */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Технологии"
            title="Наш стек"
            align="center"
          />
        </Reveal>
        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-light-gray px-5 py-2.5 text-sm font-semibold text-blue-primary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <section className="bg-dark">
        <div className="container section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h2 text-white">
              Обсудим ваш веб-проект
            </h2>
            <p className="body-text mt-5 text-white/70">
              Расскажите о задаче — предложим решение, сроки и стоимость.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Обсудить проект
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
