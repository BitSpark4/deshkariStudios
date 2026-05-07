// 2x2 stats grid on Home page (Achievements section).
// Kept here for future use — Achievements section is hidden from Home for now.
export const stats = [
  { icon: 'Music',    number: '120+', label: 'Albums Produced'        },
  { icon: 'Calendar', number: '85+',  label: 'Events Organised'       },
  { icon: 'Film',     number: '40+',  label: 'Films & Documentaries'  },
  { icon: 'Award',    number: '35+',  label: 'Awards & Recognition'   },
];

// Inline stats row shown under the About preview button.
// v2: only Awards Received is rendered. Others kept hidden for future use.
export const aboutInlineStats = [
  { number: '12+',  label: 'Years Experience',   visible: false },
  { number: '150+', label: 'Projects Delivered', visible: false },
  { number: '12+',  label: 'Awards Received',    visible: true  },
];
