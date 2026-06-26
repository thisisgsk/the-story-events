import Image from 'next/image';
import Link from 'next/link';
import { weddings } from '@/data/weddings';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import WeddingGrid from '@/components/weddings/WeddingGrid/WeddingGrid';
import type { Metadata } from 'next';
import styles from './portfolio.module.css';

export const metadata: Metadata = {
  title: 'Our Weddings | Palace, Beach, Mountain & Intimate Wedding Stories',
  description:
    'Browse our portfolio of extraordinary destination weddings across India — from Udaipur palace weddings to Goa beach celebrations. Filter by type or location.',
};

export default function WeddingsPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=80"
            alt="Wedding portfolio hero"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <AnimatedSection animation="fadeIn">
            <span className={styles.heroLabel}>Our Portfolio</span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <h1 className={styles.heroTitle}>Weddings We&apos;ve Had the<br />Honour of Planning</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={400}>
            <p className={styles.heroSubtitle}>
              Six couples. Six extraordinary stories. Filter by location or wedding type to find your inspiration.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid with Filters */}
      <WeddingGrid />

      {/* CTA */}
      <section className={styles.cta}>
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
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary">Begin Planning</Link>
              <Link href="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
