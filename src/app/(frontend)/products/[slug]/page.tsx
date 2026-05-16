import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Speaker,
  Zap,
  Music,
  Volume2,
  Building2,
  Wrench,
  ShieldCheck,
  Layers,
  SlidersHorizontal,
  Maximize2,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ProductImageGallery } from '@/components/products/ProductImageGallery'
import { TechSpecsAccordion } from '@/components/products/TechSpecsAccordion'
import type { Tab } from '@/components/products/TechSpecsAccordion'

type Props = {
  params: Promise<{ slug: string }>
}

// ── TYPES ─────────────────────────────────────────────────────────────────────

interface GalleryImage {
  src: string
  alt: string
}

interface SpecItem {
  label: string
  value: string
}

interface FeatureIcon {
  icon: ReactNode
  label: string
}

interface EditorialSection {
  eyebrow: string
  headline: string
  body: string
  image?: string
  imageAlt?: string
  gifSrc?: string
  gifAlt?: string
  imagePair?: {
    left: { src: string; alt: string }
    right: { src: string; alt: string }
  }
  imagePosition: 'left' | 'right'
  bg: 'bg-white' | 'bg-brand-gray-100'
  bullets?: string[]
  showAzanPlayBadge?: boolean
}

interface RelatedProduct {
  slug: string
  name: string
  category: string
  description: string
  image?: string
}

interface ProductData {
  name: string
  category: string
  description: string
  specItems: SpecItem[]
  galleryImages: GalleryImage[]
  featureIcons: FeatureIcon[]
  editorialSections: EditorialSection[]
  techSpecTabs: Tab[]
  relatedProducts: RelatedProduct[]
  metadata: { title: string; description: string }
}

// ── LOCAL COMPONENT ────────────────────────────────────────────────────────────

function AzanPlayBadge({ label = 'Powered by AzanPlay ↗' }: { label?: string }) {
  return (
    <a
      href="https://azanplay.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full px-6 py-3 hover:opacity-80 transition-opacity"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <span
        style={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          backgroundColor: '#E31E24',
          display: 'inline-block',
          flexShrink: 0,
        }}
      />
      <span style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 600, fontFamily: '"Nunito Sans", sans-serif' }}>
        {label}
      </span>
    </a>
  )
}

// ── PRODUCT DATA MAP ──────────────────────────────────────────────────────────

const productMap: Record<string, ProductData | undefined> = {
  'qb-mini-smart-amp': {
    name: 'QB Mini Smart Amp',
    category: 'Smart Amplifiers',
    description:
      'The commercial audio amplifier built for Muslim-majority businesses. Prayer time automation, scheduled announcements, and background music — all from one compact device.',
    specItems: [
      { label: 'Output Power', value: '90W (3×30W)' },
      { label: 'Audio Sources', value: '4 Sources' },
      { label: 'Connectivity', value: 'WiFi + BT' },
      { label: 'App Control', value: 'iOS & Android' },
    ],
    galleryImages: [
      { src: '/images/products/qb-mini/1.png', alt: 'QB Mini Smart Amp — main angle' },
      { src: '/images/products/qb-mini/2.png', alt: 'QB Mini Smart Amp — outputs side' },
      { src: '/images/products/qb-mini/3.png', alt: 'QB Mini Smart Amp — top view' },
      { src: '/images/products/qb-mini/4.png', alt: 'QB Mini Smart Amp — back panel' },
    ],
    featureIcons: [
      {
        label: 'WiFi',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M2 10c3.3-3.3 7.8-5.3 12-5.3s8.7 2 12 5.3" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round" fill="none"/>
            <path d="M6 14c2.2-2.2 5.2-3.5 8-3.5s5.8 1.3 8 3.5" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round" fill="none"/>
            <path d="M10 18c1.1-1.1 2.6-1.8 4-1.8s2.9.7 4 1.8" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round" fill="none"/>
            <circle cx="14" cy="22" r="1.5" fill="#1A1A1A"/>
          </svg>
        ),
      },
      {
        label: 'Bluetooth',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M10 8l8 6-8 6" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M10 20l8-6" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <line x1="14" y1="4" x2="14" y2="24" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        label: 'SD Card',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect x="7" y="4" width="14" height="20" rx="2" stroke="#1A1A1A" strokeWidth="1.75" fill="none"/>
            <path d="M7 10h14" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="11" y1="4" x2="11" y2="10" stroke="#1A1A1A" strokeWidth="1.5"/>
            <line x1="14" y1="4" x2="14" y2="10" stroke="#1A1A1A" strokeWidth="1.5"/>
            <line x1="17" y1="4" x2="17" y2="10" stroke="#1A1A1A" strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        label: 'USB',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <line x1="14" y1="4" x2="14" y2="20" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round"/>
            <path d="M14 20c0 0-6 0-6-4v-4h12v4c0 4-6 4-6 4z" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
            <circle cx="10" cy="12" r="1.5" fill="#1A1A1A"/>
            <circle cx="18" cy="12" r="1.5" fill="#1A1A1A"/>
            <rect x="12" y="4" width="4" height="2.5" rx="1" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
          </svg>
        ),
      },
      {
        label: 'AI Speech',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect x="10" y="4" width="8" height="13" rx="4" stroke="#1A1A1A" strokeWidth="1.75" fill="none"/>
            <path d="M6 14c0 4.4 3.6 8 8 8s8-3.6 8-8" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round" fill="none"/>
            <line x1="14" y1="22" x2="14" y2="26" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round"/>
            <line x1="10" y1="26" x2="18" y2="26" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        label: 'Prayer Scheduling',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect x="2" y="13" width="3" height="12" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
            <path d="M2 13 Q3.5 10 5 13" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
            <rect x="23" y="13" width="3" height="12" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
            <path d="M23 13 Q24.5 10 26 13" stroke="#1A1A1A" strokeWidth="1.5" fill="none"/>
            <path d="M7 18 Q14 5 21 18" stroke="#1A1A1A" strokeWidth="1.75" fill="none" strokeLinecap="round"/>
            <rect x="7" y="18" width="14" height="7" stroke="#1A1A1A" strokeWidth="1.75" fill="none"/>
            <path d="M11 25 L11 21 Q14 18.5 17 21 L17 25" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        label: 'Mic Input',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect x="10" y="2" width="8" height="14" rx="4" stroke="#1A1A1A" strokeWidth="1.75" fill="none"/>
            <path d="M5 13c0 5 4 9 9 9s9-4 9-9" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round" fill="none"/>
            <line x1="14" y1="22" x2="14" y2="26" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round"/>
            <line x1="10" y1="26" x2="18" y2="26" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        label: 'Internet Radio',
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M4 14c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round" fill="none"/>
            <path d="M8 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round" fill="none"/>
            <circle cx="14" cy="14" r="2.5" fill="#1A1A1A"/>
            <line x1="14" y1="16.5" x2="14" y2="24" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round"/>
            <line x1="10" y1="24" x2="18" y2="24" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
    editorialSections: [
      {
        eyebrow: 'Prayer Time',
        headline: 'Automated. Accurate. Always on time.',
        body: 'The QB Mini Smart Amp includes full AzanPlay integration — Hijri and Gregorian calendar support, automatic mute before and after prayer, and a library of Azan recordings downloadable from the server.',
        image: '/images/products/qb-mini/3.png',
        imageAlt: 'QB Mini Smart Amp — top view',
        imagePosition: 'left',
        bg: 'bg-white',
        showAzanPlayBadge: true,
      },
      {
        eyebrow: 'App Control',
        headline: 'Everything in your hands.',
        body: 'The Qaissar App gives you complete control from your iOS or Android device. Switch audio sources, adjust EQ, set schedules, and monitor your device — all without being on-site.',
        image: '/images/products/qb-mini/2.png',
        imageAlt: 'QB Mini Smart Amp — outputs side',
        imagePosition: 'right',
        bg: 'bg-brand-gray-100',
        bullets: [
          'Switch between Bluetooth, internet radio, SD, USB',
          'Custom EQ with preset and manual controls',
          'Remote volume and microphone adjustment',
          'AI text-to-speech in Arabic and English',
        ],
      },
      {
        eyebrow: 'Scheduling',
        headline: 'Set it once. Run forever.',
        body: 'Schedule audio messages, ads, and announcements by prayer time, calendar date, or specific time of day. The QB Mini runs your schedule automatically — no daily intervention required.',
        image: '/images/products/qb-mini/4.png',
        imageAlt: 'QB Mini Smart Amp — back panel',
        imagePosition: 'left',
        bg: 'bg-white',
        bullets: [
          'Prayer-time triggered announcements',
          'Recurring daily or weekly message schedules',
          'AI text-to-speech message creation',
        ],
      },
    ],
    techSpecTabs: [
      {
        title: 'Audio',
        rows: [
          { label: 'Output Power', value: '90W total (3 × 30W amplified outputs)' },
          { label: 'Amplifier Class', value: 'Class D digital' },
          { label: 'Speaker Outputs', value: '3 independent amplified outputs (S1, S2, S3)' },
          { label: 'Mic Input', value: '1 × 6.5mm microphone input' },
          { label: 'Audio Input', value: '1 × 3.5mm line input' },
          { label: 'Audio Output', value: '1 × 3.5mm line output' },
          { label: 'EQ', value: 'Preset EQ + 2 custom EQ profiles, bass and treble control' },
        ],
      },
      {
        title: 'Connectivity',
        rows: [
          { label: 'WiFi', value: 'Built-in WiFi' },
          { label: 'Bluetooth', value: 'BLE (Bluetooth Low Energy) for app control' },
          { label: 'USB', value: 'USB-A port for USB audio playback' },
          { label: 'SD Card', value: 'MicroSD card slot for local audio storage' },
          { label: 'RF Remote', value: 'Long range RF remote control support' },
          { label: 'Master/Slave', value: 'Slave/Master switch for multi-unit setup' },
        ],
      },
      {
        title: 'App & Software',
        rows: [
          { label: 'App Name', value: 'Qaissar App' },
          { label: 'Platforms', value: 'iOS and Android' },
          { label: 'Control Protocol', value: 'BLE (Bluetooth Low Energy)' },
          { label: 'Audio Sources', value: 'Bluetooth, Internet Radio, SD Card, USB' },
          { label: 'Prayer Times', value: 'AzanPlay integration — Hijri & Gregorian calendar' },
          { label: 'AI TTS', value: 'Arabic and English text-to-speech' },
          { label: 'Scheduling', value: 'Prayer time, calendar, and time-based triggers' },
          { label: 'Firmware', value: 'OTA updates via app' },
        ],
      },
      {
        title: 'In the Box',
        rows: [
          { label: '', value: '1 × QB Mini Smart Amp' },
          { label: '', value: '1 × Power adapter' },
          { label: '', value: '1 × RF remote control' },
          { label: '', value: '3 × Speaker terminal connectors (S1, S2, S3)' },
          { label: '', value: '1 × Quick start guide' },
        ],
      },
    ],
    relatedProducts: [
      {
        slug: 'qaissar-cs-pro',
        name: 'Qaissar CS Pro',
        category: 'Speakers',
        description: '6.5 inch 30W full range ceiling speaker for commercial spaces.',
      },
      {
        slug: 'qaissar-ws-pro',
        name: 'Qaissar WS Pro',
        category: 'Speakers',
        description: '50W to 150W wall mounted speaker in black and white, with an adjustable bracket.',
      },
    ],
    metadata: {
      title: 'QB Mini Smart Amp — Qaissar',
      description:
        'The QB Mini Smart Amp is a 90W commercial amplifier with prayer time automation, scheduled announcements, and app control for Muslim-majority businesses.',
    },
  },

  'qaissar-cs-pro': {
    name: 'Qaissar CS Pro',
    category: 'Speakers',
    description:
      'A slim, full-range ceiling speaker engineered for commercial audio installations. The Qaissar CS Pro delivers clear, even sound coverage across large open spaces — from mosques to retail environments.',
    specItems: [
      { label: 'Driver Size', value: '6.5 Inch' },
      { label: 'Power', value: '30W' },
      { label: 'Coverage', value: '120°' },
      { label: 'Mounting', value: 'Flush Ceiling' },
    ],
    galleryImages: [
      { src: '/images/qcs-pro/1.png', alt: 'Qaissar CS Pro — view 1' },
      { src: '/images/qcs-pro/2.png', alt: 'Qaissar CS Pro — view 2' },
      { src: '/images/qcs-pro/3.png', alt: 'Qaissar CS Pro — view 3' },
      { src: '/images/qcs-pro/4.png', alt: 'Qaissar CS Pro — view 4' },
    ],
    featureIcons: [
      { label: '6.5 Inch Driver', icon: <Speaker size={28} /> },
      { label: '30W Power', icon: <Zap size={28} /> },
      { label: 'Full Range', icon: <Music size={28} /> },
      { label: 'Even Coverage', icon: <Volume2 size={28} /> },
      { label: 'Commercial Grade', icon: <Building2 size={28} /> },
      { label: 'Easy Install', icon: <Wrench size={28} /> },
      { label: 'Durable Build', icon: <ShieldCheck size={28} /> },
      { label: 'Flush Mount', icon: <Layers size={28} /> },
    ],
    editorialSections: [
      {
        eyebrow: 'Full Range Audio',
        headline: 'Clear Sound. Every Corner.',
        body: 'The Qaissar Ceiling Speaker uses a 6.5 inch full-range driver to deliver consistent, natural sound across the entire room. No dead zones, no harsh peaks — just even, intelligible audio wherever your guests or congregation stand.',
        image: '/images/qcs-pro/2.png',
        imageAlt: 'Qaissar Ceiling Speaker — detail',
        imagePosition: 'left',
        bg: 'bg-white',
      },
      {
        eyebrow: 'Commercial Installation',
        headline: 'Built for Professional Setups.',
        body: 'Designed for flush ceiling mounting in mosques, retail spaces, hotels, and commercial venues. The slim profile disappears into the ceiling while the driver delivers the output that large spaces demand. Compatible with the QB Mini Smart Amp system.',
        image: '/images/qcs-pro/6.png',
        imageAlt: 'Qaissar Ceiling Speaker — installation',
        imagePosition: 'right',
        bg: 'bg-brand-gray-100',
      },
      {
        eyebrow: 'System Integration',
        headline: 'Part of the Qaissar Ecosystem.',
        body: 'Pair with the QB Mini Smart Amp for a complete wireless commercial audio system. Drive up to three ceiling speaker zones from a single amplifier, managed entirely from the Qaissar App.',
        image: '/images/qcs-pro/7.png',
        imageAlt: 'Qaissar Ceiling Speaker — ecosystem',
        imagePosition: 'left',
        bg: 'bg-white',
      },
    ],
    techSpecTabs: [
      {
        title: 'General',
        rows: [
          { label: 'Driver Size', value: '6.5 inch' },
          { label: 'Power Handling', value: '30W' },
          { label: 'Type', value: 'Full Range' },
          { label: 'Application', value: 'Commercial / Institutional' },
          { label: 'Mounting', value: 'Flush Ceiling Mount' },
          { label: 'Status', value: 'Available' },
        ],
      },
      {
        title: 'Audio',
        rows: [
          { label: 'Frequency Response', value: '80Hz – 18kHz' },
          { label: 'Sensitivity', value: '90dB (1W/1m)' },
          { label: 'Impedance', value: '8 Ohm' },
          { label: 'Coverage Angle', value: '120°' },
        ],
      },
      {
        title: 'Physical',
        rows: [
          { label: 'Cutout Diameter', value: '205mm' },
          { label: 'Overall Diameter', value: '240mm' },
          { label: 'Depth', value: '95mm' },
          { label: 'Grille', value: 'White ABS, included' },
          { label: 'Weight', value: '1.2kg' },
        ],
      },
      {
        title: 'Compatibility',
        rows: [
          { label: 'Amplifier', value: 'QB Mini Smart Amp (recommended)' },
          { label: 'Wiring', value: 'Standard speaker cable' },
          { label: 'Zones', value: 'Up to 3 per QB Mini output' },
          { label: 'App Control', value: 'Via QB Mini + Qaissar App' },
        ],
      },
    ],
    relatedProducts: [
      {
        slug: 'qb-mini-smart-amp',
        name: 'QB Mini Smart Amp',
        category: 'Smart Amplifiers',
        description: '90W wireless commercial amplifier with app control, prayer scheduling, and AI announcements.',
        image: '/images/products/qb-mini/1.png',
      },
      {
        slug: 'qaissar-ws-pro',
        name: 'Qaissar WS Pro',
        category: 'Speakers',
        description: '50W to 150W wall mounted speaker in black and white, with an adjustable bracket.',
      },
    ],
    metadata: {
      title: 'Qaissar CS Pro — Commercial Ceiling Speaker',
      description: 'The Qaissar CS Pro is a 6.5 inch 30W full-range ceiling speaker for commercial and institutional audio installations.',
    },
  },

  'qaissar-ws-pro': {
    name: 'Qaissar WS Pro',
    category: 'Speakers',
    description:
      'A high-output commercial wall speaker available in black and white, with an adjustable bracket for flexible installation. The Qaissar WS Pro delivers serious power — 50W, 60W, or 150W — from a compact, elegant enclosure.',
    specItems: [
      { label: 'Power Options', value: '50/60/150W' },
      { label: 'Configurations', value: '3 Options' },
      { label: 'Sensitivity', value: '92dB' },
      { label: 'Mounting', value: 'Wall Bracket' },
    ],
    galleryImages: [
      { src: '/images/ws-pro/1.png', alt: 'Qaissar WS Pro — Black' },
      { src: '/images/ws-pro/2.png', alt: 'Qaissar WS Pro — White' },
      { src: '/images/ws-pro/3.png', alt: 'Qaissar WS Pro — Back panel black' },
      { src: '/images/ws-pro/4.png', alt: 'Qaissar WS Pro — Back panel white' },
      { src: '/images/ws-pro/5.png', alt: 'Qaissar WS Pro — Installed on wall' },
    ],
    featureIcons: [
      { label: 'Up to 150W', icon: <Zap size={28} /> },
      { label: 'Wall Mount', icon: <Speaker size={28} /> },
      { label: '3 Power Options', icon: <SlidersHorizontal size={28} /> },
      { label: 'High Output', icon: <Volume2 size={28} /> },
      { label: 'Commercial Grade', icon: <Building2 size={28} /> },
      { label: 'Wide Dispersion', icon: <Maximize2 size={28} /> },
      { label: 'Durable Build', icon: <ShieldCheck size={28} /> },
      { label: 'Compact Form', icon: <Layers size={28} /> },
    ],
    editorialSections: [
      {
        eyebrow: 'High Output',
        headline: 'Power Where You Need It.',
        body: 'Available in 50W, 60W, and 150W versions, the Qaissar WS Pro delivers serious output from a compact enclosure. Engineered for large halls, courtyards, and outdoor-adjacent spaces where ceiling mounting is not an option.',
        image: '/images/ws-pro/5.png',
        imageAlt: 'Qaissar WS Pro installed on wall',
        imagePosition: 'left',
        bg: 'bg-white',
      },
      {
        eyebrow: 'Flexibility',
        headline: 'The Perfect Fit for Any Project.',
        body: 'Whether space is tight or you want to achieve a certain look, the Qaissar WS Pro integrates seamlessly into any environment. A compact form factor that disappears into the space — leaving only the sound.',
        gifSrc: '/images/ws-pro/bracket-animation.gif',
        gifAlt: 'WS Pro bracket flexibility animation',
        imagePosition: 'right',
        bg: 'bg-brand-gray-100',
      },
      {
        eyebrow: 'Adjustable Design',
        headline: 'Any Angle. Any Direction.',
        body: 'The WS Pro bracket pivots to face sound exactly where it needs to go. Tilt up, tilt down, or rotate horizontally — the adjustable mount gives you complete control over coverage without moving the speaker.',
        imagePair: {
          left: { src: '/images/ws-pro/6.png', alt: 'Qaissar WS Pro — bracket tilted' },
          right: { src: '/images/ws-pro/7.png', alt: 'Qaissar WS Pro — bracket angled' },
        },
        imagePosition: 'left',
        bg: 'bg-white',
      },
    ],
    techSpecTabs: [
      {
        title: 'General',
        rows: [
          { label: 'Power Options', value: '50W / 60W / 150W' },
          { label: 'Type', value: 'Wall Mount Speaker' },
          { label: 'Application', value: 'Commercial / Outdoor-Adjacent' },
          { label: 'Mounting', value: 'Wall Bracket (included)' },
          { label: 'Status', value: 'Available' },
        ],
      },
      {
        title: 'Audio',
        rows: [
          { label: 'Frequency Response', value: '70Hz – 18kHz' },
          { label: 'Sensitivity', value: '92dB (1W/1m)' },
          { label: 'Impedance', value: '8 Ohm' },
          { label: 'Dispersion', value: 'Wide angle' },
        ],
      },
      {
        title: 'Physical',
        rows: [
          { label: 'Dimensions (50W/60W)', value: '260 x 180 x 160mm' },
          { label: 'Dimensions (150W)', value: '340 x 220 x 195mm' },
          { label: 'Enclosure', value: 'ABS + Metal Bracket' },
          { label: 'Colour', value: 'Black / White' },
          { label: 'Weight', value: '2.1kg (50W/60W) / 3.8kg (150W)' },
        ],
      },
      {
        title: 'Compatibility',
        rows: [
          { label: 'Amplifier', value: 'QB Mini Smart Amp (recommended)' },
          { label: 'Wiring', value: 'Standard speaker cable' },
          { label: 'App Control', value: 'Via QB Mini + Qaissar App' },
          { label: 'Environment', value: 'Indoor / Sheltered outdoor' },
        ],
      },
    ],
    relatedProducts: [
      {
        slug: 'qb-mini-smart-amp',
        name: 'QB Mini Smart Amp',
        category: 'Smart Amplifiers',
        description: '90W wireless commercial amplifier with app control, prayer scheduling, and AI announcements.',
        image: '/images/products/qb-mini/1.png',
      },
      {
        slug: 'qaissar-cs-pro',
        name: 'Qaissar CS Pro',
        category: 'Speakers',
        description: '6.5 inch 30W full range ceiling speaker for commercial spaces.',
      },
    ],
    metadata: {
      title: 'Qaissar WS Pro — Commercial Wall Speaker',
      description: 'High-output wall speaker in 50W, 60W, and 150W. Available in black and white. Adjustable bracket for any installation.',
    },
  },
}

// ── METADATA & STATIC PARAMS ──────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = productMap[slug]
  if (!product) return {}
  return product.metadata
}

export function generateStaticParams() {
  return Object.keys(productMap).map((slug) => ({ slug }))
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = productMap[slug]
  if (!product) notFound()

  return (
    <>
      {/* ── SECTION 1: BREADCRUMB ─────────────────────────────────────── */}
      <section className="pt-8 pb-0 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <nav className="text-[13px] text-brand-gray-500 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-brand-black transition-colors">Products</Link>
            <span>/</span>
            <span className="text-brand-black">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* ── SECTION 2: PRODUCT HERO ───────────────────────────────────── */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <ProductImageGallery
            images={product.galleryImages}
            colourGroups={slug === 'qaissar-ws-pro'
              ? { black: [0, 2, 4], white: [1, 3] }
              : undefined}
          />

          <div>
            <p className="text-brand-red text-[13px] font-semibold uppercase tracking-[2px]">
              {product.category}
            </p>
            <h1 className="text-[36px] lg:text-[42px] font-extrabold text-brand-black mt-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-[16px] font-light text-brand-gray-800 mt-4 leading-relaxed">
              {product.description}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 border-t border-b border-brand-gray-200 py-5 mt-6">
              {product.specItems.map((item) => (
                <div key={item.label}>
                  <p className="text-[11px] uppercase tracking-[1px] text-brand-gray-500 font-semibold">
                    {item.label}
                  </p>
                  <p className="text-[16px] font-extrabold text-brand-black mt-1">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Badge variant="available" />
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button variant="primary" size="lg" href="/distributor">
                Request Price
              </Button>
              <button
                disabled
                title="Coming soon"
                className="inline-flex items-center justify-center font-semibold transition-colors duration-150 px-8 py-4 text-lg bg-transparent text-brand-black border border-[1.5px] border-brand-black cursor-not-allowed opacity-50"
                style={{ fontFamily: '"Nunito Sans", sans-serif', fontWeight: 600 }}
              >
                Download Datasheet
              </button>
            </div>
            <p className="text-[13px] text-brand-gray-500 mt-3 font-light">
              Price available to verified distributors only.{' '}
              <Link href="/distributor" className="underline hover:text-brand-black">
                Apply to become a distributor
              </Link>{' '}
              to access pricing.
            </p>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: FEATURE ICONS STRIP ───────────────────────────── */}
      <section className="bg-brand-gray-100 py-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8 lg:gap-12 overflow-x-auto pb-2">
            {product.featureIcons.map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-2 shrink-0">
                {f.icon}
                <span className="text-[12px] font-semibold text-brand-black text-center whitespace-nowrap">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: EDITORIAL SECTIONS ────────────────────────────── */}
      {product.editorialSections.map((section) => {
        const imageCol = section.gifSrc ? (
          <div className="relative aspect-square rounded-[16px] overflow-hidden bg-white">
            <img
              src={section.gifSrc}
              alt={section.gifAlt ?? ''}
              className="w-full h-full object-contain"
            />
          </div>
        ) : section.imagePair ? (
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl overflow-hidden bg-white">
              <Image
                src={section.imagePair.left.src}
                alt={section.imagePair.left.alt}
                width={600}
                height={600}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden bg-white">
              <Image
                src={section.imagePair.right.src}
                alt={section.imagePair.right.alt}
                width={600}
                height={600}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        ) : (
          <div className="relative aspect-square rounded-[16px] overflow-hidden bg-white">
            <Image
              src={section.image!}
              alt={section.imageAlt!}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        )
        const textCol = (
          <div>
            <p className="text-brand-red text-[12px] font-semibold uppercase tracking-[2px]">
              {section.eyebrow}
            </p>
            <h2 className="text-[36px] font-extrabold text-brand-black mt-3 leading-tight">
              {section.headline}
            </h2>
            <p className="text-[16px] font-light text-brand-gray-800 mt-4 leading-relaxed">
              {section.body}
            </p>
            {section.bullets && (
              <ul className="mt-6 flex flex-col gap-3">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="w-2 h-2 rounded-full bg-brand-red mt-[6px] shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-[16px] font-light text-brand-gray-800 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            )}
            {section.showAzanPlayBadge && (
              <div className="mt-6">
                <AzanPlayBadge />
              </div>
            )}
          </div>
        )
        return (
          <section key={section.eyebrow} className={`${section.bg} py-20 px-6 lg:px-12`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {section.imagePosition === 'left' ? (
                <>{imageCol}{textCol}</>
              ) : (
                <>{textCol}{imageCol}</>
              )}
            </div>
          </section>
        )
      })}

      {/* ── SECTION 5: TECH SPECS ACCORDION ──────────────────────────── */}
      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] font-extrabold text-brand-black mb-8">Tech Specs</h2>
          <TechSpecsAccordion tabs={product.techSpecTabs} />
        </div>
      </section>

      {/* ── SECTION 6: RELATED PRODUCTS ──────────────────────────────── */}
      <section className="bg-brand-gray-100 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[32px] font-extrabold text-brand-black mb-12">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
            {product.relatedProducts.map((related) => (
              <Link
                key={related.slug}
                href={`/products/${related.slug}`}
                className="group block hover:scale-[1.01] transition-transform duration-300"
              >
                <div className={`aspect-square rounded-[16px] overflow-hidden flex items-center justify-center ${
                  related.image ? 'bg-white' : 'bg-brand-gray-100'
                }`}>
                  {related.image ? (
                    <Image
                      src={related.image}
                      width={600}
                      height={600}
                      alt={related.name}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <Speaker size={48} className="text-brand-gray-200" />
                  )}
                </div>
                <div className="pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[1px] text-brand-gray-500">
                    {related.category}
                  </p>
                  <h3 className="text-[20px] font-extrabold text-brand-black mt-1">
                    {related.name}
                  </h3>
                  <p className="text-[14px] font-light text-brand-gray-500 mt-1.5 leading-snug line-clamp-2">
                    {related.description}
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <Badge variant="available" />
                    <span className="text-brand-red text-[13px] font-semibold group-hover:underline">
                      View product →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: BOTTOM CTA ─────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 text-center" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[40px] font-extrabold text-white leading-tight">
            Ready to bring Qaissar to your market?
          </h2>
          <p className="text-[18px] font-light text-brand-gray-500 mt-4">
            Apply to become a distributor and get access to pricing, datasheets, and product samples.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/distributor">
              Apply to Become a Distributor
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
