'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Image
          src="/home-custom/img3.png"
          alt="Luxury destination wedding at a palace in India"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className="animate-ken-burns"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage:
              'linear-gradient(170deg, rgba(42,24,18,0.18) 0%, rgba(42,24,18,0.42) 50%, rgba(42,24,18,0.68) 100%)',
          }}
        />
      </div>

      <div className="relative z-[2] text-center px-6 max-w-[900px]">
        <motion.span
          className="inline-block font-label text-[0.72rem] font-medium tracking-[0.22em] uppercase text-accent mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          Luxury Destination Wedding Planners
        </motion.span>

        <motion.h1
          className="font-display text-[clamp(3rem,7vw,6rem)] font-bold text-white leading-[1.06] tracking-[-0.01em] mb-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: luxuryEase, delay: 0.65 }}
        >
          We Plan Weddings<br />
          <em className="italic text-accent font-normal">That Become Legends</em>
        </motion.h1>

        <motion.p
          className="font-display text-[clamp(1.15rem,2vw,1.5rem)] italic text-white/78 mb-10 leading-[1.5]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: luxuryEase, delay: 0.9 }}
        >
          Palaces, Beaches, Mountains &mdash; Wherever Your Love Story Belongs
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: luxuryEase, delay: 1.1 }}
        >
          <Link href="/contact" className="btn btn-primary px-10 py-4">
            Plan Your Dream Wedding
          </Link>
          <Link href="/weddings" className="btn btn-secondary px-10 py-4">
            View Our Work
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 1.6 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce-scroll-dot" />
        <span
          className="block w-px h-10"
          style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }}
        />
        <span className="font-label text-[0.58rem] tracking-[0.2em] uppercase text-white/40">Scroll</span>
      </motion.div>
    </section>
  );
}
