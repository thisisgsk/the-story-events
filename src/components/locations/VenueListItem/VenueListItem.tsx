import Image from 'next/image';
import Link from 'next/link';
import { venuePath } from '@/lib/destinationPaths';
import { VENUE_TYPE_LABELS } from '@/lib/venueTypes';
import type { Venue } from '@/types/destinations';

interface VenueListItemProps {
  venue: Venue;
  /** e.g. "Udaipur, India". */
  locationLabel: string;
}

/** Compact one-line venue row, used for the "Others" section — same border, radius and hover as VenueCard. */
export default function VenueListItem({ venue, locationLabel }: VenueListItemProps) {
  return (
    <Link
      href={venuePath(venue.country, venue.city, venue.slug)}
      className="group flex items-center gap-4 h-full rounded-xl bg-white border border-accent/40 p-3 pr-5 no-underline transition-all duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
    >
      <span className="relative w-[76px] h-[76px] rounded-md overflow-hidden shrink-0">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          sizes="76px"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
        />
      </span>

      <span className="flex-1 min-w-0">
        <span className="block font-label text-[0.54rem] tracking-[0.14em] uppercase text-accent mb-1">
          {VENUE_TYPE_LABELS[venue.venueType]}
        </span>
        <span className="block font-heading text-[1rem] font-semibold text-primary leading-[1.25] truncate">
          {venue.name}
        </span>
        <span className="block text-[0.75rem] text-primary/60 truncate">{locationLabel}</span>
      </span>

      <span
        className="text-accent transition-transform duration-300 group-hover:translate-x-1 shrink-0"
        aria-hidden="true"
      >
        →
      </span>
    </Link>
  );
}
