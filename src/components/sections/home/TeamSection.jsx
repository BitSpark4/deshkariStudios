import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel.jsx';
import TeamCard from '../../ui/TeamCard.jsx';
import { useScrollReveal, fadeUpVariants, staggerVariants } from '../../../hooks/useScrollReveal';
import { teamMembers } from '../../../constants/team';

const visibleTeam = teamMembers.filter((m) => m.visible !== false);

export default function TeamSection() {
  const { ref, controls } = useScrollReveal();

  // 4-col when 4 members, 2-col when 2 (centered), etc. Keeps card width consistent.
  const cols =
    visibleTeam.length >= 4
      ? 'lg:grid-cols-4'
      : visibleTeam.length === 3
      ? 'lg:grid-cols-3 max-w-4xl mx-auto'
      : 'lg:grid-cols-2 max-w-3xl mx-auto';

  return (
    <section className="bg-white py-section">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="container-x"
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Our People</SectionLabel>
          <h2 className="text-h2 text-heading font-rubik font-bold">
            Meet Our Creative<br />Team Members
          </h2>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-6`}>
          {visibleTeam.map((m, i) => (
            <motion.div
              key={m.name}
              initial="hidden"
              animate={controls}
              variants={staggerVariants(i * 0.08)}
            >
              <TeamCard {...m} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
