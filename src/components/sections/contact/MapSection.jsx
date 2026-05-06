import { motion } from 'framer-motion';
import { useScrollReveal, fadeInVariants } from '../../../hooks/useScrollReveal';
import { mapEmbedSrc } from '../../../constants/offices';

export default function MapSection() {
  const { ref, controls } = useScrollReveal();

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      className="bg-bg-light"
      aria-label="Office location map"
    >
      <iframe
        title="Deshkari Studios — Pune location"
        src={mapEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block w-full border-0"
        style={{ height: 420 }}
      />
    </motion.section>
  );
}
