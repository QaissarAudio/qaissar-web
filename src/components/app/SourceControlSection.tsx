'use client'

export function SourceControlSection() {
  return (
    <section className="sound-section">
      <style>{`
  .sound-section {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .sound-inner {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding: 80px 48px;
    display: flex;
    align-items: center;
    gap: 48px;
    min-height: 620px;
  }
  .sound-text-col {
    flex: 0 0 46%;
    max-width: 46%;
  }
  .sound-cards-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
  }
  @media (max-width: 768px) {
    .sound-inner {
      flex-direction: column;
      padding: 48px 24px;
      gap: 32px;
      min-height: auto;
    }
    .sound-text-col {
      flex: none;
      max-width: 100%;
      width: 100%;
    }
    .sound-cards-col {
      flex: none;
      width: 100%;
      align-items: center;
    }
    .sound-card {
      width: 100% !important;
      max-width: 360px;
    }
  }
`}</style>

      {/* Background photo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/images/app/sound-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }} />

      {/* Dark overlay — left heavy, fades right */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(10,8,6,0.95) 0%, rgba(10,8,6,0.85) 18%, rgba(10,8,6,0.30) 32%, rgba(10,8,6,0.00) 50%)',
        zIndex: 1,
      }} />

      {/* Content wrapper */}
      <div className="sound-inner" style={{ position: 'relative', zIndex: 2 }}>

        {/* TEXT COLUMN — left */}
        <div className="sound-text-col">

          {/* Label */}
          <span style={{
            display: 'block',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#E31E24',
            marginBottom: '14px',
          }}>
            Smart Sound Optimization
          </span>

          {/* Headline */}
          <h2 style={{
            fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '14px',
          }}>
            The Right Sound For Every Moment.
          </h2>

          {/* Red underline */}
          <div style={{
            width: '36px',
            height: '3px',
            background: '#E31E24',
            marginBottom: '24px',
          }} />

          {/* With Qaissar block */}
          <div style={{
            borderLeft: '2px solid #E31E24',
            paddingLeft: '14px',
            marginBottom: '32px',
          }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#E31E24',
              marginBottom: '8px',
            }}>
              With Qaissar
            </span>
            <p style={{
              fontSize: '0.9rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8,
              margin: 0,
            }}>
              Switch between music, speech, Quran, and announcement profiles instantly from the app. Adjust EQ, volume, treble, and bass — from anywhere, at any time.
            </p>
          </div>

          {/* 3 Feature rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

            {/* Smart EQ Presets */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <line x1="4" y1="6" x2="4" y2="18"/><line x1="4" y1="9" x2="8" y2="9"/><line x1="4" y1="15" x2="8" y2="15"/>
                <line x1="12" y1="3" x2="12" y2="21"/>
                <line x1="20" y1="6" x2="20" y2="18"/><line x1="16" y1="9" x2="20" y2="9"/><line x1="16" y1="15" x2="20" y2="15"/>
              </svg>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>Smart EQ Presets</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.38)' }}>Optimized for every type of content</div>
              </div>
            </div>

            {/* Smart Scheduling */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <line x1="8" y1="3" x2="8" y2="7"/>
                <line x1="16" y1="3" x2="16" y2="7"/>
                <polyline points="9 16 11 18 15 14"/>
              </svg>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>Smart Scheduling</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.38)' }}>Automate your full audio day, once</div>
              </div>
            </div>

            {/* Multiple Audio Sources */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="23 4 23 10 17 10"/>
                <polyline points="1 20 1 14 7 14"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
              </svg>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>Multiple Audio Sources</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.38)' }}>BT, SD, USB, Radio — switch instantly</div>
              </div>
            </div>

          </div>
        </div>

        {/* CARDS COLUMN — right */}
        <div className="sound-cards-col">

          {/* Card 1 — Audio Source */}
          <div className="sound-card" style={{
            background: 'rgba(28,32,50,0.92)',
            borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.11)',
            padding: '13px 15px',
            width: '192px',
            boxShadow: '0 8px 28px rgba(0,0,0,0.55)',
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff', marginBottom: '9px' }}>Audio Source</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
              {[
                { label: 'BT', active: false },
                { label: 'USB', active: false },
                { label: 'SD', active: true },
                { label: 'Radio', active: false },
              ].map((src) => (
                <div key={src.label} style={{
                  background: src.active ? '#ebebeb' : '#262b40',
                  borderRadius: '8px',
                  padding: '7px 9px',
                  fontSize: '10px',
                  fontWeight: src.active ? 700 : 500,
                  color: src.active ? '#111' : 'rgba(255,255,255,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}>
                  {src.label}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — Equalizer */}
          <div className="sound-card" style={{
            background: 'rgba(28,32,50,0.92)',
            borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.11)',
            padding: '13px 15px',
            width: '192px',
            boxShadow: '0 8px 28px rgba(0,0,0,0.55)',
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Equalizer</div>
            <div style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Recommended Presets</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '4px', marginBottom: '9px' }}>
              {['Normal','Acoustic','Classic','Dance','Hiphop','Rock','Pop','Jazz','Vocal'].map((p) => (
                <div key={p} style={{
                  background: p === 'Pop' ? '#E31E24' : '#262b40',
                  borderRadius: '6px',
                  padding: '5px 2px',
                  fontSize: '9px',
                  fontWeight: p === 'Pop' ? 700 : 500,
                  color: p === 'Pop' ? '#fff' : 'rgba(255,255,255,0.45)',
                  textAlign: 'center',
                }}>{p}</div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.35)' }}>Treble</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                {['−','3','+'].map((v) => (
                  <div key={v} style={{
                    width: v === '3' ? 'auto' : '18px', height: '18px',
                    minWidth: '18px',
                    borderRadius: '50%',
                    background: v === '3' ? 'transparent' : '#262b40',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: v === '3' ? '11px' : '11px',
                    fontWeight: v === '3' ? 800 : 400,
                    color: v === '3' ? '#E31E24' : 'rgba(255,255,255,0.65)',
                  }}>{v}</div>
                ))}
              </div>
              <div style={{ width: '1px', height: '18px', background: 'rgba(255,255,255,0.07)' }} />
              <span style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.35)' }}>Bass</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                {['−','3','+'].map((v) => (
                  <div key={v} style={{
                    width: v === '3' ? 'auto' : '18px', height: '18px',
                    minWidth: '18px',
                    borderRadius: '50%',
                    background: v === '3' ? 'transparent' : '#262b40',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: v === '3' ? 800 : 400,
                    color: v === '3' ? '#E31E24' : 'rgba(255,255,255,0.65)',
                  }}>{v}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3 — Schedule Mode */}
          <div className="sound-card" style={{
            background: 'rgba(28,32,50,0.92)',
            borderRadius: '14px',
            border: '1px solid rgba(255,255,255,0.11)',
            padding: '13px 15px',
            width: '192px',
            boxShadow: '0 8px 28px rgba(0,0,0,0.55)',
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff', marginBottom: '9px' }}>Schedule Mode</div>
            <div style={{ background: '#262b40', borderRadius: '8px', padding: '6px 9px', marginBottom: '5px' }}>
              <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>Select File</div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#fff' }}>014Maghrib.wav</div>
            </div>
            <div style={{ background: '#262b40', borderRadius: '8px', padding: '6px 9px', marginBottom: '7px' }}>
              <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>From</div>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#fff' }}>12:00</div>
            </div>
            <div style={{ display: 'flex', gap: '5px', marginBottom: '7px' }}>
              <div style={{ flex: 1, borderRadius: '8px', padding: '6px 3px', fontSize: '10px', fontWeight: 700, textAlign: 'center', background: '#E31E24', color: '#fff' }}>One time</div>
              <div style={{ flex: 1, borderRadius: '8px', padding: '6px 3px', fontSize: '10px', fontWeight: 700, textAlign: 'center', background: '#262b40', color: 'rgba(255,255,255,0.4)' }}>Repeat</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '3px' }}>
              {[
                { d: 'Sat', a: false }, { d: 'Sun', a: false }, { d: 'Mon', a: true }, { d: 'Tue', a: false },
                { d: 'Wed', a: false }, { d: 'Thu', a: false }, { d: 'Fri', a: true }, { d: '', a: false },
              ].map((day, i) => (
                <div key={i} style={{
                  background: day.a ? '#2e3450' : '#262b40',
                  borderRadius: '5px', padding: '3px 0',
                  fontSize: '8px', textAlign: 'center',
                  color: day.a ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
                  fontWeight: day.a ? 700 : 400,
                }}>{day.d}</div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
