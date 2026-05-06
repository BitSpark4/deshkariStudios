import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel.jsx';
import Button from '../../ui/Button.jsx';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';
import { contactInfo } from '../../../constants/navigation';

/*
 * Used on the About page (and reused on Portfolio page) — split-layout CTA.
 * `decorative` enables the abstract orange swirl shapes (Portfolio page variant).
 */
export default function CTASection({ decorative = false }) {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="relative bg-bg-light py-section overflow-hidden">
      {decorative && (
        <>
          <div
            className="absolute pointer-events-none hidden md:block"
            style={{
              left: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(196,89,17,0.10), rgba(196,89,17,0) 70%)',
            }}
            aria-hidden
          />
          <div
            className="absolute pointer-events-none hidden md:block"
            style={{
              right: -40,
              top: '40%',
              width: 240,
              height: 240,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(196,89,17,0.10), rgba(196,89,17,0) 70%)',
            }}
            aria-hidden
          />
        </>
      )}

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="relative container-x"
      >
        <div className={decorative ? 'text-center max-w-2xl mx-auto' : 'grid grid-cols-1 lg:grid-cols-5 gap-10 items-center'}>
          <div className={decorative ? '' : 'lg:col-span-3'}>
            <SectionLabel centered={decorative}>Join Our Team To Get Creative Service</SectionLabel>
            <h2
              className={`text-heading font-rubik font-bold mb-5 ${decorative ? '' : 'max-w-lg'}`}
              style={{ fontSize: 36, lineHeight: 1.2 }}
            >
              Don't Hesitate To<br />
              Contact With Us.<br />
              We're Always Ready<br />
              to Meet You
            </h2>
            <p className="text-body font-rubik" style={{ fontSize: 15 }}>
              Email us:{' '}
              <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
                {contactInfo.email}
              </a>
            </p>
          </div>

          <div className={decorative ? 'mt-8' : 'lg:col-span-2 flex lg:justify-end'}>
            <Button to="/contact" className="!px-10 !py-4 !text-base">
              Start Your Project
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
