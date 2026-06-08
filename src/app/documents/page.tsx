import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Документы — Hattatsu Group',
  description:
    'Юридические документы Hattatsu Group: реквизиты, политика конфиденциальности, согласие на обработку персональных данных и пользовательское соглашение.',
}

const DOCUMENTS = [
  'Реквизиты компании',
  'Политика конфиденциальности',
  'Согласие на обработку персональных данных',
  'Пользовательское соглашение',
  'Иные юридические документы',
]

export default function DocumentsPage() {
  return (
    <Section>
      <SectionHeading
        preTitle="Документы"
        title="Юридические документы"
        subtitle="Актуальные документы Hattatsu Group. Файлы предоставляются по запросу."
      />
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {DOCUMENTS.map((doc) => (
          <li key={doc}>
            <a
              href="#"
              className="flex items-center gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                aria-hidden
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-light-blue text-xs font-bold text-blue-primary"
              >
                PDF
              </span>
              <span className="font-semibold text-graphite">{doc}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
