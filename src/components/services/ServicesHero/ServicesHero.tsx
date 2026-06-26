import Image from 'next/image';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
  return (
    <section className={styles.hero} aria-label="Services hero">
      {/* Background image */}
      <div className={styles.imageWrapper}>
        <Image
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1800&q=80"
          alt="Elegant wedding ceremony setup with lush floral arrangements"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
        />
      </div>

      {/* Gradient overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <span className={styles.label}>Our Services</span>

        <h1 className={styles.title}>
          Every Detail,<br />
          <em>Perfectly Handled</em>
        </h1>

        <p className={styles.subtitle}>
          Seven distinct services. One seamless experience. Your perfect wedding.
        </p>

        {/* Decorative divider */}
        <div className={styles.divider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.dividerIcon}>✦</span>
          <span className={styles.dividerLine} />
        </div>
      </div>
    </section>
  );
}
