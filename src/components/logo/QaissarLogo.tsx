import React from 'react'

type Size = 'sm' | 'md' | 'lg'
type Variant = 'dark' | 'light'

interface QaissarLogoProps {
  size?: Size
  variant?: Variant
  className?: string
}

const sizeConfig: Record<Size, { ringDiameter: number; fontSize: number; gap: number }> = {
  sm: { ringDiameter: 24, fontSize: 16, gap: 8 },
  md: { ringDiameter: 32, fontSize: 20, gap: 10 },
  lg: { ringDiameter: 48, fontSize: 28, gap: 14 },
}

export function QaissarLogo({ size = 'md', variant = 'dark', className }: QaissarLogoProps) {
  const { ringDiameter, fontSize, gap } = sizeConfig[size]
  const strokeWidth = ringDiameter * 0.08
  const dotRadius = ringDiameter * 0.18
  const dotOffsetX = ringDiameter * 0.6
  const dotOffsetY = ringDiameter * 0.08

  const brandColor = variant === 'dark' ? '#1A1A1A' : '#FFFFFF'
  const svgWidth = ringDiameter + dotRadius * 2

  return (
    <div
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap }}
    >
      {/* Ring + red dot mark */}
      <svg
        width={svgWidth}
        height={ringDiameter}
        viewBox={`0 0 ${svgWidth} ${ringDiameter}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Circle outline ring */}
        <circle
          cx={ringDiameter / 2}
          cy={ringDiameter / 2}
          r={ringDiameter / 2 - strokeWidth / 2}
          stroke={brandColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Red dot — offset to upper-right */}
        <circle
          cx={dotOffsetX}
          cy={dotOffsetY + dotRadius}
          r={dotRadius}
          fill="#E31E24"
        />
      </svg>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: '"Nunito Sans", sans-serif',
          fontWeight: 800,
          fontSize,
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
