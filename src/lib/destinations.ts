import { cities, countries, venues } from '@/data/destinations';
import type { City, Country, Venue } from '@/types/destinations';

export { SITE_URL, cityPath, countryPath, destinationsPath, venuePath } from '@/lib/destinationPaths';
export { VENUE_TYPES, VENUE_TYPE_LABELS } from '@/lib/venueTypes';

/** How many curated venues the city page shows in its prominent "Top" section. */
export const TOP_VENUE_COUNT = 5;

// ─── Lookups ──────────────────────────────────────────────────────────────────

export const getCountry = (slug: string): Country | undefined => countries.find((c) => c.slug === slug);

export const getCity = (countrySlug: string, citySlug: string): City | undefined =>
  cities.find((c) => c.country === countrySlug && c.slug === citySlug);

export const getVenue = (countrySlug: string, citySlug: string, venueSlug: string): Venue | undefined =>
  venues.find((v) => v.country === countrySlug && v.city === citySlug && v.slug === venueSlug);

export const citiesOf = (countrySlug: string): City[] => cities.filter((c) => c.country === countrySlug);

export const venuesOf = (countrySlug: string, citySlug: string): Venue[] =>
  venues.filter((v) => v.country === countrySlug && v.city === citySlug);

// ─── Curation ─────────────────────────────────────────────────────────────────

/**
 * Splits a city's venues into the curated "Top" section and the rest.
 * Venues are ordered by featuredRank (unranked ones keep their data order after
 * the ranked ones); the first TOP_VENUE_COUNT become "top", the remainder "others".
 */
export function splitTopAndOthers(cityVenues: Venue[]): { top: Venue[]; others: Venue[] } {
  const ordered = cityVenues
    .map((venue, index) => ({ venue, index }))
    .sort((a, b) => {
      const ra = a.venue.featuredRank ?? Number.POSITIVE_INFINITY;
      const rb = b.venue.featuredRank ?? Number.POSITIVE_INFINITY;
      return ra - rb || a.index - b.index;
    })
    .map((entry) => entry.venue);

  return { top: ordered.slice(0, TOP_VENUE_COUNT), others: ordered.slice(TOP_VENUE_COUNT) };
}
