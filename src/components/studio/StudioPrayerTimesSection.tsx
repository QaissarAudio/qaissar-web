import Image from 'next/image'

export function StudioPrayerTimesSection() {
  return (
    <section className="bg-white py-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="md:order-1">
            <span className="block text-[var(--text-body-sm)] font-semibold uppercase tracking-[0.12em] text-brand-red mb-4">
              Automatic Prayer Times &amp; Adhan
            </span>

            <h2 className="text-[clamp(2rem,3vw,2.75rem)] font-extrabold text-brand-black leading-tight">
              Precise Adhan, Automated for Every Location
            </h2>

            <div className="mt-4 w-10 h-[3px] bg-brand-red" aria-hidden="true" />

            <p className="mt-6 text-[var(--text-body-lg)] font-semibold text-brand-black leading-snug">
              Prayer times calculated automatically by location and madhab
            </p>

            <p className="mt-4 text-[var(--text-body)] font-light text-brand-gray-800 leading-relaxed">
              Qaissar Sound calculates the five daily prayer times automatically based on each
              location&apos;s coordinates, timezone, and chosen calculation method. Set the Adhan
              source per prayer, configure mute windows before and after, and apply flexible time
              offsets — so your system runs accurately across every site without daily
              intervention.
            </p>
          </div>

          <div className="flex justify-center md:order-2">
            <div className="relative inline-flex max-w-full">
              <div
                className="pointer-events-none absolute top-[10%] right-[-10%] h-[80%] w-[70%] rounded-full blur-3xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.07) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              <Image
                src="/images/app/web_qaiisar_section_2.png"
                width={900}
                height={600}
                alt="Qaissar Studio prayer times and Adhan settings"
                className="relative z-[1] block h-auto w-full max-w-[600px] drop-shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioPrayerTimesSection
