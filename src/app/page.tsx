import { HeroSection } from '@/components/ui/HeroSection'
import { Section, BulletList } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { StatGrid } from '@/components/ui/StatGrid'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { CTASection } from '@/components/ui/CTASection'
import { ContactForm } from '@/components/ui/ContactForm'
import { ButtonLink } from '@/components/ui/Button'
import { MeetingButton } from '@/components/ui/MeetingModal'

const SERVICES = [
  {
    title: 'Консалтинг',
    description:
      'Построение производственных систем, разметка и логистика, HR-консалтинг и рост эффективности предприятия.',
    href: '/consulting',
  },
  {
    title: 'Обучение',
    description:
      'Программы Lean, управление проектами, корпоративные академии, тренинги и бизнес-симуляторы.',
    href: '/training',
  },
  {
    title: 'Цифровизация',
    description:
      'LMS и корпоративные порталы, системы коммуникации и управления, web-разработка и дашборды.',
    href: '/digitalization',
  },
  {
    title: 'Маркетинг',
    description:
      'Упаковка бренда, организация ивентов, сайты и презентации для производственных компаний.',
    href: '/marketing',
  },
]

const STATS = [
  { value: '20+', label: 'реализованных проектов' },
  { value: '6', label: 'стран присутствия' },
  { value: '2021', label: 'год основания' },
  { value: '∞', label: 'команда экспертов' },
]

const COUNTRIES = [
  'Россия',
  'Беларусь',
  'Польша',
  'Франция',
  'Бельгия',
  'Япония',
]

const APPROACH = [
  {
    title: 'Научность',
    description:
      'Опираемся на проверенные методологии Lean, PMI и системный анализ, а не на интуицию.',
  },
  {
    title: 'Адаптация',
    description:
      'Подбираем решения под отрасль, культуру и зрелость конкретного предприятия.',
  },
  {
    title: 'Синергия',
    description:
      'Объединяем консалтинг, обучение и цифровизацию в единую экосистему развития.',
  },
]

const SECTIONS = [
  { title: 'Консалтинг', description: 'Производственные системы и эффективность.', href: '/consulting' },
  { title: 'Обучение', description: 'Программы и корпоративные академии.', href: '/training' },
  { title: 'Цифровизация', description: 'Платформы и цифровые сервисы.', href: '/digitalization' },
  { title: 'Маркетинг', description: 'Бренд, ивенты и презентации.', href: '/marketing' },
]

const TEAM = [
  { name: 'Смбат Джанунц', role: 'Основатель' },
  { name: 'Семён Горшенин', role: 'Lean-эксперт' },
  { name: 'Владислав Терещенко', role: 'Цифровизация' },
  { name: 'Лариса Черных', role: 'HR' },
]

export default function HomePage() {
  return (
    <>
      <HeroSection
        preTitle="Hattatsu Group / Production Ecosystem"
        title="Hattatsu Group — экосистема развития производственных предприятий"
        description="Международная экосистема экспертов, объединяющая консалтинг, обучение, цифровизацию и культуру непрерывных улучшений для роста производственных компаний."
        imageLabel="Hattatsu Group"
        actions={
          <>
            <MeetingButton />
            <ButtonLink href="#solutions" variant="secondary">
              Смотреть решения
            </ButtonLink>
          </>
        }
        stats={<StatGrid stats={STATS} />}
      />

      {/* Блок 2. Комплекс решений */}
      <section id="solutions" className="bg-white">
        <div className="container section-padding">
          <SectionHeading
            preTitle="Комплекс решений"
            title="Четыре направления, объединённые в одну экосистему"
            subtitle="Каждое направление работает самостоятельно и усиливается за счёт связи с остальными."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Блок 3. О Hattatsu Group */}
      <Section tone="gray">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              preTitle="О компании"
              title="Hattatsu Group"
              subtitle="С 2021 года мы развиваем производственные предприятия, выстраивая системы, в которых эффективность и культура улучшений становятся нормой."
            />
            <p className="body-text mt-5 text-gray-text">
              За это время команда реализовала более 20 проектов в шести
              странах, объединив отраслевую экспертизу с современными подходами к
              управлению производством.
            </p>
          </div>
          <StatGrid
            columns={3}
            stats={[
              { value: '2021', label: 'год основания' },
              { value: '20+', label: 'проектов' },
              { value: '6', label: 'стран' },
            ]}
          />
        </div>
      </Section>

      {/* Блок 4. География */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <PlaceholderImage label="Карта присутствия" ratio="aspect-[5/4]" />
          <div>
            <SectionHeading
              preTitle="География"
              title="Работаем там, где развивается производство"
              subtitle="Эксперты Hattatsu Group реализуют проекты в России, Европе и Азии."
            />
            <ul className="mt-8 flex flex-wrap gap-3">
              {COUNTRIES.map((country) => (
                <li
                  key={country}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-graphite"
                >
                  {country}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Блок 5. Цель и Миссия */}
      <Section tone="gray">
        <SectionHeading
          preTitle="Зачем мы работаем"
          title="Цель и миссия"
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-blue-primary">Цель</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-text">
              Создавать производственные предприятия мирового уровня, где
              эффективность, качество и люди развиваются вместе.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-blue-primary">Миссия</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-text">
              Передавать предприятиям проверенные инструменты развития и
              формировать культуру непрерывных улучшений на каждом уровне
              организации.
            </p>
          </div>
        </div>
      </Section>

      {/* Блок 6. Уникальный подход */}
      <Section>
        <SectionHeading
          preTitle="Подход"
          title="Уникальный подход Hattatsu Group"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {APPROACH.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-graphite">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-text">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Блок 7. Переход в разделы */}
      <Section tone="gray">
        <SectionHeading
          preTitle="Разделы"
          title="Выберите направление развития"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SECTIONS.map((section) => (
            <ServiceCard key={section.title} {...section} />
          ))}
        </div>
      </Section>

      {/* Блок 8. Команда экспертов */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            preTitle="Команда"
            title="Команда экспертов"
            subtitle="Практики с опытом в производстве, Lean, цифровизации и управлении персоналом."
          />
          <ButtonLink href="/team" variant="secondary">
            Смотреть команду
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div key={member.name} className="text-left">
              <PlaceholderImage label="Фото" ratio="aspect-square" />
              <p className="mt-4 font-bold text-graphite">{member.name}</p>
              <p className="text-sm text-gray-text">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Блок 9. Финальный CTA + форма */}
      <section className="bg-dark">
        <div className="container section-padding">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="pre-title mb-4 text-orange">Заказать встречу</p>
              <h2 className="h2 text-white">
                Обсудим развитие вашего предприятия
              </h2>
              <p className="body-text mt-5 text-white/70">
                Оставьте заявку — эксперт Hattatsu Group свяжется с вами, чтобы
                обсудить задачи и подобрать формат сотрудничества.
              </p>
              <div className="mt-8">
                <BulletList
                  className="[&_*]:text-white/80"
                  items={[
                    'Разбор текущей ситуации на производстве',
                    'Рекомендации по направлениям развития',
                    'Предложение по формату работы',
                  ]}
                />
              </div>
            </div>
            <div className="rounded-2xl bg-white p-7 shadow-xl">
              <ContactForm formType="Заказать встречу (главная)" submitLabel="Отправить заявку" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
