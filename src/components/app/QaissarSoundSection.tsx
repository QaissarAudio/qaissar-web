import Image from 'next/image'
import { LinkCta } from '@/components/ui/LinkCta'

export function QaissarSoundSection() {
  return (
    <section className="bg-white py-16 md:py-20 px-6 lg:px-12 border-b border-brand-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="md:order-1">
            <p className="text-[var(--text-body-sm)] font-semibold uppercase tracking-[0.12em] text-brand-red">
              Cloud Platform
            </p>
            <h2 className="heading-section font-extrabold text-brand-black mt-3">
              Qaissar Sound
            </h2>
            <div className="mt-4 w-10 h-[3px] bg-brand-red" aria-hidden="true" />
            <p className="mt-6 text-[var(--text-body)] font-light text-brand-gray-500 leading-relaxed max-w-lg">
              Manage and automate audio across every site from one dashboard. Schedule Azan,
              playlists, and announcements by prayer times or fixed rules — with secure streaming
              and real-time control of your field devices.
            </p>
            <LinkCta href="#" label="Learn more" className="mt-8" />
          </div>

          <div className="flex justify-center md:order-2">
            <div className="w-full max-w-xl rounded-2xl overflow-hidden bg-brand-gray-100 shadow-[var(--shadow-md)]">
              <Image
                src="/images/app/web.png"
                width={1200}
                height={800}
                alt="Qaissar Sound web dashboard"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QaissarSoundSection
