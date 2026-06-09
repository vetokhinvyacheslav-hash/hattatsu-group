import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MeetingModalProvider } from '@/components/ui/MeetingModal'
import { StickyCTA } from '@/components/ui/StickyCTA'

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plex',
})

export const metadata: Metadata = {
  title: 'Hattatsu Group — Lean-трансформация производственных предприятий',
  description:
    'Hattatsu Group — международная группа экспертов по развитию производственных систем через Lean-консалтинг, обучение, цифровизацию и культуру непрерывных улучшений.',
  keywords: [
    'Hattatsu Group',
    'Lean консалтинг',
    'бережливое производство',
    'производственные системы',
    'операционная эффективность',
    'Kaizen',
    'HR консалтинг',
    'цифровизация производства',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={ibmPlex.variable}>
      <body className="bg-white antialiased">
        <MeetingModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyCTA />
        </MeetingModalProvider>
      </body>
    </html>
  )
}
