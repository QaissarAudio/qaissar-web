'use client'

import { useRef, useEffect, useState } from 'react'

export function PrayerSchedulingSection() {
  const textRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(680)

  useEffect(() => {
    if (textRef.current) {
      setContainerHeight(textRef.current.offsetHeight)
    }
  }, [])

  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Image column */}
          <div className="flex justify-center md:order-1">
            <div style={{
              width: '393px',
              maxWidth: '100%',
              height: containerHeight,
              border: '2px solid #1A1A1A',
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <img
                src="/images/app/prayer-scheduling.png"
                alt="Prayer time scheduling"
                className="animate-scroll-image"
                style={{
                  width: '100%',
                  height: 'auto',
                  minHeight: '200%',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Text column */}
          <div className="md:order-2" ref={textRef}>
            <span className="text-[var(--text-caption)] font-semibold uppercase tracking-widest text-brand-red">
              Prayer Time Scheduling
            </span>
            <h2 className="mt-3 text-[var(--text-h3)] md:text-[var(--text-h2)] font-extrabold text-brand-black leading-tight">
              Automated Azan. Zero Manual Work.
            </h2>
            <p className="mt-4 text-[var(--text-body)] font-light text-brand-gray-500 leading-relaxed">
              Powered by AzanPlay, the app automatically schedules Azan for all five daily prayers based on your location. Set it once — it runs every day, precisely on time, across every speaker in your system.
            </p>
            <span className="inline-block mt-4 bg-brand-gray-100 text-brand-gray-500 text-[var(--text-caption)] px-3 py-1 rounded-full">
              Powered by AzanPlay
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
