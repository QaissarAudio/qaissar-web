import React from 'react'
import QaissarLogo from '@/components/logo/QaissarLogo'

export function Footer() {
  return (
    <footer className="border-t border-brand-gray-200 px-6 py-10 mt-auto">
      <div className="flex items-center justify-between">
        <QaissarLogo size="sm" variant="dark" />
        {/* Footer links will be wired to SiteFooter global in the next prompt */}
        <p className="text-sm text-brand-gray-500">Footer placeholder</p>
      </div>
      <p className="text-xs text-brand-gray-500 mt-6">
        © {new Date().getFullYear()} Qaissar. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
