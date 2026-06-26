import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/data/destinations';
import PageHero from '@/components/ui/PageHero/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import type { Metadata } from 'next';
import styles from './destinations.module.css';

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
          <div className={styles.grid}>
            {destinations.map((dest, i) => (
              <AnimatedSection key={dest.slug} delay={i * 80} className={styles.cardWrap}>
                <Link href={`/venues-guides/destinations/${dest.slug}`} className={styles.card}>
                  <div className={styles.imgWrapper}>
                    <Image src={dest.heroImage} alt={dest.name} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                    <div className={styles.overlay} />
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.badge}>{dest.state}</div>
                    <h2 className={styles.destName}>{dest.name}</h2>
                    <p className={styles.tagline}>{dest.tagline}</p>
                    <div className={styles.highlights}>
                      {dest.highlights.slice(0, 3).map((h, j) => (
                        <span key={j} className={styles.highlight}>{h}</span>
                      ))}
                    </div>
                    <span className={styles.readMore}>Explore Destination →</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <AnimatedSection>
            <p className={styles.ctaLabel}>Not Sure Where to Start?</p>
            <h2 className={styles.ctaTitle}>Let Us Help You Choose</h2>
            <p className={styles.ctaSub}>We know every destination intimately. Tell us your vision and we'll match you with the perfect setting.</p>
            <Link href="/contact" className="btn btn-primary">Book a Free Consultation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
