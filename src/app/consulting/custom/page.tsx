import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Индивидуальная программа развития производства — Hattatsu Group',
  description:
    'Проектируем программу развития производства под вашу задачу: от точечного консалтинга до комплексной трансформации. Диагностика, проектирование, внедрение.',
}

const HERO_PHOTO =
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80'

const PHASES: readonly { number: string; title: string; description: string }[] =
  [
    {
      number: '01',
      title: 'Диагностика',
      description:
        'Изучаем процессы, показатели и цели бизнеса, формируем карту потерь и точек роста.',
    },
    {
      number: '02',
      title: 'Проектирование',
      description:
        'Подбираем инструменты и собираем программу под конкретную задачу и ресурсы.',
    },
    {
      number: '03',
      title: 'Внедрение',
      description:
        'Запускаем изменения, сопровождаем команду и закрепляем результат в стандартах.',
    },
  ]

const FORMATS: readonly {
  title: string
  duration: string
  description: string
}[] = [
  {
    title: 'Точечная консультация',
    duration: '1–3 дня',
    description:
      'Экспертный взгляд на конкретную проблему: аудит участка, разбор процесса, рекомендации.',
  },
  {
    title: 'Проект улучшений',
    duration: '2–6 мес',
    description:
      'Фокусный проект по одному направлению — поток, переналадка, качество или 5С.',
  },
  {
    title: 'Программа трансформации',
    duration: '6–24 мес',
    description:
      'Комплексное построение производственной системы с обучением и сменой культуры.',
  },
]

export default function CustomConsultingPage() {
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
            <div>
              <p className="pre-title mb-5 text-white">
                Индивидуальный консалтинг
              </p>
              <h1 className="h1">
                Индивидуальная программа развития производства
              </h1>
              <p className="body-text mt-6 max-w-xl text-white/70">
                Проектируем под вашу задачу: от точечного консалтинга до
                комплексной трансформации производственной системы.
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
                  Обсудить задачу
                </ButtonLink>
              </div>
            </div>
            <Reveal>
              <Image
                src={HERO_PHOTO}
                alt="Совещание команды по развитию производства"
                width={800}
                height={500}
                priority
                className="rounded-2xl w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <Section>
        <Reveal>
          <SectionHeading preTitle="Подход" title="Как мы работаем" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PHASES.map((phase, index) => (
            <Reveal key={phase.number} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-sm">
                <span className="text-3xl font-extrabold leading-none text-white/60 md:text-4xl">
                  {phase.number}
                </span>
                <h3 className="mt-5 text-xl font-bold text-graphite">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {phase.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Formats */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading
            preTitle="Форматы работы"
            title="Выберите масштаб под свою задачу"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FORMATS.map((format, index) => (
            <Reveal key={format.title} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-border border-t-4 border-t-blue-primary bg-white p-8 shadow-sm">
                <p className="pre-title text-blue-primary">{format.duration}</p>
                <h3 className="mt-4 text-xl font-bold text-graphite">
                  {format.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {format.description}
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
              Спроектируем программу под вашу задачу
            </h2>
            <p className="body-text mt-5 text-white/70">
              Опишите ситуацию — предложим формат и план работ под ваши цели и
              ресурсы.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Оставить запрос
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
