'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './WeddingGallery.module.css';
import type { GalleryImage } from '@/types';

interface WeddingGalleryProps {
  images: GalleryImage[];
}

export default function WeddingGallery({ images }: WeddingGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : 0));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : 0));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Gallery</span>
          <h2 className={styles.title}>The Wedding in Pictures</h2>
        </div>
        <div className={styles.grid}>
          {images.map((img, i) => (
            <button
              key={i}
              className={styles.gridItem}
              onClick={() => openLightbox(i)}
              aria-label={`View ${img.alt}`}
            >
              <div className={styles.imgWrapper}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.hoverOverlay}>
                  <span className={styles.expandIcon}>⤢</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          tabIndex={0}
        >
          {/* Image */}
          <div onClick={(e) => e.stopPropagation()} className={styles.lightboxInner}>
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1200}
              height={800}
              style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '85vh', borderRadius: '8px' }}
              priority
            />
            <p className={styles.lightboxCaption}>{images[lightboxIndex].alt}</p>
          </div>

          {/* Controls */}
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">✕</button>
          <button className={styles.navPrev} onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image">‹</button>
          <button className={styles.navNext} onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image">›</button>

          {/* Counter */}
          <div className={styles.counter}>{lightboxIndex + 1} / {images.length}</div>
        </div>
      )}
    </section>
  );
}
