import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import { navLinks } from '../../constants/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Compress on scroll past 80px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll while drawer is open.
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-border transition-all duration-300 ${
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : ''
      }`}
      style={{ height: scrolled ? 60 : 70 }}
    >
      <div className="container-x flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-heading font-bold text-xl font-rubik"
          aria-label="Deshkari Studios — home"
        >
          <span
            className="inline-block bg-primary"
            style={{ width: 22, height: 22, borderRadius: 4 }}
            aria-hidden
          />
          <span>Deshkari</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center" style={{ gap: 32 }}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium font-rubik tracking-nav transition-colors hover:text-primary ${
                    isActive ? 'text-primary font-semibold' : 'text-heading'
                  }`
                }
              >
                {link.label.toUpperCase()}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="text-heading hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search size={16} aria-hidden />
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden text-heading hover:text-primary transition-colors p-2 -mr-2"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/50 lg:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{ top: scrolled ? 60 : 70 }}
            />
            <motion.aside
              key="drawer"
              className="fixed right-0 bottom-0 w-72 max-w-[80vw] bg-white shadow-2xl lg:hidden z-50 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              style={{ top: scrolled ? 60 : 70 }}
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col p-6 gap-1">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `block py-3 px-4 rounded text-sm font-semibold font-rubik tracking-nav border-b border-border transition-colors ${
                          isActive
                            ? 'text-primary'
                            : 'text-heading hover:text-primary'
                        }`
                      }
                    >
                      {link.label.toUpperCase()}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
