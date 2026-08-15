'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { brandTimeline } from '@/data/team';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function BrandTimeline() {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="Our Journey"
            title="The Story Events Story"
            subtitle="Eight years. One hundred weddings. One unwavering commitment to excellence."
            centered
          />
        </AnimatedSection>

        <div className="relative max-w-[1000px] mx-auto">
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top"
            style={{ backgroundImage: 'linear-gradient(to bottom, var(--color-accent), var(--color-primary), var(--color-accent))' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="flex flex-col gap-14 md:gap-20">
            {brandTimeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              const badgeColor = isLeft ? 'var(--color-accent)' : 'var(--color-primary)';

              return (
                <div key={item.year} className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-16">
                  <AnimatedSection
                    animation={isLeft ? 'slideRight' : 'slideLeft'}
                    delay={i * 60}
                    className={isLeft ? 'md:order-1 md:text-right md:pr-6' : 'md:order-2 md:pl-6'}
                  >
                    <span
                      className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-none mb-2 inline-block"
                      style={{ color: badgeColor }}
                    >
                      {item.year}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-primary/80 leading-[1.75]">{item.description}</p>
                  </AnimatedSection>

                  <AnimatedSection
                    animation="scaleIn"
                    delay={i * 60 + 150}
                    className={`flex ${isLeft ? 'md:order-2 md:justify-start md:pl-6' : 'md:order-1 md:justify-end md:pr-6'} justify-center`}
                  >
                    <div
                      className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg border-4"
                      style={{ borderColor: badgeColor }}
                    >
                      <Image src={item.image} alt={item.title} fill sizes="112px" style={{ objectFit: 'cover' }} />
                    </div>
                  </AnimatedSection>

                  <motion.div
                    className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center text-white font-label text-xs font-bold shadow-md z-10"
                    style={{ backgroundColor: badgeColor }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (i * 60 + 100) / 1000 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
