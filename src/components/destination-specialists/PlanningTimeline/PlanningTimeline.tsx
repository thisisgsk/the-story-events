'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { planningTimeline } from '@/data/destinationSpecialists';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function PlanningTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.75', 'end 0.4'],
  });

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection>
          <SectionHeading
            label="How It Unfolds"
            title="The Destination Wedding Planning Timeline"
            subtitle="From your first 'yes' to the last dance — here is the journey we walk with you."
            centered
          />
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" className="text-center mb-2">
          <span className="inline-flex flex-col items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="font-label text-[0.68rem] tracking-[0.2em] uppercase text-primary">Say Yes!</span>
          </span>
        </AnimatedSection>

        <div ref={trackRef} className="relative mt-4">
          {/* Track (mobile: left-aligned, desktop: centered) */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-accent/20" aria-hidden="true">
            <motion.div
              className="absolute inset-x-0 top-0 bottom-0 origin-top bg-accent"
              style={{ scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]) }}
            />
          </div>

          <div className="flex flex-col gap-10 md:gap-14 py-10">
            {planningTimeline.map((milestone, i) => {
              const isRight = i % 2 === 0;
              return (
                <div key={milestone.period} className="relative md:grid md:grid-cols-2 md:gap-x-14">
                  <span
                    className="absolute left-[15px] md:left-1/2 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-white z-10"
                    aria-hidden="true"
                  />
                  {isRight ? (
                    <>
                      <div className="hidden md:block" />
                      <AnimatedSection animation="slideRight" className="pl-10 md:pl-0">
                        <TimelineCard period={milestone.period} items={milestone.items} />
                      </AnimatedSection>
                    </>
                  ) : (
                    <>
                      <AnimatedSection animation="slideLeft" className="pl-10 md:pl-0 md:text-right">
                        <TimelineCard period={milestone.period} items={milestone.items} alignEnd />
                      </AnimatedSection>
                      <div className="hidden md:block" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <AnimatedSection animation="fadeIn" className="text-center mt-2">
          <span className="inline-flex flex-col items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="font-label text-[0.68rem] tracking-[0.2em] uppercase text-primary">Say I Do!</span>
          </span>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TimelineCard({ period, items, alignEnd = false }: { period: string; items: string[]; alignEnd?: boolean }) {
  return (
    <div className="bg-cream border border-accent/40 rounded-lg p-6">
      <span className="font-label text-[0.65rem] font-medium tracking-[0.14em] uppercase text-accent">{period}</span>
      <ul className={`mt-3 flex flex-col gap-2 ${alignEnd ? 'md:items-end' : ''}`}>
        {items.map((item, i) => (
          <li key={i} className={`text-sm text-primary leading-[1.6] flex gap-2 items-start ${alignEnd ? 'md:flex-row-reverse md:text-right' : ''}`}>
            <span className="text-accent font-bold shrink-0 mt-px">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
