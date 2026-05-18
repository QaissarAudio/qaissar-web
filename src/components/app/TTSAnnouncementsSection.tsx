'use client'

import { useRef, useEffect, useState } from 'react'

export function TTSAnnouncementsSection() {
  const textRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(480)

  useEffect(() => {
    if (textRef.current) {
      setContainerHeight(textRef.current.offsetHeight)
    }
  }, [])

  return (
    <section className="bg-brand-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Text column — LEFT */}
          <div className="md:order-1" ref={textRef}>
            <span className="text-[var(--text-caption)] font-semibold uppercase tracking-widest text-brand-red">
              AI Announcements
            </span>
            <h2 className="mt-3 text-[var(--text-h3)] md:text-[var(--text-h2)] font-extrabold text-brand-black leading-tight">
              Type It. The System Says It.
            </h2>
            <p className="mt-4 text-[var(--text-body)] font-light text-brand-gray-500 leading-relaxed">
              Send live announcements in Arabic or English directly from your phone. The AI voice engine converts your message into a natural-sounding announcement broadcast across all zones instantly.
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
                src="/images/app/tts-announcements.png"
                alt="AI announcements screen"
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

        </div>
      </div>
    </section>
  )
}
