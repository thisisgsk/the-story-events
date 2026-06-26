import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { destinations, getDestinationBySlug } from '@/data/destinations';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import type { Metadata } from 'next';
import styles from './destination-detail.module.css';

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
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src={dest.heroImage} alt={dest.name} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <AnimatedSection animation="fadeIn">
            <Link href="/venues-guides/destinations" className={styles.backLink}>← All Destinations</Link>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <span className={styles.heroState}>{dest.state}</span>
            <h1 className={styles.heroTitle}>{dest.name}</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={400}>
            <p className={styles.heroTagline}>{dest.tagline}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className={styles.overviewGrid}>
            <AnimatedSection animation="slideLeft" className={styles.overviewText}>
              <span className={styles.sectionLabel}>Overview</span>
              <h2 className={styles.sectionTitle}>Why {dest.name}?</h2>
              <div className={styles.ornament}>
                <span className={styles.ornLine}/><span className={styles.ornRose}>✦</span><span className={styles.ornLine}/>
              </div>
              <p className={styles.overviewPara}>{dest.description}</p>
              <div className={styles.quickFacts}>
                <div className={styles.fact}>
                  <span className={styles.factLabel}>Best Season</span>
                  <span className={styles.factValue}>{dest.bestSeason}</span>
                </div>
                <div className={styles.fact}>
                  <span className={styles.factLabel}>Travel Tip</span>
                  <span className={styles.factValue} style={{ fontSize: 'var(--text-sm)', fontWeight: 'normal', color: 'var(--color-text-muted)' }}>{dest.travelTip}</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideRight" className={styles.overviewImg}>
              <div className={styles.imgWrapper}>
                <Image src={dest.thumbnailImage} alt={`${dest.name} wedding venue`} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover', borderRadius: '16px' }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className={`section ${styles.altBg}`}>
        <div className="container">
          <AnimatedSection>
            <SectionHeading label="What to Expect" title={`The Best of ${dest.name}`} centered />
          </AnimatedSection>
          <div className={styles.highlightsGrid}>
            {dest.highlights.map((h, i) => (
              <AnimatedSection key={i} delay={i * 60} className={styles.highlightCard}>
                <span className={styles.highlightNum}>{String(i + 1).padStart(2, '0')}</span>
                <p className={styles.highlightText}>{h}</p>
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
          <div className={styles.venuesList}>
            {dest.venues.map((venue, i) => (
              <AnimatedSection key={i} delay={i * 60} className={styles.venueItem}>
                <span className={styles.venueIcon}>🏰</span>
                <span className={styles.venueName}>{venue}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <AnimatedSection>
            <p className={styles.ctaLabel}>Ready to Begin?</p>
            <h2 className={styles.ctaTitle}>Plan Your {dest.name} Wedding with Us</h2>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn-primary">Enquire Now</Link>
              <Link href="/weddings" className="btn btn-secondary">See Our Work</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
