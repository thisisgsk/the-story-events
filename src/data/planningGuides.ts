import type { PlanningGuide, ChecklistSection } from '@/types';

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
          "Get a great night's sleep. Tomorrow is the best day of your life.",
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

export function getPlanningGuideBySlug(slug: string): PlanningGuide | undefined {
  return planningGuides.find((g) => g.slug === slug);
}
