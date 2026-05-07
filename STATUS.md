# Deshkari Studios — Build Status

**Last updated:** 2026-05-07
**Current phase:** v2 improvements applied — Phase 9 polish next
**Overall progress:** Phases 0–8 ✅ + improvmentv1.md applied (8 changes) — all 10 routes still HTTP 200, prod build 247 KB gzip in 3.9s
**Next up:** Phase 9 polish OR user provides EmailJS keys → wire up real email delivery

---

## Legend
- `[x]` done
- `[~]` in progress / partial
- `[ ]` not started
- `[!]` blocked

---

## Phase summary
- [x] **Phase 0** — Scaffolding & foundation                    (2026-05-06, commit bfe76b3)
- [x] **Phase 1** — Constants & UI primitives                   (2026-05-06)
- [x] **Phase 2** — Layout shell (TopBar, Navbar, Footer, PageHero) (2026-05-06)
- [x] **Phase 3** — Home page (12 sections + 5 UI primitives) (2026-05-06)
- [x] **Phase 4** — About page (8 sections, several reuse Home) (2026-05-06)
- [x] **Phase 5** — Portfolio page (filter + 3x2 AnimatePresence grid + CTA) (2026-05-06)
- [x] **Phase 6** — Blog list (65/35 layout) + BlogSingle article + Sidebar (6 widgets) + Pagination (2026-05-06)
- [x] **Phase 7** — Contact page (Map + 3 office cards + EmailJS form) (2026-05-06)
- [x] **Phase 8** — Vertical pages with shared template (Productions=gold, Events=saffron, Films=maroon) (2026-05-06)
- [~] **Phase 9** — Polish, responsive, accessibility
- [ ] **Phase 10** — Build, deploy prep, smoke test

---

## Detailed checklist

### Phase 0 — Scaffolding & foundation
- [x] `package.json` written with React 18 + Vite 5 + Tailwind 3 + Framer Motion + Router + EmailJS + Lucide
- [x] `vite.config.js` (port 5173, dist output)
- [x] `index.html` (Rubik will load via index.css; meta tags + theme-color set)
- [x] `tailwind.config.js` (custom Deshkari Saffron palette, fontSize tokens, borderRadius `btn`/`card`/`tag`, container 1200px, vertical accents gold/maroon/green)
- [x] `postcss.config.js`
- [x] `src/index.css` (Rubik @import, base layer, component layer with `.section-label`, `.btn-primary`, `.btn-outline`, `.form-input`, `.heading-underline`, focus rings, prefers-reduced-motion)
- [x] `src/main.jsx` (StrictMode root)
- [x] `src/App.jsx` (BrowserRouter, all 10 routes wired, ScrollToTop)
- [x] Folder skeleton `src/{components/{layout,ui,sections/{home,about,portfolio,blog,contact,vertical}},pages,constants,hooks,assets/{images,icons}}`
- [x] Layout stubs: `TopBar.jsx`, `Navbar.jsx`, `Footer.jsx`, `ScrollToTop.jsx` (placeholders — Phase 2 fills in)
- [x] All 10 page stubs: Home, About, Productions, Events, Films, Portfolio, Blog, BlogSingle, Contact, NotFound
- [x] `.gitignore` (node_modules, dist, .env, .vite, OS files, .code-review-graph)
- [x] `.env.example` (EmailJS + Maps placeholders)
- [x] `netlify.toml` (publish=dist, SPA redirect, security headers)
- [x] `public/favicon.svg` (saffron square + white "D")
- [x] `STATUS.md` (this file)
- [x] `npm install` — 144 packages, 15s, no errors
- [x] `npm run dev` — boots in 1.4s on http://localhost:5173, all module files (main.jsx / App.jsx / index.css) return 200
- [x] `git init` + initial commit (bfe76b3 on main)

### Phase 1 — Constants & UI primitives
- [x] `src/constants/navigation.js` — nav links, footer secondary, services, socials, contactInfo
- [x] `src/constants/team.js` — 4 members with social links
- [x] `src/constants/services.js` — 6 services with Lucide icon names
- [x] `src/constants/portfolio.js` — 6 categories + 6 items
- [x] `src/constants/blog.js` — 3 posts + recent + categories + 10 tags
- [x] `src/constants/testimonials.js` — 3 testimonials with photos
- [x] `src/constants/stats.js` — 2x2 main stats + 3 inline about stats
- [x] `src/constants/offices.js` — 3 offices + map embed src
- [x] `src/constants/gallery.js` — gallery, footer thumbs, video bg, hero per page
- [x] `src/constants/partners.js` — 6 partners + 6 cert icons
- [x] `src/constants/timeline.js` — 4 milestones 2022–2025
- [x] `src/constants/heroSlides.js` — 3 hero slides
- [x] `src/hooks/useScrollReveal.js` (+ `fadeUpVariants`, `fadeInVariants`, `staggerVariants`)
- [x] `src/components/ui/Button.jsx` — primary / outline / outline-dark, with Link/anchor/button modes + arrow
- [x] `src/components/ui/SectionLabel.jsx` — supports `accent`, `color` (gold/maroon for verticals), `centered`

### Phase 2 — Layout shell (replaces stubs)
- [x] `TopBar.jsx` (40px dark, welcome+contact info, hides text on small screens)
- [x] `Navbar.jsx` (sticky, scroll-compress 70→60, mobile hamburger drawer with framer-motion + body-scroll-lock + auto-close on route change)
- [x] `Footer.jsx` (4-col responsive grid, social row, contact info, services list, gallery thumbs, bottom bar with copyright + secondary nav)
- [x] `PageHero.jsx` (reusable banner — title + breadcrumb + bgImage + accentColor override for verticals)
- [x] All 10 page stubs wired to PageHero with vertical accent colors (Productions=gold, Films=maroon)
- [x] Smoke test: all 10 routes return HTTP 200, HMR clean, no console errors

### Phase 3 — Home page (12 sections)
- [x] `HeroSlider.jsx` (3 slides, 5s autoplay, fade transition, arrows + dots, route-aware CTAs)
- [x] `AboutPreview.jsx` (image stack with -20px overlap + stats row 12+/150+/25+)
- [x] `PartnersStrip.jsx` (6 grayscale partner badges with hover saffron)
- [x] `VideoSection.jsx` (dark overlay, 3 stacked thumbnails with central play button)
- [x] `ServicesSection.jsx` (3-col Lucide-icon grid, 6 services, staggered reveal)
- [x] `GallerySection.jsx` (3-col flush 4:3 with dark hover overlay + play icon + caption)
- [x] `TeamSection.jsx` (4-col team grid; B&W → color on hover, social icons reveal)
- [x] `TestimonialsSection.jsx` (single carousel, 7s autoplay, AnimatePresence wait mode, dot pagination)
- [x] `StatsSection.jsx` (2-col split: text + 2x2 stats grid)
- [x] `NewsletterSection.jsx` (underline-style email input + Subscribe button, idle/loading/success states)
- [x] `BlogPreviewSection.jsx` (full saffron `#C45911` bg, dark BlogCard variant)
- [x] `CertStripBottom.jsx` (`#1c1c1c` dark strip with 6 cert icons)
- [x] UI primitives: `TeamCard`, `ServiceCard`, `BlogCard` (default + dark variants), `StatBox`, `TestimonialCard`
- [x] Production build succeeds (3.1s, 240 KB gzip)

### Phase 4 — About page
- [x] `AboutIntro.jsx` (image stack + intro copy)
- [x] `CertificatesStrip.jsx` (4 cards, lucide-icon + title/subtitle)
- [x] `AboutServicesSection.jsx` (3-col, "Learn More" links)
- [x] `VideoCTASection.jsx` (centered play button on dark)
- [x] `TeamSection` (reuse from Home)
- [x] `PartnerStripOrange.jsx` (full saffron bg, 6 white badges)
- [x] `TimelineSection.jsx` (2-col grid, orange dots, vertical accent line, 4 milestones 2022–2025, View More button)
- [x] `CTASection.jsx` (split + decorative variant for Portfolio reuse)

### Phase 5 — Portfolio page
- [x] `PortfolioFilter.jsx` (6 tabs in pill container)
- [x] `PortfolioGrid.jsx` (filterable 3x2 with framer-motion AnimatePresence + popLayout)
- [x] `PortfolioItem.jsx` (saffron hover overlay + plus icon + caption)
- [x] `CTASection` (reuse from About with `decorative` prop for swirl shapes)

### Phase 6 — Blog + BlogSingle
- [x] `BlogList.jsx` (65% column, 3 posts with image + title + meta + excerpt + Read More)
- [x] `Sidebar.jsx` (Search, Recent Posts, Categories, Social Profiles, Tags, Promo box)
- [x] `Pagination.jsx` (circular page numbers + prev/next + accessible aria-current)
- [x] `BlogSingle.jsx` (PageHero w/ post image, full article body w/ blockquote, Sidebar reuse, back-to-blog + work-with-us CTAs)

### Phase 7 — Contact page
- [x] `MapSection.jsx` (Google Maps iframe Pune/Chinchwad, 420px height, lazy-loaded)
- [x] `OfficeCards.jsx` (3-col, Pune main / Mumbai coming-soon / Pan-India remote, hover shadow)
- [x] `ContactForm.jsx` (EmailJS-wired with dev fallback if keys missing, underline inputs, name/email/phone/subject/message, idle/loading/success/error states)

### Phase 8 — Vertical pages
- [x] `VerticalPageTemplate.jsx` (4-section shared base: hero + intro w/ image stack + offerings 3-col + featured work 6-grid + CTA)
- [x] `Productions.jsx` (gold #B8860B accent — Music & Album Production)
- [x] `Events.jsx` (saffron — Live Cultural Experiences)
- [x] `Films.jsx` (maroon #6B1A1A accent — Authentic Indian Stories)

### Smoke test (post Phase 8)
- [x] All 10 routes return HTTP 200: /, /about, /productions, /events, /films, /portfolio, /blog, /blog/:slug, /contact, /404
- [x] Production build: 3.2s, 248 KB gzip
- [x] HMR clean throughout

### Phase 9 — Polish, responsive, accessibility
- [ ] Mobile breakpoints verified at 375/768/1024/1440
- [ ] Hamburger drawer functional + body-scroll-lock
- [ ] Grids collapse 3→2→1 col
- [ ] Footer collapses to single col mobile
- [ ] Scroll reveal on every section
- [ ] Alt text on every image
- [ ] aria-label on icon-only buttons
- [ ] Visible focus rings (already in index.css base layer)
- [ ] prefers-reduced-motion guard (already in index.css)
- [ ] 404 page polish
- [ ] `loading="lazy"` on non-hero images

### Phase 10 — Build, deploy prep, smoke test
- [ ] `npm run build` succeeds
- [ ] dist/ verified
- [ ] SPA redirect tested with `npx serve dist`
- [ ] `README.md` written (setup, env, image-swap)
- [ ] Final smoke test all routes
- [ ] STATUS.md marked complete

---

## Blockers / decisions needed
- (none currently)

---

## v2 improvements applied (2026-05-07)
Per `.claude/improvmentv1.md`:
- [x] **Change 1** Nav: order Home·About·Films·Events·Blog·Contact; Productions/Portfolios/Search hidden via `visible: false` flag
- [x] **Change 2** Home › About: only "Awards Received: 12+" stat shown (Years Experience + Projects Delivered hidden)
- [x] **Change 3** Home › Our People: 2 visible team members (Founder + Co-Founder); 2-col centered grid; Heads of Productions/Events kept with `visible: false`
- [x] **Change 4** Home › Achievements (StatsSection): import + render removed from Home.jsx; component file kept
- [x] **Change 5** Footer: YouTube removed via `visible: false`; address = Flat 302 C Wing Sai Leela Apartment Manaji Nagar Narhe Pune 411041; phone +91 7028242253; email team@deshkaristudios.com; copyright © 2026
- [x] **Change 6** About › Our Journey (TimelineSection): import + render removed from About.jsx; component file kept
- [x] **Change 7** Contact › Map: embed updated to Sai Leela Apartment, Manaji Nagar, Narhe Pune 411041
- [x] **Change 8** Contact › Form: switched to `emailjs.send` with explicit `to_email = team@deshkaristudios.com`; controlled inputs; idle/loading/success/error states preserved
- [x] TopBar + 3 office cards (Pune/Mumbai/Pan-India) updated to new phone & email automatically (single source of truth in `constants/navigation.js` + `constants/offices.js`)
- [x] Production build still green: 247 KB gzip in 3.9s

## Pending — user must provide manually
**EmailJS keys** (Change 8 needs these to actually deliver mail):
1. Create account at https://www.emailjs.com
2. Add Email Service → connect team@deshkaristudios.com (Gmail or any provider)
3. Create Email Template with `To Email = team@deshkaristudios.com`, subject + body referencing `{{from_name}} {{from_email}} {{phone}} {{subject}} {{message}}`
4. Copy Service ID, Template ID, Public Key
5. Create `.env` file at project root with:
   ```
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```
6. Restart dev server (Vite reads env on boot)
Until keys are added, the form runs in dev-fallback mode and just simulates a successful send.

## Notes for next session
- All Unsplash image URLs will live in `src/constants/*.js` files — single swap-point when real photos arrive.
- EmailJS keys are placeholders in `.env.example` — user must create `.env` with real keys before contact form works in production.
- Layout files (`TopBar`, `Navbar`, `Footer`) currently contain Phase-0 stubs; full implementation arrives in Phase 2.
- Page files for `/productions`, `/events`, `/films` show vertical-accent stubs to confirm color tokens render correctly.
- `.code-review-graph` folder is git-ignored (existing infra unrelated to this build).

---

## Future work (deliberately out of scope for v1)
- Real EmailJS service/template/keys
- Real photographs (replace Unsplash URLs in constants)
- CMS integration for blog posts
- i18n / Hindi translation
- Analytics (GA, Plausible)
- Cookie consent banner
- sitemap.xml + robots.txt + extended OG meta tags
