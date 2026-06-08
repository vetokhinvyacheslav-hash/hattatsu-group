import type { Metadata } from 'next'
import { HeroSection } from '@/components/ui/HeroSection'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { ContactForm } from '@/components/ui/ContactForm'
import { ButtonLink } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Команда — Hattatsu Group',
  description:
    'Эксперты Hattatsu Group: Lean, цифровизация, управление персоналом и развитие производственных систем.',
}

const EXPERTS = [
  { name: 'Смбат Джанунц', role: 'Основатель' },
  { name: 'Семён Горшенин', role: 'Lean-эксперт' },
  { name: 'Владислав Терещенко', role: 'Цифровизация' },
  { name: 'Лариса Черных', role: 'HR' },
]

const PROCESS = ['Задача', 'Экспертиза', 'Команда', 'Результат']

const CHANNELS = [
  { title: 'Telegram', text: 'Новости, кейсы и материалы Hattatsu Group.', href: 'https://t.me/' },
  { title: 'Max', text: 'Дополнительный канал коммуникации.', href: '#' },
]

export default function TeamPage() {
  return (
    <>
      <HeroSection
        withImage={false}
        preTitle="Команда"
        title="Эксперты Hattatsu Group"
        description="Практики с реальным опытом в производстве, Lean, цифровизации и управлении персоналом, собирающие команду под каждую задачу."
        actions={
          <ButtonLink href="#request">Запросить информацию</ButtonLink>
        }
      />

      <Section>
        <SectionHeading preTitle="Эксперты" title="Ключевые специалисты" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTS.map((expert) => (
            <div
              key={expert.name}
              className="rounded-2xl border border-border bg-white p-5 shadow-sm"
            >
              <PlaceholderImage label="Фото" ratio="aspect-square" />
              <p className="mt-4 font-bold text-graphite">{expert.name}</p>
              <p className="text-sm text-gray-text">{expert.role}</p>
              <ButtonLink
                href="#request"
                variant="ghost"
                className="mt-4 !px-0"
              >
                Запросить информацию →
              </ButtonLink>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="gray">
        <SectionHeading
          preTitle="Подход"
          title="Как формируется команда проекта"
          align="center"
        />
        <ol className="mx-auto mt-12 flex max-w-4xl flex-col items-stretch gap-4 md:flex-row md:items-center">
          {PROCESS.map((step, index) => (
            <li
              key={step}
              className="flex flex-1 items-center gap-4 md:flex-col md:text-center"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-primary text-lg font-bold text-white">
                {index + 1}
              </span>
              <span className="font-semibold text-graphite">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading preTitle="Каналы" title="Медиа и каналы" align="center" />
        <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
          {CHANNELS.map((channel) => (
            <a
              key={channel.title}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-border bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-blue-primary">
                {channel.title}
              </h3>
              <p className="mt-3 text-sm text-gray-text">{channel.text}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="gray" className="scroll-mt-24">
        <div id="request" className="scroll-mt-24" />
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            preTitle="По запросу"
            title="Личные данные по запросу"
            subtitle="Подробная информация об экспертах и их опыте предоставляется по запросу. Оставьте контакт — направим релевантные материалы."
          />
          <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
            <ContactForm
              formType="Запрос информации о команде"
              fields={['name', 'company', 'contact', 'message']}
              submitLabel="Запросить информацию"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
