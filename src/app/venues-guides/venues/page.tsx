import Image from 'next/image';
import Link from 'next/link';
import { venueGuides } from '@/data/destinations';
import PageHero from '@/components/ui/PageHero/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import type { Metadata } from 'next';
import styles from './venues.module.css';

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
          <div className={styles.grid}>
            {venueGuides.map((guide, i) => (
              <AnimatedSection key={guide.slug} delay={i * 80} className={styles.cardWrap}>
                <div className={styles.card}>
                  <div className={styles.imgWrapper}>
                    <Image src={guide.heroImage} alt={guide.title} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                    <div className={styles.overlay} />
                    <div className={styles.venueBadge}>{guide.venues.length} Venues</div>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.guideType}>{guide.type}</div>
                    <h2 className={styles.guideTitle}>{guide.title}</h2>
                    <p className={styles.guideDesc}>{guide.description.slice(0, 150)}...</p>
                    <div className={styles.venueNames}>
                      {guide.venues.slice(0, 3).map((v, j) => (
                        <span key={j} className={styles.typeTag}>{v.name}</span>
                      ))}
                    </div>
                    <Link href="/contact" className={styles.cta}>Get Venue Recommendations →</Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.consultSection}>
        <div className="container">
          <AnimatedSection>
            <SectionHeading label="Personalised" title="Not Sure Which Venue is Right For You?" subtitle="Every couple is different. Tell us your vision, guest count, and budget — we'll curate a personalised venue shortlist within 48 hours." centered light />
          </AnimatedSection>
          <AnimatedSection delay={200} className={styles.consultCta}>
            <Link href="/contact" className="btn btn-primary">Request Personalised Shortlist</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
