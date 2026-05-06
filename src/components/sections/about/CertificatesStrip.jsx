import { motion } from 'framer-motion';
import { Award, BadgeCheck, ShieldCheck, Trophy } from 'lucide-react';
import { useScrollReveal, fadeUpVariants, staggerVariants } from '../../../hooks/useScrollReveal';

const certificates = [
  { icon: Award, title: 'Excellence Award', subtitle: 'Indian Music Industry 2024' },
  { icon: BadgeCheck, title: 'Verified Studio', subtitle: 'Cultural Heritage Foundation' },
  { icon: ShieldCheck, title: 'Quality Certified', subtitle: 'Audio Engineering Society' },
  { icon: Trophy, title: 'Best Documentary', subtitle: 'Pune Film Festival 2024' },
];

export default function CertificatesStrip() {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="bg-white border-t border-border" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="container-x"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden"
              animate={controls}
              variants={staggerVariants(i * 0.08)}
              className="flex items-center gap-4 p-4 border border-border rounded-card hover:shadow-card transition-shadow"
            >
              <c.icon size={36} strokeWidth={1.5} className="text-primary shrink-0" aria-hidden />
              <div>
                <div className="text-heading font-rubik font-semibold" style={{ fontSize: 14 }}>
                  {c.title}
                </div>
                <div className="text-muted font-rubik mt-1" style={{ fontSize: 12 }}>
                  {c.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
