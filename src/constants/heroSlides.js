// Home page hero slider — 3 slides, dark photo + 60% overlay.
// Image swap-point: replace url with /images/hero/hero-N.jpg when local assets ready.
export const heroSlides = [
  {
    id: 1,
    label: 'Real Film Studio',
    title: ['We Make Films &', 'Events That', 'People Love'],
    subtitle:
      'Deshkari Studios produces original Indian music, live cultural events and powerful Indian stories through film.',
    primaryCta: { text: 'Get Started', to: '/contact' },
    secondaryCta: { text: 'Watch Our Reel', to: '/portfolio' },
    image:
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80&auto=format&fit=crop',
    alt: 'Concert with stage lighting',
  },
  {
    id: 2,
    label: 'Behind the Scenes',
    title: ['Telling India’s', 'Authentic Stories', 'On Screen'],
    subtitle:
      'From documentary to feature, our films honour the cultural heritage of India and reach audiences across the world.',
    primaryCta: { text: 'Our Films', to: '/films' },
    secondaryCta: { text: 'Watch Our Reel', to: '/portfolio' },
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80&auto=format&fit=crop',
    alt: 'Film production behind the scenes',
  },
  {
    id: 3,
    label: 'Studio Sessions',
    title: ['Original Music', 'Rooted in', 'Indian Soul'],
    subtitle:
      'A creative home for classical, folk and contemporary Indian artists — with world-class production values.',
    primaryCta: { text: 'Our Productions', to: '/productions' },
    secondaryCta: { text: 'Listen Now', to: '/portfolio' },
    image:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&q=80&auto=format&fit=crop',
    alt: 'Studio recording session with microphones',
  },
];
