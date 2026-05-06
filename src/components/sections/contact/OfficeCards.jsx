import { motion } from 'framer-motion';
import { Home, Mail, Phone } from 'lucide-react';
import { useScrollReveal, fadeUpVariants, staggerVariants } from '../../../hooks/useScrollReveal';
import { offices } from '../../../constants/offices';

export default function OfficeCards() {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((o, i) => (
            <motion.article
              key={o.id}
              initial="hidden"
              animate={controls}
              variants={staggerVariants(i * 0.12)}
              className="border border-border rounded-card p-9 hover:shadow-card transition-shadow bg-white"
            >
              <div className="mb-1 text-primary uppercase font-rubik font-semibold" style={{ fontSize: 12, letterSpacing: '0.14em' }}>
                {o.tagline}
              </div>
              <h3 className="text-heading font-rubik font-bold mb-6" style={{ fontSize: 26 }}>
                {o.city}
              </h3>

              <ul className="space-y-4 text-sm text-body font-rubik">
                <li className="flex items-start gap-3">
                  <Home size={14} className="text-primary mt-1 shrink-0" aria-hidden />
                  <span>
                    {o.address.map((line, idx) => (
                      <span key={idx} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex items-start gap-3 border-t border-border pt-4">
                  <Mail size={14} className="text-primary mt-1 shrink-0" aria-hidden />
                  <a href={`mailto:${o.email}`} className="hover:text-primary transition-colors">
                    {o.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 border-t border-border pt-4">
                  <Phone size={14} className="text-primary mt-1 shrink-0" aria-hidden />
                  <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                    {o.phone}
                  </a>
                </li>
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
