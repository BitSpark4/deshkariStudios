import { Link } from 'react-router-dom';
import { Calendar, User, MessageCircle } from 'lucide-react';

/*
 * Variants:
 *   variant="default" — light card, used on Blog list page
 *   variant="dark"    — used on Home blog preview (saffron bg) and other dark contexts
 */
export default function BlogCard({ post, variant = 'default' }) {
  const isDark = variant === 'dark';
  const titleColor = isDark ? 'text-white' : 'text-heading group-hover:text-primary';
  const metaColor = isDark ? 'text-white/80' : 'text-muted';
  const excerptColor = isDark ? 'text-white/85' : 'text-body';

  return (
    <article className="group">
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-card">
        <div className="overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
          <img
            src={post.image}
            alt={post.alt || post.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className={`mt-5 ${isDark ? 'text-white' : ''}`}>
        <ul className={`flex flex-wrap items-center gap-4 mb-3 text-xs font-rubik ${metaColor}`}>
          <li className="flex items-center gap-2">
            <Calendar size={12} className={isDark ? 'text-white/80' : 'text-primary'} aria-hidden />
            <span>{post.date}</span>
          </li>
          <li className="flex items-center gap-2">
            <User size={12} className={isDark ? 'text-white/80' : 'text-primary'} aria-hidden />
            <span>{post.author}</span>
          </li>
          <li className="flex items-center gap-2">
            <MessageCircle size={12} className={isDark ? 'text-white/80' : 'text-primary'} aria-hidden />
            <span>{post.comments} Comments</span>
          </li>
        </ul>
        <h3 className={`font-rubik font-semibold transition-colors ${titleColor}`} style={{ fontSize: 20, lineHeight: 1.35 }}>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        {post.excerpt && (
          <p className={`mt-3 font-rubik ${excerptColor}`} style={{ fontSize: 14, lineHeight: 1.75 }}>
            {post.excerpt}
          </p>
        )}
      </div>
    </article>
  );
}
