import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { destinations, getDestinationBySlug } from '@/data/destinations';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import type { Metadata } from 'next';

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) return { title: 'Destination Not Found' };
  return {
    title: `${dest.name} Destination Wedding Guide | The Story Events`,
    description: dest.description.slice(0, 155),
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end justify-start">
        <div className="absolute inset-0">
          <Image src={dest.heroImage} alt={dest.name} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
          <div
            className="absolute inset-0 z-[1]"
            style={{ backgroundImage: 'linear-gradient(45deg, rgba(42,24,18,0.8) 0%, rgba(42,24,18,0.2) 70%)' }}
          />
        </div>
        <div className="relative z-[2] px-6 md:px-8 lg:px-12 xl:px-16 pt-16 pb-16 max-w-[700px]">
          <AnimatedSection animation="fadeIn">
            <Link href="/venues-guides/destinations" className="font-label text-[0.65rem] tracking-[0.1em] uppercase text-white/50 no-underline transition-colors duration-150 ease-out block mb-6 hover:text-white/80">← All Destinations</Link>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <span className="block font-label text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-3">{dest.state}</span>
            <h1 className="font-display text-[clamp(3rem,6vw,5rem)] font-bold text-white leading-[1.05] mb-4">{dest.name}</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={400}>
            <p className="font-display italic text-xl text-white/75">{dest.tagline}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2 md:gap-16">
            <AnimatedSection animation="slideLeft">
              <span className="block font-label text-[0.65rem] tracking-[0.18em] uppercase text-accent mb-3">Overview</span>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-primary mb-4">Why {dest.name}?</h2>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-10 h-px bg-accent" />
                <span className="text-primary text-[0.7rem] opacity-70">✦</span>
                <span className="block w-10 h-px bg-accent" />
              </div>
              <p className="text-base leading-[1.85] text-primary mb-5">{dest.description}</p>
              <div className="flex gap-6 flex-wrap pt-6 border-t border-accent/40">
                <div className="flex flex-col gap-[3px]">
                  <span className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-primary">Best Season</span>
                  <span className="font-heading text-base font-semibold text-primary">{dest.bestSeason}</span>
                </div>
                <div className="flex flex-col gap-[3px]">
                  <span className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-primary">Travel Tip</span>
                  <span className="text-sm font-normal text-primary">{dest.travelTip}</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideRight" className="h-full">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
                <Image src={dest.thumbnailImage} alt={`${dest.name} wedding venue`} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section bg-cream">
        <div className="container">
          <AnimatedSection>
            <SectionHeading label="What to Expect" title={`The Best of ${dest.name}`} centered />
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dest.highlights.map((h, i) => (
              <AnimatedSection key={i} delay={i * 60} className="bg-white border border-accent/40 rounded-lg p-6 flex gap-4 items-start">
                <span className="font-display text-3xl font-bold text-accent leading-none shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-sm leading-[1.7] text-primary pt-2">{h}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="section">
        <div className="container-narrow">
          <AnimatedSection>
            <SectionHeading label="Venues We Love" title={`Our Favourite ${dest.name} Venues`} centered />
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {dest.venues.map((venue, i) => (
              <AnimatedSection
                key={i}
                delay={i * 60}
                className="flex gap-4 items-center p-5 bg-cream rounded-md border border-accent/40 transition-transform duration-150 ease-out hover:translate-x-1"
              >
                <span className="text-[1.2rem] shrink-0">🏰</span>
                <span className="font-heading text-base font-semibold text-primary">{venue}</span>
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
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white mb-8">Plan Your {dest.name} Wedding with Us</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary">Enquire Now</Link>
              <Link href="/weddings" className="btn btn-secondary">See Our Work</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
