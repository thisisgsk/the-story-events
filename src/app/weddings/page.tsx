import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import WeddingGrid from '@/components/weddings/WeddingGrid/WeddingGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Weddings | Palace, Beach, Mountain & Intimate Wedding Stories',
  description:
    'Browse our portfolio of extraordinary destination weddings across India — from Udaipur palace weddings to Goa beach celebrations. Filter by type or location.',
};

export default function WeddingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=80"
            alt="Wedding portfolio hero"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{ backgroundImage: 'linear-gradient(180deg, rgba(42,24,18,0.2) 0%, rgba(42,24,18,0.6) 100%)' }}
          />
        </div>
        <div className="relative z-[2] text-center px-6 md:px-8 lg:px-12 xl:px-16 pt-16 pb-8">
          <AnimatedSection animation="fadeIn">
            <span className="inline-block font-label text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-4">Our Portfolio</span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold text-white leading-[1.1] mb-5">Weddings We&apos;ve Had the<br />Honour of Planning</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={400}>
            <p className="text-lg text-white/75 max-w-[50ch] mx-auto leading-[1.7]">
              Six couples. Six extraordinary stories. Filter by location or wedding type to find your inspiration.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid with Filters */}
      <WeddingGrid />

      {/* CTA */}
      <section className="bg-primary py-24 text-center">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Your Story"
              title="Ready to Write Your Own?"
              subtitle="Every wedding in our portfolio began with a single conversation. Let's have yours."
              centered
              light
            />
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="flex gap-4 justify-center flex-wrap mt-8">
              <Link href="/contact" className="btn btn-primary">Begin Planning</Link>
              <Link href="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
