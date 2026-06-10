import type { Metadata } from 'next'
import Image from 'next/image'
import { HeroSection } from '@/components/ui/HeroSection'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Команда — Hattatsu Group',
  description:
    'Эксперты Hattatsu Group: Lean, цифровизация, управление персоналом и развитие производственных систем.',
}

interface Expert {
  name: string
  role: string
  bio: string
  image: string
}

const EXPERTS: readonly Expert[] = [
  {
    name: 'Джанунц Смбат',
    role: 'Основатель',
    bio: '18+ лет в Lean. Ex-AGC Japan, Korea, Russia. Vlerick Leuven Gent Management School.',
    image: '/team/%D0%A1%D0%BC%D0%B1%D0%B0%D1%82.png',
  },
  {
    name: 'Горшенин Семён',
    role: 'Эксперт Kaizen & Lean Production',
    bio: '140+ Kaizen-проектов. AGC Flat Glass, Barilla RUS. 6 Sigma Green Belt, Festo Academy.',
    image: '/team/%D0%A1%D0%B5%D0%BC%D1%91%D0%BD.png',
  },
  {
    name: 'Ездаков Максим',
    role: 'Операционная эффективность',
    bio: 'Рост OEE с 70 до 87%. AGC — от мастера до зам. директора по бизнес-системам.',
    image: '/team/%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC.png',
  },
  {
    name: 'Терещенко Владислав',
    role: 'Цифровое обучение & симуляторы',
    bio: '10+ зарегистрированных программ ЭВМ. СПбПУ, Nairi International University.',
    image: '/team/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2.png',
  },
  {
    name: 'Киреев Артур',
    role: 'Маркетинг & развитие бизнеса',
    bio: 'Доцент СПбПУ. 25+ лет в маркетинге и образовательных программах.',
    image: '/team/%D0%90%D1%80%D1%82%D1%83%D1%80.png',
  },
  {
    name: 'Черных Лариса',
    role: 'HR-эксперт',
    bio: 'CIPD UK. Магистр международного HR, Университет Кингстона. Кандидат психологических наук.',
    image: '/team/%D0%9B%D0%B0%D1%80%D0%B8%D1%81%D0%B0.png',
  },
  {
    name: 'Ветохин Вячеслав',
    role: 'Визуализация & бизнес-коммуникации',
    bio: 'Перевод сложных научных концепций в язык бизнеса и визуальных решений. Автор патентов.',
    image: '/team/%D0%92%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2.png',
  },
  {
    name: 'Арустамян Арсен',
    role: 'Fullstack веб-разработка',
    bio: 'Разработка LMS, корпоративных порталов и интерактивных дашбордов для промышленности.',
    image: '/team/%D0%90%D1%80%D1%81%D0%B5%D0%BD.png',
  },
  {
    name: 'Шептун Татьяна',
    role: 'Маркетинг и Event',
    bio: '',
    image: '/team/%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0.png',
  },
]

const PROCESS = [
  { label: 'Задача', desc: 'Формулируем цели и KPI проекта' },
  { label: 'Экспертиза', desc: 'Подбираем экспертов под специфику' },
  { label: 'Команда', desc: 'Собираем проектную группу' },
  { label: 'Результат', desc: 'Сдаём измеримый результат' },
]

const CHANNELS = [
  {
    title: 'Telegram',
    text: 'Кейсы, материалы и новости Hattatsu Group.',
    href: 'https://t.me/pd_academy',
  },
  {
    title: 'Email',
    text: 'Для деловых запросов и консультаций.',
    href: 'mailto:info@hattatsu.pro',
  },
]

export default function TeamPage() {
  return (
    <>
      <HeroSection
        withImage={false}
        title="Эксперты Hattatsu Group"
        description="Практики с реальным производственным опытом. Каждый эксперт — специалист в своей области с историей реализованных проектов."
        actions={
          <ButtonLink href="#request">Запросить информацию</ButtonLink>
        }
      />

      <Section>
        <SectionHeading
          preTitle="Команда"
          title="8 экспертов, 120+ лет совокупного опыта"
          subtitle="Консультанты, тренеры и разработчики с практическим опытом на крупнейших производственных предприятиях России и СНГ."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTS.map((expert, index) => (
            <Reveal
              key={expert.name}
              as="article"
              delay={(index % 4) * 0.07}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={expert.image}
                  alt={`${expert.name}, ${expert.role}`}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover object-top"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white to-transparent"
                />
              </div>
              <div className="p-5">
                <p className="font-bold text-graphite">{expert.name}</p>
                <p className="mt-0.5 text-sm font-medium text-blue-primary">
                  {expert.role}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-gray-text">
                  {expert.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="gray">
        <SectionHeading
          title="Как формируется команда проекта"
          align="center"
        />
        <ol className="mx-auto mt-12 flex max-w-4xl flex-col items-stretch gap-4 md:flex-row md:items-start">
          {PROCESS.map((step, index) => (
            <li
              key={step.label}
              className="flex flex-1 flex-col items-center text-center"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-primary text-lg font-bold text-white">
                {index + 1}
              </span>
              <span className="mt-3 font-semibold text-graphite">{step.label}</span>
              <span className="mt-1 text-sm text-gray-text">{step.desc}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading title="Медиа и каналы" align="center" />
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

      <Section tone="gray">
        <div id="request" className="scroll-mt-24" />
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            title="Резюме и детальные профили"
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
