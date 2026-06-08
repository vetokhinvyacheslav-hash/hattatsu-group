'use client'

import { useId, useState, type ReactNode } from 'react'

export interface TabItem {
  id: string
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: readonly TabItem[]
}

export function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState(tabs[0]?.id ?? '')
  const baseId = useId()

  if (tabs.length === 0) return null

  return (
    <div>
      <div
        role="tablist"
        aria-label="Разделы"
        className="tabs-scroll -mx-1 flex gap-2 border-b border-border pb-px"
      >
        {tabs.map((tab) => {
          const selected = tab.id === active
          return (
            <button
              key={tab.id}
              role="tab"
              type="button"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              className={`whitespace-nowrap rounded-t-lg px-4 py-3 text-sm font-semibold transition-colors ${
                selected
                  ? 'border-b-2 border-blue-primary text-blue-primary'
                  : 'border-b-2 border-transparent text-gray-text hover:text-graphite'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={tab.id !== active}
          className="pt-8"
        >
          {tab.id === active ? tab.content : null}
        </div>
      ))}
    </div>
  )
}
