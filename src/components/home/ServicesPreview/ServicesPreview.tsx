import Link from 'next/link';
import { services } from '@/data/services';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './ServicesPreview.module.css';

export default function ServicesPreview() {
  const preview = services.slice(0, 3);
  return (
    <section className={`section section-alt ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="What We Do"
            title="End-to-End Wedding Planning"
            subtitle="From the first call to the final farewell — we handle everything so you can live every moment."
            centered
          />
        </AnimatedSection>
        <div className={styles.grid}>
          {preview.map((svc, i) => (
            <AnimatedSection key={svc.id} delay={i * 120} className={styles.cardWrap}>
              <div className={styles.card}>
                <div className={styles.icon}>{svc.icon}</div>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardTagline}>{svc.tagline}</p>
                <p className={styles.cardDesc}>{svc.description.slice(0, 130)}…</p>
                <Link href="/services" className={styles.cardLink}>Learn More →</Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={400} className={styles.bottomCta}>
          <Link href="/services" className="btn btn-outline">Explore All Services</Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
