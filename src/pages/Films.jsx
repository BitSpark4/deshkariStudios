import { motion } from 'framer-motion';
import { Play, Trophy, Sparkles, Film, Clapperboard, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/layout/PageHero.jsx';
import SectionLabel from '../components/ui/SectionLabel.jsx';
import Button from '../components/ui/Button.jsx';
import PortfolioItem from '../components/ui/PortfolioItem.jsx';
import CTASection from '../components/sections/about/CTASection.jsx';
import { useScrollReveal, fadeUpVariants, staggerVariants } from '../hooks/useScrollReveal.js';
import { pageHeroImages, aboutPreviewImages } from '../constants/gallery.js';
import { portfolioItems } from '../constants/portfolio.js';

const offerings = [
  {
    icon: Film,
    title: 'Documentary Films',
    description:
      'Long-form documentaries on India’s cultural traditions, communities and untold stories.',
  },
  {
    icon: Clapperboard,
    title: 'Feature & Short Films',
    description:
      'Original narrative films — features and shorts — written, directed and produced in-house.',
  },
  {
    icon: Video,
    title: 'Brand Films & OTT',
    description:
      'Brand films, music videos and series content delivered to OTT, broadcast and theatrical standards.',
  },
];

export default function Films() {
  const accentColor = '#6B1A1A'; // Deep Maroon for Film Vertical
  const pageKey = 'films';
  const title = 'Films';

  const { ref: introRef, controls: introControls } = useScrollReveal();
  const { ref: spotlightRef, controls: spotlightControls } = useScrollReveal();
  const { ref: offerRef, controls: offerControls } = useScrollReveal();
  const { ref: workRef, controls: workControls } = useScrollReveal();

  const featured = portfolioItems.filter((p) => p.category === 'films');

  return (
    <>
      {/* 1. Page Hero Banner */}
      <PageHero
        title={title}
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: title }]}
        bgImage={pageHeroImages[pageKey] ?? pageHeroImages.about}
        accentColor={accentColor}
      />

      {/* 2. Intro Section */}
      <section className="bg-white py-20">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              ref={introRef}
              initial="hidden"
              animate={introControls}
              variants={fadeUpVariants}
              className="max-w-lg"
            >
              <SectionLabel color={accentColor}>Authentic Indian Stories on Screen</SectionLabel>
              <h2 className="text-h2 text-heading font-rubik font-bold mb-5">
                Films That Honour<br />India’s Cultural Fabric
              </h2>
              <p className="text-body font-rubik mb-4">
                Deshkari Films creates documentaries, features and brand films rooted in India’s cultural fabric. Whether we’re profiling a folk tradition in rural Maharashtra or producing a feature documentary for OTT, every film starts with deep research and genuine respect for the source.
              </p>
              <p className="text-body font-rubik mb-4">
                We handle the full pipeline — development, production, post-production, colour and final delivery — partnering with India’s most committed cinematographers, editors and composers.
              </p>
              <div className="mt-6">
                <Button to="/contact">Pitch a Film</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={introControls}
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 } },
              }}
              className="relative"
            >
              <img
                src={pageHeroImages[pageKey] ?? aboutPreviewImages.main}
                alt={`${title} reference`}
                loading="lazy"
                className="w-full rounded-card object-cover shadow-lg"
                style={{ aspectRatio: '4 / 3' }}
              />
              <img
                src={aboutPreviewImages.overlay}
                alt=""
                loading="lazy"
                className="absolute object-cover rounded-card hidden sm:block"
                style={{
                  width: '45%',
                  aspectRatio: '4 / 3',
                  left: -20,
                  bottom: -20,
                  border: '4px solid #ffffff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Signature Spotlight Section: Short Film "Deshkari" (2024) */}
      <section className="bg-bg-darker py-24 relative overflow-hidden text-white">
        {/* Soft atmospheric red glows */}
        <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full bg-[#6B1A1A]/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#B8860B]/5 blur-[120px] pointer-events-none" />

        <motion.div
          ref={spotlightRef}
          initial="hidden"
          animate={spotlightControls}
          variants={fadeUpVariants}
          className="container-x relative z-10"
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel color="#B8860B" centered>
              Featured Masterpiece
            </SectionLabel>
            <div className="w-12 h-[2px] bg-[#6B1A1A] mx-auto mt-2" />
            <h2 className="text-h2 text-white font-rubik font-bold mt-4 tracking-tight leading-tight">
              Short Film: DESHKARI (2024)
            </h2>
            <p className="text-gray-400 mt-3 text-sm font-rubik">
              Nominated and recognized as a finalist at the prestigious Filmfare Short Film Awards 2024.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Cinema Poster Card View with Centered Play Button */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group overflow-hidden rounded-[28px] shadow-2xl aspect-[3/4] w-full max-w-sm border border-white/10 hover:border-[#6B1A1A]/40 transition-all duration-300 bg-black">
                {/* Poster image asset */}
                <img
                  src="/deshkar film.jpg"
                  alt="Deshkari Short Film Poster"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                
                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 transition-opacity duration-300 group-hover:bg-black/50" />
                
                {/* Centered Floating Glassmorphic Play Button */}
                <a
                  href="https://www.youtube.com/watch?v=iSC-66j68no&t=1s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  aria-label="Play Trailer"
                >
                  <div className="w-20 h-20 rounded-full bg-[#6B1A1A]/85 hover:bg-[#6B1A1A] text-white flex items-center justify-center transition-all duration-300 border border-white/20 shadow-lg scale-100 hover:scale-108 hover:shadow-[0_0_20px_rgba(107,26,26,0.5)] z-10">
                    <Play size={26} className="ml-1" fill="currentColor" />
                  </div>
                </a>

                {/* Filmfare Tag overlay at bottom */}
                <div className="absolute bottom-6 left-6 right-6 text-center z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-widest bg-[#B8860B]/20 text-[#B8860B] border border-[#B8860B]/20 shadow-sm">
                    Filmfare Awards Finalist 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Elegant Narration Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs text-[#B8860B] font-bold uppercase tracking-[0.25em] block mb-2 font-rubik">
                The Narrative
              </span>
              <h3 className="text-2xl md:text-3xl text-white font-rubik font-bold leading-tight mb-6">
                A Selfless Tribute to India’s Small Farmers
              </h3>

              {/* Narratives blocks styled with beautiful spacing and gold accents */}
              <div className="space-y-5 text-gray-300 text-sm md:text-base leading-relaxed font-rubik border-l-2 border-[#6B1A1A] pl-5 md:pl-6">
                <p className="italic text-white font-medium">
                  "Around 85% of farmers in India are termed as small farmers because they own less than two acres of land. Most of them are poor. They consider their land as their god."
                </p>
                <p className="text-white/80 font-medium">
                  "They don’t complain. They are humble at heart."
                </p>
                <p>
                  "Rains or no rains. Government help or no help. They just slog it out. They don’t have a choice. We read that they don’t get a good price for their produce. We read about their suicides. They do not protest because they are aware that it is useless. Inspite of all this, he keeps smiling. This is a story of such selfless farmers."
                </p>
                <p className="font-semibold text-white/95 border-t border-white/10 pt-4">
                  "It is an effort to shift society’s point of view about small farmers. An effort to bring some respect to the farmer."
                </p>
              </div>

              {/* Action Buttons: Play Trailer & watch film on Filmfare */}
              <div className="flex flex-wrap gap-4 mt-8 pt-4">
                {/* Official trailer */}
                <a
                  href="https://www.youtube.com/watch?v=iSC-66j68no&t=1s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-all duration-300 shadow-md cursor-pointer active:scale-95 shadow-red-900/20"
                >
                  <Play size={14} fill="currentColor" />
                  <span>Official Trailer</span>
                </a>
                
                {/* Watch film on Filmfare */}
                <a
                  href="https://www.filmfare.com/awards/short-films-2024/finalists/deshkari/4089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 border-2 border-[#B8860B] hover:bg-[#B8860B]/10 text-[#B8860B] font-semibold text-xs uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 cursor-pointer active:scale-95"
                >
                  <Trophy size={14} />
                  <span>Watch Short Film</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 4. Offerings Section */}
      <section className="bg-bg-light py-20">
        <motion.div
          ref={offerRef}
          initial="hidden"
          animate={offerControls}
          variants={fadeUpVariants}
          className="container-x"
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel color={accentColor}>What We Offer</SectionLabel>
            <h2 className="text-h2 text-heading font-rubik font-bold">
              Our {title} Practice<br />— End to End
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {offerings.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.article
                  key={o.title}
                  initial="hidden"
                  animate={offerControls}
                  variants={staggerVariants(i * 0.08)}
                >
                  <Icon size={40} strokeWidth={1.5} style={{ color: accentColor }} aria-hidden />
                  <h3 className="text-heading font-rubik font-semibold mt-5 mb-3" style={{ fontSize: 20 }}>
                    {o.title}
                  </h3>
                  <p className="text-body font-rubik" style={{ fontSize: 14, lineHeight: 1.75 }}>
                    {o.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* 5. Featured Work Section */}
      <section className="bg-white py-20">
        <motion.div
          ref={workRef}
          initial="hidden"
          animate={workControls}
          variants={fadeUpVariants}
          className="container-x"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel color={accentColor}>Featured Work</SectionLabel>
            <h2 className="text-h2 text-heading font-rubik font-bold">
              A Glimpse of Our<br />{title} Catalog
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {featured.slice(0, 6).map((item, i) => (
              <motion.div
                key={item.id}
                initial="hidden"
                animate={workControls}
                variants={staggerVariants(i * 0.05)}
              >
                <PortfolioItem item={item} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="font-rubik font-semibold hover:underline"
              style={{ color: accentColor }}
            >
              View Full Portfolio →
            </Link>
          </div>
        </motion.div>
      </section>

      <CTASection decorative />
    </>
  );
}
