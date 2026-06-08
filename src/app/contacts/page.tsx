import type { Metadata } from 'next'
import { HeroSection } from '@/components/ui/HeroSection'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { ButtonLink } from '@/components/ui/Button'
import { MeetingButton } from '@/components/ui/MeetingModal'

export const metadata: Metadata = {
  title: 'Контакты — Hattatsu Group',
  description:
    'Свяжитесь с Hattatsu Group: обсудите задачу, запросите информацию или подберите услугу.',
}

const SCENARIOS = [
  { title: 'Заказать встречу', text: 'Обсудить развитие производственной системы.' },
  { title: 'Запросить полную информацию', text: 'Получить материалы об экосистеме.' },
  { title: 'Подобрать услугу', text: 'Найти направление под вашу задачу.' },
]

export default function ContactsPage() {
  return (
    <>
      <HeroSection
        withImage={false}
        preTitle="Контакты"
        title="Свяжитесь с Hattatsu Group"
        description="Опишите задачу — эксперт свяжется с вами и предложит формат сотрудничества."
        actions={<MeetingButton />}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            preTitle="Форма"
            title="Напишите нам"
            subtitle="Заполните форму — мы свяжемся с вами в ближайшее время."
          />
          <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
            <ContactForm
              formType="Контактная форма"
              submitLabel="Отправить заявку"
            />
          </div>
        </div>
      </Section>

      <Section tone="gray">
        <SectionHeading
          preTitle="Быстрые сценарии"
          title="С чего начать"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SCENARIOS.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl border border-border bg-white p-7 shadow-sm"
            >
              <h3 className="text-lg font-bold text-graphite">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm text-gray-text">{s.text}</p>
              {s.title === 'Заказать встречу' ? (
                <div className="mt-6">
                  <MeetingButton variant="secondary" className="w-full" />
                </div>
              ) : (
                <ButtonLink
                  href="#"
                  variant="secondary"
                  className="mt-6 w-full"
                >
                  {s.title}
                </ButtonLink>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
