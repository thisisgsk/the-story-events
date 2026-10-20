import Link from 'next/link';
import { countries } from '@/data/destinations';
import CountryTile from '@/components/locations/CountryTile/CountryTile';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function DestinationsPreview() {
  return (
    <section className="section bg-primary">
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="Where We Plan" title="India and beyond" light centered />
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-3 mb-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {countries.map((country, i) => (
            <AnimatedSection key={country.slug} delay={i * 80}>
              <CountryTile country={country} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={500} className="text-center">
          <Link
            href="/destinations"
            className="font-label text-[0.72rem] tracking-[0.14em] uppercase text-white/60 no-underline transition-colors duration-150 ease-out hover:text-accent"
          >
            Explore All Destinations →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
