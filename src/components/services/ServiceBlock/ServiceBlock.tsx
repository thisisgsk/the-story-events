import Image from 'next/image';
import Link from 'next/link';
import type { Service } from '@/types';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './ServiceBlock.module.css';

interface ServiceBlockProps {
  service: Service;
  reversed?: boolean;
  index: number;
}

export default function ServiceBlock({
  service,
  reversed = false,
  index,
}: ServiceBlockProps) {
  const serviceNumber = String(index + 1).padStart(2, '0');

  return (
    <section
      className={`${styles.block} ${index % 2 !== 0 ? styles.blockAlt : ''}`}
      aria-labelledby={`service-title-${service.id}`}
    >
      <div className={`container ${styles.inner} ${reversed ? styles.innerReversed : ''}`}>

        {/* ── Image Panel ── */}
        <AnimatedSection
          animation={reversed ? 'slideRight' : 'slideLeft'}
          delay={100}
          className={styles.imageSide}
        >
          <div className={styles.imageFrame}>
            <div className={styles.imageWrap}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 580px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Decorative number badge */}
            <div className={styles.numberBadge} aria-hidden="true">
              {serviceNumber}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Text Panel ── */}
        <AnimatedSection
          animation={reversed ? 'slideLeft' : 'slideRight'}
          delay={200}
          className={styles.textSide}
        >
          {/* Large decorative icon */}
          <div className={styles.decorIcon} aria-hidden="true">
            {service.icon}
          </div>

          <div className={styles.textContent}>
            <span className={styles.label}>Service {serviceNumber}</span>

            <h2
              id={`service-title-${service.id}`}
              className={styles.title}
            >
              {service.title}
            </h2>

            <p className={styles.tagline}>{service.tagline}</p>

            <p className={styles.description}>{service.description}</p>

            {/* Features list */}
            <ul className={styles.features} aria-label={`Features of ${service.title}`}>
              {service.features.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  <span className={styles.checkmark} aria-hidden="true">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className={`btn btn-outline ${styles.cta}`}>
              Enquire About This Service
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
