import Link from 'next/link'

interface LinkCtaProps {
  href: string
  label: string
  className?: string
  variant?: 'default' | 'accent' | 'light'
}

function ArrowIcon() {
  return (
    <svg width="10" height="8" viewBox="0 0 13 10" aria-hidden="true">
      <path
        d="M1 5h11M7 1l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function LinkCta({ href, label, className = '', variant = 'accent' }: LinkCtaProps) {
  return (
    <Link
      href={href}
      className={['link-cta', `link-cta--${variant}`, className].filter(Boolean).join(' ')}
    >
      <span className="link-cta__text">{label}</span>
      <ArrowIcon />
    </Link>
  )
}

export default LinkCta
