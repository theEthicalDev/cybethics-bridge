# Riskier Hero Redesign — Avant-garde Dark Cyber

## Goal
Transform only the homepage hero into the selected asymmetric, high-impact direction. Keep Cybethics’ existing purple branding, AID positioning, bilingual content, navigation, trust claims, and light/dark mode.

## What will change
1. **Oversized asymmetric headline**
   - Replace the current balanced two-column layout with a dominant, tightly composed headline that crosses the grid.
   - Use Syne for display type and Plus Jakarta Sans for supporting text.
   - Keep one clear H1 and the existing localized positioning rather than copying the prototype’s cybersecurity wording.

2. **Kinetic AID system**
   - Replace the floating glass card with a large, integrated A / I / D installation.
   - Each letter reveals Automatisierung, Integration, or Entwicklung with its real localized outcome text.
   - Auto-rotation, pointer response, and direct selection make the visual feel active without becoming a generic code graphic.

3. **Sharper hierarchy and controls**
   - Retain both current calls to action, but give them the prototype’s offset-border and high-tension interaction treatment.
   - Integrate the trust claims and location into a compact operational rail rather than detached pills.
   - Leave a visible hint of the following section at the bottom of the viewport.

4. **More ambitious motion**
   - Choreograph the headline, AID letters, fine rules, status rail, and buttons as one opening sequence.
   - Add restrained pointer depth, animated progress, and crisp transitions between AID states.
   - Preserve full reduced-motion behavior and stable layout on mobile.

5. **Light and dark adaptation**
   - Dark mode follows the selected near-black, luminous-purple atmosphere.
   - Light mode keeps the same composition with bright neutral surfaces and strong Cybethics purple contrast.

## Technical details
- Rework `HeroSection` while preserving its existing links and translation-driven text.
- Replace the current hero-specific styling with semantic hero tokens and dedicated animation rules.
- Update typography to Syne and Plus Jakarta Sans without a remote CSS import.
- Add only the new German and English labels required by the AID status rail; no user-facing strings will be hardcoded.
- Keep the existing navigation and every section below the hero unchanged.
- Verify desktop and mobile layouts, both themes, AID interaction, reduced-motion behavior, and browser console output.
