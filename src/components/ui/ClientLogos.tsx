const CLIENTS = [
  'AGC',
  'Barilla Group',
  'PelikanGlass',
  'Futuruss',
  'AIG',
  '5ZVEZD',
  'Axaglass',
] as const

function LogoBadge({ name }: { name: string }) {
  return (
    <span className="flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl border border-border bg-white px-7 py-4 text-base font-semibold text-graphite shadow-sm">
      {name}
    </span>
  )
}

export function ClientLogos() {
  return (
    <section className="bg-light-gray">
      <div className="container section-padding">
        <div className="max-w-3xl">
          <h2 className="h2 text-graphite">
            Работаем с крупными международными и российскими компаниями
          </h2>
        </div>

        {/*
          prefers-reduced-motion: the marquee track animation is neutralized by
          the global reduce-motion rule in globals.css, so the duplicated set is
          hidden and the first set wraps into a static grid.
        */}
        <style>{`
          @keyframes hg-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .hg-marquee-track {
            display: flex;
            width: max-content;
            gap: 1rem;
            animation: hg-marquee 28s linear infinite;
          }
          .hg-marquee-track:hover {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .hg-marquee-mask {
              -webkit-mask-image: none;
              mask-image: none;
            }
            .hg-marquee-track {
              flex-wrap: wrap;
              width: 100%;
              justify-content: center;
              animation: none;
            }
            .hg-marquee-dup {
              display: none;
            }
          }
        `}</style>

        <div
          className="hg-marquee-mask relative mt-12 overflow-hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            maskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="hg-marquee-track">
            {CLIENTS.map((name) => (
              <LogoBadge key={name} name={name} />
            ))}
            {CLIENTS.map((name) => (
              <div key={`dup-${name}`} className="hg-marquee-dup" aria-hidden="true">
                <LogoBadge name={name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
