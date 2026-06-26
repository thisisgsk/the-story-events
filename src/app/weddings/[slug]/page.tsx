import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getWeddingBySlug, weddings } from '@/data/weddings';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import WeddingGallery from '@/components/weddings/WeddingGallery/WeddingGallery';
import type { Metadata } from 'next';
import styles from './case-study.module.css';

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

export default async function WeddingCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const wedding = getWeddingBySlug(slug);
  if (!wedding) notFound();

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src={wedding.heroImage}
            alt={`${wedding.coupleName} wedding`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <AnimatedSection animation="fadeIn">
            <span className={styles.heroLabel}>{wedding.type} Wedding · {wedding.city}</span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <h1 className={styles.heroTitle}>{wedding.coupleName}</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={400}>
            <p className={styles.heroDate}>{wedding.date}</p>
            <p className={styles.heroVenue}>{wedding.location}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/weddings" className={styles.breadLink}>← Back to All Weddings</Link>
        </div>
      </div>

      {/* Couple Story */}
      <section className={`section ${styles.storySection}`}>
        <div className="container-narrow">
          <AnimatedSection>
            <span className={styles.sectionLabel}>Their Story</span>
            <h2 className={styles.sectionTitle}>The Couple</h2>
            <div className={styles.floralDivider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerRose}>✦</span>
              <span className={styles.dividerLine} />
            </div>
            <p className={styles.bodyText}>{wedding.coupleStory}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Location */}
      <section className={`section-alt ${styles.locationSection}`}>
        <div className="container">
          <div className={styles.locationGrid}>
            <AnimatedSection animation="slideLeft" className={styles.locationImage}>
              <div className={styles.locationImgWrapper}>
                <Image
                  src={wedding.thumbnailImage}
                  alt={`${wedding.location} venue`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', borderRadius: '16px' }}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideRight" className={styles.locationText}>
              <span className={styles.sectionLabel}>The Venue</span>
              <h2 className={styles.sectionTitle}>{wedding.venueDescription}</h2>
              <div className={styles.floralDivider}>
                <span className={styles.dividerLine} />
                <span className={styles.dividerRose}>✦</span>
                <span className={styles.dividerLine} />
              </div>
              <p className={styles.bodyText}>{wedding.whyChosen}</p>
              <div className={styles.locationMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>City</span>
                  <span className={styles.metaValue}>{wedding.city}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Wedding Type</span>
                  <span className={styles.metaValue}>{wedding.type}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Date</span>
                  <span className={styles.metaValue}>{wedding.date}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Handled */}
      <section className={`section ${styles.handledSection}`}>
        <div className="container-narrow">
          <AnimatedSection>
            <span className={styles.sectionLabel}>Our Role</span>
            <h2 className={styles.sectionTitle}>What We Handled</h2>
            <div className={styles.floralDivider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerRose}>✦</span>
              <span className={styles.dividerLine} />
            </div>
          </AnimatedSection>
          <div className={styles.handledGrid}>
            {wedding.whatWeHandled.map((item, i) => (
              <AnimatedSection key={i} delay={i * 60} className={styles.handledItem}>
                <span className={styles.checkmark}>✓</span>
                <p>{item}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Notes */}
      <section className={`section-alt ${styles.planningSection}`}>
        <div className="container-narrow">
          <AnimatedSection>
            <span className={styles.sectionLabel}>Behind the Scenes</span>
            <h2 className={styles.sectionTitle}>Planning Notes</h2>
            <div className={styles.floralDivider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerRose}>✦</span>
              <span className={styles.dividerLine} />
            </div>
            <p className={styles.bodyText}>{wedding.planningNotes}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Decor Story */}
      <section className={`section ${styles.decorSection}`}>
        <div className="container-narrow">
          <AnimatedSection>
            <span className={styles.sectionLabel}>Design & Décor</span>
            <h2 className={styles.sectionTitle}>{wedding.decorStory.concept}</h2>
            <div className={styles.floralDivider}>
              <span className={styles.dividerLine} />
              <span className={styles.dividerRose}>✦</span>
              <span className={styles.dividerLine} />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className={styles.colorPalette}>
              {wedding.decorStory.colorPalette.map((color, i) => (
                <div
                  key={i}
                  className={styles.colorSwatch}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
              <span className={styles.colorLabel}>Colour Palette</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <blockquote className={styles.atmosphere}>
              &ldquo;{wedding.decorStory.atmosphere}&rdquo;
            </blockquote>
            <p className={styles.bodyText}>{wedding.decorStory.description}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <WeddingGallery images={wedding.gallery} />

      {/* Testimonial */}
      <section className={`section ${styles.testimonialSection}`}>
        <div className="container-narrow">
          <AnimatedSection>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <blockquote className={styles.quote}>{wedding.testimonial.quote}</blockquote>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quoteName}>{wedding.testimonial.coupleName}</p>
              <p className={styles.quoteDate}>{wedding.testimonial.date}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Next Steps */}
      <section className={styles.ctaSection}>
        <div className="container">
          <AnimatedSection>
            <p className={styles.ctaLabel}>Your Story Awaits</p>
            <h2 className={styles.ctaTitle}>Inspired? Let&apos;s Begin Planning Yours.</h2>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary">Enquire Now</Link>
              <Link href="/weddings" className="btn btn-secondary">View More Weddings</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
