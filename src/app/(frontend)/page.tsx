import type { Metadata } from 'next'
import Image from 'next/image'
import { Speaker } from 'lucide-react'
import { DistributorCta } from '@/components/ui/DistributorCta'
import { ExploreProductsButton } from '@/components/ui/ExploreProductsButton'
import { LinkCta } from '@/components/ui/LinkCta'
import { QaissarSoundSection } from '@/components/app/QaissarSoundSection'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Qaissar — Commercial Audio Ecosystem',
  description:
    'Qaissar is the wireless commercial audio ecosystem for mosques, hotels, schools, and retail spaces across Muslim-majority markets.',
}

// Reusable section label
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-brand-red text-[18px] sm:text-[22px] md:text-[26px] font-semibold uppercase tracking-[2px]">
      {children}
    </p>
  )
}

// Reusable AzanPlay badge
function AzanPlayBadge({ label }: { label?: string }) {
  const desktopText = label ?? 'Powered by AzanPlay ↗'

  return (
    <a
      href="https://azanplay.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80 sm:gap-2 sm:px-6 sm:py-4 sm:text-base md:px-8 md:py-5"
      style={{ backgroundColor: '#1A1A1A', fontFamily: '"Nunito Sans", sans-serif' }}
    >
      <span
        className="h-3.5 w-3.5 shrink-0 rounded-full sm:h-[18px] sm:w-[18px]"
        style={{ backgroundColor: '#E31E24' }}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap sm:hidden">AzanPlay ↗</span>
      <span className="hidden whitespace-nowrap sm:inline">{desktopText}</span>
    </a>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: 'calc(100dvh - var(--header-total-height))' }}
      >
        {/* Background image */}
        <Image
          src="/images/hero-shot.png"
          alt="Business owner controlling Qaissar audio system"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 100%)' }}
        />

        {/* Content */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex items-start pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16"
          style={{ minHeight: 'calc(100dvh - var(--header-total-height))' }}
        >
          <div className="max-w-[600px]">

            <p className="text-[18px] font-semibold uppercase tracking-[2px]" style={{ color: '#E31E24' }}>
              Commercial Audio Ecosystem
            </p>

            <h1 className="heading-display font-extrabold mt-4 md:text-[56px] xl:text-[64px]" style={{ color: '#FFFFFF' }}>
              Every prayer. Every announcement. Every space.
            </h1>

            <p className="text-[18px] sm:text-[22px] md:text-[24px] font-light mt-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
              One device. Every need.
            </p>

            <p className="text-[16px] font-light max-w-[480px] mt-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Qaissar is the wireless commercial audio ecosystem
              for mosques, hotels, schools, and retail spaces
              across Muslim-majority markets. Prayer time automation,
              scheduled announcements, and background music —
              all from one app.
            </p>

            <div className="mt-10 flex flex-row flex-wrap items-center gap-3 sm:gap-6 md:gap-8">
              <AzanPlayBadge />
              <ExploreProductsButton className="shrink-0" />
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: FOUR PILLARS ─────────────────────────────────── */}
      <section className="bg-white py-2 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <SectionLabel>Why Qaissar</SectionLabel>
          <h2 className="heading-section font-extrabold text-brand-black mt-4 mb-12">
            Built for the way your business works.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 — Prayer time automation */}
            <div className="border border-brand-gray-200 rounded-[12px] p-8">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                {/* Left minaret */}
                <rect x="2" y="12" width="3" height="16" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
                <path d="M2 12 Q3.5 9 5 12" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
                {/* Right minaret */}
                <rect x="27" y="12" width="3" height="16" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
                <path d="M27 12 Q28.5 9 30 12" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
                {/* Main dome */}
                <path d="M8 18 Q16 4 24 18" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                {/* Main body */}
                <rect x="8" y="18" width="16" height="10" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                {/* Arched door */}
                <path d="M13 28 L13 23 Q16 20 19 23 L19 28" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-[20px] font-extrabold text-brand-black mt-5">
                Prayer time automation
              </h3>
              <p className="text-[15px] font-light text-brand-gray-800 mt-3 leading-relaxed">
                Automated Azan scheduling with Hijri and Gregorian calendar. Mute settings
                before and after prayer. No manual intervention required.
              </p>
            </div>

            {/* Card 2 — Scheduled announcements */}
            <div className="border border-brand-gray-200 rounded-[12px] p-8">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="12" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                <line x1="16" y1="8" x2="16" y2="16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
                <line x1="16" y1="16" x2="22" y2="16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3 className="text-[20px] font-extrabold text-brand-black mt-5">
                Scheduled announcements
              </h3>
              <p className="text-[15px] font-light text-brand-gray-800 mt-3 leading-relaxed">
                Set audio messages and ads by time, day, or prayer time — from the app.
                AI text-to-speech in Arabic and English included.
              </p>
            </div>

            {/* Card 3 — Background music control */}
            <div className="border border-brand-gray-200 rounded-[12px] p-8">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M12 26V10l16-4v16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="8" cy="26" r="4" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="22" r="4" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
              </svg>
              <h3 className="text-[20px] font-extrabold text-brand-black mt-5">
                Background music control
              </h3>
              <p className="text-[15px] font-light text-brand-gray-800 mt-3 leading-relaxed">
                Bluetooth, internet radio, SD card, USB — all sources managed remotely.
                EQ, volume, and presets controlled from your phone.
              </p>
            </div>

            {/* Card 4 — One app, every location */}
            <div className="border border-brand-gray-200 rounded-[12px] p-8">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="9" y="2" width="14" height="28" rx="3" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                <circle cx="16" cy="26" r="1.5" fill="#1A1A1A"/>
                <line x1="13" y1="6" x2="19" y2="6" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <h3 className="text-[20px] font-extrabold text-brand-black mt-5">
                One app, every location
              </h3>
              <p className="text-[15px] font-light text-brand-gray-800 mt-3 leading-relaxed">
                The Qaissar App on iOS and Android gives you complete control of every
                device, from anywhere.
              </p>
            </div>

          </div>
        </div>
      </section>

      <QaissarSoundSection />

      {/* ── SECTION 3: APP SHOWCASE ──────────────────────────────────── */}
      <section className="bg-brand-gray-100 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <SectionLabel>Qaissar App</SectionLabel>
              <h2 className="heading-section font-extrabold text-brand-black mt-3 max-w-[480px]">
                Everything in your hands.
              </h2>

              <ul className="mt-10 flex flex-col gap-4">
                {[
                  'Schedule prayer times and announcements by the hour, day, or week',
                  'Switch audio sources — Bluetooth, internet radio, SD card, USB',
                  'AI text-to-speech announcements in Arabic and English',
                  'Adjust EQ, volume, and microphone settings remotely',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="w-2 h-2 rounded-full bg-brand-red mt-[6px] shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-[16px] font-light text-brand-gray-800 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <AzanPlayBadge label="Includes AzanPlay — prayer time automation ↗" />
              </div>
            </div>

            {/* Right — app hand image */}
            <div style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
              <img
                src="/images/app-hand.png"
                alt="Qaissar app on iPhone held in hand"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.15))',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4: USE CASES ─────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <SectionLabel>Who it&apos;s for</SectionLabel>
          <h2 className="heading-section font-extrabold text-brand-black mt-3 mb-12">
            Built for every space.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 — Mosques */}
            <div className="p-8 border border-brand-gray-200 rounded-[12px] hover:border-brand-black transition-colors duration-200 cursor-default">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                {/* Left minaret */}
                <rect x="2" y="12" width="3" height="16" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
                <path d="M2 12 Q3.5 9 5 12" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
                {/* Right minaret */}
                <rect x="27" y="12" width="3" height="16" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
                <path d="M27 12 Q28.5 9 30 12" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
                {/* Main dome */}
                <path d="M8 18 Q16 4 24 18" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                {/* Main body */}
                <rect x="8" y="18" width="16" height="10" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                {/* Arched door */}
                <path d="M13 28 L13 23 Q16 20 19 23 L19 28" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-[18px] font-extrabold text-brand-black mt-4">Mosques</h3>
              <p className="text-[14px] font-light text-brand-gray-500 mt-2 leading-relaxed">
                Automated Azan, mute settings, and prayer scheduling — hands-free.
              </p>
            </div>

            {/* Card 2 — Hotels */}
            <div className="p-8 border border-brand-gray-200 rounded-[12px] hover:border-brand-black transition-colors duration-200 cursor-default">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="4" y="8" width="24" height="22" rx="1" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                <path d="M4 8L16 2l12 6" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                <rect x="10" y="18" width="4" height="6" rx="0.5" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
                <rect x="18" y="18" width="4" height="6" rx="0.5" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
                <rect x="10" y="11" width="4" height="4" rx="0.5" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
                <rect x="18" y="11" width="4" height="4" rx="0.5" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
              </svg>
              <h3 className="text-[18px] font-extrabold text-brand-black mt-4">Hotels &amp; Hospitality</h3>
              <p className="text-[14px] font-light text-brand-gray-500 mt-2 leading-relaxed">
                Background music and prayer compliance across every floor.
              </p>
            </div>

            {/* Card 3 — Hospitals */}
            <div className="p-8 border border-brand-gray-200 rounded-[12px] hover:border-brand-black transition-colors duration-200 cursor-default">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="12" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                <line x1="16" y1="10" x2="16" y2="22" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
                <line x1="10" y1="16" x2="22" y2="16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3 className="text-[18px] font-extrabold text-brand-black mt-4">Hospitals &amp; Clinics</h3>
              <p className="text-[14px] font-light text-brand-gray-500 mt-2 leading-relaxed">
                Scheduled announcements and compliant audio zones.
              </p>
            </div>

            {/* Card 4 — Schools */}
            <div className="p-8 border border-brand-gray-200 rounded-[12px] hover:border-brand-black transition-colors duration-200 cursor-default">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M16 4L2 12l14 8 14-8-14-8z" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                <path d="M6 15v8c0 0 4 4 10 4s10-4 10-4v-8" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <line x1="28" y1="12" x2="28" y2="22" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3 className="text-[18px] font-extrabold text-brand-black mt-4">Schools &amp; Universities</h3>
              <p className="text-[14px] font-light text-brand-gray-500 mt-2 leading-relaxed">
                Bell schedules, announcements, and prayer times from one device.
              </p>
            </div>

            {/* Card 5 — Retail */}
            <div className="p-8 border border-brand-gray-200 rounded-[12px] hover:border-brand-black transition-colors duration-200 cursor-default">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M8 4h16l3 8H5L8 4z" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                <rect x="5" y="12" width="22" height="16" rx="1" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                <path d="M12 12v4a4 4 0 0 0 8 0v-4" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </svg>
              <h3 className="text-[18px] font-extrabold text-brand-black mt-4">Retail &amp; Malls</h3>
              <p className="text-[14px] font-light text-brand-gray-500 mt-2 leading-relaxed">
                Atmosphere music with automatic prayer time compliance.
              </p>
            </div>

            {/* Card 6 — Restaurants */}
            <div className="p-8 border border-brand-gray-200 rounded-[12px] hover:border-brand-black transition-colors duration-200 cursor-default">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <line x1="10" y1="4" x2="10" y2="28" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 4v10a4 4 0 0 0 8 0V4" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <line x1="22" y1="4" x2="22" y2="28" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 4c0 0 8 3 8 10" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </svg>
              <h3 className="text-[18px] font-extrabold text-brand-black mt-4">Restaurants &amp; Cafes</h3>
              <p className="text-[14px] font-light text-brand-gray-500 mt-2 leading-relaxed">
                Set the mood and stay compliant — without touching the system daily.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: PRODUCT SHOWCASE ──────────────────────────────── */}
      <section className="bg-brand-gray-100 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <SectionLabel>Products</SectionLabel>
          <h2 className="heading-section font-extrabold text-brand-black mt-3">
            One ecosystem. Every space.
          </h2>
          <p className="text-[20px] font-light text-brand-gray-500 mt-4 mb-14">
            Start with the QB Mini Smart Amp and build from there.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Product 1 — QB Mini Smart Amp */}
            <div className="bg-white rounded-[16px] p-8">
              <div className="aspect-square rounded-[12px] bg-white overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/products/qb-mini/1.png"
                  width={600}
                  height={400}
                  alt="QB Mini Smart Amp"
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-[20px] font-extrabold text-brand-black mt-6">QB Mini Smart Amp</h3>
              <p className="text-[14px] font-light text-brand-gray-500 mt-2 leading-relaxed">
                90W wireless commercial amplifier with app control, prayer scheduling, and AI announcements.
              </p>
              <div className="mt-4">
                <Badge variant="available" />
              </div>
              <LinkCta
                href="/products/qb-mini-smart-amp"
                label="Learn more"
                className="mt-3"
              />
            </div>

            {/* Product 2 — Ceiling Speaker */}
            <div className="bg-white rounded-[16px] p-8">
              <div className="aspect-square rounded-[12px] bg-white overflow-hidden flex items-center justify-center">
                <Image src="/images/qcs-pro/1.png" width={600} height={600} alt="Qaissar CS Pro" className="object-contain w-full h-full" />
              </div>
              <h3 className="text-[20px] font-extrabold text-brand-black mt-6">Qaissar CS Pro</h3>
              <p className="text-[14px] font-light text-brand-gray-500 mt-2 leading-relaxed">
                6.5 inch 30W full range ceiling speaker for commercial spaces.
              </p>
              <div className="mt-4">
                <Badge variant="available" />
              </div>
              <LinkCta
                href="/products/qaissar-cs-pro"
                label="Learn more"
                className="mt-3"
              />
            </div>

            {/* Product 3 — WS Pro */}
            <div className="bg-white rounded-[16px] p-8">
              <div className="aspect-square rounded-[12px] bg-white overflow-hidden flex items-center justify-center">
                <Image src="/images/ws-pro/1.png" width={600} height={600} alt="Qaissar WS Pro" className="object-contain w-full h-full" />
              </div>
              <h3 className="text-[20px] font-extrabold text-brand-black mt-6">Qaissar WS Pro</h3>
              <p className="text-[14px] font-light text-brand-gray-500 mt-2 leading-relaxed">
                50W to 150W wall mounted speaker in black and white, with an adjustable bracket.
              </p>
              <div className="mt-4">
                <Badge variant="available" />
              </div>
              <LinkCta
                href="/products/qaissar-ws-pro"
                label="Learn more"
                className="mt-3"
              />
            </div>

          </div>

          <div className="flex justify-center mt-12">
            <LinkCta href="/products" label="View all products" />
          </div>

        </div>
      </section>

      {/* ── SECTION 6: CTA BAND ──────────────────────────────────────── */}
      <section className="py-20 lg:py-20 px-6 lg:px-12 text-center" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-section font-extrabold text-white">
            Ready to bring Qaissar to your market?
          </h2>
          <p className="text-[20px] font-light text-brand-gray-500 mt-4">
            We partner with AV and CCTV distributors across GCC, Iraq, and Southeast Asia.
          </p>
          <div className="mt-10">
            <DistributorCta
              size="page"
              label="Apply to Become a Distributor"
            />
          </div>
        </div>
      </section>
    </>
  )
}
