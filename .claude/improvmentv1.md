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
Forms:        EmailJS (@emailjs/browser)
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

---

## CHANGE 1 ── NAVIGATION (applies to ALL pages)

### ACTIVE nav links — exact order:
```
Home  |  About  |  Films  |  Events  |  Blog  |  Contact
```

### HIDDEN nav links (keep in code, do NOT render):
```
Productions  ←  hidden
Portfolios   ←  hidden
Search icon  ←  hidden
```

```javascript
// src/constants/navigation.js
export const navLinks = [
  { label: 'Home',         path: '/',            visible: true  },
  { label: 'About',        path: '/about',        visible: true  },
  { label: 'Films',        path: '/films',        visible: true  },
  { label: 'Events',       path: '/events',       visible: true  },
  { label: 'Blog',         path: '/blog',         visible: true  },
  { label: 'Contact',      path: '/contact',      visible: true  },
  // { label: 'Productions', path: '/productions', visible: false }, // future
  // { label: 'Portfolios',  path: '/portfolio',   visible: false }, // future
];

// Navbar.jsx — only render where visible === true:
navLinks.filter(link => link.visible).map(link => <NavLink ... />)
```

---

## CHANGE 2 ── HOME PAGE › About Our Studio Section

### Stats — SHOW only 1 item:
```
✅  SHOW:   Awards Received  →  value: "12+"
🚫  HIDE:   Years Experience     (do not render)
🚫  HIDE:   Projects Delivered   (do not render)
```

```javascript
// src/constants/home.js
export const aboutStats = [
  // { label: 'Years Experience',   value: '12+',  visible: false }, // hidden
  // { label: 'Projects Delivered', value: '150+', visible: false }, // hidden
  { label: 'Awards Received',    value: '12+',  visible: true  }, // ✅ show
];

// AboutPreview.jsx — render only visible stats:
aboutStats.filter(s => s.visible).map(stat => <StatBox ... />)
```

---

## CHANGE 3 ── HOME PAGE › Our People Section

### Team cards — SHOW only 2:
```
✅  SHOW:   Founder / Managing Director
✅  SHOW:   Co-Founder / Creative Director
🚫  HIDE:   Head of Productions   (do not render)
🚫  HIDE:   Head of Events        (do not render)
```

```javascript
// src/constants/team.js
export const teamMembers = [
  { id: 1, name: 'Founder Name',    role: 'Managing Director', image: '/images/team/founder.jpg',    visible: true  },
  { id: 2, name: 'Co-Founder Name', role: 'Creative Director', image: '/images/team/co-founder.jpg', visible: true  },
  // { id: 3, name: 'Head of Productions', role: 'Productions Lead', visible: false }, // future
  // { id: 4, name: 'Head of Events',      role: 'Events Director',  visible: false }, // future
];

// TeamSection.jsx:
teamMembers.filter(m => m.visible).map(member => <TeamCard ... />)
```

---

## CHANGE 4 ── HOME PAGE › Achievements Section

### 🚫 HIDE the entire section — do NOT render on Home page:
```jsx
// src/pages/Home.jsx
// Keep file: src/components/sections/home/AchievementsSection.jsx
// But do NOT import or render it:

// ❌ Remove this line:
// import AchievementsSection from '../components/sections/home/AchievementsSection';
// ❌ Remove from JSX:
// <AchievementsSection />
```

---

## CHANGE 5 ── FOOTER (applies to ALL pages)

### 5a — Remove YouTube from social icons:
```
✅  KEEP:   Facebook
✅  KEEP:   Twitter
✅  KEEP:   Instagram
🚫  REMOVE: YouTube
```

### 5b — Contact details (USE EXACT VALUES):
```
🏠  Address:
    Flat No - 302, C Wing, Sai Leela Apartment
    Manaji Nagar, Narhe
    Pune, Maharashtra 411041

📞  Phone Us:
    +91 7028242253

📧  Mail Us:
    team@deshkaristudios.com
```

### 5c — Copyright year:
```
Copyright © 2026 Deshkari Studios. All Rights Reserved.
```

```javascript
// src/constants/contact.js
export const contactDetails = {
  address: {
    line1: 'Flat No - 302, C Wing, Sai Leela Apartment',
    line2: 'Manaji Nagar, Narhe',
    line3: 'Pune, Maharashtra 411041',
  },
  phone:  '+91 7028242253',
  email:  'team@deshkaristudios.com',
};

export const socialLinks = [
  { name: 'Facebook',  icon: 'Facebook',  url: '#', visible: true  },
  { name: 'Twitter',   icon: 'Twitter',   url: '#', visible: true  },
  { name: 'Instagram', icon: 'Instagram', url: '#', visible: true  },
  // { name: 'YouTube', icon: 'Youtube',  url: '#', visible: false }, // removed
];

// Footer.jsx copyright line:
// <p>Copyright © 2026 Deshkari Studios. All Rights Reserved.</p>
```

---

## CHANGE 6 ── ABOUT PAGE › Our Journey Section

### 🚫 HIDE the entire timeline/history section:
```jsx
// src/pages/About.jsx
// Keep file: src/components/sections/about/TimelineSection.jsx
// But do NOT import or render it:

// ❌ Remove this line:
// import TimelineSection from '../components/sections/about/TimelineSection';
// ❌ Remove from JSX:
// <TimelineSection />
```

---

## CHANGE 7 ── CONTACT PAGE › Google Map

### Address to show on map:
```
Flat No - 302, C Wing, Sai Leela Apartment
Manaji Nagar, Narhe, Pune, Maharashtra 411041

Coordinates: Lat 18.4536, Lng 73.7914
Search query: "Sai Leela Apartment Narhe Pune 411041"
```

```jsx
// src/components/sections/contact/MapSection.jsx

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8!2d73.7914!3d18.4536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSai+Leela+Apartment+Manaji+Nagar+Narhe+Pune+411041!5e0!3m2!1sen!2sin";

// Or use this simpler working fallback:
const MAP_SRC =
  "https://maps.google.com/maps?q=Narhe,Pune,Maharashtra+411041&output=embed&z=16";

<iframe
  src={MAP_SRC}
  width="100%"
  height="420"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Deshkari Studios — Narhe, Pune"
/>
```

---

## CHANGE 8 ── CONTACT PAGE › Form Email Delivery

### ALL contact form messages → team@deshkaristudios.com

```javascript
// .env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

// EmailJS template settings (set up at emailjs.com):
//   To Email:  team@deshkaristudios.com
//   Subject:   New Message from Deshkari Studios Website
//   Body:      Name:    {{from_name}}
//              Email:   {{from_email}}
//              Phone:   {{phone}}
//              Subject: {{subject}}
//              Message: {{message}}

// src/components/sections/contact/ContactForm.jsx
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('loading');
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name:  formData.name,
        from_email: formData.email,
        phone:      formData.phone,
        subject:    formData.subject,
        message:    formData.message,
        to_email:   'team@deshkaristudios.com',
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    setStatus('success');
    resetForm();
  } catch (err) {
    setStatus('error');
  }
};

// Form states:
//   idle    → show normal form
//   loading → button text "Sending...", disabled, opacity 0.7
//   success → green message "Message sent! We'll reply within 48 hours."
//   error   → red message "Something went wrong. Please email us directly."
```

**EmailJS one-time setup (do this before testing):**
```
1. Create account at https://www.emailjs.com
2. Email Services → Add Service → Gmail → connect team@deshkaristudios.com
3. Email Templates → Create Template → set To = team@deshkaristudios.com
4. Account → API Keys → copy Public Key
5. Paste all 3 values into .env file
```

---

## ╔═══════════════════════════════════════════╗
## ║         ALL CHANGES SUMMARY TABLE        ║
## ╚═══════════════════════════════════════════╝

| # | Page/Section | Change | Action |
|---|---|---|---|
| 1 | All Pages — Nav | Order: Home·About·Films·Events·Blog·Contact | ✅ Implement |
| 1 | All Pages — Nav | Hide: Productions, Portfolios, Search | 🚫 Hidden |
| 2 | Home — About section | Hide: Years Experience stat | 🚫 Hidden |
| 2 | Home — About section | Hide: Projects Delivered stat | 🚫 Hidden |
| 2 | Home — About section | Show: Awards Received = 12+ | ✅ Show |
| 3 | Home — Our People | Show: Founder only | ✅ Show |
| 3 | Home — Our People | Show: Co-Founder only | ✅ Show |
| 3 | Home — Our People | Hide: Head of Productions | 🚫 Hidden |
| 3 | Home — Our People | Hide: Head of Events | 🚫 Hidden |
| 4 | Home — Achievements | Hide entire section | 🚫 Hidden |
| 5 | Footer — Social | Remove YouTube | 🚫 Removed |
| 5 | Footer — Address | Flat 302, Sai Leela Apt, Narhe, Pune 411041 | ✅ Updated |
| 5 | Footer — Phone | +91 7028242253 | ✅ Updated |
| 5 | Footer — Email | team@deshkaristudios.com | ✅ Updated |
| 5 | Footer — Copyright | © 2026 | ✅ Updated |
| 6 | About Page | Hide: Our Journey / Timeline section | 🚫 Hidden |
| 7 | Contact — Map | Show Narhe, Pune 411041 location | ✅ Updated |
| 8 | Contact — Form | Send emails → team@deshkaristudios.com | ✅ Updated |

---

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
