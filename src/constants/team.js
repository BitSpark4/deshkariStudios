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
      instagram: 'https://www.instagram.com/aniketrameshlad?igsh=MTBtOWt4N2RkcGl3aQ%3D%3D&utm_source=qr',
      linkedin: 'https://www.linkedin.com/in/aniket-ramesh-lad-773031266',
      facebook: 'https://www.facebook.com/share/1Jxs1mFbGL/?mibextid=wwXIfr',
    },
  },
  {
    name: 'Vishal Bhurke',
    role: 'Co-Founder & Creative Director',
    image:'vishal_bhurke_profile.png',
    alt: 'Portrait of Vishal Bhurke',
    visible: true,
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://www.linkedin.com/in/vishal-bhurke/',
      facebook: 'https://www.facebook.com/share/1FdDAw16Np/',
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
