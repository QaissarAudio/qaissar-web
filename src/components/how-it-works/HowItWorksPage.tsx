'use client'

import { FocusRailCarousel } from './FocusRailCarousel'

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
        @keyframes phonesEntrance {
          0% {
            transform: scale(1.08);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .hiw-phones-anim {
          animation: phonesEntrance 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: center bottom;
        }
      `}</style>

      {/* ── SECTION 1: HERO ── */}
      <section style={{
        background: '#080808',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Red glow */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(180,20,20,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Top accent line */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(227,30,36,0.5), transparent)',
        }} />

        {/* Text content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>

          {/* Label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '28px',
          }}>
            <div style={{ width: '32px', height: '1px', background: 'rgba(227,30,36,0.4)' }} />
            <span style={{
              fontSize: '18px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(227,30,36,0.85)',
            }}>
              How It Works
            </span>
            <div style={{ width: '32px', height: '1px', background: 'rgba(227,30,36,0.4)' }} />
          </div>

          {/* Static headline */}
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

          {/* Animated word */}
          <div style={{
            height: 'clamp(80px, 12vw, 90px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginBottom: '48px',
          }}>
            {[
              'Every Restaurant.',
              'Every Gym.',
              'Every Hotel.',
              'Every Retail.',
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

        </div>

        {/* Phone image — bottom, no padding */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '900px',
          marginTop: 'auto',
        }}>
          {/* Bottom fade over phones */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '120px',
            background: 'linear-gradient(to top, #080808 0%, transparent 100%)',
            zIndex: 3,
            pointerEvents: 'none',
          }} />
          <img
            src="/images/how-it-works/hero-phones.png"
            alt="Qaissar app on iPhone"
            className="hiw-phones-anim"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
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
              if (prevEl) { prevEl.style.opacity = '0'; prevEl.style.transform = 'translateY(14px)'; }
              if (curEl) { curEl.style.opacity = '1'; curEl.style.transform = 'translateY(0)'; }
            }, 2200);
          })();
        `}} />

      </section>

      {/* ── FOCUS RAIL COMPARISON ── */}
      <section style={{ background: '#FFFFFF', paddingTop: '96px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px', textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            display: 'block',
            fontSize: '0.7rem',
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
      </section>
      <FocusRailCarousel
        loop={true}
        autoPlay={true}
        interval={4000}
        items={[
          {
            id: 1,
            title: 'Restaurants & Cafes',
            description: 'Background music + prayer compliance, hands-free every day.',
            meta: 'Commercial Audio',
            imageSrc: '/images/how-it-works/restaurant-cafes.jpg',
          },
          {
            id: 2,
            title: 'Gyms & Fitness',
            description: 'High-energy music + scheduled announcements + prayer times.',
            meta: 'Commercial Audio',
            imageSrc: '/images/how-it-works/gym-fitness.jpg',
          },
          {
            id: 3,
            title: 'Retail & Malls',
            description: 'Atmosphere music + promotions + prayer compliance at scale.',
            meta: 'Commercial Audio',
            imageSrc: '/images/how-it-works/retail-malls.jpg',
          },
          {
            id: 4,
            title: 'Hospitality & Hotels',
            description: 'Consistent background audio across every floor, prayer aware.',
            meta: 'Commercial Audio',
            imageSrc: '/images/how-it-works/hospitality-hotels.jpg',
          },
          {
            id: 5,
            title: 'Clinics & Offices',
            description: 'Scheduled announcements + compliant audio zones, always on.',
            meta: 'Commercial Audio',
            imageSrc: '/images/how-it-works/clinics-offices.jpg',
          },
          {
            id: 6,
            title: 'Commercial Venues',
            description: 'Full audio day automated from one device, zero staff effort.',
            meta: 'Commercial Audio',
            imageSrc: '/images/how-it-works/commercial-venues.jpg',
          },
        ]}
      />

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
