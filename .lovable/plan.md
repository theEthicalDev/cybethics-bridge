

## SEO Optimization Plan — Ranking for "Digitalisierung Zentralschweiz"

### Current State

- **SPA problem**: The site is a client-side React SPA hosted on GitHub Pages. Google can render JS but it's slower and less reliable than server-rendered HTML. The `<noscript>` fallback helps but is minimal.
- **No per-page meta tags**: Every page serves the same `<title>` and `<meta description>` from `index.html`. Google sees identical metadata for all routes.
- **Sitemap is incomplete**: Missing `/services/automation`, `/services/integration`, `/services/development`, `/pricing/websites`.
- **Structured data is outdated**: Still says "Softwareentwicklung" instead of "Digitalisierung", missing `Service` schema entries.
- **No keyword targeting for "Digitalisierung"**: The word doesn't appear in title, description, keywords, or structured data.
- **No canonical URLs**: Risk of duplicate content indexing.
- **No `hreflang` tags**: Site supports DE/EN but Google doesn't know about it.

---

### Short-Term (Implementable Now)

#### 1. Per-Page `<title>` and `<meta>` via React Helmet

Install `react-helmet-async` and add unique title/description to every page. Target keywords:

| Page | Title (DE) |
|------|-----------|
| Home | `Cybethics – Digitalisierung, Automatisierung & Integration in der Zentralschweiz` |
| Services | `Dienstleistungen – Digitalisierung für KMU | Cybethics` |
| Automation | `Prozessautomatisierung – Digitale Workflows | Cybethics Luzern` |
| Integration | `Systemintegration – Tools & APIs verbinden | Cybethics` |
| Development | `Softwareentwicklung – Massgeschneiderte Lösungen | Cybethics` |
| Projects | `Referenzprojekte – Digitalisierung in der Praxis | Cybethics` |
| Contact | `Kontakt – Digitalisierungspartner Zentralschweiz | Cybethics` |

Each page also gets a unique `<meta name="description">` with local keywords (Luzern, Zug, Zentralschweiz, KMU, Digitalisierung).

#### 2. Update Structured Data (index.html)

- Change `@type` to `["ProfessionalService", "ITService"]`
- Update `knowsAbout` to include `"Digitalisierung"`, `"Systemintegration"`, `"Prozessdigitalisierung"`
- Add `sameAs` array (LinkedIn, GitHub, etc.)
- Add `hasOfferCatalog` with the 3 AID service types
- Add `priceRange` field

#### 3. Expand Sitemap

Add all new routes with `<lastmod>` dates:
- `/services/automation`, `/services/integration`, `/services/development`
- `/pricing/websites`

#### 4. Add Canonical + Hreflang Tags

Via React Helmet on each page:
```html
<link rel="canonical" href="https://cybethics.com/services" />
<link rel="alternate" hreflang="de" href="https://cybethics.com/services" />
<link rel="alternate" hreflang="en" href="https://cybethics.com/en/services" />
```

#### 5. Keyword Optimization in Visible Content

Ensure "Digitalisierung" appears naturally in:
- Hero section heading and subheading
- AID section descriptions
- Footer tagline
- Alt-text on images

Update `de.json` translation keys accordingly.

#### 6. Performance Quick Wins

- Add `loading="lazy"` to all below-fold images
- Add `<link rel="preload">` for the hero font and critical CSS
- Remove duplicate `<meta name="theme-color">` in index.html

---

### Long-Term (Strategic)

#### 7. Blog / Knowledge Section

The single most impactful long-term SEO move. Create a `/blog` or `/wissen` section with articles like:
- "Digitalisierung für KMU in der Zentralschweiz — Wo anfangen?"
- "5 Prozesse die jedes Unternehmen automatisieren sollte"
- "API-Integration: Was es kostet und was es bringt"

Each article = a new indexable page targeting long-tail keywords.

#### 8. Google Business Profile

Not a code change, but critical: create/optimize a Google Business Profile for "Cybethics, Emmen" with the service categories "IT-Dienstleister", "Softwareentwicklung", "Digitalisierung". Link it to cybethics.com.

#### 9. Pre-rendering / SSG

Since this is a GitHub Pages SPA, consider adding a pre-render step (e.g., `vite-plugin-prerender` or `react-snap`) that generates static HTML for each route at build time. This gives Google fully rendered HTML without relying on JS execution.

#### 10. Backlinks Strategy

- Get listed on Swiss IT directories (swissICT, topsoft, etc.)
- Partner pages linking to cybethics.com
- Local business directories (local.ch, search.ch)

---

### Implementation Priority

| Priority | Task | Impact |
|----------|------|--------|
| 1 | React Helmet per-page titles + descriptions | High |
| 2 | "Digitalisierung" keyword in content + meta | High |
| 3 | Updated structured data | Medium |
| 4 | Expanded sitemap | Medium |
| 5 | Canonical + hreflang | Medium |
| 6 | Performance fixes | Medium |
| 7 | Blog section (long-term) | Very High |
| 8 | Google Business Profile (external) | Very High |
| 9 | Pre-rendering at build time | High |

### Files Changed (Short-Term)

| File | Change |
|------|--------|
| `package.json` | Add `react-helmet-async` |
| `src/App.tsx` | Wrap with `HelmetProvider` |
| Every page in `src/pages/` | Add `<Helmet>` with unique title, description, canonical |
| `index.html` | Updated structured data, remove duplicate meta, add hreflang |
| `public/sitemap.xml` | Add missing routes + lastmod |
| `src/locales/de.json` | Add "Digitalisierung" to key content strings |
| `src/locales/en.json` | English equivalents |

