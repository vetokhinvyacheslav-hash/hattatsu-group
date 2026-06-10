'use client'

const LOGO_FILTER =
  'brightness(0) saturate(100%) invert(7%) sepia(98%) saturate(2200%) hue-rotate(230deg) brightness(75%) contrast(105%)'

const ROW1 = [1, 2, 3, 4, 5, 6]
const ROW2 = [6, 7, 8, 9, 10, 11, 12]

function LogoCard({ n }: { n: number }) {
  return (
    <div className="group mx-6 flex h-[80px] w-44 shrink-0 items-center justify-center px-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/partner/${n}.png`}
        alt={`Партнёр ${n}`}
        width={128}
        height={56}
        className="max-h-[48px] w-auto max-w-[120px] object-contain opacity-40 transition-opacity duration-300 group-hover:opacity-65"
        style={{ filter: LOGO_FILTER }}
      />
    </div>
  )
}

interface RowProps {
  direction: 'left' | 'right'
  duration: number
  logos: number[]
}

function MarqueeRow({ direction, duration, logos }: RowProps) {
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
        {logos.map((n) => <LogoCard key={n} n={n} />)}
        {logos.map((n) => <LogoCard key={`dup-${n}`} n={n} />)}
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

      <div className="container mb-24">
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

      <div className="space-y-4">
        <MarqueeRow direction="left" duration={30} logos={ROW1} />
        <MarqueeRow direction="right" duration={38} logos={ROW2} />
      </div>
    </section>
  )
}
