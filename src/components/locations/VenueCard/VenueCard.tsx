'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionTemplate } from 'motion/react';
import { venuePath } from '@/lib/destinationPaths';
import { VENUE_TYPE_LABELS } from '@/lib/venueTypes';
import { useCardTilt } from '@/hooks/useCardTilt';
import type { Venue } from '@/types/destinations';

interface VenueCardProps {
  venue: Venue;
  /** e.g. "Udaipur, India". */
  locationLabel: string;
  /** Show the curated rank (№ 1–5) — used in the "Top" section. */
  showRank?: boolean;
}

/** The prominent venue card: image, type, a short description, and a link to the venue page. */
export default function VenueCard({ venue, locationLabel, showRank = false }: VenueCardProps) {
  const { ref, rotateX, rotateY, glareX, glareY, onPointerMove, onPointerLeave } = useCardTilt(4);
  const glare = useMotionTemplate`radial-gradient(360px circle at ${glareX} ${glareY}, rgba(227,202,122,0.18), transparent 62%)`;

  return (
    <motion.article
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group relative h-full flex flex-col rounded-xl overflow-hidden bg-white border border-accent/40 transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden shrink-0">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundImage: glare }}
        />

        <div className="absolute top-3 left-3 z-[2]">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full font-label text-[0.54rem] font-medium tracking-[0.13em] uppercase backdrop-blur-sm bg-accent/92 text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {VENUE_TYPE_LABELS[venue.venueType]}
          </span>
        </div>

        {showRank && venue.featuredRank && (
          <span className="absolute top-3 right-3 z-[2] font-label text-[0.52rem] tracking-[0.14em] uppercase text-white/90 bg-black/25 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
            Top pick · {venue.featuredRank}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <p className="font-label text-[0.56rem] tracking-[0.16em] uppercase text-accent mb-2">{locationLabel}</p>
        <h3 className="font-heading text-[1.15rem] font-semibold text-primary leading-[1.25] mb-2.5">
          {/* Stretched link: the whole card is clickable, with one accessible link. */}
          <Link
            href={venuePath(venue.country, venue.city, venue.slug)}
            className="no-underline after:absolute after:inset-0 after:content-['']"
          >
            {venue.name}
          </Link>
        </h3>

        <p className="text-[0.82rem] leading-[1.65] text-primary/75 mb-4">{venue.shortDescription}</p>

        <div className="mt-auto pt-4 border-t border-accent/25">
          <span className="inline-flex items-center gap-2 font-label text-[0.64rem] font-medium tracking-[0.12em] uppercase text-primary transition-colors duration-150 group-hover:text-accent">
            View venue
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </div>
    </motion.article>
  );
}
