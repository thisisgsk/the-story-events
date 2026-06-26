import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/data/destinations';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './DestinationsPreview.module.css';

export default function DestinationsPreview() {
  const top = destinations.slice(0, 5);
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="Where We Plan" title="India's Most Breathtaking Wedding Destinations" light centered />
        </AnimatedSection>
        <div className={styles.grid}>
          {top.map((dest, i) => (
            <AnimatedSection key={dest.slug} delay={i * 80}>
              <Link href={`/venues-guides/destinations/${dest.slug}`} className={styles.card}>
                <div className={styles.imgWrapper}>
                  <Image src={dest.thumbnailImage} alt={dest.name} fill sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,20vw" style={{ objectFit: 'cover' }} />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.label}>
                  <h3 className={styles.name}>{dest.name}</h3>
                  <p className={styles.state}>{dest.state}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={500} className={styles.cta}>
          <Link href="/venues-guides/destinations" className={styles.ctaLink}>Explore All Destinations →</Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
