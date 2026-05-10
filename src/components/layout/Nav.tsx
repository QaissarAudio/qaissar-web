import React from 'react'
import QaissarLogo from '@/components/logo/QaissarLogo'

export function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-brand-gray-200">
      <QaissarLogo size="md" variant="dark" />
      {/* Navigation links will be wired to SiteNavigation global in the next prompt */}
      <div className="flex items-center gap-6">
        <span className="text-sm text-brand-gray-500">Navigation placeholder</span>
      </div>
    </nav>
  )
}

export default Nav
