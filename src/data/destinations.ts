import type { City, Country, Venue } from '@/types/destinations';

// ─────────────────────────────────────────────────────────────────────────────
// DESTINATIONS CONTENT — the single source for /destinations (Country → City → Venue).
// Edit this file to change what the site shows; nothing here is hard-coded in components.
//
//   • URLs are built from the slugs:  /destinations/<country>/<city>/<venue>
//   • A venue's `city` / `country` fields hold the parent SLUGS (not display names).
//   • `featuredRank` (1–5) curates the "Top 5" on a city page. Venues without a rank (or
//     beyond the first five) appear under "Others". Cities with ≤ 5 venues have no "Others".
//   • `placeholder: true` marks stand-in content (names, copy, images) that still needs
//     replacing. Remove the flag once an entry holds real, verified information.
//   • Venue types are palace | mountain | heritage-property | private-estate (see lib/venueTypes.ts).
//   • Image files live in /public/images/destinations — see docs/image-credits.md.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Countries ────────────────────────────────────────────────────────────────
// Exactly five, in display order. Cover = wide hero image; tile = portrait image.

export const countries: Country[] = [
  {
    slug: 'india',
    name: 'India',
    fullName: 'India',
    tagline: 'Palaces, backwaters and beaches',
    description:
      'From lakeside palaces and hill forts to coastal villas and backwater estates, India offers a wide range of settings for a destination wedding. Choose a city below to see its venues.',
    image: '/images/destinations/india/india-cover.jpg',
    tileImage: '/images/destinations/india/india-tile.jpg',
  },
  {
    slug: 'uae',
    name: 'UAE',
    fullName: 'United Arab Emirates',
    tagline: 'Destination weddings in the UAE',
    description:
      'Placeholder copy: replace this with a short introduction to wedding destinations in the UAE. Choose a city below to see its venues.',
    image: '/images/destinations/uae/uae-cover.jpg',
    tileImage: '/images/destinations/uae/uae-tile.jpg',
    placeholder: true,
  },
  {
    slug: 'sri-lanka',
    name: 'Sri Lanka',
    fullName: 'Sri Lanka',
    tagline: 'Destination weddings in Sri Lanka',
    description:
      'Placeholder copy: replace this with a short introduction to wedding destinations in Sri Lanka. Choose a city below to see its venues.',
    image: '/images/destinations/sri-lanka/sri-lanka-cover.jpg',
    tileImage: '/images/destinations/sri-lanka/sri-lanka-tile.jpg',
    placeholder: true,
  },
  {
    slug: 'thailand',
    name: 'Thailand',
    fullName: 'Thailand',
    tagline: 'Destination weddings in Thailand',
    description:
      'Placeholder copy: replace this with a short introduction to wedding destinations in Thailand. Choose a city below to see its venues.',
    image: '/images/destinations/thailand/thailand-cover.jpg',
    tileImage: '/images/destinations/thailand/thailand-tile.jpg',
    placeholder: true,
  },
  {
    slug: 'vietnam',
    name: 'Vietnam',
    fullName: 'Vietnam',
    tagline: 'Destination weddings in Vietnam',
    description:
      'Placeholder copy: replace this with a short introduction to wedding destinations in Vietnam. Choose a city below to see its venues.',
    image: '/images/destinations/vietnam/vietnam-cover.jpg',
    tileImage: '/images/destinations/vietnam/vietnam-tile.jpg',
    placeholder: true,
  },
];

// ─── Cities ───────────────────────────────────────────────────────────────────
// India's four cities are real; every other city below is a PLACEHOLDER to replace.

export const cities: City[] = [
  {
    slug: 'kerala',
    country: 'india',
    name: 'Kerala',
    tagline: 'Backwaters, hills and heritage homes',
    description:
      'Kerala is known for its backwaters, hill country and heritage homes. Browse the venues we can arrange here.',
    image: '/images/destinations/india/kerala/kerala-cover.jpg',
  },
  {
    slug: 'udaipur',
    country: 'india',
    name: 'Udaipur',
    tagline: 'The City of Lakes',
    description:
      'Udaipur is known for its lakes and palaces. Browse the palace, heritage and estate venues we can arrange here.',
    image: '/images/destinations/india/udaipur/udaipur-cover.jpg',
  },
  {
    slug: 'jaipur',
    country: 'india',
    name: 'Jaipur',
    tagline: 'The Pink City',
    description:
      'Jaipur is known for its forts, palaces and heritage architecture. Browse the venues we can arrange here.',
    image: '/images/destinations/india/jaipur/jaipur-cover.jpg',
  },
  {
    slug: 'goa',
    country: 'india',
    name: 'Goa',
    tagline: 'Beaches and Portuguese-era heritage',
    description:
      'Goa is known for its coastline and Portuguese-era heritage. Browse the villas, estates and heritage properties we can arrange here.',
    image: '/images/destinations/india/goa/goa-cover.jpg',
  },
  // ── PLACEHOLDER cities (UAE, Sri Lanka, Thailand, Vietnam) — replace with your own list ──
  {
    slug: 'dubai',
    country: 'uae',
    name: 'Dubai',
    tagline: 'Placeholder city',
    description:
      'Placeholder copy: replace this with an introduction to wedding venues in Dubai.',
    image: '/images/destinations/uae/dubai/dubai-cover.jpg',
    placeholder: true,
  },
  {
    slug: 'abu-dhabi',
    country: 'uae',
    name: 'Abu Dhabi',
    tagline: 'Placeholder city',
    description:
      'Placeholder copy: replace this with an introduction to wedding venues in Abu Dhabi.',
    image: '/images/destinations/uae/abu-dhabi/abu-dhabi-cover.jpg',
    placeholder: true,
  },
  {
    slug: 'colombo',
    country: 'sri-lanka',
    name: 'Colombo',
    tagline: 'Placeholder city',
    description:
      'Placeholder copy: replace this with an introduction to wedding venues in Colombo.',
    image: '/images/destinations/sri-lanka/colombo/colombo-cover.jpg',
    placeholder: true,
  },
  {
    slug: 'galle',
    country: 'sri-lanka',
    name: 'Galle',
    tagline: 'Placeholder city',
    description:
      'Placeholder copy: replace this with an introduction to wedding venues in Galle.',
    image: '/images/destinations/sri-lanka/galle/galle-cover.jpg',
    placeholder: true,
  },
  {
    slug: 'phuket',
    country: 'thailand',
    name: 'Phuket',
    tagline: 'Placeholder city',
    description:
      'Placeholder copy: replace this with an introduction to wedding venues in Phuket.',
    image: '/images/destinations/thailand/phuket/phuket-cover.jpg',
    placeholder: true,
  },
  {
    slug: 'krabi',
    country: 'thailand',
    name: 'Krabi',
    tagline: 'Placeholder city',
    description:
      'Placeholder copy: replace this with an introduction to wedding venues in Krabi.',
    image: '/images/destinations/thailand/krabi/krabi-cover.jpg',
    placeholder: true,
  },
  {
    slug: 'hoi-an',
    country: 'vietnam',
    name: 'Hoi An',
    tagline: 'Placeholder city',
    description:
      'Placeholder copy: replace this with an introduction to wedding venues in Hoi An.',
    image: '/images/destinations/vietnam/hoi-an/hoi-an-cover.jpg',
    placeholder: true,
  },
  {
    slug: 'da-nang',
    country: 'vietnam',
    name: 'Da Nang',
    tagline: 'Placeholder city',
    description:
      'Placeholder copy: replace this with an introduction to wedding venues in Da Nang.',
    image: '/images/destinations/vietnam/da-nang/da-nang-cover.jpg',
    placeholder: true,
  },
];

// ─── Venues ───────────────────────────────────────────────────────────────────
// ALL venues below are PLACEHOLDERS: generic names, generic copy, illustrative stock photos.
// They contain no claims about capacity, price, awards or availability. Replace each entry
// (name, venueType, shortDescription, image, featuredRank) with real data and drop the flag.

export const venues: Venue[] = [
  // ── Kerala (india) ─────────────────────────────────────────────────
  {
    slug: 'venue-1',
    name: 'Kerala Venue 1',
    city: 'kerala',
    country: 'india',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Kerala. Replace with the venue\'s real description.',
    image: '/images/destinations/india/kerala/kerala-venue-1.jpg',
    featuredRank: 1,
    placeholder: true,
  },
  {
    slug: 'venue-2',
    name: 'Kerala Venue 2',
    city: 'kerala',
    country: 'india',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Kerala. Replace with the venue\'s real description.',
    image: '/images/destinations/india/kerala/kerala-venue-2.jpg',
    featuredRank: 2,
    placeholder: true,
  },
  {
    slug: 'venue-3',
    name: 'Kerala Venue 3',
    city: 'kerala',
    country: 'india',
    venueType: 'mountain',
    shortDescription:
      'Placeholder listing for a mountain venue in Kerala. Replace with the venue\'s real description.',
    image: '/images/destinations/india/kerala/kerala-venue-3.jpg',
    featuredRank: 3,
    placeholder: true,
  },
  {
    slug: 'venue-4',
    name: 'Kerala Venue 4',
    city: 'kerala',
    country: 'india',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Kerala. Replace with the venue\'s real description.',
    image: '/images/destinations/india/kerala/kerala-venue-4.jpg',
    featuredRank: 4,
    placeholder: true,
  },
  {
    slug: 'venue-5',
    name: 'Kerala Venue 5',
    city: 'kerala',
    country: 'india',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Kerala. Replace with the venue\'s real description.',
    image: '/images/destinations/india/kerala/kerala-venue-5.jpg',
    featuredRank: 5,
    placeholder: true,
  },
  {
    slug: 'venue-6',
    name: 'Kerala Venue 6',
    city: 'kerala',
    country: 'india',
    venueType: 'mountain',
    shortDescription:
      'Placeholder listing for a mountain venue in Kerala. Replace with the venue\'s real description.',
    image: '/images/destinations/india/kerala/kerala-venue-6.jpg',
    placeholder: true,
  },
  {
    slug: 'venue-7',
    name: 'Kerala Venue 7',
    city: 'kerala',
    country: 'india',
    venueType: 'palace',
    shortDescription:
      'Placeholder listing for a palace venue in Kerala. Replace with the venue\'s real description.',
    image: '/images/destinations/india/kerala/kerala-venue-7.jpg',
    placeholder: true,
  },
  // ── Udaipur (india) ────────────────────────────────────────────────
  {
    slug: 'venue-1',
    name: 'Udaipur Venue 1',
    city: 'udaipur',
    country: 'india',
    venueType: 'palace',
    shortDescription:
      'Placeholder listing for a palace venue in Udaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/udaipur/udaipur-venue-1.jpg',
    featuredRank: 1,
    placeholder: true,
  },
  {
    slug: 'venue-2',
    name: 'Udaipur Venue 2',
    city: 'udaipur',
    country: 'india',
    venueType: 'palace',
    shortDescription:
      'Placeholder listing for a palace venue in Udaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/udaipur/udaipur-venue-2.jpg',
    featuredRank: 2,
    placeholder: true,
  },
  {
    slug: 'venue-3',
    name: 'Udaipur Venue 3',
    city: 'udaipur',
    country: 'india',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Udaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/udaipur/udaipur-venue-3.jpg',
    featuredRank: 3,
    placeholder: true,
  },
  {
    slug: 'venue-4',
    name: 'Udaipur Venue 4',
    city: 'udaipur',
    country: 'india',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Udaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/udaipur/udaipur-venue-4.jpg',
    featuredRank: 4,
    placeholder: true,
  },
  {
    slug: 'venue-5',
    name: 'Udaipur Venue 5',
    city: 'udaipur',
    country: 'india',
    venueType: 'mountain',
    shortDescription:
      'Placeholder listing for a mountain venue in Udaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/udaipur/udaipur-venue-5.jpg',
    featuredRank: 5,
    placeholder: true,
  },
  {
    slug: 'venue-6',
    name: 'Udaipur Venue 6',
    city: 'udaipur',
    country: 'india',
    venueType: 'palace',
    shortDescription:
      'Placeholder listing for a palace venue in Udaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/udaipur/udaipur-venue-6.jpg',
    placeholder: true,
  },
  {
    slug: 'venue-7',
    name: 'Udaipur Venue 7',
    city: 'udaipur',
    country: 'india',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Udaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/udaipur/udaipur-venue-7.jpg',
    placeholder: true,
  },
  // ── Jaipur (india) ─────────────────────────────────────────────────
  {
    slug: 'venue-1',
    name: 'Jaipur Venue 1',
    city: 'jaipur',
    country: 'india',
    venueType: 'palace',
    shortDescription:
      'Placeholder listing for a palace venue in Jaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/jaipur/jaipur-venue-1.jpg',
    featuredRank: 1,
    placeholder: true,
  },
  {
    slug: 'venue-2',
    name: 'Jaipur Venue 2',
    city: 'jaipur',
    country: 'india',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Jaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/jaipur/jaipur-venue-2.jpg',
    featuredRank: 2,
    placeholder: true,
  },
  {
    slug: 'venue-3',
    name: 'Jaipur Venue 3',
    city: 'jaipur',
    country: 'india',
    venueType: 'palace',
    shortDescription:
      'Placeholder listing for a palace venue in Jaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/jaipur/jaipur-venue-3.jpg',
    featuredRank: 3,
    placeholder: true,
  },
  {
    slug: 'venue-4',
    name: 'Jaipur Venue 4',
    city: 'jaipur',
    country: 'india',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Jaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/jaipur/jaipur-venue-4.jpg',
    featuredRank: 4,
    placeholder: true,
  },
  {
    slug: 'venue-5',
    name: 'Jaipur Venue 5',
    city: 'jaipur',
    country: 'india',
    venueType: 'mountain',
    shortDescription:
      'Placeholder listing for a mountain venue in Jaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/jaipur/jaipur-venue-5.jpg',
    featuredRank: 5,
    placeholder: true,
  },
  {
    slug: 'venue-6',
    name: 'Jaipur Venue 6',
    city: 'jaipur',
    country: 'india',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Jaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/jaipur/jaipur-venue-6.jpg',
    placeholder: true,
  },
  {
    slug: 'venue-7',
    name: 'Jaipur Venue 7',
    city: 'jaipur',
    country: 'india',
    venueType: 'palace',
    shortDescription:
      'Placeholder listing for a palace venue in Jaipur. Replace with the venue\'s real description.',
    image: '/images/destinations/india/jaipur/jaipur-venue-7.jpg',
    placeholder: true,
  },
  // ── Goa (india) ────────────────────────────────────────────────────
  {
    slug: 'venue-1',
    name: 'Goa Venue 1',
    city: 'goa',
    country: 'india',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Goa. Replace with the venue\'s real description.',
    image: '/images/destinations/india/goa/goa-venue-1.jpg',
    featuredRank: 1,
    placeholder: true,
  },
  {
    slug: 'venue-2',
    name: 'Goa Venue 2',
    city: 'goa',
    country: 'india',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Goa. Replace with the venue\'s real description.',
    image: '/images/destinations/india/goa/goa-venue-2.jpg',
    featuredRank: 2,
    placeholder: true,
  },
  {
    slug: 'venue-3',
    name: 'Goa Venue 3',
    city: 'goa',
    country: 'india',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Goa. Replace with the venue\'s real description.',
    image: '/images/destinations/india/goa/goa-venue-3.jpg',
    featuredRank: 3,
    placeholder: true,
  },
  {
    slug: 'venue-4',
    name: 'Goa Venue 4',
    city: 'goa',
    country: 'india',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Goa. Replace with the venue\'s real description.',
    image: '/images/destinations/india/goa/goa-venue-4.jpg',
    featuredRank: 4,
    placeholder: true,
  },
  {
    slug: 'venue-5',
    name: 'Goa Venue 5',
    city: 'goa',
    country: 'india',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Goa. Replace with the venue\'s real description.',
    image: '/images/destinations/india/goa/goa-venue-5.jpg',
    featuredRank: 5,
    placeholder: true,
  },
  {
    slug: 'venue-6',
    name: 'Goa Venue 6',
    city: 'goa',
    country: 'india',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Goa. Replace with the venue\'s real description.',
    image: '/images/destinations/india/goa/goa-venue-6.jpg',
    placeholder: true,
  },
  {
    slug: 'venue-7',
    name: 'Goa Venue 7',
    city: 'goa',
    country: 'india',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Goa. Replace with the venue\'s real description.',
    image: '/images/destinations/india/goa/goa-venue-7.jpg',
    placeholder: true,
  },
  // ── Dubai (uae) ────────────────────────────────────────────────────
  {
    slug: 'venue-1',
    name: 'Dubai Venue 1',
    city: 'dubai',
    country: 'uae',
    venueType: 'palace',
    shortDescription:
      'Placeholder listing for a palace venue in Dubai. Replace with the venue\'s real description.',
    image: '/images/destinations/uae/dubai/dubai-venue-1.jpg',
    featuredRank: 1,
    placeholder: true,
  },
  {
    slug: 'venue-2',
    name: 'Dubai Venue 2',
    city: 'dubai',
    country: 'uae',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Dubai. Replace with the venue\'s real description.',
    image: '/images/destinations/uae/dubai/dubai-venue-2.jpg',
    featuredRank: 2,
    placeholder: true,
  },
  // ── Abu Dhabi (uae) ────────────────────────────────────────────────
  {
    slug: 'venue-1',
    name: 'Abu Dhabi Venue 1',
    city: 'abu-dhabi',
    country: 'uae',
    venueType: 'palace',
    shortDescription:
      'Placeholder listing for a palace venue in Abu Dhabi. Replace with the venue\'s real description.',
    image: '/images/destinations/uae/abu-dhabi/abu-dhabi-venue-1.jpg',
    featuredRank: 1,
    placeholder: true,
  },
  {
    slug: 'venue-2',
    name: 'Abu Dhabi Venue 2',
    city: 'abu-dhabi',
    country: 'uae',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Abu Dhabi. Replace with the venue\'s real description.',
    image: '/images/destinations/uae/abu-dhabi/abu-dhabi-venue-2.jpg',
    featuredRank: 2,
    placeholder: true,
  },
  // ── Colombo (sri-lanka) ────────────────────────────────────────────
  {
    slug: 'venue-1',
    name: 'Colombo Venue 1',
    city: 'colombo',
    country: 'sri-lanka',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Colombo. Replace with the venue\'s real description.',
    image: '/images/destinations/sri-lanka/colombo/colombo-venue-1.jpg',
    featuredRank: 1,
    placeholder: true,
  },
  {
    slug: 'venue-2',
    name: 'Colombo Venue 2',
    city: 'colombo',
    country: 'sri-lanka',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Colombo. Replace with the venue\'s real description.',
    image: '/images/destinations/sri-lanka/colombo/colombo-venue-2.jpg',
    featuredRank: 2,
    placeholder: true,
  },
  // ── Galle (sri-lanka) ──────────────────────────────────────────────
  {
    slug: 'venue-1',
    name: 'Galle Venue 1',
    city: 'galle',
    country: 'sri-lanka',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Galle. Replace with the venue\'s real description.',
    image: '/images/destinations/sri-lanka/galle/galle-venue-1.jpg',
    featuredRank: 1,
    placeholder: true,
  },
  {
    slug: 'venue-2',
    name: 'Galle Venue 2',
    city: 'galle',
    country: 'sri-lanka',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Galle. Replace with the venue\'s real description.',
    image: '/images/destinations/sri-lanka/galle/galle-venue-2.jpg',
    featuredRank: 2,
    placeholder: true,
  },
  // ── Phuket (thailand) ──────────────────────────────────────────────
  {
    slug: 'venue-1',
    name: 'Phuket Venue 1',
    city: 'phuket',
    country: 'thailand',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Phuket. Replace with the venue\'s real description.',
    image: '/images/destinations/thailand/phuket/phuket-venue-1.jpg',
    featuredRank: 1,
    placeholder: true,
  },
  {
    slug: 'venue-2',
    name: 'Phuket Venue 2',
    city: 'phuket',
    country: 'thailand',
    venueType: 'mountain',
    shortDescription:
      'Placeholder listing for a mountain venue in Phuket. Replace with the venue\'s real description.',
    image: '/images/destinations/thailand/phuket/phuket-venue-2.jpg',
    featuredRank: 2,
    placeholder: true,
  },
  // ── Krabi (thailand) ───────────────────────────────────────────────
  {
    slug: 'venue-1',
    name: 'Krabi Venue 1',
    city: 'krabi',
    country: 'thailand',
    venueType: 'mountain',
    shortDescription:
      'Placeholder listing for a mountain venue in Krabi. Replace with the venue\'s real description.',
    image: '/images/destinations/thailand/krabi/krabi-venue-1.jpg',
    featuredRank: 1,
    placeholder: true,
  },
  {
    slug: 'venue-2',
    name: 'Krabi Venue 2',
    city: 'krabi',
    country: 'thailand',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Krabi. Replace with the venue\'s real description.',
    image: '/images/destinations/thailand/krabi/krabi-venue-2.jpg',
    featuredRank: 2,
    placeholder: true,
  },
  // ── Hoi An (vietnam) ───────────────────────────────────────────────
  {
    slug: 'venue-1',
    name: 'Hoi An Venue 1',
    city: 'hoi-an',
    country: 'vietnam',
    venueType: 'heritage-property',
    shortDescription:
      'Placeholder listing for a heritage property venue in Hoi An. Replace with the venue\'s real description.',
    image: '/images/destinations/vietnam/hoi-an/hoi-an-venue-1.jpg',
    featuredRank: 1,
    placeholder: true,
  },
  {
    slug: 'venue-2',
    name: 'Hoi An Venue 2',
    city: 'hoi-an',
    country: 'vietnam',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Hoi An. Replace with the venue\'s real description.',
    image: '/images/destinations/vietnam/hoi-an/hoi-an-venue-2.jpg',
    featuredRank: 2,
    placeholder: true,
  },
  // ── Da Nang (vietnam) ──────────────────────────────────────────────
  {
    slug: 'venue-1',
    name: 'Da Nang Venue 1',
    city: 'da-nang',
    country: 'vietnam',
    venueType: 'mountain',
    shortDescription:
      'Placeholder listing for a mountain venue in Da Nang. Replace with the venue\'s real description.',
    image: '/images/destinations/vietnam/da-nang/da-nang-venue-1.jpg',
    featuredRank: 1,
    placeholder: true,
  },
  {
    slug: 'venue-2',
    name: 'Da Nang Venue 2',
    city: 'da-nang',
    country: 'vietnam',
    venueType: 'private-estate',
    shortDescription:
      'Placeholder listing for a private estate venue in Da Nang. Replace with the venue\'s real description.',
    image: '/images/destinations/vietnam/da-nang/da-nang-venue-2.jpg',
    featuredRank: 2,
    placeholder: true,
  },
];
