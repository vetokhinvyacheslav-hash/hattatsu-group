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
  title: 'Hattatsu Group — Lean-трансформация производственных предприятий',
  description:
    'Hattatsu Group — международная группа экспертов. Lean-консалтинг, корпоративное обучение, цифровизация и геймификация производственных процессов.',
}

interface ServiceItem {
  number: string
  title: string
  description: string
  href: string
  image: string
}

const SERVICES: readonly ServiceItem[] = [
  {
    number: '01',
    title: 'Производственный консалтинг',
    description:
      'Построение производственных систем на базе Lean Manufacturing, 5S и Kaizen. Снижение потерь на 20–35% в течение первого года работы.',
    href: '/consulting',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=640&q=85',
  },
  {
    number: '02',
    title: 'HR-консалтинг',
    description:
      'Системное построение HR-функции: рекрутинг, оценка, развитие персонала и кадровый резерв. Семь ключевых элементов эффективной HR-системы.',
    href: '/hr',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=85',
  },
  {
    number: '03',
    title: 'Корпоративное обучение',
    description:
      'Программы развития для производственных команд: Lean Production, управление проектами, операционные коммуникации.',
    href: '/training',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=640&q=85',
  },
  {
    number: '04',
    title: 'Геймификация процессов',
    description:
      'Lean-симулятор и бизнес-игра ПрибыльМания. Вовлечение сотрудников и передача знаний без отрыва от производственного цикла.',
    href: '/gamification',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=640&q=85',
  },
  {
    number: '05',
    title: 'Цифровизация',
    description:
      'Hattatsu LMS и веб-платформы для корпоративного обучения. Цифровая инфраструктура под ваши операционные задачи.',
    href: '/digitalization',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=85',
  },
  {
    number: '06',
    title: 'Маркетинг и бренд',
    description:
      'Упаковка бренда и организация профессиональных событий для промышленных компаний. От стратегии до реализации.',
    href: '/marketing',
    image:
      'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=640&q=85',
  },
]

interface HeroStat {
  value: string
  label: string
}

const HERO_STATS: readonly HeroStat[] = [
  { value: '20+', label: 'лет в отрасли' },
  { value: '6', label: 'стран работы' },
  { value: '140+', label: 'Kaizen-проектов' },
]

const DIAGNOSTIC_BENEFITS: readonly string[] = [
  'Radar-карта по 5 ключевым направлениям производства',
  'Приоритеты и конкретные точки роста для вашего предприятия',
  'Персональные рекомендации от сертифицированного эксперта',
]

const GEO_CITIES: readonly string[] = [
  'Москва',
  'Санкт-Петербург',
  'Екатеринбург',
  'Казань',
  'Новосибирск',
  'Страны СНГ',
]

interface TeamMember {
  name: string
  role: string
  image: string
}

const TEAM: readonly TeamMember[] = [
  {
    name: 'Джанунц Смбат',
    role: 'Основатель · Lean Production 18 лет',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Горшенин Семён',
    role: 'Kaizen & Lean Production',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ездаков Максим',
    role: 'Операционная эффективность',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Терещенко Владислав',
    role: 'Цифровое обучение · Симуляторы',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Киреев Артур',
    role: 'Маркетинг · Развитие бизнеса',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Черных Лариса',
    role: 'HR-эксперт · CIPD UK',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ветохин Вячеслав',
    role: 'Визуализация · Коммуникации',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Арустамян Арсен',
    role: 'Fullstack-разработка',
    image:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 70% at 80% 50%, #EEF0FF 0%, transparent 65%)',
          }}
        />
        <div className="container relative">
          <div className="grid items-center gap-12 py-20 md:min-h-[calc(100dvh-5.5rem)] md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

            {/* Left column */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-primary" aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-primary">
                  Международная консалтинговая группа
                </span>
              </div>

              <h1 className="h1 text-ink">
                Операционное превосходство для вашего производства
              </h1>
              <p className="body-text mt-6 max-w-[500px] text-ink-muted">
                Выстраиваем производственные системы мирового уровня через
                Lean-трансформацию, развитие персонала и цифровые решения.
              </p>

              <div className="mt-12 grid grid-cols-3 divide-x divide-border">
                {HERO_STATS.map((stat) => (
                  <AnimatedCounter
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    className="pr-5 [&:not(:first-child)]:pl-5 [&>p:first-child]:!text-[2.25rem] [&>p:first-child]:!font-bold [&>p:first-child]:!tracking-tight [&>p:first-child]:!text-ink"
                  />
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <ButtonLink href="/diagnostics">
                  Диагностика производства
                </ButtonLink>
                <ButtonLink href="/consulting" variant="secondary">
                  Наши решения
                </ButtonLink>
              </div>
            </div>

            {/* Right column */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85"
                  alt="Эксперты Hattatsu Group на производстве"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-blue-primary/40 via-transparent to-transparent"
                />
              </div>

              {/* Floating diagnostic card */}
              <div className="absolute -bottom-4 -left-6 w-64 rounded-2xl bg-white p-5 shadow-2xl shadow-blue-primary/10 ring-1 ring-border">
                <p className="text-sm font-semibold text-ink">
                  Индекс зрелости производства
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  Бесплатная оценка за 5 минут
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-deep">
                    <div
                      className="h-full w-[62%] rounded-full bg-blue-primary"
                      style={{ transition: 'width 1s var(--ease-out)' }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-blue-primary">
                    62 / 100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: SERVICES ── */}
      <section className="bg-surface">
        <div className="container section-padding">
          <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              title="Полная экосистема для роста производства"
              subtitle="Шесть направлений экспертизы — единый партнёр для вашего предприятия."
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                      className={`flex h-full rounded-2xl bg-white ring-1 ring-border transition-all duration-200 hover:shadow-lg hover:shadow-blue-primary/5 hover:ring-blue-tint ${
                        isFeatured ? 'flex-col md:flex-row' : 'flex-col'
                      }`}
                    >
                      {/* Image */}
                      <span
                        className={`relative overflow-hidden ${
                          isFeatured
                            ? 'h-56 shrink-0 rounded-t-2xl md:h-auto md:w-[44%] md:rounded-l-2xl md:rounded-tr-none'
                            : 'h-48 rounded-t-2xl'
                        }`}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes={
                            isFeatured
                              ? '(min-width: 1024px) 38vw, (min-width: 640px) 90vw, 100vw'
                              : '(min-width: 1024px) 26vw, (min-width: 640px) 45vw, 100vw'
                          }
                          className="object-cover"
                        />
                      </span>

                      {/* Content */}
                      <span
                        className={`flex flex-1 flex-col justify-between ${isFeatured ? 'p-8 md:p-10' : 'p-7'}`}
                      >
                        <span>
                          <span className="text-[10px] font-semibold tracking-[0.16em] text-ink-muted">
                            {service.number}
                          </span>
                          <span
                            className={`mt-2 block font-semibold text-ink ${isFeatured ? 'text-2xl' : 'text-lg'}`}
                          >
                            {service.title}
                          </span>
                          <span className="mt-3 block text-[14px] leading-relaxed text-ink-muted">
                            {service.description}
                          </span>
                        </span>
                        <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-primary">
                          Подробнее{' '}
                          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                            →
                          </span>
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

      {/* ── SECTION 3: CLIENT LOGOS ── */}
      <ClientLogos />

      {/* ── SECTION 4: DIAGNOSTIC CTA ── */}
      <section className="relative overflow-hidden bg-blue-primary">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]"
        />
        <div className="container section-padding relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="label mb-5 text-white/50">Диагностика</p>
              <h2 className="h2 text-white">
                Узнайте реальный уровень зрелости вашего производства
              </h2>
              <p className="body-text mt-5 text-white/70">
                7 вопросов · 5 минут · Персональный индекс и рекомендации эксперта
              </p>
            </div>
            <div>
              <ul className="space-y-5">
                {DIAGNOSTIC_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex gap-4">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/30 text-[10px] font-bold text-white"
                    >
                      ✓
                    </span>
                    <span className="text-[15px] leading-relaxed text-white/80">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink
                  href="/diagnostics"
                  className="!bg-orange !text-white hover:!bg-orange-hover"
                >
                  Начать диагностику — бесплатно
                </ButtonLink>
              </div>
              <p className="mt-4 text-xs tracking-wide text-white/40">
                Результаты мгновенно · Без обязательств
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ROI CALCULATOR ── */}
      <section className="bg-white section-padding">
        <div className="container">
          <SectionHeading
            title="Сколько стоят потери вашего производства?"
            subtitle="Рассчитайте потенциальный эффект от внедрения Lean за 30 секунд."
          />
          <div className="mt-12">
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CASES ── */}
      <CasesSection />

      {/* ── SECTION 7: GEOGRAPHY ── */}
      <section className="bg-ink text-white">
        <div className="container section-padding">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <h2 className="h2 text-white">
                Работаем по всей России и странам СНГ
              </h2>
              <p className="body-text mt-4 max-w-lg text-white/55">
                Очные проекты, онлайн-форматы и гибридные программы — для
                предприятий от 50 до 5 000 сотрудников.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 lg:max-w-[280px]">
              {GEO_CITIES.map((city) => (
                <li
                  key={city}
                  className="rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-white/70"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: TEAM ── */}
      <section className="bg-white">
        <div className="container section-padding">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              title="Эксперты-практики с производственным опытом"
              subtitle="Консультанты с 10+ годами практики на реальных предприятиях России и мира."
            />
            <ButtonLink href="/team" variant="secondary" className="shrink-0">
              Вся команда →
            </ButtonLink>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, index) => (
              <Reveal
                key={member.image}
                as="article"
                delay={(index % 4) * 0.06}
              >
                <div className="group overflow-hidden rounded-xl bg-surface ring-1 ring-border transition-all duration-200 hover:ring-blue-tint">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-ink">{member.name}</p>
                    <p className="mt-1 text-[13px] leading-snug text-ink-muted">
                      {member.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FINAL CTA ── */}
      <section className="bg-blue-primary">
        <div className="container section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="label mb-5 text-white/40">Начало работы</p>
              <h2 className="h2 text-white">
                Готовы вывести производство на новый уровень?
              </h2>
              <p className="body-text mt-5 text-white/65">
                Пройдите бесплатную диагностику или запишитесь на встречу с
                экспертом — обсудим задачи и предложим оптимальный маршрут.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <ButtonLink
                href="/diagnostics"
                className="!bg-orange !text-white hover:!bg-orange-hover"
              >
                Пройти диагностику производства
              </ButtonLink>
              <ButtonLink
                href="/contacts"
                variant="secondary"
                className="!border-white/25 !text-white hover:!border-white/50 hover:!bg-white/10"
              >
                Записаться на встречу →
              </ButtonLink>
              <a
                href="/documents"
                className="text-sm text-white/40 transition-colors hover:text-white/70"
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
