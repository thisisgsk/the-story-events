import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'destination-wedding-planning',
    title: 'Destination Wedding Planning',
    tagline: 'Full Turnkey Management, Anywhere in the World',
    description:
      'Our flagship offering. We take complete ownership of your destination wedding — from the first location scouting call to the final guest farewell. You bring the vision; we bring the team, the expertise, and the relentless attention to detail that transforms a beautiful idea into an unforgettable reality across days, venues, and hundreds of moving pieces.',
    features: [
      'Multi-day event architecture and scheduling',
      'Legal compliance and ceremony documentation support',
      'Weather contingency and crisis management planning',
      'Day-of shadow team for complete couple peace of mind'
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    icon: '✦',
  },
  {
    id: 'venue-discovery',
    title: 'Venue Discovery & Shortlisting',
    tagline: 'Finding Your Perfect Canvas',
    description:
      'The right venue sets the tone for everything that follows. We leverage our extensive network and deep industry knowledge to uncover hidden gems, exclusive private estates, and luxury hotels that align perfectly with your aesthetic, capacity requirements, and budget.',
    features: [
      'Comprehensive venue research and presentation',
      'Accompanied site visits and venue walkthroughs',
      'Contract negotiation and clause review',
      'Space planning and capacity optimization'
    ],
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80',
    icon: '◈',
  },
  {
    id: 'wedding-design-decor',
    title: 'Wedding Design & Décor',
    tagline: 'Artful, Bespoke, Experiential Environments',
    description:
      "Our in-house design team creates wedding environments that are deeply personal and visually extraordinary. From an intimate ceremony in a heritage courtyard to a grand ballroom reception, every space we design tells your story through colour, texture, light, and scent. We never repeat designs.",
    features: [
      'Custom concept development and mood boarding',
      'Floral design — from bouquets to large-scale installations',
      'Lighting design — ambient, architectural, and dramatic',
      'Sustainable décor sourcing and post-event restoration'
    ],
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
    icon: '❋',
  },
  {
    id: 'guest-hospitality',
    title: 'Guest Hospitality Management',
    tagline: 'White-Glove Treatment for Every Attendee',
    description:
      'We believe that true luxury lies in how a guest feels from the moment they arrive. Our dedicated hospitality team manages every aspect of your guests\' journey, ensuring they feel anticipated, welcomed, and deeply cared for throughout the celebrations.',
    features: [
      'RSVP tracking and guest communication',
      'Flight logistics and airport transfer coordination',
      'Welcome hampers and personalized itineraries',
      'Dedicated hospitality desk and 24/7 guest concierge'
    ],
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80',
    icon: '✧',
  },
  {
    id: 'vendor-management',
    title: 'Vendor Management',
    tagline: 'Curating the Best in the Business',
    description:
      'We work exclusively with trusted, premium vendors across the globe. From sourcing Michelin-star caterers to booking world-class entertainment, we handle all vendor communications, negotiations, and briefings, ensuring everyone is aligned with your vision.',
    features: [
      'Vendor sourcing, vetting, and recommendations',
      'Contract review and payment schedule management',
      'Detailed vendor briefing documents',
      'Technical rider fulfillment for entertainment'
    ],
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80',
    icon: '❖',
  },
  {
    id: 'logistics-production',
    title: 'Logistics & Production',
    tagline: 'The Invisible Backbone of Your Wedding',
    description:
      'Great design is nothing without flawless execution. Our production team manages the complex web of logistics required to build temporary structures, power massive lighting rigs, and coordinate multi-vendor load-ins, all while remaining completely invisible to you and your guests.',
    features: [
      'Technical production and stage management',
      'Power distribution and generator planning',
      'Sound engineering and acoustic management',
      'Security detail and crowd flow optimization'
    ],
    image: 'https://images.unsplash.com/photo-1505366518717-59eb8f2864fa?w=1200&q=80',
    icon: '✷',
  }
];
