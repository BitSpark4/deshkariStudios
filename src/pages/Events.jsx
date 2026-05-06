import VerticalPageTemplate from '../components/sections/vertical/VerticalPageTemplate.jsx';

const offerings = [
  {
    icon: 'Calendar',
    title: 'Festival Production',
    description:
      'Multi-day cultural festivals — venue, stage, sound, lighting, hospitality, ticketing and audience flow.',
  },
  {
    icon: 'Mic2',
    title: 'Concerts & Tours',
    description:
      'Single-night concerts and multi-city tours for classical, folk and contemporary artists across India.',
  },
  {
    icon: 'Sparkles',
    title: 'Brand & Cultural Events',
    description:
      'Curated experiences for corporate clients, cultural institutions and government partners.',
  },
];

export default function Events() {
  return (
    <VerticalPageTemplate
      pageKey="events"
      title="Events"
      accentColor="#C45911"
      featuredFilter="events"
      intro={{
        label: 'Live Cultural Experiences',
        headingLines: ['Live Music & Cultural', 'Events That Move Audiences'],
        bodyParagraphs: [
          'Streaming made music ubiquitous, but live performance is where culture is transmitted. Deshkari Events designs and produces concerts, festivals and cultural gatherings — from intimate baithaks to 8,000-attendee festivals.',
          'Our team handles every layer: artist relations, venue and tech, hospitality, ticketing, partnerships and audience experience. We sweat the details so artists and audiences can be fully present.',
        ],
        primaryCta: { text: 'Plan an Event', to: '/contact' },
      }}
      offerings={offerings}
    />
  );
}
