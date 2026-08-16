'use client';

import Image from 'next/image';
import { motion, useMotionTemplate } from 'motion/react';
import { priceTierGlyph, venueCountByDestination } from '@/data/locations';
import { useCardTilt } from '@/hooks/useCardTilt';
import type { Destination } from '@/types/locations';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (slug: string) => void;
}

/** "October to March" → "Oct–Mar"; keeps only the first window of a split season. */
const shortSeason = (season: string) =>
  season
    .split(',')[0]
    .split(' to ')
    .map((month) => month.trim().slice(0, 3))
    .join('–');

/**
 * The hub card: image-led, editorial, and deliberately taller than a venue card
 * so the two never read as the same kind of object.
 */
export default function DestinationCard({ destination, onSelect }: DestinationCardProps) {
  const { ref, rotateX, rotateY, glareX, glareY, onPointerMove, onPointerLeave } = useCardTilt(5);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(227,202,122,0.22), transparent 60%)`;
  const venueCount = venueCountByDestination[destination.slug] ?? 0;

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group h-full"
    >
      <button
        type="button"
        onClick={() => onSelect(destination.slug)}
        className="relative w-full h-full min-h-[440px] text-left rounded-xl overflow-hidden bg-primary block"
        aria-label={`Explore ${venueCount} venues in ${destination.name}`}
      >
        <Image
          src={destination.thumbnailImage}
          alt={destination.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(42,24,18,0.15) 0%, rgba(42,24,18,0.25) 42%, rgba(42,24,18,0.88) 100%)',
          }}
        />
        <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: glare }} />

        {/* Availability badge */}
        <div className="absolute top-4 left-4 z-[2]">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-label text-[0.56rem] font-medium tracking-[0.14em] uppercase backdrop-blur-sm ${
              destination.isOperating
                ? 'bg-accent/92 text-primary'
                : 'bg-white/18 text-white border border-white/35'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${destination.isOperating ? 'bg-primary' : 'bg-white/80'}`} />
            {destination.isOperating ? 'Core Destination' : 'By Request'}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-[2] font-label text-[0.6rem] tracking-[0.1em] text-white/70">
          {priceTierGlyph(destination.costTier)}
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-[2] p-6">
          <p className="font-label text-[0.58rem] tracking-[0.18em] uppercase text-accent mb-2">
            {destination.locationLabel}
          </p>
          <h3 className="font-display text-[2rem] font-semibold text-white leading-[1.05] mb-1.5">
            {destination.name}
          </h3>
          <p className="font-display italic text-[0.95rem] text-white/65 mb-4">{destination.tagline}</p>

          <div
            className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100"
          >
            <p className="min-h-0 text-[0.84rem] leading-[1.65] text-white/75 pb-4">
              {destination.shortDescription}
            </p>
          </div>

          <div className="flex items-end justify-between gap-3 pt-4 border-t border-white/15">
            <div className="flex gap-4 min-w-0">
              <span className="flex flex-col">
                <span className="font-heading text-[0.95rem] font-semibold text-white tabular-nums leading-tight">{venueCount}</span>
                <span className="font-label text-[0.5rem] tracking-[0.1em] uppercase text-white/45">Venues</span>
              </span>
              <span className="flex flex-col min-w-0">
                <span className="font-heading text-[0.95rem] font-semibold text-white leading-tight whitespace-nowrap">
                  {shortSeason(destination.bestSeason)}
                </span>
                <span className="font-label text-[0.5rem] tracking-[0.1em] uppercase text-white/45 whitespace-nowrap">Best Season</span>
              </span>
            </div>
            <span className="font-label text-[0.58rem] tracking-[0.1em] uppercase text-accent flex items-center gap-1.5 shrink-0">
              Explore
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
