import * as Icons from 'lucide-react';

export default function ServiceCard({ icon, title, description, accentColor }) {
  const Icon = Icons[icon] ?? Icons.Sparkles;
  const color = accentColor || '#C45911';

  return (
    <article className="group text-left">
      <div
        className="inline-flex items-center justify-center mb-5 transition-transform duration-300 group-hover:-translate-y-1"
        style={{ color }}
      >
        <Icon size={40} strokeWidth={1.5} aria-hidden />
      </div>
      <h3 className="text-heading font-rubik font-semibold mb-3" style={{ fontSize: 20 }}>
        {title}
      </h3>
      <p className="text-body font-rubik" style={{ fontSize: 14, lineHeight: 1.75 }}>
        {description}
      </p>
    </article>
  );
}
