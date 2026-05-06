# BLOG PAGE — EXACT DESIGN SPEC
**Route:** `/blog`
**Reference:** Bazna Blog page screenshot (Image 3)
**Pattern:** Hero banner → 65% main posts + 35% sidebar → Pagination → Footer

---

## COMPONENT 1 — TOP BAR + NAV
*Same as all pages — active link: "BLOG" → #C45911*

---

## COMPONENT 2 — PAGE HERO BANNER
**Height:** 300px
**Background:** Photo with `rgba(0,0,0,0.65)` overlay

### Centered
```
[H1 — white]
Blog

[Breadcrumb]
Deshkari Studios » Blog
"Deshkari Studios" → #ffffff | "»" → #C45911 | "Blog" → #C45911
```

---

## COMPONENT 3 — BLOG CONTENT AREA
**Background:** `#ffffff`
**Padding:** 80px 0

**Layout:** 2 columns
```
Left (main posts):  65% width
Right (sidebar):    35% width
Gap between:        40px
```

---

### LEFT COLUMN — BLOG POST LIST

Each blog post item:
```
┌─────────────────────────────────────────────┐
│                                             │
│  [Featured Image — full width of column]   │
│  aspect-ratio: 16:9                         │
│  border-radius: 8px                         │
│  overflow: hidden                           │
│  Hover: slight zoom on image (scale: 1.04) │
│                                             │
│  [Post Title — H2]                         │
│  Font: 24px, Rubik 600, #262626            │
│  Hover: color → #C45911                    │
│  Margin-top: 20px                           │
│                                             │
│  [Meta row]                                │
│  📅 July 25, 2025  👤 Deshkari  💬 0       │
│  Font: 13px, Rubik 400, #999999            │
│  Icon: 12px, #C45911                       │
│  Gap: 16px between items                   │
│  Margin: 12px 0                            │
│                                             │
│  [Excerpt — body text]                     │
│  3–4 lines, 15px, Rubik 400, #696969       │
│  line-height: 1.75                         │
│                                             │
│  [Read More button — orange pill]          │
│  "Read More →"                             │
│  Padding: 10px 24px                        │
│  Font: 13px, Rubik 600                     │
│  Margin-top: 20px                          │
│                                             │
└─────────────────────────────────────────────┘

Divider between posts:
  1px solid #e9e9e9
  Margin: 48px 0

Total posts shown: 3 per page
```

### Post Titles (Deshkari content)
```
Post 1: Deshkari Pune Classical Music Festival 2025 — What to Expect
Post 2: Behind the Scenes: How We Produce an Indian Heritage Documentary
Post 3: Why Live Music Events Matter More Than Ever for Indian Culture
```

---

### RIGHT COLUMN — SIDEBAR

#### Sidebar Item 1: Search
```
Heading: "Search"
  Font: 16px, Rubik 600, #262626
  Border-bottom: 2px solid #C45911 (short, 36px wide — underline accent)
  Margin-bottom: 20px

Search input + button:
  Input: full width, border: 1px solid #e9e9e9, padding: 12px 16px
  Button: attached right, bg: #262626, color: #fff, icon only (magnifying glass)
  Border-radius: 0 (sharp)
```

#### Sidebar Item 2: Recent Posts
```
Heading: "Recent Post"
  Same style as Search heading

3 recent post items:
  Layout: flex, gap: 12px
  
  [Thumbnail — 64px × 64px, border-radius: 4px]
  [Content]
    Title: 13px, Rubik 500, #262626, hover: #C45911, 2 lines max
    Date: 12px, Rubik 400, #C45911, uppercase
    e.g. "JULY 25, 2025"

Gap between recent items: 16px
Divider: 1px solid #e9e9e9 below last item
Margin-bottom: 40px
```

#### Sidebar Item 3: Categories
```
Heading: "Categories"
  Same style

List of categories:
  Productions (5)
  Events (8)
  Films (6)
  Classical Music (4)
  Documentaries (3)

Each item:
  Font: 14px, Rubik 400, #696969
  Hover: color → #C45911
  Number: #999999, float right
  Border-bottom: 1px solid #f5f5f5
  Padding: 10px 0
```

#### Sidebar Item 4: Social Profiles
```
Heading: "Social Profiles"

4 icon buttons in a row:
  [f] [t] [📌] [Be]
  Each: 36px circle, bg: #262626, icon: white
  Hover: bg → #C45911
  Gap: 8px
```

#### Sidebar Item 5: Tags
```
Heading: "Tags"

Tag cloud:
  Tags: MUSIC | FILM | EVENTS | CLASSICAL | FESTIVAL | CONCERT | DOCUMENTARY | INDIA | PUNE | STUDIO

Each tag:
  Border: 1px solid #e9e9e9
  Padding: 6px 14px
  Font: 12px, Rubik 500, #696969
  Border-radius: 3px
  Hover: bg: #C45911, color: #fff, border-color: #C45911
  Display: inline-block
  Margin: 4px
```

#### Sidebar Item 6: Ad / Promo Box
```
[Image block — full width of sidebar]
  background: dark image with orange overlay (#C45911 at 75%)
  Height: 200px
  border-radius: 8px
  overflow: hidden

[Text overlay — centered]
  [Small tag — white, uppercase, 11px]
  "Featured"
  
  [Title — white, Rubik 700, 22px]
  "Deshkari Pune
  Classical Festival"
  
  [Link button — small]
  "Register Now"
  border: 1px solid white
  color: white
  padding: 6px 18px
  font: 12px Rubik 500
```

---

## COMPONENT 4 — PAGINATION
**Background:** `#ffffff`
**Padding:** 40px 0 80px

```
Layout: centered, flex, gap: 8px

[Prev] [1] [2] [3] [Next]

Active page (1):
  bg: #C45911
  color: #ffffff
  width: 38px, height: 38px
  border-radius: 50%

Other numbers:
  bg: transparent
  color: #262626
  border: 1px solid #e9e9e9
  width: 38px, height: 38px
  border-radius: 50%
  Hover: bg: #C45911, color: #fff, border-color: #C45911

Prev / Next arrows:
  Same circle style as numbers
  Icon only (← →)
```

---

## COMPONENT 5 — FOOTER
*Same as all pages — see HOME_PAGE_SPEC.md Component 15*

---

## ANIMATION NOTES FOR BLOG PAGE

```
Post images: 
  Hover zoom: transform scale(1.04), transition: 0.35s ease
  
Sidebar search button:
  Hover: bg lightens slightly
  
Tags:
  Hover: filled with orange, transition: 0.2s
  
Pagination:
  Hover: filled with orange circle, transition: 0.2s

On page load:
  Posts stagger in from bottom: translateY(30px) → 0, opacity 0 → 1
  Stagger: 100ms per post
```

---

*Blog Page Design Spec v1.0 | Deshkari Studios | 2025*
