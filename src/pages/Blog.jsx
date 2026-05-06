import { useState } from 'react';
import PageHero from '../components/layout/PageHero.jsx';
import BlogList from '../components/sections/blog/BlogList.jsx';
import Sidebar from '../components/sections/blog/Sidebar.jsx';
import Pagination from '../components/sections/blog/Pagination.jsx';
import { pageHeroImages } from '../constants/gallery';

export default function Blog() {
  const [page, setPage] = useState(1);

  return (
    <>
      <PageHero
        title="Blog"
        breadcrumb={[{ label: 'Deshkari Studios', path: '/' }, { label: 'Blog' }]}
        bgImage={pageHeroImages.blog}
      />
      <section className="bg-white py-section">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <BlogList />
              <Pagination current={page} total={3} onChange={setPage} />
            </div>
            <div className="lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
