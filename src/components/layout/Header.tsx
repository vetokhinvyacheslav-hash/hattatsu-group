'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '@/lib/nav'
import { MeetingButton } from '@/components/ui/MeetingModal'

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-blue-primary text-white">
        <div className="container flex min-h-10 items-center justify-center py-2 text-center text-xs sm:text-sm">
          Обсудите развитие производственной системы с экспертом Hattatsu Group
        </div>
      </div>

      <div className="border-b border-border bg-white">
        <div className="container flex h-[72px] items-center justify-between gap-6 py-4">
          <Link href="/" aria-label="Hattatsu Group — на главную">
            <Image
              src="/logo.svg"
              alt="Hattatsu Group"
              width={180}
              height={58}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <nav aria-label="Основная навигация" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        active
                          ? 'text-blue-primary'
                          : 'text-gray-text hover:text-graphite'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="hidden xl:block">
            <MeetingButton className="!px-5 !py-2.5" />
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-blue-primary xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span aria-hidden className="text-xl">
              {mobileOpen ? '×' : '≡'}
            </span>
          </button>
        </div>

        {mobileOpen ? (
          <div
            id="mobile-menu"
            className="border-t border-border bg-white xl:hidden"
          >
            <nav aria-label="Мобильная навигация" className="container py-4">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const active =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.href)
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={`block rounded-lg px-3 py-3 text-base font-medium ${
                          active
                            ? 'bg-light-blue text-blue-primary'
                            : 'text-graphite'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-4">
                <MeetingButton className="w-full" />
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}
