'use client';

import { motion } from 'motion/react';
import type { NetworkFilter } from '@/types/locations';

interface NetworkToggleProps {
  value: NetworkFilter;
  onChange: (value: NetworkFilter) => void;
  layoutId?: string;
}

const options: { value: NetworkFilter; label: string; note: string }[] = [
  { value: 'all', label: 'Show all', note: 'Every destination and property we can plan.' },
  { value: 'in-network', label: 'In our network', note: 'Our operating destinations, with on-ground teams and vetted vendors.' },
  { value: 'on-request', label: 'Available by request', note: 'Outside our footprint — we plan these with partners and longer lead times.' },
];

/**
 * Deliberately prominent rather than buried in the filter list: the difference
 * between a destination we run and one we arrange is an expectations issue, not
 * a preference.
 */
export default function NetworkToggle({ value, onChange, layoutId = 'network-pill' }: NetworkToggleProps) {
  const active = options.find((o) => o.value === value) ?? options[0];

  return (
    <div>
      <div className="flex flex-col gap-1.5" role="radiogroup" aria-label="Network availability">
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onChange(option.value)}
              className="relative text-left px-4 py-2.5 rounded-md transition-colors duration-200 ease-out"
            >
              {isActive && (
                <motion.span
                  layoutId={layoutId}
                  className="absolute inset-0 rounded-md bg-primary"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span className={`relative z-[1] flex items-center gap-2.5 ${isActive ? 'text-white' : 'text-primary/75'}`}>
                <span
                  className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-200 ${
                    option.value === 'in-network'
                      ? isActive ? 'bg-accent' : 'bg-accent/70'
                      : option.value === 'on-request'
                        ? isActive ? 'bg-white/80' : 'bg-primary/30'
                        : isActive ? 'bg-white/60' : 'bg-primary/20'
                  }`}
                />
                <span className="font-label text-[0.68rem] font-medium tracking-[0.1em] uppercase">
                  {option.label}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.p
        key={active.value}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="text-[0.78rem] leading-[1.6] text-primary/60 mt-3 px-1"
      >
        {active.note}
      </motion.p>
    </div>
  );
}
