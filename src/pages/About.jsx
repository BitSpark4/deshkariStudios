import PageHero from '../components/layout/PageHero.jsx';
import AboutIntro from '../components/sections/about/AboutIntro.jsx';
import CertificatesStrip from '../components/sections/about/CertificatesStrip.jsx';
import AboutServicesSection from '../components/sections/about/AboutServicesSection.jsx';
import VideoCTASection from '../components/sections/about/VideoCTASection.jsx';
import TeamSection from '../components/sections/home/TeamSection.jsx';
import PartnerStripOrange from '../components/sections/about/PartnerStripOrange.jsx';
// import TimelineSection — "Our Journey" section hidden in v2; component file kept for future use.
import CTASection from '../components/sections/about/CTASection.jsx';
import { pageHeroImages } from '../constants/gallery';

export default function About() {
  return (
    <>
      <PageHero
        title="About"
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: 'About' }]}
        bgImage={pageHeroImages.about}
      />
      <AboutIntro />
      <CertificatesStrip />
      <AboutServicesSection />
      <VideoCTASection />
      <TeamSection />
      <PartnerStripOrange />
      <CTASection />
    </>
  );
}
