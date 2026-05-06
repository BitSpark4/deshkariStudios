import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLabel from '../../ui/SectionLabel.jsx';
import { useScrollReveal, fadeUpVariants, staggerVariants } from '../../../hooks/useScrollReveal';
import { galleryItems } from '../../../constants/gallery';

export default function GallerySection() {
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
          <SectionLabel>Awards & Gallery</SectionLabel>
          <h2 className="text-h2 text-heading font-rubik font-bold">
            Our Most Award-Winning<br />Working Gallery
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-[1600px] mx-auto">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial="hidden"
            animate={controls}
            variants={staggerVariants(i * 0.1)}
          >
            <Link
              to="/portfolio"
              className="group relative block overflow-hidden"
              style={{ aspectRatio: '4 / 3' }}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="hover-overlay bg-black/60">
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white">
                  <Play size={22} className="ml-1" fill="currentColor" aria-hidden />
                </span>
                <div className="absolute left-6 bottom-6 right-6">
                  <span className="text-primary font-rubik font-semibold uppercase block mb-1" style={{ fontSize: 12, letterSpacing: '0.14em' }}>
                    {item.category}
                  </span>
                  <h3 className="text-white font-rubik font-semibold" style={{ fontSize: 18 }}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
