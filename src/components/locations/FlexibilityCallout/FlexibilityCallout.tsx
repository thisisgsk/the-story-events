'use client';

import { motion } from 'motion/react';
import { destinations, venues } from '@/data/locations';

interface FlexibilityCalloutProps {
  onBrowseOnRequest: () => void;
}

const onRequestVenues = venues.filter((v) => !v.inNetwork).length;
const onRequestDestinations = destinations.filter((d) => !d.isOperating).length;

export default function FlexibilityCallout({ onBrowseOnRequest }: FlexibilityCalloutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-xl bg-primary text-white p-6 sm:p-8 mb-8"
    >
      {/* Slow sweeping highlight */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 -left-1/3 w-1/3 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(100deg, transparent, rgba(227,202,122,0.14), transparent)',
        }}
        animate={{ x: ['0%', '420%'] }}
        transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 }}
      />

      <div className="relative z-[1] flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-[62ch]">
          <p className="font-label text-[0.6rem] font-medium tracking-[0.2em] uppercase text-accent mb-2.5">
            We plan weddings anywhere
          </p>
          <h3 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-[1.2] mb-2.5">
            Don&apos;t see your dream destination?
          </h3>
          <p className="text-[0.92rem] leading-[1.7] text-white/70">
            Our core destinations are where we hold on-ground teams and vetted vendor networks.
            Everywhere else, we still say yes — {onRequestVenues} properties across{' '}
            {onRequestDestinations} further destinations are available by request, with a little
            more lead time and a partner planner alongside us.
          </p>
        </div>

        <motion.button
          type="button"
          onClick={onBrowseOnRequest}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          className="shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-sm bg-accent text-primary font-label text-[0.66rem] font-medium tracking-[0.12em] uppercase whitespace-nowrap"
        >
          Browse request venues
          <span aria-hidden="true">→</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
