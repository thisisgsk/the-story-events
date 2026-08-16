'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { PRICE_TIER_LABELS, priceTierGlyph } from '@/data/locations';
import type { Destination } from '@/types/locations';

interface DestinationMastheadProps {
  destination: Destination | null;
  venueCount: number;
  onClear: () => void;
}

const luxuryEase = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: luxuryEase } },
};

/**
 * The destination "hub" panel — this carries the editorial content that used to
 * live on the standalone destination guide pages.
 */
export default function DestinationMasthead({ destination, venueCount, onClear }: DestinationMastheadProps) {
  return (
    <AnimatePresence mode="wait">
      {destination && (
        <motion.section
          key={destination.slug}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: luxuryEase }}
          className="overflow-hidden"
          aria-label={`About ${destination.name}`}
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative rounded-xl overflow-hidden bg-primary text-white mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
              {/* Copy */}
              <div className="p-7 sm:p-9 order-2 lg:order-1">
                <motion.div variants={item} className="flex items-center gap-3 mb-4">
                  <button
                    type="button"
                    onClick={onClear}
                    className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-white/45 hover:text-accent transition-colors duration-150 inline-flex items-center gap-1.5"
                  >
                    <span aria-hidden="true">←</span> All destinations
                  </button>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label text-[0.52rem] font-medium tracking-[0.13em] uppercase ${
                      destination.isOperating ? 'bg-accent text-primary' : 'bg-white/12 text-white border border-white/25'
                    }`}
                  >
                    {destination.isOperating ? 'Core Destination' : 'By Request'}
                  </span>
                </motion.div>

                <motion.p variants={item} className="font-label text-[0.6rem] tracking-[0.18em] uppercase text-accent mb-2">
                  {destination.locationLabel}
                </motion.p>
                <motion.h2 variants={item} className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-white leading-[1.05] mb-2">
                  {destination.name}
                </motion.h2>
                <motion.p variants={item} className="font-display italic text-lg text-white/60 mb-5">
                  {destination.tagline}
                </motion.p>
                <motion.p variants={item} className="text-[0.92rem] leading-[1.8] text-white/75 mb-6">
                  {destination.description}
                </motion.p>

                <motion.ul variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                  {destination.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2.5 text-[0.82rem] leading-[1.6] text-white/65">
                      <span className="font-display text-accent shrink-0" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {highlight}
                    </li>
                  ))}
                </motion.ul>

                <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-white/12">
                  {[
                    { label: 'Venues', value: String(venueCount) },
                    { label: 'Best Season', value: destination.bestSeason },
                    { label: 'Cost Tier', value: `${priceTierGlyph(destination.costTier)} ${PRICE_TIER_LABELS[destination.costTier]}` },
                    { label: 'Region', value: destination.region },
                  ].map((meta) => (
                    <div key={meta.label} className="flex flex-col gap-1">
                      <span className="font-label text-[0.54rem] tracking-[0.14em] uppercase text-white/40">
                        {meta.label}
                      </span>
                      <span className="font-heading text-[0.88rem] font-semibold text-white leading-[1.35]">
                        {meta.value}
                      </span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/[0.06] rounded-md p-4">
                    <p className="font-label text-[0.54rem] tracking-[0.14em] uppercase text-accent mb-1.5">Climate</p>
                    <p className="text-[0.8rem] leading-[1.65] text-white/65">{destination.climateNote}</p>
                  </div>
                  <div className="bg-white/[0.06] rounded-md p-4">
                    <p className="font-label text-[0.54rem] tracking-[0.14em] uppercase text-accent mb-1.5">Travel Tip</p>
                    <p className="text-[0.8rem] leading-[1.65] text-white/65">{destination.travelTip}</p>
                  </div>
                </motion.div>
              </div>

              {/* Image */}
              <div className="relative min-h-[240px] lg:min-h-full order-1 lg:order-2 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.12 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, ease: luxuryEase }}
                >
                  <Image
                    src={destination.heroImage}
                    alt={destination.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
                {/* Blend the image back into the panel — from the top on mobile, from the left once side-by-side */}
                <div
                  className="absolute inset-0 lg:hidden"
                  style={{ backgroundImage: 'linear-gradient(180deg, rgba(106,11,34,0.75) 0%, transparent 55%)' }}
                />
                <div
                  className="absolute inset-0 hidden lg:block"
                  style={{ backgroundImage: 'linear-gradient(90deg, rgba(106,11,34,0.9) 0%, transparent 45%)' }}
                />
              </div>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
