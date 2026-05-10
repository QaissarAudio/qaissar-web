import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <div className="px-6 py-20 text-center">
      <h1 className="text-4xl">About Qaissar</h1>
      <p className="mt-4 text-brand-gray-500">About page coming in the next prompt.</p>
    </div>
  )
}
