export interface NavItem {
  label: string
  href: string
}

export interface NavSection {
  label: string
  href: string
  children?: readonly NavItem[]
}

/** Shown in the desktop nav bar as plain links */
export const MAIN_NAV_SECTIONS: readonly NavSection[] = [
  { label: 'О компании', href: '/about' },
  { label: 'Команда',    href: '/team' },
  { label: 'Контакты',  href: '/contacts' },
] as const

/** Shown in the desktop "Услуги ≡" mega-menu and mobile drawer */
export const SERVICES_NAV_SECTIONS: readonly NavSection[] = [
  {
    label: 'Консалтинг',
    href: '/consulting',
    children: [
      { label: 'Производственные системы', href: '/consulting/production-system' },
      { label: 'Разметка и 5С',            href: '/consulting/logistics-5s' },
      { label: 'HR-консалтинг',            href: '/hr' },
      { label: 'Индивидуальная программа', href: '/consulting/custom' },
    ],
  },
  {
    label: 'Обучение',
    href: '/training',
    children: [
      { label: 'Основы Lean Production',        href: '/training/lean-basics' },
      { label: 'Управление проектами',          href: '/training/project-management' },
      { label: 'Коммуникация в Lean-проектах',  href: '/training/lean-communication' },
      { label: 'Корпоративная академия',        href: '/training/academy' },
    ],
  },
  {
    label: 'Геймификация',
    href: '/gamification',
    children: [
      { label: 'Lean-симулятор', href: '/gamification/lean-simulator' },
      { label: 'ПрибыльМания',   href: '/gamification/profit-mania' },
    ],
  },
  {
    label: 'Цифровизация',
    href: '/digitalization',
    children: [
      { label: 'Hattatsu LMS',  href: '/digitalization/lms' },
      { label: 'Web-разработка', href: '/digitalization/web' },
    ],
  },
  {
    label: 'Маркетинг',
    href: '/marketing',
    children: [
      { label: 'Упаковка бренда',   href: '/marketing/brand' },
      { label: 'Организация Event', href: '/marketing/events' },
    ],
  },
] as const

/** Full list — used in mobile drawer */
export const NAV_SECTIONS: readonly NavSection[] = [
  { label: 'Главная', href: '/' },
  ...SERVICES_NAV_SECTIONS,
  ...MAIN_NAV_SECTIONS,
] as const

/** Flat list for simple nav rendering */
export const NAV_ITEMS: readonly NavItem[] = NAV_SECTIONS.map(({ label, href }) => ({
  label,
  href,
}))

export const DIRECTION_OPTIONS: readonly string[] = [
  'Консалтинг — производственные системы',
  'Консалтинг — HR',
  'Обучение и развитие',
  'Геймификация и симуляторы',
  'Цифровизация',
  'Маркетинг',
  'Другое',
] as const

export const EMAIL    = 'info@hattatsu.pro'
export const TELEGRAM = 'https://t.me/pd_academy'
