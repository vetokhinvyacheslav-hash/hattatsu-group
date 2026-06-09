'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ButtonLink } from './Button'

// ── Constants ────────────────────────────────────────────────────────────────

const EMPLOYEES_MIN = 50
const EMPLOYEES_MAX = 3000
const EMPLOYEES_STEP = 50

const SALARY_MIN = 30_000
const SALARY_MAX = 250_000
const SALARY_STEP = 5_000

const LOSS_SHARE = 0.22
const RECOVERABLE = 0.72
const COUNT_UP_MS = 400
const DEBOUNCE_MS = 300

// ── Calculation ───────────────────────────────────────────────────────────────

interface KaizenResult {
  annualLoss: number
  kaizenPotential: number
  programCost: number
  paybackMonths: number
  kaizenProjects: number
}

function calculate(employees: number, salary: number): KaizenResult {
  const annualLoss = employees * salary * 12 * LOSS_SHARE
  const kaizenPotential = annualLoss * RECOVERABLE
  const programCost = 480_000 + employees * 1_800
  const paybackMonths = kaizenPotential > 0 ? programCost / (kaizenPotential / 12) : 0
  const kaizenProjects = Math.ceil(employees / 45)
  return { annualLoss, kaizenPotential, programCost, paybackMonths, kaizenProjects }
}

// ── Animated counter ──────────────────────────────────────────────────────────

function useCountUp(target: number, durationMs: number): number {
  const [display, setDisplay] = useState(target)
  const fromRef = useRef(target)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const from = fromRef.current
    const start = performance.now()

    function tick(now: number): void {
      const progress = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(from + (target - from) * eased)
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      } else {
        fromRef.current = target
      }
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
      fromRef.current = display
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, durationMs])

  return display
}

// ── Formatting ────────────────────────────────────────────────────────────────

function formatRub(value: number): string {
  const millions = value / 1_000_000
  if (millions >= 1) return `${millions.toFixed(1)} млн ₽`
  return `${Math.round(value / 1_000)} тыс. ₽`
}

function formatMonths(months: number): string {
  const rounded = Math.round(months * 10) / 10
  if (rounded < 1) return '< 1 мес.'
  if (rounded < 12) return `${rounded.toFixed(1)} мес.`
  const years = Math.round((rounded / 12) * 10) / 10
  return `${years} г.`
}

// ── Sub-components ────────────────────────────────────────────────────────────

function AnimatedRub({ value }: { value: number }) {
  const animated = useCountUp(value, COUNT_UP_MS)
  return <>{formatRub(animated)}</>
}

function AnimatedMonths({ value }: { value: number }) {
  const animated = useCountUp(value, COUNT_UP_MS)
  return <>{formatMonths(animated)}</>
}

// ── Main component ────────────────────────────────────────────────────────────

export function KaizenCalculator() {
  const baseId = useId()
  const employeesId = `${baseId}-employees`
  const salaryId = `${baseId}-salary`

  const [employees, setEmployees] = useState(500)
  const [salary, setSalary] = useState(80_000)

  const [debouncedEmployees, setDebouncedEmployees] = useState(employees)
  const [debouncedSalary, setDebouncedSalary] = useState(salary)

  useEffect(() => {
    const t = setTimeout(() => setDebouncedEmployees(employees), DEBOUNCE_MS)
    return () => clearTimeout(t)
  }, [employees])

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSalary(salary), DEBOUNCE_MS)
    return () => clearTimeout(t)
  }, [salary])

  const result = calculate(debouncedEmployees, debouncedSalary)

  return (
    <div className="grid overflow-hidden rounded-2xl border border-border bg-white shadow-sm lg:grid-cols-2">
      {/* Inputs panel */}
      <div className="p-6 sm:p-8">
        <h3 className="h3 text-blue-primary">
          Рассчитайте эффект Kaizen-программы
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Потенциал улучшений на основе отраслевых данных Lean-внедрений.
        </p>

        {/* Employees slider */}
        <div className="mt-8">
          <label
            htmlFor={employeesId}
            className="mb-3 block text-sm font-semibold text-graphite"
          >
            Численность персонала
          </label>
          <input
            id={employeesId}
            type="range"
            min={EMPLOYEES_MIN}
            max={EMPLOYEES_MAX}
            step={EMPLOYEES_STEP}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            aria-valuetext={`${employees} человек`}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-light-gray accent-blue-primary"
          />
          <div className="mt-2 flex items-baseline justify-between text-xs text-gray-text">
            <span>{EMPLOYEES_MIN}</span>
            <span className="text-base font-bold text-blue-primary">
              {employees.toLocaleString('ru-RU')} чел.
            </span>
            <span>{EMPLOYEES_MAX.toLocaleString('ru-RU')}</span>
          </div>
        </div>

        {/* Salary slider */}
        <div className="mt-8">
          <label
            htmlFor={salaryId}
            className="mb-3 block text-sm font-semibold text-graphite"
          >
            Средняя зарплата, ₽/мес.
          </label>
          <input
            id={salaryId}
            type="range"
            min={SALARY_MIN}
            max={SALARY_MAX}
            step={SALARY_STEP}
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            aria-valuetext={`${salary.toLocaleString('ru-RU')} рублей`}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-light-gray accent-blue-primary"
          />
          <div className="mt-2 flex items-baseline justify-between text-xs text-gray-text">
            <span>{(SALARY_MIN / 1000).toFixed(0)} тыс.</span>
            <span className="text-base font-bold text-blue-primary">
              {(salary / 1000).toFixed(0)} тыс. ₽
            </span>
            <span>{(SALARY_MAX / 1000).toFixed(0)} тыс.</span>
          </div>
        </div>

        {/* Kaizen projects count */}
        <div className="mt-8 rounded-xl bg-surface p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Рекомендуемое число Kaizen-проектов
          </p>
          <p className="mt-1 text-2xl font-bold text-blue-primary" aria-live="polite">
            {result.kaizenProjects} проектов
          </p>
          <p className="mt-1 text-xs text-ink-muted">
            При размере рабочих групп ~45 человек
          </p>
        </div>
      </div>

      {/* Results panel */}
      <div className="flex flex-col justify-between bg-blue-primary p-6 text-white sm:p-8">
        <div>
          <p className="pre-title text-white/60">Потенциал Kaizen за 1 год</p>
          <p
            aria-live="polite"
            className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            <AnimatedRub value={result.kaizenPotential} />
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">
              Скрытые потери/год
            </p>
            <p className="mt-1 text-xl font-bold text-white">
              <AnimatedRub value={result.annualLoss} />
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">
              Стоимость программы
            </p>
            <p className="mt-1 text-xl font-bold text-white/80">
              <AnimatedRub value={result.programCost} />
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">
              Срок окупаемости
            </p>
            <p className="mt-1 text-xl font-bold text-white/80">
              <AnimatedMonths value={result.paybackMonths} />
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">
              Доля сохранённых потерь
            </p>
            <p className="mt-1 text-xl font-bold text-white">72%</p>
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-white/50">
          Расчёт основан на отраслевой статистике Kaizen-программ в производственных компаниях.
          Точные данные — после диагностики предприятия.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-6"
        >
          <ButtonLink
            href="/diagnostics"
            variant="secondary"
            className="!w-full !border-white !text-white hover:!bg-white hover:!text-blue-primary"
          >
            Получить точный расчёт
          </ButtonLink>
        </motion.div>
      </div>
    </div>
  )
}
