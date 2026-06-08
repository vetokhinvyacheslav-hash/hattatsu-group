import Image from 'next/image'
import Link from 'next/link'
import { EMAIL } from '@/lib/nav'

const DIRECTIONS = [
  { label: 'Консалтинг', href: '/consulting' },
  { label: 'Обучение', href: '/training' },
  { label: 'Цифровизация', href: '/digitalization' },
  { label: 'Маркетинг', href: '/marketing' },
]

const COMPANY = [
  { label: 'Команда', href: '/team' },
  { label: 'Документы', href: '/documents' },
  { label: 'Контакты', href: '/contacts' },
]

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Hattatsu Group — на главную">
              <Image
                src="/logo.svg"
                alt="Hattatsu Group"
                width={160}
                height={52}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Hattatsu Group — экосистема экспертов для развития
              производственных предприятий через консалтинг, обучение,
              цифровизацию и культуру непрерывных улучшений.
            </p>
          </div>

          <nav aria-label="Направления">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Направления
            </p>
            <ul className="mt-4 space-y-3">
              {DIRECTIONS.map((item) => (
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

          <nav aria-label="Компания">
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

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Быстрые действия
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <Link href="/contacts" className="transition-colors hover:text-white">
                  Заказать встречу
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="transition-colors hover:text-white">
                  Запросить полную информацию
                </Link>
              </li>
              <li>
                <a
                  href="https://t.me/"
                  className="transition-colors hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Max
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="transition-colors hover:text-white"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/40">
          © {new Date().getFullYear()} Hattatsu Group. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
