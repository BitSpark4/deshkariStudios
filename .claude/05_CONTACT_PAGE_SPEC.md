# CONTACT PAGE — EXACT DESIGN SPEC
**Route:** `/contact`
**Reference:** Bazna Contact page screenshot (Image 2)
**Pattern:** Hero banner → Map → Office cards → Contact form section → Footer

---

## COMPONENT 1 — TOP BAR + NAV
*Same as all pages — active link: "CONTACT" → #C45911*

---

## COMPONENT 2 — PAGE HERO BANNER
**Height:** 300px
**Background:** Team/studio photo with `rgba(0,0,0,0.65)` overlay

### Centered
```
[H1 — white]
Contact

[Breadcrumb]
Deshkari Studios » Contact
Colors: white | #C45911 | #C45911
```

---

## COMPONENT 3 — MAP SECTION
**Background:** `#f9f5f0`
**Padding:** 0 (full bleed map)

```
Google Maps embed:
  Width: 100%
  Height: 420px
  Border: none
  Location: Pune, Maharashtra, India

Map style: default Google Maps
```

---

## COMPONENT 4 — OFFICE LOCATION CARDS
**Background:** `#ffffff`
**Padding:** 80px 0

### 3 column grid
```
For Deshkari: Pune | Mumbai | Bangalore (or just Pune for now with future locations)
```

Each office card:
```
┌─────────────────────────────────────┐
│                                     │
│  [City Name — H3]                   │
│  Font: 26px, Rubik 700, #262626     │
│  Margin-bottom: 20px                │
│                                     │
│  [🏠 Address]                       │
│  Icon: 14px, #C45911               │
│  Text: 14px, Rubik 400, #696969     │
│  Line 1: Street address             │
│  Line 2: City, State                │
│  Margin-bottom: 12px                │
│                                     │
│  [📧 Email]                         │
│  Icon: 14px, #C45911               │
│  Text: 14px, Rubik 400, #696969     │
│  hello@deshkari.in                  │
│  Hover: #C45911                    │
│  Margin-bottom: 12px                │
│                                     │
│  [📞 Phone]                         │
│  Icon: 14px, #C45911               │
│  Text: 14px, Rubik 400, #696969     │
│  +91 98765 43210                    │
│                                     │
└─────────────────────────────────────┘

Border: 1px solid #e9e9e9 (visible card border)
Border-radius: 8px
Padding: 36px 28px
Hover: box-shadow: 0 8px 24px rgba(0,0,0,0.08)
Transition: box-shadow 0.25s ease

Card dividers: 1px solid #e9e9e9 between icon and text rows

Office 1 — Pune (Main Office):
  Address: Chinchwad, Pune - 411019, Maharashtra, India
  Email: hello@deshkari.in
  Phone: +91 98765 43210

Office 2 — Mumbai (Coming Soon):
  Address: Andheri West, Mumbai - 400053, Maharashtra, India
  Email: mumbai@deshkari.in
  Phone: +91 98765 43211

Office 3 — Pan India (Remote):
  Address: Available across Maharashtra
  Email: projects@deshkari.in
  Phone: +91 98765 43212
```

---

## COMPONENT 5 — CONTACT FORM SECTION
**Background:** `#ffffff`
**Padding:** 80px 0
**Border-top:** `1px solid #e9e9e9`

### Layout: 2 columns
```
Left column:  35% — label + heading + description
Right column: 65% — contact form
Gap: 60px
```

### Left Column — Content
```
[Section label — orange, small caps]
ANY QUESTIONS?

[H2 — very large, dark]
Let's Talk

Font: 42px, Rubik 700, #262626
Line-height: 1.15
Margin-bottom: 20px

[Body text]
Whether you're an artist, a brand, a venue,
a filmmaker or a collaborator — we'd love to
hear from you. Fill out the form and we'll
respond within 48 working hours.

Font: 15px, Rubik 400, #696969, line-height: 1.75
```

### Right Column — Form
```
Form grid layout:
  Row 1: [Your Name] | [Your Email]    → 2 equal columns, gap: 24px
  Row 2: [Your Phone] | [Your Subject] → 2 equal columns, gap: 24px
  Row 3: [Your Message]               → full width, textarea
  Row 4: [Send Message button]         → centered

INPUT STYLING (Underline style — matching Bazna exactly):
  border: none
  border-bottom: 1px solid #e0e0e0
  padding: 16px 0
  font-family: 'Rubik', sans-serif
  font-size: 15px
  color: #262626
  background: transparent
  width: 100%
  outline: none
  
  ::placeholder
    color: #bbbbbb
    font-size: 14px
    
  :focus
    border-bottom-color: #C45911
    transition: border-color 0.2s ease

Textarea:
  Same style as inputs
  Height: 120px
  resize: vertical
  
Send Message Button:
  Style: orange pill (same as all CTAs)
  "Send Message →"
  Padding: 14px 36px
  Font: 14px, Rubik 600
  Display: block
  Margin: 32px auto 0
  Width: fit-content
```

---

## COMPONENT 6 — FOOTER
**Background:** `#1a1a1a`
**Padding:** 60px 0 24px

### Footer Grid — 4 columns (Exact Bazna layout)

**Column 1 — Brand + Social**
```
[Logo line]
  [Orange icon] + "Deshkari" 
  Icon: 24px square, #C45911
  Text: Rubik 700, 20px, #ffffff

[Description]
  2–3 lines about Deshkari Studios
  Font: 14px, Rubik 400, #888888
  Line-height: 1.7
  Margin: 16px 0

[Social icons row]
  Icons: Facebook | Twitter | Instagram | YouTube
  Each: circle 36px
  Border: 1px solid #333333
  Icon color: #888888
  Hover: icon #C45911, border #C45911
  Gap: 8px
```

**Column 2 — Contact Info**
```
[Heading: "Contact Info"]
  Font: 16px, Rubik 600, #C45911
  Border-bottom: 2px solid #C45911 (short, 36px)
  Margin-bottom: 20px

Items (with icons):
  🏠 Address
    "House - 4, Road - 7, Chinchwad,"
    "Pune - 411019, Maharashtra"
    
  📞 Phone Us
    "+91 98765 43210"
    
  📧 Mail Us
    "hello@deshkari.in"

Each item:
  Layout: flex, gap: 12px
  Icon: 16px, #C45911
  Heading (bold): "Address" / "Phone Us" / "Mail Us"
    Font: 13px, Rubik 600, #ffffff
  Value:
    Font: 13px, Rubik 400, #888888
    Hover: #C45911
  Margin-bottom: 16px
```

**Column 3 — Services List**
```
[Heading: "Services List"]
  Font: 16px, Rubik 600, #C45911
  Border-bottom: 2px solid #C45911 (short, 36px)
  Margin-bottom: 20px

Links (no bullets, no icons):
  Music Production
  Film Production
  Event Management
  Artist Management
  Brand Films & Audio
  OTT Distribution

Each link:
  Font: 14px, Rubik 400, #888888
  Hover: color → #C45911
  Line-height: 2.2
  Text-decoration: none
```

**Column 4 — Our Gallery**
```
[Heading: "Our Gallery"]
  Font: 16px, Rubik 600, #C45911
  Border-bottom: 2px solid #C45911 (short, 36px)
  Margin-bottom: 20px

Thumbnail grid: 3 columns × 2 rows = 6 photos
  Each thumb: ~82px × 62px
  Gap: 4px
  Border-radius: 2px
  overflow: hidden
  Hover: brightness(1.15)
  Cursor: pointer
```

### Footer Bottom Bar
```
Border-top: 1px solid #2a2a2a
Padding-top: 20px
Layout: flex, space-between

Left text:
  "Copyright © 2025 Deshkari Studios. All Rights Reserved."
  Font: 13px, Rubik 400, #555555

Right links: About | Price | Portfolios | Contact
  Font: 13px, Rubik 400, #555555
  Hover: #C45911
  Separator: none (just gap: 20px)
```

---

## FORM VALIDATION STATES

```
Error state:
  border-bottom-color: #dc3545
  Error message: 12px, #dc3545, margin-top: 4px

Success state:
  border-bottom-color: #28a745

Submit loading:
  Button text changes to "Sending..."
  Button opacity: 0.7, cursor: not-allowed

Submit success:
  Green success message appears below form
  "Your message has been sent! We'll respond within 48 hours."
  Font: 14px, #28a745, padding: 12px 16px, bg: #f0fff4, border-radius: 4px
```

---

## ANIMATION NOTES FOR CONTACT PAGE

```
Office cards:
  Scroll reveal: translateY(30px) → 0, opacity 0 → 1
  Stagger: 120ms per card
  
Form fields:
  Focus: bottom border animates from left → right (#C45911)
  
Send button:
  Hover: slight scale(1.03), transition: 0.2s
  
Map:
  Loads with slight fade-in: opacity 0 → 1, duration: 600ms
```

---

*Contact Page Design Spec v1.0 | Deshkari Studios | 2025*
