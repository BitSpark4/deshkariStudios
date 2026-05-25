// Categories shown as portfolio filter tabs (first = "Show All").
export const portfolioCategories = [
  { id: 'all', label: 'Show All' },
  { id: 'productions', label: 'Productions' },
  { id: 'events', label: 'Events' },
  { id: 'films', label: 'Films' },
  { id: 'classical', label: 'Classical' },
  { id: 'documentary', label: 'Documentary' },
];

// 6 items in default 3×2 grid. Each must belong to one category id above.
export const portfolioItems = [
  // {
  //   id: 1,
  //   title: 'Classical Fusion Session',
  //   category: 'productions',
  //   image:
  //     'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&auto=format&fit=crop',
  //   alt: 'Recording session with sitar and microphones',
  // },
  {
    id: 2,
    title: 'Mumbai Folk Akhyan',
    category: 'events',
    image:
      'folk-akhyan-1.webp',
    alt: 'Crowd at outdoor music festival',
  },
  {
    id: 3,
    title: 'Deshkari Short Film (2024)',
    category: 'films',
    image:'deshkar film.jpg',
    alt: 'Film By Sanjay Daiv',
  },
  // {
  //   id: 4,
  //   title: 'Tabla & Sitar Concert',
  //   category: 'classical',
  //   image:
  //     'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80&auto=format&fit=crop',
  //   alt: 'Classical Indian instrument performance',
  // },
  // {
  //   id: 5,
  //   title: 'Folk Traditions of Maharashtra',
  //   category: 'documentary',
  //   image:
  //     'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80&auto=format&fit=crop',
  //   alt: 'Documentary film camera setup',
  // },
  // {
  //   id: 6,
  //   title: 'Cultural Festival — Diwali',
  //   category: 'events',
  //   image:
  //     'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80&auto=format&fit=crop',
  //   alt: 'Cultural festival lights and decoration',
  // },
];
