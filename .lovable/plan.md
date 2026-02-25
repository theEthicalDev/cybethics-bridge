

## Improvements: "Du/Ihr" Form, Contact Person Placement, and New Conviction Sections

Three changes bundled together: tone adjustment across all German translations, repositioning the contact person card, and adding the new "we take over" sections.

---

### 1. Switch All German Text to "Du/Ihr" Form

**File:** `src/locales/de.json`

Systematic replacement of formal "Sie" address with informal "Du/Ihr" throughout the entire file. This affects hundreds of strings. Examples:

| Current (Sie) | New (Du/Ihr) |
|---|---|
| "Ihre digitale Infrastruktur" | "Eure digitale Infrastruktur" |
| "Wir nehmen Ihnen die digitale Last ab" | "Wir nehmen Euch die digitale Last ab" |
| "Sie müssen sich um nichts kümmern" | "Ihr müsst Euch um nichts kümmern" |
| "Lassen Sie uns gemeinsam herausfinden" | "Lass uns gemeinsam herausfinden" |
| "damit Sie sich auf Ihr Kerngeschäft konzentrieren können" | "damit Ihr Euch auf Euer Kerngeschäft konzentrieren könnt" |
| "Bereit für eine Systemanalyse?" | stays the same (no pronoun) |

Rules applied:
- "Sie" (subject) becomes "Ihr" or "Du" depending on context
- "Ihnen" becomes "Euch" or "Dir"
- "Ihr/Ihre/Ihrem/Ihren" (possessive) becomes "Euer/Eure/Eurem/Euren" or "Dein/Deine"
- Verb conjugation adjusts accordingly ("können" stays, but "Sie können" becomes "Ihr könnt")
- Tone remains professional, not slangy -- just less formal

This covers all sections: `seo`, `hero`, `aid`, `pricing`, `services`, `contact`, `about`, `footer`, `identify`, `business`, `servicePage`, etc.

**File:** `src/locales/en.json` -- English uses "you/your" universally, so no changes needed for formality. Only update if any content references "Sie" indirectly.

---

### 2. Move Contact Person (Djordje Karadzic) Further Down

**File:** `src/components/HeroSection.tsx`

- Remove `<ContactPartner />` from the HeroSection component
- Export `ContactPartner` so it can be used elsewhere

**File:** `src/pages/Index.tsx`

- Import `ContactPartner` from HeroSection (or extract to its own file)
- Place it after AIDConviction and before AIDTargetClients -- this positions the personal contact as a trust anchor after the "we take over" messaging, right before describing target clients
- The card appears as a natural bridge: "We handle everything" → "Here's who you'll work with" → "Are you our ideal client?"

---

### 3. New Component: Client Journey ("Euer Weg mit uns")

**File:** `src/components/aid/AIDClientJourney.tsx`

A section that contrasts what the client does (minimal) vs. what we handle (comprehensive):

- 4 steps with two columns each:
  - Step 1: "Ihr beschreibt Eure Herausforderung" / We: analyze, document, prioritize
  - Step 2: "Ihr gebt Feedback zum Konzept" / We: design architecture, plan milestones, define budget
  - Step 3: "Ihr testet und bestätigt" / We: implement, test, iterate, deploy
  - Step 4: "Ihr fokussiert Euch auf Euer Geschäft" / We: monitor, maintain, optimize, evolve
- Visual emphasis: client column is slim/simple, our column is detailed/extensive
- All text via `t('aid.journey.*')` keys

---

### 4. New Component: Scope Checklist ("Was wir für Euch übernehmen")

**File:** `src/components/aid/AIDScope.tsx`

A comprehensive visual checklist organized by category:

- 4 categories with 3-4 items each:
  - Analyse: IT landscape mapping, process documentation, optimization potential, tool evaluation
  - Umsetzung: Architecture, development, integration, testing
  - Betrieb: Hosting, monitoring, backups, security updates
  - Support: Bug fixes, feature requests, consulting, training
- Highlight callout: "Ihr müsst nur: Eure Ziele beschreiben und Feedback geben."
- Checkmark icons, clean grid layout
- All text via `t('aid.scope.*')` keys

---

### 5. Enhance AIDConviction with Before/After Scenarios

**File:** `src/components/aid/AIDConviction.tsx`

Add a transformation row below the existing 3 cards:

- 3 mini before/after scenarios:
  - "Manuelle Auftragsbearbeitung (3h/Tag)" → "Automatisierter Workflow (5 Min/Tag)"
  - "5 Systeme ohne Verbindung" → "1 integrierte Plattform"
  - "Excel-Reporting am Monatsende" → "Echtzeit-Dashboard"
- Arrow/transformation visual between before and after
- All text via `t('aid.conviction.scenarios.*')` keys

---

### 6. Updated Homepage Flow

**File:** `src/pages/Index.tsx`

New section order:
1. HeroSection (without ContactPartner)
2. AIDProblemStatement
3. AIDFramework
4. AIDApproach
5. **AIDClientJourney** (new)
6. AIDConviction (enhanced with scenarios)
7. **ContactPartner** (moved here -- personal trust anchor)
8. **AIDScope** (new)
9. AIDTargetClients
10. Projects
11. About/Stats
12. CTA

---

### 7. Translation Keys Added

**Files:** `src/locales/de.json`, `src/locales/en.json`

New keys (German in "Du/Ihr" form):

```text
aid.journey.title = "Euer Weg mit uns"
aid.journey.subtitle = "Ihr beschreibt. Wir übernehmen."
aid.journey.step1-4 with .you and .we subkeys

aid.scope.title = "Was wir für Euch übernehmen"
aid.scope.subtitle = "Alles aus einer Hand — von der Analyse bis zum laufenden Betrieb."
aid.scope.categories (analysis, implementation, operations, support) with items
aid.scope.youOnly = "Ihr müsst nur: Eure Ziele beschreiben und Feedback geben."

aid.conviction.scenarios.1-3 with .before and .after subkeys
```

---

### Files Summary

| File | Action |
|---|---|
| `src/locales/de.json` | Sie→Du/Ihr conversion + new journey/scope/scenario keys |
| `src/locales/en.json` | New journey/scope/scenario keys |
| `src/components/HeroSection.tsx` | Remove ContactPartner from render, export it |
| `src/components/aid/AIDClientJourney.tsx` | Create -- client perspective journey |
| `src/components/aid/AIDScope.tsx` | Create -- takeover checklist |
| `src/components/aid/AIDConviction.tsx` | Modify -- add before/after scenarios |
| `src/pages/Index.tsx` | New flow with ContactPartner moved + new sections |

