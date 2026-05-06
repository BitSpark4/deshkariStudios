import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';
import { partners } from '../../../constants/partners';

export default function PartnerStripOrange() {
  const { ref, controls } = useScrollReveal();

  return (
    <section style={{ background: '#C45911', paddingTop: 40, paddingBottom: 40 }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="container-x"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
          {partners.map((p) => {
            const Icon = Icons[p.icon] ?? Icons.BadgeCheck;
            return (
              <li
                key={p.name}
                className="flex items-center gap-2 text-white/85 hover:text-white transition-colors"
                title={p.name}
              >
                <Icon size={32} strokeWidth={1.5} aria-hidden />
                <span className="font-rubik font-semibold text-sm hidden md:inline">{p.name}</span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
