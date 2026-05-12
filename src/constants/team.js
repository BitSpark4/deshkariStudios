// v2: only Founder + Co-Founder are rendered on Home & About.
// Heads of Productions/Events kept here as `visible: false` for future expansion.
export const teamMembers = [
  {
    name: 'Aniket Lad',
    role: 'Founder & Managing Director',
    image:'aniket_lad_profile.jpeg',
    alt: 'Portrait of Aniket Lad',
    visible: true,
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    name: 'Priya Joshi',
    role: 'Co-Founder & Creative Director',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop&crop=faces',
    alt: 'Portrait of Priya Joshi',
    visible: true,
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    name: 'Rohan Kulkarni',
    role: 'Head of Productions',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop&crop=faces',
    alt: 'Portrait of Rohan Kulkarni',
    visible: false, // hidden in v2 — future
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
  {
    name: 'Meera Iyer',
    role: 'Head of Events',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop&crop=faces',
    alt: 'Portrait of Meera Iyer',
    visible: false, // hidden in v2 — future
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
    },
  },
];
