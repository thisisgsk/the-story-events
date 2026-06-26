import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/data/destinations';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './DestinationsShowcase.module.css';

export default function DestinationsShowcase() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="Where We Work" title="Destinations We Plan" light centered />
        </AnimatedSection>
        <div className={styles.grid}>
          {destinations.map((dest, i) => (
            <AnimatedSection key={dest.slug} delay={i * 80} className={i === 0 ? styles.featured : styles.normal}>
              <Link href={`/venues-guides/destinations/${dest.slug}`} className={styles.card}>
                <div className={styles.imgWrapper}>
                  <Image src={dest.heroImage} alt={dest.name} fill sizes={i === 0 ? '(max-width:768px) 100vw, 50vw' : '(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw'} style={{ objectFit: 'cover' }} />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.label}>
                  <h3 className={styles.name}>{dest.name}</h3>
                  <p className={styles.state}>{dest.state}</p>
                  {i === 0 && <p className={styles.tagline}>{dest.tagline}</p>}
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={400} className={styles.cta}>
          <Link href="/venues-guides/destinations" className={styles.ctaLink}>Explore All Destinations →</Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
