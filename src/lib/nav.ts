export interface NavItem {
  label: string
  href: string
}

export interface NavSection {
  label: string
  href: string
  children?: readonly NavItem[]
}

export const NAV_SECTIONS: readonly NavSection[] = [
  { label: 'Главная', href: '/' },
  {
    label: 'Консалтинг',
    href: '/consulting',
    children: [
      { label: 'Производственные системы', href: '/consulting/production-system' },
      { label: 'Разметка и 5С', href: '/consulting/logistics-5s' },
      { label: 'HR-консалтинг', href: '/hr' },
      { label: 'Индивидуальная программа', href: '/consulting/custom' },
    ],
  },
  {
    label: 'Обучение',
    href: '/training',
    children: [
      { label: 'Основы Lean Production', href: '/training/lean-basics' },
      { label: 'Управление проектами', href: '/training/project-management' },
      { label: 'Коммуникация в Lean-проектах', href: '/training/lean-communication' },
      { label: 'Корпоративная академия', href: '/training/academy' },
    ],
  },
  {
    label: 'Геймификация',
    href: '/gamification',
    children: [
      { label: 'Lean-симулятор', href: '/gamification/lean-simulator' },
      { label: 'ПрибыльМания', href: '/gamification/profit-mania' },
    ],
  },
  {
    label: 'Цифровизация',
    href: '/digitalization',
    children: [
      { label: 'Hattatsu LMS', href: '/digitalization/lms' },
      { label: 'Web-разработка', href: '/digitalization/web' },
    ],
  },
  {
    label: 'Маркетинг',
    href: '/marketing',
    children: [
      { label: 'Упаковка бренда', href: '/marketing/brand' },
      { label: 'Организация Event', href: '/marketing/events' },
    ],
  },
  { label: 'Команда', href: '/team' },
  { label: 'Контакты', href: '/contacts' },
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

export const EMAIL = 'info@hattatsu.pro'
export const TELEGRAM = 'https://t.me/pd_academy'
