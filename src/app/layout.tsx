import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MeetingModalProvider } from '@/components/ui/MeetingModal'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Hattatsu Group — экосистема развития производственных предприятий',
  description:
    'Hattatsu Group — международная экосистема экспертов для развития производственных предприятий через консалтинг, обучение, цифровизацию и культуру непрерывных улучшений.',
  keywords: [
    'Hattatsu Group',
    'консалтинг',
    'Lean',
    'бережливое производство',
    'обучение',
    'цифровизация',
    'производственные системы',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body className="bg-white text-graphite">
        <MeetingModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MeetingModalProvider>
      </body>
    </html>
  )
}
