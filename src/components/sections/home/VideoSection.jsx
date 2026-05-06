import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import SectionLabel from '../../ui/SectionLabel.jsx';
import Button from '../../ui/Button.jsx';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';
import { videoSectionThumbs, videoSectionBg } from '../../../constants/gallery';

export default function VideoSection() {
  const { ref, controls } = useScrollReveal();

  return (
    <section
      className="relative text-white py-section"
      style={{
        backgroundImage: `url(${videoSectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/75" aria-hidden />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="relative container-x"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" style={{ minHeight: 360 }}>
            {videoSectionThumbs.map((src, i) => (
              <div
                key={i}
                className="absolute overflow-hidden rounded-card shadow-card"
                style={{
                  width: '60%',
                  aspectRatio: '4 / 3',
                  top: `${i * 20}%`,
                  left: `${i * 18}%`,
                  zIndex: i,
                  border: '4px solid #1a1a1a',
                }}
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                {i === 1 && (
                  <button
                    type="button"
                    aria-label="Play video"
                    className="absolute inset-0 flex items-center justify-center bg-black/40 text-white hover:bg-black/55 transition-colors"
                  >
                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary">
                      <Play size={22} className="ml-1" fill="currentColor" aria-hidden />
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>

          <div>
            <SectionLabel>Our Latest Work</SectionLabel>
            <h2 className="text-h2 font-rubik font-bold mb-5" style={{ color: '#fff' }}>
              We Published<br />Our Recent Event<br />Trailer — Let's See
            </h2>
            <p className="font-rubik mb-8" style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.7)' }}>
              From Pune Classical Music Festival to our latest heritage documentary, get a glimpse
              of the stories Deshkari Studios is telling this year — and the audiences receiving
              them.
            </p>
            <Button variant="primary" to="/portfolio">Watch Now</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
