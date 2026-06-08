'use client'

import { useEffect, useRef } from 'react'

import { LearnMoreCtaButton } from '@/components/ui/LearnMoreCtaButton'
import { STUDIO_PARALLAX_ROWS } from '@/components/studio/studio-parallax-content'

const STUDIO_APP_URL =
  process.env.NEXT_PUBLIC_STUDIO_APP_URL ?? 'https://studio.qaissar.com'

const GET_STARTED_URL = `${STUDIO_APP_URL}/en/register`
const LOGIN_URL = `${STUDIO_APP_URL}/en/login`

export function StudioHeroSection() {
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const row3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${y * -0.2}px)`
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${y * 0.2}px)`
      if (row3Ref.current) row3Ref.current.style.transform = `translateX(${y * -0.2}px)`
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="studio-hero" id="hero">
      <div className="studio-hero__stage">
        <div className="studio-hero__backdrop" aria-hidden="true">
          <div className="studio-hero__parallax">
            {STUDIO_PARALLAX_ROWS.map((row, rowIndex) => (
              <div
                key={rowIndex}
                ref={rowIndex === 0 ? row1Ref : rowIndex === 1 ? row2Ref : row3Ref}
                className={
                  rowIndex === 1
                    ? 'studio-hero__parallax-row studio-hero__parallax-row--offset'
                    : 'studio-hero__parallax-row'
                }
              >
                {row.map((tile) => (
                  <div key={tile.alt} className="studio-hero__parallax-tile">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tile.src} alt={tile.alt} loading="lazy" />
                    <div className="studio-hero__parallax-overlay">
                      <span>{tile.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="studio-hero__scrim" aria-hidden="true" />

        <div className="studio-hero__content">
          <p className="studio-hero__eyebrow">Qaissar Studio</p>
          <h1 className="studio-hero__title">
            One dashboard. Every location.
            <br />
            <span className="studio-hero__accent">Always on brand.</span>
          </h1>
          <p className="studio-hero__subtitle">
            Schedule playlists, prayer times, announcements, and AI-generated ads — stream live
            to restaurants, cafés, gyms, and masjids with studio-grade precision.
          </p>
          <div className="studio-hero__actions">
            <LearnMoreCtaButton
              href={GET_STARTED_URL}
              label="Get started"
              external
              variant="studio-primary"
            />
            <LearnMoreCtaButton
              href={LOGIN_URL}
              label="Login"
              external
              variant="studio-ghost"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioHeroSection
