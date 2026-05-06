# REACT IMPLEMENTATION GUIDE
**Stack: React + Vite + Tailwind CSS + Framer Motion**
**Matches Bazna theme exactly — adapted for Deshkari Studios**

---

## 1. PROJECT SETUP COMMANDS

```bash
# Create project
npm create vite@latest deshkari-website -- --template react
cd deshkari-website

# Install dependencies
npm install
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion
npm install react-router-dom
npm install @emailjs/browser          # for contact form
npm install react-intersection-observer  # for scroll animations

# Setup Tailwind
npx tailwindcss init -p
```

---

## 2. TAILWIND CONFIG — FULL (copy exactly)

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* === PRIMARY BRAND === */
        primary:   '#C45911',   /* Deshkari Saffron — all CTAs, links, accents */
        'primary-dark': '#a34a0e',  /* Hover state */
        
        /* === TEXT === */
        heading:   '#262626',   /* All H1–H6 */
        body:      '#696969',   /* All paragraph text */
        muted:     '#999999',   /* Meta text, captions */
        
        /* === BACKGROUNDS === */
        'bg-white':  '#ffffff',
        'bg-light':  '#f9f5f0', /* Warm off-white sections */
        'bg-dark':   '#1a1a1a', /* Footer */
        'bg-darker': '#111111', /* Top bar */
        'bg-card':   '#ffffff',
        
        /* === BORDERS === */
        border:    '#e9e9e9',
        'border-dark': '#2a2a2a',

        /* === VERTICAL ACCENTS === */
        gold:      '#B8860B',   /* Productions */
        maroon:    '#6B1A1A',   /* Films */
        green:     '#1A3C2B',   /* Company identity */
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],  /* ONLY font used */
      },
      fontSize: {
        'hero':   ['58px', { lineHeight: '1.1',  fontWeight: '700' }],
        'h2':     ['38px', { lineHeight: '1.15', fontWeight: '700' }],
        'h3':     ['22px', { lineHeight: '1.3',  fontWeight: '600' }],
        'h4':     ['18px', { lineHeight: '1.4',  fontWeight: '600' }],
        'body':   ['16px', { lineHeight: '1.75', fontWeight: '400' }],
        'small':  ['14px', { lineHeight: '1.6',  fontWeight: '400' }],
        'xs':     ['13px', { lineHeight: '1.5',  fontWeight: '400' }],
        'label':  ['12px', { lineHeight: '1',    fontWeight: '600' }],
      },
      spacing: {
        'section': '80px',    /* Standard section padding */
        'section-sm': '48px', /* Small section padding */
      },
      borderRadius: {
        'btn': '30px',     /* All CTA buttons — pill shape */
        'card': '8px',     /* Cards */
        'tag': '4px',      /* Tags and badges */
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0,0,0,0.10)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.15)',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
```

---

## 3. GLOBAL CSS (src/index.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    color: #696969;
    line-height: 1.75;
    background: #ffffff;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rubik', sans-serif;
    color: #262626;
    line-height: 1.2;
    font-weight: 700;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.25s ease;
  }
  
  img {
    max-width: 100%;
    display: block;
  }
}

@layer components {
  /* CONTAINER */
  .container {
    @apply max-w-container mx-auto px-6;
  }
  
  /* SECTION LABEL — small orange text above headings */
  .section-label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #C45911;
    margin-bottom: 10px;
  }
  
  /* PRIMARY BUTTON — orange pill */
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #C45911;
    color: #ffffff;
    padding: 14px 32px;
    border-radius: 30px;
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.06em;
    border: none;
    cursor: pointer;
    transition: background 0.25s ease, transform 0.2s ease;
  }
  
  .btn-primary:hover {
    background: #a34a0e;
    transform: translateY(-2px);
  }
  
  /* OUTLINE BUTTON */
  .btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: #ffffff;
    padding: 12px 30px;
    border-radius: 30px;
    border: 2px solid rgba(255,255,255,0.5);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  
  .btn-outline:hover {
    background: rgba(255,255,255,0.1);
    border-color: #ffffff;
  }
  
  /* FORM INPUT — underline style */
  .form-input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    padding: 16px 0;
    font-family: 'Rubik', sans-serif;
    font-size: 15px;
    color: #262626;
    background: transparent;
    outline: none;
    transition: border-color 0.2s ease;
  }
  
  .form-input::placeholder {
    color: #bbbbbb;
    font-size: 14px;
  }
  
  .form-input:focus {
    border-bottom-color: #C45911;
  }
  
  /* SECTION HEADING UNDERLINE */
  .heading-underline::after {
    content: '';
    display: block;
    width: 36px;
    height: 2px;
    background: #C45911;
    margin-top: 8px;
  }
}
```

---

## 4. FOLDER STRUCTURE

```
src/
├── components/
│   ├── layout/
│   │   ├── TopBar.jsx          ← Contact info bar
│   │   ├── Navbar.jsx          ← Main nav with logo + links
│   │   ├── Footer.jsx          ← Full footer (4 columns)
│   │   └── PageHero.jsx        ← Reusable page banner
│   │
│   ├── ui/
│   │   ├── Button.jsx          ← Primary + outline variants
│   │   ├── SectionLabel.jsx    ← Small orange label above headings
│   │   ├── TeamCard.jsx        ← Team member card
│   │   ├── ServiceCard.jsx     ← Service icon+text card
│   │   ├── BlogCard.jsx        ← Blog post card
│   │   ├── PortfolioItem.jsx   ← Portfolio grid item with hover overlay
│   │   ├── TestimonialCard.jsx ← Review card
│   │   └── StatBox.jsx         ← Number + label stat
│   │
│   └── sections/
│       ├── home/
│       │   ├── HeroSlider.jsx
│       │   ├── AboutPreview.jsx
│       │   ├── PartnersStrip.jsx
│       │   ├── VideoSection.jsx
│       │   ├── ServicesSection.jsx
│       │   ├── GallerySection.jsx
│       │   ├── TeamSection.jsx
│       │   ├── TestimonialsSection.jsx
│       │   ├── StatsSection.jsx
│       │   ├── NewsletterSection.jsx
│       │   └── BlogPreviewSection.jsx
│       │
│       ├── about/
│       │   ├── AboutIntro.jsx
│       │   ├── CertificatesStrip.jsx
│       │   ├── ServicesSection.jsx
│       │   ├── VideoSection.jsx
│       │   ├── TeamSection.jsx
│       │   ├── PartnerStrip.jsx
│       │   ├── TimelineSection.jsx
│       │   └── CTASection.jsx
│       │
│       ├── portfolio/
│       │   ├── PortfolioFilter.jsx
│       │   ├── PortfolioGrid.jsx
│       │   └── CTASection.jsx
│       │
│       ├── blog/
│       │   ├── BlogList.jsx
│       │   ├── Sidebar.jsx
│       │   └── Pagination.jsx
│       │
│       └── contact/
│           ├── MapSection.jsx
│           ├── OfficeCards.jsx
│           └── ContactForm.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Portfolio.jsx
│   ├── Blog.jsx
│   ├── BlogSingle.jsx
│   └── Contact.jsx
│
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── team/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   └── gallery/
│   └── icons/
│
├── constants/
│   ├── navigation.js       ← nav links array
│   ├── team.js            ← team members data
│   ├── services.js        ← services data
│   ├── portfolio.js       ← portfolio items + categories
│   └── blog.js            ← blog posts data
│
├── hooks/
│   └── useScrollReveal.js  ← scroll animation hook
│
├── App.jsx                 ← Router setup
├── main.jsx
└── index.css
```

---

## 5. ANIMATION IMPLEMENTATION

```jsx
// hooks/useScrollReveal.js
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const useScrollReveal = (threshold = 0.15) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return { ref, controls };
};

// Standard variants to use everywhere
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

export const staggerVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay } }
});

// Usage in any component:
// const { ref, controls } = useScrollReveal();
// <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUpVariants}>
```

---

## 6. ROUTER SETUP (App.jsx)

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
```

---

## 7. RESPONSIVE BREAKPOINTS

```
Mobile first — min-width breakpoints:

sm:  640px  — tablet portrait
md:  768px  — tablet landscape
lg:  1024px — desktop
xl:  1280px — large desktop
2xl: 1536px — ultrawide (cap at 1200px container)

Mobile behaviour:
  Nav: hamburger menu, slide-in drawer
  Hero: single column, text centered
  Grids: 1 column on mobile, 2 on tablet, 3 on desktop
  Footer: stacked single column on mobile
```

---

## 8. NETLIFY DEPLOYMENT

```bash
# Build command
npm run build

# Publish directory
dist

# netlify.toml (create in root)
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 9. IMAGE REQUIREMENTS (what to source/photograph)

| Image | Size | Description |
|---|---|---|
| `hero-1.jpg` | 1920×1080 | Concert with stage lighting |
| `hero-2.jpg` | 1920×1080 | Film production behind scenes |
| `hero-3.jpg` | 1920×1080 | Studio recording session |
| `about-main.jpg` | 800×600 | Team/founders warm candid |
| `about-overlay.jpg` | 400×300 | Smaller overlapping image |
| `video-thumb.jpg` | 1200×600 | Dark, dramatic film set |
| `team-1.jpg` | 400×500 | Founder portrait |
| `team-2.jpg` | 400×500 | Co-founder portrait |
| `team-3.jpg` | 400×500 | Head of Productions |
| `portfolio-1.jpg` | 600×600 | Music album / recording |
| `portfolio-2.jpg` | 600×600 | Concert crowd |
| `portfolio-3.jpg` | 600×600 | Film production |
| `portfolio-4.jpg` | 600×600 | Classical performance |
| `portfolio-5.jpg` | 600×600 | Documentary shoot |
| `portfolio-6.jpg` | 600×600 | Festival atmosphere |
| `blog-1.jpg` | 800×450 | Related to music article |
| `blog-2.jpg` | 800×450 | Film related |
| `blog-3.jpg` | 800×450 | Event/festival photo |
| `gallery-th-1–6.jpg` | 100×75 | Footer gallery thumbs |

**Image style guide:**
- Hero images: warm, dramatic, slightly underexposed
- Team photos: slightly desaturated (CSS filter: grayscale(30%))
- Portfolio: real project photos, vibrant
- All: avoid pure white backgrounds

---

*React Implementation Guide v1.0 | Deshkari Studios | 2025*
