import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel.jsx';
import StatBox from '../../ui/StatBox.jsx';
import { useScrollReveal, fadeUpVariants, staggerVariants } from '../../../hooks/useScrollReveal';
import { stats } from '../../../constants/stats';

export default function StatsSection() {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="bg-white py-section">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="container-x"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-md">
            <SectionLabel>Our Achievements</SectionLabel>
            <h2 className="text-h2 text-heading font-rubik font-bold mb-5">
              We Have Great<br />Achievements
            </h2>
            <p className="text-body font-rubik">
              Three years in, Deshkari Studios has produced over a hundred original albums,
              produced and staged eighty-five live events, and delivered films and documentaries
              that have travelled to audiences across India and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                animate={controls}
                variants={staggerVariants(i * 0.1)}
              >
                <StatBox {...s} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
