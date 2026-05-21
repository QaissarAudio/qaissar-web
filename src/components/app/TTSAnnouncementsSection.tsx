'use client'

export function TTSAnnouncementsSection() {
  return (
    <section className="bg-white, pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ── TEXT COLUMN (left) ── */}
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
              AI Voice Announcements
            </span>

            {/* Headline */}
            <h2 style={{
              fontSize: 'clamp(2rem, 3vw, 2.75rem)',
              fontWeight: 800,
              color: '#1A1A1A',
              lineHeight: 1.15,
              marginBottom: '32px',
            }}>
              Create Professional Announcements in Seconds.
            </h2>

            {/* Before block */}
            <div style={{ marginBottom: '24px' }}>
           
             
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
                Type your message in Arabic, English and 45 languages. The system instantly generates a natural, professional voice announcement — ready for playback or scheduling. No studio needed.
              </p>
            </div>

            {/* Use case pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '32px',
            }}>
              {[
                'Store promotions',
                'Eid greetings',
                
                
                'Emergency messages',
                'Multilingual audio',
              ].map((item) => (
                <span key={item} style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#333333',
                  background: '#FFFFFF',
                  border: '1px solid #E8E8E8',
                  borderRadius: '999px',
                  padding: '5px 12px',
                }}>
                  {item}
                </span>
              ))}
            </div>

            {/* Impact line */}
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              fontWeight: 800,
              color: '#1A1A1A',
              lineHeight: 1.4,
              margin: 0,
            }}>
              No studio. No staff. Just type and broadcast.
            </p>

          </div>

          {/* ── IMAGE COLUMN (right) ── */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img
              src="/images/app/ai-announcement.png"
              alt="QB Mini and Qaissar app showing AI announcement generation"
              style={{
         

                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.12))',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
