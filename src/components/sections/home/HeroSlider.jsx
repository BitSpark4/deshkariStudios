import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../../../constants/heroSlides';
import Button from '../../ui/Button.jsx';

const AUTOPLAY_MS = 5000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length);
  }, []);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section
      className="relative w-full text-white overflow-hidden"
      style={{ height: '100vh', minHeight: 600, maxHeight: 900 }}
      aria-roledescription="carousel"
      aria-label="Featured Deshkari Studios productions"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full container-x flex items-center">
        <motion.div
          key={`${slide.id}-content`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="max-w-2xl"
        >
          <span
            className="block uppercase mb-4 text-primary font-rubik font-semibold"
            style={{ letterSpacing: '0.14em', fontSize: 13 }}
          >
            {slide.label}
          </span>
          <h1
            className="text-white font-rubik font-bold"
            style={{ fontSize: 'clamp(36px, 6vw, 58px)', lineHeight: 1.1 }}
          >
            {slide.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p
            className="mt-6 font-rubik max-w-md"
            style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}
          >
            {slide.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" to={slide.primaryCta.to}>
              {slide.primaryCta.text}
            </Button>
            <Button variant="outline" to={slide.secondaryCta.to} showArrow={false}>
              {slide.secondaryCta.text}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Arrows */}
      <div className="absolute right-6 bottom-10 flex items-center gap-3 z-10">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-white/60 text-white hover:bg-white hover:text-primary transition-colors"
        >
          <ChevronLeft size={20} aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-white/60 text-white hover:bg-white hover:text-primary transition-colors"
        >
          <ChevronRight size={20} aria-hidden />
        </button>
      </div>

      {/* Dots */}
      <ul className="absolute left-1/2 -translate-x-1/2 bottom-10 flex items-center gap-2 z-10">
        {heroSlides.map((s, i) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className="block transition-all"
              style={{
                width: i === index ? 28 : 10,
                height: 10,
                borderRadius: 999,
                background: i === index ? '#C45911' : 'rgba(255,255,255,0.5)',
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
