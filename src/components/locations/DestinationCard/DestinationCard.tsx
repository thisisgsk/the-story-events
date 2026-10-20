'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionTemplate } from 'motion/react';
import { cityPath } from '@/lib/destinationPaths';
import { useCardTilt } from '@/hooks/useCardTilt';
import type { City } from '@/types/destinations';

interface DestinationCardProps {
  city: City;
  countryName: string;
  venueCount: number;
}

/**
 * The city card: image-led, editorial, and deliberately taller than a venue card
 * so the two never read as the same kind of object. The whole card is the link.
 */
export default function DestinationCard({ city, countryName, venueCount }: DestinationCardProps) {
  const { ref, rotateX, rotateY, glareX, glareY, onPointerMove, onPointerLeave } = useCardTilt(5);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(227,202,122,0.22), transparent 60%)`;

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group h-full"
    >
      <Link
        href={cityPath(city.country, city.slug)}
        className="relative w-full h-full min-h-[440px] text-left rounded-xl overflow-hidden bg-primary block no-underline"
        aria-label={`Explore ${city.name}, ${countryName} — ${venueCount} ${venueCount === 1 ? 'venue' : 'venues'}`}
      >
        <Image
          src={city.image}
          alt={city.name}
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
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundImage: glare }}
        />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-[2] p-6">
          <p className="font-label text-[0.58rem] tracking-[0.18em] uppercase text-accent mb-2">{countryName}</p>
          <h3 className="font-display text-[2rem] font-semibold text-white leading-[1.05] mb-1.5">{city.name}</h3>
          <p className="font-display italic text-[0.95rem] text-white/65 mb-4">{city.tagline}</p>

          <div className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
            <p className="min-h-0 text-[0.84rem] leading-[1.65] text-white/75 pb-4">{city.description}</p>
          </div>

          <div className="flex items-end justify-between gap-3 pt-4 border-t border-white/15">
            <span className="flex flex-col">
              <span className="font-heading text-[0.95rem] font-semibold text-white tabular-nums leading-tight">
                {venueCount}
              </span>
              <span className="font-label text-[0.5rem] tracking-[0.1em] uppercase text-white/45">
                {venueCount === 1 ? 'Venue' : 'Venues'}
              </span>
            </span>
            <span className="font-label text-[0.58rem] tracking-[0.1em] uppercase text-accent flex items-center gap-1.5 shrink-0">
              Explore
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
