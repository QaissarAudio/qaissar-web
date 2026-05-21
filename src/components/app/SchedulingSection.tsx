'use client'

export function SchedulingSection() {
  return (
   // <section style={{ background: '#F9F8F7', paddingTop: '96px', paddingBottom: '80px' }}>
      <section className="bg-brand-gray-100 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">

          {/* ── IMAGE COLUMN (left — 3/5) ── */}
          <div className="md:col-span-3" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img
              src="/images/app/scheduling.png"
              alt="Qaissar app scheduling interface showing prayer time and week day configuration"
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>

          {/* ── TEXT COLUMN (right — 2/5) ── */}
          <div className="md:col-span-2">

            {/* Section label */}
            <span style={{
              display: 'block',
              fontSize: 'var(--text-body-sm)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#E31E24',
              marginBottom: '16px',
            }}>
              Smart Audio Scheduling
            </span>

            {/* Headline */}
            <h2 style={{
              fontSize: 'clamp(2rem, 3vw, 2.75rem)',
              fontWeight: 800,
              color: '#1A1A1A',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}>
              The Audio System That Runs Itself.
            </h2>

            {/* Red underline accent */}
            <div style={{
              width: '40px',
              height: '3px',
              background: '#E31E24',
              marginBottom: '28px',
            }} />

            {/* Body paragraphs */}
            <p style={{
              fontSize: 'var(--text-body)',
              fontWeight: 300,
              color: '#1A1A1A',
              lineHeight: 1.7,
              marginBottom: '16px',
            }}>
              Create your schedule once in the app.
            </p>

            <p style={{
              fontSize: 'var(--text-body)',
              fontWeight: 300,
              color: '#555555',
              lineHeight: 1.7,
              marginBottom: '16px',
            }}>
              Opening music, prayer events, promotional announcements, internet radio, and closing reminders all run automatically — every single day.
            </p>

            <p style={{
              fontSize: 'var(--text-body)',
              fontWeight: 600,
              color: '#1A1A1A',
              lineHeight: 1.7,
              marginBottom: '40px',
            }}>
              No staff training. No daily setup.
            </p>

            {/* 4 feature icons — horizontal row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
              marginTop: '8px',
            }}>
              {[
                {
                  label: 'Prayer Time Alarm',
                  svg: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="13" r="7"/>
                      <polyline points="12 10 12 13 14 15"/>
                      <path d="M9 3.5C7.5 2.5 5.5 2.8 4.2 4.2"/>
                      <path d="M15 3.5C16.5 2.5 18.5 2.8 19.8 4.2"/>
                      <path d="M10 3h4"/>
                      <path d="M9.5 20.5 Q12 23 14.5 20.5"/>
                    </svg>
                  ),
                },
                {
                  label: 'Hijri Calendar',
                  svg: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                      <line x1="8" y1="3" x2="8" y2="7"/>
                      <line x1="16" y1="3" x2="16" y2="7"/>
                      <path d="M14.5 14.5 a2.5 2.5 0 1 1 0 .01" stroke="#1A1A1A"/>
                      <path d="M16.5 13 a3.5 3.5 0 0 0 0 4"/>
                    </svg>
                  ),
                },
                {
                  label: 'Gregorian Calendar',
                  svg: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                      <line x1="8" y1="3" x2="8" y2="7"/>
                      <line x1="16" y1="3" x2="16" y2="7"/>
                      <line x1="7" y1="14" x2="17" y2="14"/>
                      <line x1="7" y1="18" x2="13" y2="18"/>
                    </svg>
                  ),
                },
                {
                  label: 'Set Once, Runs Forever',
                  svg: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 4 20 10 14 10"/>
                      <path d="M20 10 A8 8 0 1 0 19.3 15"/>
                      <polyline points="9 11 12 14 17 9"/>
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                }}>
                  {item.svg}
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#1A1A1A',
                    lineHeight: 1.3,
                  }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
