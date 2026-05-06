# DESHKARI STUDIOS — MASTER DESIGN SYSTEM
**Reference Template: Bazna Film Studio Theme**
**All values extracted directly from the provided CSS variables and page screenshots**

---

## 1. COLOR TOKENS (EXACT)

### Brand Colors
```css
--ba-primary:   #fd6500;   /* Primary orange — buttons, links, accents, highlights */
--ba-secondary: #696969;   /* Body text, muted paragraphs */
--ba-heading:   #262626;   /* All headings H1–H6 */
--ba-black:     #000000;   /* Pure black — borders, strong elements */
--ba-white:     #ffffff;   /* White — card backgrounds, form fields */
--ba-border:    #e9e9e9;   /* All borders, dividers, input lines */
```

### Adapted for Deshkari Studios
```css
/* Keep the exact same structure, swap orange for Deshkari Saffron */
--ds-primary:   #C45911;   /* Deshkari Saffron — replaces #fd6500 */
--ds-secondary: #696969;   /* Same — body text */
--ds-heading:   #262626;   /* Same — all headings */
--ds-black:     #000000;   /* Same */
--ds-white:     #ffffff;   /* Same */
--ds-border:    #e9e9e9;   /* Same — dividers */
--ds-dark-bg:   #1a1a1a;   /* Footer background — dark charcoal */
--ds-dark-nav:  #111111;   /* Top nav dark background */
--ds-light-bg:  #f9f5f0;   /* Inner section warm light bg */
--ds-gold:      #B8860B;   /* Productions accent */
--ds-maroon:    #6B1A1A;   /* Films accent */
```

### Color Usage Map
| Element | Color |
|---|---|
| Primary CTA button bg | `#C45911` |
| Primary CTA button text | `#ffffff` |
| CTA button hover bg | `#a34a0e` |
| All H1–H6 headings | `#262626` |
| Body / paragraph text | `#696969` |
| Nav links (default) | `#262626` |
| Nav links (hover / active) | `#C45911` |
| Top bar background | `#111111` |
| Top bar text | `#aaaaaa` |
| Top bar accent links | `#C45911` |
| Section white background | `#ffffff` |
| Section light background | `#f9f5f0` |
| Card border | `#e9e9e9` |
| Input border (forms) | `#e0e0e0` |
| Input focus border | `#C45911` |
| Footer background | `#1a1a1a` |
| Footer heading text | `#C45911` |
| Footer body text | `#888888` |
| Footer link hover | `#C45911` |
| Section label (small orange text above heading) | `#C45911` |
| Gallery overlay bg | `rgba(0,0,0,0.55)` |
| Hero overlay bg | `rgba(0,0,0,0.60)` |
| Dark band background | `#1c1c1c` |

---

## 2. TYPOGRAPHY TOKENS (EXACT)

### Font Family
```css
font-family: "Rubik", sans-serif;   /* PRIMARY — used for ALL text */
/* Google Fonts import: */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');
```

### Font Sizes & Weights

| Element | Size | Weight | Color |
|---|---|---|---|
| Top bar text | 13px | 400 | `#aaaaaa` |
| Navigation links | 14px | 500 | `#262626` |
| Logo text | 20px | 700 | `#262626` |
| Section label (small caps above heading) | 12px | 600 | `#C45911` |
| H1 hero | 52–60px | 700 | `#ffffff` |
| H2 section heading | 34–38px | 700 | `#262626` |
| H3 card heading | 20–22px | 600 | `#262626` |
| H4 sidebar / footer heading | 18px | 600 | `#C45911` |
| Body paragraph | 16px | 400 | `#696969` |
| Body small / meta | 13–14px | 400 | `#999999` |
| Button text | 14px | 600 | `#ffffff` |
| Tag / badge text | 12px | 600 | varies |

### Line Heights
```css
body text:    line-height: 1.75;
headings:     line-height: 1.2;
nav links:    line-height: 1;
```

### Letter Spacing
```css
section labels (small caps):  letter-spacing: 0.12em;
nav links:                     letter-spacing: 0.04em;
button text:                   letter-spacing: 0.06em;
headings:                      letter-spacing: -0.01em;
```

---

## 3. SPACING SYSTEM

### Base Unit: 8px

| Token | Value | Use |
|---|---|---|
| `--space-xs` | 8px | Icon gaps, small inline |
| `--space-sm` | 16px | Inside card padding, small gaps |
| `--space-md` | 24px | Card padding, grid gaps |
| `--space-lg` | 40px | Section inner padding |
| `--space-xl` | 64px | Section top/bottom padding |
| `--space-xxl` | 96px | Hero section padding |

### Section Padding (Consistent across all pages)
```css
section {
  padding-top: 80px;
  padding-bottom: 80px;
}
.section-sm {
  padding-top: 48px;
  padding-bottom: 48px;
}
```

### Container Width
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

---

## 4. COMPONENT TOKENS

### Buttons
```css
/* Primary Button — filled orange */
.btn-primary {
  background: #C45911;
  color: #ffffff;
  padding: 14px 32px;
  border-radius: 30px;        /* Pill shape — matches Bazna exactly */
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.06em;
  border: none;
  cursor: pointer;
  transition: background 0.25s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-primary:hover {
  background: #a34a0e;
}
/* Arrow icon inside button — same as Bazna "Read More →" */

/* Secondary Button — outline */
.btn-outline {
  background: transparent;
  color: #C45911;
  border: 2px solid #C45911;
  padding: 12px 30px;
  border-radius: 30px;
}
.btn-outline:hover {
  background: #C45911;
  color: #ffffff;
}
```

### Cards
```css
.card {
  background: #ffffff;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  padding: 28px 24px;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.10);
  transform: translateY(-4px);
}
```

### Section Label (Small orange text above heading)
```css
/* Pattern seen on EVERY section in Bazna */
.section-label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #C45911;
  margin-bottom: 10px;
  font-family: 'Rubik', sans-serif;
}
/* Always sits above the H2, separated by an orange underline or just spacing */
```

### Orange Underline Accent (Under section labels)
```css
.section-label::after {
  content: '';
  display: block;
  width: 36px;
  height: 2px;
  background: #C45911;
  margin-top: 6px;
}
```

### Form Inputs
```css
input, textarea, select {
  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 14px 0;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  color: #262626;
  background: transparent;
  outline: none;
  transition: border-color 0.2s;
}
input:focus, textarea:focus {
  border-bottom-color: #C45911;
}
input::placeholder, textarea::placeholder {
  color: #aaaaaa;
  font-size: 13px;
}
```

### Dividers
```css
hr.section-divider {
  border: none;
  border-top: 1px solid #e9e9e9;
  margin: 0;
}
```

---

## 5. LAYOUT GRIDS

### Home Page — Services Grid
```
3 columns, equal width, gap: 24px
```

### Home Page — Gallery Grid
```
3 columns, equal width, gap: 0 (flush)
Aspect ratio per image: 4:3
```

### About Page — Team Grid
```
3 columns, gap: 24px
```

### Portfolios Page — Portfolio Grid
```
3 columns, equal width, gap: 8px
Aspect ratio per image: 1:1 or 4:3
Filter tabs above grid: Show All | Action | Business | Drama | Music | Video
```

### Blog Page — Layout
```
Left column: 65% — blog posts list
Right column: 35% — sidebar (search, recent, categories, tags, ad)
Gap: 40px
```

### Contact Page — Office Cards
```
3 columns, equal width (London | Australia | New York → for Deshkari: Pune | Mumbai | India)
```

### Contact Page — Contact Section
```
Left: 35% — label + heading + description
Right: 65% — form (2-column grid for name/email, phone/subject, then full-width message)
```

### Footer — Column Grid
```
4 columns:
  Col 1 (wider): Logo + description + social icons
  Col 2: Contact Info (address, phone, email with icons)
  Col 3: Services List (links)
  Col 4: Our Gallery (2x3 image thumbnails)
```

---

## 6. BORDER RADIUS

| Element | Radius |
|---|---|
| Buttons (CTA) | `30px` — full pill |
| Cards | `8px` |
| Team member image | `8px` |
| Gallery images | `0px` — flush/sharp |
| Portfolio images | `0px` — flush |
| Form inputs | `0px` — underline style only |
| Tags / badges | `4px` |
| Social icon circles | `50%` |

---

## 7. SHADOWS

```css
/* Card hover shadow */
box-shadow: 0 8px 32px rgba(0,0,0,0.10);

/* Hero/overlay shadow for text readability */
text-shadow: 0 2px 8px rgba(0,0,0,0.4);

/* No shadows on flat elements (nav, footer) */
```

---

## 8. TRANSITIONS & ANIMATIONS

```css
/* Standard transition for ALL interactive elements */
transition: all 0.25s ease;

/* Card hover lift */
transform: translateY(-4px);

/* Button hover color change */
transition: background 0.25s ease;

/* Nav link underline on hover */
/* Uses ::after pseudo element that scales from 0 → 1 on hover */

/* Gallery image zoom on hover */
.gallery-img:hover img {
  transform: scale(1.06);
  transition: transform 0.4s ease;
}

/* Page scroll reveal (for React implementation) */
/* Use: framer-motion with initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} */
```

---

*Deshkari Studios Pvt. Ltd. | Design System v1.0 | 2025*
