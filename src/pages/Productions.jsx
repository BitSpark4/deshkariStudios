import VerticalPageTemplate from '../components/sections/vertical/VerticalPageTemplate.jsx';

const offerings = [
  {
    icon: 'Mic',
    title: 'Recording & Mixing',
    description:
      'Multi-track recording for classical, folk and contemporary Indian artists, mixed in our Pune studio.',
  },
  {
    icon: 'Music',
    title: 'Album Production',
    description:
      'End-to-end production from arrangement to mastering — singles, EPs and full-length albums.',
  },
  {
    icon: 'Headphones',
    title: 'Mastering & Delivery',
    description:
      'Final mastering tuned for streaming, broadcast and physical release with quality control reports.',
  },
];

export default function Productions() {
  return (
    <VerticalPageTemplate
      pageKey="productions"
      title="Productions"
      accentColor="#B8860B"
      featuredFilter="productions"
      intro={{
        label: 'Music & Album Production',
        headingLines: ['Original Music,', 'Rooted in Indian Soul'],
        bodyParagraphs: [
          'Deshkari Productions is a creative home for classical, folk and contemporary Indian artists. From the first note to the final master, we partner closely with musicians to build records that honour their tradition while sounding modern.',
          'Our Pune studio handles tracking, arrangement, mixing and mastering — and our roster of session players gives you instant access to some of India’s most distinctive voices and instruments.',
        ],
        primaryCta: { text: 'Start a Project', to: '/contact' },
      }}
      offerings={offerings}
    />
  );
}
