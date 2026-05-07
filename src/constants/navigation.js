// `visible: false` keeps the route registered but hides it from the navbar render.
// Future expansion: flip Productions / Portfolios to `visible: true` to expose them again.
export const navLinks = [
  { label: 'Home',        path: '/',            visible: true },
  { label: 'About',       path: '/about',       visible: true },
  { label: 'Films',       path: '/films',       visible: true },
  { label: 'Events',      path: '/events',      visible: true },
  { label: 'Blog',        path: '/blog',        visible: true },
  { label: 'Contact',     path: '/contact',     visible: true },
  { label: 'Productions', path: '/productions', visible: false }, // hidden — kept for future
  { label: 'Portfolios',  path: '/portfolio',   visible: false }, // hidden — kept for future
];

export const footerSecondaryLinks = [
  { label: 'About',    path: '/about'    },
  { label: 'Films',    path: '/films'    },
  { label: 'Events',   path: '/events'   },
  { label: 'Contact',  path: '/contact'  },
];

export const footerServices = [
  { label: 'Music Production',     path: '/contact' },
  { label: 'Film Production',      path: '/films'   },
  { label: 'Event Management',     path: '/events'  },
  { label: 'Artist Management',    path: '/contact' },
  { label: 'Brand Films & Audio',  path: '/films'   },
  { label: 'OTT Distribution',     path: '/films'   },
];

export const socials = [
  { label: 'Facebook',  href: 'https://facebook.com',  icon: 'Facebook',  visible: true },
  { label: 'Twitter',   href: 'https://twitter.com',   icon: 'Twitter',   visible: true },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram', visible: true },
  { label: 'YouTube',   href: 'https://youtube.com',   icon: 'Youtube',   visible: false }, // removed per v2
];

export const contactInfo = {
  welcome: 'Welcome to Deshkari Studios.',
  questionLink: { text: 'Have Any Question?', path: '/contact' },
  phone: '+91 7028242253',
  email: 'team@deshkaristudios.com',
  address: {
    line1: 'Flat No - 302, C Wing, Sai Leela Apartment',
    line2: 'Manaji Nagar, Narhe',
    line3: 'Pune, Maharashtra 411041',
  },
};
