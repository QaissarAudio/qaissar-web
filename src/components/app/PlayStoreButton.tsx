import Link from 'next/link'

interface PlayStoreButtonProps {
  href?: string
  className?: string
  /** White outline style for dark sections (e.g. download CTA) */
  variant?: 'default' | 'on-dark'
}

function PlayStoreIcon() {
  return (
    <svg className="playstore-button__icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.609 1.814L13.792 12 3.61 22.186a1.004 1.004 0 0 1-.61-.92V2.734a1.004 1.004 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"
      />
    </svg>
  )
}

export function PlayStoreButton({
  href = '#',
  className = '',
  variant = 'default',
}: PlayStoreButtonProps) {
  return (
    <Link
      href={href}
      className={[
        'playstore-button',
        variant === 'on-dark' ? 'playstore-button--on-dark' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <PlayStoreIcon />
      <span className="playstore-button__texts">
        <span className="playstore-button__text-1">GET IT ON</span>
        <span className="playstore-button__text-2">Google Play</span>
      </span>
    </Link>
  )
}

export default PlayStoreButton
