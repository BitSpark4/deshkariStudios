import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel.jsx';
import Button from '../../ui/Button.jsx';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';
import { aboutPreviewImages } from '../../../constants/gallery';
import { aboutInlineStats } from '../../../constants/stats';

export default function AboutPreview() {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="bg-white py-section">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeUpVariants}
            className="max-w-lg"
          >
            <SectionLabel>About Our Studio</SectionLabel>
            <h2 className="text-h2 text-heading font-rubik font-bold mb-5">
              Advancing Without<br />Boundaries
            </h2>
            <p className="text-body font-rubik mb-4">
              We are Deshkari Studios — a Pune-based creative company building India's most
              culturally rooted entertainment studio.
            </p>
            <p className="text-body font-rubik mb-4">
              Across three verticals — Productions, Events and Films — we create original Indian
              music, deliver live cultural experiences, and tell authentic Indian stories through
              cinema.
            </p>
            <p className="text-body font-rubik mb-8">
              Rooted in India. Built for the world. Every project we ship carries the imprint of
              the artists, places and traditions we draw from.
            </p>
            <Button to="/about">Read More</Button>

            {(() => {
              const visibleStats = aboutInlineStats.filter((s) => s.visible);
              return (
                <ul
                  className={`mt-10 grid divide-x divide-border max-w-md`}
                  style={{
                    gridTemplateColumns: `repeat(${visibleStats.length || 1}, minmax(0, 1fr))`,
                  }}
                >
                  {visibleStats.map((stat) => (
                    <li key={stat.label} className="px-4 first:pl-0">
                      <div
                        className="text-heading font-rubik font-bold leading-none"
                        style={{ fontSize: 28 }}
                      >
                        {stat.number}
                      </div>
                      <div className="text-body font-rubik mt-2" style={{ fontSize: 13 }}>
                        {stat.label}
                      </div>
                    </li>
                  ))}
                </ul>
              );
            })()}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 } },
            }}
            className="relative"
          >
            <img
              src={aboutPreviewImages.main}
              alt="Deshkari Studios team in session"
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
  );
}
