import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { recentPosts, blogCategories, blogTags } from '../../../constants/blog';

function SidebarHeading({ children }) {
  return (
    <h3
      className="text-heading font-rubik font-semibold inline-block mb-5"
      style={{ fontSize: 16, paddingBottom: 8, borderBottom: '2px solid #C45911' }}
    >
      {children}
    </h3>
  );
}

const promo = {
  bg: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80&auto=format&fit=crop',
  tag: 'Featured',
  title: 'Deshkari Pune\nClassical Festival',
  cta: 'Register Now',
  href: '/contact',
};

export default function Sidebar() {
  const [q, setQ] = useState('');

  return (
    <aside className="space-y-10">
      {/* Search */}
      <div>
        <SidebarHeading>Search</SidebarHeading>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex"
          aria-label="Search blog"
        >
          <label htmlFor="blog-search" className="sr-only-label">Search</label>
          <input
            id="blog-search"
            type="search"
            placeholder="Search…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="flex-1 border border-border px-4 py-3 font-rubik text-sm outline-none focus:border-primary"
            style={{ borderRadius: 0, borderRight: 'none' }}
          />
          <button
            type="submit"
            className="px-4 bg-heading text-white hover:bg-primary transition-colors"
            aria-label="Search"
          >
            <Search size={16} aria-hidden />
          </button>
        </form>
      </div>

      {/* Recent posts */}
      <div>
        <SidebarHeading>Recent Post</SidebarHeading>
        <ul className="space-y-4">
          {recentPosts.map((p) => (
            <li key={p.id} className="flex gap-3">
              <Link to={`/blog/${p.slug}`} className="shrink-0 w-16 h-16 overflow-hidden rounded">
                <img
                  src={p.thumb}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </Link>
              <div>
                <Link
                  to={`/blog/${p.slug}`}
                  className="block font-rubik font-medium text-heading hover:text-primary transition-colors line-clamp-2"
                  style={{ fontSize: 13, lineHeight: 1.4 }}
                >
                  {p.title}
                </Link>
                <span className="block text-primary uppercase font-rubik mt-1" style={{ fontSize: 11, letterSpacing: '0.1em' }}>
                  {p.date}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <SidebarHeading>Categories</SidebarHeading>
        <ul>
          {blogCategories.map((c) => (
            <li
              key={c.name}
              className="flex items-center justify-between py-2.5 border-b border-[#f5f5f5] font-rubik text-sm"
            >
              <Link to="/blog" className="text-body hover:text-primary transition-colors">
                {c.name}
              </Link>
              <span className="text-muted">{c.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Social profiles */}
      <div>
        <SidebarHeading>Social Profiles</SidebarHeading>
        <ul className="flex items-center gap-2">
          {[
            { Icon: Facebook, label: 'Facebook' },
            { Icon: Twitter, label: 'Twitter' },
            { Icon: Instagram, label: 'Instagram' },
            { Icon: Youtube, label: 'Youtube' },
          ].map(({ Icon, label }) => (
            <li key={label}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-heading text-white hover:bg-primary transition-colors"
              >
                <Icon size={14} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div>
        <SidebarHeading>Tags</SidebarHeading>
        <ul className="flex flex-wrap gap-2">
          {blogTags.map((t) => (
            <li key={t}>
              <button
                type="button"
                className="border border-border text-body font-rubik font-medium uppercase transition-colors hover:bg-primary hover:text-white hover:border-primary"
                style={{ padding: '6px 14px', fontSize: 11, letterSpacing: '0.08em', borderRadius: 3 }}
              >
                {t}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Promo box */}
      <div
        className="relative overflow-hidden rounded-card"
        style={{
          backgroundImage: `url(${promo.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 220,
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(196,89,17,0.78)' }} aria-hidden />
        <div className="relative h-full flex flex-col items-center justify-center text-center p-6 text-white">
          <span className="uppercase font-rubik font-semibold mb-2" style={{ fontSize: 11, letterSpacing: '0.14em' }}>
            {promo.tag}
          </span>
          <p className="font-rubik font-bold whitespace-pre-line mb-4" style={{ fontSize: 22, lineHeight: 1.2 }}>
            {promo.title}
          </p>
          <Link
            to={promo.href}
            className="inline-block border border-white text-white font-rubik font-medium hover:bg-white hover:text-primary transition-colors"
            style={{ padding: '6px 18px', fontSize: 12 }}
          >
            {promo.cta}
          </Link>
        </div>
      </div>
    </aside>
  );
}
