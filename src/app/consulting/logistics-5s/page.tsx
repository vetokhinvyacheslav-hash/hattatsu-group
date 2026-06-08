import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Разметка рабочих мест и внедрение 5С/6С — Hattatsu Group',
  description:
    'Внедряем систему 5С/6С: организуем рабочие места, экономим до 40% площади, повышаем производительность на 25%. Типовой проект — 6 недель.',
}

const HERO_PHOTO =
  'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80'

const HERO_STATS: readonly { value: string; label: string }[] = [
  { value: 'До 40%', label: 'экономия площади' },
  { value: '25%', label: 'рост производительности' },
  { value: '6 недель', label: 'типовой проект' },
]

const STEPS: readonly { title: string; description: string }[] = [
  {
    title: 'Сортировка',
    description:
      'Убираем с рабочих мест всё лишнее — оставляем только нужное для работы.',
  },
  {
    title: 'Соблюдение порядка',
    description:
      'У каждого предмета своё место, обозначенное и удобное для доступа.',
  },
  {
    title: 'Содержание в чистоте',
    description:
      'Регулярная уборка как способ контроля состояния оборудования.',
  },
  {
    title: 'Стандартизация',
    description:
      'Закрепляем достигнутый порядок в визуальных стандартах рабочих мест.',
  },
  {
    title: 'Совершенствование',
    description:
      'Поддерживаем дисциплину и непрерывно улучшаем организацию.',
  },
  {
    title: 'Безопасность (6С)',
    description:
      'Встраиваем требования безопасности в каждый элемент рабочего места.',
  },
]

const RESULTS: readonly { value: string; title: string; description: string }[] =
  [
    {
      value: '40%',
      title: 'Освобождённой площади',
      description: 'Высвобождаем пространство под новые задачи и потоки.',
    },
    {
      value: '25%',
      title: 'Рост производительности',
      description: 'Меньше потерь времени на поиск инструментов и материалов.',
    },
    {
      value: '–30%',
      title: 'Времени на операции',
      description: 'Эргономичная организация сокращает лишние перемещения.',
    },
    {
      value: '100%',
      title: 'Прозрачность процессов',
      description: 'Любое отклонение видно сразу благодаря визуальным стандартам.',
    },
  ]

export default function Logistics5SPage() {
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
                Организация рабочих мест
              </p>
              <h1 className="h1">
                Разметка рабочих мест и внедрение 5С/6С
              </h1>
              <p className="body-text mt-6 max-w-xl text-white/70">
                Превращаем хаотичные рабочие места в эргономичную и безопасную
                среду, где порядок поддерживается сам собой.
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
                alt="Организованное рабочее место на производстве"
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

      {/* 6 steps */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Методика"
            title="6 шагов системы 5С/6С"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <article className="flex h-full gap-5 rounded-2xl border border-border bg-white p-7 shadow-sm">
                <span className="text-3xl font-extrabold leading-none text-white/60 md:text-4xl">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-graphite">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-text">
                    {step.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Visual management */}
      <Section tone="gray">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                preTitle="Визуальный менеджмент"
                title="Порядок, который виден с первого взгляда"
              />
            </Reveal>
            <Reveal delay={0.05}>
              <p className="body-text mt-6 text-gray-text">
                Визуальный менеджмент делает состояние процесса очевидным для
                каждого. Напольная разметка зонирует пространство, цветовая
                маркировка и информационные стенды задают стандарт, а теневые
                доски показывают, всё ли на своём месте.
              </p>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {[
                'Напольная разметка зон хранения, проходов и оборудования',
                'Цветовое кодирование инструментов, тары и материалов',
                'Информационные стенды и стандарты рабочих мест',
                'Теневые доски и обозначенные места хранения',
              ].map((point, index) => (
                <Reveal key={point} delay={index * 0.05} as="li">
                  <div className="flex gap-3 text-graphite">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                    />
                    <span className="text-sm leading-relaxed">{point}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              alt="Визуальный менеджмент на складе"
              width={800}
              height={500}
              className="rounded-2xl w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* Results */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Результаты"
            title="Что получает предприятие"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((result, index) => (
            <Reveal key={result.title} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <p className="text-4xl font-extrabold text-orange">
                  {result.value}
                </p>
                <h3 className="mt-4 text-base font-bold text-graphite">
                  {result.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {result.description}
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
              Наведём порядок на ваших рабочих местах
            </h2>
            <p className="body-text mt-5 text-white/70">
              Запустим пилотный участок 5С/6С за 6 недель и покажем измеримый
              результат.
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
