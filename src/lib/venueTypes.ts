import type { VenueType } from '@/types/destinations';

export const VENUE_TYPE_LABELS: Record<VenueType, string> = {
  palace: 'Palace',
  mountain: 'Mountain',
  'heritage-property': 'Heritage property',
  'private-estate': 'Private estate',
};

/** The venue-type filter's options, in display order (an "All" default is added by the filter). */
export const VENUE_TYPES: VenueType[] = ['palace', 'mountain', 'heritage-property', 'private-estate'];
