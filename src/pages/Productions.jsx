import PageHero from '../components/layout/PageHero.jsx';
import { pageHeroImages } from '../constants/gallery';

export default function Productions() {
  return (
    <>
      <PageHero
        title="Productions"
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: 'Productions' }]}
        bgImage={pageHeroImages.productions}
        accentColor="#B8860B"
      />
      <section className="container-x py-section">
        <p className="text-body">[Phase 8 — Music & Album Production content.]</p>
      </section>
    </>
  );
}
