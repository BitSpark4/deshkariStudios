import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/*
 * Primary CTA button — orange pill (`variant="primary"`)
 * Outline button — `variant="outline"` (transparent on dark) or `"outline-dark"` (saffron on light)
 *
 * Usage:
 *   <Button to="/contact">Get Started</Button>
 *   <Button variant="outline" onClick={...}>Watch Reel</Button>
 *   <Button variant="primary" type="submit">Send Message</Button>
 */
export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  disabled,
  className = '',
  showArrow = true,
  ariaLabel,
}) {
  const cls = [
    variant === 'primary' ? 'btn-primary' : variant === 'outline-dark' ? 'btn-outline btn-outline-dark' : 'btn-outline',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight size={16} aria-hidden />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
