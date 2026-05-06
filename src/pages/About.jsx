import PageHero from '../components/layout/PageHero.jsx';
import { pageHeroImages } from '../constants/gallery';

export default function About() {
  return (
    <>
      <PageHero
        title="About"
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: 'About' }]}
        bgImage={pageHeroImages.about}
      />
      <section className="container-x py-section">
        <p className="text-body">[Phase 4 — About sections will fill this in.]</p>
      </section>
    </>
  );
}
