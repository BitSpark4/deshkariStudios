import { portfolioCategories } from '../../../constants/portfolio';

export default function PortfolioFilter({ active, onChange }) {
  return (
    <div className="flex justify-center mb-12">
      <ul
        className="inline-flex flex-wrap items-center justify-center gap-1 p-1.5 border border-border bg-white"
        style={{ borderRadius: 6 }}
        role="tablist"
        aria-label="Filter portfolio by category"
      >
        {portfolioCategories.map((cat) => {
          const isActive = active === cat.id;
          return (
            <li key={cat.id}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(cat.id)}
                className="font-rubik font-medium transition-all uppercase tracking-nav"
                style={{
                  padding: '10px 22px',
                  fontSize: 13,
                  borderRadius: 4,
                  background: isActive ? '#C45911' : 'transparent',
                  color: isActive ? '#ffffff' : '#696969',
                  letterSpacing: '0.08em',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#C45911';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#696969';
                }}
              >
                {cat.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
