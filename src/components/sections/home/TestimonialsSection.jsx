import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel.jsx';
import TestimonialCard from '../../ui/TestimonialCard.jsx';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';
import { testimonials } from '../../../constants/testimonials';

const AUTOPLAY_MS = 7000;

export default function TestimonialsSection() {
  const { ref, controls } = useScrollReveal();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

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
          <SectionLabel>Client Reviews</SectionLabel>
          <h2 className="text-h2 text-heading font-rubik font-bold">
            Let's See Our Clients'<br />Awesome Reviews
          </h2>
        </div>

        <div className="relative" style={{ minHeight: 300 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <TestimonialCard testimonial={testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <ul className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <li key={t.id}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className="block transition-all"
                style={{
                  width: i === index ? 24 : 10,
                  height: 10,
                  borderRadius: 999,
                  background: i === index ? '#C45911' : '#d8c8b6',
                }}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
