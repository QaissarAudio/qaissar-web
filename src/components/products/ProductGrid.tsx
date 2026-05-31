'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Speaker } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { LinkCta } from '@/components/ui/LinkCta'

type Category = 'All' | 'Smart Amplifiers' | 'Speakers'

type Product = {
  slug: string
  name: string
  category: 'Smart Amplifiers' | 'Speakers'
  description: string
  status: 'available'
  image?: string
}

const products: Product[] = [
  {
    slug: 'qb-mini-smart-amp',
    name: 'QB Mini Smart Amp',
    category: 'Smart Amplifiers',
    description:
      '90W wireless commercial amplifier with app control, prayer scheduling, and AI announcements.',
    status: 'available',
    image: '/images/products/qb-mini/1.png',
  },
  {
    slug: 'qaissar-cs-pro',
    name: 'Qaissar CS Pro',
    category: 'Speakers',
    description:
      '6.5 inch 30W full range ceiling speaker for commercial spaces. Supports the QB Mini ecosystem.',
    status: 'available',
    image: '/images/qcs-pro/1.png',
  },
  {
    slug: 'qaissar-ws-pro',
    name: 'Qaissar WS Pro',
    category: 'Speakers',
    description:
      '50W to 150W wall mounted speaker in black and white, with an adjustable bracket.',
    status: 'available',
    image: '/images/ws-pro/1.png',
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
          <article
            key={product.slug}
            className="group hover:scale-[1.01] transition-transform duration-300"
          >
            <Link href={`/products/${product.slug}`} className="block">
              <div
                className={`aspect-square rounded-[16px] overflow-hidden flex items-center justify-center ${product.image ? 'bg-white' : 'bg-brand-gray-100'}`}
              >
                {product.image ? (
                  <Image
                    src={product.image}
                    width={600}
                    height={600}
                    alt={product.name}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <Speaker size={48} className="text-brand-gray-200" />
                )}
              </div>

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
                <div className="mt-3">
                  <Badge variant={product.status} />
                </div>
              </div>
            </Link>
            <LinkCta
              href={`/products/${product.slug}`}
              label="View product"
              className="mt-2"
            />
          </article>
        ))}
      </div>
    </>
  )
}

export default ProductGrid
