import React from 'react'

type Size = 'sm' | 'md' | 'lg'
type Variant = 'dark' | 'light'

interface QaissarLogoProps {
  size?: Size
  variant?: Variant
  className?: string
}

// Original SVG: 1024x1024 canvas
// Ring: cx=450, cy=480, r=220, stroke-width=90
// Dot: cx=770, cy=670, r=80
// viewBox="180 220 680 600" crops to just the mark

export function QaissarLogo({ size = 'md', variant = 'dark', className }: QaissarLogoProps) {
  const brandColor = variant === 'dark' ? '#1A1A1A' : '#FFFFFF'

  const sizeMap = { sm: 32, md: 44, lg: 64 }
  const fontSizeMap = { sm: 15, md: 20, lg: 28 }
  const gapMap = { sm: 8, md: 10, lg: 14 }

  const height = sizeMap[size]
  const width = Math.round(height * (680 / 600))

  return (
    <div
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: gapMap[size] }}
    >
      <svg
        width={width}
        height={height}
        viewBox="180 220 680 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Black ring */}
        <circle
          cx="450"
          cy="480"
          r="220"
          fill="none"
          stroke={brandColor}
          strokeWidth="90"
        />
        {/* Red dot — bottom right, outside ring */}
        <circle
          cx="770"
          cy="670"
          r="80"
          fill="#E31E24"
        />
      </svg>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: '"Nunito Sans", sans-serif',
          fontWeight: 800,
          fontSize: fontSizeMap[size],
          color: brandColor,
          letterSpacing: '0.02em',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        Qaissar
      </span>
    </div>
  )
}

export default QaissarLogo