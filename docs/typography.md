# Typography — edtompkins.com brand system

The type system carries the whole brand voice: **senior, technical, warm, evidence-led — not salesy.** It does this through one coordinated type superfamily and a lot of restraint. There are no decorative fonts, no gradients on type, no arbitrary weight changes, and exactly one uppercase style on the entire site.

Typography and a single **2px amber rule** (the "throughline") are the two recurring brand signals. Everything else is deliberately quiet so those two do the work.

---

## The GT Sectra Superfamily

The site uses GT Sectra as a complete typographic system rather than pairing a serif with a neutral sans. The hierarchy comes from optical size, weight, rhythm, and spacing — not from switching personalities between typefaces.

| Family | Role | Why |
|---|---|---|
| **GT Sectra Display** | Authority: hero headlines, page titles, the wordmark, and the big proof numbers | Display is the most dramatic voice in the system. It has the contrast and sharpness to make large type feel deliberate, editorial, and senior. It should appear only where the typography is meant to create emotional impact. |
| **GT Sectra** | Reading and interface typography: body copy, lead paragraphs, navigation, buttons, labels, contact rows, cards, captions, and metadata | This is the workhorse. It is calm, readable, and sturdy enough for interface use while still carrying the same editorial DNA as the display type. It keeps the site unified without making the UI feel decorative. |
| **GT Sectra Fine** | Editorial moments: pull quotes, testimonials, and selective reflective callouts | Fine is the most delicate and expressive cut. It should feel like the site shifting from information to reflection — a quieter, more human register reserved for moments that need warmth and credibility. |

The point is not to make everything look "serif." The point is to make the whole system feel authored. GT Sectra provides the full range: public authority, private reflection, and calm product clarity.

---

## Optical sizes

GT Sectra ships in **optical sizes** — related drawings of the same type family, each tuned for a different scale and purpose. The site uses those optical sizes as the primary hierarchy tool.

- **Display** is drawn for large sizes. It is higher contrast, sharper, and more dramatic. It belongs on hero H1s, page titles, the wordmark, and major proof numbers. It looks intentional at 40–84px and should not be used for dense reading.
- **Text** is drawn for reading and interface sizes. It is sturdier, more open, and more forgiving. It carries paragraphs, lead copy, labels, navigation, buttons, card titles, contact rows, and metadata.
- **Fine** is drawn for expressive editorial moments. It has more delicacy and contrast than the text cut, so it should be used sparingly: testimonials, pull quotes, and a small number of reflective statements.

Using the right optical size at the right scale is the difference between "typeset" and "just big." The site should feel like a single editorial system, not a set of font choices.

---

## The four voices

The system has four recurring typographic voices. These are more important than individual CSS classes because they explain how to make decisions when a new component is introduced.

| Voice | Typeface / weight | Job |
|---|---|---|
| **Display speaks with authority.** | GT Sectra Display Regular / Medium / Bold | Used when the site needs to make a confident public claim: the hero, page H1s, section H2s, wordmark, and proof numbers. |
| **Text explains.** | GT Sectra Book / Regular | Used for reading, context, and evidence. This is where the story becomes clear without becoming loud. |
| **Fine reflects.** | GT Sectra Fine Regular / Book Italic | Used when the tone shifts from argument to reflection, endorsement, or editorial emphasis. |
| **Medium navigates.** | GT Sectra Medium | Used for interface clarity: nav links, buttons, section labels, card titles, footer links, and quote attributions. |

When in doubt, start with the quietest voice that can do the job. Most of the site should be Text and Medium. Display and Fine are stronger because they are used less often.

---

## Weight inventory (used vs. deliberately unused)

Restraint is a feature. Even with the full GT Sectra family available, the site should load only the faces that serve a clear role.

**GT Sectra Display**
- **Regular (400)** — hero H1s, page H1s, section H2s
- **Medium (500)** — the "Ed Tompkins." wordmark (nav lockup + footer)
- **Bold (700)** — the big proof numbers ($50M, $35M, 99.8%, ≈$95M …)
- **Light (300), optional** — oversized decorative quotation marks only, if used

**GT Sectra**
- **Book (400)** — body copy, lead paragraphs, long-form reading, footer text
- **Book Italic (400)** — inline italic emphasis inside body copy
- **Regular (400)** — compact supporting copy, contact rows, metadata, captions
- **Medium (500)** — nav links, buttons, labels, card titles, footer links, quote attributions
- **Bold (700)** — small strong headings only when Medium does not provide enough emphasis

**GT Sectra Fine**
- **Regular (400)** — major editorial callouts, used sparingly
- **Book Italic (400)** — pull quotes and testimonials

Deliberately **not** loaded by default, even though the family includes them: Display Super, Display Black, Display italics, Fine Black, Fine Bold, most italic weights, and any face without a defined role. More files do not make the system richer. Clear roles do.

---

## The type scale

Sizes are desktop; the H1s step down on mobile (mobile value → desktop value). Line-heights tighten as type gets bigger and loosen for reading. Tracking stays subtle except for uppercase labels.

| Role | Family / weight | Size | Line-height | Tracking |
|---|---|---|---|---|
| Hero H1 | Sectra Display 400 | 38 → 46 → 54px | 1.08 | −0.01em |
| Page H1 (About/Proof/Contact) | Sectra Display 400 | 34 → 42–44px | 1.10–1.14 | −0.01em |
| Section H2 | Sectra Display 400 | 32–48px | 1.05–1.14 | −0.01em |
| H3 / card title | Sectra Medium 500 | 20–28px | 1.15–1.25 | — |
| Small strong heading | Sectra Bold 700 | 18–24px | 1.15–1.25 | — |
| Big number / stat | Sectra Display 700 | 40–84px | 0.95–1.04 | — |
| Pull quote / testimonial | Sectra Fine Book 400 *italic* | 22–40px | 1.30–1.50 | — |
| Quote attribution | Sectra Medium 500 | 14–16px | 1.35 | +0.04–0.08em |
| Editorial statement | Sectra Fine 400 | 24–32px | 1.35–1.45 | — |
| Wordmark | Sectra Display 500 | 21–22px | 1 | −0.01em |
| Lead paragraph | Sectra Book 400 | 18–20px | 1.60–1.68 | — |
| Body | Sectra Book 400 | 16–18px | 1.58–1.72 | — |
| Compact support copy | Sectra Regular 400 | 14–16px | 1.45–1.60 | — |
| Nav links | Sectra Medium 500 | 14–15px | 1 | +0.01em |
| Buttons / text links | Sectra Medium 500 | 14–15px | 1 | +0.01em |
| **Section LABEL** | Sectra Medium 500 | 12px | 1 | **+0.12em** |
| Lockup role line | Sectra Medium 500 | 9px | 1 | +0.14em |
| Tags / captions / meta | Sectra Regular 400 or Medium 500 | 12–14px | 1.35–1.5 | +0.04–0.08em for tags |
| Contact rows | Sectra Regular 400 | 15–17px | 1.45 | — |

Use **Sectra Medium** as the default for compact interface emphasis. Use **Sectra Bold** only when a small heading genuinely needs more force. Do not use Display below 32px except for the wordmark.

---

## The rules that hold it together

**1. Sentence case everywhere.**
Headings, buttons, links, nav — all sentence case. "I turn stalled platform programs into roadmaps that ship." reads like a person talking, not a brand shouting. Title Case and ALL CAPS both feel corporate; the brand avoids them.

**2. Exactly one uppercase style: the 12px label.**
The only uppercase on the site is the small **section label** (Sectra Medium, 12px, +0.12em tracking) — e.g. "SELECTED TURNAROUNDS", "HOW I WORK". Because it's the *only* uppercase, it functions as a wayfinding signal: it always means "a new section starts here." The nav lockup's tiny role line reuses the same treatment at 9px. Spending uppercase in one place keeps it meaningful.

**3. Numbers are the proof, so they're the loudest type.**
The dollar figures and percentages are set in GT Sectra Display **Bold** at 40–84px, each sitting on a 2px amber top rule. They're the largest, heaviest type on the site on purpose — the argument is evidence-led, so the evidence is the visual anchor. The ≈$95M summation at 84px is the peak.

**4. Editorial moments are Fine.**
Every testimonial and pull quote uses GT Sectra Fine Book **Italic** with a 2px amber left border. Fine marks a change of register — endorsement, reflection, or distilled judgment — and separates those moments cleanly from Ed's first-person copy. If a quote needs attribution, the attribution returns to GT Sectra Medium so the voice change stays controlled.

**5. Type pairs with the throughline, never with ornament.**
Headers and number callouts are accompanied only by the 40×2px (or 2px top-border) **amber rule**. No underlines-as-decoration, no icons, no flourishes. Amber is the single accent; it's spent on the throughline, links, and CTAs, never on large fills or body text.

**6. Measure and rhythm.**
Reading columns are capped so lines stay comfortable: lead/body copy around 48–68ch, long-form prose (the About story) in a ~720px column. Body line-height runs generous (1.58–1.72); display runs tight (≈1). Vertical section rhythm is 56–104px.

**7. Tracking follows size.**
Large display type gets slightly negative tracking (−0.01em) so it sets tight and confident; small uppercase labels get positive tracking (+0.12 to +0.14em) so the caps breathe and stay legible. Body copy, paragraphs, and long-form text should keep normal tracking.

**8. Optical size is hierarchy.**
Do not create hierarchy by piling on weights, colors, shadows, or decoration. Use the right Sectra cut first: Display for public claims, Text for explanation, Fine for editorial emphasis, Medium for interface clarity.

---

## Fallbacks

If a webfont fails to load, the stacks degrade gracefully — and none of the fallbacks need a license:

- **GT Sectra Display** → `Georgia, serif`
- **GT Sectra** → `Georgia, serif`
- **GT Sectra Fine** → `Georgia, serif`

`font-display: swap` is set on every GT Sectra face, so text renders immediately in the fallback and swaps to Sectra when it arrives (no invisible-text flash).

---

## Licensing

- **GT Sectra** — commercial webfont license from Grilli Type (your purchase). The full family is available for the site, but only the recommended production faces should be loaded by default.
- Font files should be self-hosted as `woff2` in `public/assets/fonts/`.
- No third-party font requests are needed.

---

## Implementation notes

Use separate family names for the three GT Sectra optical families, then map them to semantic tokens. All components should consume semantic typography tokens rather than concrete font-family declarations. Direct references to GT Sectra Display, GT Sectra, and GT Sectra Fine should exist only in the typography token definitions. Components should reference semantic tokens such as --font-heading, --font-body, --font-ui, and --font-editorial.

```css
:root {
  --font-sectra-display: "GT Sectra Display", Georgia, serif;
  --font-sectra: "GT Sectra", Georgia, serif;
  --font-sectra-fine: "GT Sectra Fine", Georgia, serif;

  --font-heading: var(--font-sectra-display);
  --font-body: var(--font-sectra);
  --font-ui: var(--font-sectra);
  --font-editorial: var(--font-sectra-fine);
}
```

Recommended Tailwind family tokens:

- `font-heading` → `"GT Sectra Display", Georgia, serif`
- `font-body` → `"GT Sectra", Georgia, serif`
- `font-ui` → `"GT Sectra", Georgia, serif`
- `font-editorial` → `"GT Sectra Fine", Georgia, serif`

Recommended production `@font-face` files:

**GT Sectra Display**
- `GT-Sectra-Display-Regular.woff2`
- `GT-Sectra-Display-Medium.woff2`
- `GT-Sectra-Display-Bold.woff2`
- `GT-Sectra-Display-Light.woff2` optional, decorative quote marks only

**GT Sectra**
- `GT-Sectra-Book.woff2`
- `GT-Sectra-Book-Italic.woff2`
- `GT-Sectra-Regular.woff2`
- `GT-Sectra-Medium.woff2`
- `GT-Sectra-Bold.woff2`

**GT Sectra Fine**
- `GT-Sectra-Fine-Regular.woff2`
- `GT-Sectra-Fine-Book-Italic.woff2`

OpenType guidance:

```css
body {
  font-family: var(--font-body);
  font-feature-settings: "kern" 1, "liga" 1;
  text-rendering: optimizeLegibility;
}

.section-label {
  font-family: var(--font-ui);
  font-feature-settings: "kern" 1, "liga" 1, "cpsp" 1;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
```

Implementation rules:

- Remove the Inter `@import` and any `fonts.googleapis.com` request.
- Replace `font-display`, `font-serif`, and `font-body` usage with semantic tokens where possible.
- Keep `font-display: swap` on every self-hosted face.
- Do not load unused GT Sectra styles just because the license permits them.
- Do not use Display for body text, buttons, nav, or metadata.
- Do not use Fine for UI.
- Do not use Bold as a default heading style; use optical size before weight.
- Prefer changing optical family before changing font weight. If additional emphasis is needed, move from Text to Display or Fine before introducing heavier weights.

---

## Design Intent

Typography should never feel decorative. Every typographic decision reinforces one of four qualities:

- **Authority through restraint.**
- **Editorial clarity over marketing language.**
- **Technical precision without sterility.**
- **Confidence earned through evidence rather than visual noise.**

When in doubt, remove emphasis instead of adding it. The strongest hierarchy comes from optical size, spacing, rhythm, and the amber throughline — not from excessive weights, colors, or ornament.

The site should feel typeset rather than designed. Readers should notice the clarity of the hierarchy before they notice the typography itself. If typography calls attention to itself, the system has become too expressive. Good typography should quietly increase trust.
