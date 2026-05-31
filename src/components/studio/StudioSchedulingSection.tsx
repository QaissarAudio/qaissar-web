import Image from 'next/image'

export function StudioSchedulingSection() {
  return (
    <section className="bg-brand-gray-100 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative inline-flex max-w-full">
              <div
                className="pointer-events-none absolute top-[10%] left-[-10%] h-[80%] w-[70%] rounded-full blur-3xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.07) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              <Image
                src="/images/app/web_qaiisar_section_3.png"
                width={900}
                height={600}
                alt="Qaissar Studio advanced scheduling with Hijri and Gregorian calendars"
                className="relative z-[1] block h-auto w-full max-w-[600px] drop-shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>

          <div>
            <span className="block text-[var(--text-body-sm)] font-semibold uppercase tracking-[0.12em] text-brand-red mb-4">
              Advanced Scheduling (Hijri &amp; Gregorian)
            </span>

            <h2 className="text-[clamp(2rem,3vw,2.75rem)] font-extrabold text-brand-black leading-tight">
              Smart Scheduling That Understands Both Calendars
            </h2>

            <div className="mt-4 w-10 h-[3px] bg-brand-red" aria-hidden="true" />

            <p className="mt-6 text-[var(--text-body-lg)] font-semibold text-brand-black leading-snug">
              Play the right content at exactly the right moment
            </p>

            <p className="mt-4 text-[var(--text-body)] font-light text-brand-gray-800 leading-relaxed">
              Build playback schedules tied to fixed times or prayer times, with precise recurrence
              rules: weekdays, Hijri or Gregorian months and days, or both. Preview the day&apos;s
              events before they run, and let the system handle playback priorities on conflict
              automatically — for a perfectly orchestrated audio experience during Ramadan, Eid,
              special occasions, and every ordinary day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioSchedulingSection
