'use client';

import { useRef, useSyncExternalStore } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { brandTimeline } from '@/data/team';
import type { TimelineItem } from '@/types';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const DESKTOP_QUERY = '(min-width: 768px)';

const subscribeToDesktop = (onChange: () => void) => {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};

const useIsDesktop = () =>
  useSyncExternalStore(subscribeToDesktop, () => window.matchMedia(DESKTOP_QUERY).matches, () => false);

export default function BrandTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // The spine fills down to a fixed line 60% of the way down the viewport; each
  // milestone lights its dot as it crosses that same line.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.6', 'end 0.6'],
  });

  return (
    <section className="section bg-primary overflow-hidden" aria-label="Our journey">
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="Our Journey" title="How We Got Here" light centered />
        </AnimatedSection>

        <div ref={trackRef} className="relative max-w-[1000px] mx-auto">
          <div
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-white/15"
            aria-hidden="true"
          >
            <motion.div
              className="absolute inset-0 origin-top bg-accent"
              style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
            />
          </div>

          <ol className="flex flex-col gap-20 py-6 md:gap-32">
            {brandTimeline.map((item, i) => (
              <Milestone key={item.year} item={item} side={i % 2 === 0 ? 'left' : 'right'} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Milestone({ item, side }: { item: TimelineItem; side: 'left' | 'right' }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();

  // 0 → 1 as the milestone travels from the bottom of the screen to the spine's fill line.
  const { scrollYProgress: enter } = useScroll({ target: ref, offset: ['start 0.92', 'start 0.6'] });
  // 0 → 1 as the milestone passes through the whole viewport — drives the year's parallax.
  const { scrollYProgress: pass } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const fromX = isDesktop ? (side === 'left' ? -56 : 56) : 0;
  const opacity = useTransform(enter, [0, 1], [0, 1]);
  const x = useTransform(enter, [0, 1], [fromX, 0]);
  const y = useTransform(enter, [0, 1], [32, 0]);
  const yearY = useTransform(pass, [0, 1], [8, -20]);
  const dotScale = useTransform(enter, [0.85, 1], [0, 1]);

  const isLeft = side === 'left';

  return (
    <li ref={ref} className="relative md:grid md:grid-cols-2 md:gap-x-20">
      <span
        className="absolute left-[15px] md:left-1/2 top-[1.6rem] -translate-x-1/2 z-10 block w-4 h-4 rounded-full border border-accent/60 bg-primary"
        aria-hidden="true"
      >
        <motion.span
          className="absolute inset-[3px] rounded-full bg-accent"
          style={{ scale: reduceMotion ? 1 : dotScale }}
        />
      </span>

      {!isLeft && <div className="hidden md:block" />}

      <motion.div
        className={`pl-12 md:pl-0 ${isLeft ? 'md:text-right' : ''}`}
        style={reduceMotion ? undefined : { opacity, x, y }}
      >
        <motion.span
          className="block font-display text-[clamp(3.25rem,8vw,6rem)] font-semibold leading-none text-accent"
          style={reduceMotion ? undefined : { y: yearY }}
        >
          {item.year}
        </motion.span>
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mt-5">{item.title}</h3>
        {item.detail && (
          <p className={`text-sm md:text-base text-white/70 leading-[1.75] mt-2 max-w-[34ch] ${isLeft ? 'md:ml-auto' : ''}`}>
            {item.detail}
          </p>
        )}
      </motion.div>

      {isLeft && <div className="hidden md:block" />}
    </li>
  );
}
