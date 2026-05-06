# CLAUDE.md — Deshkari Studios Website
## Instructions for Claude Code Agent

---

## PROJECT IDENTITY

**Company:** Deshkari Studios Pvt. Ltd.
**Location:** Pune, Maharashtra, India
**Tagline:** "Rooted in India. Built for the World."
**Type:** Creative entertainment company — 3 verticals: Productions · Events · Films

---

## WHAT THIS PROJECT IS

A marketing website for Deshkari Studios built in **React + Vite + Tailwind CSS**, hosted on **Netlify**.

The design is based exactly on the **Bazna Film Studio WordPress theme** — same layout patterns, same section structures, same component behaviours. All design decisions are documented in the `/docs` folder (the markdown spec files).

---

## TECH STACK

```
Frontend:     React 18 + Vite
Styling:      Tailwind CSS (custom config — see tailwind.config.js)
Animations:   Framer Motion
Routing:      React Router DOM v6
Forms:        EmailJS (@emailjs/browser)
Scroll:       react-intersection-observer
Font:         Rubik (Google Fonts — ONE font only)
Icons:        Lucide React
Hosting:      Netlify
```

---

## BRAND COLORS — MEMORISE THESE

```
Primary (buttons, links, accents):  #C45911   ← Deshkari Saffron
Heading (all H1–H6):                #262626
Body text (paragraphs):             #696969
Border (cards, dividers):           #e9e9e9
Footer background:                  #1a1a1a
Section light background:           #f9f5f0
Gold (Productions vertical):        #B8860B
Maroon (Films vertical):            #6B1A1A
Dark green (company identity):      #1A3C2B
```

**NEVER use:**
- Pure white `#ffffff` as a background (use `#f9f5f0` for warm sections)
- Any other font besides Rubik
- Blue, purple, or cold-toned accent colors
- Rounded corners on buttons less than 30px radius (always pill shape)

---

## FONT SYSTEM

```
font-family: 'Rubik', sans-serif  ← ONLY font

Weights:
  400 → body text, paragraphs
  500 → nav links, meta labels
  600 → card titles, buttons, section labels
  700 → H1, H2, logo

Sizes:
  Hero H1:         58px
  Section H2:      38px
  Card H3:         22px
  Body:            16px
  Small / meta:    13–14px
  Section label:   12px (uppercase, letter-spacing: 0.14em)
```

---

## PAGES & ROUTES

| Page | Route | File |
|---|---|---|
| Home | `/` | `src/pages/Home.jsx` |
| About | `/about` | `src/pages/About.jsx` |
| Productions | `/productions` | `src/pages/Productions.jsx` |
| Events | `/events` | `src/pages/Events.jsx` |
| Films | `/films` | `src/pages/Films.jsx` |
| Portfolio | `/portfolio` | `src/pages/Portfolio.jsx` |
| Blog | `/blog` | `src/pages/Blog.jsx` |
| Blog Single | `/blog/:slug` | `src/pages/BlogSingle.jsx` |
| Contact | `/contact` | `src/pages/Contact.jsx` |

---

## FOLDER STRUCTURE

```
deshkari-website/
├── docs/                          ← Design specs — READ THESE FIRST
│   ├── 00_DESIGN_SYSTEM_TOKENS.md
│   ├── 01_HOME_PAGE_SPEC.md
│   ├── 02_ABOUT_PAGE_SPEC.md
│   ├── 03_PORTFOLIO_PAGE_SPEC.md
│   ├── 04_BLOG_PAGE_SPEC.md
│   ├── 05_CONTACT_PAGE_SPEC.md
│   ├── 06_REACT_IMPLEMENTATION_GUIDE.md
│   └── 07_QUICK_REFERENCE.md
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.jsx          ← Dark bar with phone + email
│   │   │   ├── Navbar.jsx          ← Sticky nav with logo + links
│   │   │   ├── Footer.jsx          ← 4-column footer
│   │   │   └── PageHero.jsx        ← Reusable page banner (H1 + breadcrumb)
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx          ← Primary + outline variants
│   │   │   ├── SectionLabel.jsx    ← Small orange uppercase label
│   │   │   ├── TeamCard.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── BlogCard.jsx
│   │   │   ├── PortfolioItem.jsx
│   │   │   ├── TestimonialCard.jsx
│   │   │   └── StatBox.jsx
│   │   │
│   │   └── sections/
│   │       ├── home/               ← All home page sections
│   │       ├── about/              ← All about page sections
│   │       ├── portfolio/
│   │       ├── blog/
│   │       └── contact/
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Productions.jsx
│   │   ├── Events.jsx
│   │   ├── Films.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogSingle.jsx
│   │   └── Contact.jsx
│   │
│   ├── constants/
│   │   ├── navigation.js
│   │   ├── team.js
│   │   ├── services.js
│   │   ├── portfolio.js
│   │   └── blog.js
│   │
│   ├── hooks/
│   │   └── useScrollReveal.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .claude/                        ← Claude Code config
│   └── CLAUDE.md                   ← This file
│
├── tailwind.config.js
├── vite.config.js
├── package.json
├── netlify.toml
└── .gitignore
```

---

## COMPONENT RULES

### Every page section MUST follow this pattern:
```jsx
// Standard section structure
<section className="py-section bg-white">        {/* or bg-bg-light */}
  <div className="container">
    <SectionLabel>Small Orange Label Here</SectionLabel>
    <h2 className="text-h2 text-heading font-bold mb-4">
      Section Heading Here
    </h2>
    {/* content */}
  </div>
</section>
```

### Every CTA button MUST be:
```jsx
<button className="btn-primary">
  Action Text <span>→</span>
</button>
// OR
<Button variant="primary">Action Text</Button>
```

### Every form input MUST use underline style:
```jsx
<input className="form-input" placeholder="Your Name" />
// NOT a boxed/bordered input — underline only
```

### Section labels MUST be:
```jsx
<SectionLabel>Our Services</SectionLabel>
// Renders: small, orange, uppercase, letter-spaced, with 2px underline accent
```

---

## ANIMATION RULES

Use **Framer Motion** for all animations. Never use CSS keyframes for entrance animations.

```jsx
// Standard scroll reveal — use on every section heading + content
import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal';

const { ref, controls } = useScrollReveal();

<motion.div
  ref={ref}
  initial="hidden"
  animate={controls}
  variants={fadeUpVariants}
>
  content
</motion.div>

// For staggered grids (cards, team, services):
// Add custom delay to each item: transition: { delay: index * 0.1 }
```

### Animation timings:
```
Fade up entrance:   duration 0.55s, ease 'easeOut'
Hover transitions:  duration 0.25s, ease default
Image zoom hover:   duration 0.35s, ease default
Button hover:       duration 0.2s
Filter switch:      duration 0.3s
Stagger delay:      80–120ms per item
```

---

## NAVBAR BEHAVIOUR

```
Default (top of page):
  background: #ffffff
  border-bottom: 1px solid #e9e9e9
  height: 70px

Scrolled (past 80px):
  background: #ffffff
  box-shadow: 0 2px 20px rgba(0,0,0,0.08)
  height: 60px (slightly compressed)
  transition: all 0.3s ease

Active page link: color #C45911, font-weight 600
Hover link: color #C45911
```

---

## HERO SECTION BEHAVIOUR

```
The home page hero is a SLIDER (not static):
  - 3 slides minimum
  - Auto-advance: every 5 seconds
  - Manual: left/right arrow buttons (circle style, white border)
  - Dots indicator at bottom center
  - Transition: fade or slide (fade preferred)
  - Each slide: different background image, same text layout
```

---

## PORTFOLIO FILTER BEHAVIOUR

```javascript
// State management for portfolio filter
const [activeFilter, setActiveFilter] = useState('all');

// Filter tabs: ['all', 'productions', 'events', 'films', 'classical', 'documentary']

// On filter change:
// 1. Items fade out (opacity 0, scale 0.95) — 200ms
// 2. Grid re-renders with filtered items
// 3. Items fade in (opacity 1, scale 1) — 300ms staggered
```

---

## CONTACT FORM BEHAVIOUR

```javascript
// Use EmailJS for form submission
// Service ID, Template ID, Public Key → stored in .env

// .env variables:
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

// Form fields:
// Name, Email, Phone, Subject, Message

// States: idle → loading → success | error
// Loading: button text "Sending..." + disabled
// Success: green message below form
// Error: red message below form
```

---

## TAILWIND CONFIG SUMMARY

```javascript
// tailwind.config.js — KEY CUSTOM VALUES
colors: {
  primary: '#C45911',
  'primary-dark': '#a34a0e',
  heading: '#262626',
  body: '#696969',
  muted: '#999999',
  border: '#e9e9e9',
  'bg-light': '#f9f5f0',
  'bg-dark': '#1a1a1a',
  'bg-darker': '#111111',
  gold: '#B8860B',
  maroon: '#6B1A1A',
  green: '#1A3C2B',
}

fontFamily: { rubik: ['Rubik', 'sans-serif'] }

borderRadius: { btn: '30px', card: '8px' }

maxWidth: { container: '1200px' }
```

---

## WHAT NOT TO DO

```
❌ Never use any font other than Rubik
❌ Never use purple, blue, or cold accent colors
❌ Never use boxed inputs — always underline-style only
❌ Never use square/sharp corners on buttons — always pill (30px radius)
❌ Never use CSS keyframes for entrance animations — use Framer Motion
❌ Never hardcode colors — always use Tailwind custom tokens
❌ Never put all sections in one giant file — each section = own component
❌ Never skip the SectionLabel above H2 headings
❌ Never use inline styles unless absolutely unavoidable
❌ Never skip scroll reveal animations on sections
❌ Never use autoplay video with sound
❌ Never create a page without the TopBar + Navbar + Footer wrapper
```

---

## HOW CLAUDE CODE SHOULD WORK ON THIS PROJECT

### When starting a new page:
1. Read the relevant spec file in `/docs/` first
2. Check the existing components in `/src/components/` before creating new ones
3. Build section by section — one component per section
4. Always wrap page in `<TopBar />` + `<Navbar />` + content + `<Footer />`
5. Add Framer Motion scroll reveals to every section

### When creating a new component:
1. Check if a similar UI component exists in `/src/components/ui/`
2. Use Tailwind custom tokens — never hardcode hex colors
3. Accept props for content (text, images, etc.) — no hardcoded content in components
4. Export as default

### When modifying styling:
1. Check `tailwind.config.js` for custom tokens before adding new values
2. Check `src/index.css` for existing component classes (`.btn-primary`, `.form-input`, etc.)
3. Never add a new color without adding it to `tailwind.config.js` first

### When adding animations:
1. Import from `framer-motion`
2. Use `useScrollReveal` hook from `src/hooks/useScrollReveal.js`
3. Use `fadeUpVariants` for standard sections
4. Use stagger delay (`index * 0.1`) for grids

---

## CONTENT DATA — WHERE IT LIVES

```javascript
// src/constants/navigation.js
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Productions', path: '/productions' },
  { label: 'Events', path: '/events' },
  { label: 'Films', path: '/films' },
  { label: 'Portfolios', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

// src/constants/team.js
export const teamMembers = [
  { name: 'Founder Name', role: 'Managing Director', image: '/images/team/founder.jpg', socials: {...} },
  { name: 'Co-Founder Name', role: 'Creative Director', image: '/images/team/co-founder.jpg', socials: {...} },
  { name: 'Head of Productions', role: 'Productions Lead', image: '/images/team/productions.jpg', socials: {...} },
  { name: 'Head of Events', role: 'Events Director', image: '/images/team/events.jpg', socials: {...} },
];

// src/constants/services.js
export const services = [
  { icon: 'Mic', title: 'Music Production', desc: '...' },
  { icon: 'Film', title: 'Film & Documentary', desc: '...' },
  { icon: 'Calendar', title: 'Event Management', desc: '...' },
  { icon: 'Users', title: 'Artist Management', desc: '...' },
  { icon: 'Video', title: 'Brand Films & Audio', desc: '...' },
  { icon: 'Globe', title: 'OTT Distribution', desc: '...' },
];

// src/constants/portfolio.js
export const portfolioItems = [
  { id: 1, title: 'Classical Fusion Session', category: 'productions', image: '/images/portfolio/1.jpg' },
  { id: 2, title: 'Pune Music Festival', category: 'events', image: '/images/portfolio/2.jpg' },
  { id: 3, title: 'Heritage Documentary', category: 'films', image: '/images/portfolio/3.jpg' },
  { id: 4, title: 'Classical Concert', category: 'classical', image: '/images/portfolio/4.jpg' },
  { id: 5, title: 'Documentary Shoot', category: 'documentary', image: '/images/portfolio/5.jpg' },
  { id: 6, title: 'Cultural Festival', category: 'events', image: '/images/portfolio/6.jpg' },
];
```

---

## NETLIFY CONFIG

```toml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## ENVIRONMENT VARIABLES

```bash
# .env (never commit this file)
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_GOOGLE_MAPS_API_KEY=

# .env.example (commit this — no real values)
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_GOOGLE_MAPS_API_KEY=your_maps_key_here
```

---

## GIT COMMIT CONVENTION

```
feat: add hero slider component
feat: build contact form with emailjs
fix: navbar active link not highlighting
style: adjust team card hover animation timing
refactor: extract section label to ui component
docs: update portfolio spec
```

---

*CLAUDE.md v1.0 | Deshkari Studios Pvt. Ltd. | Pune, Maharashtra | 2025*
*This file guides Claude Code agent behavior on this project.*
