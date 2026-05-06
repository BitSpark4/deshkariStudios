import { motion } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel.jsx';
import BlogCard from '../../ui/BlogCard.jsx';
import { useScrollReveal, fadeUpVariants, staggerVariants } from '../../../hooks/useScrollReveal';
import { blogPosts } from '../../../constants/blog';

export default function BlogPreviewSection() {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="py-section" style={{ background: '#C45911' }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="container-x"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 text-white">
          <span
            className="block uppercase font-rubik font-semibold mb-2"
            style={{ fontSize: 12, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.85)' }}
          >
            Read Our Latest
          </span>
          <h2 className="text-white font-rubik font-bold" style={{ fontSize: 38, lineHeight: 1.15 }}>
            News & Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((p, i) => (
            <motion.div
              key={p.id}
              initial="hidden"
              animate={controls}
              variants={staggerVariants(i * 0.08)}
            >
              <BlogCard post={p} variant="dark" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
