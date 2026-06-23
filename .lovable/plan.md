## Plan — Knock visitors off their feet

Three workstreams, all in frontend/presentation code. Tone: push bolder while staying inside the existing Soft UI / warm gradient / German-language brand. Strict i18n preserved (de.json/en.json).

### 1. Hero impact (bolder)

**`src/components/HeroSection.tsx` + `src/components/AIDVisual` area**
- Oversized editorial headline: split into 2–3 lines, mix display weight with an italic serif accent on a single keyword ("Automatisierung", "Integration", "Entwicklung") that rotates every 3s with a smooth crossfade.
- Animated sub-eyebrow: "Digitalisierung für KMU in der Zentralschweiz" with a typewriter or shimmer reveal.
- Replace static AID visual area with a layered parallax composition: liquid gradient blob (already in design system) + subtle grain + 3 floating glass cards labeled A / I / D that drift on mouse-move (CSS transform, no heavy libs).
- Dual CTA stack: primary "Kostenloses Erstgespräch" → Calendly/contact, secondary "Problem Finder starten" → quiz. Both with hover micro-interaction (arrow slide + glow).
- Trust strip directly under hero: "CH-gehostet · DSGVO-konform · Lead-Time < 48h" with small icons.

### 2. Interactive wow moments

**New: `src/components/ROICalculator.tsx`** (insert between AID and Projects on Index)
- 3 sliders: Mitarbeiter, Stunden/Woche manueller Arbeit, Stundensatz CHF.
- Live computes monthly + yearly savings via automation, animated counter, CTA "Diese Zahlen besprechen →".
- Pure client-side, no backend.

**New: `src/components/AutomationShowcase.tsx`** (before CTA section)
- "Vorher / Nachher" interactive slider (draggable divider) on a sample workflow diagram (manual email chain ↔ automated flow). SVG-based.

**Upgrade `StickyCTA.tsx`**
- Add a 2-second pulse glow on first scroll past hero to draw eye, then settle.

**Scroll storytelling on AID section**
- Each pillar (A/I/D) snap-reveals with staggered fade + slight scale as it enters viewport (extend existing `useScrollReveal`).

### 3. Performance & polish

- Add `vite-imagetools`; convert hero/project images to AVIF + WebP with fallback. Add `<link rel="preload" as="image" fetchpriority="high">` for the LCP hero image in `index.html`.
- Lazy-load below-the-fold sections (Projects, FAQ, ContactPartner) via `React.lazy` + Suspense with skeleton.
- Replace any remaining `tracking` defaults: tighten hero display type (`tracking-tight`), loosen eyebrows (`tracking-widest uppercase text-xs`).
- Add subtle noise/grain overlay (SVG data-URI, ~3% opacity) on hero + CTA sections for premium texture.
- Smooth scroll + reduced-motion respect (`@media (prefers-reduced-motion)`).
- Audit `Navbar` scroll state: add backdrop-blur + border fade-in once user scrolls > 40px (if not already).
- Compress/replace any oversize PNGs in `public/media/` with WebP.

### Files touched

| File | Change |
|------|--------|
| `src/components/HeroSection.tsx` | Bolder headline, rotating word, dual CTA, parallax AID cards |
| `src/components/AIDVisual` (existing) | Tighten composition, mouse-parallax |
| `src/components/StickyCTA.tsx` | First-scroll pulse |
| `src/components/ROICalculator.tsx` | NEW — interactive savings calculator |
| `src/components/AutomationShowcase.tsx` | NEW — before/after slider |
| `src/pages/Index.tsx` | Wire new sections in sequence, lazy-load below-fold |
| `src/locales/de.json` / `en.json` | All new strings (rotating words, ROI labels, showcase copy, CTA pulse aria) |
| `index.html` | LCP preload, preconnect tuning |
| `vite.config.ts` + `package.json` | Add `vite-imagetools` |
| `src/index.css` | Grain overlay utility, reduced-motion guards, scroll-glow keyframe |

### Out of scope

- No backend changes, no new pages, no nav changes (pricing routes stay hidden per project memory).
- No "Swiss Made" badge, no HomepageStats re-add.
- Keep current section order from homepage-layout memory; new sections inserted at the marked positions only.

### Success signal

- Hero feels alive within 1s of load (rotating word + parallax).
- Two clear conversion paths visible without scrolling on desktop.
- ROI calculator and before/after slider give visitors a tactile "this works" moment.
- Lighthouse performance stays ≥ 90 after additions (lazy-loading + image formats offset new motion).
