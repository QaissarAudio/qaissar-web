import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function HomePage() {
  return (
    <div className="px-6 py-20 text-center">
      <h1 className="text-4xl">Homepage</h1>
      <p className="mt-4 text-brand-gray-500">Page content coming in the next prompt.</p>
    </div>
  )
}
