'use client';

import { motion } from 'motion/react';
import type { BrowseView } from '@/types/locations';

interface ViewToggleProps {
  view: BrowseView;
  onChange: (view: BrowseView) => void;
  destinationCount: number;
  venueCount: number;
}

const options: { value: BrowseView; label: string; hint: string }[] = [
  { value: 'destinations', label: 'Browse by Destination', hint: 'Where we operate' },
  { value: 'venues', label: 'Browse by Venue', hint: 'Property-first' },
];

export default function ViewToggle({ view, onChange, destinationCount, venueCount }: ViewToggleProps) {
  return (
    <div
      className="inline-flex w-full sm:w-auto p-1.5 rounded-full bg-white border border-accent/40 shadow-sm"
      role="tablist"
      aria-label="Browsing mode"
    >
      {options.map((option) => {
        const isActive = view === option.value;
        const count = option.value === 'destinations' ? destinationCount : venueCount;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className="relative flex-1 sm:flex-none px-4 sm:px-7 py-3 rounded-full font-label text-[0.66rem] sm:text-[0.7rem] font-medium tracking-[0.12em] uppercase whitespace-nowrap transition-colors duration-200 ease-out"
          >
            {isActive && (
              <motion.span
                layoutId="view-toggle-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: 'spring', stiffness: 420, damping: 36 }}
              />
            )}
            <span className={`relative z-[1] flex items-center justify-center gap-2 ${isActive ? 'text-white' : 'text-primary/70'}`}>
              <span className="hidden sm:inline">{option.label}</span>
              <span className="sm:hidden">{option.value === 'destinations' ? 'Destinations' : 'Venues'}</span>
              <motion.span
                key={count}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className={`text-[0.62rem] tabular-nums px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-accent text-primary' : 'bg-cream text-primary/60'
                }`}
              >
                {count}
              </motion.span>
            </span>
            <span className="sr-only">{option.hint}</span>
          </button>
        );
      })}
    </div>
  );
}
