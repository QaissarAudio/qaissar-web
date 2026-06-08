import type { Metadata } from 'next'
import { StudioHeroSection } from '@/components/studio/StudioHeroSection'
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
      <StudioHeroSection />
      <StudioMultiLocationSection />
      <StudioPrayerTimesSection />
      <StudioSchedulingSection />
      <StudioVoiceAdsSection />
    </main>
  )
}
