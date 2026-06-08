import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EMAIL } from '@/lib/nav'

interface ContactPayload {
  name: string
  company: string
  position: string
  contact: string
  industry: string
  direction: string
  message: string
  formType: string
}

function parsePayload(input: unknown): ContactPayload | null {
  if (typeof input !== 'object' || input === null) return null
  const data = input as Record<string, unknown>
  const str = (key: string): string =>
    typeof data[key] === 'string' ? (data[key] as string).trim() : ''

  const name = str('name')
  const contact = str('contact')
  if (name.length === 0 || contact.length === 0) return null

  return {
    name,
    company: str('company'),
    position: str('position'),
    contact,
    industry: str('industry'),
    direction: str('direction'),
    message: str('message'),
    formType: str('formType') || 'Заявка с сайта',
  }
}

function buildHtml(p: ContactPayload): string {
  const rows: Array<[string, string]> = [
    ['Тип формы', p.formType],
    ['Имя', p.name],
    ['Компания', p.company],
    ['Должность', p.position],
    ['Отрасль', p.industry],
    ['Контакт', p.contact],
    ['Направление', p.direction],
    ['Задача', p.message],
  ]
  const body = rows
    .filter(([, value]) => value.length > 0)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#1B1F27">${label}</td><td style="padding:6px 12px;color:#6F7785">${escapeHtml(
          value
        )}</td></tr>`
    )
    .join('')
  return `<table style="border-collapse:collapse;font-family:sans-serif">${body}</table>`
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(request: Request): Promise<NextResponse> {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, error: 'Некорректный запрос' },
      { status: 400 }
    )
  }

  const payload = parsePayload(json)
  if (!payload) {
    return NextResponse.json(
      { success: false, error: 'Заполните имя и контактные данные' },
      { status: 400 }
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      {
        success: false,
        error:
          'Отправка временно недоступна. Напишите нам напрямую на ' + EMAIL,
      },
      { status: 503 }
    )
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'Hattatsu Group <onboarding@resend.dev>',
      to: [EMAIL],
      replyTo: payload.contact.includes('@') ? payload.contact : undefined,
      subject: `${payload.formType} — ${payload.name}`,
      html: buildHtml(payload),
    })

    if (error) {
      return NextResponse.json(
        { success: false, error: 'Не удалось отправить заявку' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}
