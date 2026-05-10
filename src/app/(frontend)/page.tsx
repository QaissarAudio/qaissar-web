import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Qaissar — Commercial Audio Ecosystem',
  description:
    'Qaissar is the wireless commercial audio ecosystem for mosques, hotels, schools, and retail spaces across Muslim-majority markets.',
}

// Reusable section label
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-brand-red text-[26px] font-semibold uppercase tracking-[2px]">
      {children}
    </p>
  )
}

// Reusable AzanPlay badge
function AzanPlayBadge({ label = 'Powered by AzanPlay ↗' }: { label?: string }) {
  return (
    
    <a
      href="https://azanplay.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full px-8 py-5 hover:opacity-80 transition-opacity"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          backgroundColor: '#E31E24',
          display: 'inline-block',
          flexShrink: 0,
        }}
      />
      <span style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif' }}>
        {label}
      </span>
    </a>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section className="bg-white px-6 lg:px-12 pt-16 pb-16 lg:pt-24 lg:pb-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">

          {/* Left column */}
          <div>
            <SectionLabel>Commercial Audio Ecosystem</SectionLabel>

            <h1 className="text-[40px] lg:text-[64px] font-extrabold text-brand-black leading-[1.1] mt-4">
              Every prayer. Every announcement. Every space.
            </h1>

            <p className="text-[24px] font-light text-brand-gray-500 mt-4">
              One device. Every need.
            </p>

            <p className="text-[16px] font-light text-brand-gray-800 max-w-[480px] mt-6 leading-relaxed">
              Qaissar is the wireless commercial audio ecosystem for mosques, hotels, schools,
              and retail spaces across Muslim-majority markets. Prayer time automation,
              scheduled announcements, and background music — all from one app.
            </p>

         <div className="flex flex-wrap items-center gap-8 mt-10">
  <AzanPlayBadge />
  <Button variant="ghost" size="lg" href="/products">
    Explore Products →
  </Button>
</div>
              </div>

          {/* Right column — product image placeholder */}
          <div className="h-[480px] rounded-[16px] bg-brand-gray-100 flex items-center justify-center">
            <span className="text-brand-gray-500 text-[14px]">QB Mini Smart Amp</span>
          </div>

        </div>
      </section>

      {/* ── SECTION 2: FOUR PILLARS ─────────────────────────────────── */}
      <section className="bg-white py-2 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <SectionLabel>Why Qaissar</SectionLabel>
          <h2 className="text-[48px] font-extrabold text-brand-black mt-4 mb-12 leading-tight">
            Built for the way your business works.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 — Prayer time automation */}
            <div className="border border-brand-gray-200 rounded-[12px] p-8">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <line x1="4" y1="28" x2="4" y2="14" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
                <line x1="2" y1="16" x2="6" y2="16" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 18 Q16 6 23 18" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <rect x="9" y="18" width="14" height="10" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                <path d="M14 28 L14 23 Q16 21 18 23 L18 28" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
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

      {/* ── SECTION 3: APP SHOWCASE ──────────────────────────────────── */}
      <section className="bg-brand-gray-100 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <SectionLabel>Qaissar App</SectionLabel>
              <h2 className="text-[48px] font-extrabold text-brand-black leading-tight mt-3 max-w-[480px]">
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

            {/* Right — phone mockup placeholder */}
            <div className="flex justify-center">
              <div
                className="w-[280px] aspect-[9/16] rounded-[24px] flex items-center justify-center"
                style={{
                  backgroundColor: '#1A1A1A',
                  boxShadow: '0 24px 48px rgba(0,0,0,0.15)',
                }}
              >
                <span className="text-white text-[14px]">Qaissar App</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4: USE CASES ─────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <SectionLabel>Who it&apos;s for</SectionLabel>
          <h2 className="text-[48px] font-extrabold text-brand-black leading-tight mt-3 mb-12">
            Built for every space.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 — Mosques */}
            <div className="p-8 border border-brand-gray-200 rounded-[12px] hover:border-brand-black transition-colors duration-200 cursor-default">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M9 18 Q16 6 23 18" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <rect x="9" y="18" width="14" height="12" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
                <line x1="4" y1="28" x2="4" y2="16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
                <line x1="2" y1="18" x2="6" y2="18" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 30 L14 25 Q16 23 18 25 L18 30" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
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
          <h2 className="text-[48px] font-extrabold text-brand-black leading-tight mt-3">
            One ecosystem. Every space.
          </h2>
          <p className="text-[20px] font-light text-brand-gray-500 mt-4 mb-14">
            Start with the QB Mini Smart Amp and build from there.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Product 1 — QB Mini Smart Amp */}
            <div className="bg-white rounded-[16px] p-8">
              <div className="aspect-square rounded-[12px] bg-brand-gray-200 flex items-center justify-center">
                <span className="text-brand-gray-500 text-[14px] text-center px-4">QB Mini Smart Amp</span>
              </div>
              <h3 className="text-[20px] font-extrabold text-brand-black mt-6">QB Mini Smart Amp</h3>
              <p className="text-[14px] font-light text-brand-gray-500 mt-2 leading-relaxed">
                90W wireless commercial amplifier with app control, prayer scheduling, and AI announcements.
              </p>
              <div className="mt-4">
                <Badge variant="available" />
              </div>
              <a href="/products" className="inline-flex items-center text-brand-red text-[14px] font-semibold mt-4 hover:underline">
                Learn more →
              </a>
            </div>

            {/* Product 2 — Ceiling Speaker */}
            <div className="bg-white rounded-[16px] p-8">
              <div className="aspect-square rounded-[12px] bg-brand-gray-200 flex items-center justify-center">
                <span className="text-brand-gray-500 text-[14px] text-center px-4">Qaissar Ceiling Speaker</span>
              </div>
              <h3 className="text-[20px] font-extrabold text-brand-black mt-6">Qaissar Ceiling Speaker</h3>
              <p className="text-[14px] font-light text-brand-gray-500 mt-2 leading-relaxed">
                6.5 inch 30W full range ceiling speaker for commercial spaces.
              </p>
              <div className="mt-4">
                <Badge variant="available" />
              </div>
              <a href="/products" className="inline-flex items-center text-brand-red text-[14px] font-semibold mt-4 hover:underline">
                Learn more →
              </a>
            </div>

            {/* Product 3 — Wall Speaker */}
            <div className="bg-white rounded-[16px] p-8">
              <div className="aspect-square rounded-[12px] bg-brand-gray-200 flex items-center justify-center">
                <span className="text-brand-gray-500 text-[14px] text-center px-4">Qaissar Wall Speaker</span>
              </div>
              <h3 className="text-[20px] font-extrabold text-brand-black mt-6">Qaissar Wall Speaker</h3>
              <p className="text-[14px] font-light text-brand-gray-500 mt-2 leading-relaxed">
                50W to 150W wall mounted speaker, compact and powerful.
              </p>
              <div className="mt-4">
                <Badge variant="available" />
              </div>
              <a href="/products" className="inline-flex items-center text-brand-red text-[14px] font-semibold mt-4 hover:underline">
                Learn more →
              </a>
            </div>

          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="md" href="/products">
              View all products →
            </Button>
          </div>

        </div>
      </section>

      {/* ── SECTION 6: CTA BAND ──────────────────────────────────────── */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 text-center" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[48px] font-extrabold text-white leading-tight">
            Ready to bring Qaissar to your market?
          </h2>
          <p className="text-[20px] font-light text-brand-gray-500 mt-4">
            We partner with AV and CCTV distributors across GCC, Iraq, and Southeast Asia.
          </p>
          <div className="mt-10">
            <Button variant="primary" size="lg" href="/distributor">
              Apply to Become a Distributor
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
