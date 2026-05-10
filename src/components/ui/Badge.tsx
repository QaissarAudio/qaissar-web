import React from 'react'

type Variant = 'available' | 'coming-soon' | 'featured'

interface BadgeProps {
  variant: Variant
  children?: React.ReactNode
  className?: string
}

const variantConfig: Record<Variant, { dotColor: string; label: string; textColor: string; bgColor: string }> = {
  available: {
    dotColor: '#22c55e',
    label: 'Available',
    textColor: '#166534',
    bgColor: '#dcfce7',
  },
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
}

export function Badge({ variant, children, className = '' }: BadgeProps) {
  const { dotColor, label, textColor, bgColor } = variantConfig[variant]

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}
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
