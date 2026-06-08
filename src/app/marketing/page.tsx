import type { Metadata } from 'next'
import { HeroSection } from '@/components/ui/HeroSection'
import { Section, BulletList } from '@/components/ui/Section'
import { Tabs, type TabItem } from '@/components/ui/Tabs'
import { CTASection } from '@/components/ui/CTASection'
import { MeetingButton } from '@/components/ui/MeetingModal'

export const metadata: Metadata = {
  title: 'Маркетинг — Hattatsu Group',
  description:
    'Упаковка бренда, организация ивентов, сайты и презентации для производственных компаний.',
}

const TABS: readonly TabItem[] = [
  {
    id: 'brand',
    label: 'Упаковка бренда',
    content: (
      <div className="grid gap-10 lg:grid-cols-2">
        <p className="body-text text-gray-text">
          Формируем целостный образ компании — от позиционирования до
          фирменного стиля и материалов.
        </p>
        <div>
          <h3 className="mb-4 text-lg font-bold text-graphite">Что входит</h3>
          <BulletList
            items={[
              'Позиционирование и платформа бренда',
              'Логотип и фирменный стиль',
              'Брендбук',
              'Дизайн-система',
              'Презентационные материалы',
              'Корпоративный мерч',
              'Фото- и видеоконтент',
            ]}
          />
        </div>
      </div>
    ),
  },
  {
    id: 'events',
    label: 'Ивенты',
    content: (
      <div className="grid gap-10 lg:grid-cols-2">
        <p className="body-text text-gray-text">
          Организуем корпоративные и отраслевые мероприятия под ключ.
        </p>
        <div>
          <h3 className="mb-4 text-lg font-bold text-graphite">Что входит</h3>
          <BulletList
            items={[
              'Концепция мероприятия',
              'Сценарий и программа',
              'Площадка и логистика',
              'Оформление и брендинг',
              'Контент и материалы',
              'Сопровождение на площадке',
            ]}
          />
        </div>
      </div>
    ),
  },
  {
    id: 'sites',
    label: 'Сайты и презентации',
    content: (
      <div className="grid gap-10 lg:grid-cols-2">
        <p className="body-text text-gray-text">
          Разрабатываем сайты и презентации, которые понятно доносят ценность
          компании и её продуктов.
        </p>
        <div>
          <h3 className="mb-4 text-lg font-bold text-graphite">Примеры работ</h3>
          <div className="grid grid-cols-2 gap-3">
            {['Корпоративные сайты', 'Продуктовые лендинги', 'Инвест-презентации', 'Коммерческие предложения'].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border bg-light-gray p-4 text-sm font-medium text-graphite"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
  },
]

export default function MarketingPage() {
  return (
    <>
      <HeroSection
        withImage={false}
        preTitle="Маркетинг"
        title="Маркетинг для производственных компаний"
        description="Упаковка бренда, ивенты, сайты и презентации, которые усиливают позиции компании на рынке."
        actions={<MeetingButton label="Обсудить задачу" />}
      />

      <Section>
        <Tabs tabs={TABS} />
      </Section>

      <CTASection
        title="Обсудить маркетинговую задачу"
        description="Расскажите о задаче — предложим решение и формат работы."
      >
        <MeetingButton
          label="Обсудить задачу"
          variant="secondary"
          className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
        />
      </CTASection>
    </>
  )
}
