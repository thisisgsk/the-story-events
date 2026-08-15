'use client';

import { motion, type Variants } from 'motion/react';

const luxuryEase = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: luxuryEase } },
};

export default function ServicesHeadline() {
  return (
    <section className="relative bg-cream py-20 lg:py-28 overflow-hidden" aria-label="Services introduction">
      <motion.div
        className="container max-w-[820px] mx-auto text-center flex flex-col items-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
      >
        <motion.span
          variants={item}
          className="inline-block font-label text-xs font-medium tracking-[0.22em] uppercase text-accent mb-5"
        >
          Our Services
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(2.25rem,7vw,4.5rem)] font-semibold text-primary leading-[1.08] tracking-[-0.01em] mb-6"
        >
          Every Detail,<br />
          <em className="italic font-normal text-accent">Perfectly Handled</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="font-body text-[clamp(1rem,2vw,1.25rem)] font-light text-primary/72 max-w-[52ch] leading-[1.65] mb-8 tracking-[0.015em]"
        >
          Seven distinct services. One seamless experience. Your perfect wedding.
        </motion.p>

        {/* Decorative divider — draws inward from both sides */}
        <motion.div variants={item} className="flex items-center gap-4 w-[220px]" aria-hidden="true">
          <motion.span
            className="flex-1 h-px bg-primary/25 origin-right"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: luxuryEase, delay: 0.55 }}
          />
          <span className="text-[0.85rem] text-accent opacity-80">✦</span>
          <motion.span
            className="flex-1 h-px bg-primary/25 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: luxuryEase, delay: 0.55 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
