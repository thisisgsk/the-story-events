import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <Image src="/home-custom/img4.jpg" alt="Begin planning your dream wedding" fill sizes="100vw" style={{ objectFit: 'cover' }} />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <AnimatedSection>
          <span className={styles.label}>Your Story Awaits</span>
          <h2 className={styles.title}>Your Wedding Deserves to Be Extraordinary</h2>
          <p className={styles.subtitle}>One conversation. A lifetime of memories. Let&apos;s begin planning together.</p>
          <div className={styles.ctas}>
            <Link href="/contact" className="btn btn-primary">Start Planning</Link>
            <Link href="/weddings" className="btn btn-secondary">See Our Work</Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
