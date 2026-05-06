/*
 * Small uppercase label that appears above every H2 heading.
 *
 * Usage:
 *   <SectionLabel>Our Services</SectionLabel>
 *   <SectionLabel accent>Read Our Latest</SectionLabel>      // adds 36×2 underline
 *   <SectionLabel color="#B8860B">Productions</SectionLabel>  // gold for vertical pages
 *
 * `color` overrides the default saffron — useful for the Productions/Films verticals.
 */
export default function SectionLabel({
  children,
  accent = false,
  color,
  className = '',
  as: Tag = 'span',
  centered = false,
}) {
  const cls = [
    'section-label',
    accent ? 'section-label-accent' : '',
    centered ? 'mx-auto text-center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style = color ? { color } : undefined;

  return (
    <Tag className={cls} style={style}>
      {children}
    </Tag>
  );
}
