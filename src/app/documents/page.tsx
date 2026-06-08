import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Документы компании — Hattatsu Group',
  description:
    'Реквизиты, правовые документы и сведения об ООО «Академия развития производственных предприятий».',
}

const REQUISITES: readonly { label: string; value: string }[] = [
  {
    label: 'Полное наименование',
    value: 'ООО «Академия развития производственных предприятий»',
  },
  { label: 'Краткое наименование', value: 'Hattatsu Group' },
  { label: 'ИНН', value: '7XXXXXXXXX' },
  { label: 'ОГРН', value: '1XXXXXXXXXXXX' },
  { label: 'Юридический адрес', value: 'Предоставляется по запросу' },
  { label: 'Фактический адрес', value: 'Россия' },
  { label: 'Email', value: 'info@hattatsu.pro' },
]

interface DocumentItem {
  name: string
  href: string
  action: string
}

const DOCUMENTS: readonly DocumentItem[] = [
  {
    name: 'Свидетельство о государственной регистрации',
    href: 'mailto:info@hattatsu.pro?subject=Запрос%20документа',
    action: 'Запросить',
  },
  {
    name: 'Лицензия на образовательную деятельность',
    href: 'mailto:info@hattatsu.pro?subject=Запрос%20документа',
    action: 'Запросить',
  },
  {
    name: 'Политика конфиденциальности',
    href: '/privacy',
    action: 'Открыть',
  },
  {
    name: 'Договор оферты',
    href: 'mailto:info@hattatsu.pro?subject=Запрос%20договора%20оферты',
    action: 'Запросить',
  },
]

export default function DocumentsPage() {
  return (
    <Section tone="gray">
      <SectionHeading
        preTitle="Документы"
        title="Документы и реквизиты компании"
        subtitle="Реквизиты и правовые документы Hattatsu Group. Файлы предоставляются по запросу — напишите нам, и мы направим нужный документ."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Левая колонка — Реквизиты компании */}
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-graphite">Реквизиты компании</h2>
          <dl className="mt-6 space-y-5">
            {REQUISITES.map((item) => (
              <div
                key={item.label}
                className="grid gap-1 border-b border-border pb-5 last:border-0 last:pb-0 sm:grid-cols-[200px_1fr] sm:gap-4"
              >
                <dt className="text-sm font-medium text-gray-text">
                  {item.label}
                </dt>
                <dd className="text-sm font-semibold text-graphite">
                  {item.label === 'Email' ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="text-blue-primary hover:text-blue-secondary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Правая колонка — Документы */}
        <div>
          <h2 className="text-xl font-bold text-graphite">Документы</h2>
          <ul className="mt-6 space-y-4">
            {DOCUMENTS.map((doc) => (
              <li
                key={doc.name}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-light-blue text-xs font-bold text-blue-primary"
                  >
                    PDF
                  </span>
                  <span className="font-semibold text-graphite">{doc.name}</span>
                </div>
                <ButtonLink
                  href={doc.href}
                  variant="secondary"
                  className="shrink-0 !px-5 !py-2.5 !text-xs"
                >
                  {doc.action}
                </ButtonLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-10 text-sm text-gray-text">
        Для получения документов свяжитесь с нами:{' '}
        <Link
          href="mailto:info@hattatsu.pro"
          className="font-semibold text-blue-primary hover:text-blue-secondary"
        >
          info@hattatsu.pro
        </Link>
      </p>
    </Section>
  )
}
