import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel.jsx';
import Button from '../../ui/Button.jsx';
import PortfolioFilter from './PortfolioFilter.jsx';
import PortfolioItem from '../../ui/PortfolioItem.jsx';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';
import { portfolioItems } from '../../../constants/portfolio';

export default function PortfolioGrid({ heading = true, showCta = true }) {
  const [active, setActive] = useState('all');
  const { ref, controls } = useScrollReveal();

  const visible = useMemo(
    () =>
      active === 'all'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === active),
    [active]
  );

  return (
    <section className="bg-white py-section">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="container-x"
      >
        {heading && (
          <div className="text-center max-w-2xl mx-auto mb-10">
            <SectionLabel>Our Recent Work</SectionLabel>
            <h2 className="text-h2 text-heading font-rubik font-bold">
              Portfolios That Tell<br />India's Story
            </h2>
          </div>
        )}

        <PortfolioFilter active={active} onChange={setActive} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, delay: i * 0.05 } }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              >
                <PortfolioItem item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visible.length === 0 && (
          <p className="text-center text-muted font-rubik mt-12">
            No items in this category yet — check back soon.
          </p>
        )}

        {showCta && (
          <div className="text-center mt-12">
            <Button to="/contact">View All Works</Button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
