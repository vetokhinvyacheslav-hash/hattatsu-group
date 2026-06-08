import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Производственная система на базе Lean — Hattatsu Group',
  description:
    'Строим производственную систему на базе Lean: снижаем потери до 30%, повышаем OEE и эффективность производства через VSM, Kaizen, SMED, TPM и 5S.',
}

const HERO_PHOTO =
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'

const HERO_STATS: readonly { value: string; label: string }[] = [
  { value: 'До 30%', label: 'снижение потерь' },
  { value: '18 мес.', label: 'средний срок внедрения' },
  { value: '87%', label: 'рост OEE у клиентов' },
]

const STAGES: readonly { title: string; description: string }[] = [
  {
    title: 'Диагностика текущего состояния',
    description:
      'Анализируем процессы, замеряем показатели и находим источники потерь.',
  },
  {
    title: 'Картирование потоков ценности (VSM)',
    description:
      'Визуализируем поток создания ценности и выявляем узкие места.',
  },
  {
    title: 'Проектирование целевого состояния',
    description:
      'Разрабатываем модель будущего процесса и план перехода к ней.',
  },
  {
    title: 'Внедрение изменений',
    description:
      'Запускаем пилот, отрабатываем решения и тиражируем их на потоки.',
  },
  {
    title: 'Обучение и закрепление культуры',
    description:
      'Обучаем команду и встраиваем непрерывные улучшения в ежедневную работу.',
  },
]

const TOOLS: readonly { name: string; description: string }[] = [
  { name: 'VSM', description: 'Картирование потока создания ценности' },
  { name: '5S / 6S', description: 'Организация и порядок рабочих мест' },
  { name: 'SMED', description: 'Быстрая переналадка оборудования' },
  { name: 'Kaizen', description: 'Непрерывные улучшения процессов' },
  { name: 'TPM', description: 'Всеобщее обслуживание оборудования' },
  { name: 'Poka-Yoke', description: 'Защита от ошибок на рабочих местах' },
  { name: 'Kanban', description: 'Вытягивающее управление потоком' },
  { name: 'Heijunka', description: 'Выравнивание загрузки производства' },
  { name: 'Andon', description: 'Визуальное оповещение о проблемах' },
]

const VALUE_POINTS: readonly string[] = [
  'VSM — видим весь поток создания ценности и устраняем потери системно',
  'Kaizen — вовлекаем команду в непрерывные улучшения',
  'SMED — сокращаем время переналадки и повышаем гибкость',
  'TPM — стабилизируем работу оборудования и снижаем простои',
  '5S — создаём порядок как фундамент производственной системы',
]

export default function ProductionSystemPage() {
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
                Производственный консалтинг
              </p>
              <h1 className="h1">
                Построение производственной системы на базе Lean
              </h1>
              <p className="body-text mt-6 max-w-xl text-white/70">
                Снижаем производственные потери и повышаем эффективность:
                выстраиваем устойчивую систему улучшений, которая работает после
                ухода консультантов.
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
                alt="Производственная линия предприятия"
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

      {/* What is a production system */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                preTitle="Подход"
                title="Что такое производственная система"
              />
            </Reveal>
            <Reveal delay={0.05}>
              <p className="body-text mt-6 text-gray-text">
                Производственная система — это связанный набор инструментов,
                стандартов и культуры, которые вместе обеспечивают стабильное
                качество, минимум потерь и непрерывный рост эффективности.
                Hattatsu выстраивает её на проверенных методах Lean.
              </p>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {VALUE_POINTS.map((point, index) => (
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
              src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80"
              alt="Команда инженеров на производстве"
              width={800}
              height={500}
              className="rounded-2xl w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* Stages */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading
            preTitle="Как проходит проект"
            title="Этапы внедрения"
          />
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-5">
          {STAGES.map((step, index) => (
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

      {/* Tools */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Инструменты"
            title="Инструменты бережливого производства"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool, index) => (
            <Reveal key={tool.name} delay={index * 0.04}>
              <article className="flex h-full gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange/15 text-lg font-bold text-orange"
                >
                  ✓
                </span>
                <div>
                  <h3 className="text-lg font-bold text-graphite">
                    {tool.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-text">
                    {tool.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Case AGC */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading preTitle="Кейс" title="Стекольный завод AGC" />
        </Reveal>
        <Reveal delay={0.05}>
          <article className="mt-12 rounded-2xl border border-border border-l-4 border-l-orange bg-white p-8 shadow-sm md:p-10">
            <p className="pre-title text-orange">Производство стекла</p>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-base font-bold text-graphite">Задача</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  Повысить производительность производственной линии без крупных
                  капитальных вложений.
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-graphite">Решение</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  Внедрили производственную систему на базе Lean: VSM, TPM, SMED
                  и культуру Kaizen.
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-graphite">Результат</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  OEE вырос с 70% до 87% за 18 месяцев при стабильном качестве
                  продукции.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </Section>

      {/* CTA */}
      <section className="bg-dark">
        <div className="container section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h2 text-white">
              Получите диагностику производственной системы
            </h2>
            <p className="body-text mt-5 text-white/70">
              Покажем источники потерь и потенциал роста OEE на вашем
              производстве.
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
