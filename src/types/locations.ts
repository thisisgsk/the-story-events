// ─── Locations: shared vocabulary ─────────────────────────────────────────────
// One data model backing both browsing modes on /locations. Destinations are the
// cities we operate in (plus aspirational ones we plan on request); Venues are
// the individual properties, in or outside our operating footprint.

export type Region =
  | 'North India'
  | 'South India'
  | 'West India'
  | 'Southeast Asia'
  | 'Middle East'
  | 'Southern Europe'
  | 'Indian Ocean';

/** 1 = most accessible, 4 = ultra-luxury. Rendered as ₹ glyphs. */
export type PriceTier = 1 | 2 | 3 | 4;

export type Season = 'winter' | 'spring' | 'summer' | 'monsoon' | 'autumn';

export type VenueType =
  | 'palace'
  | 'beach'
  | 'resort'
  | 'villa'
  | 'private-estate'
  | 'garden'
  | 'rooftop'
  | 'ceremonial'
  | 'heritage-hotel'
  | 'waterfront';

export type StyleTag =
  | 'royal'
  | 'luxury'
  | 'traditional'
  | 'modern'
  | 'rustic'
  | 'boho'
  | 'tropical'
  | 'minimal'
  | 'romantic';

export type SettingType = 'indoor' | 'outdoor' | 'both';

export type Amenity =
  | 'on-site-accommodation'
  | 'in-house-catering'
  | 'bridal-suite'
  | 'spa'
  | 'pool'
  | 'beach-access'
  | 'helipad'
  | 'exclusive-buyout'
  | 'av-production'
  | 'valet-parking';

// ─── Entities ─────────────────────────────────────────────────────────────────

export interface Destination {
  slug: string;
  name: string;
  /** Short label used under the name on cards, e.g. "Rajasthan, India". */
  locationLabel: string;
  country: string;
  region: Region;
  /** True for our core destinations, where we have on-ground teams. */
  isOperating: boolean;
  heroImage: string;
  thumbnailImage: string;
  tagline: string;
  shortDescription: string;
  /** Long-form editorial copy, shown on the destination masthead. */
  description: string;
  highlights: string[];
  bestSeason: string;
  seasons: Season[];
  climateNote: string;
  travelTip: string;
  costTier: PriceTier;
  featured: boolean;
}

export interface Venue {
  slug: string;
  name: string;
  /** Slug of the parent destination, or null for a property we list standalone. */
  destinationSlug: string | null;
  locationLabel: string;
  country: string;
  region: Region;
  /**
   * True when the venue sits inside one of our operating destinations. False
   * flips the card badge and CTA to "available by request" — we will plan it,
   * but without the same on-ground operational support.
   */
  inNetwork: boolean;
  venueTypes: VenueType[];
  capacity: { min: number; max: number };
  priceTier: PriceTier;
  setting: SettingType;
  styleTags: StyleTag[];
  amenities: Amenity[];
  seasons: Season[];
  image: string;
  gallery: string[];
  shortDescription: string;
  /** Extra expectation-setting shown on out-of-network venues only. */
  leadTimeNote?: string;
  featured: boolean;
}

// ─── Browsing / filtering ─────────────────────────────────────────────────────

export type BrowseView = 'destinations' | 'venues';

export type NetworkFilter = 'all' | 'in-network' | 'on-request';

export type SortKey =
  | 'featured'
  | 'alphabetical'
  | 'price-asc'
  | 'price-desc'
  | 'capacity-desc';

export interface CapacityRange {
  min: number;
  max: number;
}

export interface FilterState {
  destinations: string[];
  regions: Region[];
  countries: string[];
  venueTypes: VenueType[];
  capacity: CapacityRange;
  priceTiers: PriceTier[];
  styleTags: StyleTag[];
  settings: SettingType[];
  seasons: Season[];
  amenities: Amenity[];
  network: NetworkFilter;
}

/** Every multi-select key on FilterState — used for generic chip/toggle handling. */
export type MultiFilterKey =
  | 'destinations'
  | 'regions'
  | 'countries'
  | 'venueTypes'
  | 'priceTiers'
  | 'styleTags'
  | 'settings'
  | 'seasons'
  | 'amenities';

export interface AppliedChip {
  /** Stable identity for animation keys. */
  id: string;
  label: string;
  group: MultiFilterKey | 'capacity' | 'network';
  value?: string | number;
}
