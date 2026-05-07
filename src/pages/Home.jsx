import HeroSlider from '../components/sections/home/HeroSlider.jsx';
import AboutPreview from '../components/sections/home/AboutPreview.jsx';
import PartnersStrip from '../components/sections/home/PartnersStrip.jsx';
import VideoSection from '../components/sections/home/VideoSection.jsx';
import ServicesSection from '../components/sections/home/ServicesSection.jsx';
import GallerySection from '../components/sections/home/GallerySection.jsx';
import TeamSection from '../components/sections/home/TeamSection.jsx';
import TestimonialsSection from '../components/sections/home/TestimonialsSection.jsx';
// import StatsSection — Achievements section hidden in v2; component file kept for future use.
import NewsletterSection from '../components/sections/home/NewsletterSection.jsx';
import BlogPreviewSection from '../components/sections/home/BlogPreviewSection.jsx';
import CertStripBottom from '../components/sections/home/CertStripBottom.jsx';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutPreview />
      <PartnersStrip />
      <VideoSection />
      <ServicesSection />
      <GallerySection />
      <TeamSection />
      <TestimonialsSection />
      <NewsletterSection />
      <BlogPreviewSection />
      <CertStripBottom />
    </>
  );
}
