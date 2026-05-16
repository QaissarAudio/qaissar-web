'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import QaissarLogo from '@/components/logo/QaissarLogo'
import { Button } from '@/components/ui/Button'

const links = [
  { label: 'Products', href: '/products' },
  { label: 'App', href: '/app' },
  { label: 'How It Works', href: '/#' },
  { label: 'About', href: '/about' },
]

export function Nav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Qaissar home">
            <QaissarLogo size="md" variant="dark" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map(({ label, href }) => {
              const isActive = href !== '/#' && pathname === href
              return (
                <Link
                  key={label}
                  href={href}
                  className={[
                    'text-[14px] font-semibold text-brand-black transition-colors hover:text-brand-red',
                    isActive ? 'underline decoration-brand-red underline-offset-4' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:block">
            <Button variant="primary" size="sm" href="/distributor">
              Become a Distributor
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-brand-black"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col px-6 pt-20">
          <button
            className="absolute top-5 right-6 p-2 text-brand-black"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <nav className="flex flex-col gap-8">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[28px] font-extrabold text-brand-black"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-10">
            <Button variant="primary" size="lg" href="/distributor" className="w-full justify-center">
              Become a Distributor
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Nav