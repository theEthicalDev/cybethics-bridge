# Hero-Bereich: deutlich mutiger, mit Hell/Dunkel-Umschalter

Fokus liegt ausschliesslich auf dem obersten Bildschirmbereich der Startseite. Inhalte (Titel, Untertitel, Buttons, Vertrauenszeile, Ortsangabe, AID-Grafik) bleiben erhalten — die Wirkung wird stark aufgewertet.

## 1. Mutigere Bildsprache

- Dunkle, tiefe Hintergrundfläche mit weichem Farbverlauf statt der aktuellen fast weissen Fläche, damit der Einstieg sofort hochwertig und technisch wirkt.
- Feines Raster im Hintergrund, das zum Rand hin ausblendet, plus zwei langsam wandernde Lichtflächen in der Markenfarbe.
- Sanfter Übergang nach unten, damit der helle Bereich darunter nicht hart abbricht.

## 2. Grössere, klarere Typografie

- Überschrift deutlich grösser und enger gesetzt, mit klarer Betonung eines Schlüsselworts.
- Die rotierende Zeile bekommt eine ruhigere Ein-/Ausblendung und mehr Gewicht statt des kleinen Pfeils.
- Untertitel etwas kürzer wirkend durch grössere Zeilenabstände und begrenzte Breite.

## 3. Ruhigere, hochwertigere Elemente

- Badge oben, Vertrauenspunkte und Ortsangabe werden zu einer einheitlichen, dezenten Elementfamilie (gleiche Rundung, gleiche Randstärke, gleiche Transparenz) statt drei unterschiedlicher Stile.
- Hauptbutton mit weichem Leuchten und spürbarem, aber ruhigem Hover.

## 4. Bewegung mit Mass

- Gestaffeltes Einblenden von oben nach unten beim Laden.
- Die AID-Grafik behält den Maus-Parallax, bekommt aber Glaseffekt-Optik, die in Hell und Dunkel funktioniert.
- Alle Animationen respektieren die Systemeinstellung „Bewegung reduzieren".

## 5. Hell/Dunkel umschaltbar

- Neuer Umschalter in der Navigationsleiste (Desktop und Mobil), Sonne/Mond-Symbol.
- Auswahl wird gespeichert; beim ersten Besuch richtet sich die Seite nach der Systemeinstellung.
- Kein Aufblitzen beim Laden dank kleinem Startskript.
- Wichtig: Der Umschalter wirkt auf die ganze Seite. In diesem Schritt wird nur der obere Bereich gestalterisch überarbeitet; die restlichen Abschnitte erhalten korrekte dunkle Farbwerte, damit nichts unleserlich wird, aber keine Neugestaltung.

## Technische Umsetzung

| Datei | Änderung |
|---|---|
| `src/index.css` | `.dark`-Farbtokens ergänzen (background, foreground, card, muted, border, glass, shadows); Utilities für Raster-Hintergrund, Aurora-Verlauf, `prefers-reduced-motion`-Schutz |
| `src/components/HeroSection.tsx` | Neuer Aufbau: Aurora/Grid-Hintergrund, grössere Typo-Skala, vereinheitlichte Chip-Elemente, gestaffelte Einblendung, Glas-Variante der AID-Karte |
| `src/components/ThemeProvider.tsx` (neu) | Theme-Zustand über `class` auf `<html>`, gespeichert in `localStorage`, Fallback auf Systemeinstellung |
| `src/components/ThemeToggle.tsx` (neu) | Sonne/Mond-Button |
| `src/components/Navbar.tsx` | Umschalter in Desktop- und Mobilnavigation einbinden; Navbar-Farben auf semantische Tokens umstellen |
| `src/App.tsx` / `src/main.tsx` | `ThemeProvider` einhängen |
| `index.html` | Kleines Inline-Skript gegen Theme-Aufblitzen |
| `src/locales/de.json`, `en.json` | Keys für Umschalter-Beschriftung; ggf. neue Hero-Betonungszeile |

Bestehende Marken- und Layoutregeln bleiben unangetastet: kein „Swiss Made", keine hartcodierten Farben, alle Texte über die Übersetzungsdateien.
