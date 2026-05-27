import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../../ui/SectionLabel.jsx';
import { useScrollReveal, fadeUpVariants } from '../../../hooks/useScrollReveal';

const AWARDS_DATA = [
  {
    id: "filmfare",
    award: "Winner",
    festival: "Filmfare Awards",
    category: "Feature Film",
    scope: "National",
    description: "The crown jewel of Indian cinema, celebrating outstanding artistic achievement and cinematic storytelling on the grandest stage.",
    trophy: "/awards/filmfare.png",
    isFilmfare: true,
  },
  {
    id: "shivaji",
    award: "Special Jury Award",
    festival: "Chhatrapati Shivaji Film Festival",
    category: "Best Short Film",
    scope: "International",
    description: "Honored with the Special Jury Award for Best Short Film, celebrating exceptional creative direction and evocative narration.",
    trophy: "/awards/trophy_gold.png",
    isFilmfare: false,
  },
  {
    id: "indian-indie",
    award: "Winner",
    festival: "Indian Independent Film Festival",
    category: "Best Film",
    scope: "National",
    description: "Awarded Best Film for championing independent cinematic voices and outstanding narrative execution.",
    trophy: "/awards/trophy_gold.png",
    isFilmfare: false,
  },
  {
    id: "karnataka-youth",
    award: "Winner",
    festival: "Karnataka Youth Film Festival",
    category: "Best Director",
    scope: "International",
    description: "Recognized as the Winner for promoting youth culture, stellar cinematic artistry, and social impact.",
    trophy: "/awards/trophy_gold.png",
    isFilmfare: false,
  },
  {
    id: "reels",
    award: "Winner",
    festival: "Reels International Film Festival",
    category: "Best Film",
    scope: "International",
    description: "Honored for technical excellence, outstanding performance, and overall best narrative feature.",
    trophy: "/awards/trophy_gold.png",
    isFilmfare: false,
  },
  {
    id: "roshani",
    award: "Winner",
    festival: "Roshani International Film Festival",
    category: "Best Screenplay",
    scope: "International",
    description: "Awarded for exceptional cinematography and screenwriting that illuminates diverse human experiences.",
    trophy: "/awards/trophy_gold.png",
    isFilmfare: false,
  },
  {
    id: "box-office",
    award: "Winner",
    festival: "Box Office Cine Awards",
    category: "Audience Choice",
    scope: "National",
    description: "Recognized for supreme box office performance and spectacular audience engagement.",
    trophy: "/awards/trophy_gold.png",
    isFilmfare: false,
  },
  {
    id: "asian-talent",
    award: "Winner",
    festival: "Asian Talent Film Festival",
    category: "Best Director",
    scope: "International",
    description: "Celebrating rising cinematic talent across Asia with the prestigious festival Winner accolade.",
    trophy: "/awards/trophy_gold.png",
    isFilmfare: false,
  },
  {
    id: "vaaranam",
    award: "Winner",
    festival: "Vaaranam Film Festival",
    category: "Best Editing",
    scope: "International",
    description: "Awarded Winner for outstanding editing, musical score, and captivating local aesthetics.",
    trophy: "/awards/trophy_gold.png",
    isFilmfare: false,
  },
  {
    id: "indie-cine",
    award: "Winner",
    festival: "Indie Cine Tube Awards",
    category: "Best Indie Film",
    scope: "International",
    description: "Winner of the outstanding indie release award, pushing the boundaries of digital filmmaking.",
    trophy: "/awards/trophy_gold.png",
    isFilmfare: false,
  },
  {
    id: "bengal-indie",
    award: "Winner",
    festival: "Bengal Independent Film Festival",
    category: "Best Feature",
    scope: "International",
    description: "Awarded Best Feature for raising industry standards, showing high-fidelity independent vision.",
    trophy: "/awards/trophy_gold.png",
    isFilmfare: false,
  },
  {
    id: "mayavaram",
    award: "Winner",
    festival: "Mayavaram Film Festival",
    category: "Best Drama",
    scope: "International",
    description: "Honored as Winner for extraordinary regional cinema development and expressive character design.",
    trophy: "/awards/trophy_gold.png",
    isFilmfare: false,
  },
];

// Individual Glowing Black Poster Card Component
function AwardPosterCard({ aw }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="bg-black p-4 pb-6 rounded-[34px] shadow-2xl relative w-[320px] shrink-0 snap-start select-none border-2 border-[#B8860B]/85 flex flex-col justify-between items-center transition-all duration-300 hover:shadow-[0_12px_32px_rgba(184,134,11,0.35)] hover:scale-[1.01] min-h-[432px] overflow-hidden">
      
      {/* Top Divider Row - Saffron lines with centered title text */}
      <div className="flex items-center justify-center gap-2 w-full mt-1 mb-4 px-2">
        <div className="h-[1px] bg-[#B8860B]/40 flex-1" />
        <span className="text-[#B8860B] font-bold text-[9px] tracking-[0.25em] uppercase font-rubik whitespace-nowrap">
          Winner Spotlight
        </span>
        <div className="h-[1px] bg-[#B8860B]/40 flex-1" />
      </div>

      {/* Centered Large Trophy with Splashed Gold/Bronze Backdrop */}
      <div className="flex justify-center items-center h-48 w-full relative z-10 my-4">
        {/* Blown Splashed Gold dust effect */}
        <div className="absolute w-56 h-56 rounded-full bg-[radial-gradient(circle_at_center,_#B8860B_0%,_rgba(184,134,11,0.22)_40%,_rgba(184,134,11,0.06)_60%,_transparent_75%)] blur-md opacity-90 pointer-events-none -translate-y-4" />
        
        <img
          src={aw.trophy}
          alt={`${aw.festival} Trophy`}
          className={`object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:scale-105 relative z-10 ${
            aw.isFilmfare ? 'h-48' : 'h-44'
          }`}
        />
      </div>

      {/* Lower Block: Elegant typography in gold/bronze, thin gold divider */}
      <div className="w-full text-center relative z-10">
        <h3 className="text-xl font-bold font-rubik text-center text-[#B8860B] tracking-tight leading-snug px-3">
          {aw.festival}
        </h3>
        
        {/* Fine gold horizontal line */}
        <div className="w-16 h-[1px] bg-[#B8860B]/40 mx-auto mt-3.5 mb-4" />
      </div>

      {/* Dark Gold/Bronze gradient pill button */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="rounded-full bg-gradient-to-r from-[#4A3406] to-[#2B1E04] hover:from-[#5C4008] hover:to-[#382705] text-white font-semibold text-xs py-2.5 px-8 transition-all duration-300 shadow-md cursor-pointer text-center mt-auto relative z-10 hover:shadow-[0_4px_12px_rgba(184,134,11,0.3)] active:scale-95"
      >
        Read Accolade
      </button>

      {/* Dynamic Slide-Up Glassmorphic Drawer Overlay (Blown Up expansion) - Now styled in black */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ y: "100%", opacity: 0, scale: 0.92 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: "100%", opacity: 0, scale: 0.92 }}
            transition={{ type: "spring", damping: 22, stiffness: 180 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl p-6 flex flex-col justify-between z-20 rounded-[30px] border-2 border-[#B8860B] shadow-[0_12px_36px_rgba(0,0,0,0.5)]"
          >
            {/* Drawer Header with Close Button */}
            <div className="flex justify-between items-start w-full border-b border-[#B8860B]/20 pb-3">
              <div>
                <span className="text-[9px] text-[#C45911] font-bold uppercase tracking-[0.2em] block mb-0.5">
                  {aw.award}
                </span>
                <h4 className="text-[#B8860B] text-sm font-bold font-rubik leading-tight">
                  Accolade Details
                </h4>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-7 h-7 rounded-full bg-[#B8860B]/10 hover:bg-[#B8860B]/20 flex items-center justify-center border border-[#B8860B]/20 transition-colors cursor-pointer text-[#B8860B]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>

            {/* Drawer Description - Styled for dark layout */}
            <div className="my-auto py-4 text-center">
              <h3 className="text-[#B8860B] text-lg font-bold font-rubik mb-3 leading-snug">
                {aw.festival}
              </h3>
              <p className="text-gray-300 text-xs font-rubik leading-relaxed max-w-xs mx-auto">
                {aw.description}
              </p>
            </div>

            {/* Drawer Footer Badge Tags */}
            <div className="border-t border-[#B8860B]/20 pt-3 flex gap-2 justify-center">
              <span className="text-[9px] font-bold uppercase px-2.5 py-1 rounded bg-[#B8860B]/20 text-[#B8860B] border border-[#B8860B]/10">
                {aw.category}
              </span>
              <span className="text-[9px] font-bold uppercase px-2.5 py-1 rounded bg-[#C45911]/20 text-[#C45911] border border-[#C45911]/10">
                {aw.scope}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AwardsSection() {
  const { ref, controls } = useScrollReveal(0.1);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -344, behavior: 'smooth' }); // Card width (320px) + gap (24px) = 344px
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 344, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-bg-darker py-20 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#C45911]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#B8860B]/5 blur-[150px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUpVariants}
        className="relative z-10 w-full"
      >
        {/* Section Header with Navigation Arrows */}
        <div className="container-x flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <SectionLabel color="#B8860B">
              Achievements & Recognition
            </SectionLabel>
            <div className="w-12 h-[2px] bg-[#C45911] mt-2 mb-4" />
            
            <h2 className="text-h2 text-white font-rubik font-bold leading-tight tracking-tight">
              Accolades & Festival Triumphs
            </h2>
            <p className="text-gray-400 mt-3 text-body font-rubik">
              Honored with prestigious awards across regional, national, and international film festivals. Swipe or click to view our sequence of milestones.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full border border-gray-700 hover:border-[#B8860B] bg-[#1a1a1a] hover:bg-[#B8860B]/10 text-white hover:text-[#B8860B] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
              aria-label="Scroll Left"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full border border-gray-700 hover:border-[#B8860B] bg-[#1a1a1a] hover:bg-[#B8860B]/10 text-white hover:text-[#B8860B] flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
              aria-label="Scroll Right"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Snapping Horizontal Scrollable Container with custom thin scrollbar */}
        <div 
          ref={scrollRef}
          className="scrollbar-thin flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-[calc((100vw-min(1200px,100vw-3rem))/2)] pb-10"
        >
          {AWARDS_DATA.map((aw) => (
            <AwardPosterCard key={aw.id} aw={aw} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
