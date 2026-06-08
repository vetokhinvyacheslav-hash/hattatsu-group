export interface NavItem {
  label: string
  href: string
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Главная', href: '/' },
  { label: 'Консалтинг', href: '/consulting' },
  { label: 'Обучение', href: '/training' },
  { label: 'Цифровизация', href: '/digitalization' },
  { label: 'Маркетинг', href: '/marketing' },
  { label: 'Команда', href: '/team' },
  { label: 'Документы', href: '/documents' },
  { label: 'Контакты', href: '/contacts' },
] as const

export const DIRECTION_OPTIONS: readonly string[] = [
  'Консалтинг',
  'Обучение',
  'Цифровизация',
  'Маркетинг',
  'Другое',
] as const

export const EMAIL = 'info@hattatsu.pro'
