'use client';

import { AnimatePresence, motion } from 'motion/react';

interface ResultsGridProps {
  items: { key: string; node: React.ReactNode }[];
  /** Grid column classes. Defaults to the card grid (1 / 2 / 3 columns). */
  className?: string;
}

const luxuryEase = [0.16, 1, 0.3, 1] as const;

/** Cap the stagger so a big reshuffle never crawls. */
const enterDelay = (index: number) => Math.min(index, 10) * 0.045;

/** Animated grid: items fade/scale in, and the rest glide into place when the filter changes. */
export default function ResultsGrid({
  items,
  className = 'grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3',
}: ResultsGridProps) {
  return (
    <div className={className}>
      <AnimatePresence mode="popLayout" initial={false}>
        {items.map((item, i) => (
          <motion.div
            key={item.key}
            layout
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.55, ease: luxuryEase, delay: enterDelay(i) },
            }}
            exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.22, ease: 'easeIn' } }}
            transition={{ layout: { type: 'spring', stiffness: 320, damping: 34 } }}
            className="h-full"
          >
            {item.node}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
