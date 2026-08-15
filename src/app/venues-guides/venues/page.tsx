import Image from 'next/image';
import Link from 'next/link';
import { venueGuides } from '@/data/destinations';
import PageHero from '@/components/ui/PageHero/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Venue Guides | Palace, Beach, Resort & Heritage Venues',
  description:
    'Explore our curated guides to India\'s most extraordinary wedding venues — palaces, beachfront resorts, heritage properties, hill station estates, and backwater villas.',
};

export default function VenuesPage() {
  return (
    <>
      <PageHero
        label="Venue Guides"
        title="India's Most Extraordinary Wedding Venues"
        subtitle="Curated collections of venues we know, have worked with, and wholeheartedly recommend."
        image="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1800&q=80"
        height="lg"
      />
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading label="Our Venue Collections" title="Find Your Perfect Setting" subtitle="We've personally vetted every venue in these guides. Each one meets our standard for beauty, service, and logistical excellence." centered />
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {venueGuides.map((guide, i) => (
              <AnimatedSection key={guide.slug} delay={i * 80} className="h-full">
                <div className="group bg-white border border-accent/40 rounded-xl overflow-hidden h-full transition-all duration-[250ms] ease-in-out hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={guide.heroImage}
                      alt={guide.title}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-slow ease-in-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 z-[1] bg-[rgba(42,24,18,0.14)]" />
                    <div className="absolute bottom-4 left-4 z-[2] font-label text-[0.6rem] tracking-[0.12em] uppercase bg-[rgba(254,247,242,0.94)] text-primary px-2.5 py-[3px] rounded-full">
                      {guide.venues.length} Venues
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <div className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-primary mb-1">{guide.type}</div>
                    <h2 className="font-heading text-xl font-semibold text-primary">{guide.title}</h2>
                    <p className="text-sm text-primary leading-[1.7]">{guide.description.slice(0, 150)}...</p>
                    <div className="flex flex-wrap gap-2">
                      {guide.venues.slice(0, 3).map((v, j) => (
                        <span key={j} className="font-label text-[0.58rem] tracking-[0.08em] uppercase text-accent bg-cream px-2 py-0.5 rounded-full">{v.name}</span>
                      ))}
                    </div>
                    <Link href="/contact" className="font-label text-[0.65rem] tracking-[0.12em] uppercase text-accent transition-colors duration-150 ease-out">Get Venue Recommendations →</Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-center">
        <div className="container">
          <AnimatedSection>
            <SectionHeading label="Personalised" title="Not Sure Which Venue is Right For You?" subtitle="Every couple is different. Tell us your vision, guest count, and budget — we'll curate a personalised venue shortlist within 48 hours." centered light />
          </AnimatedSection>
          <AnimatedSection delay={200} className="mt-8">
            <Link href="/contact" className="btn btn-primary">Request Personalised Shortlist</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
