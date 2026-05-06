import { Link } from 'react-router-dom';
import { defaultPageHeroImage } from '../../constants/gallery';

/*
 * Reusable banner used on every page except Home (which has its own hero slider).
 *
 * Props:
 *   title       — H1 text shown centred
 *   breadcrumb  — array of { label, path }; last item is the current page (no link)
 *   bgImage     — optional override; defaults to a warm team-room image
 *   accentColor — optional hex; overrides the saffron used in breadcrumb arrow + last crumb
 *   height      — optional CSS height (default 320px)
 */
export default function PageHero({
  title,
  breadcrumb = [{ label: 'Deshkari Studios', path: '/' }, { label: title }],
  bgImage = defaultPageHeroImage,
  accentColor = '#C45911',
  height = 320,
}) {
  return (
    <header
      className="relative flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        height,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden />
      <div className="relative container-x">
        <h1
          className="font-rubik font-bold text-white"
          style={{ fontSize: 48, lineHeight: 1.1 }}
        >
          {title}
        </h1>
        <nav
          aria-label="Breadcrumb"
          className="mt-4 text-sm font-rubik flex items-center justify-center flex-wrap gap-2"
        >
          {breadcrumb.map((crumb, i) => {
            const isLast = i === breadcrumb.length - 1;
            return (
              <span key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                {i > 0 && (
                  <span style={{ color: accentColor }} aria-hidden>
                    »
                  </span>
                )}
                {isLast || !crumb.path ? (
                  <span style={{ color: accentColor }}>{crumb.label}</span>
                ) : (
                  <Link to={crumb.path} className="text-white hover:underline">
                    {crumb.label}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
