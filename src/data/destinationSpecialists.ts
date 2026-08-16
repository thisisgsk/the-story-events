import { getDestinationBySlug } from './locations';

// ─── Featured Destination Cards ────────────────────────────────────────────────
export interface FeaturedDestinationCard {
  slug: string;
  name: string;
  badge: string;
  subtitle: string;
  image: string;
  href: string;
}

const badgeOverrides: Record<string, string> = {
  goa: 'Beach Wedding',
  jaipur: 'Rajasthan',
  udaipur: 'Rajasthan',
  hyderabad: 'Telangana',
  kerala: 'Kerala Backwaters',
};

const indiaCardSlugs = ['goa', 'jaipur', 'udaipur', 'hyderabad', 'kerala'] as const;

export const featuredDestinationCards: FeaturedDestinationCard[] = [
  ...indiaCardSlugs.map((slug) => {
    const dest = getDestinationBySlug(slug)!;
    return {
      slug: dest.slug,
      name: dest.name,
      badge: badgeOverrides[slug],
      subtitle: dest.tagline,
      image: dest.heroImage,
      href: `/contact?destination=${encodeURIComponent(dest.name)}`,
    };
  }),
  {
    slug: 'thailand',
    name: 'Thailand',
    badge: 'International',
    subtitle: 'Phuket & Hua Hin · Tropical Paradise Beyond Borders',
    image: 'https://images.unsplash.com/photo-1724142773252-67d11f690bb4?w=1600&q=80',
    href: '/contact?destination=Thailand',
  },
];

// ─── Wedding Planning Timeline ─────────────────────────────────────────────────
export interface TimelineMilestone {
  period: string;
  items: string[];
}

export const planningTimeline: TimelineMilestone[] = [
  {
    period: '10–18 Months Prior',
    items: [
      'Discovery call to map your vision, guest count, and budget',
      'Shortlist and site-visit your top 2–3 destinations',
      'Lock your destination, venue, and wedding date',
    ],
  },
  {
    period: '9–10 Months Prior',
    items: [
      'Confirm your core vendor team — photography, décor, catering',
      'Send save-the-dates with travel information for guests',
      'Begin bridal outfit and trousseau planning',
    ],
  },
  {
    period: '6–9 Months Prior',
    items: [
      'Finalise décor concept, colour palette, and mood boards',
      'Book guest accommodation blocks at the destination',
      'Design invitations and wedding stationery',
    ],
  },
  {
    period: '4–6 Months Prior',
    items: [
      'Send formal invitations and open RSVP tracking',
      'Confirm legal and documentation requirements for the destination',
      'Plan guest travel, transfers, and welcome experiences',
    ],
  },
  {
    period: '2–3 Months Prior',
    items: [
      'Finalise the full multi-day event timeline with every vendor',
      'Complete menu tastings and final décor walkthroughs',
      'Confirm guest counts and seating arrangements',
    ],
  },
  {
    period: '2 Weeks–1 Month Prior',
    items: [
      'Final on-site walkthrough and vendor briefing',
      'Settle final payments and vendor confirmations in writing',
      'Prepare the day-of coordination pack for our on-ground team',
    ],
  },
  {
    period: 'Wedding Week',
    items: [
      'Our team arrives on-site before you do',
      'Rehearsal, guest welcome, and final checks',
      'You arrive to a wedding that is already running itself',
    ],
  },
];

// ─── Frequently Asked Questions ────────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer: string;
}

export const specialistFaqs: FaqItem[] = [
  {
    question: 'How far in advance should we start planning a destination wedding?',
    answer:
      'We recommend reaching out 10–18 months before your date, especially for palace venues and peak-season bookings (Oct–Feb in India, Nov–Mar in Thailand). That said, we have planned beautiful weddings on shorter timelines — talk to us about your date and we’ll tell you honestly what’s possible.',
  },
  {
    question: 'Which destinations do you specialise in?',
    answer:
      'We have deep, on-the-ground expertise across Udaipur, Jaipur, Goa, Hyderabad, and Kerala, and we plan international destination weddings in Thailand for couples who want to celebrate beyond India’s borders. If your dream destination isn’t listed, ask us — our network extends further than our brochure.',
  },
  {
    question: 'Do you handle guest travel, visas, and accommodation?',
    answer:
      'Yes — completely. From accommodation blocks and airport transfers to visa guidance for international destinations, we manage every logistic so your guests arrive relaxed, not road-weary.',
  },
  {
    question: 'What exactly does a destination specialist do that a local planner can’t?',
    answer:
      'A destination specialist has already vetted the venues, knows the local vendor networks, understands regional legal and documentation requirements, and has run weddings on the ground at that specific location. That experience is what turns a beautiful idea into a wedding that runs without a single visible hiccup.',
  },
  {
    question: 'Can you help with legal marriage documentation abroad?',
    answer:
      'Yes. For international destinations like Thailand, we guide you through the local legal and documentation requirements alongside your ceremony planning, so paperwork never becomes a source of stress.',
  },
  {
    question: 'What is the typical budget range for a destination wedding?',
    answer:
      'It varies widely by destination, guest count, and vision — we’ve planned intimate celebrations and grand multi-day affairs. Share your vision with us and we’ll give you an honest, itemised sense of what it takes to bring it to life.',
  },
];
