'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export default function LocationsCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28 text-center">
      <motion.div className="absolute inset-0 scale-[1.2]" style={{ y: imageY }}>
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1800&q=80"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-primary/85" />

      <div className="container relative z-[1]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: luxuryEase }}
          className="font-label text-[0.66rem] font-medium tracking-[0.2em] uppercase text-accent mb-4"
        >
          Still deciding?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: luxuryEase, delay: 0.1 }}
          className="font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold text-white leading-[1.1] mb-5"
        >
          Tell us the feeling. <em className="italic font-normal text-accent">We&apos;ll find the place.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: luxuryEase, delay: 0.2 }}
          className="text-lg text-white/65 max-w-[54ch] mx-auto mb-9 leading-[1.75]"
        >
          Most couples arrive with a mood rather than a map. Describe the wedding you can picture —
          guest count, budget, and the feeling you want in the room — and we&apos;ll come back with
          a shortlist worth visiting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: luxuryEase, delay: 0.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link href="/contact" className="btn btn-primary px-10">
            Book a Free Consultation
          </Link>
          <Link href="/portfolio" className="btn btn-secondary px-10">
            See Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
