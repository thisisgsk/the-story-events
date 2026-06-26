import type { Destination, VenueGuide, PlanningGuide, ChecklistSection } from '@/types';

export const destinations: Destination[] = [
  {
    slug: 'udaipur',
    name: 'Udaipur',
    tagline: 'The City of Lakes & Palaces',
    state: 'Rajasthan',
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
    thumbnailImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    description:
      'Udaipur is, without question, India\'s most romantic wedding destination. Built around a chain of shimmering lakes and dominated by the City Palace rising from the Pichola\'s banks, Udaipur offers a backdrop of such cinematic beauty that even the simplest ceremony becomes breathtaking. It is a city of reflection — in water, in stone, and in the eyes of everyone who visits.',
    highlights: [
      'Taj Lake Palace — India\'s most iconic palace hotel, floating on Lake Pichola',
      'City Palace complex — 400 years of Mewar royalty',
      'Devi Garh Fort Palace — boutique luxury in a 18th-century fort',
      'Jag Mandir Island Palace — exclusive island ceremony venue',
      'The Leela Palace — contemporary luxury with palace views',
    ],
    bestSeason: 'October to March (post-monsoon through winter)',
    travelTip: 'Book venues 12–18 months in advance for peak season (Nov–Feb). The city has a small airport with direct flights from Mumbai, Delhi, and Bangalore.',
    venues: ['Taj Lake Palace', 'City Palace', 'Devi Garh', 'Jag Mandir', 'The Leela'],
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    tagline: 'The Pink City — Royal Heritage at Every Turn',
    state: 'Rajasthan',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600&q=80',
    thumbnailImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    description:
      "Jaipur is a city that lives in full colour. The Pink City's rose-hued sandstone architecture, bustling bazaars, and extraordinary concentration of royal palaces and forts make it the ultimate canvas for a grand Indian wedding. From the intimate courtyards of Samode Palace to the sweeping terraces of Amer Fort, Jaipur offers unrivalled heritage grandeur.",
    highlights: [
      'Samode Palace — 475-year-old hand-painted frescoes in an intimate setting',
      'Amer Fort — the most dramatic ceremonial backdrop in India',
      'Rambagh Palace — the former royal residence of the Maharaja of Jaipur',
      'Chomu Palace — a lesser-known gem of extraordinary baroque grandeur',
      'Nahargarh Fort — spectacular panoramic views of the Pink City',
    ],
    bestSeason: 'October to February',
    travelTip: "Jaipur is well-connected by air, rail, and road from all major Indian cities. The city's traffic requires careful guest transportation planning — allow 45-minute buffers for all venue transfers.",
    venues: ['Samode Palace', 'Amer Fort', 'Rambagh Palace', 'Chomu Palace', 'Nahargarh Fort'],
  },
  {
    slug: 'goa',
    name: 'Goa',
    tagline: 'Barefoot Luxury on India\'s Golden Coast',
    state: 'Goa',
    heroImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1600&q=80',
    thumbnailImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
    description:
      "Goa offers something no palace or fort can replicate — the sound of waves, the feel of sand beneath your feet, and a sunset that sets the sky on fire every single evening. India's beach wedding capital, Goa combines world-class luxury resorts with an atmosphere of relaxed, sun-drenched celebration that instantly puts every guest at ease.",
    highlights: [
      'W Goa — contemporary luxury on Vagator\'s dramatic cliffs',
      'Taj Exotica — beachside grandeur in South Goa',
      'The Leela Goa — palatial Mughal-inspired resort on Mobor Beach',
      'Private beach villas — exclusive buyouts for intimate celebrations',
      'Portuguese heritage estates — colonial-era charm in Old Goa',
    ],
    bestSeason: 'November to February (post-monsoon dry season)',
    travelTip: 'Goa Airport (Mopa) and Dabolim are both operational. Book beach permits 3 months in advance. North Goa and South Goa have distinctly different characters — match the vibe to your wedding aesthetic.',
    venues: ['W Goa', 'Taj Exotica', 'The Leela', 'ITC Grand', 'Heritage Villas'],
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    tagline: 'The City of Nizams — Imperial Grandeur',
    state: 'Telangana',
    heroImage: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1600&q=80',
    thumbnailImage: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
    description:
      "Hyderabad's Nizami heritage has produced some of the most opulent architecture in South Asia. Falaknuma Palace — once the private residence of the Nizam — stands as perhaps the grandest wedding venue in India. Combine this with the city's legendary cuisine, its warm hospitality culture, and its superb connectivity, and Hyderabad emerges as the destination of choice for truly grand celebrations.",
    highlights: [
      "Falaknuma Palace — the Nizam's private palace, now a Taj property",
      'Taj Krishna — the most prestigious luxury hotel in South India',
      'Golconda Fort — an extraordinary heritage backdrop for ceremony photography',
      'Novotel HICC — the largest convention centre in South Asia for 1000+ guests',
      'ITC Kohenur — ultra-luxury hotel with contemporary design',
    ],
    bestSeason: 'October to February',
    travelTip: "Hyderabad's international airport is one of India's best connected — direct flights from Singapore, Dubai, London, and all major Indian cities. The city is large; plan guest accommodation close to the wedding venue.",
    venues: ['Falaknuma Palace', 'Taj Krishna', 'ITC Kohenur', 'HICC Convention', 'Golconda Fort'],
  },
  {
    slug: 'kerala',
    name: 'Kerala',
    tagline: 'God\'s Own Country — Lush, Serene, Extraordinary',
    state: 'Kerala',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80',
    thumbnailImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    description:
      "Kerala is nature's most lavish wedding venue. Emerald backwaters, dense coconut groves, mist-wrapped tea estates, and pristine beaches create a landscape of extraordinary variety and beauty. Whether you dream of a traditional ceremony in a heritage temple, a sunset celebration on a private houseboat, or a lush resort wedding surrounded by rainforest, Kerala delivers with an authenticity that no manufactured setting can match.",
    highlights: [
      'Kumarakom Lake Resort — the finest backwater luxury resort in India',
      'Vythiri Resort — tree-house luxury deep in the Wayanad rainforest',
      'CGH Earth Coconut Lagoon — eco-luxury on the Vembanad backwaters',
      'Kalari Kovilakom Palace — a converted palace in Palakkad',
      'Taj Green Cove — a clifftop resort in Kovalam overlooking the sea',
    ],
    bestSeason: 'September to March (post-monsoon through winter)',
    travelTip: "Kerala has three airports — Cochin, Thiruvananthapuram, and Kozhikode. Cochin is the best connected for domestic guests. Allow extra travel time for backwater destinations — the journey by boat is part of the experience.",
    venues: ['Kumarakom Lake Resort', 'Vythiri Resort', 'Coconut Lagoon', 'Kalari Kovilakom', 'Taj Green Cove'],
  },
];

export const venueGuides: VenueGuide[] = [
  {
    slug: 'palace',
    type: 'Palace Wedding Venues',
    title: 'Palace & Heritage Wedding Venues',
    description: "India's royal palaces offer wedding settings of unparalleled grandeur — centuries of history, architectural magnificence, and the unique weight of a space that has hosted emperors and kings. A palace wedding is not simply an event; it is an occasion.",
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
    venues: [
      {
        name: 'Taj Lake Palace',
        location: 'Udaipur, Rajasthan',
        capacity: '500 guests',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
        description: "Floating on Lake Pichola, the Taj Lake Palace is arguably the most romantic hotel in the world. Built in 1746 as the summer palace of Maharana Jagat Singh II, it has hosted royalty, film stars, and world leaders — and now, your wedding.",
        highlights: ['Floating island location', 'Sunset ceremony views', 'Exclusive island access', '83 rooms and suites'],
      },
      {
        name: 'Samode Palace',
        location: 'Jaipur, Rajasthan',
        capacity: '400 guests',
        image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80',
        description: "A 475-year-old palace still owned by the descendants of the Samode royal family. Its hand-painted frescoes, intimate courtyards, and warm hospitality make it the most personal palace wedding venue in Rajasthan.",
        highlights: ['Original royal family ownership', 'Hand-painted fresco rooms', 'Multiple ceremony courtyards', '43 suites and rooms'],
      },
      {
        name: 'Falaknuma Palace',
        location: 'Hyderabad, Telangana',
        capacity: '800 guests',
        image: 'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=800&q=80',
        description: "Once the private residence of the last Nizam of Hyderabad, Falaknuma Palace is India's grandest heritage hotel. Its Italian marble, gilded ballrooms, and 93-room scale make it the definitive venue for a grand Indian wedding.",
        highlights: ['Last Nizam\'s private palace', 'Italian marble throughout', 'Palace buyout available', 'Taj Hotels managed'],
      },
    ],
  },
  {
    slug: 'beach',
    type: 'Beach Wedding Venues',
    title: 'Beach & Coastal Wedding Venues',
    description: 'There is something inherently romantic about the ocean — its vastness, its rhythm, and the way it makes everyone feel both small and liberated. A beach wedding is an invitation to celebrate barefoot, under open sky, with the sound of waves as your soundtrack.',
    heroImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1600&q=80',
    venues: [
      {
        name: 'W Goa',
        location: 'Vagator, North Goa',
        capacity: '600 guests',
        image: 'https://images.unsplash.com/photo-1545033131-485ea67fd7c3?w=800&q=80',
        description: "W Goa sits on the dramatic red-laterite cliffs of Vagator overlooking the Arabian Sea. Its contemporary design, multiple event spaces, and direct beach access make it Goa's premier luxury wedding hotel.",
        highlights: ['Clifftop ocean views', 'Private beach access', 'Contemporary luxury design', 'Full destination wedding services'],
      },
      {
        name: 'Taj Exotica',
        location: 'Benaulim, South Goa',
        capacity: '500 guests',
        image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80',
        description: "Set on the pristine shores of Benaulim Beach in South Goa, Taj Exotica offers a more serene, secluded setting than the busy north. Its 56-acre grounds and private beach create a self-contained paradise for multi-day wedding celebrations.",
        highlights: ['56-acre private grounds', 'Secluded South Goa location', 'Award-winning spa on-site', 'Multiple ceremony lawn options'],
      },
    ],
  },
];

export const planningGuides: PlanningGuide[] = [
  {
    slug: 'destination-wedding-checklist',
    title: 'The Complete Destination Wedding Checklist',
    description: 'Your comprehensive, month-by-month guide to planning the perfect destination wedding.',
    heroImage: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1600&q=80',
    content: [
      {
        heading: '18–12 Months Before',
        body: 'The foundation phase. Decisions made here will define everything that follows.',
        items: [
          'Define your vision, guest count, and budget range',
          'Begin destination research and create a shortlist',
          'Engage a destination wedding planner',
          'Book venue (venues fill 12–18 months in advance)',
          'Set your wedding date',
          'Create preliminary guest list',
        ],
      },
      {
        heading: '12–9 Months Before',
        body: 'The booking phase. Lock in your critical vendors before their calendars fill.',
        items: [
          'Book photographer and cinematographer',
          'Book makeup artist and hair stylist',
          'Send save-the-dates to all guests',
          'Begin visa and travel research for guests',
          'Book accommodation blocks for guests',
          'Begin design and décor concept development',
        ],
      },
      {
        heading: '9–6 Months Before',
        body: 'The detail phase. Build out every layer of the experience.',
        items: [
          'Finalise décor design and order custom pieces',
          'Curate catering menu with chef',
          'Book entertainment — DJ, band, performers',
          'Design and print wedding invitations',
          'Finalise guest travel and transfer logistics',
          'Book honeymoon',
        ],
      },
      {
        heading: '6–3 Months Before',
        body: 'The confirmation phase. Verify, check, and double-check everything.',
        items: [
          'Confirm all vendor bookings in writing',
          'Send formal wedding invitations',
          'Begin collecting RSVPs',
          'Finalise ceremony structure and vows',
          'Arrange legal documentation for ceremony',
          'Design and order wedding favours and stationery',
        ],
      },
      {
        heading: '3 Months–Wedding Week',
        body: 'The final countdown. Trust your team and prepare to celebrate.',
        items: [
          'Final venue walkthrough and layout confirmation',
          'Confirm all guest travel arrangements',
          'Finalise day-of timeline with coordinator',
          'Final fittings for all wedding attire',
          'Deliver all décor and vendor items to venue',
          'Wedding rehearsal and family briefing',
          'Get a great night\'s sleep. Tomorrow is the best day of your life.',
        ],
      },
    ],
  },
];

export const weddingChecklist: ChecklistSection[] = [
  {
    title: '18–12 Months Before',
    items: [
      { id: 'c1', text: 'Define vision, style, and guest count', timeframe: '18 months' },
      { id: 'c2', text: 'Set your overall budget', timeframe: '18 months' },
      { id: 'c3', text: 'Research and shortlist destinations', timeframe: '18 months' },
      { id: 'c4', text: 'Engage a destination wedding planner', timeframe: '15 months' },
      { id: 'c5', text: 'Book your venue', timeframe: '12 months' },
      { id: 'c6', text: 'Set the official wedding date', timeframe: '12 months' },
    ],
  },
  {
    title: '12–9 Months Before',
    items: [
      { id: 'c7', text: 'Book photographer & cinematographer', timeframe: '12 months' },
      { id: 'c8', text: 'Book makeup artist & hair stylist', timeframe: '11 months' },
      { id: 'c9', text: 'Send save-the-dates', timeframe: '10 months' },
      { id: 'c10', text: 'Book accommodation blocks for guests', timeframe: '9 months' },
      { id: 'c11', text: 'Begin décor concept development', timeframe: '9 months' },
    ],
  },
  {
    title: '9–6 Months Before',
    items: [
      { id: 'c12', text: 'Finalise décor design and order custom pieces', timeframe: '9 months' },
      { id: 'c13', text: 'Book entertainment — DJ, live band, performers', timeframe: '8 months' },
      { id: 'c14', text: 'Curate catering menu with chef', timeframe: '7 months' },
      { id: 'c15', text: 'Design and print wedding invitations', timeframe: '6 months' },
      { id: 'c16', text: 'Finalise guest travel logistics', timeframe: '6 months' },
    ],
  },
  {
    title: '6–3 Months Before',
    items: [
      { id: 'c17', text: 'Send formal wedding invitations', timeframe: '6 months' },
      { id: 'c18', text: 'Collect and confirm all RSVPs', timeframe: '4 months' },
      { id: 'c19', text: 'Confirm all vendor bookings in writing', timeframe: '5 months' },
      { id: 'c20', text: 'Arrange legal ceremony documentation', timeframe: '4 months' },
      { id: 'c21', text: 'Order wedding favours and stationery', timeframe: '3 months' },
    ],
  },
  {
    title: 'Final 3 Months',
    items: [
      { id: 'c22', text: 'Final venue walkthrough', timeframe: '6 weeks' },
      { id: 'c23', text: 'Confirm all guest travel arrangements', timeframe: '6 weeks' },
      { id: 'c24', text: 'Finalise day-of timeline with coordinator', timeframe: '4 weeks' },
      { id: 'c25', text: 'Final attire fittings', timeframe: '3 weeks' },
      { id: 'c26', text: 'Wedding rehearsal and family briefing', timeframe: '1–2 days before' },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getVenueGuideBySlug(slug: string): VenueGuide | undefined {
  return venueGuides.find((v) => v.slug === slug);
}

export function getPlanningGuideBySlug(slug: string): PlanningGuide | undefined {
  return planningGuides.find((g) => g.slug === slug);
}
