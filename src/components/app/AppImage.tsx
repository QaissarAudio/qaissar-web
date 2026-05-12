'use client'

import Image from 'next/image'
import { useState } from 'react'

interface AppImageProps {
  src: string
  width: number
  height: number
  alt: string
  className?: string
}

export default function AppImage({ src, width, height, alt, className = '' }: AppImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className={`bg-brand-gray-200 ${className}`}
        style={{ aspectRatio: `${width} / ${height}` }}
        role="img"
        aria-label={alt}
      />
    )
  }

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  )
}
