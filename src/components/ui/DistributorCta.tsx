import Link from 'next/link'

export type DistributorCtaSize = 'sm' | 'compact' | 'menu' | 'page'

interface DistributorCtaProps {
  href?: string
  label?: string
  size?: DistributorCtaSize
  className?: string
  onClick?: () => void
  tabIndex?: number
}

const sizeClass: Record<DistributorCtaSize, string> = {
  sm: '',
  compact: 'nav-cta-pill--compact',
  menu: 'nav-cta-pill--menu',
  page: 'nav-cta-pill--page',
}

export function DistributorCta({
  href = '/distributor',
  label = 'Become a Distributor',
  size = 'sm',
  className = '',
  onClick,
  tabIndex,
}: DistributorCtaProps) {
  return (
    <Link
      href={href}
      tabIndex={tabIndex}
      className={['nav-cta-pill', sizeClass[size], className].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      <span className="nav-cta-pill__label">{label}</span>
    </Link>
  )
}

export default DistributorCta
