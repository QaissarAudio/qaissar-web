'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GalleryImage {
  src: string
  alt: string
}

export function ProductImageGallery({ images }: { images: GalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = images[selectedIndex]

  return (
    <div>
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
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelectedIndex(i)}
            aria-label={img.alt}
            aria-current={i === selectedIndex ? 'true' : undefined}
            className={[
              'relative w-20 h-20 rounded-[8px] bg-white overflow-hidden shrink-0 transition-colors duration-150',
              i === selectedIndex
                ? 'border-2 border-brand-black'
                : 'border-2 border-transparent hover:border-brand-gray-200',
            ].join(' ')}
          >
            <Image
              src={img.src}
              alt={img.alt}
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
