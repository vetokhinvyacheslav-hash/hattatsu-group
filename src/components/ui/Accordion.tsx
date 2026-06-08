'use client'

import { useId, useState, type ReactNode } from 'react'

export interface AccordionItem {
  id: string
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: readonly AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<string | null>(null)
  const baseId = useId()

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = open === item.id
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-border bg-white"
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${baseId}-${item.id}`}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-graphite transition-colors hover:bg-light-gray"
              >
                <span>{item.title}</span>
                <span
                  aria-hidden
                  className={`shrink-0 text-blue-primary transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`${baseId}-${item.id}`}
              hidden={!isOpen}
              className="border-t border-border px-6 py-5 text-sm leading-relaxed text-gray-text"
            >
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
