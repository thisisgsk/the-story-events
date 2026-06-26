import Image from 'next/image';
import styles from './PhilosophyHero.module.css';

export default function PhilosophyHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=1800&q=80"
          alt="Intimate wedding ceremony — The Story Events Philosophy"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <span className={styles.label}>The Story Events Way</span>
        <h1 className={styles.title}>Five Pillars of Our Philosophy</h1>
        <p className={styles.subtitle}>
          Every choice we make, every vendor we select, every timeline we build — is guided
          by these principles.
        </p>
        <div className={styles.ornament}>
          <span className={styles.line} />
          <span className={styles.rose}>✦</span>
          <span className={styles.line} />
        </div>
        <div className={styles.pillarsRow} aria-hidden="true">
          {['01', '02', '03', '04', '05'].map((n) => (
            <span key={n} className={styles.pillarNum}>{n}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
