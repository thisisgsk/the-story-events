'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionTemplate } from 'motion/react';
import { STYLE_LABELS, SETTING_LABELS, priceTierGlyph } from '@/data/locations';
import { useCardTilt } from '@/hooks/useCardTilt';
import type { Venue } from '@/types/locations';

interface VenueCardProps {
  venue: Venue;
}

const capacityLabel = (venue: Venue) => `${venue.capacity.min}–${venue.capacity.max} guests`;

/**
 * The listing card: white body, hard facts, and a booking CTA. Out-of-network
 * venues get different framing throughout — badge, note, and CTA wording — so a
 * request property never reads as one we operate.
 */
export default function VenueCard({ venue }: VenueCardProps) {
  const { ref, rotateX, rotateY, glareX, glareY, onPointerMove, onPointerLeave } = useCardTilt(4);
  const glare = useMotionTemplate`radial-gradient(360px circle at ${glareX} ${glareY}, rgba(227,202,122,0.18), transparent 62%)`;

  const enquiryHref = `/contact?venue=${encodeURIComponent(venue.name)}&location=${encodeURIComponent(venue.locationLabel)}`;

  return (
    <motion.article
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className={`group h-full flex flex-col rounded-xl overflow-hidden bg-white border transition-shadow duration-300 hover:shadow-xl ${
        venue.inNetwork ? 'border-accent/40' : 'border-primary/15 border-dashed'
      }`}
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
        <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: glare }} />

        <div className="absolute top-3 left-3 z-[2]">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full font-label text-[0.54rem] font-medium tracking-[0.13em] uppercase backdrop-blur-sm ${
              venue.inNetwork
                ? 'bg-accent/92 text-primary'
                : 'bg-primary/85 text-white'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${venue.inNetwork ? 'bg-primary' : 'bg-accent'}`} />
            {venue.inNetwork ? 'In Our Network' : 'By Request'}
          </span>
        </div>

        {venue.featured && (
          <span className="absolute top-3 right-3 z-[2] font-label text-[0.52rem] tracking-[0.14em] uppercase text-white/90 bg-black/25 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
            Featured
          </span>
        )}

        {/* Gallery peek on hover */}
        <div className="absolute bottom-3 right-3 z-[2] flex gap-1.5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {venue.gallery.slice(0, 3).map((src, i) => (
            <span key={src + i} className="relative w-10 h-10 rounded-md overflow-hidden border border-white/50 shadow-md">
              <Image src={src} alt="" fill sizes="40px" style={{ objectFit: 'cover' }} />
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <p className="font-label text-[0.56rem] tracking-[0.16em] uppercase text-accent mb-2">
          {venue.locationLabel}
        </p>
        <h3 className="font-heading text-[1.15rem] font-semibold text-primary leading-[1.25] mb-2.5">
          {venue.name}
        </h3>

        {/* Quick facts */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.72rem] text-primary/65 mb-3">
          <span className="tabular-nums">{capacityLabel(venue)}</span>
          <span className="w-px h-3 bg-accent/40" aria-hidden="true" />
          <span title={`Price tier ${venue.priceTier} of 4`}>{priceTierGlyph(venue.priceTier)}</span>
          <span className="w-px h-3 bg-accent/40" aria-hidden="true" />
          <span>{SETTING_LABELS[venue.setting]}</span>
        </div>

        <p className="text-[0.82rem] leading-[1.65] text-primary/75 mb-4">{venue.shortDescription}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {venue.styleTags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-label text-[0.55rem] tracking-[0.1em] uppercase px-2 py-1 rounded-full bg-cream text-primary/70"
            >
              {STYLE_LABELS[tag]}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-accent/25">
          {venue.inNetwork ? (
            <Link
              href={enquiryHref}
              className="inline-flex items-center gap-2 font-label text-[0.64rem] font-medium tracking-[0.12em] uppercase text-primary transition-colors duration-150 hover:text-accent"
            >
              Enquire about this venue
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="text-[0.72rem] leading-[1.6] text-primary/55">
                {venue.leadTimeNote ?? 'Available by request — additional planning lead time may apply.'}
              </p>
              <Link
                href={enquiryHref}
                className="inline-flex items-center gap-2 font-label text-[0.64rem] font-medium tracking-[0.12em] uppercase text-accent transition-colors duration-150 hover:text-primary"
              >
                Request this venue
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
