'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.45]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden flex items-center justify-center"
      aria-label="Destination specialists hero"
    >
      {/* Load-in curtain reveal */}
      <motion.div
        className="absolute inset-0 z-[1]"
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.3, ease: luxuryEase }}
      >
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <Image
            src="https://images.unsplash.com/photo-1681238325581-e26c5a5c0a51?w=1800&q=80"
            alt="An elegant destination wedding ceremony set up by the water at sunset"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className="animate-ken-burns"
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0 z-[2]"
        style={{
          backgroundImage:
            'linear-gradient(170deg, rgba(42,24,18,0.2) 0%, rgba(42,24,18,0.44) 50%, rgba(42,24,18,0.7) 100%)',
        }}
      />
      <motion.div className="absolute inset-0 z-[2] bg-primary" style={{ opacity: overlayOpacity }} aria-hidden="true" />

      <div className="relative z-[3] text-center px-6 max-w-[920px]">
        <motion.span
          className="inline-block font-label text-[0.72rem] font-medium tracking-[0.22em] uppercase text-accent mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          Destination Specialists
        </motion.span>

        <motion.h1
          className="font-display text-[clamp(2.8rem,6.5vw,5.6rem)] font-semibold text-white leading-[1.08] tracking-[-0.01em] mb-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: luxuryEase, delay: 0.65 }}
        >
          We Know Every Destination<br />
          <em className="italic text-accent font-normal">Like It’s Our Own Backyard</em>
        </motion.h1>

        <motion.p
          className="font-display text-[clamp(1.1rem,1.9vw,1.4rem)] italic text-white/78 mb-10 leading-[1.5] max-w-[56ch] mx-auto"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: luxuryEase, delay: 0.9 }}
        >
          From Rajasthan’s palaces to Thailand’s shores — our specialists have walked every venue, vetted every vendor, and planned every logistic long before you arrive.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: luxuryEase, delay: 1.1 }}
        >
          <Link href="/contact" className="btn btn-primary px-10 py-4">
            Start Planning
          </Link>
          <Link href="#destinations" className="btn btn-secondary px-10 py-4">
            Explore Destinations
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2"
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
