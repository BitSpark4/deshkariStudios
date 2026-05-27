import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award, Sparkles, Mic2 } from 'lucide-react';
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
    icon: Calendar,
    title: 'Festival Production',
    description:
      'Multi-day cultural festivals — venue, stage, sound, lighting, hospitality, ticketing and audience flow.',
  },
  {
    icon: Mic2,
    title: 'Concerts & Tours',
    description:
      'Single-night concerts and multi-city tours for classical, folk and contemporary artists across India.',
  },
  {
    icon: Sparkles,
    title: 'Brand & Cultural Events',
    description:
      'Curated experiences for corporate clients, cultural institutions and government partners.',
  },
];

export default function Events() {
  const accentColor = '#C45911'; // Warm Orange for Events Vertical
  const pageKey = 'events';
  const title = 'Events';

  const { ref: introRef, controls: introControls } = useScrollReveal();
  const { ref: spotlightRef, controls: spotlightControls } = useScrollReveal();
  const { ref: offerRef, controls: offerControls } = useScrollReveal();
  const { ref: workRef, controls: workControls } = useScrollReveal();

  const featured = portfolioItems.filter((p) => p.category === 'events');

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
              <SectionLabel color={accentColor}>Live Cultural Experiences</SectionLabel>
              <h2 className="text-h2 text-heading font-rubik font-bold mb-5">
                Live Music & Cultural<br />Events That Move Audiences
              </h2>
              <p className="text-body font-rubik mb-4">
                Streaming made music ubiquitous, but live performance is where culture is transmitted. Deshkari Events designs and produces concerts, festivals and cultural gatherings — from intimate baithaks to 8,000-attendee festivals.
              </p>
              <p className="text-body font-rubik mb-4">
                Our team handles every layer: artist relations, venue and tech, hospitality, ticketing, partnerships and audience experience. We sweat the details so artists and audiences can be fully present.
              </p>
              <div className="mt-6">
                <Button to="/contact">Plan an Event</Button>
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

      {/* 3. Signature Spotlight Section: "The Folk Aakhyan" (Mumbai Birla Matushri Hall) */}
      <section className="bg-bg-darker py-24 relative overflow-hidden text-white">
        {/* Soft atmospheric orange/gold glows */}
        <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full bg-[#C45911]/10 blur-[150px] pointer-events-none" />
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
              Featured Event Spotlight
            </SectionLabel>
            <div className="w-12 h-[2px] bg-[#C45911] mx-auto mt-2" />
            <h2 className="text-h2 text-white font-rubik font-bold mt-4 tracking-tight leading-tight">
              Live Show: THE FOLK AAKHYAN
            </h2>
            <p className="text-gray-400 mt-3 text-sm font-rubik">
              An immersive legendary performance bringing Indian folk traditions alive on stage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Event Poster Card View (Pure Image Card) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group overflow-hidden rounded-[28px] shadow-2xl aspect-[3/4] w-full max-w-sm border border-white/10 hover:border-[#C45911]/40 transition-all duration-300 bg-black">
                {/* Poster image asset (folk-akhyan-1.webp) */}
                <img
                  src="/folk-akhyan-1.webp"
                  alt="The Folk Aakhyan live performance scene"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Right: Poignant Story & Metainfo Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs text-[#B8860B] font-bold uppercase tracking-[0.25em] block mb-2 font-rubik">
                THE FOLK AAKHYAN
              </span>
              <h3 className="text-2xl md:text-3xl text-white font-rubik font-bold leading-tight mb-6">
                The Legendary Experience of Folk Aakhyan
              </h3>

              {/* Narratives blocks styled with beautiful spacing and orange accents */}
              <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed font-rubik border-l-2 border-[#C45911] pl-5 md:pl-6 mb-6">
                <p className="text-white font-medium">
                  Deshkari Productions organised and produced The Folk Aakhyan — a legendary live folk music and cultural show held at the iconic Birla Matushri Hall, Mumbai on 27th January.
                </p>
                <p>
                  This special show was dedicated entirely to underprivileged and special children. Hundreds of children were brought to experience a world of rhythm, heritage and pure happiness — many of them for the very first time. The show was not just a performance. It was an invitation for every child in that hall to feel celebrated, seen and full of joy.
                </p>
                <p>
                  The Folk Aakhyan celebrates Indian folk music and oral storytelling traditions — bringing heritage alive on stage with a massive live production that fills every corner of the room with energy and emotion.
                </p>
              </div>

              {/* Bulleted Metainfo Checklist tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
                {/* Date */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#B8860B]/20 flex items-center justify-center text-[#B8860B] shrink-0">
                    <Calendar size={11} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-rubik">Date</span>
                    <span className="text-white text-sm font-semibold font-rubik">27th January</span>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#B8860B]/20 flex items-center justify-center text-[#B8860B] shrink-0">
                    <MapPin size={11} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-rubik">Venue</span>
                    <span className="text-white text-sm font-semibold font-rubik">Birla Matushri Hall, Mumbai</span>
                  </div>
                </div>

                {/* Cause */}
                <div className="flex items-start gap-3 sm:col-span-2 border-t border-white/5 pt-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#B8860B]/20 flex items-center justify-center text-[#B8860B] shrink-0">
                    <Award size={11} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-rubik">Cause</span>
                    <span className="text-white text-sm font-semibold font-rubik">A special performance for underprivileged and special children</span>
                  </div>
                </div>
              </div>

              {/* Slogan & CTAs */}
              <div className="flex flex-wrap items-center gap-6 justify-between border-t border-white/10 pt-4">
                <span className="text-sm font-semibold tracking-wider text-[#B8860B] font-rubik block">
                  Celebrating Heritage. Empowering Lives.
                </span>

                <div className="flex gap-4">
                  <Button to="/contact">Plan an Event</Button>
                </div>
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
