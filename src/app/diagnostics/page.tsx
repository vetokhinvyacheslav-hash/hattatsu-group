import type { Metadata } from 'next'
import { DiagnosticWizard } from '@/components/ui/DiagnosticWizard'

export const metadata: Metadata = {
  title: 'Диагностика производства — Hattatsu Group',
  description:
    'Пройдите бесплатную диагностику зрелости вашего производства за 5 минут. Получите персональный индекс и рекомендации экспертов Hattatsu Group.',
}

export default function DiagnosticsPage() {
  return (
    <main className="min-h-screen bg-light-gray">
      <div className="container py-12 md:py-20">
        <DiagnosticWizard />
      </div>
    </main>
  )
}
