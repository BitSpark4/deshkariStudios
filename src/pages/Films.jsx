import PageHero from '../components/layout/PageHero.jsx';
import { pageHeroImages } from '../constants/gallery';

export default function Films() {
  return (
    <>
      <PageHero
        title="Films"
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: 'Films' }]}
        bgImage={pageHeroImages.films}
        accentColor="#6B1A1A"
      />
      <section className="container-x py-section">
        <p className="text-body">[Phase 8 — Authentic Indian Stories on Screen content.]</p>
      </section>
    </>
  );
}
