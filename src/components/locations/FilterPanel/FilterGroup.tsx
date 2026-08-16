'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface FilterGroupProps {
  title: string;
  /** Number of active selections, surfaced as a badge when collapsed. */
  count?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function FilterGroup({ title, count = 0, defaultOpen = false, children }: FilterGroupProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-accent/25 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 py-4 text-left group"
      >
        <span className="flex items-center gap-2">
          <span className="font-label text-[0.66rem] font-medium tracking-[0.14em] uppercase text-primary transition-colors duration-150 group-hover:text-accent">
            {title}
          </span>
          <AnimatePresence>
            {count > 0 && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                className="font-label text-[0.58rem] tabular-nums w-[18px] h-[18px] rounded-full bg-accent text-primary flex items-center justify-center"
              >
                {count}
              </motion.span>
            )}
          </AnimatePresence>
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-3 h-3 shrink-0 text-primary/50"
          aria-hidden="true"
        >
          <span className="absolute top-1/2 left-0 w-3 h-px bg-current -translate-y-1/2" />
          <span className="absolute left-1/2 top-0 h-3 w-px bg-current -translate-x-1/2" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
