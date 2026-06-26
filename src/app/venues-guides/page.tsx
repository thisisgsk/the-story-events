import Image from 'next/image';
import Link from 'next/link';
import { destinations, venueGuides, planningGuides } from '@/data/destinations';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import type { Metadata } from 'next';
import styles from './venues-guides.module.css';

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
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1800&q=80"
            alt="Venues and planning guides"
            fill priority sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <AnimatedSection animation="fadeIn">
            <span className={styles.heroLabel}>Resource Hub</span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <h1 className={styles.heroTitle}>Venues & Planning Guides</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={400}>
            <p className={styles.heroSubtitle}>
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
          <div className={styles.categoryGrid}>
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.href} delay={i * 120} className={styles.categoryCard}>
                <Link href={cat.href} className={styles.catLink}>
                  <div className={styles.catImage}>
                    <Image src={cat.image} alt={cat.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                    <div className={styles.catOverlay} />
                    <div className={styles.catCount}>{cat.count} {cat.label}</div>
                  </div>
                  <div className={styles.catBody}>
                    <h2 className={styles.catTitle}>{cat.title}</h2>
                    <p className={styles.catDesc}>{cat.description}</p>
                    <span className={styles.catCta}>Explore →</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Destination Preview */}
      <section className={`section-alt ${styles.quickSection}`}>
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Top Destinations"
              title="Where Do You Want to Say &lsquo;I Do&rsquo;?"
              centered
            />
          </AnimatedSection>
          <div className={styles.destGrid}>
            {destinations.map((dest, i) => (
              <AnimatedSection key={dest.slug} delay={i * 80}>
                <Link href={`/venues-guides/destinations/${dest.slug}`} className={styles.destCard}>
                  <div className={styles.destImage}>
                    <Image src={dest.thumbnailImage} alt={dest.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw" style={{ objectFit: 'cover' }} />
                    <div className={styles.destOverlay} />
                  </div>
                  <div className={styles.destBody}>
                    <h3 className={styles.destName}>{dest.name}</h3>
                    <p className={styles.destState}>{dest.state}</p>
                  </div>
                </Link>
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
            <h2 className={styles.ctaTitle}>Let Our Experts Guide You</h2>
            <p className={styles.ctaSubtitle}>The right destination and venue for your wedding depends on your vision, guest count, and budget. Let us help you find the perfect match.</p>
            <Link href="/contact" className="btn btn-primary">Book a Free Consultation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
