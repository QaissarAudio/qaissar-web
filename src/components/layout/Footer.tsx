import Link from 'next/link'
import { LinkedInButton } from '@/components/layout/LinkedInButton'
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
      { label: 'Qaissar Studio', href: '/studio' },
      { label: 'Qaissar App', href: '/#' },
    ],
  },
]

function FooterArch() {
  return (
    <div className="site-footer__arch" aria-hidden="true">
      <svg
        className="site-footer__arch-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Barely-there warm tint at the belly of the curve — no saturated red */}
          <linearGradient
            id="qaissar-footer-arch-fill"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1A1A1A" />
            <stop offset="55%" stopColor="#1A1A1A" />
            <stop offset="78%" stopColor="#221A1B" />
            <stop offset="100%" stopColor="#1A1A1A" />
          </linearGradient>
        </defs>
        <path
          className="site-footer__arch-fill"
          fill="url(#qaissar-footer-arch-fill)"
          d="M0,80 L0,64 C480,52 960,52 1440,64 L1440,80 Z"
        />
      </svg>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="site-footer text-white">
      <FooterArch />

      <div className="site-footer__body">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Top row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-4 pb-5 md:pt-6">
            <QaissarLogo size="md" variant="light" />
            <p className="text-brand-gray-500 font-light text-sm max-w-md">
              The commercial audio ecosystem.
            </p>
          </div>

          {/* Middle row — 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 py-8">
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
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between py-5">
            <p className="text-xs text-brand-gray-500 font-light">
              © 2026 Qaissar. A Masar Technology brand.
            </p>
            <LinkedInButton />
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
