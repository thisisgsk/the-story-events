'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';

const luxuryEase = [0.16, 1, 0.3, 1] as const;

export default function ServicesCover() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[92svh] min-h-[560px] w-full overflow-hidden"
      aria-label="Services cover"
    >
      {/* Load-in curtain reveal */}
      <motion.div
        className="absolute inset-0 z-[1]"
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.3, ease: luxuryEase }}
      >
        {/* Scroll-linked parallax + continuous Ken Burns zoom */}
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <Image
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1800&q=80"
            alt="Elegant wedding ceremony setup with lush floral arrangements"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            className="animate-ken-burns"
          />
        </motion.div>
      </motion.div>

      {/* Base gradient for depth */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(42,24,18,0.08) 0%, rgba(42,24,18,0.12) 55%, rgba(42,24,18,0.42) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Scroll-linked darkening for a cinematic exit into the next section */}
      <motion.div
        className="absolute inset-0 z-[2] bg-primary"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Scroll cue — icon only, no copy */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce-scroll-dot" />
        <span
          className="block w-px h-10"
          style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
