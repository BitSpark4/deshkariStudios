import PageHero from '../components/layout/PageHero.jsx';
import PortfolioGrid from '../components/sections/portfolio/PortfolioGrid.jsx';
import CTASection from '../components/sections/about/CTASection.jsx';
import { pageHeroImages } from '../constants/gallery';

export default function Portfolio() {
  return (
    <>
      <PageHero
        title="Portfolios"
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: 'Portfolios' }]}
        bgImage={pageHeroImages.portfolio}
      />
      <PortfolioGrid heading={false} />
      <CTASection decorative />
    </>
  );
}
