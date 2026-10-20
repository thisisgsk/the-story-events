import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { venues } from '@/data/destinations';
import {
  VENUE_TYPE_LABELS,
  cityPath,
  countryPath,
  destinationsPath,
  getCity,
  getCountry,
  getVenue,
  splitTopAndOthers,
  venuePath,
  venuesOf,
} from '@/lib/destinations';
import DestinationCover from '@/components/locations/DestinationCover/DestinationCover';
import LocationsCTA from '@/components/locations/LocationsCTA/LocationsCTA';
import VenueCard from '@/components/locations/VenueCard/VenueCard';
import LeadGate from '@/components/leadgate/LeadGate/LeadGate';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import PartnerLogos from '@/components/ui/PartnerLogos/PartnerLogos';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

interface PageProps {
  params: Promise<{ country: string; city: string; venue: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return venues.map((venue) => ({ country: venue.country, city: venue.city, venue: venue.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country: countrySlug, city: citySlug, venue: venueSlug } = await params;
  const country = getCountry(countrySlug);
  const city = getCity(countrySlug, citySlug);
  const venue = getVenue(countrySlug, citySlug, venueSlug);
  if (!country || !city || !venue) return { title: 'Venue not found' };
  return {
    title: `${venue.name} | ${VENUE_TYPE_LABELS[venue.venueType]} Wedding Venue in ${city.name}`,
    description: venue.shortDescription,
    alternates: { canonical: venuePath(country.slug, city.slug, venue.slug) },
  };
}

const MORE_VENUES_COUNT = 3;

export default async function VenuePage({ params }: PageProps) {
  const { country: countrySlug, city: citySlug, venue: venueSlug } = await params;
  const country = getCountry(countrySlug);
  const city = getCity(countrySlug, citySlug);
  const venue = getVenue(countrySlug, citySlug, venueSlug);
  if (!country || !city || !venue) notFound();

  const locationLabel = `${city.name}, ${country.name}`;
  const typeLabel = VENUE_TYPE_LABELS[venue.venueType];

  // Curated venues first, minus the one being viewed.
  const { top, others } = splitTopAndOthers(venuesOf(country.slug, city.slug));
  const moreVenues = [...top, ...others].filter((v) => v.slug !== venue.slug).slice(0, MORE_VENUES_COUNT);

  const enquiryHref = `/contact?venue=${encodeURIComponent(venue.name)}&destination=${encodeURIComponent(locationLabel)}`;

  const facts = [
    { label: 'Venue type', value: typeLabel },
    { label: 'City', value: city.name },
    { label: 'Country', value: country.fullName },
  ];

  return (
    <LeadGate destination={locationLabel}>
      <DestinationCover
        image={venue.image}
        imageAlt={venue.name}
        eyebrow={`${typeLabel} · ${locationLabel}`}
        title={venue.name}
        crumbs={[
          { label: 'Destinations', href: destinationsPath() },
          { label: country.name, href: countryPath(country.slug) },
          { label: city.name, href: cityPath(country.slug, city.slug) },
          { label: venue.name },
        ]}
      />

      <section className="bg-cream py-16 sm:py-24" aria-label={`About ${venue.name}`}>
        <div className="container">
          <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <AnimatedSection animation="slideLeft">
              <span className="inline-block font-label text-[0.68rem] font-medium tracking-[0.18em] uppercase text-accent mb-3">
                About this venue
              </span>
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-primary leading-[1.15] mb-4">
                {venue.name}
              </h2>
              <div className="flex items-center gap-3 mb-6" aria-hidden="true">
                <span className="flex-none w-12 h-px bg-accent" />
                <span className="text-[0.75rem] text-primary opacity-70">✦</span>
                <span className="flex-none w-12 h-px bg-accent" />
              </div>
              <p className="text-lg leading-[1.85] text-primary max-w-[60ch] mb-8">{venue.shortDescription}</p>

              <div className="flex flex-wrap gap-4">
                <Link href={enquiryHref} className="btn btn-primary">
                  Enquire about this venue
                </Link>
                <Link href={cityPath(country.slug, city.slug)} className="btn btn-outline">
                  All venues in {city.name}
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={150}>
              <dl className="bg-white border border-accent/40 rounded-xl p-8 shadow-md">
                <h3 className="font-display text-2xl text-primary mb-6">At a glance</h3>
                {facts.map((fact) => (
                  <div key={fact.label} className="py-3 border-t border-accent/25 first-of-type:border-t-0">
                    <dt className="font-label text-[0.62rem] tracking-[0.15em] uppercase text-primary/60 mb-1">
                      {fact.label}
                    </dt>
                    <dd className="font-heading text-base font-semibold text-primary">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {moreVenues.length > 0 && (
        <section className="bg-white py-16 sm:py-24" aria-label={`More venues in ${city.name}`}>
          <div className="container-wide">
            <AnimatedSection>
              <SectionHeading label={city.name} title={`More venues in ${city.name}`} centered />
            </AnimatedSection>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {moreVenues.map((other, i) => (
                <AnimatedSection key={other.slug} delay={i * 90} className="h-full">
                  <VenueCard venue={other} locationLabel={locationLabel} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <PartnerLogos />
      <LocationsCTA />
    </LeadGate>
  );
}
