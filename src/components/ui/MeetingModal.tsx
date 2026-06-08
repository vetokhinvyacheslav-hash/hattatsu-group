'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { Modal } from './Modal'
import { ContactForm } from './ContactForm'
import { Button } from './Button'

interface MeetingModalContextValue {
  open: () => void
  close: () => void
}

const MeetingModalContext = createContext<MeetingModalContextValue | null>(null)

export function MeetingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => ({ open, close }), [open, close])

  return (
    <MeetingModalContext.Provider value={value}>
      {children}
      <Modal open={isOpen} onClose={close} title="Заказать встречу">
        <ContactForm
          formType="Заказать встречу"
          submitLabel="Отправить заявку"
        />
      </Modal>
    </MeetingModalContext.Provider>
  )
}

export function useMeetingModal(): MeetingModalContextValue {
  const ctx = useContext(MeetingModalContext)
  if (!ctx) {
    throw new Error('useMeetingModal must be used within MeetingModalProvider')
  }
  return ctx
}

interface MeetingButtonProps {
  label?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export function MeetingButton({
  label = 'Заказать встречу',
  variant = 'primary',
  className = '',
}: MeetingButtonProps) {
  const { open } = useMeetingModal()
  return (
    <Button variant={variant} className={className} onClick={open}>
      {label}
    </Button>
  )
}
