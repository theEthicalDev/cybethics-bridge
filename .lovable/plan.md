## Plan: Animation Fixes, Badge Shimmer Pause, and Navbar Submenus

### 1. Faster Marquee Animation + Seamless Loop

**File:** `src/index.css`

- Reduce marquee duration from `22.5s` to `15s`
- The current implementation already duplicates items (`[...techLogos, ...techLogos]`) and uses `translateX(-50%)` which creates a seamless loop. No structural change needed — just the speed.

### 2. Badge Shimmer with Pause

**File:** `src/index.css`

Change the `badge-shimmer` keyframes so the shimmer only runs during the first ~30% of the animation cycle, then holds idle for the remaining ~70%. Increase the total duration to `12s`:

```css
@keyframes badge-shimmer {
  0% { transform: translateX(-100%); }
  15% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}
.badge-shimmer::before {
  animation: badge-shimmer 12s ease-in-out infinite;
}
```

This creates a natural pause of between each shimmer sweep.

### 3. Navbar with Dropdown Submenus

**File:** `src/components/Navbar.tsx`

Replace the flat "Dienstleistungen" link with a hover dropdown that contains submenu items. Structure:

```text
Dienstleistungen ▾
├── Webseiten-Pakete        → /pricing/websites  (new)
├── Automatisierung         → /services/automation
├── Integration             → /services/integration
├── Entwicklung             → /services/development
├── Wartung & Support       → /pricing  (existing)
└── Alle Dienstleistungen   → /services
```

Implementation:

- Use a simple CSS hover dropdown (no Radix popover needed — keeps it lightweight)
- Desktop: dropdown appears on hover with fade-in animation, positioned below the nav item
- Mobile: expand/collapse accordion-style in the mobile menu
- Each submenu item has a small icon and label

**Files:** `src/locales/de.json`, `src/locales/en.json`

- Add translation keys for submenu labels: `nav.services.websites`, `nav.services.automation`, `nav.services.integration`, `nav.services.development`, `nav.services.maintenance`, `nav.services.all`

**File:** `src/App.tsx`

- Add route for `/pricing/websites` (new page, or redirect to pricing with anchor)

**Suggestion for website packages page:** Since you want to offer simple website packages at cheap prices, I'd recommend creating a dedicated `/pricing/websites` page with 3 tiers (e.g., "Starter", "Business", "Premium") — but that's a separate task. For now, the navbar structure will link to it as a placeholder pointing to `/pricing`.

### Files Summary


| File                        | Action                                                         |
| --------------------------- | -------------------------------------------------------------- |
| `src/index.css`             | Faster marquee (15s), badge-shimmer with pause (8s)            |
| `src/components/Navbar.tsx` | Add hover dropdown under "Dienstleistungen" with submenu items |
| `src/locales/de.json`       | Add submenu translation keys                                   |
| `src/locales/en.json`       | Add submenu translation keys                                   |
