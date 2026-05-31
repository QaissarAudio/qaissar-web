import Image from 'next/image'

export function StudioMultiLocationSection() {
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
                src="/images/app/web_qaiisar_section_1.png"
                width={900}
                height={600}
                alt="Qaissar Studio multi-location dashboard"
                className="relative z-[1] block h-auto w-full max-w-[600px] drop-shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>

          <div>
            <span className="block text-[var(--text-body-sm)] font-semibold uppercase tracking-[0.12em] text-brand-red mb-4">
              Centralized Multi-Location Management
            </span>

            <h2 className="text-[clamp(2rem,3vw,2.75rem)] font-extrabold text-brand-black leading-tight">
              Every Branch, Managed from One Screen
            </h2>

            <div className="mt-4 w-10 h-[3px] bg-brand-red" aria-hidden="true" />

            <p className="mt-6 text-[var(--text-body-lg)] font-semibold text-brand-black leading-snug">
              A central dashboard for an unlimited network of sites
            </p>

            <p className="mt-4 text-[var(--text-body)] font-light text-brand-gray-800 leading-relaxed">
              Whether you run a single mosque or a sprawling network of restaurants and branches,
              Qaissar Sound puts you in full control from one place. Create locations, link each to
              its own broadcast station, and tailor the audio policy for every site — with secure
              data isolation per location and practical scalability that grows with your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioMultiLocationSection
