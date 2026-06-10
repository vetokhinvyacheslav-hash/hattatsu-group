'use client'

import { motion } from 'framer-motion'

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

type Partner = typeof PARTNERS[number]

function LogoCard({ partner }: { partner: Partner }) {
  return (
    <div
      className="group relative mx-2.5 flex h-[78px] w-44 shrink-0 cursor-default items-center justify-center rounded-2xl px-5 ring-1 ring-white/10 transition-all duration-300"
      style={{ background: 'rgba(255,255,255,0.04)' }}
    >
      {/* Per-card hover: inner glow + border brightens */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(59,48,232,0.14) 0%, transparent 100%)',
          boxShadow:
            '0 0 30px rgba(59,48,232,0.28), inset 0 1px 0 rgba(255,255,255,0.14)',
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/partner/${partner.file}`}
        alt={partner.name}
        width={128}
        height={56}
        className="max-h-[48px] w-auto max-w-[116px] object-contain opacity-55 transition-opacity duration-300 group-hover:opacity-100"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </div>
  )
}

interface RowProps {
  direction: 'left' | 'right'
  duration: number
}

function MarqueeRow({ direction, duration }: RowProps) {
  const anim = direction === 'left' ? 'hgScrollLeft' : 'hgScrollRight'
  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 7%, black 93%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 7%, black 93%, transparent)',
      }}
    >
      <div
        className="hg-row flex w-max py-2"
        style={{ animation: `${anim} ${duration}s linear infinite` }}
      >
        {PARTNERS.map((p) => (
          <LogoCard key={p.name} partner={p} />
        ))}
        {PARTNERS.map((p) => (
          <LogoCard key={`dup-${p.name}`} partner={p} />
        ))}
      </div>
    </div>
  )
}

export function ClientLogos() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 lg:py-28">
      {/* ── Injected keyframes + reduced-motion override ── */}
      <style>{`
        @keyframes hgScrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes hgScrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @keyframes hgScanline {
          0%   { top: 0%;   opacity: 0; }
          4%   { opacity: 0.9; }
          96%  { opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hg-row { animation: none !important; }
          .hg-scan { animation: none !important; display: none; }
        }
      `}</style>

      {/* ── Background layers ── */}

      {/* Diagonal wedge — continues surface colour from previous section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20"
        style={{
          background: 'var(--color-surface)',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />

      {/* Radial glow from top-centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 45% at 50% 0%, rgba(59,48,232,0.13) 0%, transparent 70%)',
        }}
      />

      {/* Faint dot-grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Large watermark counter — far right, behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 select-none text-[220px] font-black leading-none lg:block"
        style={{ color: 'rgba(255,255,255,0.022)', letterSpacing: '-0.06em' }}
      >
        13
      </div>

      {/* Vertical rotated label — far-left edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 select-none text-[10px] font-semibold uppercase tracking-[0.32em] text-white/12 lg:block"
      >
        партнёры
      </div>

      {/* ── Header ── */}
      <div className="container relative z-10 mb-14">
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-white/25" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">
                Партнёры
              </span>
            </div>
            <h2 className="h2 max-w-lg text-white">
              Наш опыт растёт с каждым проектом
            </h2>
          </div>

          {/* Counter — desktop only */}
          <div className="hidden shrink-0 flex-col items-end sm:flex">
            <span className="text-5xl font-extrabold leading-none tabular-nums text-white">
              13
            </span>
            <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
              партнёров
            </span>
          </div>
        </div>
      </div>

      {/* ── Carousel wrapper (scanline lives here) ── */}
      <div className="relative">
        {/* Scanline sweep */}
        <div
          aria-hidden
          className="hg-scan pointer-events-none absolute inset-x-0 z-10 h-px"
          style={{
            top: 0,
            background:
              'linear-gradient(90deg, transparent 0%, rgba(59,48,232,0.55) 50%, transparent 100%)',
            animation: 'hgScanline 10s ease-in-out infinite',
          }}
        />

        {/* Row 1 → left */}
        <MarqueeRow direction="left" duration={36} />

        {/* Divider with spinning asterisk */}
        <div className="relative my-4 flex items-center px-14" aria-hidden>
          <div
            className="h-px flex-1"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          />
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="mx-5 text-base"
            style={{ color: 'rgba(255,255,255,0.22)' }}
          >
            ✦
          </motion.span>
          <div
            className="h-px flex-1"
            style={{ background: 'rgba(255,255,255,0.07)' }}
          />
        </div>

        {/* Row 2 → right (opposite direction, slower) */}
        <MarqueeRow direction="right" duration={48} />
      </div>
    </section>
  )
}
