'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { destinations, venues } from '@/data/locations';

const luxuryEase = [0.16, 1, 0.3, 1] as const;

const titleWords = ['Every', 'Destination.', 'Every', 'Venue.'];

const stats = [
  { value: destinations.filter((d) => d.isOperating).length, label: 'Core Destinations' },
  { value: venues.length, label: 'Curated Venues' },
  { value: new Set(destinations.map((d) => d.country)).size, label: 'Countries' },
];

/** Names scrolling behind the hero — a quiet reminder of the breadth on offer. */
const marquee = [...destinations.map((d) => d.name), ...destinations.map((d) => d.name)];

export default function LocationsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.5]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden flex items-center justify-center"
      aria-label="Locations hero"
    >
      {/* Curtain reveal on load */}
      <motion.div
        className="absolute inset-0 z-[1]"
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.3, ease: luxuryEase }}
      >
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <Image
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1800&q=80"
            alt="A lakeside wedding destination at golden hour"
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
            'linear-gradient(170deg, rgba(42,24,18,0.28) 0%, rgba(42,24,18,0.48) 48%, rgba(42,24,18,0.78) 100%)',
        }}
      />
      <motion.div className="absolute inset-0 z-[2] bg-primary" style={{ opacity: overlayOpacity }} aria-hidden="true" />

      {/* Drifting destination names */}
      <div className="absolute inset-x-0 top-[18%] z-[2] overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="flex gap-12 whitespace-nowrap will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 48, ease: 'linear', repeat: Infinity }}
        >
          {marquee.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-[clamp(3rem,7vw,6rem)] font-semibold text-white/[0.07] leading-none select-none"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div className="relative z-[3] text-center px-6 max-w-[980px]" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.span
          className="inline-block font-label text-[0.72rem] font-medium tracking-[0.22em] uppercase text-accent mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
        >
          Locations
        </motion.span>

        <h1 className="font-display text-[clamp(2.6rem,6.4vw,5.4rem)] font-semibold text-white leading-[1.06] tracking-[-0.01em] mb-6">
          {titleWords.map((word, i) => (
            <motion.span
              key={word + i}
              className="inline-block mr-[0.28em]"
              initial={{ opacity: 0, y: 40, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.9, ease: luxuryEase, delay: 0.6 + i * 0.09 }}
            >
              {i > 1 ? <em className="italic font-normal text-accent">{word}</em> : word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="font-display text-[clamp(1.05rem,1.9vw,1.4rem)] italic text-white/80 mb-10 leading-[1.55] max-w-[58ch] mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: luxuryEase, delay: 1 }}
        >
          Browse the cities we know intimately — then browse every property we can open for you,
          including the ones far outside our own map.
        </motion.p>

        <motion.div
          className="flex gap-8 sm:gap-12 justify-center flex-wrap"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: luxuryEase, delay: 1.2 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold text-accent leading-none">
                {stat.value}
              </span>
              <span className="font-label text-[0.6rem] tracking-[0.16em] uppercase text-white/55">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#explore"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 no-underline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 1.6 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce-scroll-dot" />
        <span
          className="block w-px h-10"
          style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }}
        />
        <span className="font-label text-[0.58rem] tracking-[0.2em] uppercase text-white/45">Explore</span>
      </motion.a>
    </section>
  );
}
