

## Homepage Improvements Plan

### 1. Revert Navbar Active Link Style
**File:** `src/components/Navbar.tsx`

Revert the active link indicator from the dot-below style back to the previous underline/text-color style. The old style used a simple `text-primary` color change without the `after:` dot pseudo-element.

---

### 2. Tech Banner with Icons (TrustBadges)
**File:** `src/components/TrustBadges.tsx`

Replace the plain text tech names in the sliding marquee with Lucide icons where available, and small styled SVG/icon pairs for the rest. Use icons from lucide-react (e.g., `Github` for GitHub) and for tools without Lucide icons (Proton, JetBrains, Shopware, etc.), use a small generic icon paired with the name, or a simple styled text+icon combo. This gives the banner visual weight.

Mapping:
- GitHub → `Github` icon from lucide-react
- Java, Spring Boot, Angular, PostgreSQL, etc. → Use a `Code2`/`Database`/`Globe` generic icon + name label
- The marquee keeps sliding, but each item is now icon + label

---

### 3. Restructure Homepage Flow
**File:** `src/pages/Index.tsx`

Major reordering:
- **Remove** `HomepageStats` ("Unsere Ergebnisse in Zahlen") entirely from the page
- **Move Projects section** up — place it right after `TrustBadges` (before AID content) so visitors see work examples early
- **Move ProblemFinder quiz** — place it between `AIDFramework` and `AIDApproach` ("Strukturiert, Transparent, Nachhaltig")
- **Merge AIDApproach title into AIDClientJourney** — remove AIDApproach's subtitle and vertical timeline list, keep only its section title ("Strukturiert, Transparent, Nachhaltig") as a header above the AIDClientJourney horizontal 01-04 cards. Then remove AIDApproach as a separate component.

**File:** `src/components/aid/AIDClientJourney.tsx`
- Add the AIDApproach title (`aid.approach.title`) as the heading for this merged section
- Keep the existing 4-card horizontal layout (01, 02, 03, 04)

---

### 4. Avatar on Sticky CTA Button
**File:** `src/components/StickyCTA.tsx`

Add a small rounded avatar image (using the existing `/media/d5a54318-571b-4628-9628-92d6e9cb11bc.png`) to the left of the Calendar icon in the sticky button. Use a 24x24 or 28x28 rounded-full image with a subtle border, creating a personal touch.

---

### 5. Projects Section Earlier
Already covered in point 3 — the Projects section moves from near the bottom to right after TrustBadges, ensuring visitors see concrete work examples within the first couple of scrolls.

---

### New Homepage Flow

```text
StickyCTA (floating)
HeroSection
TrustBadges (badges + tech marquee with icons)
Projects Section (moved up)
SectionDivider
AIDProblemStatement
AIDFramework
ProblemFinder (quiz — moved here)
SectionDivider
AIDClientJourney (merged: AIDApproach title + journey cards)
SectionDivider
AIDConviction
SectionDivider
ContactPartner
AIDScope
AIDTargetClients
HomepageFAQ
About Section
CTA Section
```

---

### Files Summary

| File | Action |
|---|---|
| `src/components/Navbar.tsx` | Revert active link to old underline style |
| `src/components/TrustBadges.tsx` | Add icons to tech marquee items |
| `src/pages/Index.tsx` | Remove HomepageStats, move Projects up, move ProblemFinder, remove AIDApproach |
| `src/components/aid/AIDClientJourney.tsx` | Merge AIDApproach title as section heading |
| `src/components/StickyCTA.tsx` | Add small avatar to sticky button |

