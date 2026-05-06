import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, MessageCircle } from 'lucide-react';
import Button from '../../ui/Button.jsx';
import { useScrollReveal, staggerVariants } from '../../../hooks/useScrollReveal';
import { blogPosts } from '../../../constants/blog';

export default function BlogList() {
  const { ref, controls } = useScrollReveal();

  return (
    <div ref={ref} className="space-y-12">
      {blogPosts.map((post, i) => (
        <motion.article
          key={post.id}
          initial="hidden"
          animate={controls}
          variants={staggerVariants(i * 0.1)}
          className="border-b border-border pb-12 last:border-b-0"
        >
          <Link
            to={`/blog/${post.slug}`}
            className="group block overflow-hidden rounded-card mb-6"
          >
            <div className="overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
              <img
                src={post.image}
                alt={post.alt || post.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          </Link>

          <h2
            className="font-rubik font-semibold mb-3 transition-colors hover:text-primary"
            style={{ fontSize: 24, lineHeight: 1.3 }}
          >
            <Link to={`/blog/${post.slug}`} className="text-heading hover:text-primary">
              {post.title}
            </Link>
          </h2>

          <ul className="flex flex-wrap items-center gap-4 mb-4 text-xs text-muted font-rubik">
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
          </ul>

          <p className="text-body font-rubik mb-5" style={{ fontSize: 15, lineHeight: 1.75 }}>
            {post.excerpt}
          </p>

          <Button to={`/blog/${post.slug}`} className="!py-2.5 !px-6 !text-xs">
            Read More
          </Button>
        </motion.article>
      ))}
    </div>
  );
}
