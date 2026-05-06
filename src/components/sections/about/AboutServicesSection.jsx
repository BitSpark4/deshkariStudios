import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '../../ui/SectionLabel.jsx';
import ServiceCard from '../../ui/ServiceCard.jsx';
import { useScrollReveal, fadeUpVariants, staggerVariants } from '../../../hooks/useScrollReveal';
import { services } from '../../../constants/services';

export default function AboutServicesSection() {
  const { ref, controls } = useScrollReveal();

  // Show first 3 services on About page (per spec — 3-col).
  const subset = services.slice(0, 3);

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
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="text-h2 text-heading font-rubik font-bold">
            We Offer Better Services<br />For Your Films & Productions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {subset.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              animate={controls}
              variants={staggerVariants(i * 0.1)}
            >
              <ServiceCard {...s} />
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-1 text-primary font-rubik font-semibold hover:underline"
                style={{ fontSize: 13 }}
              >
                Learn More <ArrowRight size={14} aria-hidden />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
