import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities } from '@/data/destinations';
import {
  cityPath,
  countryPath,
  destinationsPath,
  getCity,
  getCountry,
  splitTopAndOthers,
  venuesOf,
} from '@/lib/destinations';
import CityVenues from '@/components/locations/CityVenues/CityVenues';
import DestinationCover from '@/components/locations/DestinationCover/DestinationCover';
import LocationsCTA from '@/components/locations/LocationsCTA/LocationsCTA';
import LeadGate from '@/components/leadgate/LeadGate/LeadGate';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import PartnerLogos from '@/components/ui/PartnerLogos/PartnerLogos';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

interface PageProps {
  params: Promise<{ country: string; city: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((city) => ({ country: city.country, city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = await params;
  const country = getCountry(countrySlug);
  const city = getCity(countrySlug, citySlug);
  if (!country || !city) return { title: 'Destination not found' };
  return {
    title: `${city.name} Wedding Venues | ${country.fullName}`,
    description: `Browse wedding venues in ${city.name}, ${country.fullName}. ${city.tagline}.`,
    alternates: { canonical: cityPath(country.slug, city.slug) },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { country: countrySlug, city: citySlug } = await params;
  const country = getCountry(countrySlug);
  const city = getCity(countrySlug, citySlug);
  if (!country || !city) notFound();

  const { top, others } = splitTopAndOthers(venuesOf(country.slug, city.slug));
  const locationLabel = `${city.name}, ${country.name}`;

  return (
    <LeadGate destination={locationLabel}>
      <DestinationCover
        image={city.image}
        imageAlt={`${city.name}, ${country.name}`}
        eyebrow={country.name}
        title={city.name}
        subtitle={city.tagline}
        crumbs={[
          { label: 'Destinations', href: destinationsPath() },
          { label: country.name, href: countryPath(country.slug) },
          { label: city.name },
        ]}
      />

      <CityVenues cityName={city.name} locationLabel={locationLabel} top={top} others={others} />

      <section className="bg-white py-16 sm:py-24" aria-label={`About ${city.name}`}>
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeading label={`About ${city.name}`} title={city.tagline} subtitle={city.description} centered />
          </AnimatedSection>
        </div>
      </section>

      <PartnerLogos />
      <LocationsCTA />
    </LeadGate>
  );
}
