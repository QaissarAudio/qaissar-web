'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'

type Category = 'All' | 'Smart Amplifiers' | 'Speakers'

type Product = {
  slug: string
  name: string
  category: 'Smart Amplifiers' | 'Speakers'
  description: string
  status: 'available'
}

const products: Product[] = [
  {
    slug: 'qb-mini-smart-amp',
    name: 'QB Mini Smart Amp',
    category: 'Smart Amplifiers',
    description:
      '90W wireless commercial amplifier with app control, prayer scheduling, and AI announcements.',
    status: 'available',
  },
  {
    slug: 'qaissar-ceiling-speaker',
    name: 'Qaissar Ceiling Speaker',
    category: 'Speakers',
    description:
      '6.5 inch 30W full range ceiling speaker for commercial spaces. Supports the QB Mini ecosystem.',
    status: 'available',
  },
  {
    slug: 'qaissar-wall-speaker',
    name: 'Qaissar Wall Speaker',
    category: 'Speakers',
    description:
      '50W to 150W wall mounted speaker. Compact, powerful, and built for commercial environments.',
    status: 'available',
  },
]

const tabs: Category[] = ['All', 'Smart Amplifiers', 'Speakers']

export function ProductGrid() {
  const [activeTab, setActiveTab] = useState<Category>('All')

  const filtered =
    activeTab === 'All' ? products : products.filter((p) => p.category === activeTab)

  return (
    <>
      {/* Filter tabs */}
      <div className="flex gap-2 border-b border-brand-gray-200 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={[
              'px-4 py-2 text-[14px] font-semibold transition-colors -mb-px',
              activeTab === tab
                ? 'text-brand-black border-b-2 border-brand-black'
                : 'text-brand-gray-500 hover:text-brand-black',
            ].join(' ')}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {filtered.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group block hover:scale-[1.01] transition-transform duration-300"
          >
            {/* Image placeholder */}
            <div className="aspect-square rounded-[16px] bg-brand-gray-100 flex items-center justify-center">
              <span className="text-brand-gray-500 text-[14px] text-center px-4">
                {product.name}
              </span>
            </div>

            {/* Product info */}
            <div className="pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[1px] text-brand-gray-500">
                {product.category}
              </p>
              <h2 className="text-[20px] font-extrabold text-brand-black mt-1">
                {product.name}
              </h2>
              <p className="text-[14px] font-light text-brand-gray-500 mt-1.5 leading-snug line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-3">
                <Badge variant={product.status} />
                <span className="text-brand-red text-[13px] font-semibold group-hover:underline">
                  View product →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default ProductGrid
