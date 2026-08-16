'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { SortKey } from '@/types/locations';

interface SortMenuProps {
  value: SortKey;
  onChange: (value: SortKey) => void;
}

const options: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'alphabetical', label: 'A–Z' },
  { value: 'price-asc', label: 'Price · low to high' },
  { value: 'price-desc', label: 'Price · high to low' },
  { value: 'capacity-desc', label: 'Capacity · largest first' },
];

export default function SortMenu({ value, onChange }: SortMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-accent/40 font-label text-[0.64rem] font-medium tracking-[0.1em] uppercase text-primary whitespace-nowrap transition-colors duration-150 hover:border-accent"
      >
        <span className="text-primary/45">Sort</span>
        {active.label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="text-[0.6rem] text-primary/50"
          aria-hidden="true"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-[calc(100%+8px)] z-[60] min-w-[220px] rounded-lg bg-white border border-accent/40 shadow-lg overflow-hidden py-1.5"
          >
            {options.map((option) => (
              <li key={option.value} role="option" aria-selected={option.value === value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-[0.82rem] transition-colors duration-150 ${
                    option.value === value
                      ? 'text-primary bg-cream font-medium'
                      : 'text-primary/70 hover:bg-cream/70'
                  }`}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
