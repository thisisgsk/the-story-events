'use client';

import { useRef } from 'react';
import { useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';

/**
 * Pointer-follow tilt for result cards. MotionConfig's reduced-motion handling
 * does not cover values driven by pointer position, so the tilt is disabled
 * here explicitly; the glare position still tracks, which is motion-free.
 */
export function useCardTilt(maxTilt = 6) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const tilt = reduceMotion ? 0 : maxTilt;
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springConfig = { stiffness: 220, damping: 26, mass: 0.6 };
  const sx = useSpring(px, springConfig);
  const sy = useSpring(py, springConfig);

  const rotateX = useTransform(sy, [0, 1], [tilt, -tilt]);
  const rotateY = useTransform(sx, [0, 1], [-tilt, tilt]);
  const glareX = useTransform(sx, [0, 1], ['0%', '100%']);
  const glareY = useTransform(sy, [0, 1], ['0%', '100%']);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onPointerLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return { ref, rotateX, rotateY, glareX, glareY, onPointerMove, onPointerLeave };
}
