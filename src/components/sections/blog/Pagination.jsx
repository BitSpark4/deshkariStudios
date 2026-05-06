import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ current = 1, total = 3, onChange = () => {} }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  const btn =
    'flex items-center justify-center w-[38px] h-[38px] rounded-full font-rubik font-medium transition-colors';

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-12">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className={`${btn} border border-border text-heading hover:bg-primary hover:text-white hover:border-primary disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-heading disabled:hover:border-border`}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} aria-hidden />
      </button>
      {pages.map((p) => {
        const active = p === current;
        return (
          <button
            key={p}
            type="button"
            onClick={() => onChange(p)}
            className={
              active
                ? `${btn} bg-primary text-white`
                : `${btn} border border-border text-heading hover:bg-primary hover:text-white hover:border-primary`
            }
            aria-current={active ? 'page' : undefined}
            aria-label={`Page ${p}`}
          >
            {p}
          </button>
        );
      })}
      <button
        type="button"
        onClick={() => onChange(Math.min(total, current + 1))}
        disabled={current === total}
        className={`${btn} border border-border text-heading hover:bg-primary hover:text-white hover:border-primary disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-heading disabled:hover:border-border`}
        aria-label="Next page"
      >
        <ChevronRight size={16} aria-hidden />
      </button>
    </nav>
  );
}
