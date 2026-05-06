# PORTFOLIOS PAGE — EXACT DESIGN SPEC
**Route:** `/portfolio`
**Reference:** Bazna Portfolios page screenshot (Image 4)
**Pattern:** Hero banner → Filter tabs → 2-row 3-col grid → CTA section → Footer

---

## COMPONENT 1 — TOP BAR + NAV
*Same as all pages — active link: "PORTFOLIOS" → #C45911*

---

## COMPONENT 2 — PAGE HERO BANNER
**Height:** 300–340px
**Background:** Team/studio photo with `rgba(0,0,0,0.65)` overlay

### Centered content
```
[H1 — white]
Portfolios

[Breadcrumb]
Deshkari Studios » Portfolios
"Deshkari Studios" → #ffffff
"»" → #C45911
"Portfolios" → #C45911
Font: 14px, Rubik 400
```

---

## COMPONENT 3 — PORTFOLIO FILTER + GRID
**Background:** `#ffffff`
**Padding:** 80px 0

### Filter Tab Bar — centered
```
Container: border: 1px solid #e9e9e9, border-radius: 4px, inline-flex
Padding: 6px

Tabs:
  SHOW ALL | PRODUCTIONS | EVENTS | FILMS | CLASSICAL | DOCUMENTARY

Tab styling:
  Default:  bg: transparent, color: #696969, font: 14px Rubik 500
  Active:   bg: #C45911, color: #ffffff, border-radius: 3px
  Hover:    color: #C45911
  Padding:  10px 22px
  
Transition: background 0.2s ease
```

### Portfolio Grid — 3 columns × 2 rows = 6 items
```
Grid gap: 8px
Each image cell: aspect ratio 1:1 (square) or 4:3

Image display:
  - Real photos fill the cell
  - overflow: hidden
  - border-radius: 0 (flush, sharp edges)

Hover state on each image cell:
  Overlay: rgba(196,89,17,0.85) — saffron orange overlay
  Content fades in:
    [Circle play/link icon — white, 48px]
    [Category tag — white, 12px, uppercase]
    [Project title — white, Rubik 600, 18px]
  transition: opacity 0.3s ease

Grid layout:
  Row 1: [Productions Photo] [Events Photo] [Films Photo]
  Row 2: [Classical Photo]  [Documentary]  [Festival Photo]

Image placeholder colors (until real photos):
  Cell 1: gradient #1a2a3a (dark blue-grey)
  Cell 2: gradient #2a1a0a (dark amber)
  Cell 3: gradient #1a0a1a (dark plum)
  Cell 4: gradient #0a1a0a (dark forest)
  Cell 5: gradient #1a1a2a (dark navy)
  Cell 6: gradient #2a1a1a (dark maroon)
```

### "View All Works" Button — centered below grid
```
Orange pill button: "View All Works →"
Padding: 14px 40px
Margin-top: 48px
```

---

## COMPONENT 4 — CTA SECTION
**Background:** `#f9f5f0` (warm light)
**Padding:** 100px 0
**Decorative:** Large abstract swirl/organic shapes at left and right edges (light fill, ~10% opacity)

### Content — centered
```
[Small label — orange, centered]
Join Our Team To Get Creative Service

[H2 — very large, dark, centered]
Don't Hesitate To Contact With Us.
I'm Always Ready to Meet You

[Email line — centered]
Email us: hello@deshkari.in
Font: 16px, Rubik 400, #696969
Link: #C45911, hover underline

[CTA button — centered, orange pill]
"Start Your Project →"
Padding: 16px 42px
Font: 15px, Rubik 600
```

### Decorative shapes (CSS/SVG)
```
Left side: Large organic blob/swirl shape
  Fill: rgba(196,89,17,0.06)
  Position: absolute, left:-60px, top: 50%, translateY(-50%)
  
Right side: Smaller decorative dots pattern
  Fill: rgba(196,89,17,0.08)
  Position: absolute, right:-40px, top: 40%
```

---

## COMPONENT 5 — FOOTER
*Same as all pages — see HOME_PAGE_SPEC.md Component 15*

---

## ANIMATION NOTES FOR PORTFOLIO PAGE

```
Filter switching:
  - Items fade out (opacity: 0, scale: 0.95)
  - Filtered items fade in (opacity: 1, scale: 1)
  - Duration: 300ms ease
  - Use React state + CSS transition classes

Grid load:
  - Staggered reveal on mount
  - Each cell: opacity 0 → 1, translateY(20px) → 0
  - Delay: 80ms per item
  - Use framer-motion or IntersectionObserver

Hover overlay:
  - Overlay: opacity 0 → 1 on hover
  - Content inside: translateY(10px) → 0 on hover
  - Duration: 250ms ease
```

---

*Portfolios Page Design Spec v1.0 | Deshkari Studios | 2025*
