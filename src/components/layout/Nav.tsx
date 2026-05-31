'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import QaissarLogo from '@/components/logo/QaissarLogo'
import { DistributorCta } from '@/components/ui/DistributorCta'

const links = [
  { label: 'Products', href: '/products' },
  { label: 'App', href: '/app' },
  { label: 'Studio', href: '/studio' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
]

function navLinkClass(isActive: boolean, size: 'desktop' | 'tablet' | 'mobile' = 'desktop') {
  const sizeClasses =
    size === 'desktop'
      ? 'px-4 py-2 text-[14px] font-semibold'
      : size === 'tablet'
        ? 'nav-link-underline--compact py-2 font-semibold'
        : 'px-4 py-3.5 text-[22px] font-extrabold tracking-tight'

  return [
    'nav-link-underline',
    sizeClasses,
    isActive ? 'nav-link-underline--active text-brand-black' : 'text-brand-gray-800 hover:text-brand-black',
    'transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2 rounded-sm shrink-0',
  ].join(' ')
}

function NavLinks({
  size,
  pathname,
  onNavigate,
}: {
  size: 'desktop' | 'tablet' | 'mobile'
  pathname: string
  onNavigate?: () => void
}) {
  return (
    <>
      {links.map(({ label, href }) => {
        const isActive = href !== '/#' && pathname === href
        return (
          <Link key={label} href={href} className={navLinkClass(isActive, size)} onClick={onNavigate}>
            {label}
          </Link>
        )
      })}
    </>
  )
}

export function Nav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = useCallback(() => setIsOpen(false), [])

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 8)
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return
    menu.inert = !isOpen
  }, [isOpen])

  useEffect(() => {
    if (isOpen) return
    const menu = menuRef.current
    const active = document.activeElement
    if (menu && active instanceof HTMLElement && menu.contains(active)) {
      menuButtonRef.current?.focus({ preventScroll: true })
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, closeMenu])

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw]',
          'pt-[env(safe-area-inset-top)]',
          'transition-[background-color,box-shadow,border-color] duration-300 ease-out',
          isScrolled
            ? 'bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,0,0,0.08)]'
            : 'bg-white/55 shadow-none',
          'backdrop-blur-2xl backdrop-saturate-150',
          'border-b border-black/[0.06]',
          'supports-[backdrop-filter]:bg-white/50',
        ].join(' ')}
      >
        <nav
          className="max-w-7xl mx-auto w-full min-w-0 px-4 sm:px-6 lg:px-8 xl:px-12 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            aria-label="Qaissar home"
            className="shrink-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2"
          >
            <QaissarLogo size="md" variant="dark" />
          </Link>

          {/* Full desktop — xl+ */}
          <div className="hidden xl:flex items-center gap-1 min-w-0">
            <NavLinks size="desktop" pathname={pathname} />
          </div>

          <div className="hidden xl:block shrink-0">
            <DistributorCta />
          </div>

          {/* Tablet landscape — lg to xl */}
          <div className="hidden lg:flex xl:hidden items-center gap-0.5 min-w-0 flex-1 justify-end overflow-hidden">
            <NavLinks size="tablet" pathname={pathname} />
            <DistributorCta size="compact" className="shrink-0 ml-1" />
          </div>

          {/* Mobile menu toggle — below lg */}
          <button
            ref={menuButtonRef}
            type="button"
            className="lg:hidden relative w-10 h-10 shrink-0 flex items-center justify-center rounded-full text-brand-black bg-black/[0.05] hover:bg-black/[0.08] active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40"
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-haspopup="dialog"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="flex flex-col justify-center items-center w-5 h-4 gap-[5px]" aria-hidden="true">
              <span
                className={[
                  'block h-0.5 w-5 bg-current rounded-full transition-all duration-300 origin-center',
                  isOpen ? 'translate-y-[7px] rotate-45' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'block h-0.5 w-5 bg-current rounded-full transition-all duration-300',
                  isOpen ? 'opacity-0 scale-x-0' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'block h-0.5 w-5 bg-current rounded-full transition-all duration-300 origin-center',
                  isOpen ? '-translate-y-[7px] -rotate-45' : '',
                ].join(' ')}
              />
            </span>
          </button>
        </nav>
      </header>

      <div
        ref={menuRef}
        className={[
          'fixed inset-0 z-40 lg:hidden',
          'transition-opacity duration-300 ease-out',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        role={isOpen ? 'dialog' : undefined}
        aria-modal={isOpen ? true : undefined}
        aria-label={isOpen ? 'Site menu' : undefined}
      >
        <button
          type="button"
          className="absolute inset-0 w-full h-full bg-brand-black/20 backdrop-blur-sm"
          onClick={closeMenu}
          tabIndex={isOpen ? 0 : -1}
          aria-label="Close menu overlay"
        />

        <div
          id="mobile-nav"
          className={[
            'absolute top-0 right-0 bottom-0',
            'w-[min(100%,20rem)] sm:w-[min(100%,22rem)]',
            'flex flex-col',
            'bg-white/75 backdrop-blur-3xl backdrop-saturate-150',
            'border-l border-black/[0.06]',
            'shadow-[-8px_0_32px_rgba(0,0,0,0.08)]',
            'pt-[var(--header-total-height)] pb-[env(safe-area-inset-bottom)] px-5 sm:px-6',
            'transition-transform duration-300 ease-out',
            isOpen ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          <nav className="flex flex-col gap-1 mt-4 overflow-y-auto overscroll-contain">
            <NavLinks size="mobile" pathname={pathname} onNavigate={closeMenu} />
          </nav>

          <div className="mt-8 px-1 pb-4 shrink-0">
            <DistributorCta size="menu" onClick={closeMenu} tabIndex={isOpen ? undefined : -1} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
