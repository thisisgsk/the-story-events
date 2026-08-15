import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getWeddingBySlug, weddings } from '@/data/weddings';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import WeddingGallery from '@/components/weddings/WeddingGallery/WeddingGallery';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return weddings.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const wedding = getWeddingBySlug(slug);
  if (!wedding) return { title: 'Wedding Not Found' };
  return {
    title: `${wedding.coupleName} — ${wedding.type} Wedding at ${wedding.location}`,
    description: `Read the full story of ${wedding.coupleName}'s extraordinary ${wedding.type.toLowerCase()} wedding at ${wedding.location}, ${wedding.city}.`,
  };
}

const sectionLabelClass = 'inline-block font-label text-[0.68rem] tracking-[0.18em] uppercase text-accent mb-3';
const sectionTitleClass = 'font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-primary mb-4 leading-[1.15]';
const bodyTextClass = 'text-lg leading-[1.85] text-primary max-w-[72ch]';

function FloralDivider() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex-none w-12 h-px bg-accent" />
      <span className="text-[0.75rem] text-primary opacity-70">✦</span>
      <span className="flex-none w-12 h-px bg-accent" />
    </div>
  );
}

export default async function WeddingCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const wedding = getWeddingBySlug(slug);
  if (!wedding) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end justify-center">
        <div className="absolute inset-0">
          <Image
            src={wedding.heroImage}
            alt={`${wedding.coupleName} wedding`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{ backgroundImage: 'linear-gradient(0deg, rgba(42,24,18,0.75) 0%, rgba(42,24,18,0.2) 60%)' }}
          />
        </div>
        <div className="relative z-[2] text-center px-6 md:px-8 lg:px-12 xl:px-16 pt-16 pb-16 w-full">
          <AnimatedSection animation="fadeIn">
            <span className="inline-block font-label text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-4">{wedding.type} Wedding · {wedding.city}</span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold text-white leading-[1.05] tracking-[0.02em] mb-4">{wedding.coupleName}</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={400}>
            <p className="font-label text-[0.7rem] tracking-[0.15em] uppercase text-white/60 mb-2">{wedding.date}</p>
            <p className="text-lg text-white/80 italic font-display">{wedding.location}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="py-4 bg-white border-b border-accent/40">
        <div className="container">
          <Link href="/weddings" className="font-label text-[0.68rem] tracking-[0.1em] uppercase text-primary no-underline transition-colors duration-150 ease-out hover:text-accent">← Back to All Weddings</Link>
        </div>
      </div>

      {/* Couple Story */}
      <section className="section bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <span className={sectionLabelClass}>Their Story</span>
            <h2 className={sectionTitleClass}>The Couple</h2>
            <FloralDivider />
            <p className={bodyTextClass}>{wedding.coupleStory}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Location */}
      <section className="bg-cream py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2 md:gap-16">
            <AnimatedSection animation="slideLeft" className="h-full">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={wedding.thumbnailImage}
                  alt={`${wedding.location} venue`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideRight">
              <span className={sectionLabelClass}>The Venue</span>
              <h2 className={sectionTitleClass}>{wedding.venueDescription}</h2>
              <FloralDivider />
              <p className={bodyTextClass}>{wedding.whyChosen}</p>
              <div className="flex gap-6 mt-6 pt-6 border-t border-accent/40 flex-wrap">
                <div className="flex flex-col gap-1">
                  <span className="font-label text-[0.6rem] tracking-[0.15em] uppercase text-primary">City</span>
                  <span className="font-heading text-base font-semibold text-primary">{wedding.city}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label text-[0.6rem] tracking-[0.15em] uppercase text-primary">Wedding Type</span>
                  <span className="font-heading text-base font-semibold text-primary">{wedding.type}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-label text-[0.6rem] tracking-[0.15em] uppercase text-primary">Date</span>
                  <span className="font-heading text-base font-semibold text-primary">{wedding.date}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Handled */}
      <section className="section bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <span className={sectionLabelClass}>Our Role</span>
            <h2 className={sectionTitleClass}>What We Handled</h2>
            <FloralDivider />
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
            {wedding.whatWeHandled.map((item, i) => (
              <AnimatedSection key={i} delay={i * 60} className="flex gap-3 items-start p-4 bg-cream rounded-md border border-accent/40">
                <span className="text-accent text-lg font-bold shrink-0 leading-[1.4]">✓</span>
                <p className="text-sm leading-[1.6] text-primary">{item}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Notes */}
      <section className="bg-cream py-24">
        <div className="container-narrow">
          <AnimatedSection>
            <span className={sectionLabelClass}>Behind the Scenes</span>
            <h2 className={sectionTitleClass}>Planning Notes</h2>
            <FloralDivider />
            <p className={bodyTextClass}>{wedding.planningNotes}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Decor Story */}
      <section className="section bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <span className={sectionLabelClass}>Design & Décor</span>
            <h2 className={sectionTitleClass}>{wedding.decorStory.concept}</h2>
            <FloralDivider />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              {wedding.decorStory.colorPalette.map((color, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white/80 shadow-sm shrink-0"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
              <span className="font-label text-[0.65rem] tracking-[0.14em] uppercase text-primary ml-2">Colour Palette</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <blockquote className="font-display text-xl italic text-primary border-l-[3px] border-accent pl-5 mb-6 leading-[1.5]">
              &ldquo;{wedding.decorStory.atmosphere}&rdquo;
            </blockquote>
            <p className={bodyTextClass}>{wedding.decorStory.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <WeddingGallery images={wedding.gallery} />

      {/* Testimonial */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="bg-white border border-accent/40 rounded-xl px-10 py-12 text-center shadow-lg max-w-[700px] mx-auto">
              <div className="font-display text-[5rem] text-accent leading-[0.5] mb-6 opacity-35">&ldquo;</div>
              <blockquote className="font-display text-[clamp(1.1rem,2.2vw,1.4rem)] italic leading-[1.75] text-primary mb-6">{wedding.testimonial.quote}</blockquote>
              <div className="text-accent text-[1.1rem] tracking-[4px] mb-4">★★★★★</div>
              <p className="font-heading text-lg font-semibold text-primary mb-1">{wedding.testimonial.coupleName}</p>
              <p className="font-label text-[0.65rem] tracking-[0.14em] uppercase text-primary">{wedding.testimonial.date}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-primary py-24 text-center">
        <div className="container">
          <AnimatedSection>
            <p className="font-label text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-4">Your Story Awaits</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white mb-8 leading-[1.15]">Inspired? Let&apos;s Begin Planning Yours.</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary">Enquire Now</Link>
              <Link href="/weddings" className="btn btn-secondary">View More Weddings</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
