'use client';

import { motion } from 'motion/react';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

const headlineWords = ['Our', 'Story,', 'Our', 'Promise'];

export default function AboutIntro() {
  return (
    <section className="bg-white pt-24 pb-20 md:pt-28">
      <div className="container">
        <div className="text-center max-w-[900px] mx-auto mb-16">
          <span className="inline-block font-label text-[0.68rem] tracking-[0.22em] uppercase text-accent mb-5">
            About Us
          </span>
          <h1 className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-semibold text-primary leading-[1.05] tracking-[-0.01em] flex flex-wrap justify-center gap-x-4">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word + i}
                className="inline-block"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.09 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="block w-12 h-px bg-accent" />
            <span className="text-accent text-[0.7rem] opacity-80">✦</span>
            <span className="block w-12 h-px bg-accent" />
          </div>
        </div>

        <AnimatedSection className="max-w-[760px] mx-auto text-center" animation="fadeUp">
          <p className="text-xl leading-[1.85] text-primary mb-6">
            Meet the team that transforms wedding dreams into extraordinary, lived realities.
          </p>
          <p className="text-base leading-[1.9] text-primary/80">
            The Story Events was founded on a simple belief: that a wedding is not an event to be managed, but a
            story to be told. For eight years, we have brought that belief to palaces in Udaipur, beaches in Goa,
            and mountaintops in Manali — planning every detail so that our couples remember nothing but joy. This
            is the story of how we got here, the people who built it, and the promise that guides everything we do.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
