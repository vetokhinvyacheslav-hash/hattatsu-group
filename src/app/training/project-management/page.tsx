import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Управление проектами изменений на производстве — Hattatsu Group',
  description:
    'Трёхдневный практический тренинг по управлению Lean-проектами изменений: методологии A3, PDCA и DMAIC, работа с командой, рисками и масштабированием результатов.',
}

const HERO_STATS: readonly { value: string; label: string }[] = [
  { value: '3 дня', label: 'интенсивная программа' },
  { value: 'Lean + PMBOK', label: 'две методологии' },
  { value: 'кейсы', label: 'практические разборы' },
]

interface NumberedCard {
  number: string
  title: string
  description: string
}

const MODULES: readonly NumberedCard[] = [
  {
    number: '01',
    title: 'Инициация Lean-проекта',
    description:
      'Формулируем цель, границы и устав проекта. Связываем инициативу со стратегией предприятия и показателями.',
  },
  {
    number: '02',
    title: 'Декомпозиция задач и планирование',
    description:
      'Разбиваем проект на этапы и задачи, выстраиваем сроки, ресурсы и контрольные точки.',
  },
  {
    number: '03',
    title: 'Управление командой изменений',
    description:
      'Распределяем роли, мотивируем участников и выстраиваем коммуникацию внутри проектной команды.',
  },
  {
    number: '04',
    title: 'Риски и препятствия',
    description:
      'Выявляем и оцениваем риски, готовим сценарии реагирования и снимаем сопротивление на местах.',
  },
  {
    number: '05',
    title: 'Отслеживание результатов',
    description:
      'Настраиваем метрики, визуальный контроль и регулярный мониторинг прогресса проекта.',
  },
  {
    number: '06',
    title: 'Закрепление и масштабирование',
    description:
      'Стандартизируем достигнутые улучшения и тиражируем подход на другие участки производства.',
  },
]

interface MethodologyCard {
  name: string
  tagline: string
  description: string
}

const METHODOLOGIES: readonly MethodologyCard[] = [
  {
    name: 'Lean A3',
    tagline: 'Одностраничное мышление',
    description:
      'Структурирует проблему, анализ и решение на одном листе A3. Помогает выровнять понимание команды и руководства.',
  },
  {
    name: 'PDCA',
    tagline: 'Цикл непрерывных улучшений',
    description:
      'Plan–Do–Check–Act: итеративный подход для быстрых проверок гипотез и пошагового улучшения процессов.',
  },
  {
    name: 'DMAIC',
    tagline: 'Подход Six Sigma',
    description:
      'Define–Measure–Analyze–Improve–Control: для проектов, где важны измерения, статистика и снижение вариативности.',
  },
]

interface Persona {
  title: string
  description: string
}

const PERSONAS: readonly Persona[] = [
  {
    title: 'ПМ-руководители',
    description:
      'Руководители проектов, которым нужна единая методология для управления изменениями на производстве.',
  },
  {
    title: 'Team leads',
    description:
      'Лидеры команд, ведущие Kaizen- и Lean-инициативы на своих участках.',
  },
  {
    title: 'Директора по производству',
    description:
      'Управленцы, отвечающие за результат изменений и масштабирование улучшений по предприятию.',
  },
]

export default function ProjectManagementTrainingPage() {
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
            <div className="max-w-2xl">
              <p className="pre-title mb-5 text-orange">
                Тренинг · Управление проектами
              </p>
              <h1 className="h1">
                Управление проектами изменений на производстве
              </h1>
              <p className="body-text mt-6 text-white/70">
                Практический курс для тех, кто ведёт Lean-проекты: от инициации
                до закрепления и масштабирования результата.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contacts"
                  className="!bg-orange !text-white hover:!bg-orange/90"
                >
                  Записаться на тренинг
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
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl shadow-blue-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                  alt="Команда обсуждает план проекта изменений"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <dl className="mt-14 grid gap-6 sm:grid-cols-3">
            {HERO_STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-extrabold md:text-4xl">
                    {stat.value}
                  </dd>
                  <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Программа */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Программа"
            title="6 модулей программы"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {MODULES.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.05}>
              <article className="flex h-full gap-5 rounded-2xl border border-border bg-white p-7 shadow-sm">
                <span className="text-3xl font-extrabold leading-none text-white/60 md:text-4xl">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-graphite">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-text">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Методология */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading
            preTitle="Методология"
            title="Lean A3, PDCA и DMAIC — какой подход выбрать"
            subtitle="На тренинге разбираем три рабочих метода и учим подбирать инструмент под конкретный проект."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {METHODOLOGIES.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-border border-t-4 border-t-orange bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-graphite">{item.name}</h3>
                <p className="mt-1 text-sm font-semibold text-orange">
                  {item.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Для кого */}
      <Section>
        <Reveal>
          <SectionHeading preTitle="Для кого" title="Кому подойдёт тренинг" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PERSONAS.map((persona, index) => (
            <Reveal key={persona.title} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-graphite">
                  {persona.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {persona.description}
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
              Запустите проекты изменений с уверенностью
            </h2>
            <p className="body-text mt-5 text-white/70">
              Соберём программу под задачи вашего предприятия и проведём тренинг
              на ваших кейсах.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Записаться на тренинг
            </ButtonLink>
            <ButtonLink
              href="/diagnostics"
              variant="secondary"
              className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
            >
              Обсудить задачи
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
