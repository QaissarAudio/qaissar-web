import React from 'react'

type Variant = 'available' | 'coming-soon' | 'featured'

interface BadgeProps {
  variant: Variant
  children?: React.ReactNode
  className?: string
}

export function Badge({ variant, children, className = '' }: BadgeProps) {
  if (variant === 'available') {
    return (
      <span className={`inline-flex items-center gap-1.5 ${className}`}>
        <span
          className="w-1.5 h-1.5 rounded-full bg-brand-gray-500 shrink-0"
          aria-hidden="true"
        />
        <span className="text-[12px] font-light text-brand-gray-500">
          {children ?? 'Available'}
        </span>
      </span>
    )
  }

  const pillConfig = {
    'coming-soon': {
      dotColor: '#9ca3af',
      label: 'Coming Soon',
      textColor: '#374151',
      bgColor: '#f3f4f6',
    },
    featured: {
      dotColor: '#E31E24',
      label: 'Featured',
      textColor: '#FFFFFF',
      bgColor: '#E31E24',
    },
  } as const

  const { dotColor, label, textColor, bgColor } = pillConfig[variant]

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[var(--text-caption)] font-semibold ${className}`}
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: dotColor,
          flexShrink: 0,
          display: 'inline-block',
        }}
        aria-hidden="true"
      />
      {children ?? label}
    </span>
  )
}

export default Badge
