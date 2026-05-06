import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';
import { partners } from '../../../constants/partners';

export default function PartnersStrip() {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="bg-white border-t border-b border-border" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="container-x text-center"
      >
        <h3 className="text-heading font-rubik font-semibold mb-8" style={{ fontSize: 22, lineHeight: 1.3 }}>
          We Have Got Many Other<br />Certifications & Partners
        </h3>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((p) => {
            const Icon = Icons[p.icon] ?? Icons.BadgeCheck;
            return (
              <li
                key={p.name}
                className="flex items-center gap-2 text-muted hover:text-primary transition-colors grayscale hover:grayscale-0"
                title={p.name}
              >
                <Icon size={28} strokeWidth={1.5} aria-hidden />
                <span className="font-rubik font-semibold text-sm hidden md:inline">{p.name}</span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
