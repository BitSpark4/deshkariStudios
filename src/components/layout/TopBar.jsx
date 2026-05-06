import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { contactInfo } from '../../constants/navigation';

export default function TopBar() {
  return (
    <div className="bg-bg-darker text-[#aaaaaa]" style={{ height: 40 }}>
      <div className="container-x flex items-center justify-between h-full text-xs font-rubik">
        <div className="hidden sm:flex items-center gap-1">
          <span>{contactInfo.welcome}</span>
          <Link
            to={contactInfo.questionLink.path}
            className="text-primary hover:underline ml-1"
          >
            {contactInfo.questionLink.text}
          </Link>
        </div>

        <div className="flex items-center gap-6 ml-auto">
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-primary hover:opacity-80"
          >
            <Phone size={14} aria-hidden />
            <span>{contactInfo.phone}</span>
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="hidden md:flex items-center gap-2 text-primary hover:opacity-80"
          >
            <Mail size={14} aria-hidden />
            <span>{contactInfo.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
