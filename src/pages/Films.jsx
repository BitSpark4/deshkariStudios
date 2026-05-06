import VerticalPageTemplate from '../components/sections/vertical/VerticalPageTemplate.jsx';

const offerings = [
  {
    icon: 'Film',
    title: 'Documentary Films',
    description:
      'Long-form documentaries on India’s cultural traditions, communities and untold stories.',
  },
  {
    icon: 'Clapperboard',
    title: 'Feature & Short Films',
    description:
      'Original narrative films — features and shorts — written, directed and produced in-house.',
  },
  {
    icon: 'Video',
    title: 'Brand Films & OTT',
    description:
      'Brand films, music videos and series content delivered to OTT, broadcast and theatrical standards.',
  },
];

export default function Films() {
  return (
    <VerticalPageTemplate
      pageKey="films"
      title="Films"
      accentColor="#6B1A1A"
      featuredFilter="films"
      intro={{
        label: 'Authentic Indian Stories on Screen',
        headingLines: ['Films That Honour', 'India’s Cultural Fabric'],
        bodyParagraphs: [
          'Deshkari Films creates documentaries, features and brand films rooted in India’s cultural fabric. Whether we’re profiling a folk tradition in rural Maharashtra or producing a feature documentary for OTT, every film starts with deep research and genuine respect for the source.',
          'We handle the full pipeline — development, production, post-production, colour and final delivery — partnering with India’s most committed cinematographers, editors and composers.',
        ],
        primaryCta: { text: 'Pitch a Film', to: '/contact' },
      }}
      offerings={offerings}
    />
  );
}
