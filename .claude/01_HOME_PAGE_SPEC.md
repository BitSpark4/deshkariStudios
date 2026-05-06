# HOME PAGE — EXACT DESIGN SPEC
**Route:** `/`
**Reference:** Bazna Home page screenshot
**Background:** Hero = dark overlay on real photo | Inner sections = white + light alternate

---

## COMPONENT 1 — TOP BAR
**Height:** 40px
**Background:** `#111111`
**Layout:** Full-width, flex, space-between

### Left side
```
Text: "Welcome to Deshkari Studios. "
Link: "Have Any Question?" → color: #C45911, underline on hover
Font: 13px, Rubik 400, color: #aaaaaa
```

### Right side
```
Phone icon + "+91 98765 43210"   → color: #C45911
Mail icon  + "hello@deshkari.in" → color: #C45911
Font: 13px, gap: 24px between items
Icons: 14px, same color
```

---

## COMPONENT 2 — MAIN NAVIGATION
**Height:** 70px
**Background:** `#ffffff`
**Border-bottom:** `1px solid #e9e9e9`
**Position:** Sticky on scroll

### Logo (left)
```
Icon: Small orange square/box shape (like Bazna logo icon)
Text: "Deshkari" → font: Rubik 700, 20px, color: #262626
Color accent: icon in #C45911
```

### Nav Links (center/right)
```
HOME | ABOUT | PRODUCTIONS | EVENTS | FILMS | PORTFOLIOS | BLOG | CONTACT | 🔍

Font: 14px, Rubik 500, color: #262626
Hover: color → #C45911
Active page: color → #C45911, font-weight: 600
Letter-spacing: 0.04em
Gap between links: 32px
```

### Search icon
```
Last item in nav
Icon: magnifying glass, 16px, #262626
Click: expands search input
```

---

## COMPONENT 3 — HERO SECTION
**Height:** 100vh (full screen)
**Background:** Real photo of concert/film set/studio with dark overlay
**Overlay:** `rgba(0,0,0,0.60)`
**Text color:** all white

### Layout: Left-aligned content, centered vertically

```
[Small label — orange]
Real Film Studio

[H1 — white, large]
We Make Films &
Events That
People Love

[Sub text — white, 60% opacity]
Deshkari Studios produces original Indian music,
live cultural events and powerful Indian stories through film.

[Two buttons side by side]
[Orange pill button] Get Started →
[White outline pill button] Watch Our Reel

[Two circular nav arrows]  ← →  (for slider — bottom right)
[Three dot indicators at bottom center]
```

### Hero Typography
```
H1: 58px, Rubik 700, line-height: 1.1, color: #ffffff
Sub: 17px, Rubik 400, color: rgba(255,255,255,0.65), max-width: 480px
Label: 13px, Rubik 600, #C45911, letter-spacing: 0.14em, uppercase, margin-bottom: 12px
```

---

## COMPONENT 4 — ABOUT PREVIEW SECTION
**Background:** `#ffffff`
**Padding:** 80px 0
**Layout:** 2 columns — 50% left text, 50% right image stack

### Left Column — Text
```
[Section label]
About Our Studio

[H2]
Advancing Without
Boundaries

[Body text — 3 short paragraphs]
16px, Rubik 400, #696969, line-height: 1.75

[Orange button]
Read More →

[Stats row below button]
12+ Years Experience   |   150+ Projects   |   25+ Awards
Small number: 28px, Rubik 700, #262626
Small label: 13px, Rubik 400, #696969
Divider: 1px solid #e9e9e9 (vertical)
```

### Right Column — Image
```
Main image: large, slight rounded corners (8px), real photo
Small overlapping image: positioned bottom-left, border: 4px solid #ffffff
Image stack effect — like Bazna about section
```

---

## COMPONENT 5 — CERTIFICATIONS / PARTNERS STRIP
**Background:** `#ffffff`
**Border-top + border-bottom:** `1px solid #e9e9e9`
**Padding:** 40px 0

```
[Centered heading]
We Have Got Many Other
Certifications & Partners

[Logo strip — 6 icons/logos in a row]
Grayscale by default → color on hover
Gap: 60px between logos
```

---

## COMPONENT 6 — VIDEO / DARK FEATURE SECTION
**Background:** Dark image (film set/concert) with `rgba(0,0,0,0.75)` overlay
**Padding:** 80px 0
**Layout:** 2 columns

### Left Column — Images
```
3 small thumbnail images stacked/overlapping
Each: slight rounded corner, real film/music photos
```

### Right Column — Content
```
[Section label — orange]
Our Latest Work

[H2 — white]
We Published
Our Recent Event
Trailer Let's See

[Body — white, 70% opacity]
Description of the flagship Deshkari event or film...

[Orange pill button]
Watch Now →
```

---

## COMPONENT 7 — SERVICES SECTION
**Background:** `#ffffff`
**Padding:** 80px 0

### Header (centered)
```
[Section label]
Our Services

[H2]
We Offer Better Services
For Your Projects
```

### Services Grid — 3 columns
Each service card:
```
[Icon — 48px, #C45911 or outlined]
[H3 — 20px, #262626]
[Short description — 14px, #696969]

Border: none (icon + text only, no card box)
Hover: icon color intensifies
```

Services to show:
1. Music & Album Production
2. Film & Documentary Direction
3. Find Your Final Visual Style
4. Event Planning & Execution
5. Artist Management
6. Brand Films & Audio

---

## COMPONENT 8 — GALLERY SECTION
**Background:** `#f9f5f0`
**Padding:** 80px 0

### Header (centered)
```
[Section label]
Awards & Gallery

[H2]
Our Most Award-Winning
Working Gallery
```

### Gallery Grid — 3 columns, no gap
```
3 images side by side, full width combined
Each image: aspect ratio 4:3, overflow hidden
On hover: dark overlay appears, play button icon in center
Caption at bottom of each on hover:
  - Category tag (orange)
  - Project title (white, Rubik 600)
```

Items:
- Classical Music Concert — Pune
- Film Production — Documentary
- Cultural Festival — Maharashtra

---

## COMPONENT 9 — TEAM SECTION
**Background:** `#ffffff`
**Padding:** 80px 0

### Header (centered)
```
[Section label]
Our People

[H2]
Meet Our Creative
Team Members
```

### Team Grid — 3 columns (or 4 for Deshkari)
Each member card:
```
[Photo — B&W or desaturated, full width, aspect ratio 3:4]
[Hover: color shows, slight zoom]
Below photo:
  Name: 16px, Rubik 600, #262626
  Role: 13px, Rubik 400, #C45911
  Social icons: 4 small icons in a row (Instagram, LinkedIn, YouTube, Facebook)
              icon size: 14px, color: #696969, hover: #C45911
```

---

## COMPONENT 10 — TESTIMONIALS SECTION
**Background:** `#f9f5f0`
**Padding:** 80px 0

### Header (centered)
```
[Section label]
Client Reviews

[H2]
Let's See Our Clients'
Awesome Reviews
```

### Testimonial Card (single, centered, slide)
```
[Photo — circle, 72px, border: 3px solid #C45911]
[Quote text — italic, 18px, Rubik 400, #262626, max-width: 680px, centered]
[Name — Rubik 600, 15px, #262626]
[Role/Company — 13px, #C45911]
[Star rating — 5 stars, #C45911]
[Dot pagination — 3 dots, active: #C45911]
```

---

## COMPONENT 11 — ACHIEVEMENTS / STATS SECTION
**Background:** `#ffffff`
**Padding:** 80px 0
**Layout:** 2 columns — left text, right stats grid

### Left Column
```
[Section label]
Our Achievements

[H2]
We Have Great
Achievements

[Body text]
2–3 lines about the company milestones
```

### Right Column — 2x2 Stats Grid
```
Each stat box (4 total):
  [Icon — outlined, 32px, #C45911]
  [Number — 40px, Rubik 700, #C45911]
  [Label — 13px, Rubik 400, #696969]

Stats:
  🎵 120+   Albums Produced
  🎪 85+    Events Organised
  🎬 40+    Films & Documentaries
  🏆 35+    Awards & Recognition
```

---

## COMPONENT 12 — NEWSLETTER / EMAIL CTA
**Background:** `#f9f5f0`
**Padding:** 60px 0

### Centered layout
```
[H2]
Do You Want To Update Every Latest
Event, Video or Release?

[Email input + button, inline]
Input: full-width, border-bottom style, placeholder: "Enter your email..."
Button: orange pill "Subscribe →" right side
```

---

## COMPONENT 13 — BLOG PREVIEW SECTION
**Background:** `#C45911` (full orange background — like Bazna)
**Padding:** 80px 0
**Text:** all white

### Header
```
[Small label — white, uppercase]
Read Our Latest

[H2 — white]
News & Blog
```

### Blog Grid — 3 cards (2 large + 1 small or 3 equal)
Each blog card:
```
[Image — full top, rounded corners]
[Date — orange/white tag]
[Title — white, Rubik 600, 16px]
[Short excerpt — white, 70% opacity]
```

---

## COMPONENT 14 — CERTIFICATIONS ICON STRIP (BOTTOM)
**Background:** `#1c1c1c` (dark)
**Padding:** 40px 0

```
6 certification/partner icons in a row
Monochrome white/grey
Centered
```

---

## COMPONENT 15 — FOOTER
**Background:** `#1a1a1a`
**Padding:** 60px 0 24px

### Footer Grid — 4 columns

**Column 1 — Brand**
```
[Logo icon + "Deshkari Studios"]
[Description: 2-3 lines, #888888, 14px]
[Social icons row: Facebook, Twitter, Instagram, YouTube]
Icons: circle, 34px, border: 1px solid #333
Icon color: #888888, hover: #C45911, hover border: #C45911
```

**Column 2 — Contact Info**
```
Heading: "Contact Info" — Rubik 600, 16px, #C45911
Items with icons:
  🏠 Address: [Pune street address]
  📞 Phone Us: +91 98765 43210
  📧 Mail Us: hello@deshkari.in
Icon: 14px, #C45911
Text: 14px, #888888
```

**Column 3 — Services List**
```
Heading: "Services List" — Rubik 600, 16px, #C45911
Links (no bullets):
  Music Production
  Film Production
  Event Management
  Artist Management
  Brand Films & Audio
  OTT Distribution
Link color: #888888, hover: #C45911
Font: 14px, line-height: 2
```

**Column 4 — Our Gallery**
```
Heading: "Our Gallery" — Rubik 600, 16px, #C45911
2 rows × 3 columns thumbnail grid
Image size: ~80px × 60px each
Gap: 4px
Hover: slight brightness increase
```

### Footer Bottom Bar
```
Border-top: 1px solid #2a2a2a
Padding: 20px 0
Layout: space-between

Left: "Copyright © 2025 Deshkari Studios. All Rights Reserved."
      Font: 13px, #555555

Right: Links — About | Price | Portfolios | Contact
       Font: 13px, #555555, hover: #C45911, gap: 20px
```

---

*Home Page Design Spec v1.0 | Deshkari Studios | 2025*
