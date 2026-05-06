import * as Icons from 'lucide-react';

export default function StatBox({ icon, number, label }) {
  const Icon = Icons[icon] ?? Icons.Award;
  return (
    <div className="flex flex-col items-start gap-3 p-6 border border-border rounded-card bg-white">
      <Icon size={32} strokeWidth={1.5} className="text-primary" aria-hidden />
      <div className="text-primary font-rubik font-bold leading-none" style={{ fontSize: 36 }}>
        {number}
      </div>
      <div className="text-body font-rubik" style={{ fontSize: 13 }}>
        {label}
      </div>
    </div>
  );
}
