import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './PhilosophyPillar.module.css';

interface PhilosophyPillarProps {
  number: string;
  title: string;
  tagline: string;
  paragraphs: string[];
  image: string;
  reversed?: boolean;
  alt?: string;
  bgAlt?: boolean;
}

export default function PhilosophyPillar({ number, title, tagline, paragraphs, image, reversed, alt = '', bgAlt }: PhilosophyPillarProps) {
  return (
    <section className={`section ${bgAlt ? styles.bgAlt : styles.bgWhite}`}>
      <div className="container">
        <div className={`${styles.grid} ${reversed ? styles.reversed : ''}`}>
          <AnimatedSection animation={reversed ? 'slideRight' : 'slideLeft'} className={styles.imageCol}>
            <div className={styles.imgWrapper}>
              <Image src={image} alt={alt || title} fill sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              <div className={styles.imgOverlay} />
              <div className={styles.pillarNum}>{number}</div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation={reversed ? 'slideLeft' : 'slideRight'} className={styles.textCol}>
            <span className={styles.label}>Pillar {number}</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.tagline}>{tagline}</p>
            <div className={styles.ornament}>
              <span className={styles.line} /><span className={styles.rose}>✦</span><span className={styles.line} />
            </div>
            {paragraphs.map((p, i) => (
              <p key={i} className={styles.para}>{p}</p>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
