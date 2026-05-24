'use client'

export function HowItWorksPage() {
  return (
    <>

      <style>{`
        @media (max-width: 768px) {
          .hiw-grid { grid-template-columns: 1fr !important; }
          .hiw-steps { grid-template-columns: 1fr !important; }
          .hiw-section-header { padding: 0 24px !important; text-align: left !important; }
          .hiw-card { margin: 0 !important; }
        }
      `}</style>

      {/* ── SECTION 1: HERO — Cinematic animated ── */}
      <section style={{
        background: '#080808',
        minHeight: '560px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '60px 24px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Red glow center */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '350px',
          background: 'radial-gradient(ellipse at center, rgba(180,20,20,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Top accent line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(227,30,36,0.5), transparent)',
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>

          {/* Label with side lines */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '36px',
          }}>
            <div style={{ width: '32px', height: '1px', background: 'rgba(227,30,36,0.4)' }} />
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(227,30,36,0.85)',
            }}>
              How It Works
            </span>
            <div style={{ width: '32px', height: '1px', background: 'rgba(227,30,36,0.4)' }} />
          </div>

          {/* Static line */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 800,
            color: 'rgba(255,255,255,0.92)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '4px',
          }}>
            One System.
          </h1>

          {/* Animated line */}
          <div style={{
            height: 'clamp(80px, 12vw, 80px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginBottom: '40px',
            overflow: 'visible',
          }}>
            {[
              'Every Restaurant.',
              'Every Gym.',
              'Every Hotel.',
              'Every  Store.',
              'Every Clinic.',
              'Every Venue.',
            ].map((text, i) => (
              <div
                key={text}
                id={`hiw-word-${i}`}
                style={{
                  position: 'absolute',
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  color: '#E31E24',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  opacity: 0,
                  transform: 'translateY(14px)',
                  transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                  textShadow: '0 0 60px rgba(227,30,36,0.2)',
                }}
              >
                {text}
              </div>
            ))}
          </div>

          {/* Subtext */}
          <p style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.38)',
            lineHeight: 1.8,
            maxWidth: '440px',
            margin: '0 auto 44px',
            letterSpacing: '0.01em',
          }}>
            One device. One app. Zero daily effort — for any commercial space, anywhere in the world.
          </p>

          {/* CTA button */}
          <button
            onClick={() => {
              document.getElementById('business-types')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              display: 'inline-block',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'transparent',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '13px 36px',
              borderRadius: '999px',
              cursor: 'pointer',
              marginBottom: '40px',
            }}
          >
            Discover How ↓
          </button>

          {/* Dot indicators */}
          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
            {[0,1,2,3,4,5].map((i) => (
              <div
                key={i}
                id={`hiw-dot-${i}`}
                style={{
                  width: i === 0 ? '32px' : '20px',
                  height: '2px',
                  borderRadius: '1px',
                  background: i === 0 ? '#E31E24' : 'rgba(255,255,255,0.12)',
                  transition: 'all 0.4s ease',
                }}
              />
            ))}
          </div>

        </div>

        {/* Animation script */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var cur = 0;
            var total = 6;
            var el = document.getElementById('hiw-word-0');
            if (el) {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }
            setInterval(function() {
              var prev = cur;
              cur = (cur + 1) % total;
              var prevEl = document.getElementById('hiw-word-' + prev);
              var curEl = document.getElementById('hiw-word-' + cur);
              var prevDot = document.getElementById('hiw-dot-' + prev);
              var curDot = document.getElementById('hiw-dot-' + cur);
              if (prevEl) { prevEl.style.opacity = '0'; prevEl.style.transform = 'translateY(14px)'; }
              if (curEl) { curEl.style.opacity = '1'; curEl.style.transform = 'translateY(0)'; }
              if (prevDot) { prevDot.style.width = '20px'; prevDot.style.background = 'rgba(255,255,255,0.12)'; }
              if (curDot) { curDot.style.width = '32px'; curDot.style.background = '#E31E24'; }
            }, 2200);
          })();
        `}} />

      </section>

      {/* ── SECTION 2: BUSINESS TYPES GRID — Sonos style ── */}
      <section id="business-types" style={{
        background: '#FFFFFF',
        padding: '96px 0',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }}>

          {/* Section header */}
          <div className="hiw-section-header" style={{
            textAlign: 'center',
            marginBottom: '72px',
          }}>
            <span style={{
              display: 'block',
              fontSize: '1.5rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E31E24',
              marginBottom: '16px',
            }}>
              Who It&apos;s For
            </span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.75rem)',
              fontWeight: 800,
              color: '#1A1A1A',
              lineHeight: 1.15,
            }}>
              Built for Every Commercial Space.
            </h2>
          </div>

          {/* Grid */}
          <div className="hiw-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px 32px',
          }}>
            {[
              {
                label: 'Restaurants & Cafes',
                description: 'Background music + prayer compliance, hands-free every day.',
                image: '/images/how-it-works/restaurant-cafes.jpg',
              },
              {
                label: 'Gyms & Fitness',
                description: 'High-energy music + scheduled announcements + prayer times.',
                image: '/images/how-it-works/gym-fitness.jpg',
              },
              {
                label: 'Retail & Malls',
                description: 'Atmosphere music + promotions + prayer compliance at scale.',
                image: '/images/how-it-works/retail-malls.jpg',
              },
              {
                label: 'Hospitality & Hotels',
                description: 'Consistent background audio across every floor, prayer aware.',
                image: '/images/how-it-works/hospitality-hotels.jpg',
              },
              {
                label: 'Clinics & Offices',
                description: 'Scheduled announcements + compliant audio zones, always on.',
                image: '/images/how-it-works/clinics-offices.jpg',
              },
              {
                label: 'Commercial Venues',
                description: 'Full audio day automated from one device, zero staff effort.',
                image: '/images/how-it-works/commercial-venues.jpg',
              },
            ].map((item) => (
              <div key={item.label} className="hiw-card">

                {/* Image area */}
                <img
                  src={item.image}
                  alt={item.label}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    if (target.nextSibling) {
                      (target.nextSibling as HTMLElement).style.display = 'flex'
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    display: 'block',
                    marginBottom: '20px',
                  }}
                />
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '280px',
                  background: '#F0F0F0',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#BBBBBB',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>
                    Image / Video
                  </span>
                </div>

                {/* Text */}
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: '#1A1A1A',
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}>
                  {item.label}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#888888',
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  {item.description}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HOW THE SYSTEM WORKS ── */}
      <section style={{
        background: '#F5F5F5',
        padding: '96px 24px',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Section header */}
          <div className="hiw-section-header" style={{ textAlign: 'center', marginBottom: '72px' }}>
            <span style={{
              display: 'block',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E31E24',
              marginBottom: '16px',
            }}>
              The Process
            </span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.75rem)',
              fontWeight: 800,
              color: '#1A1A1A',
              lineHeight: 1.15,
            }}>
              Set It Once. It Runs Forever.
            </h2>
          </div>

          {/* 3 steps */}
          <div className="hiw-steps" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            alignItems: 'start',
          }}>
            {[
              {
                number: '01',
                title: 'Install',
                description: 'Connect the QB Mini to your speakers in minutes. No technician required. No complex wiring.',
                svg: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>,
              },
              {
                number: '02',
                title: 'Configure',
                description: 'Open the Qaissar app. Set your schedule, prayer times, announcements, and audio sources — once.',
                svg: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07M4.93 4.93a10 10 0 000 14.14M8.46 8.46a5 5 0 000 7.07"/></svg>,
              },
              {
                number: '03',
                title: 'Runs Automatically',
                description: 'Prayer times, music, announcements — your entire audio day runs on its own, every single day.',
                svg: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E31E24" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>,
              },
            ].map((step) => (
              <div key={step.number} style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '40px 32px',
                position: 'relative',
              }}>
                {/* Step number */}
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: '#F0F0F0',
                  lineHeight: 1,
                  marginBottom: '20px',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {step.number}
                </div>

                {/* Icon */}
                {step.svg}

                {/* Title */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#1A1A1A',
                  marginTop: '16px',
                  marginBottom: '12px',
                }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  color: '#888888',
                  lineHeight: 1.75,
                  margin: 0,
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CTA BAND ── */}
      <section style={{
        background: '#E31E24',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}>
            Ready to Bring Qaissar to Your Market?
          </h2>
          <p style={{
            fontSize: '1rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '36px',
            lineHeight: 1.7,
          }}>
            Join our distributor network across GCC, Iraq, and Southeast Asia.
          </p>
          <a href="/distributor" style={{
            display: 'inline-block',
            background: '#FFFFFF',
            color: '#E31E24',
            fontWeight: 800,
            fontSize: '0.95rem',
            padding: '16px 40px',
            borderRadius: '999px',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}>
            Become a Distributor
          </a>
        </div>
      </section>

    </>
  )
}
