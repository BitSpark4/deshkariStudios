// 3 blog posts shown on Blog list + Home blog preview.
export const blogPosts = [
  {
    id: 1,
    slug: 'pune-classical-music-festival-2025',
    title: 'Deshkari Pune Classical Music Festival 2025 — What to Expect',
    excerpt:
      'A weekend of tabla, sitar, vocal masters and folk fusion across three stages. Here’s the full lineup, venue map and how to grab early-bird tickets before they vanish.',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80&auto=format&fit=crop',
    alt: 'Classical music festival stage',
    date: 'July 25, 2025',
    author: 'Deshkari',
    comments: 0,
    category: 'Events',
  },
  {
    id: 2,
    slug: 'behind-the-scenes-heritage-documentary',
    title: 'Behind the Scenes: How We Produce an Indian Heritage Documentary',
    excerpt:
      'From location scouting in rural Maharashtra to colour-grading at the studio — a candid look at the year-long workflow behind our latest documentary.',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80&auto=format&fit=crop',
    alt: 'Documentary film camera on set',
    date: 'June 14, 2025',
    author: 'Deshkari',
    comments: 4,
    category: 'Films',
  },
  {
    id: 3,
    slug: 'why-live-music-events-matter',
    title: 'Why Live Music Events Matter More Than Ever for Indian Culture',
    excerpt:
      'Streaming made music ubiquitous, but live performance is where culture is transmitted, generation to generation. Here’s why we keep building stages, not screens.',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80&auto=format&fit=crop',
    alt: 'Live music concert audience',
    date: 'May 30, 2025',
    author: 'Deshkari',
    comments: 12,
    category: 'Productions',
  },
];

export const recentPosts = blogPosts.map((p) => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  date: p.date.toUpperCase(),
  thumb: p.image,
}));

export const blogCategories = [
  { name: 'Productions', count: 5 },
  { name: 'Events', count: 8 },
  { name: 'Films', count: 6 },
  { name: 'Classical Music', count: 4 },
  { name: 'Documentaries', count: 3 },
];

export const blogTags = [
  'Music',
  'Film',
  'Events',
  'Classical',
  'Festival',
  'Concert',
  'Documentary',
  'India',
  'Pune',
  'Studio',
];
