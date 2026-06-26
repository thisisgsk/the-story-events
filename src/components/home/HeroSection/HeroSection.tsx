import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.bg}>
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=80"
          alt="Luxury destination wedding at a palace in India"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className={styles.bgImg}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>Luxury Destination Wedding Planners</span>
        <h1 className={styles.title}>
          We Plan Weddings<br />
          <em className={styles.titleItalic}>That Become Legends</em>
        </h1>
        <p className={styles.subtitle}>
          Palaces, Beaches, Mountains &mdash; Wherever Your Love Story Belongs
        </p>
        <div className={styles.ctas}>
          <Link href="/contact" className={`btn btn-primary ${styles.ctaPrimary}`}>
            Plan Your Dream Wedding
          </Link>
          <Link href="/weddings" className={`btn btn-secondary ${styles.ctaSecondary}`}>
            View Our Work
          </Link>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollDot} />
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
