import Image from 'next/image';
import Link from 'next/link';
import { weddings } from '@/data/weddings';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './PortfolioPreview.module.css';

export default function PortfolioPreview() {
  const featured = weddings.slice(0, 4);
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="Our Portfolio" title="Featured Love Stories" subtitle="Real weddings planned with care, creativity, and complete dedication." centered />
        </AnimatedSection>
        <div className={styles.grid}>
          {featured.map((w, i) => (
            <AnimatedSection key={w.slug} delay={i * 100} className={styles.cardWrap}>
              <Link href={`/weddings/${w.slug}`} className={styles.card}>
                <div className={styles.imgWrapper}>
                  <Image src={w.thumbnailImage} alt={`${w.coupleName} at ${w.location}`} fill sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw" style={{ objectFit: 'cover' }} />
                  <div className={styles.overlay}>
                    <span className={styles.viewBtn}>View Story →</span>
                  </div>
                  <div className={styles.badge}>{w.type}</div>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.coupleName}>{w.coupleName}</h3>
                  <p className={styles.location}>{w.location} · {w.city}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={400} className={styles.cta}>
          <Link href="/weddings" className="btn btn-outline">View All Weddings</Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
