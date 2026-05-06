import PageHero from '../components/layout/PageHero.jsx';
import MapSection from '../components/sections/contact/MapSection.jsx';
import OfficeCards from '../components/sections/contact/OfficeCards.jsx';
import ContactForm from '../components/sections/contact/ContactForm.jsx';
import { pageHeroImages } from '../constants/gallery';

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact"
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: 'Contact' }]}
        bgImage={pageHeroImages.contact}
      />
      <MapSection />
      <OfficeCards />
      <ContactForm />
    </>
  );
}
