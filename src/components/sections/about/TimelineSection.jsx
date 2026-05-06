import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel.jsx';
import Button from '../../ui/Button.jsx';
import { useScrollReveal, fadeUpVariants, staggerVariants } from '../../../hooks/useScrollReveal';
import { timelineEntries } from '../../../constants/timeline';

export default function TimelineSection() {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="bg-bg-light py-section">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="container-x"
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Our Journey</SectionLabel>
          <h2 className="text-h2 text-heading font-rubik font-bold">
            Know Something<br />About Our History
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {timelineEntries.map((entry, i) => (
            <motion.li
              key={entry.year}
              initial="hidden"
              animate={controls}
              variants={staggerVariants(i * 0.1)}
              className="relative pl-8 border-l-2 border-border"
            >
              <span
                className="absolute -left-[7px] top-2 block bg-primary"
                style={{ width: 12, height: 12, borderRadius: '50%' }}
                aria-hidden
              />
              <span className="block text-primary font-rubik font-semibold uppercase mb-1" style={{ fontSize: 13, letterSpacing: '0.1em' }}>
                {entry.year}
              </span>
              <h3 className="text-primary font-rubik font-semibold mb-2" style={{ fontSize: 16 }}>
                {entry.title}
              </h3>
              <p className="text-body font-rubik" style={{ fontSize: 14, lineHeight: 1.7 }}>
                {entry.body}
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="text-center mt-12">
          <Button to="/portfolio">View More</Button>
        </div>
      </motion.div>
    </section>
  );
}
