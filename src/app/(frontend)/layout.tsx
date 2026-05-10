import type { Metadata } from 'next'
import '../globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Qaissar',
    default: 'Qaissar — Commercial Audio Equipment',
  },
  description: 'Qaissar is a Shenzhen-based commercial audio company specialising in azan clocks, smart amplifiers, and UHF wireless systems.',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
