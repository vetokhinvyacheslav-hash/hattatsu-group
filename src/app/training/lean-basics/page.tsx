import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Основы Lean Production — корпоративный тренинг — Hattatsu Group',
  description:
    'Двухдневный корпоративный тренинг по основам Lean Production: 7 видов потерь, VSM, 5S, стандартизация и Kaizen. Теория и практика для команды до 25 человек.',
}

const HERO_PHOTO =
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'

const HERO_STATS: readonly { value: string; label: string }[] = [
  { value: '2 дня', label: 'длительность программы' },
  { value: 'до 25', label: 'участников в группе' },
  { value: '50/50', label: 'теория и практика' },
]

const MODULES: readonly string[] = [
  'История и принципы Lean',
  '7 видов потерь',
  'VSM и анализ потоков',
  '5S на практике',
  'Стандартизация процессов',
  'Kaizen-проекты',
  'Измерение результатов',
  'Дорожная карта изменений',
]

const FORMATS: readonly { title: string; description: string }[] = [
  {
    title: 'Онлайн, 2 дня',
    description:
      'Интерактивный тренинг в формате видеоконференции с разбором кейсов и заданиями.',
  },
  {
    title: 'Офлайн у вас',
    description:
      'Тренинг на вашей площадке с практикой на реальных процессах производства.',
  },
  {
    title: 'Гибридный',
    description:
      'Теория онлайн, практическая часть и Gemba-обход — очно на предприятии.',
  },
]

const PERSONAS: readonly { title: string; description: string }[] = [
  {
    title: 'Руководители производств',
    description:
      'Чтобы видеть потенциал улучшений и задавать направление изменений.',
  },
  {
    title: 'Линейные руководители',
    description:
      'Чтобы внедрять инструменты Lean на участках и вовлекать команды.',
  },
  {
    title: 'Инженерно-технический персонал',
    description:
      'Чтобы анализировать процессы и вести Kaizen-проекты на практике.',
  },
]

export default function LeanBasicsPage() {
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
              <p className="pre-title mb-5 text-orange">
                Корпоративный тренинг
              </p>
              <h1 className="h1">
                Основы Lean Production — корпоративный тренинг
              </h1>
              <p className="body-text mt-6 max-w-xl text-white/70">
                За два дня даём команде общий язык бережливого производства:
                принципы Lean, виды потерь и базовые инструменты с практикой.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contacts"
                  className="!bg-orange !text-white hover:!bg-orange/90"
                >
                  Заказать тренинг
                </ButtonLink>
                <ButtonLink
                  href="/contacts"
                  variant="secondary"
                  className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
                >
                  Получить программу
                </ButtonLink>
              </div>
            </div>
            <Reveal>
              <Image
                src={HERO_PHOTO}
                alt="Корпоративный тренинг по бережливому производству"
                width={800}
                height={500}
                priority
                className="rounded-2xl w-full object-cover"
              />
            </Reveal>
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

      {/* Program */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                preTitle="Программа"
                title="8 модулей тренинга"
              />
            </Reveal>
            <ol className="mt-10 space-y-4">
              {MODULES.map((module, index) => (
                <Reveal key={module} delay={index * 0.04} as="li">
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-primary text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-sm font-medium leading-relaxed text-graphite">
                      {module}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={0.1}>
            <Image
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
              alt="Командная работа на тренинге"
              width={800}
              height={500}
              className="rounded-2xl w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* Formats */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading
            preTitle="Форматы"
            title="Удобный формат проведения"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FORMATS.map((format, index) => (
            <Reveal key={format.title} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-border border-t-4 border-t-orange bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-graphite">
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

      {/* For whom */}
      <Section>
        <Reveal>
          <SectionHeading preTitle="Для кого" title="Кому подойдёт тренинг" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PERSONAS.map((persona, index) => (
            <Reveal key={persona.title} delay={index * 0.06}>
              <article className="flex h-full gap-5 rounded-2xl border border-border bg-white p-7 shadow-sm">
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/15 text-xl font-bold text-orange"
                >
                  ✓
                </span>
                <div>
                  <h3 className="text-lg font-bold text-graphite">
                    {persona.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-text">
                    {persona.description}
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
              Обучите команду основам Lean Production
            </h2>
            <p className="body-text mt-5 text-white/70">
              Адаптируем программу под вашу отрасль и проведём тренинг в удобном
              формате.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Заказать тренинг
            </ButtonLink>
            <ButtonLink
              href="/contacts"
              variant="secondary"
              className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
            >
              Получить программу
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
