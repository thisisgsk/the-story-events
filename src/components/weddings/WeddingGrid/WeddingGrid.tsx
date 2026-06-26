'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { weddings } from '@/data/weddings';
import type { WeddingType } from '@/types';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './WeddingGrid.module.css';

const TYPES: Array<'All' | WeddingType> = ['All', 'Palace', 'Beach', 'Mountain', 'Intimate', 'Grand'];
const CITIES = ['All', 'Udaipur', 'Jaipur', 'Goa', 'Kerala', 'Hyderabad', 'Manali'];

export default function WeddingGrid() {
  const [activeType, setActiveType] = useState<string>('All');
  const [activeCity, setActiveCity] = useState<string>('All');

  const filtered = weddings.filter((w) => {
    const typeMatch = activeType === 'All' || w.type === activeType;
    const cityMatch = activeCity === 'All' || w.city === activeCity;
    return typeMatch && cityMatch;
  });

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="Our Portfolio"
            title="Weddings We've Had the Honour of Planning"
            subtitle="Every wedding here is a real love story, a real celebration, and a real testament to what's possible when planning is done right."
            centered
          />
        </AnimatedSection>

        {/* Filter Bar */}
        <AnimatedSection delay={150}>
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>By Type:</span>
              <div className={styles.filterButtons}>
                {TYPES.map((type) => (
                  <button
                    key={type}
                    className={`${styles.filterBtn} ${activeType === type ? styles.active : ''}`}
                    onClick={() => setActiveType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>By City:</span>
              <div className={styles.filterButtons}>
                {CITIES.map((city) => (
                  <button
                    key={city}
                    className={`${styles.filterBtn} ${activeCity === city ? styles.active : ''}`}
                    onClick={() => setActiveCity(city)}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Results count */}
        <p className={styles.resultCount}>
          Showing {filtered.length} wedding{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((wedding, i) => (
            <AnimatedSection key={wedding.slug} delay={i * 80} className={styles.cardWrapper}>
              <Link href={`/weddings/${wedding.slug}`} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={wedding.thumbnailImage}
                    alt={`${wedding.coupleName} wedding at ${wedding.location}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.overlay}>
                    <span className={styles.viewStory}>View Story →</span>
                  </div>
                  <div className={styles.typeBadge}>{wedding.type}</div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.coupleName}>{wedding.coupleName}</h3>
                  <p className={styles.venue}>{wedding.location}</p>
                  <p className={styles.date}>{wedding.date}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={styles.noResults}>
            <p>No weddings match your current filters.</p>
            <button onClick={() => { setActiveType('All'); setActiveCity('All'); }} className="btn btn-outline">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
