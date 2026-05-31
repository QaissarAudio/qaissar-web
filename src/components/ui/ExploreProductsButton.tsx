import Link from 'next/link'

interface ExploreProductsButtonProps {
  href?: string
  label?: string
  className?: string
}

export function ExploreProductsButton({
  href = '/products',
  label = 'Explore Products',
  className = '',
}: ExploreProductsButtonProps) {
  return (
    <Link
      href={href}
      className={['learn-more-btn', 'learn-more-btn--hero', className].filter(Boolean).join(' ')}
    >
      <span className="learn-more-btn__circle" aria-hidden="true">
        <span className="learn-more-btn__icon learn-more-btn__arrow" />
      </span>
      <span className="learn-more-btn__text">{label}</span>
    </Link>
  )
}

export default ExploreProductsButton
