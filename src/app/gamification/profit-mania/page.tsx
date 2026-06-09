import type { Metadata } from 'next'
import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'ПрибыльМания — микро-MBA за 2 дня — Hattatsu Group',
  description:
    'Деловая игра ПрибыльМания: за два дня и четыре игровых квартала участники осваивают финансово-управленческую грамотность на практике.',
}

const HERO_STATS: readonly { value: string; label: string }[] = [
  { value: '2 дня', label: 'формат игры' },
  { value: '4', label: 'игровых квартала' },
  { value: 'до 30', label: 'участников' },
]

interface FlowStep {
  title: string
  description: string
}

const FLOW: readonly FlowStep[] = [
  {
    title: 'Старт',
    description:
      'Команды получают собственную виртуальную компанию с активами, долгами и стартовым капиталом.',
  },
  {
    title: 'Стратегия',
    description:
      'Участники определяют бизнес-модель, ценообразование и план развития на игровой год.',
  },
  {
    title: 'Кварталы',
    description:
      'Четыре игровых квартала: закупки, производство, продажи и финансовые решения в условиях рынка.',
  },
  {
    title: 'Итоги и разбор',
    description:
      'Подводим финансовые результаты, сравниваем компании и разбираем принятые решения.',
  },
]

const OUTCOMES: readonly { title: string; description: string }[] = [
  {
    title: 'Читать финансовую отчётность',
    description: 'Баланс, P&L и денежный поток перестают быть абстракцией.',
  },
  {
    title: 'Видеть связь решений и прибыли',
    description: 'Каждое управленческое действие отражается на финансах компании.',
  },
  {
    title: 'Управлять денежным потоком',
    description: 'Понимание, почему прибыль и деньги на счёте — это не одно и то же.',
  },
  {
    title: 'Считать себестоимость и маржу',
    description: 'Учимся принимать решения по ценам и затратам осознанно.',
  },
  {
    title: 'Оценивать инвестиции',
    description: 'Куда вложить ресурсы, чтобы получить отдачу в следующем квартале.',
  },
  {
    title: 'Работать в команде под давлением',
    description: 'Совместные решения в условиях ограниченного времени и рынка.',
  },
]

interface Segment {
  title: string
  description: string
}

const SEGMENTS: readonly Segment[] = [
  {
    title: 'Малый бизнес',
    description:
      'Собственники и руководители, которым важно понимать финансы своей компании целиком.',
  },
  {
    title: 'Средний бизнес',
    description:
      'Руководители подразделений, отвечающие за бюджеты и финансовый результат.',
  },
  {
    title: 'Крупный бизнес',
    description:
      'Управленцы и кадровый резерв, развивающие финансово-управленческую грамотность.',
  },
]

export default function ProfitManiaPage() {
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
                Геймификация · Деловая игра
              </p>
              <h1 className="h1">ПрибыльМания — микро-MBA за 2 дня</h1>
              <p className="body-text mt-6 text-white/70">
                Деловая игра для освоения финансово-управленческой грамотности.
                Участники управляют компанией и видят результат своих решений в
                цифрах.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink
                  href="/contacts"
                  className="!bg-orange !text-white hover:!bg-orange/90"
                >
                  Заказать игру
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                  alt="Команда играет в деловую бизнес-игру"
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

      {/* Как проходит игра */}
      <Section>
        <Reveal>
          <SectionHeading
            preTitle="Ход игры"
            title="Как проходит ПрибыльМания"
          />
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {FLOW.map((step, index) => (
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

      {/* Чему учит */}
      <Section tone="gray">
        <Reveal>
          <SectionHeading
            preTitle="Результаты"
            title="Чему учит игра"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map((outcome, index) => (
            <Reveal key={outcome.title} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-graphite">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {outcome.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Для кого */}
      <Section>
        <Reveal>
          <SectionHeading preTitle="Для кого" title="Кому подойдёт игра" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SEGMENTS.map((segment, index) => (
            <Reveal key={segment.title} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-border border-t-4 border-t-orange bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-graphite">
                  {segment.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {segment.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Отзыв */}
      <section className="bg-blue-primary text-white">
        <div className="container section-padding">
          <Reveal>
            <figure className="mx-auto max-w-3xl text-center">
              <span
                aria-hidden
                className="text-6xl font-extrabold leading-none text-white"
              >
                &ldquo;
              </span>
              <blockquote className="mt-4">
                <p className="text-xl font-medium leading-relaxed text-white md:text-2xl">
                  За два дня моя команда поняла про финансы больше, чем за год
                  планёрок. Когда сам ведёшь компанию через четыре квартала,
                  баланс и денежный поток наконец перестают быть абстракцией.
                </p>
              </blockquote>
              <figcaption className="mt-6 text-sm text-white/70">
                <span className="font-bold text-white">Андрей Соколов</span> ·
                операционный директор, производственная компания
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark">
        <div className="container section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="h2 text-white">
              Проведите ПрибыльМанию в своей команде
            </h2>
            <p className="body-text mt-5 text-white/70">
              Организуем деловую игру под ваш состав участников и уровень
              подготовки.
            </p>
          </div>
          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contacts"
              className="!bg-orange !text-white hover:!bg-orange/90"
            >
              Заказать игру
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
