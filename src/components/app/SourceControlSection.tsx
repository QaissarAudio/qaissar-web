'use client'

import { useRef, useEffect, useState } from 'react'

export function SourceControlSection() {
  const textRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(480)

  useEffect(() => {
    if (textRef.current) {
      setContainerHeight(textRef.current.offsetHeight)
    }
  }, [])

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Text column — LEFT */}
          <div className="md:order-1" ref={textRef}>
            <span className="text-[var(--text-caption)] font-semibold uppercase tracking-widest text-brand-red">
              Source Control
            </span>
            <h2 className="mt-3 text-[var(--text-h3)] md:text-[var(--text-h2)] font-extrabold text-brand-black leading-tight">
              Switch Sources Instantly.
            </h2>
            <p className="mt-4 text-[var(--text-body)] font-light text-brand-gray-500 leading-relaxed">
              Choose between Bluetooth, SD card, USB, internet radio, or microphone input from the app. One tap switches the audio source across your entire system — no physical access required.
            </p>
          </div>

          {/* Image column — RIGHT */}
          <div className="flex justify-center md:order-2">
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
                src="/images/app/source-control.png"
                alt="Audio source control screen"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
