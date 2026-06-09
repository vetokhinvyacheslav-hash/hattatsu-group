import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Корпоративная академия Hattatsu — Hattatsu Group',
  description:
    'Систематическое развитие персонала: от рабочих до топ-менеджеров. Уровни обучения, форматы, LMS и понятный путь запуска корпоративной академии.',
}

const BENEFITS: readonly { title: string; description: string }[] = [
  {
    title: 'Единая система развития',
    description:
      'Обучение перестаёт быть случайным — у каждой категории сотрудников есть свой маршрут развития.',
  },
  {
    title: 'Снижение зависимости от рынка труда',
    description:
      'Компания растит специалистов внутри, а не переплачивает за дефицитные кадры снаружи.',
  },
  {
    title: 'Кадровый резерв',
    description:
      'Ключевые позиции закрываются своими подготовленными людьми, а преемственность управляема.',
  },
  {
    title: 'Культура постоянных улучшений',
    description:
      'Lean-мышление и развитие встроены в повседневную работу на всех уровнях.',
  },
]

interface LevelCard {
  level: string
  title: string
  description: string
}

const LEVELS: readonly LevelCard[] = [
  {
    level: 'Уровень 1',
    title: 'Рабочие и операторы',
    description:
      'Базовые навыки, стандарты рабочего места, культура безопасности и основы бережливого производства.',
  },
  {
    level: 'Уровень 2',
    title: 'ИТР и линейные руководители',
    description:
      'Управление участком, Lean-инструменты, организация работы команды и решение проблем.',
  },
  {
    level: 'Уровень 3',
    title: 'Топ-менеджмент',
    description:
      'Стратегия изменений, управление проектами развития и построение системы непрерывных улучшений.',
  },
]

interface FormatCard {
  title: string
  description: string
}

const FORMATS: readonly FormatCard[] = [
  {
    title: 'Очный тренинг',
    description:
      'Практические занятия на площадке предприятия с разбором реальных кейсов.',
  },
  {
    title: 'Онлайн (Hattatsu LMS)',
    description:
      'Дистанционные курсы и тесты в собственной системе обучения с контролем прогресса.',
  },
  {
    title: 'Blended learning',
    description:
      'Смешанный формат: онлайн-теория и очная отработка навыков на производстве.',
  },
  {
    title: 'Коучинг',
    description:
      'Индивидуальное сопровождение руководителей и проектных команд.',
  },
]

interface NumberedStep {
  title: string
  description: string
}

const LAUNCH_STEPS: readonly NumberedStep[] = [
  {
    title: 'Диагностика потребностей',
    description:
      'Определяем разрывы в компетенциях и приоритетные категории сотрудников.',
  },
  {
    title: 'Проектирование программ',
    description:
      'Формируем уровни обучения, маршруты и содержание под цели предприятия.',
  },
  {
    title: 'Настройка форматов и LMS',
    description:
      'Подбираем форматы и разворачиваем систему обучения Hattatsu LMS.',
  },
  {
    title: 'Запуск первых потоков',
    description:
      'Проводим пилотные группы и собираем обратную связь для донастройки.',
  },
  {
    title: 'Масштабирование и поддержка',
    description:
      'Распространяем академию на все уровни и сопровождаем её работу.',
  },
]

export default function AcademyTrainingPage() {
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
              <p className="pre-title mb-5 text-white">
                Корпоративная академия
              </p>
              <h1 className="h1">Корпоративная академия Hattatsu</h1>
              <p className="body-text mt-6 text-white/70">
                Систематическое развитие персонала: от рабочих до
                топ-менеджеров. Единая система обучения под стратегию вашего
                предприятия.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contacts"
                  className="!bg-orange !text-white hover:!bg-orange/90"
                >
                  Запустить академию
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
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
                  alt="Обучение сотрудников в учебной аудитории"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Что получает компания */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Зачем это бизнесу"
            title="Что получает компания"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.06}>
              <article className="flex h-full gap-5 rounded-2xl border border-border bg-white p-7 shadow-sm">
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-primary/15 text-xl font-bold text-blue-primary"
                >
                  ✓
                </span>
                <div>
                  <h3 className="text-lg font-bold text-graphite">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-text">
                    {benefit.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Уровни обучения */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading
            preTitle="Структура"
            title="3 уровня обучения"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {LEVELS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-border border-t-4 border-t-blue-primary bg-white p-7 shadow-sm">
                <span className="text-sm font-semibold text-blue-primary">
                  {item.level}
                </span>
                <h3 className="mt-2 text-xl font-bold text-graphite">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Форматы */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Форматы"
            title="Как проходит обучение"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FORMATS.map((format, index) => (
            <Reveal key={format.title} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-graphite">
                  {format.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {format.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Как запустить академию */}
      <section className="bg-dark text-white">
        <div className="container section-padding">
          <Reveal>
            <SectionHeading
              preTitle="Как запустить"
              title="5 шагов к корпоративной академии"
              light
            />
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-5">
            {LAUNCH_STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} as="li">
                <div className="flex h-full flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange text-lg font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <Section tone="gray">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h2 text-graphite">
            Постройте систему развития персонала
          </h2>
          <p className="body-text mt-5 text-gray-text">
            Спроектируем корпоративную академию под ваше предприятие — от
            диагностики до запуска первых потоков.
          </p>
        </div>
        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/contacts">Запустить академию</ButtonLink>
          <ButtonLink href="/diagnostics" variant="secondary">
            Пройти диагностику
          </ButtonLink>
        </div>
      </Section>
    </>
  )
}
