'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';

interface CountUpStatProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function CountUpStat({ value, suffix = '', label }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 1.4, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <div className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-primary leading-none">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <p className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-primary/70">{label}</p>
    </div>
  );
}
