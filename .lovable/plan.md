

## Visual Appearance Improvements

After reviewing all homepage sections and components, here are targeted improvements to elevate the visual quality without changing content or structure.

---

### 1. Scroll-Reveal Animations (Replace Static fade-up)

**New hook:** `src/hooks/useScrollReveal.tsx`

Currently all `animate-fade-up` classes fire on page load, meaning sections below the fold animate before anyone sees them. Create an Intersection Observer hook that triggers animations only when elements scroll into view.

- Hook returns a ref and `isVisible` boolean
- Threshold: 0.15 (triggers when 15% visible)
- Apply across all section components (AIDProblemStatement, AIDFramework, AIDApproach, AIDClientJourney, AIDConviction, AIDScope, AIDTargetClients, HomepageStats, ProblemFinder, HomepageFAQ, Projects section)

---

### 2. Curved Section Dividers

**New component:** `src/components/SectionDivider.tsx`

Add subtle SVG wave/curve shapes between key sections to break the flat rectangular feel:

- A reusable component with `variant` prop: `wave`, `curve`, `slant`
- Renders an SVG that spans full width, height ~40-60px
- Color matches the next section's background
- Place between: Hero→Stats, Stats→Problem, Framework→Approach, Conviction→Contact

---

### 3. Card Hover Shine Effect

**CSS addition in `src/index.css`**

Add a subtle light-sweep effect on card hover using a pseudo-element with a diagonal gradient that translates across:

```css
.card-shine {
  position: relative;
  overflow: hidden;
}
.card-shine::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0.1) 50%, transparent 55%);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}
.card-shine:hover::after {
  transform: translateX(100%);
}
```

Apply `.card-shine` to cards in: AIDFramework pillars, AIDConviction reasons, AIDScope categories, AIDClientJourney steps, HomepageStats items.

---

### 4. Enhanced Footer

**File:** `src/components/Footer.tsx`

Upgrade from plain `bg-gray-50` to a richer design:

- Gradient background: `bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20` with light text
- Add subtle decorative blur orbs (consistent with rest of site)
- Slightly larger spacing, better link hover states with underline animation
- Add a small "Back to top" button

---

### 5. Improved Section Badges

**Multiple component files**

Currently section badges are plain `bg-primary/10 rounded-full` pills. Enhance them with:

- A subtle left border accent or a small icon dot
- Slight shimmer animation on the badge background
- More visual weight to establish section identity

Apply to: AIDFramework, ProblemFinder, HomepageFAQ, AIDTargetClients

---

### 6. Background Texture Overlay

**File:** `src/index.css`

Add a very subtle noise/grain texture overlay to the page background for depth:

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.015;
  background-image: url("data:image/svg+xml,..."); /* tiny noise pattern */
  pointer-events: none;
  z-index: 0;
}
```

This adds tactile richness without affecting readability.

---

### Files Summary

| File | Action |
|---|---|
| `src/hooks/useScrollReveal.tsx` | Create -- Intersection Observer hook |
| `src/components/SectionDivider.tsx` | Create -- curved SVG dividers |
| `src/index.css` | Add card-shine effect + body noise texture |
| `src/components/Footer.tsx` | Redesign with dark gradient + back-to-top |
| `src/pages/Index.tsx` | Add SectionDividers between key sections |
| `src/components/aid/AIDProblemStatement.tsx` | Use scroll-reveal + card-shine |
| `src/components/aid/AIDFramework.tsx` | Use scroll-reveal + card-shine + enhanced badge |
| `src/components/aid/AIDApproach.tsx` | Use scroll-reveal |
| `src/components/aid/AIDClientJourney.tsx` | Use scroll-reveal + card-shine |
| `src/components/aid/AIDConviction.tsx` | Use scroll-reveal + card-shine |
| `src/components/aid/AIDScope.tsx` | Use scroll-reveal + card-shine |
| `src/components/aid/AIDTargetClients.tsx` | Use scroll-reveal + enhanced badge |
| `src/components/HomepageStats.tsx` | Use scroll-reveal + card-shine |
| `src/components/ProblemFinder.tsx` | Use scroll-reveal + enhanced badge |
| `src/components/HomepageFAQ.tsx` | Use scroll-reveal + enhanced badge |

