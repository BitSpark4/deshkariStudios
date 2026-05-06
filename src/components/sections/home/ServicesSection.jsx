import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel.jsx';
import ServiceCard from '../../ui/ServiceCard.jsx';
import { useScrollReveal, fadeUpVariants, staggerVariants } from '../../../hooks/useScrollReveal';
import { services } from '../../../constants/services';

export default function ServicesSection() {
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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="text-h2 text-heading font-rubik font-bold">
            We Offer Better Services<br />For Your Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              animate={controls}
              variants={staggerVariants(i * 0.08)}
            >
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
