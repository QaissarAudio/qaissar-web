import Link from 'next/link'
import QaissarLogo from '@/components/logo/QaissarLogo'

const columns = [
  {
    heading: 'Products',
    links: [
      { label: 'QB Mini Smart Amp', href: '/products/qb-mini-smart-amp' },
      { label: 'Ceiling Speaker', href: '/products/ceiling-speaker' },
      { label: 'Wall Speaker', href: '/products/wall-speaker' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'How It Works', href: '/#' },
      { label: 'Markets', href: '/#' },
    ],
  },
  {
    heading: 'Partners',
    links: [
      { label: 'Become a Distributor', href: '/distributor' },
      { label: 'Distributor Login', href: '/#' },
    ],
  },
  {
    heading: 'Ecosystem',
    links: [
      { label: 'AzanPlay ↗', href: 'https://azanplay.com', external: true },
      { label: 'Qaissar App', href: '/#' },
    ],
  },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1A1A' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top row */}
        <div className="flex items-center justify-between pt-5 pb-5">
          <QaissarLogo size="md" variant="light" />
          <p className="text-brand-gray-500 font-light text-sm">The commercial audio ecosystem.</p>
        </div>

        {/* Middle row — 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-15 py-8">
          {columns.map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-brand-gray-200 mb-4">
                {heading}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href, external }) => (
                  <li key={label}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-brand-gray-500 hover:text-white transition-colors font-light"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="text-sm text-brand-gray-500 hover:text-white transition-colors font-light"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr style={{ borderColor: '#333333' }} />

        {/* Bottom row */}
        <div className="flex items-center justify-between py-5">
          <p className="text-xs text-brand-gray-500 font-light">
            © 2026 Qaissar. A Masar Technology brand.
          </p>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/qaissar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Qaissar on LinkedIn"
            className="text-brand-gray-500 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452H17.01v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.588V9h3.31v1.561h.046c.461-.873 1.586-1.794 3.265-1.794 3.492 0 4.138 2.299 4.138 5.29v6.395zM5.337 7.433a1.92 1.92 0 1 1 0-3.84 1.92 1.92 0 0 1 0 3.84zm1.657 13.019H3.68V9h3.314v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
