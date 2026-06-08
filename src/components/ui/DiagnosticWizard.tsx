'use client'

import { useId, useMemo, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button, ButtonLink } from './Button'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

type Dimension =
  | 'Производство'
  | 'HR'
  | 'Обучение'
  | 'Цифровизация'
  | 'Управление'

interface Option {
  readonly label: string
  readonly score: number
}

interface Question {
  readonly id: string
  readonly dimension: Dimension
  readonly question: string
  readonly options: readonly Option[]
}

const QUESTIONS: readonly Question[] = [
  {
    id: 'q1',
    dimension: 'Производство',
    question: 'Как вы оцениваете текущий уровень производственных потерь?',
    options: [
      { label: 'Критический — потери очевидны, но причины неизвестны', score: 1 },
      { label: 'Высокий — знаем о потерях, но нет системы устранения', score: 2 },
      { label: 'Средний — работаем с потерями точечно', score: 3 },
      { label: 'Низкий — есть система непрерывных улучшений', score: 4 },
    ],
  },
  {
    id: 'q2',
    dimension: 'Производство',
    question:
      'Есть ли у вас задокументированные стандарты производственных процессов?',
    options: [
      { label: 'Нет, всё держится на опыте сотрудников', score: 1 },
      { label: 'Частично, для отдельных операций', score: 2 },
      { label: 'Есть, но не всегда соблюдаются', score: 3 },
      { label: 'Да, стандарты есть и регулярно обновляются', score: 4 },
    ],
  },
  {
    id: 'q3',
    dimension: 'HR',
    question: 'Как устроена система управления персоналом?',
    options: [
      { label: 'HR работает только с кадровым документооборотом', score: 1 },
      { label: 'Есть базовый подбор и адаптация', score: 2 },
      { label: 'Выстроены подбор, адаптация и оценка', score: 3 },
      { label: 'Полноценная HR-система с резервом и развитием', score: 4 },
    ],
  },
  {
    id: 'q4',
    dimension: 'Обучение',
    question: 'Как организовано обучение персонала?',
    options: [
      { label: 'Стихийно, по необходимости', score: 1 },
      { label: 'Есть вводное обучение для новых сотрудников', score: 2 },
      { label: 'Регулярные тренинги для отдельных категорий', score: 3 },
      { label: 'Корпоративная система обучения с трекингом', score: 4 },
    ],
  },
  {
    id: 'q5',
    dimension: 'Цифровизация',
    question: 'Как вы управляете данными и отчётностью?',
    options: [
      { label: 'Excel и ручная сборка данных', score: 1 },
      { label: 'Частичная автоматизация отдельных процессов', score: 2 },
      { label: 'ERP/MES есть, но данные разрознены', score: 3 },
      { label: 'Единая цифровая среда с дашбордами', score: 4 },
    ],
  },
  {
    id: 'q6',
    dimension: 'Управление',
    question: 'Как связаны стратегия компании и ежедневная работа цехов?',
    options: [
      { label: 'Стратегия существует отдельно от операций', score: 1 },
      { label: 'KPI есть, но связь со стратегией слабая', score: 2 },
      { label: 'Есть каскадирование целей', score: 3 },
      { label: 'Hoshin Kanri или аналогичная система', score: 4 },
    ],
  },
  {
    id: 'q7',
    dimension: 'Управление',
    question: 'Как в компании происходят улучшения процессов?',
    options: [
      { label: 'Изменения инициируются сверху в кризис', score: 1 },
      { label: 'Точечные улучшения без системы', score: 2 },
      { label: 'Есть проекты улучшений, но нет культуры', score: 3 },
      { label: 'Kaizen-культура — улучшения на всех уровнях', score: 4 },
    ],
  },
]

const DIMENSION_ORDER: readonly Dimension[] = [
  'Производство',
  'HR',
  'Обучение',
  'Цифровизация',
  'Управление',
]

const DIMENSION_SERVICE: Record<
  Dimension,
  { readonly href: string; readonly label: string }
> = {
  Производство: { href: '/consulting', label: 'Консалтинг и lean-трансформация' },
  HR: { href: '/hr', label: 'HR-консалтинг и построение системы' },
  Обучение: { href: '/training', label: 'Корпоративное обучение' },
  Цифровизация: { href: '/digitalization', label: 'Цифровизация производства' },
  Управление: { href: '/consulting', label: 'Стратегический консалтинг' },
}

const COMPANY_SIZES = ['до 50', '50-200', '200-1000', '1000+'] as const

const TOTAL_QUESTIONS = QUESTIONS.length
const FORM_STEP = TOTAL_QUESTIONS + 1 // 8
const RESULTS_STEP = TOTAL_QUESTIONS + 2 // 9
const AUTO_ADVANCE_MS = 400

const BENEFITS: readonly string[] = [
  'Объективная оценка по 5 ключевым направлениям',
  'Персональный индекс зрелости 0–100',
  'Приоритетные направления развития под вашу задачу',
]

// ---------------------------------------------------------------------------
// Scoring
// ---------------------------------------------------------------------------

interface UserData {
  name: string
  email: string
  phone: string
  company: string
  size: string
}

interface ScoreResult {
  total: number
  dimensions: { dimension: Dimension; score: number }[]
}

interface Interpretation {
  label: string
  textClass: string
  barClass: string
}

function computeScores(answers: Record<string, number>): ScoreResult {
  const dimensions = DIMENSION_ORDER.map((dimension) => {
    const questions = QUESTIONS.filter((q) => q.dimension === dimension)
    const scores = questions.map((q) => answers[q.id] ?? 0)
    const avg = scores.reduce((sum, s) => sum + s, 0) / questions.length
    return { dimension, score: Math.round(avg * 25) }
  })

  const total = Math.round(
    dimensions.reduce((sum, d) => sum + d.score, 0) / dimensions.length
  )

  return { total, dimensions }
}

function interpret(score: number): Interpretation {
  if (score <= 40) {
    return {
      label: 'Начальный уровень',
      textClass: 'text-red-600',
      barClass: 'bg-red-500',
    }
  }
  if (score <= 60) {
    return {
      label: 'Развивающееся производство',
      textClass: 'text-orange',
      barClass: 'bg-orange',
    }
  }
  if (score <= 80) {
    return {
      label: 'Зрелое производство',
      textClass: 'text-blue-secondary',
      barClass: 'bg-blue-secondary',
    }
  }
  return {
    label: 'Производство мирового класса',
    textClass: 'text-green-600',
    barClass: 'bg-green-500',
  }
}

// ---------------------------------------------------------------------------
// Motion variants
// ---------------------------------------------------------------------------

const stepVariants = {
  enter: { x: 50, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
}

const stepTransition = {
  enter: { duration: 0.35, ease: 'easeOut' as const },
  exit: { duration: 0.25, ease: 'easeIn' as const },
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function DiagnosticWizard() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [userData, setUserData] = useState<UserData | null>(null)

  const scores = useMemo(() => computeScores(answers), [answers])

  function selectOption(questionId: string, score: number): void {
    setAnswers((prev) => ({ ...prev, [questionId]: score }))
    window.setTimeout(() => {
      setStep((current) => current + 1)
    }, AUTO_ADVANCE_MS)
  }

  function goBack(): void {
    setStep((current) => Math.max(0, current - 1))
  }

  function handleFormSubmit(data: UserData): void {
    setUserData(data)
    setStep(RESULTS_STEP)
  }

  function reset(): void {
    setAnswers({})
    setUserData(null)
    setStep(0)
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={step === RESULTS_STEP ? stepTransition.enter : stepTransition.enter}
        >
          {step === 0 ? (
            <IntroStep onStart={() => setStep(1)} />
          ) : null}

          {step >= 1 && step <= TOTAL_QUESTIONS ? (
            <QuestionStep
              question={QUESTIONS[step - 1]}
              index={step - 1}
              selected={answers[QUESTIONS[step - 1].id]}
              onSelect={selectOption}
              onBack={goBack}
            />
          ) : null}

          {step === FORM_STEP ? (
            <FormStep
              initial={userData}
              onBack={goBack}
              onSubmit={handleFormSubmit}
            />
          ) : null}

          {step === RESULTS_STEP ? (
            <ResultsStep scores={scores} onReset={reset} />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 0 — Intro
// ---------------------------------------------------------------------------

interface IntroStepProps {
  onStart: () => void
}

function IntroStep({ onStart }: IntroStepProps) {
  return (
    <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm md:p-12">
      <p className="pre-title text-orange">Бесплатная диагностика</p>
      <h1 className="h2 mt-4 text-blue-primary">
        Диагностика зрелости производства
      </h1>
      <p className="body-text mx-auto mt-4 max-w-md text-gray-text">
        7 вопросов · 5 минут · Персональные рекомендации
      </p>

      <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
        {BENEFITS.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-primary/10 text-blue-primary"
            >
              <CheckIcon />
            </span>
            <span className="text-sm text-graphite">{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Button onClick={onStart} className="w-full sm:w-auto">
          Начать диагностику
        </Button>
        <p className="mt-3 text-xs text-gray-text">
          Бесплатно и без обязательств
        </p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Steps 1-7 — Questions
// ---------------------------------------------------------------------------

interface QuestionStepProps {
  question: Question
  index: number
  selected: number | undefined
  onSelect: (questionId: string, score: number) => void
  onBack: () => void
}

function QuestionStep({
  question,
  index,
  selected,
  onSelect,
  onBack,
}: QuestionStepProps) {
  const progress = ((index + 1) / TOTAL_QUESTIONS) * 100

  return (
    <div>
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-gray-text">
          <span>
            Вопрос {index + 1} из {TOTAL_QUESTIONS}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-border"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={TOTAL_QUESTIONS}
          aria-valuenow={index + 1}
          aria-label="Прогресс диагностики"
        >
          <motion.div
            className="h-full rounded-full bg-blue-primary"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
        <span className="inline-flex items-center rounded-full bg-blue-primary/10 px-3 py-1 text-xs font-semibold text-blue-primary">
          {question.dimension}
        </span>
        <h2 className="h3 mt-4 text-balance text-graphite">
          {question.question}
        </h2>

        <div className="mt-6 space-y-3">
          {question.options.map((option, optionIndex) => {
            const isSelected = selected === option.score
            return (
              <motion.button
                key={option.label}
                type="button"
                onClick={() => onSelect(question.id, option.score)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: optionIndex * 0.05, duration: 0.25 }}
                aria-pressed={isSelected}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-4 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-secondary ${
                  isSelected
                    ? 'border-blue-primary bg-blue-primary/5 text-blue-primary'
                    : 'border-border bg-white text-graphite hover:border-blue-primary'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 transition-colors ${
                    isSelected
                      ? 'border-blue-primary'
                      : 'border-border'
                  }`}
                >
                  {isSelected ? (
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-primary" />
                  ) : null}
                </span>
                <span>{option.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>

      <div className="mt-6">
        <Button variant="ghost" onClick={onBack} className="px-0">
          <ArrowLeftIcon />
          Назад
        </Button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 8 — Contact form
// ---------------------------------------------------------------------------

interface FormStepProps {
  initial: UserData | null
  onBack: () => void
  onSubmit: (data: UserData) => void
}

function FormStep({ initial, onBack, onSubmit }: FormStepProps) {
  const baseId = useId()
  const [error, setError] = useState<string>('')

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data: UserData = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      size: String(formData.get('size') ?? '').trim(),
    }

    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.company ||
      !data.size
    ) {
      setError('Пожалуйста, заполните все поля.')
      return
    }

    setError('')
    onSubmit(data)
  }

  const labelClass = 'mb-1.5 block text-sm font-medium text-graphite'
  const inputClass =
    'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-graphite outline-none transition-colors placeholder:text-gray-text/60 focus:border-blue-secondary'

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
      <h2 className="h3 text-blue-primary">Куда прислать ваш отчёт?</h2>
      <p className="mt-2 text-sm text-gray-text">
        Подготовим персональный индекс и рекомендации экспертов.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${baseId}-name`} className={labelClass}>
              Имя<span className="text-orange"> *</span>
            </label>
            <input
              id={`${baseId}-name`}
              name="name"
              type="text"
              required
              autoComplete="name"
              defaultValue={initial?.name ?? ''}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`${baseId}-email`} className={labelClass}>
              Email<span className="text-orange"> *</span>
            </label>
            <input
              id={`${baseId}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              defaultValue={initial?.email ?? ''}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`${baseId}-phone`} className={labelClass}>
              Телефон<span className="text-orange"> *</span>
            </label>
            <input
              id={`${baseId}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              defaultValue={initial?.phone ?? ''}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`${baseId}-company`} className={labelClass}>
              Компания<span className="text-orange"> *</span>
            </label>
            <input
              id={`${baseId}-company`}
              name="company"
              type="text"
              required
              autoComplete="organization"
              defaultValue={initial?.company ?? ''}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${baseId}-size`} className={labelClass}>
            Численность<span className="text-orange"> *</span>
          </label>
          <select
            id={`${baseId}-size`}
            name="size"
            required
            defaultValue={initial?.size ?? ''}
            className={inputClass}
          >
            <option value="" disabled>
              Выберите численность
            </option>
            {COMPANY_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {error ? (
          <p role="alert" className="text-sm font-medium text-orange">
            {error}
          </p>
        ) : null}

        <Button type="submit" className="w-full">
          Получить персональный отчёт
        </Button>
      </form>

      <div className="mt-4">
        <Button variant="ghost" onClick={onBack} className="px-0">
          <ArrowLeftIcon />
          Назад
        </Button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Step 9 — Results
// ---------------------------------------------------------------------------

interface ResultsStepProps {
  scores: ScoreResult
  onReset: () => void
}

function ResultsStep({ scores, onReset }: ResultsStepProps) {
  const overall = interpret(scores.total)

  const priorities = useMemo(
    () =>
      [...scores.dimensions]
        .sort((a, b) => a.score - b.score)
        .slice(0, 2),
    [scores.dimensions]
  )

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
      <p className="pre-title text-orange">Результат диагностики</p>
      <h2 className="h3 mt-3 text-graphite">
        Ваш Индекс зрелости производства
      </h2>

      <div className="mt-6 rounded-2xl bg-light-gray p-6 text-center">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-6xl font-bold text-blue-primary">
            {scores.total}
          </span>
          <span className="text-2xl font-semibold text-gray-text">/ 100</span>
        </div>
        <p className={`mt-2 text-lg font-semibold ${overall.textClass}`}>
          {overall.label}
        </p>
      </div>

      <div className="mt-8 space-y-4" aria-live="polite">
        {scores.dimensions.map((item, index) => {
          const tone = interpret(item.score)
          return (
            <div key={item.dimension}>
              <div className="mb-1.5 flex items-center justify-between text-sm font-medium text-graphite">
                <span>{item.dimension}</span>
                <span className="tabular-nums text-gray-text">
                  {item.score}%
                </span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-border">
                <motion.div
                  className={`h-full rounded-full ${tone.barClass}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.score}%` }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.15 + index * 0.08,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-graphite">
          Приоритетные направления
        </h3>
        <p className="mt-1 text-sm text-gray-text">
          Где сильнее всего скрыт потенциал роста вашего производства.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {priorities.map((item) => {
            const service = DIMENSION_SERVICE[item.dimension]
            return (
              <div
                key={item.dimension}
                className="flex flex-col rounded-xl border border-border bg-white p-5"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
                  {item.score}% · {item.dimension}
                </span>
                <p className="mt-3 flex-1 text-sm font-medium text-graphite">
                  {service.label}
                </p>
                <ButtonLink
                  href={service.href}
                  variant="secondary"
                  className="mt-4 w-full text-xs"
                >
                  Узнать об услуге
                </ButtonLink>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <ButtonLink href="/contacts" className="w-full sm:w-auto">
          Получить детальный разбор с экспертом
        </ButtonLink>
        <Button variant="ghost" onClick={onReset} className="w-full sm:w-auto">
          Пройти заново
        </Button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}
