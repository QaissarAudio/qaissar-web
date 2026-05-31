import type { Metadata } from 'next'
import Link from 'next/link'
import { StudioMultiLocationSection } from '@/components/studio/StudioMultiLocationSection'
import { StudioPrayerTimesSection } from '@/components/studio/StudioPrayerTimesSection'
import { StudioSchedulingSection } from '@/components/studio/StudioSchedulingSection'
import { StudioVoiceAdsSection } from '@/components/studio/StudioVoiceAdsSection'

export const metadata: Metadata = {
  title: 'Qaissar Studio — Cloud Audio Management',
  description:
    'Manage and automate audio across multiple sites from one central dashboard. Prayer scheduling, playlists, secure streaming, and device control.',
}

export default function StudioPage() {
  return (
    <main>
      <section className="relative overflow-hidden" style={{ minHeight: '560px' }}>
        <div className="absolute inset-0 z-0">
          <img
            src="/images/app/web_bg.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
            style={{ animation: 'hero-zoom 16s ease-in-out infinite alternate' }}
          />
        </div>

        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(90deg, rgba(15,12,8,0.75) 0%, rgba(15,12,8,0.40) 35%, rgba(15,12,8,0.05) 60%, rgba(15,12,8,0) 100%)',
          }}
        />

        <div
          className="absolute bottom-0 left-0 right-0 z-[1] h-[120px]"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08))' }}
          aria-hidden="true"
        />

        <div className="relative z-[2] flex h-full flex-col">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-6 px-6 py-16 md:grid-cols-2 md:gap-12 md:py-20 lg:px-12">
            <div>
              <span
                className="mb-4 mt-4 block text-center text-[var(--text-h3)] font-semibold uppercase tracking-[0.12em] text-brand-red md:text-left"
              >
                Qaissar Studio
              </span>
              <h1
                className="text-center md:text-left"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, var(--text-h1))',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em',
                }}
              >
                One dashboard. Every location. Fully automated audio.
              </h1>
              <p
                className="mx-auto max-w-[420px] text-center text-[var(--text-body-lg)] font-light leading-relaxed text-white/55 md:mx-0 md:text-left"
                style={{ margin: '0 0 2rem' }}
              >
                Qaissar Studio is the cloud platform to schedule Azan, playlists, and
                announcements across mosques, hotels, retail, and more — with secure streaming
                and live device control.
              </p>
              <div className="hidden justify-center md:flex md:justify-start">
                <Link
                  href="https://studio.qaissar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/20"
                >
                  Go to studio page
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/images/app/web.png"
                alt="Qaissar Studio dashboard"
                className="w-[240px] md:w-[min(100%,520px)]"
                style={{
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.35))',
                }}
              />
            </div>
          </div>

          <div className="flex justify-center px-6 pb-8 md:hidden">
            <Link
              href="https://studio.qaissar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-sm items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/20"
            >
              Go to studio page
            </Link>
          </div>
        </div>
      </section>

      <StudioMultiLocationSection />
      <StudioPrayerTimesSection />
      <StudioSchedulingSection />
      <StudioVoiceAdsSection />
    </main>
  )
}
