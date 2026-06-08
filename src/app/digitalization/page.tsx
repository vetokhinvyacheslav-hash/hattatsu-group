import type { Metadata } from 'next'
import { HeroSection } from '@/components/ui/HeroSection'
import { Section, BulletList } from '@/components/ui/Section'
import { Tabs, type TabItem } from '@/components/ui/Tabs'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTASection } from '@/components/ui/CTASection'
import { MeetingButton } from '@/components/ui/MeetingModal'

export const metadata: Metadata = {
  title: 'Цифровизация — Hattatsu Group',
  description:
    'LMS и корпоративные порталы, системы коммуникации и управления, web-разработка, сайты и дашборды.',
}

function TabBlock({
  text,
  items,
}: {
  text: string
  items?: readonly string[]
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <p className="body-text text-gray-text">{text}</p>
      {items ? <BulletList items={items} /> : null}
    </div>
  )
}

const TABS: readonly TabItem[] = [
  {
    id: 'lms',
    label: 'Hattatsu LMS / портал',
    content: (
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: 'LMS', text: 'Платформа корпоративного обучения.' },
          { title: 'Корпоративный портал', text: 'Единое цифровое пространство компании.' },
          { title: 'База знаний', text: 'Стандарты, регламенты и материалы.' },
        ].map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-white p-7 shadow-sm">
            <h3 className="text-lg font-bold text-graphite">{s.title}</h3>
            <p className="mt-3 text-sm text-gray-text">{s.text}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'learning',
    label: 'Управление обучением',
    content: (
      <TabBlock
        text="Управляйте обучением сотрудников в единой системе: от назначения курсов до выдачи сертификатов и аналитики."
        items={['Курсы', 'Тесты', 'Сертификаты', 'Права доступа', 'Аналитика обучения']}
      />
    ),
  },
  {
    id: 'comm',
    label: 'Коммуникация',
    content: (
      <TabBlock
        text="Система внутренней коммуникации объединяет сотрудников вокруг целей и ценностей компании."
        items={['Новости', 'Дни рождения', 'Цели', 'Ценности', 'Контакты', 'Проекты']}
      />
    ),
  },
  {
    id: 'management',
    label: 'Управление',
    content: (
      <TabBlock
        text="Система управления собирает ключевые данные и документы предприятия в едином интерфейсе."
        items={['Дашборды', 'Документы', 'Оргструктура', 'Отчётность', 'Регламенты']}
      />
    ),
  },
  {
    id: 'web',
    label: 'Web-разработка',
    content: (
      <TabBlock text="Разрабатываем веб-сервисы и приложения под задачи производственного бизнеса — от MVP до промышленных решений." />
    ),
  },
  {
    id: 'sites',
    label: 'Сайты',
    content: (
      <TabBlock text="Создаём корпоративные сайты, которые отражают экспертизу компании и работают как инструмент развития." />
    ),
  },
  {
    id: 'dashboards',
    label: 'Дашборды',
    content: (
      <TabBlock text="Проектируем интерактивные дашборды и панели показателей для управления производством на основе данных." />
    ),
  },
]

const MATRIX = [
  'LMS',
  'Корпоративный портал',
  'База знаний',
  'Курсы',
  'Тесты',
  'Сертификаты',
  'Права доступа',
  'Аналитика',
  'Новости',
  'Дни рождения',
  'Цели',
  'Ценности',
  'Контакты',
  'Проекты',
  'Дашборды',
  'Документы',
  'Оргструктура',
  'Отчётность',
  'Регламенты',
  'Web-разработка',
  'Сайты',
]

export default function DigitalizationPage() {
  return (
    <>
      <HeroSection
        withImage={false}
        preTitle="Цифровизация"
        title="Цифровые платформы для производственных компаний"
        description="LMS и корпоративные порталы, системы коммуникации и управления, web-разработка, сайты и дашборды в единой экосистеме."
        actions={<MeetingButton label="Запросить демонстрацию" />}
      />

      <Section>
        <Tabs tabs={TABS} />
      </Section>

      <Section tone="gray">
        <SectionHeading
          preTitle="Возможности"
          title="Матрица возможностей платформы"
          align="center"
        />
        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {MATRIX.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-graphite shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <CTASection
        title="Запросить демонстрацию цифрового решения"
        description="Покажем, как платформа работает на задачах вашего предприятия."
      >
        <MeetingButton
          label="Запросить демонстрацию"
          variant="secondary"
          className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
        />
      </CTASection>
    </>
  )
}
