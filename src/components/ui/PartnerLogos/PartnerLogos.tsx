'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import { partnerLogos } from '@/data/partnerLogos';

const loopLogos = [...partnerLogos, ...partnerLogos];

/** The "Venues & Brands We Work Alongside" strip. Logos come from @/data/partnerLogos. */
export default function PartnerLogos() {
  return (
    <section className="section-sm bg-cream border-y border-accent/25 overflow-hidden" aria-label="Venues and brands we work alongside">
      <div className="container">
        <AnimatedSection className="text-center mb-10">
          <span className="inline-block font-label text-[0.65rem] tracking-[0.2em] uppercase text-accent mb-2">
            Partnered With
          </span>
          <h2 className="font-heading text-2xl font-semibold text-primary">Venues & Brands We Work Alongside</h2>
        </AnimatedSection>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-cream to-transparent" />

        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {loopLogos.map((logo, i) => {
            // The strip is rendered twice to loop seamlessly; hide the repeat from screen readers.
            const isRepeat = i >= partnerLogos.length;
            return (
              <div
                key={logo.name + i}
                aria-hidden={isRepeat || undefined}
                className="shrink-0 flex items-center px-8 py-5 rounded-md border border-accent/40 bg-white"
              >
                <Image
                  src={logo.src}
                  alt={isRepeat ? '' : logo.name}
                  width={160}
                  height={40}
                  style={{ height: 28, width: 'auto' }}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
