'use client';

import { CAPACITY_BOUNDS } from '@/data/locations';
import type { CapacityRange as CapacityRangeValue } from '@/types/locations';

interface CapacityRangeProps {
  value: CapacityRangeValue;
  onChange: (value: CapacityRangeValue) => void;
}

const STEP = 10;

const thumbClasses = [
  'absolute inset-x-0 top-0 w-full h-6 appearance-none bg-transparent pointer-events-none',
  '[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none',
  '[&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full',
  '[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-accent',
  '[&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer',
  '[&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150',
  'hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-125',
  '[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5',
  '[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2',
  '[&::-moz-range-thumb]:border-accent [&::-moz-range-thumb]:cursor-pointer',
].join(' ');

export default function CapacityRange({ value, onChange }: CapacityRangeProps) {
  const { min: floor, max: ceiling } = CAPACITY_BOUNDS;
  const span = ceiling - floor;
  const leftPct = ((value.min - floor) / span) * 100;
  const rightPct = ((value.max - floor) / span) * 100;

  const setMin = (next: number) => onChange({ min: Math.min(next, value.max - STEP), max: value.max });
  const setMax = (next: number) => onChange({ min: value.min, max: Math.max(next, value.min + STEP) });

  return (
    <div className="pt-1">
      <div className="flex items-baseline justify-between mb-4">
        <span className="font-heading text-lg font-semibold text-primary tabular-nums">
          {value.min}
          <span className="text-primary/40 mx-1.5">–</span>
          {value.max === ceiling ? `${ceiling}+` : value.max}
        </span>
        <span className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-primary/50">guests</span>
      </div>

      <div className="relative h-6">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 rounded-full bg-accent/25" />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 rounded-full bg-accent"
          style={{ left: `${leftPct}%`, right: `${100 - rightPct}%` }}
        />
        <input
          type="range"
          min={floor}
          max={ceiling}
          step={STEP}
          value={value.min}
          onChange={(e) => setMin(Number(e.target.value))}
          className={thumbClasses}
          aria-label="Minimum guest capacity"
        />
        <input
          type="range"
          min={floor}
          max={ceiling}
          step={STEP}
          value={value.max}
          onChange={(e) => setMax(Number(e.target.value))}
          className={thumbClasses}
          aria-label="Maximum guest capacity"
        />
      </div>

      <div className="flex justify-between mt-2 font-label text-[0.58rem] tracking-[0.1em] uppercase text-primary/35">
        <span>{floor}</span>
        <span>{ceiling}+</span>
      </div>
    </div>
  );
}
