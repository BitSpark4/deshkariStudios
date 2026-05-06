import PageHero from '../components/layout/PageHero.jsx';
import { pageHeroImages } from '../constants/gallery';

export default function Portfolio() {
  return (
    <>
      <PageHero
        title="Portfolios"
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: 'Portfolios' }]}
        bgImage={pageHeroImages.portfolio}
      />
      <section className="container-x py-section">
        <p className="text-body">[Phase 5 — Portfolio filter + grid go here.]</p>
      </section>
    </>
  );
}
