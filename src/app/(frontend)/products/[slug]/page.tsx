import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return { title: slug }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params

  return (
    <div className="px-6 py-20 text-center">
      <h1 className="text-4xl">Product: {slug}</h1>
      <p className="mt-4 text-brand-gray-500">Product detail page coming in the next prompt.</p>
    </div>
  )
}
