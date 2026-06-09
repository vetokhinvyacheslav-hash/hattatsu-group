'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_SECTIONS, type NavSection } from '@/lib/nav'
import { MeetingButton } from '@/components/ui/MeetingModal'

function isSectionActive(section: NavSection, pathname: string): boolean {
  if (section.href === '/') return pathname === '/'
  if (pathname === section.href || pathname.startsWith(`${section.href}/`)) {
    return true
  }
  return Boolean(section.children?.some((child) => pathname === child.href))
}

interface DesktopNavItemProps {
  section: NavSection
  pathname: string
}

function DesktopNavItem({ section, pathname }: DesktopNavItemProps) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const itemRef = useRef<HTMLLIElement>(null)
  const hasChildren = Boolean(section.children?.length)
  const active = isSectionActive(section, pathname)

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onClickOutside = (event: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [open])

  useEffect(() => clearCloseTimer, [])

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={section.href}
          aria-current={active ? 'page' : undefined}
          className={`relative inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            active ? 'text-blue-primary' : 'text-gray-text hover:text-graphite'
          }`}
        >
          {section.label}
          {active ? (
            <span
              aria-hidden
              className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-primary"
            />
          ) : null}
        </Link>
      </li>
    )
  }

  return (
    <li
      ref={itemRef}
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer()
        setOpen(true)
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
        className={`relative inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          active || open
            ? 'text-blue-primary'
            : 'text-gray-text hover:text-graphite'
        }`}
      >
        {section.label}
        <svg
          aria-hidden
          viewBox="0 0 12 12"
          className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path
            d="M2.5 4.5 6 8l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {active ? (
          <span
            aria-hidden
            className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-primary"
          />
        ) : null}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4, transition: { duration: 0.1, ease: [0.4, 0, 1, 1] } }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top center' }}
            className="absolute left-0 top-full z-50 pt-3"
          >
            <div
              role="menu"
              aria-label={section.label}
              className="w-72 overflow-hidden rounded-xl border border-border bg-white p-2 shadow-xl"
            >
              <Link
                href={section.href}
                role="menuitem"
                className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-text transition-colors hover:text-blue-primary"
              >
                Все · {section.label}
              </Link>
              <div className="my-1 h-px bg-border" />
              {section.children?.map((child) => {
                const childActive = pathname === child.href
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    role="menuitem"
                    aria-current={childActive ? 'page' : undefined}
                    className={`group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      childActive
                        ? 'bg-light-blue text-blue-primary'
                        : 'text-graphite hover:bg-light-gray hover:text-blue-primary'
                    }`}
                  >
                    <span className="font-medium">{child.label}</span>
                    <span
                      aria-hidden
                      className="translate-x-0 text-gray-text transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-primary"
                    >
                      →
                    </span>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  )
}

interface MobileAccordionItemProps {
  section: NavSection
  pathname: string
  onNavigate: () => void
}

function MobileAccordionItem({
  section,
  pathname,
  onNavigate,
}: MobileAccordionItemProps) {
  const active = isSectionActive(section, pathname)
  const [expanded, setExpanded] = useState(active)
  const hasChildren = Boolean(section.children?.length)

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={section.href}
          onClick={onNavigate}
          aria-current={active ? 'page' : undefined}
          className={`block rounded-lg px-3 py-3 text-base font-semibold ${
            active ? 'bg-light-blue text-blue-primary' : 'text-graphite'
          }`}
        >
          {section.label}
        </Link>
      </li>
    )
  }

  return (
    <li>
      <div
        className={`flex items-center justify-between rounded-lg ${
          active ? 'bg-light-blue' : ''
        }`}
      >
        <Link
          href={section.href}
          onClick={onNavigate}
          className={`flex-1 rounded-lg px-3 py-3 text-base font-semibold ${
            active ? 'text-blue-primary' : 'text-graphite'
          }`}
        >
          {section.label}
        </Link>
        <button
          type="button"
          aria-expanded={expanded}
          aria-label={
            expanded
              ? `Свернуть раздел ${section.label}`
              : `Развернуть раздел ${section.label}`
          }
          onClick={() => setExpanded((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-gray-text"
        >
          <svg
            aria-hidden
            viewBox="0 0 12 12"
            className={`h-4 w-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          >
            <path
              d="M2.5 4.5 6 8l3.5-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden pl-3"
          >
            {section.children?.map((child) => {
              const childActive = pathname === child.href
              return (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    onClick={onNavigate}
                    aria-current={childActive ? 'page' : undefined}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm ${
                      childActive
                        ? 'text-blue-primary'
                        : 'text-gray-text hover:text-blue-primary'
                    }`}
                  >
                    <span aria-hidden className="text-gray-text">
                      →
                    </span>
                    {child.label}
                  </Link>
                </li>
              )
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </li>
  )
}

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = original
      document.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-blue-primary text-white">
        <div className="container flex min-h-10 items-center justify-center py-2 text-center text-xs sm:text-sm">
          Международная экспертиза · Lean-трансформация · Первый результат за 90 дней
        </div>
      </div>

      <div
        className={`border-b border-border bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="container flex h-[72px] items-center justify-between gap-4 py-4">
          <Link
            href="/"
            aria-label="Hattatsu Group — на главную"
            className="shrink-0"
          >
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
            <ul className="flex items-center gap-0.5">
              {NAV_SECTIONS.map((section) => (
                <DesktopNavItem
                  key={section.href}
                  section={section}
                  pathname={pathname}
                />
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <Link
              href="/diagnostics"
              className="inline-flex items-center justify-center rounded-full bg-blue-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-secondary"
            >
              Пройти диагностику
            </Link>
            <MeetingButton
              label="Записаться"
              variant="secondary"
              className="!px-5 !py-2.5"
            />
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
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <div className="fixed inset-0 z-50 xl:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Меню навигации"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="absolute right-0 top-0 flex h-full w-4/5 max-w-sm flex-col bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <Image
                  src="/logo.svg"
                  alt="Hattatsu Group"
                  width={150}
                  height={48}
                  className="h-8 w-auto"
                />
                <button
                  type="button"
                  aria-label="Закрыть меню"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-blue-primary"
                >
                  <span aria-hidden className="text-xl">
                    ×
                  </span>
                </button>
              </div>

              <nav
                aria-label="Мобильная навигация"
                className="flex-1 overflow-y-auto px-4 py-4"
              >
                <ul className="flex flex-col gap-1">
                  {NAV_SECTIONS.map((section) => (
                    <MobileAccordionItem
                      key={section.href}
                      section={section}
                      pathname={pathname}
                      onNavigate={() => setMobileOpen(false)}
                    />
                  ))}
                </ul>
              </nav>

              <div className="border-t border-border px-5 py-4">
                <Link
                  href="/diagnostics"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-blue-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-secondary"
                >
                  Пройти диагностику
                </Link>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
