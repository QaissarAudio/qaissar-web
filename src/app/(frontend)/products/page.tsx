import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { ProductGrid } from '@/components/products/ProductGrid'

export const metadata: Metadata = {
  title: 'Products — Qaissar',
  description:
    'Explore the Qaissar commercial audio ecosystem — smart amplifiers, ceiling speakers, and wall speakers for Muslim-majority markets.',
}

export default function ProductsPage() {
  return (
    <>
      {/* Page header + filter + grid */}
      <section className="bg-white pt-[60px] pb-[60px] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-brand-red text-[14px] font-semibold uppercase tracking-[2px]">
            Our Products
          </p>
          <h1 className="text-[32px] lg:text-[48px] font-extrabold text-brand-black mt-3 leading-tight">
            The Qaissar Ecosystem
          </h1>
          <p className="text-[18px] font-light text-brand-gray-500 mt-4 max-w-[600px] leading-relaxed">
            Every product in the Qaissar lineup is designed to work together — from a single
            amplifier to a full commercial audio system.
          </p>

          <ProductGrid />
        </div>
      </section>

      {/* CTA Band */}
      <section
        className="py-[80px] px-6 lg:px-12 text-center"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[40px] font-extrabold text-white leading-tight">
            Interested in distributing Qaissar?
          </h2>
          <p className="text-[18px] font-light text-brand-gray-500 mt-3">
            We work with AV and CCTV distributors across GCC, Iraq, and Southeast Asia.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/distributor">
              Become a Distributor
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
