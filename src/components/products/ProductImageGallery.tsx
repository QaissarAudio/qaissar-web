'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GalleryImage {
  src: string
  alt: string
}

interface ColourGroups {
  black: number[]
  white: number[]
}

export function ProductImageGallery({
  images,
  colourGroups,
}: {
  images: GalleryImage[]
  colourGroups?: ColourGroups
}) {
  const [activeColour, setActiveColour] = useState<'black' | 'white'>('black')
  const [selectedIndex, setSelectedIndex] = useState(
    colourGroups ? colourGroups.black[0] : 0,
  )

  const visibleIndices = colourGroups ? colourGroups[activeColour] : images.map((_, i) => i)
  const selected = images[selectedIndex]

  function handleColourChange(colour: 'black' | 'white') {
    if (!colourGroups) return
    setActiveColour(colour)
    setSelectedIndex(colourGroups[colour][0])
  }

  return (
    <div>
      {/* Colour toggle */}
      {colourGroups && (
        <div className="flex gap-2 mb-4">
          {(['black', 'white'] as const).map((colour) => (
            <button
              key={colour}
              type="button"
              onClick={() => handleColourChange(colour)}
              className={[
                'px-4 py-1 text-[var(--text-body-sm)] font-semibold rounded-full transition-colors duration-150 capitalize',
                activeColour === colour
                  ? 'bg-brand-black text-white'
                  : 'border border-brand-gray-200 text-brand-gray-500 hover:border-brand-black hover:text-brand-black',
              ].join(' ')}
            >
              {colour.charAt(0).toUpperCase() + colour.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div className="relative aspect-square bg-white rounded-[16px] overflow-hidden">
        <Image
          src={selected.src}
          alt={selected.alt}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-3 mt-4">
        {visibleIndices.map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelectedIndex(i)}
            aria-label={images[i].alt}
            aria-current={i === selectedIndex ? 'true' : undefined}
            className={[
              'relative w-20 h-20 rounded-[8px] bg-white overflow-hidden shrink-0 transition-colors duration-150',
              i === selectedIndex
                ? 'border-2 border-brand-black'
                : 'border-2 border-transparent hover:border-brand-gray-200',
            ].join(' ')}
          >
            <Image
              src={images[i].src}
              alt={images[i].alt}
              fill
              className="object-contain"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductImageGallery
