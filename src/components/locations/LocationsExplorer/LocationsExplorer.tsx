'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { destinations as allDestinations, getDestinationBySlug, venues as allVenues } from '@/data/locations';
import {
  EMPTY_FILTERS,
  buildChips,
  countActiveFilters,
  filterDestinations,
  filterVenues,
  relaxedDestinations,
  relaxedVenues,
  sortDestinations,
  sortVenues,
} from '@/lib/locationFilters';
import type {
  AppliedChip,
  BrowseView,
  CapacityRange,
  FilterState,
  MultiFilterKey,
  NetworkFilter,
  SortKey,
} from '@/types/locations';
import RollingNumber from '@/components/ui/RollingNumber/RollingNumber';
import DestinationMasthead from '../DestinationMasthead/DestinationMasthead';
import EmptyState from '../EmptyState/EmptyState';
import FilterChips from '../FilterChips/FilterChips';
import FilterDrawer from '../FilterDrawer/FilterDrawer';
import FilterPanel from '../FilterPanel/FilterPanel';
import FlexibilityCallout from '../FlexibilityCallout/FlexibilityCallout';
import NetworkToggle from '../NetworkToggle/NetworkToggle';
import ResultsGrid from '../ResultsGrid/ResultsGrid';
import SortMenu from '../SortMenu/SortMenu';
import ViewToggle from '../ViewToggle/ViewToggle';

interface LocationsExplorerProps {
  initialView: BrowseView;
  initialDestination: string | null;
  initialNetwork: NetworkFilter;
}

const CAPACITY_DEBOUNCE_MS = 200;
const luxuryEase = [0.16, 1, 0.3, 1] as const;

export default function LocationsExplorer({
  initialView,
  initialDestination,
  initialNetwork,
}: LocationsExplorerProps) {
  const [view, setView] = useState<BrowseView>(initialView);
  const [sort, setSort] = useState<SortKey>('featured');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(() => ({
    ...EMPTY_FILTERS,
    network: initialNetwork,
    destinations: initialDestination ? [initialDestination] : [],
  }));
  // The slider updates on every pointer move; the committed filter lags behind it.
  const [capacityDraft, setCapacityDraft] = useState<CapacityRange>(EMPTY_FILTERS.capacity);

  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters((current) =>
        current.capacity.min === capacityDraft.min && current.capacity.max === capacityDraft.max
          ? current
          : { ...current, capacity: capacityDraft },
      );
    }, CAPACITY_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [capacityDraft]);

  // ── Results ────────────────────────────────────────────────────────────────
  const matchedDestinations = useMemo(
    () => sortDestinations(filterDestinations(allDestinations, allVenues, filters), sort, allVenues),
    [filters, sort],
  );
  const matchedVenues = useMemo(
    () => sortVenues(filterVenues(allVenues, filters), sort),
    [filters, sort],
  );

  const isEmpty = view === 'destinations' ? matchedDestinations.length === 0 : matchedVenues.length === 0;

  // Only computed when we actually came up empty.
  const fallback = useMemo(() => {
    if (!isEmpty) return null;
    if (view === 'destinations') {
      const { items, relaxed } = relaxedDestinations(allDestinations, allVenues, filters);
      return { destinations: sortDestinations(items, sort, allVenues), venues: [], relaxed, count: items.length };
    }
    const { items, relaxed } = relaxedVenues(allVenues, filters);
    return { destinations: [], venues: sortVenues(items, sort), relaxed, count: items.length };
  }, [isEmpty, view, filters, sort]);

  const shownDestinations = fallback ? fallback.destinations : matchedDestinations;
  const shownVenues = fallback ? fallback.venues : matchedVenues;
  const resultCount = view === 'destinations' ? matchedDestinations.length : matchedVenues.length;
  const noun = view === 'destinations' ? 'destinations' : 'venues';

  const chips = useMemo(() => buildChips(filters), [filters]);
  const activeCount = useMemo(() => countActiveFilters(filters), [filters]);

  const activeDestination =
    view === 'venues' && filters.destinations.length === 1
      ? getDestinationBySlug(filters.destinations[0]) ?? null
      : null;

  // ── Actions ────────────────────────────────────────────────────────────────
  const scrollToResults = useCallback(() => {
    const el = resultsRef.current;
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' });
  }, []);

  const toggleValue = useCallback((group: MultiFilterKey, value: string | number) => {
    setFilters((current) => {
      const list = current[group] as (string | number)[];
      const next = list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
      return { ...current, [group]: next } as FilterState;
    });
  }, []);

  const clearAll = useCallback(() => {
    setFilters({ ...EMPTY_FILTERS });
    setCapacityDraft(EMPTY_FILTERS.capacity);
  }, []);

  const removeChip = useCallback((chip: AppliedChip) => {
    if (chip.group === 'network') {
      setFilters((current) => ({ ...current, network: 'all' }));
      return;
    }
    if (chip.group === 'capacity') {
      setCapacityDraft(EMPTY_FILTERS.capacity);
      setFilters((current) => ({ ...current, capacity: { ...EMPTY_FILTERS.capacity } }));
      return;
    }
    setFilters((current) => ({
      ...current,
      [chip.group]: (current[chip.group] as (string | number)[]).filter((v) => v !== chip.value),
    }) as FilterState);
  }, []);

  const selectDestination = useCallback(
    (slug: string) => {
      // Drilling into a destination always shows everything it holds, so the
      // network toggle is reset rather than silently hiding the whole result.
      setFilters((current) => ({ ...current, destinations: [slug], network: 'all' }));
      setView('venues');
      requestAnimationFrame(scrollToResults);
    },
    [scrollToResults],
  );

  const browseOnRequest = useCallback(() => {
    setFilters((current) => ({ ...current, destinations: [], network: 'on-request' }));
    setView('venues');
    requestAnimationFrame(scrollToResults);
  }, [scrollToResults]);

  const changeView = useCallback((next: BrowseView) => {
    setView(next);
  }, []);

  // Rendered twice — once in the sidebar, once in the mobile drawer — so the
  // network toggle needs a distinct layoutId per instance.
  const renderPanel = (instance: 'sidebar' | 'drawer') => (
    <FilterPanel
      filters={{ ...filters, capacity: capacityDraft }}
      view={view}
      activeCount={activeCount}
      onToggle={toggleValue}
      onCapacityChange={setCapacityDraft}
      onClearAll={clearAll}
      header={
        <div className="py-5 border-b border-accent/25">
          <p className="font-label text-[0.6rem] font-medium tracking-[0.14em] uppercase text-primary/50 mb-3">
            Availability
          </p>
          <NetworkToggle
            value={filters.network}
            onChange={(network) => setFilters((current) => ({ ...current, network }))}
            layoutId={`network-pill-${instance}`}
          />
        </div>
      }
    />
  );

  return (
    <section id="explore" className="bg-cream py-16 sm:py-20" aria-label="Browse locations">
      <div className="container-wide">
        {/* Mode switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: luxuryEase }}
          className="flex flex-col items-center text-center gap-5 mb-10"
        >
          <p className="font-label text-[0.62rem] font-medium tracking-[0.2em] uppercase text-accent">
            Two ways to look
          </p>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold text-primary leading-[1.1] max-w-[20ch]">
            Start with a place, or start with a property
          </h2>
          <ViewToggle
            view={view}
            onChange={changeView}
            destinationCount={matchedDestinations.length}
            venueCount={matchedVenues.length}
          />
        </motion.div>

        <div ref={resultsRef} className="grid grid-cols-1 lg:grid-cols-[290px_1fr] gap-10 items-start">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block sticky top-[96px] max-h-[calc(100svh-120px)] overflow-y-auto pr-2 -mr-2">
            {renderPanel('sidebar')}
          </aside>

          <div className="min-w-0">
            {/* Sticky control bar */}
            <div className="sticky top-[76px] z-[50] -mx-1 px-1 py-3 mb-2 bg-cream/92 backdrop-blur-md">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <p className="font-label text-[0.68rem] tracking-[0.1em] uppercase text-primary/70 flex items-center gap-1.5">
                  <RollingNumber value={resultCount} className="font-heading text-lg text-primary not-italic" />
                  {noun}
                  {activeCount > 0 && (
                    <span className="text-primary/40 normal-case tracking-normal">
                      · {activeCount} filter{activeCount === 1 ? '' : 's'}
                    </span>
                  )}
                </p>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setDrawerOpen(true)}
                    className="lg:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-white font-label text-[0.64rem] font-medium tracking-[0.1em] uppercase"
                  >
                    Filters
                    {activeCount > 0 && (
                      <span className="w-[18px] h-[18px] rounded-full bg-accent text-primary text-[0.58rem] flex items-center justify-center tabular-nums">
                        {activeCount}
                      </span>
                    )}
                  </button>
                  <SortMenu value={sort} onChange={setSort} />
                </div>
              </div>

              <FilterChips chips={chips} onRemove={removeChip} onClearAll={clearAll} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: luxuryEase }}
              >
                {view === 'destinations' && <FlexibilityCallout onBrowseOnRequest={browseOnRequest} />}

                {view === 'venues' && (
                  <DestinationMasthead
                    destination={activeDestination}
                    venueCount={matchedVenues.length}
                    onClear={() => setFilters((current) => ({ ...current, destinations: [] }))}
                  />
                )}

                {fallback && (
                  <EmptyState
                    fallbackCount={fallback.count}
                    relaxed={fallback.relaxed}
                    noun={noun}
                    onClearAll={clearAll}
                  />
                )}

                <ResultsGrid
                  view={view}
                  destinations={shownDestinations}
                  venues={shownVenues}
                  onSelectDestination={selectDestination}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        resultCount={resultCount}
        noun={noun}
      >
        {renderPanel('drawer')}
      </FilterDrawer>
    </section>
  );
}
