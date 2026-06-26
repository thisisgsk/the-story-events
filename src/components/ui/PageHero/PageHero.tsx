import Image from 'next/image';
import styles from './PageHero.module.css';

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image: string;
  height?: 'md' | 'lg';
}

export default function PageHero({ label, title, subtitle, image, height = 'md' }: PageHeroProps) {
  return (
    <section className={`${styles.hero} ${height === 'lg' ? styles.heroLg : ''}`}>
      <div className={styles.bg}>
        <Image src={image} alt={title} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.ornament}>
          <span className={styles.line} />
          <span className={styles.rose}>✦</span>
          <span className={styles.line} />
        </div>
      </div>
    </section>
  );
}
