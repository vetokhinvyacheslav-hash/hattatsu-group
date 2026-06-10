'use client'

const LOGO_FILTER =
  'brightness(0) saturate(100%) invert(7%) sepia(98%) saturate(2200%) hue-rotate(230deg) brightness(75%) contrast(105%)'

const LOGOS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function LogoCard({ n }: { n: number }) {
  return (
    <div className="group mx-4 flex h-[80px] w-[260px] shrink-0 items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/partner/${n}.png`}
        alt={`Партнёр ${n}`}
        width={180}
        height={70}
        className="max-h-[58px] w-auto max-w-[180px] object-contain opacity-40 transition-opacity duration-300 group-hover:opacity-65"
        style={{ filter: LOGO_FILTER }}
      />
    </div>
  )
}

export function ClientLogos() {
  return (
    <section className="bg-white py-10 lg:py-12">
      <style>{`
        @keyframes hgLogoScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hg-logo-row { animation: none !important; }
        }
      `}</style>

      <div className="container mb-12">
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

      <div
        className="overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div
          className="hg-logo-row flex w-max"
          style={{ animation: 'hgLogoScroll 40s linear infinite' }}
        >
          {LOGOS.map((n) => <LogoCard key={n} n={n} />)}
          {LOGOS.map((n) => <LogoCard key={`dup-${n}`} n={n} />)}
        </div>
      </div>
    </section>
  )
}
