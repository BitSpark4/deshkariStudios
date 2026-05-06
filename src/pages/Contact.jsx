import PageHero from '../components/layout/PageHero.jsx';
import { pageHeroImages } from '../constants/gallery';

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact"
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: 'Contact' }]}
        bgImage={pageHeroImages.contact}
      />
      <section className="container-x py-section">
        <p className="text-body">[Phase 7 — Map, offices, form go here.]</p>
      </section>
    </>
  );
}
