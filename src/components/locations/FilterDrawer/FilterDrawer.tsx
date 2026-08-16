'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion, useDragControls } from 'motion/react';

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  resultCount: number;
  noun: string;
  children: React.ReactNode;
}

/** Mobile filters live in a bottom sheet so they never eat the results grid. */
export default function FilterDrawer({ open, onClose, resultCount, noun, children }: FilterDrawerProps) {
  // Drag is started from the grab handle only — listening on the whole sheet
  // would hijack scrolling inside the filter list on touch devices.
  const dragControls = useDragControls();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[300] bg-primary/45 backdrop-blur-[2px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            key="sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Filters"
            className="fixed inset-x-0 bottom-0 z-[301] max-h-[88svh] rounded-t-2xl bg-cream flex flex-col lg:hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            drag="y"
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.4 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 120 || info.velocity.y > 600) onClose();
            }}
          >
            <div
              onPointerDown={(e) => dragControls.start(e)}
              className="shrink-0 pt-3 pb-2 flex justify-center cursor-grab active:cursor-grabbing touch-none"
            >
              <span className="w-10 h-1 rounded-full bg-primary/20" aria-hidden="true" />
            </div>

            <div className="shrink-0 flex items-center justify-between px-5 pb-3 border-b border-accent/30">
              <span className="font-label text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-primary">
                Filters
              </span>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center text-primary/60 text-lg hover:bg-white transition-colors duration-150"
                aria-label="Close filters"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-5">{children}</div>

            <div className="shrink-0 p-4 border-t border-accent/30 bg-cream/95 backdrop-blur-sm">
              <button
                type="button"
                onClick={onClose}
                className="w-full min-h-[52px] rounded-sm bg-primary text-white font-label text-[0.68rem] font-medium tracking-[0.12em] uppercase inline-flex items-center justify-center gap-2"
              >
                Show
                <motion.span
                  key={resultCount}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="tabular-nums text-accent"
                >
                  {resultCount}
                </motion.span>
                {noun}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
