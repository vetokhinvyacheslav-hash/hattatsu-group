'use client'

import { useId, useState, type FormEvent } from 'react'
import { DIRECTION_OPTIONS } from '@/lib/nav'
import { Button } from './Button'

type FieldName =
  | 'name'
  | 'company'
  | 'position'
  | 'contact'
  | 'industry'
  | 'direction'
  | 'message'

interface ContactFormProps {
  formType: string
  fields?: readonly FieldName[]
  submitLabel?: string
  light?: boolean
}

const DEFAULT_FIELDS: readonly FieldName[] = [
  'name',
  'company',
  'position',
  'contact',
  'direction',
  'message',
]

const LABELS: Record<FieldName, string> = {
  name: 'Имя',
  company: 'Компания',
  position: 'Должность',
  contact: 'Телефон или email',
  industry: 'Отрасль',
  direction: 'Направление интереса',
  message: 'Кратко о задаче',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm({
  formType,
  fields = DEFAULT_FIELDS,
  submitLabel = 'Отправить',
  light = false,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const baseId = useId()

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: String(formData.get('name') ?? ''),
      company: String(formData.get('company') ?? ''),
      position: String(formData.get('position') ?? ''),
      contact: String(formData.get('contact') ?? ''),
      industry: String(formData.get('industry') ?? ''),
      direction: String(formData.get('direction') ?? ''),
      message: String(formData.get('message') ?? ''),
      formType,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json: { success?: boolean; error?: string } = await res.json()
      if (!res.ok || !json.success) {
        throw new Error(json.error ?? 'Не удалось отправить заявку')
      }
      setStatus('success')
    } catch (error: unknown) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Произошла ошибка. Попробуйте позже.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className={`rounded-2xl border p-8 text-center ${
          light ? 'border-white/20 bg-white/5 text-white' : 'border-border bg-white'
        }`}
      >
        <p className="text-lg font-bold">Заявка отправлена</p>
        <p className={`mt-2 text-sm ${light ? 'text-white/70' : 'text-gray-text'}`}>
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    )
  }

  const labelClass = `mb-1.5 block text-sm font-medium ${
    light ? 'text-white/80' : 'text-graphite'
  }`
  const inputClass = `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-blue-secondary ${
    light
      ? 'border-white/20 bg-white/10 text-white placeholder:text-white/40'
      : 'border-border bg-white text-graphite placeholder:text-gray-text/60'
  }`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields
          .filter((f) => f !== 'message')
          .map((field) => {
            const fieldId = `${baseId}-${field}`
            if (field === 'direction') {
              return (
                <div key={field}>
                  <label htmlFor={fieldId} className={labelClass}>
                    {LABELS[field]}
                  </label>
                  <select
                    id={fieldId}
                    name={field}
                    required
                    className={inputClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Выберите направление
                    </option>
                    {DIRECTION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="text-graphite">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              )
            }
            const required = field === 'name' || field === 'contact'
            return (
              <div key={field}>
                <label htmlFor={fieldId} className={labelClass}>
                  {LABELS[field]}
                  {required ? <span className="text-blue-primary"> *</span> : null}
                </label>
                <input
                  id={fieldId}
                  name={field}
                  type={
                    field === 'contact' ? 'text' : 'text'
                  }
                  required={required}
                  className={inputClass}
                  autoComplete={field === 'name' ? 'name' : 'off'}
                />
              </div>
            )
          })}
      </div>

      {fields.includes('message') ? (
        <div>
          <label htmlFor={`${baseId}-message`} className={labelClass}>
            {LABELS.message}
          </label>
          <textarea
            id={`${baseId}-message`}
            name="message"
            rows={4}
            className={inputClass}
          />
        </div>
      ) : null}

      {status === 'error' ? (
        <p role="alert" className="text-sm font-medium text-blue-primary">
          {errorMessage}
        </p>
      ) : null}

      <Button
        type="submit"
        variant={light ? 'secondary' : 'primary'}
        disabled={status === 'submitting'}
        className={light ? '!border-white !text-white hover:!bg-white hover:!text-blue-primary' : ''}
      >
        {status === 'submitting' ? 'Отправка…' : submitLabel}
      </Button>
    </form>
  )
}
