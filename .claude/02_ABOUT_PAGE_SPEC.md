# ABOUT PAGE — EXACT DESIGN SPEC
**Route:** `/about`
**Reference:** Bazna About page screenshot (Image 5)
**Pattern:** Page hero banner → sections alternating white/light → dark partner strip → timeline → CTA

---

## COMPONENT 1 — TOP BAR + NAV
*Same as Home page — see HOME_PAGE_SPEC.md Component 1 & 2*
Active nav link: "ABOUT" → color: `#C45911`, font-weight: 600

---

## COMPONENT 2 — PAGE HERO BANNER
**Height:** 300–340px
**Background:** Real photo (team working, behind-the-scenes) with overlay `rgba(0,0,0,0.65)`

### Content — Centered
```
[H1 — white]
About
Font: 48px, Rubik 700, color: #ffffff

[Breadcrumb below]
Deshkari Studios » About
Font: 14px, Rubik 400
"Deshkari Studios" → color: #ffffff
"»" → color: #C45911
"About" → color: #C45911
```

---

## COMPONENT 3 — ABOUT INTRO SECTION
**Background:** `#ffffff`
**Padding:** 80px 0
**Layout:** 2 columns — 50% left text, 50% right image

### Left Column
```
[Section label — orange]
About Us

[H2]
Advancing Without
Boundaries

[Body text — 3 paragraphs]
We are Deshkari Studios, a Pune-based creative company
building India's most culturally rooted entertainment studio.
Across three verticals — Productions, Events and Films —
we create original music, deliver live cultural experiences,
and tell authentic Indian stories through cinema.

Font: 16px, Rubik 400, #696969, line-height: 1.75
Max-width on text: 480px

[Orange pill button]
Read More →
```

### Right Column — Image Stack
```
Main large image: 
  real photo (studio, performance, film set)
  border-radius: 8px
  width: 100%
  
Small overlapping image:
  positioned: bottom-left of main image
  offset: -20px left, -20px bottom
  width: ~45% of main image
  border: 4px solid #ffffff
  border-radius: 8px
  box-shadow: 0 4px 20px rgba(0,0,0,0.12)
```

---

## COMPONENT 4 — CERTIFICATES / CREDENTIALS STRIP
**Background:** `#ffffff`
**Border-top:** `1px solid #e9e9e9`
**Padding:** 48px 0

```
Layout: 4 certificate cards in a row, centered

Each card:
  [Certificate illustration/image]
  Slight border: 1px solid #e9e9e9
  Padding: 16px
  Border-radius: 8px
  Width: ~200px
  Hover: box-shadow: 0 4px 20px rgba(0,0,0,0.08)
```

---

## COMPONENT 5 — SERVICES SECTION
**Background:** `#f9f5f0`
**Padding:** 80px 0

### Header (centered)
```
[Section label — orange, centered]
Our Services

[H2 — centered]
We Offer Better Services
For Your Films & Productions
```

### Services Grid — 3 columns
```
Each service block (icon + heading + text, NO card box):
┌─────────────────────────────┐
│  [Icon — 40px, #C45911]     │
│  [H3 — Rubik 600, 20px]     │
│  [Text — Rubik 400, 14px]   │
│  [Link "Learn More →" orange]│
└─────────────────────────────┘

Services:
1. Music & Film Production
   Icon: microphone/camera
   
2. Film Direction & Storytelling
   Icon: clapperboard
   
3. Visual Effects & Post-Production
   Icon: magic wand / film strip

Spacing: 40px gap between columns
Icon color: #C45911
H3 color: #262626
Text color: #696969
Link: 13px, #C45911, hover underline
```

---

## COMPONENT 6 — VIDEO SECTION
**Background:** Dark film set photo with overlay `rgba(0,0,0,0.70)`
**Padding:** 80px 0
**Height:** ~400px
**Layout:** Centered

```
[Play button circle — centered]
  Circle: 72px, border: 2px solid #C45911, bg: rgba(196,89,17,0.15)
  Triangle icon: #C45911, 22px
  Hover: bg → #C45911, triangle → white

[Text below play button]
"Watch Our Latest Showreel"
Font: 18px, Rubik 500, #ffffff
```

---

## COMPONENT 7 — TEAM SECTION
**Background:** `#ffffff`
**Padding:** 80px 0

### Header (centered)
```
[Section label]
Our Team

[H2]
Meet Our Creative
Team Members
```

### Team Grid — 3 columns (matching Bazna exactly)
```
Each team card:

[Photo block]
  Photo: full width, aspect ratio ~3:4 or square
  Filter: slightly desaturated by default
  Hover: 
    - Full color
    - Slight zoom (transform: scale(1.04))
    - Overlay with social icons appears

[Info below photo]
  Name: 16px, Rubik 600, #262626, margin-top: 16px
  Role: 14px, Rubik 400, #C45911
  
  Social icons row (4 icons):
    Facebook | Twitter | Instagram | LinkedIn
    Size: 14px each
    Color: #696969
    Hover: #C45911
    Circle border: 1px solid #e9e9e9, 30px size
    Gap: 8px

Cards gap: 24px
```

Team members:
1. Founder / Managing Director
2. Co-Founder / Creative Director
3. Head of Productions
4. Head of Events (optional 4th)

---

## COMPONENT 8 — PARTNER / CERTIFICATION STRIP
**Background:** `#C45911` (full orange — matching Bazna dark orange strip)
**Padding:** 40px 0

```
Layout: 6 icons in a row, centered
Icons: white, monochrome, ~36px each
Geometric/tech style icons (same as Bazna)
Opacity: 0.85, hover: 1.0
Gap: 64px
```

---

## COMPONENT 9 — HISTORY / TIMELINE SECTION
**Background:** `#f9f5f0`
**Padding:** 80px 0

### Header (centered)
```
[Section label]
Our Journey

[H2]
Know Something
About Our History
```

### Timeline — 2 column grid, 4 items
```
Layout: 2 columns × 2 rows = 4 timeline entries

Each entry:
  [Orange circle dot + label "Since 2022" → #C45911, 13px, Rubik 600]
  [H4 "When We Start" → #C45911, Rubik 600, 15px]
  [Body text → #696969, 14px, Rubik 400, line-height: 1.7]
  
Orange dot: 8px, background: #C45911
Left border accent: 2px solid #e9e9e9 (vertical line connecting dots)

Timeline items:
1. 2022 — Deshkari Studios Founded in Pune
2. 2023 — First Major Event: Pune Classical Music Festival
3. 2024 — Deshkari Films — First Documentary in Production
4. 2025 — Company registered as Private Limited, three verticals active

[Button — centered below]
"View More →" — orange pill
```

---

## COMPONENT 10 — CTA BANNER
**Background:** `#f9f5f0` (light) OR gradient image
**Padding:** 80px 0

```
Layout: Split — 60% left text, 40% right button

Left:
  [Small label — orange]
  Join Our Team To Get Creative Service
  
  [H2 — very large, dark]
  Don't Hesitate To
  Contact With Us.
  We're Always Ready
  to Meet You

  [Email line]
  Email us: hello@deshkari.in
  Color: #696969, 15px

Right:
  [Orange pill button — large]
  "Start a Project →"
  Padding: 18px 40px
  Font: 15px, Rubik 600

Decorative: Subtle geometric swirl/circle shapes in background (very light, #f0e8df)
```

---

## COMPONENT 11 — FOOTER
*Same as Home page — see HOME_PAGE_SPEC.md Component 15*

---

*About Page Design Spec v1.0 | Deshkari Studios | 2025*
