import Image from 'next/image';
import Link from 'next/link';
import { destinations, venueGuides, planningGuides } from '@/data/destinations';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venues & Planning Guides | Destination, Venue & Wedding Planning Guides',
  description:
    'Explore destination guides for Udaipur, Goa, Jaipur, Kerala & Hyderabad. Browse palace, beach, and resort venue guides. Access our complete wedding planning resources.',
};

const categories = [
  {
    title: 'Destination Guides',
    description: 'In-depth travel and logistics guides for India\'s top wedding destinations.',
    href: '/venues-guides/destinations',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    count: destinations.length,
    label: 'Destinations',
  },
  {
    title: 'Venue Guides',
    description: 'Editorial collections of India\'s finest palace, beach, and resort wedding venues.',
    href: '/venues-guides/venues',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80',
    count: venueGuides.length,
    label: 'Venue Categories',
  },
  {
    title: 'Planning Guides',
    description: 'Checklists, timelines, and expert advice to help you plan with confidence.',
    href: '/venues-guides/planning-guides',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80',
    count: planningGuides.length + 3,
    label: 'Guides',
  },
];

export default function VenuesGuidesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1800&q=80"
            alt="Venues and planning guides"
            fill priority sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{ backgroundImage: 'linear-gradient(180deg, rgba(42,24,18,0.2) 0%, rgba(42,24,18,0.6) 100%)' }}
          />
        </div>
        <div className="relative z-[2] text-center px-6 md:px-8 lg:px-12 xl:px-16 pt-16 pb-8">
          <AnimatedSection animation="fadeIn">
            <span className="inline-block font-label text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-4">Resource Hub</span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold text-white leading-[1.1] mb-4">Venues & Planning Guides</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={400}>
            <p className="text-lg text-white/75 max-w-[50ch] mx-auto leading-[1.7]">
              Expert knowledge, curated venues, and in-depth destination guides — everything you need to plan with confidence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Explore"
              title="Three Ways to Research Your Wedding"
              subtitle="Whether you're looking for destination inspiration, venue options, or practical planning tools — start here."
              centered
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.href} delay={i * 120} className="h-full">
                <Link
                  href={cat.href}
                  className="group flex flex-col h-full bg-white border border-accent/40 rounded-xl overflow-hidden no-underline transition-all duration-[250ms] ease-in-out hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-slow ease-in-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 z-[1] bg-[rgba(42,24,18,0.18)]" />
                    <div className="absolute bottom-4 right-4 z-[2] font-label text-[0.6rem] tracking-[0.12em] uppercase bg-white/92 text-primary px-3 py-1 rounded-full">
                      {cat.count} {cat.label}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-2 flex-1">
                    <h2 className="font-heading text-2xl font-semibold text-primary">{cat.title}</h2>
                    <p className="text-sm text-primary leading-[1.7] flex-1">{cat.description}</p>
                    <span className="font-label text-[0.68rem] tracking-[0.12em] uppercase text-accent mt-3">Explore →</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Destination Preview */}
      <section className="bg-cream py-24">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Top Destinations"
              title="Where Do You Want to Say &lsquo;I Do&rsquo;?"
              centered
            />
          </AnimatedSection>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {destinations.map((dest, i) => (
              <AnimatedSection key={dest.slug} delay={i * 80}>
                <Link
                  href={`/venues-guides/destinations/${dest.slug}`}
                  className="group block no-underline rounded-lg overflow-hidden transition-all duration-[250ms] ease-in-out hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <Image
                      src={dest.thumbnailImage}
                      alt={dest.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-slow ease-in-out group-hover:scale-[1.08]"
                    />
                    <div
                      className="absolute inset-0 z-[1]"
                      style={{ backgroundImage: 'linear-gradient(0deg, rgba(42,24,18,0.65) 0%, transparent 60%)' }}
                    />
                  </div>
                  <div className="relative z-[2] -mt-16 p-4">
                    <h3 className="font-display text-xl font-semibold text-white leading-[1.2]">{dest.name}</h3>
                    <p className="font-label text-[0.62rem] tracking-[0.1em] uppercase text-white/65">{dest.state}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center">
        <div className="container">
          <AnimatedSection>
            <p className="font-label text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-4">Ready to Begin?</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white mb-5">Let Our Experts Guide You</h2>
            <p className="text-lg text-white/60 max-w-[50ch] mx-auto mb-8 leading-[1.7]">The right destination and venue for your wedding depends on your vision, guest count, and budget. Let us help you find the perfect match.</p>
            <Link href="/contact" className="btn btn-primary">Book a Free Consultation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
