# Handoff: edtompkins.com — personal site (Home, About, Proof, Contact)

## Overview
A four-page personal-brand website for **Ed Tompkins, Principal / Platform Product Manager**. The audience is hiring managers, product executives, and recruiters skimming for 30–60 seconds. The site must communicate within seconds that Ed rescues stalled, business-critical platform programs and turns them into roadmaps that ship. Tone: senior, technical, warm, evidence-led — not salesy.

Target deployment is **GitHub Pages at `edtompkins.github.io`** (currently an empty repo). The recommended implementation is a **static multi-page site (plain semantic HTML + CSS)** — no build step required for GitHub Pages. A framework (Astro, Eleventy, Next static export) is fine if preferred, but vanilla static HTML matches the hosting and keeps it maintainable.

## About the Design Files
The files in `prototypes/` are **design references authored in HTML** (`.dc.html`). They are prototypes that show the intended look, copy, and behavior — **not production code to copy verbatim**. They rely on a proprietary preview runtime (`support.js`) and will not render as-is outside the design tool. **The task is to recreate these designs in the target codebase** (static HTML/CSS for GitHub Pages) using the exact tokens, copy, and assets documented below. All real assets you need (fonts, logos, headshot, favicon, resume, design-token CSS) are in `assets/` and can be used directly.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and interactions are all specified. Recreate pixel-accurately using the tokens below. Copy is final and must be used **verbatim** (see per-page sections).

---

## Design Tokens

All tokens also live as CSS custom properties in `assets/ds/colors.css`, `typography.css`, `spacing.css`, and `fonts.css` — you can link these directly.

### Color
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#1B2A41` | Headings, nav wordmark, dark full-bleed sections, footer |
| `--amber` | `#C4712B` | Accent ONLY: throughline rules, links, primary CTA, number callouts |
| `--paper` | `#F6F3ED` | Page background |
| `--black` | `#14181F` | Body text on paper |
| `--white` | `#FFFFFF` | Text on Ink |
| `--ink-90` | `#2C3B52` | Ink hover / raised dark surface |
| `--ink-70` | `#4A5870` | Secondary text on paper |
| `--ink-40` | `#9AA3B2` | Muted text, tag labels |
| `--ink-15` | `#D9DCE1` | Hairline borders on paper |
| `--paper-sunken` | `#EFEAE0` | Alternating section wells |
| `--amber-hover` | `#A85E20` | Link / CTA hover |
| text-secondary-on-inverse | `#B9C1CE` | Secondary text on Ink |
| footer meta | `#8A93A6` | Footer copyright row |

**Rule:** Ink + Paper do ~95% of the work. Amber is the spice — one accent per view. Never amber body text or large amber fills.

### Typography
- **Display / headings:** `GT Sectra Display` (self-hosted woff2 in `assets/fonts/`, `assets/ds/fonts.css`). Weights used: 300 (Light, Ink hero), 400 (Regular, H1/hero), 700 (Bold, big numbers).
- **Section headers / pull quotes:** `GT Sectra` (text optical size); italic 400 for quotes.
- **Body / UI / labels:** `Inter` (Google Fonts, loaded via `@import` in fonts.css).
- **License note:** GT Sectra binaries are trial/licensed — confirm web-embedding license for edtompkins.com before launch. Fallback if needed: **Fraunces** (Google Fonts); body stays Inter.

Type scale (desktop):
- Hero H1: 54px / line-height 1.08 / letter-spacing -0.01em (GT Sectra Display 400; the Ink hero variant uses weight 300)
- Section H2: 28–34px / 1.15–1.22 (GT Sectra 700)
- Big number callout: 40–84px / 1 (GT Sectra Display 700)
- Pull quote: 19–34px / ~1.4 (GT Sectra italic 400)
- Lead paragraph: 18–20px / 1.6 (Inter 400)
- Body: 16–18px / 1.6–1.72 (Inter 400)
- Section LABEL: 12px, Inter 600, `text-transform:uppercase`, `letter-spacing:0.1em` (the only uppercase on the site)

Casing is otherwise **sentence case** everywhere (headings, buttons, links).

### Spacing / layout
- Content column max-width: **1080px**, centered, 40px horizontal padding (24px on mobile).
- Section vertical rhythm: **88–104px** desktop, 56–64px mobile.
- Body copy measure capped ~64–68ch; long-form prose column ~720px.
- 8px spacing base.

### The throughline (the one recurring brand element)
A thin **amber rule**, always a border or fixed-size block (never an SVG flourish):
- **40 × 2px** amber underline placed under section headers / hero H1 (with ~24px top margin).
- **2px amber top border** (or left border) on every number/stat callout.
- Also appears as a 5px amber vertical seam where the hero photo meets the copy, and a 2px amber left-border on testimonial blockquotes.

### Radii / borders / shadows / motion
- Radii: 2px buttons/inputs/tags, 4px cards, 0 for stat callouts & quotes.
- Borders: 1px hairline `--ink-15` does the separating.
- Shadows: near-invisible. Cards `0 1px 2px rgba(27,42,65,.06)`; raised `0 4px 16px rgba(27,42,65,.10)`.
- Motion: quiet 120–200ms fades / 4–8px rises, ease `cubic-bezier(0.25,0.6,0.3,1)`. No bounces, parallax, or infinite loops.
- No gradients, no textures, no images-as-background. Flat Paper and flat Ink sections alternate for rhythm.

---

## Global elements

### Top nav (every page)
- Left: wordmark **"Ed Tompkins"** in GT Sectra Display 500, 21px, `--ink`, followed by an **amber period `.`** (`--amber`). Links to Home.
- Right: text links **Home · About · Proof · Contact** (Inter 500, 14px, `--ink-70`; hover `--ink`). The **active** page link is `--ink` with a 2px amber bottom border.
- Far right: primary CTA button **"Book a call"** (see Calendly below).
- Background `--paper`, 1px `--ink-15` bottom border, 20px vertical padding inside the 1080px column.
- **Mobile (≤820px):** the link row is hidden and replaced by a **"Menu"** text toggle (no hamburger icon — the brand avoids icons). Toggling opens a full-width dropdown panel below the nav containing the four links stacked + the Book a call button. In the prototype this is a pure-CSS checkbox toggle; implement with a button + minimal JS or `<details>` as preferred.

### Footer (every page)
- Full-bleed `--ink` background, white text, 64px top / 40px bottom padding.
- Left column: wordmark "Ed Tompkins." (white + amber period), 22px; one-line descriptor beneath in `#B9C1CE`: "Platform product manager. I rescue stalled eCommerce, ERP, and API programs and turn them into roadmaps that ship."
- Right column (right-aligned): **Book a call** (amber text link), **edtompkins@gmail.com** (mailto), **LinkedIn →** (https://linkedin.com/in/edltompkins), **Resume →** (downloads `assets/Ed-Tompkins-Resume.pdf`).
- Bottom meta row separated by a 1px white-12% rule: "© 2026 Ed Tompkins" (left) and "Platform Product Manager · edtompkins.com" (right), 13px `#8A93A6`.
- **Mobile:** the two columns stack; right column left-aligns.

### Primary CTA — "Book a call" (Calendly popup)
Every "Book a call" instance (nav, hero, closing CTA bands, footer, contact block) must open Ed's Calendly as a **popup overlay**, not a new page.

Load once in `<head>`:
```html
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
```
Wire each button (the canonical Calendly pattern):
```html
<a href="#" onclick="Calendly.initPopupWidget({url:'https://calendly.com/edtompkins-6llc/15min'});return false;">Book a call</a>
```
In the prototypes this is done via a single delegated click handler on elements carrying `data-book` (because the prototype runtime strips inline `onclick`) — in a plain static site the inline `onclick` above is fine. Event URL: `https://calendly.com/edtompkins-6llc/15min`.

Primary button style: background `--amber`, white text, Inter 600, ~14–15px, padding 12–14px × 24–28px, 2px radius, hover background `--amber-hover`. On Ink sections the secondary CTA is a ghost button (transparent, 1px white-45% border, white text).

### Favicon (in `assets/`)
```html
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="icon" href="assets/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="assets/favicon-180.png">
```
The mark is an Ink rounded square with cream "Ed" in a serif and a short amber underline (brand mark).

---

## Screens

### 1. Home (`Ed Tompkins | Platform Product Manager`)
Sections top to bottom:
1. **Nav** (global).
2. **Hero** — full-bleed band on Paper. Copy on the left (max ~560px, ~104px vertical padding): uppercase label "Principal Product Manager"; H1 (GT Sectra Display 400, 54px) **"I turn stalled platform programs into roadmaps that ship."**; 40×2px amber throughline; lead paragraph (Inter 18px, `--ink-70`, ≤48ch) — verbatim: *"Principal product manager for eCommerce, ERP, and API platforms. I walk into the business-critical programs that have stalled, earn the team, own the backend other people avoid, and turn the mess into a plan that ships. Roughly $95 million in measurable impact across five platforms and three industries."*; then **Book a call** (primary) + **See the proof →** (amber text link → Proof). The **headshot** (`assets/headshot.jpg`, portrait 4:5, ~1600×2000) occupies the right ~44% of the band, bleeding to the right edge with a **5px amber vertical seam** on its left. It is shown at its **natural proportion** (image `width:100%; height:auto`, vertically centered in the column via `display:flex; align-items:center`, container `overflow:hidden` with a Paper background) — NOT stretched with `object-fit:cover`, because the hero band is taller than the photo and cover would zoom/crop the face. Small Paper margins above/below the photo are intentional. Keep the photo a single easily-swappable `<img>`. **Mobile (≤820px):** photo becomes a full-width image above the copy (`width:100%; height:auto`, whole portrait shown).
3. **Proof teasers** — `--paper-sunken` band, 1px top border. Row header: label "Selected turnarounds" + "See all five turnarounds →" (→ Proof). Three white cards (1px `--ink-15`, 4px radius, 32×28px padding), each: 2px amber top rule, big number (GT Sectra Display 700, ~44px), one-line context, uppercase company tag `--ink-40`. Cards (verbatim):
   - **$50M** — "In new revenue. Modernized a legacy ERP to absorb a $200M business unit without breaking." — Ingram Micro
   - **$35M** — "Unlocked. Rebooted a stalled API program into a public REST suite and six partner integrations." — Ingram Micro
   - **90 → 99.8%** — "Uptime. Rescued a $6.3M program most people had written off, protecting $30M a year in production." — BMW
   Whole cards link to Proof. **Mobile:** 3-col grid → 1 col.
4. **How I work** — full-bleed `--ink` band. Amber label "How I work"; H2 (GT Sectra 700, white) **"I don't come in like a wrecking ball."**; amber throughline; paragraph in `#B9C1CE` (verbatim, the "Most people take over something that's failing…steady the ship." block); "More about how I got here →" (→ About).
5. **Social proof** — Paper. Label "Trusted across the org, not just my own team"; a GT Sectra italic pull quote with 2px amber left border: *"He makes everything effortless for the team and keeps everything moving. He is definitely a game changer."* — **Susan Teague · Sr. Manager, Accounting**. Below, a **grayscale logo strip** (see Assets) separated by a 1px top hairline.
6. **Closing CTA** — `--paper-sunken` band. H2 **"Have a platform that's stalled?"**; amber throughline; paragraph (verbatim); bold line **"I reply within one business day."**; row of Book a call + edtompkins@gmail.com + Resume → + LinkedIn →.
7. **Footer** (global).
- SEO: `<title>Ed Tompkins | Platform Product Manager</title>`; meta description (148 chars): "Platform product manager Ed Tompkins rescues stalled eCommerce and backend programs, finds the real problem, and turns it into a roadmap that ships." Person JSON-LD (see below).

### 2. About (`About Ed Tompkins | Platform Product Manager`)
Single reading column (~720px), left-aligned.
1. Nav.
2. **Opening** — label "About"; large GT Sectra Display 400 (~42px) statement **"I did not set out to fix broken software. I set out to figure out why things fall apart."**; amber throughline.
3. **Story** — the long-form narrative, single column, Inter 18px / line-height 1.72, ~22px paragraph spacing. Use the six narrative paragraphs from the source copy **verbatim** (History/Psychology degree → IT ground floor → ZF IoT → BMW → Ingram/Cummins → the method → the books/football/nitro cold brew paragraph).
4. **The line people remember** — full-bleed `--ink` band, amber label; a large GT Sectra italic pull quote (white). *Design note:* the source "one detail meant to stick" block is written as internal third-person strategy; it was distilled into a first-person-friendly pull quote: *"A History major who rescues technical platforms. He reads a failing software program the way a historian reads a failing empire, and treats a stalled platform as a mystery with a cause, not a backlog with a deadline."* Confirm final wording with Ed.
5. **Closing CTA** — `--paper-sunken`; H2 "Let's talk about what's stalled."; throughline; paragraph; Book a call + email.
6. Footer.
- Person JSON-LD on this page too.

### 3. Proof (`Proof & Results | Ed Tompkins`)
Arranged **loud → quiet**.
1. Nav.
2. **Intro** — label "Proof & results"; H1 "The work."; throughline; lead (verbatim): "I get handed platforms that have stalled, and I find the real problem and turn it into a plan that ships. Here is the record, with the people who were in the room."
3. **Lead — two hero result cards** side by side (white cards, 44×40px padding): each with 2px amber top rule, huge number (GT Sectra Display 700, 62px), a GT Sectra 700 title line, a full paragraph, and a `Company · years` tag. ($50M / $200M business unit — Ingram Micro 2022–2024; $35M / stalled API reboot — Ingram Micro 2024–2025). Below the pair, a full-width GT Sectra italic blockquote with amber left border — **John Cederman, Senior Manager, Development**. **Mobile:** 2-col → 1 col.
4. **Support — the pattern** — `--paper-sunken` band. H2 "It is not a one-time thing. Same job, five platforms, three industries."; throughline; three compact stat columns (2px amber top rule each): **99.8% uptime** (BMW 2018–2019), **75% less downtime** (ZF 2016–2018), **85% fewer manual orders** (Ingram Micro 2021), each with its verbatim paragraph and tag.
5. **Corroboration** — Paper. H2 "A different department said the same thing."; throughline; intro paragraph; large Susan Teague blockquote (Palmetto Extra Mile nomination, March 2022); then a 2-col row of two smaller blockquotes (top hairline): **Peter Ryan, Director of Product, Hill Holliday** and **Kevin Kwasniewski, Sr. Business Analyst**.
6. **The math** — full-bleed `--ink` band; a very large **≈$95M** (GT Sectra Display 700, ~84px, white) with 2px amber top rule + uppercase caption "Measurable impact · five platforms", beside a GT Sectra 400 statement (white): "Five platforms. Roughly $95M in measurable impact. The number is not the point. The pattern is: walk into the mess, find what is actually broken, and ship the fix."
7. **Where it started** — Paper, quiet. Label + paragraph (IT origins) + small Ian Wagner blockquote (2011). Then the grayscale logo strip.
8. **Closing CTA** — `--paper-sunken`; H2 (the "If you have a platform that has stalled…" line); throughline; short paragraph; Book a call + email.
9. Footer.
- All quotes and stats are **verbatim** from the Proof copy. (Do NOT publish the "Backstage notes" section from the source doc — it is private.)

### 4. Contact (`Contact | Ed Tompkins`)
Low-friction, **no form**.
1. Nav.
2. **Contact block** (single ~720px column): label "Contact"; H1 "Let's talk."; throughline; the "If you have a platform that has stalled…" paragraph; bold "I reply within one business day."; then a stacked list of hairline-separated rows (uppercase label left, value right, hover amber): **Email** edtompkins@gmail.com · **LinkedIn** linkedin.com/in/edltompkins → · **Book 15 minutes** calendly.com/edtompkins-6llc → (opens Calendly popup) · **Resume** Download resume →. A standalone **Book a call** primary button beneath. Order matters: email + LinkedIn first, calendar next, resume last. **Mobile:** rows stack label-over-value.
3. Footer.

---

## Interactions & Behavior
- **Navigation:** standard page links between Home/About/Proof/Contact. Active page indicated by amber underline in nav.
- **Book a call:** opens Calendly popup overlay (see Global). Applies to every instance.
- **Email:** `mailto:edtompkins@gmail.com`. **LinkedIn:** opens `https://linkedin.com/in/edltompkins` in a new tab. **Resume:** downloads `assets/Ed-Tompkins-Resume.pdf`.
- **Hover:** links amber → `--amber-hover` + underline; primary buttons `--amber` → `--amber-hover`; nav links → `--ink`; logo-strip logos lift from 50% to ~85% opacity. Grayscale logos stay grayscale on hover (only opacity/contrast shift).
- **Responsive breakpoint:** ≤820px = mobile (nav collapses to "Menu", hero photo becomes a top band, multi-col grids stack, footer stacks). A minor ≤1120px tweak narrows the hero copy / photo so they never overlap. Design desktop-first; verify tablet and mobile.
- **Motion:** keep to the quiet fades/rises noted in tokens; optional and subtle.

## State Management
Minimal. Only client state is the **mobile nav open/closed** toggle. No data fetching. Calendly widget manages its own popup state.

## SEO / head (all pages)
- Titles: Home `Ed Tompkins | Platform Product Manager`; others `Topic | Ed Tompkins` (`About Ed Tompkins | Platform Product Manager`, `Proof & Results | Ed Tompkins`, `Contact | Ed Tompkins`). Keep under ~60 chars.
- Meta description < 160 chars (Home value given above).
- **Person JSON-LD** on Home and About:
```json
{"@context":"https://schema.org","@type":"Person","name":"Ed Tompkins","jobTitle":"Platform Product Manager","url":"https://edtompkins.com","email":"edtompkins@gmail.com","sameAs":["https://linkedin.com/in/edltompkins"]}
```
- Ensure LinkedIn links back to the site; keep the same name spelling everywhere.
- Leave room for future **case-study spoke pages** (ERP $50M, API $35M, BMW RTLS, ZF IoT) — not built yet.

## Assets (in `assets/`)
- `headshot.jpg` — Ed's photo (placeholder; will be replaced with a stronger headshot — keep it a single swappable `<img>`).
- `logos/` — `zf.svg`, `bmw.svg`, `ingram-micro.svg`, `cummins.svg`, `hp.svg`, `bank-of-america.svg`. Rendered **grayscale**: `filter: grayscale(1) contrast(.95) opacity(.5)` (hover opacity .85). In a flex strip, `gap:40–44px 52–56px`, vertically centered. Optical heights used: ZF 42, BMW 46, Ingram Micro 22, Cummins 42, HP 42, Bank of America 18 (square marks larger; wide wordmarks capped so BofA/Ingram don't dominate). `<?xml?>` prologs were stripped for tooling compatibility.
- `favicon.svg`, `favicon-32.png`, `favicon-180.png` — brand mark.
- `Ed-Tompkins-Resume.pdf` — resume download (PDF).
- `ds/` — design-token CSS you can link directly: `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `fonts/` — self-hosted GT Sectra woff2 (trial license — verify before launch; Inter comes from Google Fonts via `fonts.css`).

## Files
- `prototypes/Home.dc.html`, `About.dc.html`, `Proof.dc.html`, `Contact.dc.html` — the four page designs (reference; require the design tool's runtime to render live).
- `prototypes/Logo.dc.html` — the wordmark/lockup/mark logo component (variants: wordmark, lockup, mark; light/dark).
- `assets/**` — all production-ready assets listed above.

## Notes for implementation
- Recreate as a static multi-page site for GitHub Pages; link the token CSS in `assets/ds/` and the fonts in `assets/fonts/` directly, or port the tokens into your own stylesheet.
- Copy text is final — use verbatim. The bracketed labels in the source markdown (e.g. `[HERO]`) are layout notes, not published text.
- Confirm the GT Sectra web license before launch; otherwise substitute Fraunces (headings) and keep Inter (body).
