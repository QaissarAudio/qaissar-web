'use client'

export function PrayerSchedulingSection() {
  return (
    <section className="bg-brand-gray-100 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ── IMAGE COLUMN ── */}
          <div className="flex justify-center">

            {/* Outer wrapper — positions glow + phone + cards + floor shadow */}
            <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>

              {/* Layer 1 — Ambient glow behind phone */}
              <div style={{
                position: 'absolute',
                top: '10%',
                left: '-10%',
                width: '70%',
                height: '80%',
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.07) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(24px)',
                zIndex: 0,
                pointerEvents: 'none',
              }} />

              {/* Layer 2 — Phone image with multi-layer shadow */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                flexShrink: 0,
              }}>
                <img
                  src="/images/app/prayer-phone.png"
                  alt="AzanPlay prayer scheduling on iPhone"
                  style={{
                    width: '270px',
                    height: 'auto',
                    marginLeft: '-30px',
                    display: 'block',
                    filter: 'drop-shadow(0 -8px 8px rgba(0,0,0,0.08)) drop-shadow(0 8px 2px rgba(0,0,0,0.13)) drop-shadow(0 32px 72px rgba(0,0,0,0.20))',
                  }}
                />
              </div>

              {/* Layer 3 — Floating prayer cards */}
              <img
                src="/images/app/prayer-cards.png"
                alt="Prayer time cards"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '255px',
                  height: 'auto',
                  display: 'block',
                  marginLeft: '-60px',
                  marginTop: '50px',
                  filter: 'drop-shadow(-6px 12px 28px rgba(0,0,0,0.18))',
                  flexShrink: 0,
                }}
              />

              {/* Layer 4 — Floor shadow ellipse */}
              <div style={{
                position: 'absolute',
                bottom: '-18px',
                left: '5%',
                width: '55%',
                height: '18px',
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.14) 0%, transparent 70%)',
                filter: 'blur(8px)',
                zIndex: 0,
                pointerEvents: 'none',
              }} />

            </div>
          </div>

          {/* ── TEXT COLUMN ── */}
          <div>

            {/* Section label */}
            <span style={{
              display: 'block',
              fontSize: 'var(--text-body-sm)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-brand-red)',
              marginBottom: '16px',
            }}>
              Smart Azan Automation
            </span>

            {/* Headline */}
            <h2 style={{
              fontSize: 'clamp(2rem, 3vw, 2.75rem)',
              fontWeight: 800,
              color: '#1A1A1A',
              lineHeight: 1.15,
              marginBottom: '32px',
            }}>
              Azan Play. Right On Time.
            </h2>

            {/* Before block */}
            <div style={{ marginBottom: '24px' }}>
              <span style={{
                display: 'inline-block',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#888888',
                background: '#F5F5F5',
                borderRadius: '999px',
                padding: '3px 10px',
                marginBottom: '10px',
              }}>
                Before Qaissar
              </span>
              <p style={{
                fontSize: 'var(--text-body)',
                fontWeight: 300,
                color: '#888888',
                lineHeight: 1.7,
                margin: 0,
              }}>
                In restaurants, malls, and offices, staff stop music manually five times every day to play Azan — then restart everything again afterward. Operations interrupted. Every location handles it differently.
              </p>
            </div>

            {/* After block */}
            <div style={{
              marginBottom: '32px',
              borderLeft: '3px solid #E31E24',
              paddingLeft: '16px',
            }}>
              <span style={{
                display: 'inline-block',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#E31E24',
                marginBottom: '10px',
              }}>
                With Qaissar
              </span>
              <p style={{
                fontSize: 'var(--text-body)',
                fontWeight: 300,
                color: '#1A1A1A',
                lineHeight: 1.7,
                margin: 0,
              }}>
                Music fades smoothly at prayer time. Azan plays clearly. Background audio resumes exactly as before. No interruptions. No manual control. No staff involvement.
              </p>
            </div>

            {/* Impact line */}
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              fontWeight: 800,
              color: '#1A1A1A',
              lineHeight: 1.4,
              marginBottom: '28px',
            }}>
              Your audio system respects prayer time automatically — every single day.
            </p>

            {/* AzanPlay badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#1A1A1A',
              color: '#FFFFFF',
              borderRadius: '999px',
              padding: '8px 16px',
              fontSize: '0.8rem',
              fontWeight: 600,
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#E31E24',
                display: 'inline-block',
              }} />
              Powered by AzanPlay
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
