import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { countries } from '@/data/destinations';
import { citiesOf, countryPath, destinationsPath, getCountry, venuesOf } from '@/lib/destinations';
import DestinationCard from '@/components/locations/DestinationCard/DestinationCard';
import DestinationCover from '@/components/locations/DestinationCover/DestinationCover';
import LocationsCTA from '@/components/locations/LocationsCTA/LocationsCTA';
import LeadGate from '@/components/leadgate/LeadGate/LeadGate';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import PartnerLogos from '@/components/ui/PartnerLogos/PartnerLogos';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

interface PageProps {
  params: Promise<{ country: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return countries.map((country) => ({ country: country.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const country = getCountry(countrySlug);
  if (!country) return { title: 'Destination not found' };
  return {
    title: `${country.fullName} Wedding Destinations | Cities & Venues`,
    description: `Browse wedding cities in ${country.fullName}, then choose the venue. ${country.tagline}.`,
    alternates: { canonical: countryPath(country.slug) },
  };
}

export default async function CountryPage({ params }: PageProps) {
  const { country: countrySlug } = await params;
  const country = getCountry(countrySlug);
  if (!country) notFound();

  const cities = citiesOf(country.slug);

  return (
    <LeadGate destination={country.fullName}>
      <DestinationCover
        image={country.image}
        imageAlt={`${country.name} wedding destination`}
        eyebrow="Country"
        title={country.name}
        subtitle={country.tagline}
        crumbs={[{ label: 'Destinations', href: destinationsPath() }, { label: country.name }]}
      />

      <section id="cities" className="bg-cream py-16 sm:py-24" aria-label={`Cities in ${country.name}`}>
        <div className="container-wide">
          <AnimatedSection>
            <SectionHeading
              label={country.name}
              title={`Choose a city in ${country.name}`}
              subtitle={country.description}
              centered
            />
          </AnimatedSection>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {cities.map((city, i) => (
              <AnimatedSection key={city.slug} delay={i * 90} className="h-full">
                <DestinationCard
                  city={city}
                  countryName={country.name}
                  venueCount={venuesOf(country.slug, city.slug).length}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <PartnerLogos />
      <LocationsCTA />
    </LeadGate>
  );
}
