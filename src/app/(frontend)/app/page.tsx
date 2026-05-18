import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'
import AppImage from '@/components/app/AppImage'
import { PrayerSchedulingSection } from '@/components/app/PrayerSchedulingSection'
import { TTSAnnouncementsSection } from '@/components/app/TTSAnnouncementsSection'
import { SourceControlSection } from '@/components/app/SourceControlSection'
import QaissarLogo from '@/components/logo/QaissarLogo'
import type { LucideIcon } from 'lucide-react'
import {
  Clock,
  Mic,
  ToggleLeft,
  Radio,
  ListMusic,
  CalendarClock,
  SlidersHorizontal,
  Megaphone,
  Settings2,
  RefreshCw,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Qaissar App — Control Your Audio System',
  description:
    'Manage prayer scheduling, announcements, music, and more from your phone. Free on iOS and Android.',
}

interface FeatureSection {
  eyebrow: string
  headline: string
  body: string
  image: string
  note?: 'azanplay'
}

const featureSections: FeatureSection[] = [
  {
    eyebrow: 'Prayer Time Scheduling',
    headline: 'Automated Azan. Zero Manual Work.',
    body: 'Powered by AzanPlay, the app automatically schedules Azan for all five daily prayers based on your location. Set it once — it runs every day, precisely on time, across every speaker in your system.',
    image: '/images/app/prayer-scheduling.png',
    note: 'azanplay',
  },
  {
    eyebrow: 'AI Announcements',
    headline: 'Type It. The System Says It.',
    body: 'Send live announcements in Arabic or English directly from your phone. The AI voice engine converts your message into a natural-sounding announcement broadcast across all zones instantly.',
    image: '/images/app/tts-announcements.png',
  },
  {
    eyebrow: 'Source Control',
    headline: 'Switch Sources Instantly.',
    body: 'Choose between Bluetooth, SD card, USB, internet radio, or microphone input from the app. One tap switches the audio source across your entire system — no physical access required.',
    image: '/images/app/source-control.png',
  },
  {
    eyebrow: 'Internet Radio',
    headline: 'Stream Thousands of Stations.',
    body: 'Browse and stream live internet radio stations directly through your Qaissar system. Save favourites, browse by genre, and schedule stations to play automatically at set times.',
    image: '/images/app/internet-radio.png',
  },
  {
    eyebrow: 'Playlist Management',
    headline: 'Your Music. Your Schedule.',
    body: 'Create and manage playlists stored on SD card or USB. Set playlists to play on a schedule — background music that starts and stops automatically, every day.',
    image: '/images/app/playlist.png',
  },
  {
    eyebrow: 'Scheduling & Alarms',
    headline: 'Automate Your Entire Audio Day.',
    body: 'Build a complete daily schedule — opening announcements, background music, prayer times, closing messages — all running automatically. Set weekly recurring schedules and let the system run itself.',
    image: '/images/app/scheduling.png',
  },
  {
    eyebrow: 'Volume & EQ',
    headline: 'Perfect Sound. Every Room.',
    body: 'Adjust master volume, individual zone levels, and EQ settings from your phone. Tune each space to sound exactly right — without touching the hardware.',
    image: '/images/app/volume-eq.png',
  },
  {
    eyebrow: 'Messaging & Ads',
    headline: 'Broadcast Your Message.',
    body: 'Push custom audio ads and promotional messages to your system on a schedule. Ideal for retail, hospitality, and large venue environments.',
    image: '/images/app/messaging-ads.png',
  },
  {
    eyebrow: 'Device Settings',
    headline: 'Full Control. Your Way.',
    body: 'Rename your device, change the PIN code, update firmware, and manage system settings directly from the app. No laptop or on-site visit required.',
    image: '/images/app/device-settings.png',
  },
]

interface GridTile {
  icon: LucideIcon
  label: string
  description: string
}

const gridTiles: GridTile[] = [
  { icon: Clock, label: 'Prayer Scheduling', description: 'Automated Azan for all five prayers' },
  { icon: Mic, label: 'AI Announcements', description: 'Live Arabic & English voice broadcast' },
  { icon: ToggleLeft, label: 'Source Control', description: 'Switch inputs from anywhere' },
  { icon: Radio, label: 'Internet Radio', description: 'Stream thousands of live stations' },
  { icon: ListMusic, label: 'Playlist Management', description: 'Schedule music automatically' },
  { icon: CalendarClock, label: 'Scheduling & Alarms', description: 'Automate your full audio day' },
  { icon: SlidersHorizontal, label: 'Volume & EQ', description: 'Fine-tune every room remotely' },
  { icon: Megaphone, label: 'Messaging & Ads', description: 'Push announcements on schedule' },
  { icon: Settings2, label: 'Device Settings', description: 'Rename, PIN, firmware — all remote' },
  { icon: RefreshCw, label: 'Firmware Updates', description: 'Stay updated automatically' },
]

export default function AppPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
       style={{ minHeight: '560px' }}
      >
        {/* Layer 1 — Background image with Ken Burns zoom */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/images/app/hero-bg.png"
            alt=""
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              animation: 'hero-zoom 16s ease-in-out infinite alternate',
            }}
          />
        </div>

        {/* Layer 2 — Dark gradient overlay (left-heavy) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(90deg, rgba(15,12,8,0.95) 0%, rgba(15,12,8,0.80) 40%, rgba(15,12,8,0.30) 70%, rgba(15,12,8,0.10) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '120px',
            zIndex: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08))',
          }}
        />

        {/* Layer 3 — Content */}
        <div className="h-full flex flex-col" style={{ position: 'relative', zIndex: 2 }}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-0 md:h-full"
          >
            {/* Left — Text */}
            <div>
              <span
                className="block text-center md:text-left"
                style={{
                  fontSize: 'var(--text-label)',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#E31E24',
                  marginBottom: '1rem',
                }}
              >
                Qaissar App
              </span>
              <h1
                className="text-center md:text-left"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, var(--text-h1))',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  margin: '0 0 1.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                A smart commercial audio system that automates daily operations.
              </h1>
              <p
                className="hidden md:block"
                style={{
                  fontSize: 'var(--text-body-lg)',
                  color: 'rgba(255,255,255,0.55)',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  margin: '0 0 2rem',
                  maxWidth: '420px',
                }}
              >
                The Qaissar App and QB Mini work together to remove manual audio work from your
                business — permanently.
              </p>
              {/* Buttons — desktop only */}
              <div className="hidden md:flex gap-3 flex-wrap">
                <Button variant="primary" size="md" href="#">
                  Download on App Store
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href="#"
                  className="hero-btn-ghost"
                >
                  Get it on Google Play
                </Button>
              </div>
            </div>

            {/* Right — Phone mockup */}
            <div className="flex justify-center items-center">
              <img
                src="/images/app/hero-phone.png"
                alt="Qaissar App interface"
                style={{
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))',
                  display: 'block',
                }}
                className="w-[200px] md:w-[260px]"
              />
            </div>
          </div>

          {/* Buttons — mobile only, below phone */}
          <div className="flex md:hidden flex-col gap-3 px-6 pb-8 items-center">
            <Button variant="primary" size="md" href="#">
              Download on App Store
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="#"
              className="hero-btn-ghost"
            >
              Get it on Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <PrayerSchedulingSection />
      <TTSAnnouncementsSection />
      <SourceControlSection />
      {featureSections.slice(1).map((section, i) => {
        const actualIndex = i + 1
        if (actualIndex === 1 || actualIndex === 2) return null
        const isEven = actualIndex % 2 === 0
        return (
          <section key={section.eyebrow} className={`${isEven ? 'bg-white' : 'bg-brand-gray-100'} py-20`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`flex justify-center bg-white rounded-2xl p-6 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <AppImage
                    src={section.image}
                    width={480}
                    height={600}
                    alt={section.headline}
                    className="rounded-xl max-w-full h-auto"
                  />
                </div>
                <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                  <span className="text-[var(--text-caption)] font-semibold uppercase tracking-widest text-brand-red">
                    {section.eyebrow}
                  </span>
                  <h2 className="mt-3 text-[var(--text-h3)] md:text-[var(--text-h2)] font-extrabold text-brand-black leading-tight">
                    {section.headline}
                  </h2>
                  <p className="mt-4 text-[var(--text-body)] font-light text-brand-gray-500 leading-relaxed">
                    {section.body}
                  </p>
                  {section.note === 'azanplay' && (
                    <span className="inline-block mt-4 bg-brand-gray-100 text-brand-gray-500 text-[var(--text-caption)] px-3 py-1 rounded-full">
                      Powered by AzanPlay
                    </span>
                  )}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Features Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[var(--text-h2)] font-extrabold text-brand-black">
            Everything You Need. One App.
          </h2>
          <p className="mt-4 text-[var(--text-body-lg)] font-light text-brand-gray-500 max-w-xl mx-auto">
            Available free on iOS and Android for all Qaissar QB Series devices.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {gridTiles.map(({ icon: Icon, label, description }) => (
              <div key={label} className="bg-brand-gray-100 rounded-2xl p-6">
                <Icon size={28} className="text-brand-red" />
                <p className="mt-3 font-semibold text-brand-black text-[var(--text-body-sm)]">{label}</p>
                <p className="mt-1 text-[var(--text-caption)] text-brand-gray-500 font-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg-brand-black py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[var(--text-h2)] font-extrabold text-white">
            Download the Qaissar App
          </h2>
          <p className="mt-4 text-[var(--text-body-lg)] font-light text-brand-gray-500">
            Free for iOS and Android. Works with all QB Series devices.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="md" href="#">
              Download on App Store
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="#"
              className="!border-white !text-white hover:!bg-white hover:!text-brand-black"
            >
              Get it on Google Play
            </Button>
          </div>
          <p className="mt-6 text-[var(--text-caption)] text-brand-gray-500">
            App Store and Google Play links coming soon.
          </p>
        </div>
      </section>
    </main>
  )
}
