import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './EnquiryCTABanner.module.css';

export default function EnquiryCTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <Image src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1800&q=80" alt="Begin planning your destination wedding" fill sizes="100vw" style={{ objectFit: 'cover' }} />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <AnimatedSection>
          <span className={styles.label}>Your Story Begins Here</span>
          <h2 className={styles.title}>Ready to Begin Planning Your Destination Wedding?</h2>
          <p className={styles.subtitle}>Let's have an honest conversation about your vision. No pressure — just genuine guidance from people who love what they do.</p>
          <div className={styles.ctas}>
            <Link href="/contact" className="btn btn-primary">Enquire Now</Link>
            <a href="tel:+919820000000" className="btn btn-secondary">Call Us</a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
