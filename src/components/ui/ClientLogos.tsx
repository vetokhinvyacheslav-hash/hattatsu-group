'use client'

const LOGOS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function LogoCard({ n }: { n: number }) {
  return (
    <div className="hg-logo-card flex h-[88px] w-[288px] shrink-0 items-center justify-center px-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/partner/${n}.png`}
        alt={`Партнёр ${n}`}
        width={220}
        height={80}
        className="hg-logo-img max-h-[72px] w-full object-contain"
      />
    </div>
  )
}

export function ClientLogos() {
  return (
    <section className="bg-white py-10 lg:py-12">
      <style>{`
        .hg-logo-card {
          border: 1px solid rgba(17, 15, 86, 0.18);
          border-radius: 10px;
          transition: background-color 0.25s ease;
          cursor: default;
        }
        .hg-logo-card:hover {
          background-color: #110F56;
        }
        .hg-logo-img {
          filter: brightness(0) saturate(100%) invert(7%) sepia(98%) saturate(2200%) hue-rotate(230deg) brightness(75%) contrast(105%);
          transition: filter 0.25s ease;
        }
        .hg-logo-card:hover .hg-logo-img {
          filter: brightness(0) invert(1);
        }
        @keyframes hgLogoScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hg-logo-row { animation: none !important; }
        }
      `}</style>

      <div className="container" style={{ marginBottom: '3rem' }}>
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
          className="hg-logo-row flex w-max gap-3"
          style={{ animation: 'hgLogoScroll 40s linear infinite' }}
        >
          {LOGOS.map((n) => <LogoCard key={n} n={n} />)}
          {LOGOS.map((n) => <LogoCard key={`dup-${n}`} n={n} />)}
        </div>
      </div>
    </section>
  )
}
