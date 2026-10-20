'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { VENUE_TYPES, VENUE_TYPE_LABELS } from '@/lib/venueTypes';
import type { VenueType } from '@/types/destinations';

export type VenueTypeValue = VenueType | 'all';

interface VenueTypeFilterProps {
  value: VenueTypeValue;
  onChange: (value: VenueTypeValue) => void;
}

const OPTIONS: { value: VenueTypeValue; label: string }[] = [
  { value: 'all', label: 'All' },
  ...VENUE_TYPES.map((type) => ({ value: type as VenueTypeValue, label: VENUE_TYPE_LABELS[type] })),
];

/**
 * The one filter on the city page. A listbox-style dropdown that:
 *  - closes the moment an option is chosen (and on outside click, Escape, or Tab away),
 *  - is fully keyboard operable: ↑ ↓ Home End to move, Enter/Space to choose, type a letter to jump,
 *  - hands focus back to its button when it closes.
 */
export default function VenueTypeFilter({ value, onChange }: VenueTypeFilterProps) {
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const listId = `${baseId}-list`;
  const optionId = (index: number) => `${baseId}-option-${index}`;

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedIndex = Math.max(
    0,
    OPTIONS.findIndex((option) => option.value === value),
  );
  const selected = OPTIONS[selectedIndex];

  const openList = (index = selectedIndex) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const closeList = (returnFocus = true) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  };

  const choose = (index: number) => {
    onChange(OPTIONS[index].value);
    closeList(); // auto-close as soon as an option is selected
  };

  // Move focus into the list when it opens, so arrow keys work immediately.
  useEffect(() => {
    if (open) listRef.current?.focus();
  }, [open]);

  // Click or tap outside closes it.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const onButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      openList();
    }
  };

  const onListKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, OPTIONS.length - 1));
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case 'Home':
        event.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setActiveIndex(OPTIONS.length - 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        choose(activeIndex);
        break;
      case 'Escape':
        event.preventDefault();
        closeList();
        break;
      case 'Tab':
        setOpen(false); // let Tab carry on to the next control
        break;
      default:
        // Type-ahead: jump to the next option starting with the typed letter.
        if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
          const letter = event.key.toLowerCase();
          const order = [...OPTIONS.keys()].map((i) => (activeIndex + 1 + i) % OPTIONS.length);
          const match = order.find((i) => OPTIONS[i].label.toLowerCase().startsWith(letter));
          if (match !== undefined) setActiveIndex(match);
        }
    }
  };

  return (
    <div className="relative inline-block" ref={rootRef}>
      <button
        ref={buttonRef}
        id={buttonId}
        type="button"
        onClick={() => (open ? closeList(false) : openList())}
        onKeyDown={onButtonKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-accent/40 font-label text-[0.64rem] font-medium tracking-[0.1em] uppercase text-primary whitespace-nowrap transition-colors duration-150 hover:border-accent"
      >
        <span className="text-primary/45">Venue type</span>
        {selected.label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="text-[0.6rem] text-primary/50"
          aria-hidden="true"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            id={listId}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={buttonId}
            aria-activedescendant={optionId(activeIndex)}
            onKeyDown={onListKeyDown}
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-[calc(100%+8px)] z-[60] min-w-[220px] rounded-lg bg-white border border-accent/40 shadow-lg overflow-hidden py-1.5 outline-none"
          >
            {OPTIONS.map((option, index) => {
              const isSelected = option.value === value;
              const isActive = index === activeIndex;
              return (
                <li
                  key={option.value}
                  id={optionId(index)}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => choose(index)}
                  onMouseMove={() => !isActive && setActiveIndex(index)}
                  className={`flex items-center justify-between gap-3 px-4 py-2.5 text-[0.82rem] cursor-pointer transition-colors duration-150 ${
                    isSelected ? 'text-primary font-medium' : 'text-primary/70'
                  } ${isActive ? 'bg-cream' : ''}`}
                >
                  {option.label}
                  {isSelected && (
                    <span aria-hidden="true" className="text-accent">
                      ✓
                    </span>
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
