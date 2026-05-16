import type { Metadata } from 'next'
import { QaissarLogo } from '@/components/logo/QaissarLogo'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'UI System — Qaissar',
  description: 'Internal design system reference',
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl p-8 mb-6">
      <p className="text-brand-red text-xs font-semibold uppercase tracking-wider mb-6">
        {title}
      </p>
      {children}
    </div>
  )
}

const brandColors = [
  { name: 'brand-black',   hex: '#1A1A1A', bg: '#1A1A1A', token: '--color-brand-black' },
  { name: 'brand-white',   hex: '#FFFFFF', bg: '#FFFFFF', token: '--color-brand-white', border: true },
  { name: 'brand-red',     hex: '#E31E24', bg: '#E31E24', token: '--color-brand-red' },
  { name: 'brand-gray-100',hex: '#F5F5F5', bg: '#F5F5F5', token: '--color-brand-gray-100', border: true },
  { name: 'brand-gray-200',hex: '#E8E8E8', bg: '#E8E8E8', token: '--color-brand-gray-200', border: true },
  { name: 'brand-gray-500',hex: '#888888', bg: '#888888', token: '--color-brand-gray-500' },
  { name: 'brand-gray-800',hex: '#333333', bg: '#333333', token: '--color-brand-gray-800' },
]

const typeScale = [
  { token: 'display',  size: '3.75rem', cssVar: 'var(--text-display)',  weight: 'font-extrabold', label: '60px — display' },
  { token: 'h1',       size: '3rem',    cssVar: 'var(--text-h1)',       weight: 'font-extrabold', label: '48px — h1' },
  { token: 'h2',       size: '2.25rem', cssVar: 'var(--text-h2)',       weight: 'font-extrabold', label: '36px — h2' },
  { token: 'h3',       size: '1.5rem',  cssVar: 'var(--text-h3)',       weight: 'font-extrabold', label: '24px — h3' },
  { token: 'h4',       size: '1.25rem', cssVar: 'var(--text-h4)',       weight: 'font-extrabold', label: '20px — h4' },
  { token: 'body-lg',  size: '1.125rem',cssVar: 'var(--text-body-lg)',  weight: 'font-light',     label: '18px — body-lg' },
  { token: 'body',     size: '1rem',    cssVar: 'var(--text-body)',     weight: 'font-light',     label: '16px — body' },
  { token: 'body-sm',  size: '0.875rem',cssVar: 'var(--text-body-sm)',  weight: 'font-light',     label: '14px — body-sm' },
  { token: 'label',    size: '0.8125rem',cssVar:'var(--text-label)',    weight: 'font-semibold',  label: '13px — label' },
  { token: 'caption',  size: '0.75rem', cssVar: 'var(--text-caption)',  weight: 'font-light',     label: '12px — caption' },
]

const arabicTypeScale = [
  { token: 'display', cssVar: 'var(--text-display)', weight: 'font-extrabold', label: '60px — display' },
  { token: 'h1',      cssVar: 'var(--text-h1)',      weight: 'font-extrabold', label: '48px — h1' },
  { token: 'h2',      cssVar: 'var(--text-h2)',      weight: 'font-extrabold', label: '36px — h2' },
  { token: 'body-lg', cssVar: 'var(--text-body-lg)', weight: 'font-light',     label: '18px — body-lg' },
  { token: 'body',    cssVar: 'var(--text-body)',    weight: 'font-light',     label: '16px — body' },
]

const radiusTokens = [
  { token: 'radius-sm',   label: 'sm',   value: '8px',    cssVar: 'var(--radius-sm)' },
  { token: 'radius-md',   label: 'md',   value: '12px',   cssVar: 'var(--radius-md)' },
  { token: 'radius-lg',   label: 'lg',   value: '16px',   cssVar: 'var(--radius-lg)' },
  { token: 'radius-xl',   label: 'xl',   value: '24px',   cssVar: 'var(--radius-xl)' },
  { token: 'radius-full', label: 'full', value: '9999px', cssVar: 'var(--radius-full)' },
]

const shadowTokens = [
  { token: '--shadow-sm', label: 'shadow-sm', cssVar: 'var(--shadow-sm)', desc: '0 1px 3px / 8%' },
  { token: '--shadow-md', label: 'shadow-md', cssVar: 'var(--shadow-md)', desc: '0 4px 16px / 8%' },
  { token: '--shadow-lg', label: 'shadow-lg', cssVar: 'var(--shadow-lg)', desc: '0 8px 32px / 10%' },
]

export default function UISystemPage() {
  return (
    <div className="bg-brand-gray-100 min-h-screen">

      {/* Header */}
      <div className="bg-brand-black text-white py-12 px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[32px] font-extrabold text-white">Qaissar UI System</h1>
          <p className="text-brand-gray-500 mt-2 font-light">
            Internal design reference — not linked publicly
          </p>
        </div>
      </div>

      <div className="py-8 px-4 max-w-5xl mx-auto">

        {/* Colors */}
        <SectionCard title="Brand Colors">
          <div className="flex flex-wrap gap-6">
            {brandColors.map((color) => (
              <div key={color.name} className="flex flex-col gap-2">
                <div
                  className={`w-24 h-24 rounded-lg ${color.border ? 'border border-brand-gray-200' : ''}`}
                  style={{ backgroundColor: color.bg }}
                />
                <p className="text-[13px] font-semibold text-brand-black">{color.hex}</p>
                <p className="text-[11px] text-brand-gray-500">{color.token}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Typography */}
        <SectionCard title="Type Scale">
          <div className="flex flex-col divide-y divide-brand-gray-100">
            {typeScale.map((t) => (
              <div key={t.token} className="py-4 flex items-baseline gap-6 flex-wrap">
                <div className="w-32 shrink-0">
                  <p className="text-[11px] font-semibold text-brand-gray-500 uppercase tracking-wide">
                    --text-{t.token}
                  </p>
                  <p className="text-[11px] text-brand-gray-500 mt-0.5">{t.label}</p>
                </div>
                <p
                  className={`text-brand-black ${t.weight}`}
                  style={{ fontSize: t.cssVar, lineHeight: 1.2 }}
                >
                  The quick brown fox
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Arabic Typography */}
        <SectionCard title="Arabic Typography">
          <div className="flex flex-col divide-y divide-brand-gray-100">
            {arabicTypeScale.map((t) => (
              <div key={t.token} className="py-4 flex items-baseline gap-6 flex-wrap">
                <div className="w-32 shrink-0">
                  <p className="text-[11px] font-semibold text-brand-gray-500 uppercase tracking-wide">
                    --text-{t.token}
                  </p>
                  <p className="text-[11px] text-brand-gray-500 mt-0.5">{t.label}</p>
                </div>
                <p
                  className={`text-brand-black ${t.weight}`}
                  style={{ fontSize: t.cssVar, fontFamily: 'var(--font-arabic)', direction: 'rtl', lineHeight: 1.2 }}
                >
                  الصوت التجاري الاحترافي
                </p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-brand-gray-500 mt-6 pt-6 border-t border-brand-gray-100">
            Changa — dual-script font supporting Arabic + Latin. For reference only.
          </p>
        </SectionCard>

        {/* Logo */}
        <SectionCard title="Logo">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <div key={`dark-${size}`} className="bg-white border border-brand-gray-200 rounded-lg p-6 flex flex-col items-center gap-3">
                <QaissarLogo size={size} variant="dark" />
                <p className="text-[11px] text-brand-gray-500">dark / {size}</p>
              </div>
            ))}
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <div key={`light-${size}`} className="bg-brand-black rounded-lg p-6 flex flex-col items-center gap-3">
                <QaissarLogo size={size} variant="light" />
                <p className="text-[11px] text-brand-gray-500">light / {size}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Buttons */}
        <SectionCard title="Buttons">
          <div className="flex flex-col gap-8">
            {(['primary', 'secondary', 'ghost'] as const).map((variant) => (
              <div key={variant}>
                <p className="text-[11px] font-semibold text-brand-gray-500 uppercase tracking-wide mb-4">
                  {variant}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  {(['sm', 'md', 'lg'] as const).map((size) => (
                    <div key={size} className="flex flex-col items-center gap-2">
                      <Button variant={variant} size={size} href="#">
                        Button
                      </Button>
                      <p className="text-[11px] text-brand-gray-500">{size}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Badges */}
        <SectionCard title="Badges">
          <div className="flex flex-wrap items-center gap-6">
            {(['available', 'coming-soon', 'featured'] as const).map((variant) => (
              <div key={variant} className="flex flex-col items-center gap-2">
                <Badge variant={variant} />
                <p className="text-[11px] text-brand-gray-500">{variant}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Spacing & Radius */}
        <SectionCard title="Spacing & Radius">
          <div className="flex flex-wrap gap-8">
            {radiusTokens.map((r) => (
              <div key={r.token} className="flex flex-col items-center gap-3">
                <div
                  className="w-20 h-20 border-2 border-brand-black bg-brand-gray-100"
                  style={{ borderRadius: r.cssVar }}
                />
                <div className="text-center">
                  <p className="text-[12px] font-semibold text-brand-black">--{r.token}</p>
                  <p className="text-[11px] text-brand-gray-500">{r.value}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Shadows */}
        <SectionCard title="Shadows">
          <div className="flex flex-wrap gap-8">
            {shadowTokens.map((s) => (
              <div key={s.token} className="flex flex-col items-center gap-4">
                <div
                  className="w-36 h-20 bg-white rounded-lg"
                  style={{ boxShadow: s.cssVar }}
                />
                <div className="text-center">
                  <p className="text-[12px] font-semibold text-brand-black">{s.token}</p>
                  <p className="text-[11px] text-brand-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

      </div>
    </div>
  )
}
