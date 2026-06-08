import type { Metadata } from 'next'
import Image from 'next/image'
import { HeroSection } from '@/components/ui/HeroSection'
import { Section, BulletList, NumberedList } from '@/components/ui/Section'
import { Tabs, type TabItem } from '@/components/ui/Tabs'
import { ContactForm } from '@/components/ui/ContactForm'
import { CTASection } from '@/components/ui/CTASection'
import { MeetingButton } from '@/components/ui/MeetingModal'

export const metadata: Metadata = {
  title: 'Консалтинг — Hattatsu Group',
  description:
    'Построение производственных систем, разметка и логистика, HR-консалтинг и рост эффективности предприятий.',
}

function TabBlock({
  text,
  children,
}: {
  text: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
      <p className="body-text text-gray-text">{text}</p>
      <div className="space-y-8">{children}</div>
    </div>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-lg font-bold text-graphite">{children}</h3>
  )
}

const TABS: readonly TabItem[] = [
  {
    id: 'systems',
    label: 'Производственные системы',
    content: (
      <TabBlock text="Выстраиваем целостную производственную систему предприятия — от стратегии до операционного уровня, опираясь на модель Vision · Lean · Value · Versatility.">
        <div>
          <SubHeading>Проблемы, которые решаем</SubHeading>
          <BulletList
            items={[
              'Отсутствие единой производственной системы и стандартов',
              'Потери и низкая прозрачность процессов',
              'Разрыв между стратегией и работой цехов',
            ]}
          />
        </div>
        <div>
          <SubHeading>Модель</SubHeading>
          <div className="grid grid-cols-2 gap-3">
            {['Vision', 'Lean', 'Value', 'Versatility'].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border bg-light-gray p-4 text-sm font-semibold text-blue-primary"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <SubHeading>Результаты</SubHeading>
          <BulletList
            items={[
              'Прозрачная и управляемая производственная система',
              'Рост производительности и снижение потерь',
              'Команда, способная развивать систему самостоятельно',
            ]}
          />
        </div>
      </TabBlock>
    ),
  },
  {
    id: 'marking',
    label: 'Разметка / 5C + логистика',
    content: (
      <TabBlock text="Проектируем производственную разметку, внедряем систему 5C и выстраиваем внутреннюю логистику для безопасного и эффективного потока.">
        <div>
          <SubHeading>Проблемы</SubHeading>
          <BulletList
            items={[
              'Хаотичное размещение зон и материалов',
              'Лишние перемещения и простои',
              'Нарушения безопасности и порядка',
            ]}
          />
        </div>
        <div>
          <SubHeading>Этапы</SubHeading>
          <NumberedList
            items={[
              'Диагностика потоков и текущего состояния',
              'Проектирование зон и разметки',
              'Внедрение системы 5C',
              'Настройка внутренней логистики',
              'Стандартизация и поддержка',
            ]}
          />
        </div>
        <div>
          <SubHeading>Результат</SubHeading>
          <BulletList
            items={[
              'Организованное и безопасное производственное пространство с устойчивым потоком',
            ]}
          />
        </div>
      </TabBlock>
    ),
  },
  {
    id: 'hr',
    label: 'HR-консалтинг',
    content: (
      <TabBlock text="Помогаем выстроить HR-систему, поддерживающую производственную эффективность и культуру непрерывных улучшений.">
        <div>
          <SubHeading>Проблемы</SubHeading>
          <BulletList
            items={[
              'Высокая текучесть и нехватка кадров',
              'Отсутствие системы развития и мотивации',
              'Слабая связь HR с целями производства',
            ]}
          />
        </div>
        <div>
          <SubHeading>Этапы</SubHeading>
          <NumberedList
            items={[
              'Аудит HR-процессов',
              'Проектирование HR-системы',
              'Внедрение и сопровождение',
            ]}
          />
        </div>
        <div>
          <SubHeading>7 элементов HR-системы</SubHeading>
          <BulletList
            items={[
              'Подбор и адаптация',
              'Обучение и развитие',
              'Оценка эффективности',
              'Мотивация и вознаграждение',
              'Кадровый резерв',
              'Корпоративная культура',
              'HR-аналитика',
            ]}
          />
        </div>
      </TabBlock>
    ),
  },
  {
    id: 'efficiency',
    label: 'Повышение эффективности',
    content: (
      <TabBlock text="Точечно повышаем эффективность производства — от отдельных участков до сквозных процессов.">
        <div>
          <SubHeading>Что это даёт</SubHeading>
          <BulletList
            items={[
              'Рост производительности труда',
              'Снижение себестоимости',
              'Сокращение потерь и простоев',
              'Повышение качества продукции',
              'Ускорение производственного цикла',
              'Рост вовлечённости персонала',
            ]}
          />
        </div>
      </TabBlock>
    ),
  },
  {
    id: 'glass',
    label: 'Обработка стекла',
    content: (
      <TabBlock text="Обладаем отраслевой экспертизой в обработке стекла: понимаем специфику оборудования, технологических потоков и качества, что позволяет быстро находить точки роста эффективности на таких производствах.">
        <div>
          <SubHeading>Отраслевая экспертиза</SubHeading>
          <BulletList
            items={[
              'Оптимизация технологических потоков обработки стекла',
              'Снижение брака и потерь материала',
              'Повышение эффективности оборудования и персонала',
            ]}
          />
        </div>
      </TabBlock>
    ),
  },
  {
    id: 'custom',
    label: 'Своя конфигурация',
    content: (
      <div className="grid gap-10 lg:grid-cols-2">
        <p className="body-text text-gray-text">
          Если ваша задача не укладывается в типовые направления — соберём
          конфигурацию проекта под конкретную ситуацию. Опишите задачу, и мы
          предложим оптимальный состав работ и команды.
        </p>
        <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
          <ContactForm
            formType="Консалтинг — своя конфигурация"
            fields={['company', 'industry', 'direction', 'contact', 'message']}
            submitLabel="Отправить запрос"
          />
        </div>
      </div>
    ),
  },
]

export default function ConsultingPage() {
  return (
    <>
      <HeroSection
        withImage={false}
        preTitle="Консалтинг"
        title="Консалтинг для производственных предприятий"
        description="Выстраиваем производственные системы, повышаем эффективность и формируем культуру улучшений — под задачи конкретного предприятия."
        actions={<MeetingButton label="Обсудить проект" />}
      />

      <Section>
        <div className="relative mb-12 h-64 overflow-hidden rounded-2xl md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
            alt="Производственный консалтинг Hattatsu Group"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <Tabs tabs={TABS} />
      </Section>

      <CTASection
        title="Обсудить консалтинговый проект"
        description="Расскажите о задаче — подберём направление и сформируем команду."
      >
        <MeetingButton
          label="Обсудить проект"
          variant="secondary"
          className="!border-white !text-white hover:!bg-white hover:!text-blue-primary"
        />
      </CTASection>
    </>
  )
}
