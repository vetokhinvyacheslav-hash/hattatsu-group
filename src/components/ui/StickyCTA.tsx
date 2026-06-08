'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ButtonLink } from './Button'

const SCROLL_THRESHOLD = 400

export function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white px-4 py-3 shadow-lg lg:hidden"
          style={{
            paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))',
          }}
        >
          <div className="flex items-center gap-3">
            <ButtonLink
              href="/diagnostics"
              variant="primary"
              className="flex-1 px-4 py-3"
            >
              Пройти диагностику
            </ButtonLink>
            <ButtonLink
              href="/contacts"
              variant="ghost"
              className="px-4 py-3"
            >
              Написать
            </ButtonLink>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
