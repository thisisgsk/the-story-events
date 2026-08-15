'use client';

import { motion } from 'motion/react';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

const partners = [
  'Taj Hotels & Palaces',
  'The Leela Palaces',
  'Oberoi Udaivilas',
  'ITC Grand Bharat',
  'Rambagh Palace',
  'W Goa',
  'Falaknuma Palace',
  'Suryagarh Jaisalmer',
];

const loopPartners = [...partners, ...partners];

export default function PartnerLogos() {
  return (
    <section className="section-sm bg-cream border-y border-accent/25 overflow-hidden">
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
          {loopPartners.map((name, i) => (
            <div
              key={name + i}
              className="shrink-0 px-8 py-5 rounded-md border border-accent/40 bg-white font-label text-sm tracking-[0.08em] uppercase text-primary/70 whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
