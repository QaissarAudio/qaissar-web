import Link from 'next/link'

type LearnMoreCtaButtonProps = {
  href: string
  label: string
  external?: boolean
  variant?: 'studio-primary' | 'studio-ghost'
  className?: string
}

export function LearnMoreCtaButton({
  href,
  label,
  external = false,
  variant = 'studio-primary',
  className = '',
}: LearnMoreCtaButtonProps) {
  const variantClass =
    variant === 'studio-ghost'
      ? 'learn-more-btn--studio-ghost'
      : 'learn-more-btn--studio'

  const classNames = ['learn-more-btn', variantClass, className]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <span className="learn-more-btn__circle" aria-hidden="true">
        <span className="learn-more-btn__icon learn-more-btn__arrow" />
      </span>
      <span className="learn-more-btn__text">{label}</span>
    </>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className={classNames}>
      {inner}
    </Link>
  )
}

export default LearnMoreCtaButton
