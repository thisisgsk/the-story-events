// ─── Destinations: Country → City → Venue ─────────────────────────────────────
// The data model behind /destinations. Content itself lives in @/data/destinations.

export type VenueType = 'palace' | 'mountain' | 'heritage-property' | 'private-estate';

export interface Country {
  /** URL segment, e.g. "india" → /destinations/india */
  slug: string;
  /** Short display name used on tiles and breadcrumbs, e.g. "UAE". */
  name: string;
  /** Long name used in metadata and body copy, e.g. "United Arab Emirates". */
  fullName: string;
  tagline: string;
  description: string;
  /** Landscape cover shown at the top of the country page. */
  image: string;
  /** Portrait tile shown on /destinations and the home page. */
  tileImage: string;
  /** True while the copy/imagery is a stand-in that still needs replacing. */
  placeholder?: boolean;
}

export interface City {
  /** URL segment, unique within its country, e.g. "udaipur". */
  slug: string;
  /** Slug of the parent country. */
  country: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  /** True while the city (and its copy/imagery) is a stand-in to be replaced. */
  placeholder?: boolean;
}

export interface Venue {
  /** URL segment, unique within its city. */
  slug: string;
  name: string;
  /** Slug of the parent city. */
  city: string;
  /** Slug of the parent country. */
  country: string;
  venueType: VenueType;
  shortDescription: string;
  image: string;
  /** Curated rank within its city, 1 (best) to 5. Leave unset for "Others". */
  featuredRank?: 1 | 2 | 3 | 4 | 5;
  /** True while the venue is a stand-in (name, copy and image) to be replaced. */
  placeholder?: boolean;
}
