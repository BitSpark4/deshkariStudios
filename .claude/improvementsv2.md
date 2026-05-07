# CLAUDE.md — Deshkari Studios Website
## Instructions for Claude Code Agent | v2.0

---

## PROJECT IDENTITY

**Company:** Deshkari Studios Pvt. Ltd.
**Location:** Pune, Maharashtra, India
**Tagline:** "Rooted in India. Built for the World."
**Type:** Creative entertainment company — 3 verticals: Productions · Events · Films

---

## TECH STACK

```
Frontend:     React 18 + Vite
Styling:      Tailwind CSS (custom config — see tailwind.config.js)
Animations:   Framer Motion
Routing:      React Router DOM v6
Forms:        Netlify Forms (built-in — no extra package needed)
Scroll:       react-intersection-observer
Font:         Rubik (Google Fonts — ONE font only)
Icons:        Lucide React
Hosting:      Netlify
```

---

## BRAND COLORS

```
Primary (buttons, links, accents):  #C45911
Heading (all H1–H6):                #262626
Body text:                          #696969
Border:                             #e9e9e9
Footer background:                  #1a1a1a
Section light background:           #f9f5f0
Gold (Productions):                 #B8860B
Maroon (Films):                     #6B1A1A
Dark green (company identity):      #1A3C2B
```

---

## ╔═══════════════════════════════════════════╗
## ║   PRIORITY CHANGES — IMPLEMENT FIRST     ║
## ╚═══════════════════════════════════════════╝

## CHANGE 1 ── CONTACT PAGE › Form Email Delivery

### METHOD: Netlify Forms → Gmail (team@deshkaristudios.com)
### No packages. No API keys. No .env file.

---

### PART A — Code (ContactForm.jsx)

```jsx
// src/components/sections/contact/ContactForm.jsx

// STEP 1: Form tag — add data-netlify="true"
<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
>
  {/* STEP 2: Required hidden inputs */}
  <input type="hidden" name="form-name" value="contact" />
  <input name="bot-field" style={{ display: 'none' }} />

  {/* Form fields — names must match exactly */}
  <input  name="name"    className="form-input" placeholder="Your Name"    required />
  <input  name="email"   className="form-input" placeholder="Your Email"   required type="email" />
  <input  name="phone"   className="form-input" placeholder="Your Phone" />
  <input  name="subject" className="form-input" placeholder="Your Subject" />
  <textarea name="message" className="form-input" placeholder="Your Message" required />

  <button type="submit" className="btn-primary" disabled={status === 'loading'}>
    {status === 'loading' ? 'Sending...' : 'Send Message →'}
  </button>

  {status === 'success' && (
    <p style={{ color: 'green', marginTop: 12 }}>
      Message sent! We'll reply within 48 hours.
    </p>
  )}
  {status === 'error' && (
    <p style={{ color: 'red', marginTop: 12 }}>
      Something went wrong. Email us: team@deshkaristudios.com
    </p>
  )}
</form>

// STEP 3: SPA submit handler — no page reload, no packages
const [status, setStatus] = useState('idle'); // idle | loading | success | error

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('loading');
  try {
    const data = new FormData(e.target);
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    });
    setStatus('success');
    e.target.reset();
  } catch {
    setStatus('error');
  }
};
```

---

### PART B — Netlify Dashboard Setup (one-time, after first deploy)

```
Step 1: Deploy site to Netlify (push to GitHub or drag dist/ folder)
        Netlify detects data-netlify="true" automatically during build.

Step 2: Netlify Dashboard → your site → Forms
        You will see a form named "contact" listed. This confirms it worked.

Step 3: Netlify Dashboard → Integrations → Form notifications
        Click: Add notification → Email notification

Step 4: Set "Email to notify" = team@deshkaristudios.com
        Set "Form" = contact
        Click Save

Step 5: Test — fill out the contact form on the live site.
        Check team@deshkaristudios.com inbox (and Spam on first test).
        Email arrives with Subject: "New submission from contact"
        Body contains: name, email, phone, subject, message
```

---

### PART C — Gmail Organisation (recommended)

```
In Gmail (team@deshkaristudios.com):
  Settings → Filters → Create filter
  From: no-reply@netlify.com
  Action: Apply label "Website Enquiries"

This keeps all contact form messages neatly grouped in one label.
Free Netlify plan = 100 submissions/month.
All submissions also visible in Netlify Dashboard → Forms as backup.
```

**No .env file. No npm install. Just data-netlify="true" and the dashboard setup.**

## ╔═══════════════════════════════════════════╗
## ║         ALL CHANGES SUMMARY TABLE        ║
## ╚═══════════════════════════════════════════╝

| # | Page/Section | Change | Action |
| 8 | Contact — Form | Send emails → team@deshkaristudios.com | ✅ Updated |


## PAGES & ROUTES

| Page | Route | Nav Visible |
|---|---|---|
| Home | `/` | ✅ Yes |
| About | `/about` | ✅ Yes |
| Films | `/films` | ✅ Yes |
| Events | `/events` | ✅ Yes |
| Blog | `/blog` | ✅ Yes |
| Contact | `/contact` | ✅ Yes |
| Productions | `/productions` | 🚫 Hidden from nav |
| Portfolio | `/portfolio` | 🚫 Hidden from nav |

---

## FOLDER STRUCTURE

```
deshkari-website/
├── docs/                             ← Read design specs here
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.jsx
│   │   │   ├── Navbar.jsx            ← visible navLinks only
│   │   │   ├── Footer.jsx            ← real address, no YouTube, © 2026
│   │   │   └── PageHero.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── SectionLabel.jsx
│   │   │   ├── TeamCard.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── BlogCard.jsx
│   │   │   ├── PortfolioItem.jsx
│   │   │   ├── TestimonialCard.jsx
│   │   │   └── StatBox.jsx
│   │   └── sections/
│   │       ├── home/
│   │       │   ├── HeroSlider.jsx
│   │       │   ├── AboutPreview.jsx      ← awards stat only (12+)
│   │       │   ├── PartnersStrip.jsx
│   │       │   ├── VideoSection.jsx
│   │       │   ├── ServicesSection.jsx
│   │       │   ├── GallerySection.jsx
│   │       │   ├── TeamSection.jsx       ← 2 members only
│   │       │   ├── TestimonialsSection.jsx
│   │       │   ├── AchievementsSection.jsx  ← file exists, NOT rendered
│   │       │   ├── NewsletterSection.jsx
│   │       │   └── BlogPreviewSection.jsx
│   │       ├── about/
│   │       │   ├── AboutIntro.jsx
│   │       │   ├── CertificatesStrip.jsx
│   │       │   ├── ServicesSection.jsx
│   │       │   ├── VideoSection.jsx
│   │       │   ├── TeamSection.jsx
│   │       │   ├── PartnerStrip.jsx
│   │       │   ├── TimelineSection.jsx   ← file exists, NOT rendered
│   │       │   └── CTASection.jsx
│   │       ├── contact/
│   │       │   ├── MapSection.jsx        ← Narhe Pune 411041
│   │       │   ├── OfficeCards.jsx
│   │       │   └── ContactForm.jsx       ← sends to team@deshkaristudios.com
│   │       └── blog/
│   │           ├── BlogList.jsx
│   │           ├── Sidebar.jsx
│   │           └── Pagination.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Films.jsx
│   │   ├── Events.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── constants/
│   │   ├── navigation.js     ← visible flags
│   │   ├── team.js           ← visible flags
│   │   ├── services.js
│   │   ├── contact.js        ← real address + email
│   │   └── blog.js
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── CLAUDE.md
├── .env
├── .env.example
├── tailwind.config.js
├── vite.config.js
├── netlify.toml
└── .gitignore
```

---

## COMPONENT RULES

```jsx
// Standard section wrapper
<section className="py-section bg-white">
  <div className="container">
    <SectionLabel>Label Here</SectionLabel>
    <h2 className="text-h2 text-heading font-bold mb-4">Heading</h2>
  </div>
</section>

// Button — always pill, always orange
<button className="btn-primary">Text <span>→</span></button>

// Form input — underline only, never boxed
<input className="form-input" placeholder="Your Name" />
```

---

## ANIMATION RULES

```jsx
import { motion } from 'framer-motion';
import { useScrollReveal, fadeUpVariants } from '../hooks/useScrollReveal';

const { ref, controls } = useScrollReveal();

<motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUpVariants}>
  {/* content */}
</motion.div>

// Timings:
// Entrance:  0.55s easeOut
// Hover:     0.25s
// Stagger:   index * 0.1s delay
```

---

## TAILWIND CONFIG

```javascript
// tailwind.config.js
colors: {
  primary:       '#C45911',
  'primary-dark':'#a34a0e',
  heading:       '#262626',
  body:          '#696969',
  muted:         '#999999',
  border:        '#e9e9e9',
  'bg-light':    '#f9f5f0',
  'bg-dark':     '#1a1a1a',
  'bg-darker':   '#111111',
  gold:          '#B8860B',
  maroon:        '#6B1A1A',
  green:         '#1A3C2B',
},
fontFamily: { rubik: ['Rubik', 'sans-serif'] },
borderRadius: { btn: '30px', card: '8px' },
maxWidth: { container: '1200px' },
```

---

## NETLIFY CONFIG

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## WHAT NOT TO DO

```
❌ Never use any font other than Rubik
❌ Never use cold blue or purple accent colors
❌ Never use boxed inputs — underline-style only
❌ Never use square corners on buttons — always 30px pill
❌ Never use CSS keyframes for entrance — use Framer Motion
❌ Never hardcode hex colors — use Tailwind tokens
❌ Never put all sections in one file — 1 section = 1 component
❌ Never skip SectionLabel above H2 headings
❌ Never render items where visible === false
❌ Never skip scroll reveal animations on sections
❌ Never use autoplay video with sound
❌ Never create a page without TopBar + Navbar + Footer
```

---

## GIT COMMIT CONVENTION

```
feat: build navbar with visible-flag filtering
feat: contact form sends to team@deshkaristudios.com
feat: map shows narhe pune 411041 location
fix: hide achievements section from home page
fix: hide timeline section from about page
chore: update footer address phone email copyright
style: team section shows 2 members only
style: about stats shows awards 12+ only
```

---

*CLAUDE.md v2.0 | Deshkari Studios Pvt. Ltd. | Pune, Maharashtra*
*Priority changes: navigation order, hidden sections, real contact details, email delivery*
