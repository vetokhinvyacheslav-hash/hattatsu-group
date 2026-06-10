'use client'

const PARTNERS = [
  { name: 'AGC',        file: 'AGC.png' },
  { name: 'AIG',        file: 'AIG.png' },
  { name: 'AXA',        file: 'AXApng.png' },
  { name: 'Futuruss',   file: 'Futuruss.png' },
  { name: 'RGC',        file: 'RGC.png' },
  { name: 'NFG',        file: 'NFG.png' },
  { name: 'NordGlass',  file: 'NordGlass.png' },
  { name: 'Sibglass',   file: 'Sibglass.png' },
  { name: 'UPT',        file: 'UPT.png' },
  { name: '2mood',      file: '2mood.png' },
  { name: 'КПИ',        file: '%D0%9A%D0%9F%D0%98.png' },
  { name: 'Скайгласс',  file: '%D0%A1%D0%BA%D0%B0%D0%B9%D0%B3%D0%BB%D0%B0%D1%81%D1%81.png' },
  { name: 'Стеклолюкс', file: '%D0%A1%D1%82%D0%B5%D0%BA%D0%BB%D0%BE%D0%BB%D1%8E%D0%BA%D1%81.png' },
] as const

const PARTNERS_ROW1 = PARTNERS.slice(0, 6)
const PARTNERS_ROW2 = PARTNERS.slice(6)

type Partner = (typeof PARTNERS)[number]

// CSS filter to convert any logo image to #110F56 (dark navy)
const LOGO_FILTER =
  'brightness(0) saturate(100%) invert(7%) sepia(98%) saturate(2200%) hue-rotate(230deg) brightness(75%) contrast(105%)'

function LogoCard({ partner }: { partner: Partner }) {
  return (
    <div className="group mx-4 flex h-[72px] w-40 shrink-0 items-center justify-center px-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/partner/${partner.file}`}
        alt={partner.name}
        width={128}
        height={56}
        className="max-h-[44px] w-auto max-w-[110px] object-contain opacity-40 transition-opacity duration-300 group-hover:opacity-60"
        style={{ filter: LOGO_FILTER }}
      />
    </div>
  )
}

interface RowProps {
  direction: 'left' | 'right'
  duration: number
  partners: readonly Partner[]
}

function MarqueeRow({ direction, duration, partners }: RowProps) {
  const anim = direction === 'left' ? 'hgLogoLeft' : 'hgLogoRight'
  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div
        className="hg-logo-row flex w-max"
        style={{ animation: `${anim} ${duration}s linear infinite` }}
      >
        {partners.map((p) => (
          <LogoCard key={p.name} partner={p} />
        ))}
        {partners.map((p) => (
          <LogoCard key={`dup-${p.name}`} partner={p} />
        ))}
      </div>
    </div>
  )
}

export function ClientLogos() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <style>{`
        @keyframes hgLogoLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes hgLogoRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hg-logo-row { animation: none !important; }
        }
      `}</style>

      {/* Header */}
      <div className="container mb-20">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-6 bg-blue-primary/30" aria-hidden />
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: '#110F56', opacity: 0.5 }}
          >
            Партнёры
          </span>
        </div>
        <h2 className="h2 text-ink">
          Наш опыт растёт с каждым проектом
        </h2>
      </div>

      {/* Carousels */}
      <div className="space-y-2">
        <MarqueeRow direction="left" duration={30} partners={PARTNERS_ROW1} />

        <div
          className="mx-auto w-16 border-t"
          style={{ borderColor: 'rgba(17,15,86,0.1)' }}
          aria-hidden
        />

        <MarqueeRow direction="right" duration={38} partners={PARTNERS_ROW2} />
      </div>
    </section>
  )
}
