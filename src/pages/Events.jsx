import PageHero from '../components/layout/PageHero.jsx';
import { pageHeroImages } from '../constants/gallery';

export default function Events() {
  return (
    <>
      <PageHero
        title="Events"
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: 'Events' }]}
        bgImage={pageHeroImages.events}
      />
      <section className="container-x py-section">
        <p className="text-body">[Phase 8 — Live Cultural Experiences content.]</p>
      </section>
    </>
  );
}
