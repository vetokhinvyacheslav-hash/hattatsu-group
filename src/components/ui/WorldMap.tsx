/**
 * WorldMap — server component, no interactivity needed.
 * Simplified SVG world map with 6 highlighted countries:
 * France, Belgium, Poland, Belarus, Russia, Japan.
 * ViewBox 0 0 1200 500 (roughly Mercator-aligned).
 */

interface CountryPin {
  name: string
  cx: number
  cy: number
}

const PINS: readonly CountryPin[] = [
  { name: 'Франция',  cx: 602, cy: 124 },
  { name: 'Бельгия',  cx: 614, cy: 110 },
  { name: 'Польша',   cx: 662, cy: 108 },
  { name: 'Беларусь', cx: 694, cy: 101 },
  { name: 'Россия',   cx: 870, cy:  98 },
  { name: 'Япония',   cx: 1072, cy: 280 },
]

export function WorldMap() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      role="img"
      aria-label="Карта стран, в которых работала команда Hattatsu Group: Франция, Бельгия, Польша, Беларусь, Россия, Япония"
    >
      <svg
        viewBox="0 0 1200 500"
        className="w-full"
        style={{ display: 'block' }}
        aria-hidden="true"
      >
        {/* ── Ocean background ── */}
        <rect width="1200" height="500" fill="#0C1023" />

        {/* ── Continental landmass (simplified, light on dark) ── */}

        {/* Europe + Russia (combined base) */}
        <path
          d="
            M 540,200 L 555,185 L 570,178 L 562,160 L 550,150 L 555,135
            L 565,120 L 578,110 L 590,105 L 610,102 L 640,98 L 670,92
            L 700,88 L 730,84 L 770,78 L 820,72 L 875,68 L 935,65
            L 990,62 L 1050,60 L 1100,58 L 1160,62 L 1200,70
            L 1200,160 L 1170,175 L 1130,168 L 1080,162 L 1040,158
            L 980,165 L 920,158 L 870,162 L 820,158 L 780,168
            L 740,155 L 710,148 L 695,155 L 680,158 L 660,162
            L 645,172 L 630,178 L 615,185 L 600,192 L 580,198
            L 562,205 Z
          "
          fill="#1D1A8A"
          opacity="0.35"
        />

        {/* Scandinavia */}
        <path
          d="M 600,90 L 618,65 L 635,55 L 650,60 L 648,80 L 640,98 L 620,102 L 608,102 Z"
          fill="#1D1A8A"
          opacity="0.35"
        />
        {/* Finland + Baltic */}
        <path
          d="M 648,80 L 660,55 L 685,48 L 700,55 L 695,80 L 680,90 L 665,92 Z"
          fill="#1D1A8A"
          opacity="0.35"
        />
        {/* UK */}
        <path
          d="M 555,118 L 560,105 L 572,100 L 578,108 L 574,122 L 562,126 Z"
          fill="#1D1A8A"
          opacity="0.35"
        />

        {/* Iberian Peninsula */}
        <path
          d="M 555,135 L 562,120 L 576,118 L 585,125 L 590,138 L 580,148 L 562,148 Z"
          fill="#1D1A8A"
          opacity="0.35"
        />

        {/* Italy */}
        <path
          d="M 622,138 L 632,128 L 640,135 L 645,152 L 638,170 L 630,175 L 625,162 L 620,148 Z"
          fill="#1D1A8A"
          opacity="0.35"
        />

        {/* Turkey + Caucasus */}
        <path
          d="M 700,148 L 730,140 L 765,138 L 780,145 L 782,158 L 760,165 L 730,162 L 710,160 Z"
          fill="#1D1A8A"
          opacity="0.35"
        />

        {/* Middle East */}
        <path
          d="M 750,162 L 820,158 L 830,175 L 820,195 L 790,200 L 768,195 L 755,180 Z"
          fill="#1D1A8A"
          opacity="0.35"
        />

        {/* Central Asia */}
        <path
          d="M 800,138 L 870,130 L 920,132 L 930,155 L 895,165 L 855,165 L 820,158 Z"
          fill="#1D1A8A"
          opacity="0.35"
        />

        {/* China */}
        <path
          d="M 920,132 L 980,120 L 1040,122 L 1065,145 L 1055,175 L 1010,185 L 960,180 L 930,165 Z"
          fill="#1D1A8A"
          opacity="0.35"
        />

        {/* Korea */}
        <path
          d="M 1060,210 L 1070,200 L 1078,210 L 1075,228 L 1065,228 Z"
          fill="#1D1A8A"
          opacity="0.35"
        />

        {/* Africa (N) */}
        <path
          d="M 558,200 L 610,195 L 660,192 L 710,195 L 750,200 L 780,210
             L 790,245 L 770,265 L 740,270 L 700,268 L 660,265
             L 620,262 L 582,250 L 560,230 Z"
          fill="#1D1A8A"
          opacity="0.25"
        />

        {/* Africa (Sub-Saharan) */}
        <path
          d="M 600,265 L 650,265 L 720,270 L 760,270 L 770,310
             L 750,365 L 720,400 L 685,415 L 650,410 L 620,390
             L 600,345 L 590,310 L 592,280 Z"
          fill="#1D1A8A"
          opacity="0.22"
        />

        {/* South Asia */}
        <path
          d="M 865,175 L 920,172 L 960,180 L 975,220 L 955,260 L 930,270 L 900,255 L 880,220 L 860,195 Z"
          fill="#1D1A8A"
          opacity="0.25"
        />

        {/* SE Asia */}
        <path
          d="M 1010,185 L 1060,182 L 1085,200 L 1080,225 L 1050,240 L 1020,230 L 1005,210 Z"
          fill="#1D1A8A"
          opacity="0.25"
        />

        {/* Americas (left edge) */}
        <path
          d="M 0,90 L 60,85 L 80,100 L 70,140 L 55,180 L 40,200 L 20,195 L 0,190 Z"
          fill="#1D1A8A"
          opacity="0.20"
        />
        <path
          d="M 0,200 L 50,195 L 75,215 L 80,260 L 65,310 L 40,355 L 15,370 L 0,360 Z"
          fill="#1D1A8A"
          opacity="0.18"
        />

        {/* ── HIGHLIGHTED COUNTRIES ── */}

        {/* France */}
        <path
          d="M 586,116 L 609,108 L 626,115 L 627,120 L 624,133 L 617,134 L 607,138 L 593,133 L 584,126 Z"
          fill="#3B30E8"
          opacity="0.9"
        />

        {/* Belgium */}
        <path
          d="M 609,108 L 620,106 L 622,112 L 616,114 L 609,114 Z"
          fill="#3B30E8"
          opacity="0.9"
        />

        {/* Poland */}
        <path
          d="M 637,100 L 670,98 L 676,106 L 676,118 L 670,124 L 637,124 L 630,115 Z"
          fill="#3B30E8"
          opacity="0.9"
        />

        {/* Belarus */}
        <path
          d="M 671,93 L 706,91 L 712,100 L 712,112 L 706,118 L 671,118 L 665,108 Z"
          fill="#3B30E8"
          opacity="0.9"
        />

        {/* Russia (simplified large polygon) */}
        <path
          d="
            M 692,90 L 714,75 L 755,65 L 825,58 L 895,55
            L 965,52 L 1035,54 L 1100,58 L 1155,65 L 1200,74
            L 1200,148 L 1168,158 L 1120,155 L 1070,148 L 1020,152
            L 965,148 L 910,152 L 860,148 L 812,155 L 778,148
            L 750,145 L 728,140 L 712,130 L 705,118 L 700,108 Z
          "
          fill="#110F56"
          opacity="0.95"
        />
        {/* Kamchatka/Far East extension */}
        <path
          d="M 1180,100 L 1200,90 L 1200,148 L 1170,155 Z"
          fill="#110F56"
          opacity="0.9"
        />
        {/* Sakhalin-ish */}
        <path
          d="M 1160,165 L 1170,158 L 1178,168 L 1172,188 L 1163,182 Z"
          fill="#110F56"
          opacity="0.8"
        />

        {/* Japan — Honshu (main island) */}
        <path
          d="M 1068,244 L 1080,226 L 1088,232 L 1090,250 L 1082,274 L 1070,306 L 1060,298 L 1058,274 L 1062,254 Z"
          fill="#3B30E8"
          opacity="0.9"
        />
        {/* Hokkaido */}
        <path
          d="M 1058,235 L 1068,226 L 1080,226 L 1082,236 L 1073,244 L 1062,245 Z"
          fill="#3B30E8"
          opacity="0.9"
        />
        {/* Kyushu */}
        <path
          d="M 1055,295 L 1062,292 L 1066,302 L 1060,310 L 1052,306 Z"
          fill="#3B30E8"
          opacity="0.9"
        />

        {/* ── GRID LINES (subtle) ── */}
        {[0, 100, 200, 300, 400, 500].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="1200" y2={y} stroke="#ffffff" strokeWidth="0.4" opacity="0.06" />
        ))}
        {[0, 150, 300, 450, 600, 750, 900, 1050, 1200].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="500" stroke="#ffffff" strokeWidth="0.4" opacity="0.06" />
        ))}

        {/* ── ORANGE DOTS AT COUNTRY CENTERS ── */}
        {PINS.map((pin) => (
          <g key={pin.name}>
            {/* Pulse ring */}
            <circle cx={pin.cx} cy={pin.cy} r="10" fill="none" stroke="#F08A24" strokeWidth="1" opacity="0.35" />
            {/* Center dot */}
            <circle cx={pin.cx} cy={pin.cy} r="4.5" fill="#F08A24" />
            <circle cx={pin.cx} cy={pin.cy} r="2" fill="#ffffff" />
          </g>
        ))}
      </svg>

      {/* ── HTML LABELS ── */}
      <div className="pointer-events-none absolute inset-0">
        {PINS.map((pin) => {
          const leftPct = (pin.cx / 1200) * 100
          const topPct = (pin.cy / 500) * 100
          return (
            <div
              key={pin.name}
              className="absolute -translate-x-1/2 -translate-y-full pb-2"
              style={{ left: `${leftPct}%`, top: `${topPct}%` }}
            >
              <span className="rounded-md bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-blue-primary shadow-sm backdrop-blur-sm whitespace-nowrap">
                {pin.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
