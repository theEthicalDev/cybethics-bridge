

## AID Website Transformation -- Full Implementation Plan

Complete repositioning from software development agency to digital systems company built around **A.I.D.** (Automatisierung, Integration, Entwicklung). All text content goes through `t()` translation function with keys in `de.json` (primary) and `en.json`.

---

### Phase 1: Translation Files (Foundation)

**Files:** `src/locales/de.json`, `src/locales/en.json`

Add extensive new translation sections (all content in both languages):

- `hero.title` -- "Digitale Systeme. Strategisch gedacht."
- `hero.subtitle` -- AID-focused positioning subtitle
- `hero.badge` -- ".automate .integrate .develop"
- `hero.cta` -- "Systemanalyse anfragen"
- `hero.ctaSecondary` -- "Unser Ansatz"
- New `aid.problem.*` section (3 problem cards: disconnected systems, manual work, complexity)
- New `aid.framework.*` section (titles, descriptions, business outcomes for A, I, D pillars)
- New `aid.approach.*` section (4-step methodology: Systemanalyse, Konzept, Umsetzung, Betrieb)
- New `aid.target.*` section (target client description)
- New `aid.cta.*` section (call-to-action text)
- New `services.page.automate.*`, `services.page.integrate.*`, `services.page.develop.*` -- rich content for each subpage (hero, what-we-do items, challenges, benefits, process steps, use cases)
- Update `footer.about` for new positioning
- Update `services.hero.*` and `services.cta.*`
- Remove `services.offshoring.*` and `detailed.services.offshoring.*` keys

---

### Phase 2: Homepage Restructure

**File:** `src/pages/Index.tsx`

Replace current section flow with:

1. **HeroSection** (updated component, see Phase 3)
2. **AID Problem Statement** -- new component `src/components/aid/AIDProblemStatement.tsx`
   - Title: `t('aid.problem.title')` -- "Die Realitat in vielen Unternehmen"
   - 3 cards with icons: disconnected systems, manual work, growing complexity
   - All text via `t()` keys
3. **AID Framework** -- new component `src/components/aid/AIDFramework.tsx`
   - Title: `t('aid.framework.title')` -- "A.I.D. -- Unser Ansatz"
   - 3 pillar cards (Cog/Network/Code icons) with `t()` for title, description, examples
   - "Mehr erfahren" links to `/services/automatisierung`, `/services/integration`, `/services/entwicklung`
4. **AID Approach** -- new component `src/components/aid/AIDApproach.tsx`
   - 4-step methodology timeline using existing VerticalProcessTimeline pattern
   - All steps via `t('aid.approach.step1.title')` etc.
5. **AID Target Clients** -- new component `src/components/aid/AIDTargetClients.tsx`
   - Description of ideal clients via `t()` keys
6. **Projects Section** -- keep existing, update heading keys
7. **Stats + About Section** -- keep existing
8. **CTA Section** -- update CTA text to "Systemanalyse anfragen"

**Remove from homepage:**
- Old 6-card services grid (and `services` array)
- Old business challenges section (replaced by problem statement)
- SEO content sections (softwareentwicklung/automatisierung)
- LocalBusinessInfo component
- Remove `ServiceCard` import

---

### Phase 3: Hero Section Update

**File:** `src/components/HeroSection.tsx`

- Badge: `t('hero.badge')` -- ".automate .integrate .develop"
- Title: `t('hero.title')` -- already wired
- Subtitle: `t('hero.subtitle')` -- already wired
- Primary CTA: `t('hero.cta')` -- "Systemanalyse anfragen" linking to `/contact`
- Secondary CTA: `t('hero.ctaSecondary')` -- "Unser Ansatz" linking to `#aid-framework`
- Update CodeAnimation snippet to reflect AID context
- Keep ContactPartner card

---

### Phase 4: Services Hub Page

**File:** `src/pages/Services.tsx`

Replace `DetailedServiceTabs` with a clean hub page:
- Hero section with `t('services.hero.title')` and `t('services.hero.subtitle')`
- 3 large AID pillar cards, each linking to dedicated subpage
- Each card: icon, `t()` title, `t()` description, list of 3-4 specific sub-services, "Details ansehen" button
- Brief methodology section
- CTA: "Systemanalyse anfragen"

---

### Phase 5: Three Dedicated Service Subpages

**New files:**
- `src/pages/services/Automate.tsx`
- `src/pages/services/Integrate.tsx`
- `src/pages/services/Develop.tsx`

Each page follows same structure with rich, scroll-worthy content (all via `t()` keys):

1. **Hero** -- pillar icon, title, subtitle
2. **What We Do** -- 4-6 cards with specific services
3. **Challenges** -- 3 relevant challenges from existing `business.challenge.*` keys that fit the pillar:
   - Automate: `email`, `copy`, `admin`
   - Integrate: `data`, `systems`, `excel`
   - Develop: `gut`, plus new development-specific challenges
4. **Benefits** -- 4-6 benefit cards with icons
5. **Process** -- 4-step timeline (reuse existing `services.{pillar}.process*` keys)
6. **Projects** -- 2-3 relevant projects filtered from `projectData.ts` by category:
   - Automate: meetingApproval, taskManager, orderPrintingAutomation
   - Integrate: webshopERP, morpheusPlugin, sftpSync
   - Develop: creditRequest, orderPrinting, educationalKiosk, customWebshop
7. **Technologies** -- tag list (reuse existing tech arrays)
8. **CTA** -- "Systemanalyse anfragen"

---

### Phase 6: Routing & Navigation

**File:** `src/App.tsx`
- Add routes: `/services/automatisierung`, `/services/integration`, `/services/entwicklung`
- Import the 3 new page components

**File:** `src/components/Navbar.tsx`
- Keep "Dienstleistungen" linking to `/services` (subpages accessible from hub)
- Pricing link already commented out -- keep it that way

**File:** `src/components/Footer.tsx`
- Update services column: replace individual service links with 3 AID pillar links pointing to subpages
- Remove pricing link from navigation column
- Update `footer.about` text via `t()`

---

### Phase 7: About Page

**File:** `src/pages/About.tsx`
- Add new section after values: "Unser Ansatz: A.I.D."
- Brief AID philosophy explanation via `t('about.aid.*')` keys
- Keep existing content

---

### Phase 8: SEO

**File:** `index.html`
- Update `<title>`: "Cybethics | Automatisierung, Integration, Entwicklung"
- Update meta description and keywords for AID positioning

---

### New Files Summary

| File | Purpose |
|------|---------|
| `src/components/aid/AIDProblemStatement.tsx` | Problem statement section |
| `src/components/aid/AIDFramework.tsx` | 3-pillar framework display |
| `src/components/aid/AIDApproach.tsx` | 4-step methodology timeline |
| `src/components/aid/AIDTargetClients.tsx` | Target client description |
| `src/pages/services/Automate.tsx` | Dedicated automation page |
| `src/pages/services/Integrate.tsx` | Dedicated integration page |
| `src/pages/services/Develop.tsx` | Dedicated development page |

### Modified Files Summary

| File | Changes |
|------|---------|
| `src/locales/de.json` | Extensive new AID keys, remove offshoring |
| `src/locales/en.json` | Matching English translations |
| `src/pages/Index.tsx` | Complete page restructure |
| `src/pages/Services.tsx` | Hub page with 3 pillar cards |
| `src/pages/About.tsx` | Add AID philosophy section |
| `src/components/HeroSection.tsx` | Updated messaging and CTAs |
| `src/components/Footer.tsx` | Updated services column with AID links |
| `src/App.tsx` | 3 new routes |
| `index.html` | SEO meta tags |

### Key Technical Principle

**Every single piece of visible text** uses `t('key.path')` from the LanguageContext. No hardcoded strings in components. German is the primary language; English follows the same structure.

