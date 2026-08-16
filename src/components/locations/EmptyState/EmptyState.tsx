'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

interface EmptyStateProps {
  /** How many near-matches we found after loosening filters. */
  fallbackCount: number;
  /** Human labels of the filters we relaxed, in the order they were dropped. */
  relaxed: string[];
  noun: string;
  onClearAll: () => void;
}

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export default function EmptyState({ fallbackCount, relaxed, noun, onClearAll }: EmptyStateProps) {
  const hasFallback = fallbackCount > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: luxuryEase }}
      className="rounded-xl border border-accent/40 bg-white p-7 sm:p-9 mb-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
        <motion.span
          aria-hidden="true"
          className="text-[1.6rem] shrink-0"
          animate={{ rotate: [0, -8, 8, 0] }}
          transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.5 }}
        >
          🧭
        </motion.span>

        <div className="flex-1">
          <h3 className="font-heading text-xl font-semibold text-primary mb-2">
            {hasFallback ? 'No exact matches — but these come close' : 'Nothing matches that combination yet'}
          </h3>

          {hasFallback ? (
            <p className="text-[0.9rem] leading-[1.7] text-primary/70">
              We couldn&apos;t find {noun} matching every filter, so we relaxed{' '}
              <span className="text-primary font-medium">{relaxed.join(', ')}</span> to show{' '}
              <span className="text-primary font-medium tabular-nums">{fallbackCount}</span> close alternative
              {fallbackCount === 1 ? '' : 's'} below.
            </p>
          ) : (
            <p className="text-[0.9rem] leading-[1.7] text-primary/70">
              That combination doesn&apos;t exist in our current collection — which doesn&apos;t mean it
              doesn&apos;t exist. Tell us what you had in mind and we&apos;ll go looking.
            </p>
          )}

          <div className="flex flex-wrap gap-3 mt-5">
            <button
              type="button"
              onClick={onClearAll}
              className="inline-flex items-center px-6 py-3 rounded-sm border-[1.5px] border-accent text-accent font-label text-[0.64rem] font-medium tracking-[0.12em] uppercase transition-colors duration-200 hover:bg-accent hover:text-white"
            >
              Clear all filters
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-sm bg-primary text-white font-label text-[0.64rem] font-medium tracking-[0.12em] uppercase transition-opacity duration-200 hover:opacity-90"
            >
              Tell us what you want
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
