// ─── Lead gate: tuning knobs and "already unlocked" memory ────────────────────

/**
 * How far a visitor can scroll before the rest of the page is locked behind the
 * enquiry form, in VIEWPORT HEIGHTS measured from the top of the page.
 * 2.5 ≈ two and a half screens of content. Raise it to let people read further first.
 */
export const LEAD_GATE_THRESHOLD_VH = 2.5;

/**
 * A page is only locked if at least this much content (in px) sits below the
 * threshold. Shorter pages — or a filter that shrinks the list — are left open
 * rather than gating a few lines.
 */
export const LEAD_GATE_MIN_LOCKED_PX = 360;

/** How long the "thank you" message shows before the page unlocks. */
export const LEAD_GATE_UNLOCK_DELAY_MS = 1400;

/** localStorage key remembering that this visitor has already enquired. */
export const LEAD_GATE_STORAGE_KEY = 'tse:lead-gate:unlocked';

// Fallback for browsers where storage throws (private mode, blocked cookies): the
// visitor stays unlocked for the rest of this page session even if it can't persist.
let unlockedInMemory = false;

export function isLeadGateUnlocked(): boolean {
  if (unlockedInMemory) return true;
  try {
    return window.localStorage.getItem(LEAD_GATE_STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

export function markLeadGateUnlocked(): void {
  unlockedInMemory = true;
  try {
    window.localStorage.setItem(LEAD_GATE_STORAGE_KEY, String(Date.now()));
  } catch {
    /* storage unavailable — the in-memory flag above still covers this session */
  }
}
