export type StudioParallaxTile = { src: string; alt: string; label: string }

const hero = (file: string) => `/images/studio/hero/${file}`

export const STUDIO_PARALLAX_ROWS: StudioParallaxTile[][] = [
  [
    { src: hero('01-audio-mixer.jpg'), alt: 'Audio mixer', label: 'Pro Mixing' },
    { src: hero('02-cafe-interior.jpg'), alt: 'Cafe interior', label: 'Cafe Ambience' },
    { src: hero('03-studio-headphones.jpg'), alt: 'Studio headphones', label: 'Studio Grade' },
    { src: hero('04-dubai-cityscape.jpg'), alt: 'Dubai cityscape', label: 'Multi-City' },
    { src: hero('05-masjid-interior.jpg'), alt: 'Masjid interior', label: 'Prayer Mode' },
  ],
  [
    { src: hero('06-audio-interface.jpg'), alt: 'Audio interface', label: 'Digital Controls' },
    { src: hero('07-gym-environment.jpg'), alt: 'Gym environment', label: 'Fitness Energy' },
    { src: hero('08-restaurant-speaker.jpg'), alt: 'Restaurant speaker', label: 'Hospitality Sound' },
    { src: hero('09-waveform-ui.jpg'), alt: 'Waveform UI', label: 'Precision Waves' },
    { src: hero('10-dj-deck.jpg'), alt: 'DJ deck', label: 'Global Playlists' },
  ],
  [
    { src: hero('11-live-event.jpg'), alt: 'Live event', label: 'Live Streaming' },
    { src: hero('12-audio-console.jpg'), alt: 'Audio console', label: 'HQ Dashboard' },
    { src: hero('13-modern-architecture.jpg'), alt: 'Modern architecture', label: 'Corporate Venues' },
    { src: hero('14-technical-support.jpg'), alt: 'Technical support', label: '24/7 Monitoring' },
    { src: hero('15-microphone.jpg'), alt: 'Microphone', label: 'AI Voice Ads' },
  ],
]
