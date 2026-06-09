'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ButtonLink } from './Button'

interface LossOption {
  id: string
  label: string
}

const LOSS_OPTIONS: readonly LossOption[] = [
  { id: 'downtime', label: 'Простои оборудования' },
  { id: 'defects', label: 'Производственный брак' },
  { id: 'logistics', label: 'Неэффективная логистика' },
  { id: 'payroll', label: 'Избыточный ФОТ' },
]

const HEADCOUNT_MIN = 50
const HEADCOUNT_MAX = 5000
const HEADCOUNT_STEP = 50
const REVENUE_MIN = 10
const REVENUE_MAX = 50000

const BASE_MULTIPLIER = 0.15
const PER_EXTRA_LOSS = 0.04
const RECOVERABLE_SHARE = 0.35
const ROI_FACTOR = 3
const DEBOUNCE_MS = 300
const COUNT_UP_MS = 400

interface CalcResult {
  annualLoss: number
  potentialSaving: number
  roi: number
}

function calculate(revenue: number, checkedCount: number): CalcResult {
  const extras = Math.max(0, checkedCount - 1)
  const lossMultiplier = BASE_MULTIPLIER + PER_EXTRA_LOSS * extras
  const annualLoss = revenue * lossMultiplier
  const potentialSaving = annualLoss * RECOVERABLE_SHARE
  const roi = potentialSaving * ROI_FACTOR
  return { annualLoss, potentialSaving, roi }
}

function formatMln(value: number): string {
  const rounded = Math.round(value)
  return rounded.toLocaleString('ru-RU')
}

/** Animated count-up number using requestAnimationFrame. */
function useCountUp(target: number, durationMs: number): number {
  const [display, setDisplay] = useState(target)
  const fromRef = useRef(target)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const from = fromRef.current
    const start = performance.now()

    function tick(now: number): void {
      const progress = Math.min(1, (now - start) / durationMs)
      // easeOutCubic for a smooth settle
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

interface AnimatedNumberProps {
  value: number
  className?: string
}

function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  const animated = useCountUp(value, COUNT_UP_MS)
  return <span className={className}>~{formatMln(animated)} млн ₽</span>
}

export function ROICalculator() {
  const baseId = useId()
  const headcountId = `${baseId}-headcount`
  const revenueId = `${baseId}-revenue`

  const [headcount, setHeadcount] = useState(500)
  const [revenue, setRevenue] = useState(100)
  const [checked, setChecked] = useState<Record<string, boolean>>({
    downtime: true,
    defects: false,
    logistics: false,
    payroll: false,
  })

  // Debounced revenue so count-up animation doesn't jitter while typing/dragging.
  const [debouncedRevenue, setDebouncedRevenue] = useState(revenue)
  useEffect(() => {
    const handle = setTimeout(() => setDebouncedRevenue(revenue), DEBOUNCE_MS)
    return () => clearTimeout(handle)
  }, [revenue])

  const checkedCount = Object.values(checked).filter(Boolean).length
  const { annualLoss, potentialSaving, roi } = calculate(
    Math.max(REVENUE_MIN, debouncedRevenue),
    checkedCount
  )

  function toggleLoss(id: string): void {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function handleRevenueChange(raw: string): void {
    const parsed = Number(raw)
    if (Number.isNaN(parsed)) {
      setRevenue(REVENUE_MIN)
      return
    }
    setRevenue(Math.min(REVENUE_MAX, Math.max(REVENUE_MIN, Math.round(parsed))))
  }

  return (
    <div className="grid overflow-hidden rounded-2xl border border-border bg-white shadow-sm lg:grid-cols-2">
      {/* Inputs panel */}
      <div className="p-6 sm:p-8">
        <h3 className="h3 text-blue-primary">
          Рассчитайте потери вашего производства
        </h3>

        {/* Headcount slider */}
        <div className="mt-8">
          <label
            htmlFor={headcountId}
            className="mb-3 block text-sm font-semibold text-graphite"
          >
            Численность персонала
          </label>
          <input
            id={headcountId}
            type="range"
            min={HEADCOUNT_MIN}
            max={HEADCOUNT_MAX}
            step={HEADCOUNT_STEP}
            value={headcount}
            onChange={(e) => setHeadcount(Number(e.target.value))}
            aria-valuetext={`${headcount} человек`}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-light-gray accent-blue-primary"
          />
          <div className="mt-2 flex items-baseline justify-between text-xs text-gray-text">
            <span>{HEADCOUNT_MIN}</span>
            <span className="text-base font-bold text-blue-primary">
              {headcount.toLocaleString('ru-RU')} чел.
            </span>
            <span>{HEADCOUNT_MAX}</span>
          </div>
        </div>

        {/* Revenue input */}
        <div className="mt-8">
          <label
            htmlFor={revenueId}
            className="mb-3 block text-sm font-semibold text-graphite"
          >
            Годовая выручка, млн ₽
          </label>
          <input
            id={revenueId}
            type="number"
            inputMode="numeric"
            min={REVENUE_MIN}
            max={REVENUE_MAX}
            value={revenue}
            onChange={(e) => handleRevenueChange(e.target.value)}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-graphite outline-none transition-colors focus:border-blue-secondary"
          />
        </div>

        {/* Loss checkboxes */}
        <fieldset className="mt-8">
          <legend className="mb-3 text-sm font-semibold text-graphite">
            Основные потери
          </legend>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {LOSS_OPTIONS.map((opt) => {
              const isChecked = checked[opt.id]
              return (
                <label
                  key={opt.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-3 text-sm transition-colors ${
                    isChecked
                      ? 'border-blue-primary bg-light-blue text-blue-primary'
                      : 'border-border bg-white text-gray-text hover:border-blue-secondary'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleLoss(opt.id)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                      isChecked
                        ? 'border-blue-primary bg-blue-primary text-white'
                        : 'border-border bg-white'
                    }`}
                  >
                    {isChecked ? (
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        className="h-3.5 w-3.5"
                      >
                        <path
                          d="M3.5 8.5l3 3 6-6.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                  </span>
                  <span className="font-medium">{opt.label}</span>
                </label>
              )
            })}
          </div>
        </fieldset>
      </div>

      {/* Results panel */}
      <div className="flex flex-col justify-center bg-blue-primary p-6 text-white sm:p-8">
        <p className="pre-title text-white/60">Потенциальная экономия в год</p>
        <p
          aria-live="polite"
          className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          <AnimatedNumber value={potentialSaving} />
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">
              Скрытые потери
            </p>
            <p className="mt-1 text-2xl font-bold text-white">
              <AnimatedNumber value={annualLoss} />
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">
              ROI за 3 года
            </p>
            <p className="mt-1 text-2xl font-bold text-success">
              <AnimatedNumber value={roi} />
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-white/50">
          Оценка на основе отраслевых бенчмарков Lean-внедрений
        </p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-6"
        >
          <ButtonLink
            href="/contacts"
            variant="secondary"
            className="!w-full !border-white !text-white hover:!bg-white hover:!text-blue-primary"
          >
            Получить точный расчёт от эксперта
          </ButtonLink>
        </motion.div>
      </div>
    </div>
  )
}
