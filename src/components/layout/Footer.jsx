import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Home as HomeIcon,
  Phone,
  Mail,
} from 'lucide-react';
import {
  contactInfo,
  footerSecondaryLinks,
  footerServices,
  socials,
} from '../../constants/navigation';
import { footerGalleryThumbs } from '../../constants/gallery';

const socialIcons = {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
};

function FooterColHeading({ children }) {
  return (
    <h4
      className="text-primary font-rubik font-semibold mb-5 inline-block"
      style={{ fontSize: 16, paddingBottom: 8, borderBottom: '2px solid #C45911' }}
    >
      {children}
    </h4>
  );
}

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-[#888888] font-rubik">
      <div className="container-x" style={{ paddingTop: 60, paddingBottom: 24 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1 — Brand + social */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 text-white text-xl font-bold">
              <span
                className="inline-block bg-primary"
                style={{ width: 22, height: 22, borderRadius: 4 }}
                aria-hidden
              />
              <span>Deshkari</span>
            </Link>
            <p className="text-sm leading-7 mt-4 max-w-xs">
              A Pune-based creative entertainment company building India’s most
              culturally rooted productions, events and films. Rooted in India.
              Built for the World.
            </p>
            <ul className="flex items-center gap-2 mt-5">
              {socials
                .filter((s) => s.visible)
                .map((s) => {
                  const Icon = socialIcons[s.icon] ?? Facebook;
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="flex items-center justify-center w-9 h-9 rounded-full border border-[#333] text-[#888888] transition-colors hover:text-primary hover:border-primary"
                      >
                        <Icon size={14} aria-hidden />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* Col 2 — Contact info */}
          <div className="lg:col-span-3">
            <FooterColHeading>Contact Info</FooterColHeading>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <HomeIcon size={16} className="text-primary mt-0.5 shrink-0" aria-hidden />
                <span>
                  <span className="block text-white font-semibold mb-1">Address</span>
                  {contactInfo.address.line1}
                  <br />
                  {contactInfo.address.line2}
                  {contactInfo.address.line3 && (
                    <>
                      <br />
                      {contactInfo.address.line3}
                    </>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" aria-hidden />
                <span>
                  <span className="block text-white font-semibold mb-1">Phone Us</span>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-primary">
                    {contactInfo.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" aria-hidden />
                <span>
                  <span className="block text-white font-semibold mb-1">Mail Us</span>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                    {contactInfo.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3 — Services list */}
          <div className="lg:col-span-2">
            <FooterColHeading>Services List</FooterColHeading>
            <ul className="space-y-2 text-sm" style={{ lineHeight: 2 }}>
              {footerServices.map((s) => (
                <li key={s.label}>
                  <Link to={s.path} className="hover:text-primary transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Our Gallery */}
          <div className="lg:col-span-3">
            <FooterColHeading>Our Gallery</FooterColHeading>
            <div className="grid grid-cols-3 gap-1 max-w-[260px]">
              {footerGalleryThumbs.map((src, i) => (
                <Link
                  key={i}
                  to="/portfolio"
                  className="block overflow-hidden rounded-[2px] hover:brightness-110 transition"
                  aria-label={`Gallery thumbnail ${i + 1}`}
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-full h-[60px] object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2a2a2a]">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4 py-5 text-xs text-[#555555]">
          <p>Copyright © 2026 Deshkari Studios. All Rights Reserved.</p>
          <ul className="flex items-center gap-5">
            {footerSecondaryLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
