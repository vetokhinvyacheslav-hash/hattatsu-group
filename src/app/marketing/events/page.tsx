import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Организация корпоративных мероприятий — Hattatsu Group',
  description:
    'Обучающие конференции, Lean-симуляции, отраслевые форумы и team building под ключ.',
}

const FORMATS: readonly { title: string; description: string }[] = [
  {
    title: 'Обучающие конференции',
    description:
      'Программы с экспертами, практиками и кейсами для развития команд.',
  },
  {
    title: 'Lean-симуляции',
    description:
      'Игровые форматы освоения бережливого производства за один день.',
  },
  {
    title: 'Отраслевые форумы',
    description:
      'Площадки для обмена опытом и нетворкинга внутри отрасли.',
  },
  {
    title: 'Корпоративы и team building',
    description:
      'Мероприятия для сплочения команды и укрепления культуры компании.',
  },
]

const STEPS: readonly { title: string; description: string }[] = [
  {
    title: 'Концепция',
    description: 'Цели мероприятия, формат, аудитория и ключевые смыслы.',
  },
  {
    title: 'Подготовка',
    description: 'Площадка, программа, спикеры, логистика и оформление.',
  },
  {
    title: 'Проведение',
    description: 'Сопровождение на площадке и управление программой.',
  },
  {
    title: 'Итоги',
    description: 'Сбор обратной связи, материалы и отчёт по результатам.',
  },
]

export default function EventsPage() {
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
              <p className="pre-title mb-5 text-orange">Мероприятия</p>
              <h1 className="h1">Организация корпоративных мероприятий</h1>
              <p className="body-text mt-6 max-w-xl text-white/70">
                Обучающие конференции, форумы и team building под ключ — от
                концепции до сопровождения на площадке.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contacts"
                  className="!bg-orange !text-white hover:!bg-orange/90"
                >
                  Обсудить мероприятие
                </ButtonLink>
              </div>
            </div>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
                alt="Зал конференции с участниками"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <Section>
        <Reveal>
          <SectionHeading preTitle="Форматы" title="Что организуем" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FORMATS.map((format, index) => (
            <Reveal key={format.title} delay={(index % 4) * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-graphite">
                  {format.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {format.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading preTitle="Процесс" title="Как работаем" />
        </Reveal>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <li className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-primary text-base font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-graphite">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {step.description}
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
            <h2 className="h2 text-white">Организуем ваше мероприятие</h2>
            <p className="body-text mt-5 text-white/70">
              Расскажите о задаче — предложим концепцию, формат и смету.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Обсудить мероприятие
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
