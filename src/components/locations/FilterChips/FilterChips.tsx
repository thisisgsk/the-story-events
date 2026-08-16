'use client';

import { AnimatePresence, motion } from 'motion/react';
import type { AppliedChip } from '@/types/locations';

interface FilterChipsProps {
  chips: AppliedChip[];
  onRemove: (chip: AppliedChip) => void;
  onClearAll: () => void;
}

export default function FilterChips({ chips, onRemove, onClearAll }: FilterChipsProps) {
  return (
    <AnimatePresence initial={false}>
      {chips.length > 0 && (
        <motion.div
          key="chip-bar"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="flex flex-wrap items-center gap-2 pb-5">
            <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-primary/45 mr-1">
              Filtering by
            </span>

            <AnimatePresence mode="popLayout" initial={false}>
              {chips.map((chip) => (
                <motion.button
                  key={chip.id}
                  layout
                  type="button"
                  onClick={() => onRemove(chip)}
                  initial={{ opacity: 0, scale: 0.7, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: -6 }}
                  transition={{ type: 'spring', stiffness: 480, damping: 32 }}
                  className={`group inline-flex items-center gap-2 pl-3.5 pr-2.5 py-1.5 rounded-full text-[0.74rem] leading-none border transition-colors duration-200 ${
                    chip.group === 'network'
                      ? 'bg-primary text-white border-primary hover:bg-primary/90'
                      : 'bg-white text-primary border-accent/50 hover:border-accent'
                  }`}
                  aria-label={`Remove filter ${chip.label}`}
                >
                  {chip.label}
                  <span
                    className={`text-[0.9rem] leading-none transition-transform duration-150 group-hover:rotate-90 ${
                      chip.group === 'network' ? 'text-white/70' : 'text-primary/40'
                    }`}
                    aria-hidden="true"
                  >
                    ×
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>

            <motion.button
              layout
              type="button"
              onClick={onClearAll}
              className="font-label text-[0.62rem] tracking-[0.1em] uppercase text-accent hover:text-primary transition-colors duration-150 ml-1"
            >
              Clear all
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
