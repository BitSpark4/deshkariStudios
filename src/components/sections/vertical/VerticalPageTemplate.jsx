import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../../layout/PageHero.jsx';
import SectionLabel from '../../ui/SectionLabel.jsx';
import Button from '../../ui/Button.jsx';
import PortfolioItem from '../../ui/PortfolioItem.jsx';
import CTASection from '../about/CTASection.jsx';
import { useScrollReveal, fadeUpVariants, staggerVariants } from '../../../hooks/useScrollReveal';
import { pageHeroImages, aboutPreviewImages } from '../../../constants/gallery';
import { portfolioItems } from '../../../constants/portfolio';

/*
 * Generic 4-section template used by Productions / Events / Films pages.
 *
 * Props:
 *   key            — page slug ('productions' | 'events' | 'films')
 *   title          — H1 + breadcrumb label
 *   accentColor    — hex used by SectionLabel + light decorations (saffron/gold/maroon)
 *   intro          — { label, headingLines[], bodyParagraphs[], primaryCta }
 *   offerings      — array of { icon, title, description }
 *   featuredFilter — portfolio category id used to filter the Featured Work grid
 */
export default function VerticalPageTemplate({
  pageKey,
  title,
  accentColor = '#C45911',
  intro,
  offerings,
  featuredFilter,
}) {
  const { ref: introRef, controls: introControls } = useScrollReveal();
  const { ref: offerRef, controls: offerControls } = useScrollReveal();
  const { ref: workRef, controls: workControls } = useScrollReveal();

  const featured = featuredFilter
    ? portfolioItems.filter((p) => p.category === featuredFilter)
    : portfolioItems;

  return (
    <>
      <PageHero
        title={title}
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: title }]}
        bgImage={pageHeroImages[pageKey] ?? pageHeroImages.about}
        accentColor={accentColor}
      />

      {/* Intro */}
      <section className="bg-white py-section">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              ref={introRef}
              initial="hidden"
              animate={introControls}
              variants={fadeUpVariants}
              className="max-w-lg"
            >
              <SectionLabel color={accentColor}>{intro.label}</SectionLabel>
              <h2 className="text-h2 text-heading font-rubik font-bold mb-5">
                {intro.headingLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              {intro.bodyParagraphs.map((p, i) => (
                <p key={i} className="text-body font-rubik mb-4">
                  {p}
                </p>
              ))}
              <div className="mt-6">
                <Button to={intro.primaryCta.to}>{intro.primaryCta.text}</Button>
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
                className="w-full rounded-card object-cover"
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

      {/* Offerings */}
      <section className="bg-bg-light py-section">
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
              const Icon = Icons[o.icon] ?? Icons.Sparkles;
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

      {/* Featured work */}
      <section className="bg-white py-section">
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
            {(featured.length > 0 ? featured : portfolioItems).slice(0, 6).map((item, i) => (
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
