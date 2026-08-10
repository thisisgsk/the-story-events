'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
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
    <section className="bg-cream py-24">
      <div className="container">
        <div className="text-center mb-10">
          <span className="inline-block font-label text-[0.68rem] tracking-[0.18em] uppercase text-accent mb-3">Gallery</span>
          <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-bold text-primary">The Wedding in Pictures</h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              className={`group block border-0 bg-transparent p-0 cursor-pointer rounded-md overflow-hidden ${
                i === 0 || i === 3 ? 'lg:col-span-2' : ''
              }`}
              onClick={() => openLightbox(i)}
              aria-label={`View ${img.alt}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-slow ease-in-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 z-[2] bg-[rgba(42,24,18,0.3)] flex items-center justify-center opacity-0 transition-opacity duration-[250ms] ease-in-out group-hover:opacity-100">
                  <span className="text-[2rem] text-white opacity-85">⤢</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox-backdrop"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
            tabIndex={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Image */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-4 relative z-[1]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                width={1200}
                height={800}
                style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '85vh', borderRadius: '8px' }}
                priority
              />
              <p className="text-sm text-white/55 italic text-center">{images[lightboxIndex].alt}</p>
            </motion.div>

            {/* Controls */}
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">✕</button>
            <button
              className="fixed top-1/2 -translate-y-1/2 left-6 bg-white/10 text-white border border-white/20 w-[52px] h-[52px] rounded-full text-[1.8rem] flex items-center justify-center cursor-pointer transition-colors duration-150 ease-out z-10 hover:bg-white/22"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="fixed top-1/2 -translate-y-1/2 right-6 bg-white/10 text-white border border-white/20 w-[52px] h-[52px] rounded-full text-[1.8rem] flex items-center justify-center cursor-pointer transition-colors duration-150 ease-out z-10 hover:bg-white/22"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
            >
              ›
            </button>

            {/* Counter */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 font-label text-[0.7rem] tracking-[0.1em] text-white/50">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
