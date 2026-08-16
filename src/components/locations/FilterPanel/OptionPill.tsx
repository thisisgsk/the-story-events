'use client';

import { motion } from 'motion/react';

interface OptionPillProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  /** Optional trailing marker, e.g. a dot for core destinations. */
  marker?: React.ReactNode;
}

export default function OptionPill({ label, selected, onClick, marker }: OptionPillProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-[0.75rem] leading-none transition-colors duration-200 ease-out ${
        selected
          ? 'bg-primary text-white border-primary'
          : 'bg-white text-primary/75 border-accent/40 hover:border-accent hover:text-primary'
      }`}
    >
      {marker}
      {label}
    </motion.button>
  );
}
