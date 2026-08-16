import type {
  AppliedChip,
  Destination,
  FilterState,
  MultiFilterKey,
  SortKey,
  Venue,
} from '@/types/locations';
import {
  AMENITY_LABELS,
  CAPACITY_BOUNDS,
  PRICE_TIER_LABELS,
  SEASON_SHORT_LABELS,
  SETTING_LABELS,
  STYLE_LABELS,
  VENUE_TYPE_LABELS,
  getDestinationBySlug,
} from '@/data/locations';

export const EMPTY_FILTERS: FilterState = {
  destinations: [],
  regions: [],
  countries: [],
  venueTypes: [],
  capacity: { min: CAPACITY_BOUNDS.min, max: CAPACITY_BOUNDS.max },
  priceTiers: [],
  styleTags: [],
  settings: [],
  seasons: [],
  amenities: [],
  network: 'all',
};

export const isCapacityActive = (f: FilterState) =>
  f.capacity.min > CAPACITY_BOUNDS.min || f.capacity.max < CAPACITY_BOUNDS.max;

/** Filters that only make sense against a Venue record. */
const venueOnlyKeys = ['venueTypes', 'styleTags', 'settings', 'amenities'] as const;

export const hasVenueLevelFilters = (f: FilterState) =>
  venueOnlyKeys.some((k) => f[k].length > 0) || isCapacityActive(f);

export const countActiveFilters = (f: FilterState) => {
  const multi: MultiFilterKey[] = [
    'destinations',
    'regions',
    'countries',
    'venueTypes',
    'priceTiers',
    'styleTags',
    'settings',
    'seasons',
    'amenities',
  ];
  return (
    multi.reduce((n, key) => n + f[key].length, 0) +
    (isCapacityActive(f) ? 1 : 0) +
    (f.network !== 'all' ? 1 : 0)
  );
};

// ─── Predicates ───────────────────────────────────────────────────────────────

const matchesNetworkVenue = (v: Venue, f: FilterState) =>
  f.network === 'all' || (f.network === 'in-network' ? v.inNetwork : !v.inNetwork);

/**
 * A venue offering both indoor and outdoor space satisfies a request for either,
 * so `both` venues always survive a setting filter.
 */
const matchesSetting = (v: Venue, f: FilterState) =>
  f.settings.length === 0 || f.settings.includes(v.setting) || v.setting === 'both';

const matchesCapacity = (v: Venue, f: FilterState) =>
  v.capacity.max >= f.capacity.min && v.capacity.min <= f.capacity.max;

/** Venue-specific criteria only — used both directly and to qualify destinations. */
const matchesVenueTraits = (v: Venue, f: FilterState) =>
  (f.venueTypes.length === 0 || f.venueTypes.some((t) => v.venueTypes.includes(t))) &&
  (f.styleTags.length === 0 || f.styleTags.some((t) => v.styleTags.includes(t))) &&
  // Amenities are cumulative: every box ticked must be satisfied.
  (f.amenities.length === 0 || f.amenities.every((a) => v.amenities.includes(a))) &&
  matchesSetting(v, f) &&
  matchesCapacity(v, f);

export const matchesVenue = (v: Venue, f: FilterState) =>
  matchesNetworkVenue(v, f) &&
  (f.destinations.length === 0 || (v.destinationSlug !== null && f.destinations.includes(v.destinationSlug))) &&
  (f.regions.length === 0 || f.regions.includes(v.region)) &&
  (f.countries.length === 0 || f.countries.includes(v.country)) &&
  (f.priceTiers.length === 0 || f.priceTiers.includes(v.priceTier)) &&
  (f.seasons.length === 0 || f.seasons.some((s) => v.seasons.includes(s))) &&
  matchesVenueTraits(v, f);

export const matchesDestination = (d: Destination, f: FilterState, allVenues: Venue[]) => {
  const ownMatch =
    (f.network === 'all' || (f.network === 'in-network' ? d.isOperating : !d.isOperating)) &&
    (f.destinations.length === 0 || f.destinations.includes(d.slug)) &&
    (f.regions.length === 0 || f.regions.includes(d.region)) &&
    (f.countries.length === 0 || f.countries.includes(d.country)) &&
    (f.priceTiers.length === 0 || f.priceTiers.includes(d.costTier)) &&
    (f.seasons.length === 0 || f.seasons.some((s) => d.seasons.includes(s)));

  if (!ownMatch) return false;
  if (!hasVenueLevelFilters(f)) return true;

  // Venue-level filters still narrow the destination list: a destination survives
  // only if at least one of its properties could actually host the wedding.
  return allVenues.some((v) => v.destinationSlug === d.slug && matchesVenueTraits(v, f));
};

// ─── Filtering ────────────────────────────────────────────────────────────────

export const filterVenues = (allVenues: Venue[], f: FilterState) =>
  allVenues.filter((v) => matchesVenue(v, f));

export const filterDestinations = (allDestinations: Destination[], allVenues: Venue[], f: FilterState) =>
  allDestinations.filter((d) => matchesDestination(d, f, allVenues));

// ─── Sorting ──────────────────────────────────────────────────────────────────

const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name);

export const sortVenues = (list: Venue[], key: SortKey): Venue[] => {
  const out = [...list];
  switch (key) {
    case 'alphabetical':
      return out.sort(byName);
    case 'price-asc':
      return out.sort((a, b) => a.priceTier - b.priceTier || byName(a, b));
    case 'price-desc':
      return out.sort((a, b) => b.priceTier - a.priceTier || byName(a, b));
    case 'capacity-desc':
      return out.sort((a, b) => b.capacity.max - a.capacity.max || byName(a, b));
    case 'featured':
    default:
      return out.sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured) ||
          Number(b.inNetwork) - Number(a.inNetwork) ||
          byName(a, b),
      );
  }
};

export const sortDestinations = (
  list: Destination[],
  key: SortKey,
  allVenues: Venue[],
): Destination[] => {
  const out = [...list];
  const topCapacity = (d: Destination) =>
    allVenues
      .filter((v) => v.destinationSlug === d.slug)
      .reduce((max, v) => Math.max(max, v.capacity.max), 0);

  switch (key) {
    case 'alphabetical':
      return out.sort(byName);
    case 'price-asc':
      return out.sort((a, b) => a.costTier - b.costTier || byName(a, b));
    case 'price-desc':
      return out.sort((a, b) => b.costTier - a.costTier || byName(a, b));
    case 'capacity-desc':
      return out.sort((a, b) => topCapacity(b) - topCapacity(a) || byName(a, b));
    case 'featured':
    default:
      // Core destinations always lead — that ordering is the differentiator.
      return out.sort(
        (a, b) =>
          Number(b.isOperating) - Number(a.isOperating) ||
          Number(b.featured) - Number(a.featured) ||
          byName(a, b),
      );
  }
};

// ─── Empty state: progressive relaxation ──────────────────────────────────────
// Rather than dead-ending, drop the least defining filters one at a time until
// something matches, and tell the user exactly what we loosened.

const relaxOrder: { key: keyof FilterState; label: string }[] = [
  { key: 'amenities', label: 'amenities' },
  { key: 'styleTags', label: 'style' },
  { key: 'settings', label: 'indoor/outdoor' },
  { key: 'seasons', label: 'season' },
  { key: 'capacity', label: 'guest capacity' },
  { key: 'priceTiers', label: 'budget' },
  { key: 'venueTypes', label: 'venue type' },
  { key: 'destinations', label: 'destination' },
  { key: 'countries', label: 'country' },
  { key: 'regions', label: 'region' },
];

const withRelaxed = (f: FilterState, keys: (keyof FilterState)[]): FilterState => {
  const next: FilterState = { ...f };
  for (const key of keys) {
    if (key === 'capacity') next.capacity = { ...EMPTY_FILTERS.capacity };
    else if (key === 'network') next.network = 'all';
    else (next[key] as unknown[]) = [];
  }
  return next;
};

interface RelaxResult<T> {
  items: T[];
  relaxed: string[];
}

/**
 * The `network` filter is deliberately never relaxed — quietly showing
 * out-of-network properties to someone who asked for in-network ones would
 * misrepresent what we can operationally support.
 */
const isStepActive = (f: FilterState, key: keyof FilterState) =>
  key === 'capacity' ? isCapacityActive(f) : (f[key] as unknown[]).length > 0;

function relax<T>(f: FilterState, run: (f: FilterState) => T[]): RelaxResult<T> {
  const dropped: (keyof FilterState)[] = [];
  const labels: string[] = [];

  for (const step of relaxOrder) {
    // Dropping a filter the user never set changes nothing — and naming it in
    // the empty-state message would just be noise.
    if (!isStepActive(f, step.key)) continue;
    dropped.push(step.key);
    labels.push(step.label);
    const items = run(withRelaxed(f, dropped));
    if (items.length > 0) return { items, relaxed: labels };
  }
  return { items: run(withRelaxed(f, dropped)), relaxed: labels };
}

export const relaxedVenues = (allVenues: Venue[], f: FilterState): RelaxResult<Venue> =>
  relax(f, (next) => filterVenues(allVenues, next));

export const relaxedDestinations = (
  allDestinations: Destination[],
  allVenues: Venue[],
  f: FilterState,
): RelaxResult<Destination> =>
  relax(f, (next) => filterDestinations(allDestinations, allVenues, next));

// ─── Applied filter chips ─────────────────────────────────────────────────────

const chipLabel = (group: MultiFilterKey, value: string | number): string => {
  switch (group) {
    case 'destinations':
      return getDestinationBySlug(String(value))?.name ?? String(value);
    case 'venueTypes':
      return VENUE_TYPE_LABELS[value as keyof typeof VENUE_TYPE_LABELS];
    case 'styleTags':
      return STYLE_LABELS[value as keyof typeof STYLE_LABELS];
    case 'amenities':
      return AMENITY_LABELS[value as keyof typeof AMENITY_LABELS];
    case 'settings':
      return SETTING_LABELS[value as keyof typeof SETTING_LABELS];
    case 'seasons':
      return SEASON_SHORT_LABELS[value as keyof typeof SEASON_SHORT_LABELS];
    case 'priceTiers':
      return PRICE_TIER_LABELS[value as keyof typeof PRICE_TIER_LABELS];
    default:
      return String(value);
  }
};

export const buildChips = (f: FilterState): AppliedChip[] => {
  const chips: AppliedChip[] = [];
  const groups: MultiFilterKey[] = [
    'destinations',
    'regions',
    'countries',
    'venueTypes',
    'priceTiers',
    'styleTags',
    'settings',
    'seasons',
    'amenities',
  ];

  if (f.network !== 'all') {
    chips.push({
      id: 'network',
      group: 'network',
      label: f.network === 'in-network' ? 'In our network' : 'Available by request',
    });
  }

  for (const group of groups) {
    for (const value of f[group] as (string | number)[]) {
      chips.push({ id: `${group}:${value}`, group, value, label: chipLabel(group, value) });
    }
  }

  if (isCapacityActive(f)) {
    chips.push({
      id: 'capacity',
      group: 'capacity',
      label: `${f.capacity.min}–${f.capacity.max === CAPACITY_BOUNDS.max ? `${CAPACITY_BOUNDS.max}+` : f.capacity.max} guests`,
    });
  }

  return chips;
};
