'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  MAIN_NAV_SECTIONS,
  NAV_SECTIONS,
  SERVICES_NAV_SECTIONS,
  type NavSection,
} from '@/lib/nav'
import { MeetingButton } from '@/components/ui/MeetingModal'

function isSectionActive(section: NavSection, pathname: string): boolean {
  if (section.href === '/') return pathname === '/'
  if (pathname === section.href || pathname.startsWith(`${section.href}/`)) return true
  return Boolean(section.children?.some((child) => pathname === child.href))
}

// ── Desktop services mega-menu ────────────────────────────────────────────────

interface ServicesMegaMenuProps {
  pathname: string
  onClose: () => void
}

function ServicesMegaMenu({ pathname, onClose }: ServicesMegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6, transition: { duration: 0.12, ease: [0.4, 0, 1, 1] } }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-0 right-0 top-full z-40 border-b border-border bg-white shadow-2xl shadow-black/8"
    >
      <div className="container py-8">
        <div className="grid grid-cols-5 gap-8">
          {SERVICES_NAV_SECTIONS.map((section) => {
            const active = isSectionActive(section, pathname)
            return (
              <div key={section.href}>
                <Link
                  href={section.href}
                  onClick={onClose}
                  className={`block text-sm font-semibold transition-colors ${
                    active ? 'text-blue-primary' : 'text-ink hover:text-blue-primary'
                  }`}
                >
                  {section.label}
                </Link>
                {section.children && (
                  <ul className="mt-3 space-y-2">
                    {section.children.map((child) => {
                      const childActive = pathname === child.href
                      return (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className={`block text-[13px] leading-snug transition-colors ${
                              childActive
                                ? 'text-blue-primary'
                                : 'text-ink-muted hover:text-blue-primary'
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

// ── Mobile accordion item ─────────────────────────────────────────────────────

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

// ── Main Header ───────────────────────────────────────────────────────────────

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!servicesOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (navBarRef.current && !navBarRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [servicesOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = original
      document.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50">
      {/* Main nav bar */}
      <div
        ref={navBarRef}
        className="relative transition-all duration-500"
        style={{
          backgroundColor: scrolled ? '#ffffff' : 'transparent',
          borderBottom: scrolled ? '1px solid #DDE0EF' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 3px 0 rgb(0 0 0 / 0.06)' : 'none',
        }}
      >
        <div className="container flex h-[72px] items-center justify-between gap-4 py-4">
          {/* Logo */}
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

          {/* Desktop main nav: О компании · Команда · Контакты */}
          <nav aria-label="Основная навигация" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {MAIN_NAV_SECTIONS.map((section) => {
                const active = isSectionActive(section, pathname)
                return (
                  <li key={section.href}>
                    <Link
                      href={section.href}
                      aria-current={active ? 'page' : undefined}
                      className={`relative inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        active ? 'text-blue-primary' : 'text-ink hover:text-blue-primary'
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
              })}
            </ul>
          </nav>

          {/* Desktop right side: Услуги ≡ + CTA buttons */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            {/* Услуги burger */}
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-500"
              style={
                servicesOpen
                  ? { borderColor: '#110F56', backgroundColor: '#EEF0FF', color: '#110F56' }
                  : scrolled
                    ? { borderColor: '#110F56', color: '#110F56' }
                    : { borderColor: 'white', color: 'white' }
              }
            >
              Услуги
              <svg
                aria-hidden
                viewBox="0 0 18 14"
                width="16"
                height="12"
                fill="none"
              >
                <path
                  d="M1 1h16M1 7h16M1 13h16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <Link
              href="/diagnostics"
              className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={
                scrolled
                  ? { borderColor: '#110F56', color: '#110F56' }
                  : { borderColor: 'white', color: 'white' }
              }
            >
              Пройти диагностику
            </Link>
            <MeetingButton
              label="Консультация"
              variant="primary"
              className="!px-5 !py-2.5"
            />
          </div>

          {/* Mobile burger */}
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

        {/* Desktop services mega-menu */}
        <AnimatePresence>
          {servicesOpen ? (
            <ServicesMegaMenu
              pathname={pathname}
              onClose={() => setServicesOpen(false)}
            />
          ) : null}
        </AnimatePresence>
      </div>

      {/* Mobile drawer */}
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
