import type { Metadata } from 'next'
import Image from 'next/image'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { ClientLogos } from '@/components/ui/ClientLogos'
import { ROICalculator } from '@/components/ui/ROICalculator'
import { CasesSection } from '@/components/ui/CasesSection'

export const metadata: Metadata = {
  title: 'Hattatsu Group — Развитие производственных предприятий',
  description:
    'Консалтинг, обучение и цифровизация производства. Помогаем предприятиям выйти на новый уровень эффективности через Lean, HR-системы и технологии.',
}

interface ServiceItem {
  title: string
  description: string
  href: string
  image: string
}

const SERVICES: readonly ServiceItem[] = [
  {
    title: 'Производственный консалтинг',
    description:
      'Построение производственных систем на базе Lean, 5S, Kaizen. Снижение потерь до 30%.',
    href: '/consulting',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'HR-консалтинг',
    description:
      'Построение HR-системы: от рекрутинга до кадрового резерва. 7 ключевых элементов.',
    href: '/hr',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Обучение и развитие',
    description:
      'Корпоративные программы: Lean Production, управление проектами, коммуникации.',
    href: '/training',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Геймификация',
    description:
      'Lean-симулятор и бизнес-игра ПрибыльМания. Обучение без отрыва от производства.',
    href: '/gamification',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Цифровизация',
    description:
      'Hattatsu LMS и web-разработка. Корпоративная академия в цифровом формате.',
    href: '/digitalization',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Маркетинг',
    description:
      'Упаковка бренда и организация событий для промышленных компаний.',
    href: '/marketing',
    image:
      'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=400&q=80',
  },
]

interface HeroStat {
  value: string
  label: string
}

const HERO_STATS: readonly HeroStat[] = [
  { value: '20+', label: 'лет экспертизы' },
  { value: '6', label: 'стран присутствия' },
  { value: '140+', label: 'Kaizen-проектов' },
]

const DIAGNOSTIC_BENEFITS: readonly string[] = [
  'Radar-карта по 5 направлениям',
  'Приоритеты для развития',
  'Индивидуальные рекомендации',
]

const GEO_CITIES: readonly string[] = [
  'Москва',
  'Санкт-Петербург',
  'Екатеринбург',
  'Казань',
  'Новосибирск',
  'СНГ',
]

interface TeamMember {
  name: string
  role: string
  image: string
}

const TEAM: readonly TeamMember[] = [
  {
    name: 'Джанунц Смбат',
    role: 'Основатель, Lean 18+ лет',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Горшенин Семён',
    role: 'Эксперт Kaizen & Lean Production',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ездаков Максим',
    role: 'Операционная эффективность',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Терещенко Владислав',
    role: 'Цифровое обучение & симуляторы',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Киреев Артур',
    role: 'Маркетинг & развитие бизнеса',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Черных Лариса',
    role: 'HR-эксперт, CIPD UK',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ветохин Вячеслав',
    role: 'Визуализация & бизнес-коммуникации',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Арустамян Арсен',
    role: 'Fullstack веб-разработка',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80',
  },
]


export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_100%,var(--color-light-blue,#E8EAFF)_0%,transparent_70%)] opacity-60"
        />
        <div className="container relative">
          <div className="grid items-center gap-12 py-16 md:min-h-[calc(100vh-5rem)] md:py-20 lg:grid-cols-2 lg:gap-16">
            {/* Left column */}
            <div>
              <span className="inline-flex w-fit rounded-full bg-blue-primary/10 px-4 py-1.5 text-sm font-semibold text-blue-primary">
                Производственный консалтинг
              </span>
              <h1 className="h1 mt-6 text-graphite">
                Вывод производства на новый уровень эффективности
              </h1>
              <p className="body-text mt-6 max-w-xl text-gray-text">
                Hattatsu Group — экосистема экспертов для развития предприятий
                через Lean-консалтинг, обучение, цифровизацию и культуру
                непрерывных улучшений.
              </p>

              <dl className="mt-10 grid grid-cols-3 gap-6 border-y border-border py-6">
                {HERO_STATS.map((stat) => (
                  <AnimatedCounter
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    className="[&>p:first-child]:!text-3xl [&>p:first-child]:md:!text-4xl"
                  />
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/diagnostics">
                  Пройти диагностику производства
                </ButtonLink>
                <ButtonLink href="/consulting" variant="secondary">
                  Посмотреть услуги
                </ButtonLink>
              </div>
            </div>

            {/* Right column */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl shadow-blue-primary/10">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
                  alt="Эксперты Hattatsu Group на производстве"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 max-w-[15rem] rounded-2xl bg-white p-5 shadow-xl">
                <p className="text-base font-bold text-graphite">
                  Диагностика зрелости
                </p>
                <p className="mt-1 text-sm text-gray-text">Старт за 5 минут</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Services grid */}
      <section className="bg-light-gray">
        <div className="container section-padding">
          <SectionHeading
            title="Полная экосистема для роста производства"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const isFeatured = index === 0
              return (
                <Reveal
                  key={service.title}
                  as="article"
                  delay={(index % 3) * 0.07}
                  className={`h-full${isFeatured ? ' sm:col-span-2 lg:col-span-2' : ''}`}
                >
                  <ButtonLink
                    href={service.href}
                    variant="ghost"
                    className="!block !h-full !rounded-2xl !p-0"
                  >
                    <span
                      className={`flex h-full rounded-2xl border border-border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md ${
                        isFeatured ? 'flex-col md:flex-row' : 'flex-col'
                      }`}
                    >
                      <span
                        className={`relative overflow-hidden ${
                          isFeatured
                            ? 'h-52 shrink-0 rounded-t-2xl md:h-auto md:w-5/12 md:rounded-l-2xl md:rounded-tr-none'
                            : 'mb-0 block h-44 rounded-t-2xl'
                        }`}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes={
                            isFeatured
                              ? '(min-width: 1024px) 40vw, (min-width: 640px) 90vw, 100vw'
                              : '(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw'
                          }
                          className="object-cover"
                        />
                      </span>
                      <span
                        className={`flex flex-1 flex-col ${isFeatured ? 'p-8' : 'p-7'}`}
                      >
                        <span
                          className={`font-bold text-graphite ${isFeatured ? 'text-2xl' : 'text-lg'}`}
                        >
                          {service.title}
                        </span>
                        <span className="mt-3 flex-1 text-sm leading-relaxed text-gray-text">
                          {service.description}
                        </span>
                        <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-primary">
                          Подробнее
                          <span aria-hidden>→</span>
                        </span>
                      </span>
                    </span>
                  </ButtonLink>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Client logos marquee */}
      <ClientLogos />

      {/* SECTION 4 — Diagnostic CTA banner */}
      <section className="relative overflow-hidden bg-blue-primary">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]"
        />
        <div className="container section-padding relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="h2 text-white">
                Узнайте уровень зрелости вашего производства
              </h2>
              <p className="body-text mt-5 text-white/80">
                7 вопросов · 5 минут · Персональный индекс + рекомендации
                эксперта
              </p>
            </div>
            <div>
              <ul className="space-y-4">
                {DIAGNOSTIC_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-white">
                    <span
                      aria-hidden
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange text-sm font-bold text-white"
                    >
                      ✓
                    </span>
                    <span className="text-base leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink
                  href="/diagnostics"
                  className="!bg-orange !text-white hover:!bg-orange/90"
                >
                  Начать диагностику бесплатно
                </ButtonLink>
              </div>
              <p className="mt-4 text-sm text-white/60">
                Результаты сразу · Без обязательств · Бесплатно
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ROI Calculator */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <SectionHeading
            title="Сколько теряет ваше производство?"
          />
          <div className="mt-12">
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* SECTION 6 — Cases section */}
      <CasesSection />

      {/* SECTION 7 — Geography */}
      <section className="bg-dark text-white">
        <div className="container section-padding">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <SectionHeading
              title="Работаем по всей России и СНГ"
              light
            />
            <ul className="flex flex-wrap gap-3 pb-1">
              {GEO_CITIES.map((city) => (
                <li
                  key={city}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Team preview */}
      <section className="bg-white">
        <div className="container section-padding">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              title="Эксперты-практики с производственным опытом"
              subtitle="Консультанты с 10+ годами практики на реальных предприятиях"
            />
            <ButtonLink href="/team" variant="secondary">
              Вся команда →
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, index) => (
              <Reveal
                key={member.image}
                as="article"
                delay={(index % 4) * 0.06}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-left"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white to-transparent"
                  />
                </div>
                <div className="p-5">
                  <p className="font-bold text-graphite">{member.name}</p>
                  <p className="mt-1 text-sm text-gray-text">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — Final CTA */}
      <section className="bg-blue-primary">
        <div className="container section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="h2 text-white">
                Готовы начать развитие производства?
              </h2>
              <p className="body-text mt-5 text-white/70">
                Бесплатная диагностика за 5 минут или личная встреча с
                экспертом по вашим задачам.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-start">
              <ButtonLink
                href="/diagnostics"
                className="!bg-orange !text-white hover:!bg-orange/90 !px-8"
              >
                Пройти диагностику производства
              </ButtonLink>
              <ButtonLink
                href="/contacts"
                variant="secondary"
                className="!border-white/30 !text-white hover:!border-white hover:!bg-white/10 !px-8"
              >
                Записаться на встречу →
              </ButtonLink>
              <a
                href="/contacts"
                className="mt-1 text-sm text-white/50 transition-colors hover:text-white/80"
              >
                Скачать презентацию компании
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
