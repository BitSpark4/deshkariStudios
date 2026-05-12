import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';
import { videoSectionBg } from '../../../constants/gallery';

export default function VideoCTASection() {
  const { ref, controls } = useScrollReveal();

  return (
    <section
      className="relative text-white"
      style={{
        backgroundImage: `url(${videoSectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 400,
      }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="relative container-x flex flex-col items-center justify-center text-center py-section"
        style={{ minHeight: 400 }}
      >
        <a
          href="https://www.filmfare.com/awards/short-films-2024/finalists/deshkari/4089"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play showreel"
          className="group flex items-center justify-center mb-6 transition-transform hover:scale-110 active:scale-95"
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            border: '2px solid #C45911',
            background: 'rgba(196,89,17,0.18)',
          }}
        >
          <Play
            size={22}
            className="text-primary ml-1 group-hover:text-white transition-colors"
            fill="currentColor"
            aria-hidden
          />
        </a>
        <p className="font-rubik text-white font-medium" style={{ fontSize: 18 }}>
          Watch out "Deshkari" in Filmfare Short Film Awards 2024!
        </p>
      </motion.div>
    </section>
  );
}
