'use client';

import {
  AMENITY_LABELS,
  COUNTRY_OPTIONS,
  PRICE_TIER_LABELS,
  PRICE_TIER_OPTIONS,
  REGION_OPTIONS,
  SEASON_LABELS,
  SETTING_LABELS,
  STYLE_LABELS,
  VENUE_TYPE_LABELS,
  destinations,
  priceTierGlyph,
} from '@/data/locations';
import type {
  Amenity,
  BrowseView,
  CapacityRange as CapacityRangeValue,
  FilterState,
  MultiFilterKey,
  PriceTier,
  Region,
  Season,
  SettingType,
  StyleTag,
  VenueType,
} from '@/types/locations';
import CapacityRange from '../CapacityRange/CapacityRange';
import FilterGroup from './FilterGroup';
import OptionPill from './OptionPill';

interface FilterPanelProps {
  filters: FilterState;
  view: BrowseView;
  activeCount: number;
  onToggle: (group: MultiFilterKey, value: string | number) => void;
  onCapacityChange: (value: CapacityRangeValue) => void;
  onClearAll: () => void;
  /** Rendered above the groups — the network toggle lives here so it stays prominent. */
  header: React.ReactNode;
}

const pillWrap = 'flex flex-wrap gap-2';

export default function FilterPanel({
  filters,
  view,
  activeCount,
  onToggle,
  onCapacityChange,
  onClearAll,
  header,
}: FilterPanelProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 pb-4 mb-2 border-b border-accent/25">
        <span className="font-label text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-primary">
          Refine
        </span>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="font-label text-[0.62rem] tracking-[0.1em] uppercase text-accent hover:text-primary transition-colors duration-150"
          >
            Clear all
          </button>
        )}
      </div>

      {header}

      <FilterGroup title="Destination" count={filters.destinations.length} defaultOpen>
        <div className={pillWrap}>
          {destinations.map((dest) => (
            <OptionPill
              key={dest.slug}
              label={dest.name}
              selected={filters.destinations.includes(dest.slug)}
              onClick={() => onToggle('destinations', dest.slug)}
              marker={
                <span
                  className={`w-1.5 h-1.5 rounded-full ${dest.isOperating ? 'bg-accent' : 'bg-primary/25'}`}
                  aria-hidden="true"
                />
              }
            />
          ))}
        </div>
        <p className="text-[0.7rem] text-primary/45 mt-3 leading-[1.6]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent align-middle mr-1.5" />
          Core destination &nbsp;·&nbsp;
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/25 align-middle mr-1.5" />
          Available by request
        </p>
      </FilterGroup>

      <FilterGroup title="Region" count={filters.regions.length}>
        <div className={pillWrap}>
          {REGION_OPTIONS.map((region: Region) => (
            <OptionPill
              key={region}
              label={region}
              selected={filters.regions.includes(region)}
              onClick={() => onToggle('regions', region)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Country" count={filters.countries.length}>
        <div className={pillWrap}>
          {COUNTRY_OPTIONS.map((country) => (
            <OptionPill
              key={country}
              label={country}
              selected={filters.countries.includes(country)}
              onClick={() => onToggle('countries', country)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Venue Type" count={filters.venueTypes.length} defaultOpen>
        <div className={pillWrap}>
          {(Object.keys(VENUE_TYPE_LABELS) as VenueType[]).map((type) => (
            <OptionPill
              key={type}
              label={VENUE_TYPE_LABELS[type]}
              selected={filters.venueTypes.includes(type)}
              onClick={() => onToggle('venueTypes', type)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Guest Capacity" count={0} defaultOpen>
        <CapacityRange value={filters.capacity} onChange={onCapacityChange} />
      </FilterGroup>

      <FilterGroup title="Budget" count={filters.priceTiers.length}>
        <div className={pillWrap}>
          {PRICE_TIER_OPTIONS.map((tier: PriceTier) => (
            <OptionPill
              key={tier}
              label={`${priceTierGlyph(tier)} · ${PRICE_TIER_LABELS[tier]}`}
              selected={filters.priceTiers.includes(tier)}
              onClick={() => onToggle('priceTiers', tier)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Style" count={filters.styleTags.length}>
        <div className={pillWrap}>
          {(Object.keys(STYLE_LABELS) as StyleTag[]).map((style) => (
            <OptionPill
              key={style}
              label={STYLE_LABELS[style]}
              selected={filters.styleTags.includes(style)}
              onClick={() => onToggle('styleTags', style)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Indoor / Outdoor" count={filters.settings.length}>
        <div className={pillWrap}>
          {(Object.keys(SETTING_LABELS) as SettingType[]).map((setting) => (
            <OptionPill
              key={setting}
              label={SETTING_LABELS[setting]}
              selected={filters.settings.includes(setting)}
              onClick={() => onToggle('settings', setting)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Best Season" count={filters.seasons.length}>
        <div className={pillWrap}>
          {(Object.keys(SEASON_LABELS) as Season[]).map((season) => (
            <OptionPill
              key={season}
              label={SEASON_LABELS[season]}
              selected={filters.seasons.includes(season)}
              onClick={() => onToggle('seasons', season)}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Amenities" count={filters.amenities.length}>
        <div className={pillWrap}>
          {(Object.keys(AMENITY_LABELS) as Amenity[]).map((amenity) => (
            <OptionPill
              key={amenity}
              label={AMENITY_LABELS[amenity]}
              selected={filters.amenities.includes(amenity)}
              onClick={() => onToggle('amenities', amenity)}
            />
          ))}
        </div>
        <p className="text-[0.7rem] text-primary/45 mt-3 leading-[1.6]">
          Amenities are cumulative — a venue must offer every one you tick.
        </p>
      </FilterGroup>

      {view === 'destinations' && (
        <p className="text-[0.72rem] text-primary/50 leading-[1.7] mt-5 pt-5 border-t border-accent/25">
          Venue filters still apply here: a destination stays on the list only while at least
          one of its properties matches what you have chosen.
        </p>
      )}
    </div>
  );
}
