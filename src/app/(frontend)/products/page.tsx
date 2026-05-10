import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
}

export default function ProductsPage() {
  return (
    <div className="px-6 py-20 text-center">
      <h1 className="text-4xl">Products</h1>
      <p className="mt-4 text-brand-gray-500">Product catalog coming in the next prompt.</p>
    </div>
  )
}
