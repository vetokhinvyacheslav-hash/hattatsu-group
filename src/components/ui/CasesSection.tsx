'use client'

import { useId, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from './Button'

interface CaseStudy {
  id: string
  client: string
  industry: string
  logo: string
  task: string
  result: string
  tag: string
}

const CASES: readonly CaseStudy[] = [
  {
    id: 'agc',
    client: 'Предприятие по обработке стекла',
    industry: 'Стекольная промышленность',
    logo: 'AGC',
    task: 'Построение производственной системы на базе Lean/Kaizen',
    result: 'Рост OEE с 70% до 87% за 18 месяцев',
    tag: 'Производственная система',
  },
  {
    id: 'barilla',
    client: 'Крупный пищевой производитель',
    industry: 'Пищевая промышленность',
    logo: 'Barilla',
    task: 'Внедрение Lean-программ и развитие вовлечённости персонала',
    result: 'Снижение производственных потерь на 23% за год',
    tag: 'Lean-внедрение',
  },
  {
    id: 'pelikan',
    client: 'Производственный комплекс',
    industry: 'Промышленность',
    logo: 'PelikanGlass',
    task: 'Корпоративная программа обучения ДПО для ИТР',
    result: '140+ Kaizen-проектов, 1500+ часов обучения',
    tag: 'Обучение',
  },
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface CaseCardProps {
  study: CaseStudy
}

function CaseCard({ study }: CaseCardProps) {
  const baseId = useId()
  const emailId = `${baseId}-email`
  const formRegionId = `${baseId}-form`

  const [formOpen, setFormOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError('Введите корректный email')
      return
    }
    setError('')

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          formType: 'case-request',
          caseId: study.id,
        }),
      }).catch(() => undefined)
    } finally {
      setSubmitted(true)
    }
  }

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="inline-flex w-fit items-center rounded-full bg-light-blue px-3 py-1 text-xs font-semibold text-blue-primary">
        {study.tag}
      </span>

      <div className="mt-4 flex items-center gap-3">
        <span className="inline-block rounded bg-blue-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-primary">
          {study.logo}
        </span>
        <span className="text-xs text-gray-text">{study.industry}</span>
      </div>

      <h3 className="mt-4 text-base font-bold text-graphite">{study.client}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-text">{study.task}</p>

      <p className="mt-5 text-xl font-extrabold leading-snug text-blue-primary">
        {study.result}
      </p>

      <div className="mt-auto pt-6">
        {!formOpen ? (
          <Button
            variant="secondary"
            className="!w-full"
            aria-expanded={formOpen}
            aria-controls={formRegionId}
            onClick={() => setFormOpen(true)}
          >
            Получить полный кейс
          </Button>
        ) : null}

        <AnimatePresence initial={false}>
          {formOpen ? (
            <motion.div
              id={formRegionId}
              key="form"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              {submitted ? (
                <p
                  role="status"
                  className="rounded-xl bg-success/10 px-4 py-3 text-sm font-medium text-success"
                >
                  ✓ Кейс отправлен на {email}
                </p>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-2.5">
                  <label htmlFor={emailId} className="sr-only">
                    Email для получения кейса
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@company.ru"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-graphite outline-none transition-colors focus:border-blue-secondary placeholder:text-gray-text/60"
                  />
                  {error ? (
                    <p role="alert" className="text-xs font-medium text-orange">
                      {error}
                    </p>
                  ) : null}
                  <Button type="submit" className="!w-full">
                    Получить кейс
                  </Button>
                </form>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </article>
  )
}

export function CasesSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <p className="pre-title text-orange">Кейсы клиентов</p>
        <h2 className="h2 mt-2 max-w-2xl text-blue-primary">
          Результаты, которые говорят сами за себя
        </h2>
        <p className="body-text mt-3 max-w-xl text-gray-text">
          Полные кейсы доступны по запросу — оставьте email
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((study) => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
