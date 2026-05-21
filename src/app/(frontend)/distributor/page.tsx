import type { Metadata } from 'next'
import { TrendingUp, Package, Headphones, MapPin, Mail, Globe, Building2, Wifi } from 'lucide-react'
import { DistributorForm } from '@/components/distributor/DistributorForm'

export const metadata: Metadata = {
  title: 'Become a Distributor — Qaissar',
  description: 'Join the Qaissar distributor network across GCC, Iraq, and Southeast Asia.',
}

const benefits = [
  {
    icon: TrendingUp,
    title: 'Growing Market',
    body: 'Commercial audio for Muslim-majority markets is underserved and high-growth. Qaissar is purpose-built for it.',
  },
  {
    icon: Package,
    title: 'Complete Ecosystem',
    body: 'One amplifier, multiple speakers, one app. A complete system your customers can buy from a single distributor.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    body: 'Technical training, marketing materials, and direct support from the Qaissar team for every authorised distributor.',
  },
]

const markets = [
  {
    icon: Building2,
    region: 'Gulf Cooperation Council',
    countries: 'Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman',
  },
  {
    icon: Globe,
    region: 'Levant & North Africa',
    countries: 'Iraq, Jordan, Egypt',
  },
  {
    icon: Wifi,
    region: 'Southeast Asia',
    countries: 'Malaysia, Indonesia, Pakistan, Bangladesh',
  },
]

export default function DistributorPage() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <section className="bg-white pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block text-[var(--text-caption)] font-semibold uppercase tracking-widest text-brand-red mb-4">
            Distributor Programme
          </span>
          <h1 className="text-[var(--text-h2)] md:text-[var(--text-display)] font-extrabold text-brand-black leading-tight">
            Bring Qaissar to Your Market.
          </h1>
          <p className="mt-6 text-[var(--text-body-lg)] text-brand-gray-500 font-light max-w-2xl mx-auto">
            We partner with AV and CCTV distributors across GCC, Iraq, and Southeast Asia. Join the network
            and offer your customers a complete wireless commercial audio ecosystem.
          </p>
          <div className="mt-12 flex justify-center gap-16">
            <div>
              <p className="text-[var(--text-h3)] font-extrabold text-brand-black">GCC + SE Asia</p>
              <p className="text-[var(--text-body-sm)] text-brand-gray-500 font-light mt-1">Active Markets</p>
            </div>
            <div>
              <p className="text-[var(--text-h3)] font-extrabold text-brand-black">3 Products</p>
              <p className="text-[var(--text-body-sm)] text-brand-gray-500 font-light mt-1">Growing Ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Benefits */}
      <section className="bg-brand-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-[var(--text-h2)] font-extrabold text-brand-black text-center">
            Why Partner with Qaissar?
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-[var(--radius-lg)] p-8">
                <Icon size={28} className="text-brand-red" />
                <p className="text-[var(--text-h4)] font-extrabold text-brand-black mt-4 mb-2">{title}</p>
                <p className="text-[var(--text-body)] text-brand-gray-500 font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Form */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left col */}
            <div className="lg:col-span-5">
              <span className="text-brand-red text-[var(--text-body-sm)] font-semibold uppercase tracking-wider">
                Apply Now
              </span>
              <h2 className="text-[var(--text-h2)] font-extrabold text-brand-black mt-2">
                Let&apos;s Talk.
              </h2>
              <p className="text-[var(--text-body)] text-brand-gray-500 font-light leading-relaxed mt-4">
                Fill in the form and our team will get back to you within 2 business days. We review every application personally.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-brand-red shrink-0" />
                  <span className="text-[var(--text-body-sm)] text-brand-gray-500 font-light">Shenzhen, China (HQ)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-red shrink-0" />
                  <span className="text-[var(--text-body-sm)] text-brand-gray-500 font-light">sales@qaissar.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-brand-red shrink-0" />
                  <span className="text-[var(--text-body-sm)] text-brand-gray-500 font-light">Serving GCC, Iraq &amp; Southeast Asia</span>
                </div>
              </div>
            </div>
            {/* Right col */}
            <div className="lg:col-span-7">
              <DistributorForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Markets */}
      <section className="bg-brand-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <h2 className="text-[var(--text-h2)] font-extrabold text-brand-black">
              Where We&apos;re Active
            </h2>
            <p className="mt-4 text-[var(--text-body)] text-brand-gray-500 font-light">
              Authorised distributors currently serve these regions.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {markets.map(({ icon: Icon, region, countries }) => (
              <div key={region} className="bg-white rounded-[var(--radius-lg)] p-8">
                <Icon size={28} className="text-brand-red" />
                <p className="text-[var(--text-h4)] font-extrabold text-brand-black mt-4 mb-2">{region}</p>
                <p className="text-[var(--text-body)] text-brand-gray-500 font-light leading-relaxed">{countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — CTA Band */}
      <section className="bg-brand-black py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[var(--text-h2)] font-extrabold text-white">
            Ready to Apply?
          </h2>
          <p className="text-[var(--text-body)] text-brand-gray-500 font-light mt-4">
            Scroll up or email us directly:
          </p>
          <a
            href="mailto:sales@qaissar.com"
            className="text-brand-red hover:underline text-[var(--text-body)] block mt-2"
          >
            sales@qaissar.com
          </a>
        </div>
      </section>
    </main>
  )
}
