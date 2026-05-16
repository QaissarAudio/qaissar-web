import Link from 'next/link'
import React from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#E31E24] text-white hover:bg-[#c71a1f] border border-[#E31E24] hover:border-[#c71a1f]',
  secondary:
    'bg-transparent text-[#1A1A1A] border border-[#1A1A1A] border-[1.5px] hover:bg-[#1A1A1A] hover:text-white',
  ghost:
    'bg-transparent text-[#1A1A1A] border-0 hover:underline',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-[var(--text-body-sm)]',
  md: 'px-6 py-3 text-[var(--text-body)]',
  lg: 'px-8 py-4 text-[var(--text-body-lg)]',
}

const baseClasses =
  'inline-flex items-center justify-center font-semibold transition-colors duration-150 cursor-pointer'

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={{ fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600 }}
    >
      {children}
    </button>
  )
}

export default Button
