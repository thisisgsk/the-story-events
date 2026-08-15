'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { specialistFaqs } from '@/data/destinationSpecialists';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-cream">
      <div className="container-narrow">
        <AnimatedSection>
          <SectionHeading label="Questions & Answers" title="Frequently Asked Questions" centered />
        </AnimatedSection>

        <div className="flex flex-col gap-3">
          {specialistFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={faq.question} delay={i * 60}>
                <div className="bg-white border border-accent/40 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="font-heading text-base font-semibold text-primary">{faq.question}</span>
                    <motion.span
                      className="shrink-0 text-accent text-xl leading-none"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm text-primary leading-[1.75]">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
