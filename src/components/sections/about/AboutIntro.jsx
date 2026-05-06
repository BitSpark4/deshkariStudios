import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel.jsx';
import Button from '../../ui/Button.jsx';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';
import { aboutPreviewImages } from '../../../constants/gallery';

export default function AboutIntro() {
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
            <SectionLabel>About Us</SectionLabel>
            <h2 className="text-h2 text-heading font-rubik font-bold mb-5">
              Advancing Without<br />Boundaries
            </h2>
            <p className="text-body font-rubik mb-4">
              We are Deshkari Studios — a Pune-based creative company building India's most
              culturally rooted entertainment studio. Across three verticals — Productions, Events
              and Films — we create original music, deliver live cultural experiences, and tell
              authentic Indian stories through cinema.
            </p>
            <p className="text-body font-rubik mb-4">
              We work with classical and folk artists, contemporary musicians, filmmakers and
              cultural institutions across India and abroad. Every project carries the imprint of
              the artists, places and traditions we draw from.
            </p>
            <p className="text-body font-rubik mb-8">
              Our mission is simple: tell India's stories on India's terms — with world-class
              production values and a deep respect for the source.
            </p>
            <Button to="/contact">Read More</Button>
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
