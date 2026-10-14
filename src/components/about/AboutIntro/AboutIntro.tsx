'use client';

import { motion } from 'motion/react';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

const headlineWords = ['Hello,', "we're", 'The', 'Story', 'Events'];

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
          <p className="text-xl leading-[1.85] text-primary mb-6">We plan weddings, and we love doing it.</p>
          <p className="text-base leading-[1.9] text-primary/80">
            We started in 2018 as a wedding consultancy and have grown one chapter at a time — planning,
            production, catering and styling, and now destinations beyond India. [ADD: a personal line, in your own
            words, about why you do this]
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
