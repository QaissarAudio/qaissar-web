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
                    width: '275px',
                    height: 'auto',
                    marginLeft: '-30px',
                    display: 'block',
                    filter: 'drop-shadow(0 -8px 8px rgba(0,0,0,0.08)) drop-shadow(0 8px 2px rgba(0,0,0,0.13)) drop-shadow(0 32px 72px rgba(0,0,0,0.20))',
                  }}
                />
              </div>

              {/* Layer 3 — Floating prayer cards */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                marginLeft: '-63px',
                marginTop: '50px',
                flexShrink: 0,
                width: '235px',
                background: '#2D3148',
                borderRadius: '18px',
                padding: '15px',
                boxShadow: '-6px 12px 28px rgba(0,0,0,0.22)',
              }}>

                {/* Active Now label */}
                <div style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#E31E24',
                  marginBottom: '14px',
                  letterSpacing: '0.01em',
                }}>
                  Active Now
                </div>

                {/* Row 1 — Prayer name + time + toggle */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}>
                  <span style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#ffffff',
                  }}>
                    Dhuhr
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      background: '#3D4260',
                      borderRadius: '999px',
                      padding: '4px 12px',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.8)',
                    }}>
                      12:13
                    </span>
                    {/* Toggle — ON state */}
                    <div style={{
                      width: '44px',
                      height: '26px',
                      background: '#E31E24',
                      borderRadius: '999px',
                      position: 'relative',
                      flexShrink: 0,
                    }}>
                      <div style={{
                        position: 'absolute',
                        right: '3px',
                        top: '3px',
                        width: '20px',
                        height: '20px',
                        background: '#ffffff',
                        borderRadius: '50%',
                      }} />
                    </div>
                  </div>
                </div>

                {/* Row 2 — Mute Before / After */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px',
                }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.6)',
                  }}>
                    Mute: Before
                  </span>
                  <span style={{
                    background: '#3D4260',
                    borderRadius: '999px',
                    padding: '3px 12px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#ffffff',
                  }}>
                    3
                  </span>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.6)',
                  }}>
                    After :
                  </span>
                  <span style={{
                    background: '#3D4260',
                    borderRadius: '999px',
                    padding: '3px 12px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#ffffff',
                  }}>
                    5
                  </span>
                </div>

                {/* Row 3 — Azan Sound */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.6)',
                  }}>
                    Azan Sound
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {/* Dropdown pill */}
                    <div style={{
                      background: '#3D4260',
                      borderRadius: '8px',
                      padding: '5px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#ffffff',
                    }}>
                      Azan1
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                    {/* Play/Pause button */}
                    <div style={{
                      background: '#3D4260',
                      borderRadius: '8px',
                      width: '34px',
                      height: '34px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)" stroke="none">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                        <line x1="19" y1="5" x2="19" y2="19" stroke="rgba(255,255,255,0.8)" strokeWidth="3" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>

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
