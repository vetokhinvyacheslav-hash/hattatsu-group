@AGENTS.md

# Hattatsu Group — Project Context

## Проект
Корпоративный сайт международной консалтинговой группы Hattatsu Group.

- **Live:** https://hattatsu-group.vercel.app
- **GitHub:** https://github.com/vetokhinvyacheslav-hash/hattatsu-group.git
- **Local:** `C:\Users\User\Desktop\Claude\hattatsu-group`

## Команды

```bash
pnpm dev                  # http://localhost:3000
npx tsc --noEmit          # проверка TypeScript перед деплоем
git add <files> && git commit -m "..." && git push origin main
npx vercel --prod --yes   # деплой на production
```

## Стек
| Технология | Версия | Заметки |
|---|---|---|
| Next.js | 16.2.7 | App Router, Turbopack, Server Components по умолчанию |
| Tailwind CSS | v4 | `@theme` директива, НЕ `tailwind.config.js` |
| Framer Motion | v12 | импорт из `framer-motion` (не `motion/react`) |
| TypeScript | 5.9 | strict mode |
| Шрифт | IBM Plex Sans | cyrillic subset, CSS var `--font-plex` |

## Цветовые токены (src/app/globals.css @theme)
```
--color-blue-primary:   #110F56   (тёмно-синий, основной)
--color-blue-secondary: #1D1A8A
--color-blue-accent:    #3B30E8
--color-blue-tint:      #EEF0FF
--color-ink:            #0C1023   (основной текст)
--color-ink-muted:      #697098   (вторичный текст)
--color-surface:        #F5F6FB
--color-border:         #DDE0EF
--color-orange:         #F08A24   (акцент, CTA)
--color-orange-hover:   #E07B18
```

## CSS-утилиты (определены в globals.css)
- `.h1` `.h2` `.h3` — заголовки
- `.body-text` — 17px / 1.72 line-height
- `.label` — 11px uppercase tracking
- `.section-padding` — 104px desktop / 64px mobile
- `.container` — max-w-7xl + padding

## Структура файлов
```
src/
├── app/
│   ├── page.tsx              ← ГЛАВНАЯ СТРАНИЦА
│   ├── layout.tsx
│   ├── globals.css
│   ├── consulting/ hr/ training/ gamification/
│   ├── digitalization/ marketing/ team/
│   ├── diagnostics/ contacts/ documents/
│   └── api/contact/
└── components/
    ├── layout/Header.tsx  Footer.tsx
    └── ui/
        ├── SectionHeading.tsx
        ├── Button.tsx (ButtonLink)
        ├── Reveal.tsx         (анимация появления секций)
        ├── AnimatedCounter.tsx
        ├── ClientLogos.tsx    (marquee)
        ├── ROICalculator.tsx
        ├── KaizenCalculator.tsx
        ├── WorldMap.tsx       (SVG карта мира)
        └── CasesSection.tsx
```

## Реальные изображения (public/images/)
- `hero-main.png` — фото для героя главной
- `service-consulting.png` — Производственный консалтинг
- `service-hr.png` — HR-консалтинг
- `service-training.png` — Корпоративное обучение
- `service-gamification.png` — Геймификация
- `service-digitalization.png` — Цифровизация
- `service-marketing.png` — Маркетинг и бренд

## Структура главной страницы (src/app/page.tsx)
1. Hero — УТП + 3 статистики + hero-main.png
2. Services — 6 равных карточек 2×3
3. О компании — текст + 4 stats-карточки
4. География опыта команды — WorldMap SVG + список 6 стран
5. Цели и Миссия + Уникальные подходы (Научность / Адаптация / Синергия)
6. ROI Calculator
7. Kaizen Calculator
8. ClientLogos (AGC, Barilla Group, PelikanGlass, Futuruss, AIG, 5ZVEZD, Axaglass)
9. Team — 8 членов команды
10. Cases
11. Diagnostic CTA
12. Final CTA

## Команда
| Имя | Роль |
|---|---|
| Джанунц Смбат | Основатель · Lean Production 18 лет |
| Горшенин Семён | Kaizen & Lean Production |
| Ездаков Максим | Операционная эффективность |
| Терещенко Владислав | Цифровое обучение · Симуляторы |
| Киреев Артур | Маркетинг · Развитие бизнеса |
| Черных Лариса | HR-эксперт · CIPD UK |
| Ветохин Вячеслав | Визуализация · Коммуникации |
| Арустамян Арсен | Fullstack-разработка |
