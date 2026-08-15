'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { weddings } from '@/data/weddings';
import type { WeddingType } from '@/types';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const TYPES: Array<'All' | WeddingType> = ['All', 'Palace', 'Beach', 'Mountain', 'Intimate', 'Grand'];
const CITIES = ['All', 'Udaipur', 'Jaipur', 'Goa', 'Kerala', 'Hyderabad', 'Manali'];

const filterBtnBase =
  'font-label text-[0.65rem] tracking-[0.1em] uppercase px-4 py-2 border border-accent rounded-full cursor-pointer transition-all duration-150 ease-out min-h-9';

export default function WeddingGrid() {
  const [activeType, setActiveType] = useState<string>('All');
  const [activeCity, setActiveCity] = useState<string>('All');

  const filtered = weddings.filter((w) => {
    const typeMatch = activeType === 'All' || w.type === activeType;
    const cityMatch = activeCity === 'All' || w.city === activeCity;
    return typeMatch && cityMatch;
  });

  return (
    <section className="section bg-cream">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="Our Portfolio"
            title="Weddings We've Had the Honour of Planning"
            subtitle="Every wedding here is a real love story, a real celebration, and a real testament to what's possible when planning is done right."
            centered
          />
        </AnimatedSection>

        {/* Filter Bar */}
        <AnimatedSection delay={150}>
          <div className="flex flex-col gap-4 mb-8 p-6 bg-white border border-accent/40 rounded-lg md:flex-row md:items-center md:gap-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <span className="font-label text-[0.65rem] tracking-[0.15em] uppercase text-primary whitespace-nowrap min-w-[60px]">By Type:</span>
              <div className="flex flex-wrap gap-2">
                {TYPES.map((type) => (
                  <button
                    key={type}
                    className={`${filterBtnBase} ${
                      activeType === type ? 'bg-accent text-white' : 'bg-transparent text-primary hover:text-accent'
                    }`}
                    onClick={() => setActiveType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <span className="font-label text-[0.65rem] tracking-[0.15em] uppercase text-primary whitespace-nowrap min-w-[60px]">By City:</span>
              <div className="flex flex-wrap gap-2">
                {CITIES.map((city) => (
                  <button
                    key={city}
                    className={`${filterBtnBase} ${
                      activeCity === city ? 'bg-accent text-white' : 'bg-transparent text-primary hover:text-accent'
                    }`}
                    onClick={() => setActiveCity(city)}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Results count */}
        <p className="font-label text-[0.68rem] tracking-[0.1em] uppercase text-primary mb-6">
          Showing {filtered.length} wedding{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filtered.map((wedding, i) => (
            <AnimatedSection key={wedding.slug} delay={i * 80} className="w-full">
              <Link
                href={`/weddings/${wedding.slug}`}
                className="group block no-underline bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-[250ms] ease-in-out hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={wedding.thumbnailImage}
                    alt={`${wedding.coupleName} wedding at ${wedding.location}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 z-[2] bg-[rgba(42,24,18,0)] flex items-center justify-center transition-colors duration-[250ms] ease-in-out group-hover:bg-[rgba(42,24,18,0.5)]">
                    <span className="font-label text-[0.72rem] tracking-[0.15em] uppercase text-white border border-white/60 px-6 py-3 rounded-sm bg-white/[0.08] opacity-0 transition-opacity duration-[250ms] ease-in-out group-hover:opacity-100">
                      View Story →
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 z-[3] font-label text-[0.6rem] tracking-[0.14em] uppercase bg-accent/90 text-white px-3 py-1 rounded-full backdrop-blur-[4px]">
                    {wedding.type}
                  </div>
                </div>
                <div className="px-6 py-5">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-1">{wedding.coupleName}</h3>
                  <p className="text-sm text-primary mb-1">{wedding.location}</p>
                  <p className="font-label text-[0.65rem] tracking-[0.1em] uppercase text-primary">{wedding.date}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-primary flex flex-col items-center gap-6">
            <p>No weddings match your current filters.</p>
            <button onClick={() => { setActiveType('All'); setActiveCity('All'); }} className="btn btn-outline">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
