import type { Metadata } from 'next';
import { countries } from '@/data/destinations';
import { citiesOf } from '@/lib/destinations';
import LocationsHero from '@/components/locations/LocationsHero/LocationsHero';
import LocationsCTA from '@/components/locations/LocationsCTA/LocationsCTA';
import CountryTile from '@/components/locations/CountryTile/CountryTile';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import PartnerLogos from '@/components/ui/PartnerLogos/PartnerLogos';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export const metadata: Metadata = {
  title: 'Destinations | Wedding Destinations & Venues',
  description:
    'Plan your wedding in India, the UAE, Sri Lanka, Thailand or Vietnam. Choose a country, then a city, then the venue.',
  alternates: { canonical: '/destinations' },
};

export default function DestinationsPage() {
  return (
    <>
      <LocationsHero />

      <section id="explore" className="section bg-primary" aria-label="Choose a country">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Where We Plan"
              title="Choose a country"
              subtitle="Start with a country, then pick a city and a venue."
              light
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {countries.map((country, i) => {
              const cityCount = citiesOf(country.slug).length;
              return (
                <AnimatedSection key={country.slug} delay={i * 80}>
                  <CountryTile country={country} subtitle={`${cityCount} ${cityCount === 1 ? 'city' : 'cities'}`} />
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <PartnerLogos />
      <LocationsCTA />
    </>
  );
}
