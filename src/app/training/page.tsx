import type { Metadata } from 'next'
import { HeroSection } from '@/components/ui/HeroSection'
import { Section, BulletList, NumberedList } from '@/components/ui/Section'
import { Tabs, type TabItem } from '@/components/ui/Tabs'
import { Accordion, type AccordionItem } from '@/components/ui/Accordion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTASection } from '@/components/ui/CTASection'
import { MeetingButton } from '@/components/ui/MeetingModal'

export const metadata: Metadata = {
  title: 'Обучение — Hattatsu Group',
  description:
    'Программы Lean, управление проектами, корпоративные академии, тренинги и бизнес-симуляторы для производственных компаний.',
}

const PROGRAMS: readonly AccordionItem[] = [
  {
    id: 'lean',
    title: 'Основы Lean Production',
    content: (
      <BulletList
        items={[
          'Lean — философия и инструменты',
          'Kaizen — непрерывные улучшения',
          'PDCA и SDCA — циклы управления',
          'Виды потерь и их устранение',
          'Модель SEQCDDM',
          'Проектная работа',
          'Key Action Plan',
        ]}
      />
    ),
  },
  {
    id: 'pm',
    title: 'Управление проектами',
    content: (
      <BulletList
        items={[
          'Основы PMI PMBoK',
          'Формирование и развитие команды',
          'Целеполагание',
          'Коммуникации в проекте',
          'Защита проектов',
        ]}
      />
    ),
  },
  {
    id: 'communication',
    title: 'Коммуникация и мотивация в Lean-проектах',
    content: (
      <BulletList
        items={[
          'Эффективная коммуникация в командах изменений',
          'Мотивация участников Lean-проектов',
          'Работа с сопротивлением изменениям',
        ]}
      />
    ),
  },
  {
    id: 'hr',
    title: 'HR-тренинги',
    content: (
      <Tabs
        tabs={[
          {
            id: 'basics',
            label: 'Основы руководства',
            content: (
              <BulletList
                items={[
                  'Роль и задачи руководителя',
                  'Постановка задач и контроль',
                  'Развитие сотрудников',
                ]}
              />
            ),
          },
          {
            id: 'styles',
            label: 'Стили',
            content: (
              <BulletList
                items={[
                  'Ситуационное руководство',
                  'Адаптация стиля под зрелость команды',
                ]}
              />
            ),
          },
          {
            id: 'comm',
            label: 'Коммуникация',
            content: (
              <BulletList
                items={[
                  'Обратная связь',
                  'Сложные разговоры',
                  'Командная коммуникация',
                ]}
              />
            ),
          },
        ]}
      />
    ),
  },
  {
    id: 'profitmania',
    title: 'ПрибыльМания (бизнес-игра)',
    content: (
      <p>
        Командная бизнес-игра, в которой участники проживают полный цикл
        управления производством и прибылью, отрабатывая принятие решений в
        безопасной среде.
      </p>
    ),
  },
]

const TABS: readonly TabItem[] = [
  {
    id: 'programs',
    label: 'Программы обучения',
    content: (
      <div>
        <p className="body-text mb-8 max-w-2xl text-gray-text">
          Пять базовых программ обучения. Раскройте программу, чтобы увидеть
          темы.
        </p>
        <Accordion items={PROGRAMS} />
      </div>
    ),
  },
  {
    id: 'academy',
    label: 'Корпоративная академия',
    content: (
      <div className="grid gap-10 lg:grid-cols-2">
        <p className="body-text text-gray-text">
          Выстраиваем корпоративную академию — устойчивую систему обучения
          внутри компании, которая развивает сотрудников на всех уровнях.
        </p>
        <div>
          <h3 className="mb-4 text-lg font-bold text-graphite">Что входит</h3>
          <BulletList
            items={[
              'Каталог программ и траектории обучения',
              'Внутренние тренеры и наставники',
              'Учебные материалы и стандарты',
              'Система оценки знаний',
              'Цифровая платформа обучения',
              'Аналитика и развитие академии',
            ]}
          />
        </div>
      </div>
    ),
  },
  {
    id: 'custom',
    label: 'Обучение под бизнес-задачу',
    content: (
      <div className="grid gap-10 lg:grid-cols-2">
        <p className="body-text text-gray-text">
          Проектируем обучение под конкретную бизнес-задачу — от диагностики до
          оценки результата.
        </p>
        <div>
          <h3 className="mb-4 text-lg font-bold text-graphite">Этапы</h3>
          <NumberedList
            items={[
              'Диагностика задачи и аудитории',
              'Адаптация программы',
              'Подготовка материалов',
              'Проведение обучения',
              'Практика и закрепление',
              'Защита и оценка результата',
            ]}
          />
        </div>
      </div>
    ),
  },
  {
    id: 'gamification',
    label: 'Геймификация и симуляторы',
    content: (
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Lean-тренажёр',
            text: 'Интерактивная отработка инструментов бережливого производства.',
          },
          {
            title: 'ПрибыльМания',
            text: 'Командная бизнес-игра по управлению производством и прибылью.',
          },
          {
            title: 'Корпоративный симулятор',
            text: 'Сценарии под процессы конкретной компании.',
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-border bg-white p-7 shadow-sm"
          >
            <h3 className="text-lg font-bold text-graphite">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-text">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    ),
  },
]

export default function TrainingPage() {
  return (
    <>
      <HeroSection
        withImage={false}
        preTitle="Обучение"
        title="Обучение для производственных команд"
        description="Программы Lean и управления проектами, корпоративные академии, тренинги и бизнес-симуляторы под задачи предприятия."
        actions={<MeetingButton label="Подобрать программу" />}
      />

      <Section>
        <Tabs tabs={TABS} />
      </Section>

      <Section tone="gray">
        <SectionHeading preTitle="Аудитория" title="Для кого" align="center" />
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
          {[
            'Руководители',
            'Мастера',
            'ИТР',
            'Проектные команды',
            'HR',
            'Кадровый резерв',
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border bg-white p-5 text-center text-sm font-semibold text-graphite shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          preTitle="Процесс"
          title="Как проходит обучение"
          align="center"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <NumberedList
            items={[
              'Диагностика задачи и аудитории',
              'Адаптация программы под компанию',
              'Проведение обучения',
              'Практика на рабочих задачах',
              'Защита проектов и оценка результата',
            ]}
          />
        </div>
      </Section>

      <CTASection
        title="Подобрать программу обучения"
        description="Опишите задачу — предложим формат и программу под вашу команду."
      >
        <MeetingButton
          label="Подобрать программу"
          variant="secondary"
          className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
        />
      </CTASection>
    </>
  )
}
