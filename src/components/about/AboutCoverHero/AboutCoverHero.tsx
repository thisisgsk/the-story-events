'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function AboutCoverHero() {
  return (
    <section className="relative h-[95vh] min-h-[560px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=2000&q=80"
          alt="The Story Events team"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(42,24,18,0.15) 0%, rgba(42,24,18,0.05) 30%, rgba(42,24,18,0.05) 60%, rgba(42,24,18,0.55) 100%)',
        }}
      />

      <motion.div
        className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="font-label text-[0.62rem] tracking-[0.24em] uppercase text-white/70">Scroll</span>
        <span className="block w-px h-8 bg-white/50 animate-[var(--animate-bounce-scroll-dot)]" />
      </motion.div>
    </section>
  );
}
