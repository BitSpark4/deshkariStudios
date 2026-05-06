# Deshkari Studios — Build Status

**Last updated:** 2026-05-06
**Current phase:** Phase 3 — Home page (starting)
**Overall progress:** Phase 0 ✅, 1 ✅, 2 ✅ — full layout shell live, all 10 routes return HTTP 200
**Next up:** Phase 3 — build the 12 Home page sections starting with HeroSlider

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
- [~] **Phase 3** — Home page (12 sections)
- [ ] **Phase 4** — About page (8 sections)
- [ ] **Phase 5** — Portfolio page (filter + grid + CTA)
- [ ] **Phase 6** — Blog + BlogSingle
- [ ] **Phase 7** — Contact page
- [ ] **Phase 8** — Vertical pages (Productions / Events / Films)
- [ ] **Phase 9** — Polish, responsive, accessibility
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
- [ ] `HeroSlider.jsx` (3 slides, 5s autoplay, arrows, dots)
- [ ] `AboutPreview.jsx` (image stack + stats row)
- [ ] `PartnersStrip.jsx`
- [ ] `VideoSection.jsx` (dark overlay, 3 thumbs)
- [ ] `ServicesSection.jsx` (3-col Lucide icons)
- [ ] `GallerySection.jsx` (3-col flush + hover overlay)
- [ ] `TeamSection.jsx`
- [ ] `TestimonialsSection.jsx`
- [ ] `StatsSection.jsx` (2x2)
- [ ] `NewsletterSection.jsx`
- [ ] `BlogPreviewSection.jsx` (full saffron bg)
- [ ] `CertStripBottom.jsx` (#1c1c1c bar)
- [ ] UI primitives created on demand: `TeamCard`, `ServiceCard`, `BlogCard`, `StatBox`, `TestimonialCard`

### Phase 4 — About page
- [ ] `AboutIntro.jsx`
- [ ] `CertificatesStrip.jsx`
- [ ] `ServicesSection.jsx` (about-specific copy)
- [ ] `VideoCTASection.jsx`
- [ ] `TeamSection.jsx` (reuse)
- [ ] `PartnerStripOrange.jsx`
- [ ] `TimelineSection.jsx` (4 milestones 2022–2025)
- [ ] `CTASection.jsx`

### Phase 5 — Portfolio page
- [ ] `PortfolioFilter.jsx` (6 tabs)
- [ ] `PortfolioGrid.jsx` (3x2 with framer-motion AnimatePresence)
- [ ] `PortfolioItem.jsx` (saffron hover overlay)
- [ ] `CTASection.jsx` (reuse)

### Phase 6 — Blog + BlogSingle
- [ ] `BlogList.jsx` (65% column, 3 posts/page)
- [ ] `Sidebar.jsx` (Search, Recent, Categories, Social, Tags, Promo)
- [ ] `Pagination.jsx` (circular)
- [ ] `BlogSingle.jsx` (article view)

### Phase 7 — Contact page
- [ ] `MapSection.jsx` (Google Maps iframe Pune)
- [ ] `OfficeCards.jsx` (3-col)
- [ ] `ContactForm.jsx` (EmailJS, underline inputs, validation states)

### Phase 8 — Vertical pages
- [ ] `VerticalPageTemplate.jsx` (shared base)
- [ ] `Productions.jsx` (gold accent)
- [ ] `Events.jsx` (saffron accent)
- [ ] `Films.jsx` (maroon accent)

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
