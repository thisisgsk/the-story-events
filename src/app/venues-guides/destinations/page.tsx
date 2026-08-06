import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/data/destinations';
import PageHero from '@/components/ui/PageHero/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'India Wedding Destinations | Udaipur, Goa, Jaipur, Kerala & More',
  description:
    'Explore our in-depth guides to India\'s top destination wedding locations — from Rajasthani palaces to Goan beaches, Himalayan hills, and Kerala backwaters.',
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        label="Destination Guides"
        title="Discover India's Most Beautiful Wedding Destinations"
        subtitle="In-depth guides to the venues, logistics, seasons, and magic that make each destination unique."
        image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1800&q=80"
        height="lg"
      />
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Our Destinations"
              title="Where Would You Like to Say 'I Do'?"
              subtitle="We've planned weddings in every one of these remarkable destinations — and we know them intimately."
              centered
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {destinations.map((dest, i) => (
              <AnimatedSection key={dest.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/venues-guides/destinations/${dest.slug}`}
                  className="group flex flex-col no-underline rounded-xl overflow-hidden bg-white border border-accent/40 shadow-sm h-full transition-all duration-[250ms] ease-in-out hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={dest.heroImage}
                      alt={dest.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-slow ease-in-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 z-[1] bg-[rgba(42,24,18,0.1)]" />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-accent bg-cream px-2.5 py-[3px] rounded-full inline-block self-start">{dest.state}</div>
                    <h2 className="font-heading text-2xl font-semibold text-primary">{dest.name}</h2>
                    <p className="text-sm text-primary leading-[1.65] italic">{dest.tagline}</p>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.slice(0, 3).map((h, j) => (
                        <span key={j} className="font-label text-[0.58rem] tracking-[0.08em] uppercase text-primary bg-cream px-2 py-[3px] rounded-full border border-accent/40">{h}</span>
                      ))}
                    </div>
                    <span className="font-label text-[0.68rem] tracking-[0.12em] uppercase text-accent mt-auto">Explore Destination →</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-center">
        <div className="container">
          <AnimatedSection>
            <p className="font-label text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-4">Not Sure Where to Start?</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white mb-4">Let Us Help You Choose</h2>
            <p className="text-lg text-white/60 max-w-[44ch] mx-auto mb-8 leading-[1.7]">We know every destination intimately. Tell us your vision and we&apos;ll match you with the perfect setting.</p>
            <Link href="/contact" className="btn btn-primary">Book a Free Consultation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
