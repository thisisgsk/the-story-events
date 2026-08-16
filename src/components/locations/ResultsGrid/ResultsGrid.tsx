'use client';

import { AnimatePresence, motion } from 'motion/react';
import type { BrowseView, Destination, Venue } from '@/types/locations';
import DestinationCard from '../DestinationCard/DestinationCard';
import VenueCard from '../VenueCard/VenueCard';

interface ResultsGridProps {
  view: BrowseView;
  destinations: Destination[];
  venues: Venue[];
  onSelectDestination: (slug: string) => void;
}

const luxuryEase = [0.16, 1, 0.3, 1] as const;

/** Cap the stagger so a 40-card reshuffle never crawls. */
const enterDelay = (index: number) => Math.min(index, 10) * 0.045;

export default function ResultsGrid({ view, destinations, venues, onSelectDestination }: ResultsGridProps) {
  const items: { key: string; node: React.ReactNode }[] =
    view === 'destinations'
      ? destinations.map((d) => ({
          key: `d-${d.slug}`,
          node: <DestinationCard destination={d} onSelect={onSelectDestination} />,
        }))
      : venues.map((v) => ({ key: `v-${v.slug}`, node: <VenueCard venue={v} /> }));

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence mode="popLayout" initial={false}>
        {items.map((item, i) => (
          <motion.div
            key={item.key}
            layout
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.55, ease: luxuryEase, delay: enterDelay(i) },
            }}
            exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.22, ease: 'easeIn' } }}
            transition={{ layout: { type: 'spring', stiffness: 320, damping: 34 } }}
            className="h-full"
          >
            {item.node}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
