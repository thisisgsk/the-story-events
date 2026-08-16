'use client';

import { useEffect, useRef, useState } from 'react';
import { animate } from 'motion/react';

interface RollingNumberProps {
  value: number;
  className?: string;
  duration?: number;
}

/**
 * Counts from the previous value to the next one every time it changes — unlike
 * AnimatedCounter, which fires once when scrolled into view.
 */
export default function RollingNumber({ value, className = '', duration = 0.45 }: RollingNumberProps) {
  const [display, setDisplay] = useState(value);
  const previous = useRef(value);

  useEffect(() => {
    const from = previous.current;
    previous.current = value;
    if (from === value) return;

    const controls = animate(from, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value, duration]);

  return <span className={`tabular-nums ${className}`}>{display}</span>;
}
