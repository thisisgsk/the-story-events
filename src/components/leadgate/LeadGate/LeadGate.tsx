'use client';

import Link from 'next/link';
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import EnquiryForm from '@/components/enquiry/EnquiryForm/EnquiryForm';
import {
  LEAD_GATE_MIN_LOCKED_PX,
  LEAD_GATE_STORAGE_KEY,
  LEAD_GATE_THRESHOLD_VH,
  LEAD_GATE_UNLOCK_DELAY_MS,
  isLeadGateUnlocked,
  markLeadGateUnlocked,
} from '@/lib/leadGate';
import type { EnquiryFieldKey } from '@/lib/enquiry';

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

const GATE_FIELDS: EnquiryFieldKey[] = ['name', 'email', 'phone', 'weddingDate', 'destination', 'message'];

/** Elements a keyboard user could Tab to — made inert while they sit under the lock. */
const FOCUSABLE = 'a[href], button, input, select, textarea, summary, [tabindex]:not([tabindex="-1"])';

/** Soft fade so the blur eases in rather than starting on a hard line. */
const FADE_MASK = 'linear-gradient(to bottom, transparent 0, #000 160px)';

/** Space above the card inside the overlay (px) — also lets the blur show before the card. */
const CARD_OFFSET = 72;
const CARD_BOTTOM = 56;

const readViewportHeight = () => Math.max(window.innerHeight, document.documentElement.clientHeight);

interface LeadGateProps {
  children: React.ReactNode;
  /** Pre-fills the "preferred destination" field, e.g. "Udaipur, India". */
  destination?: string;
}

/**
 * Wraps a whole page. Once a visitor has seen LEAD_GATE_THRESHOLD_VH screens of it,
 * everything below is blurred and covered by an enquiry form until they submit.
 *
 * - All content stays in the DOM (it's only visually blurred), so crawlers and
 *   screen readers still receive the full page.
 * - The wrapper is cut off at the gate, so the page physically cannot be scrolled
 *   past it while locked; the footer (outside this wrapper) stays reachable.
 * - Links and fields beneath the lock are made `inert` so Tab can't reach them.
 * - Short pages never lock, and a visitor who has already enquired is never gated
 *   (remembered in localStorage, with an in-memory fallback).
 * - Before hydration the page renders fully open, so there is no flash for crawlers
 *   or visitors without JavaScript.
 */
export default function LeadGate({ children, destination = '' }: LeadGateProps) {
  const titleId = useId();
  const descId = useId();

  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const thanksRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef({ width: 0, height: 0 });

  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [metrics, setMetrics] = useState({ threshold: 0, canLock: false, viewportHeight: 0 });
  const [cardHeight, setCardHeight] = useState(0);
  const [thanks, setThanks] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const active = ready && !unlocked && metrics.canLock;

  // ── Measuring ──────────────────────────────────────────────────────────────
  const measure = useCallback(() => {
    const content = contentRef.current;
    if (!content) return;
    const viewportHeight = viewportRef.current.height;
    const threshold = Math.round(viewportHeight * LEAD_GATE_THRESHOLD_VH);
    const canLock = content.offsetHeight - threshold >= LEAD_GATE_MIN_LOCKED_PX;
    setMetrics((current) =>
      current.threshold === threshold && current.canLock === canLock && current.viewportHeight === viewportHeight
        ? current
        : { threshold, canLock, viewportHeight },
    );
  }, []);

  useIsomorphicLayoutEffect(() => {
    viewportRef.current = { width: window.innerWidth, height: readViewportHeight() };
    if (isLeadGateUnlocked()) setUnlocked(true);
    measure();
    setReady(true);
  }, [measure]);

  // Re-measure when the content changes size (filters, lazy images, fonts) or the
  // window is resized. Mobile URL-bar show/hide changes the height by ~60px; only a
  // real change (width, or a large height change) moves the threshold.
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const observer = new ResizeObserver(measure);
    observer.observe(content);

    const onResize = () => {
      const width = window.innerWidth;
      const height = readViewportHeight();
      const previous = viewportRef.current;
      if (width !== previous.width || Math.abs(height - previous.height) > 150) {
        viewportRef.current = { width, height };
        measure();
      }
    };
    window.addEventListener('resize', onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [measure]);

  // Another tab got unlocked → unlock this one too.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === LEAD_GATE_STORAGE_KEY && event.newValue !== null) setUnlocked(true);
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Size the overlay to its card.
  useEffect(() => {
    const card = cardRef.current;
    if (!active || !card) return;
    const observer = new ResizeObserver(() => setCardHeight(card.offsetHeight));
    observer.observe(card);
    return () => observer.disconnect();
  }, [active]);

  // Fade the overlay in (CSS handles the motion; reduced-motion users get no transition).
  useEffect(() => {
    if (!active) return;
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [active]);

  // ── Keep Tab out of the locked region ──────────────────────────────────────
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const clear = () => {
      content.querySelectorAll('[data-lead-gate-inert]').forEach((element) => {
        element.removeAttribute('inert');
        element.removeAttribute('data-lead-gate-inert');
      });
    };

    if (!active) {
      clear();
      return;
    }

    const apply = () => {
      const contentTop = content.getBoundingClientRect().top;
      content.querySelectorAll<HTMLElement>(FOCUSABLE).forEach((element) => {
        const offset = element.getBoundingClientRect().top - contentTop;
        if (offset >= metrics.threshold - 4) {
          element.setAttribute('inert', '');
          element.setAttribute('data-lead-gate-inert', '');
        } else if (element.hasAttribute('data-lead-gate-inert')) {
          element.removeAttribute('inert');
          element.removeAttribute('data-lead-gate-inert');
        }
      });
    };

    apply();
    const mutations = new MutationObserver(apply);
    mutations.observe(content, { childList: true, subtree: true });
    const resizes = new ResizeObserver(apply);
    resizes.observe(content);

    return () => {
      mutations.disconnect();
      resizes.disconnect();
      clear();
    };
  }, [active, metrics.threshold]);

  // ── After a successful enquiry ─────────────────────────────────────────────
  useEffect(() => {
    if (thanks === null) return;
    thanksRef.current?.focus();
    const timer = window.setTimeout(() => {
      markLeadGateUnlocked();
      setUnlocked(true);
    }, LEAD_GATE_UNLOCK_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [thanks]);

  const overlayHeight = Math.max(cardHeight, Math.round(metrics.viewportHeight * 0.8));

  return (
    <div
      className="relative"
      style={active ? { height: metrics.threshold + overlayHeight, overflow: 'clip' } : undefined}
      data-lead-gate={active ? 'locked' : 'open'}
    >
      <div ref={contentRef}>{children}</div>

      {active && (
        <div className="absolute inset-x-0 z-[40]" style={{ top: metrics.threshold, height: overlayHeight }}>
          {/* The blur. Decorative; the content underneath stays in the DOM. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cream/95 supports-[backdrop-filter]:bg-cream/60 supports-[backdrop-filter]:backdrop-blur-[10px]"
            style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
          />

          <section
            ref={cardRef}
            aria-labelledby={titleId}
            aria-describedby={descId}
            className={`relative px-6 md:px-8 transition-opacity duration-500 motion-reduce:transition-none ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ paddingTop: CARD_OFFSET, paddingBottom: CARD_BOTTOM }}
          >
            <div className="max-w-[640px] mx-auto rounded-xl border border-accent/40 bg-white p-6 sm:p-9 shadow-xl">
              {thanks !== null ? (
                <div ref={thanksRef} tabIndex={-1} role="status" className="text-center py-6 outline-none">
                  <div className="text-[2rem] text-accent mb-4" aria-hidden="true">
                    ✦
                  </div>
                  <h2 id={titleId} className="font-display text-[1.8rem] font-semibold text-primary mb-2">
                    Thank you{thanks ? `, ${thanks}` : ''}
                  </h2>
                  <p id={descId} className="text-[0.95rem] leading-[1.7] text-primary/80">
                    We&apos;ve received your enquiry. Unlocking the rest of the page now.
                  </p>
                </div>
              ) : (
                <>
                  <p className="font-label text-[0.62rem] font-medium tracking-[0.2em] uppercase text-accent mb-3">
                    Keep exploring
                  </p>
                  <h2
                    id={titleId}
                    className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-semibold text-primary leading-[1.15] mb-3"
                  >
                    Enquire to keep browsing{destination ? ` ${destination}` : ''}
                  </h2>
                  <p id={descId} className="text-[0.92rem] leading-[1.7] text-primary/80 mb-6">
                    We&apos;ve covered the first part of this page for everyone. To see the rest, tell us a little
                    about your wedding — we&apos;ll use your details to get back to you about your enquiry.
                  </p>

                  <EnquiryForm
                    source="destinations-gate"
                    idPrefix="gate-"
                    fields={GATE_FIELDS}
                    initialValues={{ destination }}
                    messageRows={3}
                    submitLabel="Send enquiry & continue ✦"
                    onSuccess={(values) => setThanks(values.name.trim().split(' ')[0])}
                  />

                  <p className="mt-6 pt-5 border-t border-accent/25 text-[0.82rem] leading-[1.6] text-primary/65">
                    Prefer to talk first?{' '}
                    <a
                      href="https://wa.me/919820000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 hover:text-accent"
                    >
                      WhatsApp us
                    </a>{' '}
                    or{' '}
                    <Link href="/contact" className="text-primary underline underline-offset-2 hover:text-accent">
                      use the contact page
                    </Link>
                    .
                  </p>
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
