'use client';

import { motion } from 'motion/react';
import { stats } from '@/data/team';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter/AnimatedCounter';

export default function AboutHighlights() {
  return (
    <section className="section bg-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, var(--color-accent) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--color-accent) 0%, transparent 40%)',
        }}
      />
      <div className="container relative">
        <AnimatedSection>
          <SectionHeading label="By the Numbers" title="Eight Years, Told in Milestones" light centered />
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative flex flex-col items-center text-center gap-3 p-6 md:p-8 rounded-lg border border-white/[0.08] bg-white/[0.03]"
            >
              <strong className="font-display text-[clamp(2.6rem,5.5vw,4rem)] font-bold text-accent leading-none">
                <AnimatedCounter value={stat.value} duration={2 + i * 0.15} />
              </strong>
              <span className="font-label text-[0.65rem] tracking-[0.16em] uppercase text-white/60">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
