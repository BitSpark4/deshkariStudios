import { useParams, Link } from 'react-router-dom';
import { Calendar, User, MessageCircle, Tag } from 'lucide-react';
import PageHero from '../components/layout/PageHero.jsx';
import Sidebar from '../components/sections/blog/Sidebar.jsx';
import Button from '../components/ui/Button.jsx';
import { blogPosts } from '../constants/blog';
import { pageHeroImages } from '../constants/gallery';

export default function BlogSingle() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug) ?? blogPosts[0];

  return (
    <>
      <PageHero
        title={post.title.split(' — ')[0]}
        breadcrumb={[
          { label: 'Deshkari Studios', path: '/' },
          { label: 'Blog', path: '/blog' },
          { label: post.category },
        ]}
        bgImage={post.image}
      />
      <section className="bg-white py-section">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <article className="lg:col-span-8">
              <div className="overflow-hidden rounded-card mb-8" style={{ aspectRatio: '16 / 9' }}>
                <img src={post.image} alt={post.alt} className="w-full h-full object-cover" />
              </div>

              <ul className="flex flex-wrap items-center gap-4 mb-6 text-xs text-muted font-rubik">
                <li className="flex items-center gap-2">
                  <Calendar size={12} className="text-primary" aria-hidden />
                  <span>{post.date}</span>
                </li>
                <li className="flex items-center gap-2">
                  <User size={12} className="text-primary" aria-hidden />
                  <span>{post.author}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle size={12} className="text-primary" aria-hidden />
                  <span>{post.comments} Comments</span>
                </li>
                <li className="flex items-center gap-2">
                  <Tag size={12} className="text-primary" aria-hidden />
                  <span>{post.category}</span>
                </li>
              </ul>

              <h1
                className="text-heading font-rubik font-bold mb-6"
                style={{ fontSize: 32, lineHeight: 1.25 }}
              >
                {post.title}
              </h1>

              <div className="prose-deshkari space-y-5 text-body font-rubik" style={{ fontSize: 16, lineHeight: 1.85 }}>
                <p>{post.excerpt}</p>
                <p>
                  At Deshkari Studios, every project starts the same way: a long conversation about
                  what story is being told, who it's for, and how it should sound and look. Our
                  Pune base lets us draw on the deep classical and folk traditions of Maharashtra,
                  while our partnerships across India and abroad let us deliver to global standards.
                </p>
                <p>
                  This post is a first look — we'll be publishing more in the coming weeks as the
                  project evolves. If you're a journalist, programmer, partner or curious reader,
                  reach out at <a className="text-primary hover:underline" href="mailto:hello@deshkari.in">hello@deshkari.in</a>.
                </p>
                <blockquote
                  className="border-l-4 border-primary pl-6 italic text-heading my-8"
                  style={{ fontSize: 18 }}
                >
                  "Tell India's stories on India's terms — with world-class production values and a
                  deep respect for the source." — Deshkari editorial principle.
                </blockquote>
                <p>
                  Stay tuned for more from Productions, Events and Films. We're just getting started.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
                <Link to="/blog" className="text-primary font-rubik font-semibold hover:underline">
                  ← Back to all posts
                </Link>
                <Button to="/contact">Work With Us</Button>
              </div>
            </article>

            <div className="lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
