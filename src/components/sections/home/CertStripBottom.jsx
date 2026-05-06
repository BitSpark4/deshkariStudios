import * as Icons from 'lucide-react';
import { certIcons } from '../../../constants/partners';

export default function CertStripBottom() {
  return (
    <section style={{ background: '#1c1c1c', paddingTop: 40, paddingBottom: 40 }}>
      <div className="container-x">
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-white/70">
          {certIcons.map((c) => {
            const Icon = Icons[c.icon] ?? Icons.Award;
            return (
              <li
                key={c.name}
                className="flex items-center gap-2 hover:text-white transition-colors"
                title={c.name}
              >
                <Icon size={26} strokeWidth={1.5} aria-hidden />
                <span className="font-rubik font-semibold text-sm hidden md:inline">{c.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
