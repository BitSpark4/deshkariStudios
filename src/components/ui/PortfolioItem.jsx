import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

export default function PortfolioItem({ item }) {
  return (
    <Link
      to="/portfolio"
      className="group relative block overflow-hidden bg-bg-darker"
      style={{ aspectRatio: '1 / 1' }}
      aria-label={`${item.title} (${item.category})`}
    >
      <img
        src={item.image}
        alt={item.alt || item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="hover-overlay"
        style={{ background: 'rgba(196,89,17,0.85)' }}
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary">
          <Plus size={22} aria-hidden />
        </span>
        <div className="text-white text-center px-4">
          <span className="block uppercase font-rubik font-semibold mb-1" style={{ fontSize: 12, letterSpacing: '0.14em' }}>
            {item.category}
          </span>
          <h3 className="font-rubik font-semibold" style={{ fontSize: 18, lineHeight: 1.3 }}>
            {item.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
