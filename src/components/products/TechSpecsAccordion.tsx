'use client'

import { useState } from 'react'

export type Tab = {
  title: string
  rows: { label: string; value: string }[]
}

export function TechSpecsAccordion({ tabs }: { tabs: Tab[] }) {
  const [openTab, setOpenTab] = useState(0)

  return (
    <div>
      {tabs.map((tab, i) => (
        <div key={tab.title}>
          <button
            type="button"
            onClick={() => setOpenTab(i)}
            className="flex justify-between items-center w-full py-4 cursor-pointer border-b border-brand-gray-200"
          >
            <span className="text-[16px] font-extrabold text-brand-black">{tab.title}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              style={{
                transform: openTab === i ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
                flexShrink: 0,
              }}
            >
              <path
                d="M3 6l5 5 5-5"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {openTab === i && (
            <dl className="pb-6 pt-2">
              {tab.rows.map((row, j) => (
                <div key={j} className="flex gap-4 py-1.5">
                  {row.label && (
                    <dt className="text-[13px] text-brand-gray-500 w-[180px] shrink-0">
                      {row.label}
                    </dt>
                  )}
                  <dd
                    className={[
                      'text-[14px] font-light text-brand-black',
                      !row.label ? 'ml-[196px]' : '',
                    ].join(' ')}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      ))}
    </div>
  )
}

export default TechSpecsAccordion
