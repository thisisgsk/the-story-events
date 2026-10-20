'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Breadcrumbs, { type Crumb } from '../Breadcrumbs/Breadcrumbs';

const luxuryEase = [0.16, 1, 0.3, 1] as const;

interface DestinationCoverProps {
  image: string;
  imageAlt: string;
  /** Small label above the title, e.g. "Palace · Udaipur, India". */
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
}

/**
 * Cover for the country, city and venue pages — the same curtain reveal, Ken Burns
 * and gradient treatment as the Destinations hero, in a shorter frame.
 */
export default function DestinationCover({ image, imageAlt, eyebrow, title, subtitle, crumbs }: DestinationCoverProps) {
  return (
    <section
      className="relative h-[72svh] min-h-[520px] w-full overflow-hidden flex items-center justify-center"
      aria-label={`${title} cover`}
    >
      <motion.div
        className="absolute inset-0 z-[1]"
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.3, ease: luxuryEase }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className="animate-ken-burns"
        />
      </motion.div>

      <div
        className="absolute inset-0 z-[2]"
        style={{
          backgroundImage:
            'linear-gradient(170deg, rgba(42,24,18,0.3) 0%, rgba(42,24,18,0.5) 48%, rgba(42,24,18,0.8) 100%)',
        }}
      />

      <div className="relative z-[3] text-center px-6 max-w-[900px] pt-24">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
        >
          <Breadcrumbs items={crumbs} />
        </motion.div>

        <motion.span
          className="inline-block font-label text-[0.72rem] font-medium tracking-[0.22em] uppercase text-accent mb-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.55 }}
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          className="font-display text-[clamp(2.4rem,6vw,4.8rem)] font-semibold text-white leading-[1.06] tracking-[-0.01em] mb-5"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: luxuryEase, delay: 0.65 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="font-display text-[clamp(1.05rem,1.9vw,1.4rem)] italic text-white/80 leading-[1.55] max-w-[52ch] mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: luxuryEase, delay: 0.95 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
