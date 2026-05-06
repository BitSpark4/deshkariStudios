import PageHero from '../components/layout/PageHero.jsx';
import { pageHeroImages } from '../constants/gallery';

export default function Blog() {
  return (
    <>
      <PageHero
        title="Blog"
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: 'Blog' }]}
        bgImage={pageHeroImages.blog}
      />
      <section className="container-x py-section">
        <p className="text-body">[Phase 6 — Blog list + sidebar go here.]</p>
      </section>
    </>
  );
}
