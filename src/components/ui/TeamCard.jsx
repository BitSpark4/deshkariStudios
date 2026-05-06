import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const iconMap = { facebook: Facebook, twitter: Twitter, instagram: Instagram, linkedin: Linkedin, youtube: Youtube };

export default function TeamCard({ name, role, image, alt, socials = {} }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-card bg-bg-light" style={{ aspectRatio: '3 / 4' }}>
        <img
          src={image}
          alt={alt || name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 grayscale-[60%] group-hover:grayscale-0 group-hover:scale-[1.04]"
        />
        <div className="hover-overlay bg-black/40 flex-row items-end justify-center pb-5 gap-2">
          {Object.entries(socials).map(([k, href]) => {
            const Icon = iconMap[k.toLowerCase()];
            if (!Icon) return null;
            return (
              <a
                key={k}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${name} on ${k}`}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/95 text-heading hover:bg-primary hover:text-white transition-colors"
              >
                <Icon size={14} aria-hidden />
              </a>
            );
          })}
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-heading font-rubik font-semibold" style={{ fontSize: 16 }}>
          {name}
        </h3>
        <p className="text-primary font-rubik mt-1" style={{ fontSize: 13 }}>
          {role}
        </p>
      </div>
    </article>
  );
}
