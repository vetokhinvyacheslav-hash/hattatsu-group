import Image from 'next/image'
import Link from 'next/link'
import { EMAIL, TELEGRAM } from '@/lib/nav'

const SERVICES = [
  { label: 'Консалтинг', href: '/consulting' },
  { label: 'Обучение', href: '/training' },
  { label: 'Геймификация', href: '/gamification' },
  { label: 'Цифровизация', href: '/digitalization' },
  { label: 'Маркетинг', href: '/marketing' },
] as const

const COMPANY = [
  { label: 'Команда', href: '/team' },
  { label: 'Документация', href: '/documents' },
  { label: 'Контакты', href: '/contacts' },
  { label: 'Диагностика', href: '/diagnostics' },
] as const

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#0D1018' }}>
      <div className="container py-16">
        <div className="grid gap-10 divide-y divide-white/10 md:grid-cols-2 md:divide-y-0 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          {/* Col 1 — Brand + contacts */}
          <div className="pt-0">
            <Link href="/" aria-label="Hattatsu Group — на главную">
              <Image
                src="/logo-white.svg"
                alt="Hattatsu Group"
                width={200}
                height={64}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Международная группа экспертов по развитию производственных систем. Lean-консалтинг, корпоративное обучение и цифровые решения для предприятий России и СНГ.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${EMAIL}`}
                className="block text-white/75 transition-colors hover:text-white"
              >
                {EMAIL}
              </a>
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noreferrer"
                className="block text-white/75 transition-colors hover:text-white"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <nav aria-label="Услуги" className="pt-8 md:pt-0">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Услуги
            </p>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 — Company */}
          <nav aria-label="Компания" className="pt-8 md:pt-0">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Компания
            </p>
            <ul className="mt-4 space-y-3">
              {COMPANY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4 — Actions */}
          <div className="pt-8 lg:pt-0">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Действия
            </p>
            <div className="mt-4 space-y-3">
              <Link
                href="/diagnostics"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white px-5 py-3 text-sm font-semibold transition-colors duration-200 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ color: '#110F56' }}
              >
                Пройти диагностику
              </Link>
              <Link
                href="/contacts"
                className="block text-sm text-white/75 transition-colors hover:text-white"
              >
                Записаться на встречу →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Hattatsu Group. ООО «Академия развития
            производственных предприятий»
          </p>
          <Link
            href="/privacy"
            className="transition-colors hover:text-white/70"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  )
}
