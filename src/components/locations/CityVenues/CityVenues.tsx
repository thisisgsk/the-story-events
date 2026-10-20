'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { VENUE_TYPE_LABELS } from '@/lib/venueTypes';
import type { Venue } from '@/types/destinations';
import RollingNumber from '@/components/ui/RollingNumber/RollingNumber';
import EmptyState from '../EmptyState/EmptyState';
import ResultsGrid from '../ResultsGrid/ResultsGrid';
import VenueCard from '../VenueCard/VenueCard';
import VenueListItem from '../VenueListItem/VenueListItem';
import VenueTypeFilter, { type VenueTypeValue } from '../VenueTypeFilter/VenueTypeFilter';

interface CityVenuesProps {
  cityName: string;
  /** e.g. "Udaipur, India". */
  locationLabel: string;
  /** The curated top venues (at most five), already in rank order. */
  top: Venue[];
  /** Everything else. Empty when the city has five venues or fewer. */
  others: Venue[];
}

const luxuryEase = [0.16, 1, 0.3, 1] as const;

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: luxuryEase }}
      className="mb-8"
    >
      <span className="inline-block font-label text-[0.68rem] font-medium tracking-[0.18em] uppercase text-accent mb-2">
        {label}
      </span>
      <h2 className="font-display text-[clamp(1.7rem,3vw,2.4rem)] font-semibold text-primary leading-[1.1]">{title}</h2>
    </motion.div>
  );
}

/**
 * The venue listing on a city page: the filter bar, then the curated top venues,
 * then the rest in a compact list. The venue-type filter applies to both sections;
 * a section with nothing left after filtering is hidden.
 */
export default function CityVenues({ cityName, locationLabel, top, others }: CityVenuesProps) {
  const [type, setType] = useState<VenueTypeValue>('all');

  const matches = (venue: Venue) => type === 'all' || venue.venueType === type;
  const shownTop = top.filter(matches);
  const shownOthers = others.filter(matches);

  const total = top.length + others.length;
  const shownCount = shownTop.length + shownOthers.length;
  const hasOthers = others.length > 0;
  const isFiltered = type !== 'all';

  return (
    <section id="venues" className="bg-cream py-16 sm:py-20" aria-label={`Venues in ${cityName}`}>
      <div className="container-wide">
        {/* Filter bar — venue type is the only filter */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-12 pb-5 border-b border-accent/25">
          <VenueTypeFilter value={type} onChange={setType} />

          <p className="font-label text-[0.68rem] tracking-[0.1em] uppercase text-primary/70 flex items-center gap-1.5">
            <RollingNumber value={shownCount} className="font-heading text-lg text-primary not-italic" />
            {shownCount === 1 ? 'venue' : 'venues'}
            {isFiltered && <span className="text-primary/40 normal-case tracking-normal">· of {total}</span>}
          </p>
          <span className="sr-only" role="status" aria-live="polite">
            {shownCount} {shownCount === 1 ? 'venue' : 'venues'} shown
            {isFiltered ? ` for ${VENUE_TYPE_LABELS[type].toLowerCase()}` : ''}
          </span>
        </div>

        {shownCount === 0 && isFiltered && (
          <EmptyState typeLabel={VENUE_TYPE_LABELS[type]} onClear={() => setType('all')} />
        )}

        {shownTop.length > 0 && (
          <div className={shownOthers.length > 0 ? 'mb-16' : ''}>
            <SectionTitle
              label={hasOthers ? 'Top picks' : 'Venues'}
              title={
                !hasOthers
                  ? `Venues in ${cityName}`
                  : isFiltered
                    ? `Top picks in ${cityName}`
                    : `Top ${top.length} venues in ${cityName}`
              }
            />
            <ResultsGrid
              items={shownTop.map((venue) => ({
                key: venue.slug,
                node: <VenueCard venue={venue} locationLabel={locationLabel} showRank={hasOthers} />,
              }))}
            />
          </div>
        )}

        {hasOthers && shownOthers.length > 0 && (
          <div>
            <SectionTitle label="Others" title={`More venues in ${cityName}`} />
            <ResultsGrid
              className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
              items={shownOthers.map((venue) => ({
                key: venue.slug,
                node: <VenueListItem venue={venue} locationLabel={locationLabel} />,
              }))}
            />
          </div>
        )}
      </div>
    </section>
  );
}
