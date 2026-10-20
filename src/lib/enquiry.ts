// ─── Enquiry form: shared fields, validation and submission ───────────────────
// Used by the Contact page and by the Destinations lead gate, so both go to the
// same place and follow the same rules.

export type EnquiryFieldKey =
  | 'name'
  | 'email'
  | 'phone'
  | 'weddingDate'
  | 'destination'
  | 'venue'
  | 'guestCount'
  | 'budget'
  | 'functions'
  | 'message';

export type EnquiryValues = Record<EnquiryFieldKey, string>;

export const EMPTY_ENQUIRY: EnquiryValues = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  weddingDate: '',
  guestCount: '',
  venue: '',
  budget: '',
  functions: '',
  message: '',
};

export type EnquiryErrors = Partial<Record<EnquiryFieldKey, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Validates only the fields the form actually renders. Name, email and phone are required. */
export function validateEnquiry(values: EnquiryValues, fields: EnquiryFieldKey[]): EnquiryErrors {
  const errors: EnquiryErrors = {};

  if (fields.includes('name') && !values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (fields.includes('email')) {
    if (!values.email.trim()) errors.email = 'Please enter your email address.';
    else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  }

  if (fields.includes('phone')) {
    const digits = values.phone.replace(/\D/g, '');
    if (!values.phone.trim()) errors.phone = 'Please enter a phone number we can reach you on.';
    else if (digits.length < 7 || digits.length > 15) errors.phone = 'Please enter a valid phone number.';
  }

  return errors;
}

export interface EnquirySubmission extends EnquiryValues {
  /** Where the enquiry came from, e.g. "contact-page" or "destinations-gate". */
  source: string;
  /** Page the visitor was on when they submitted. */
  page?: string;
}

/**
 * The one place enquiries are sent. The Contact page has never had a backend: its
 * "submission" is simulated with a short delay, and this keeps that behaviour exactly.
 * To go live, replace the body with a real request (an API route, CRM or email
 * service) — every enquiry form on the site will follow.
 */
export async function submitEnquiry(submission: EnquirySubmission): Promise<void> {
  void submission;
  await new Promise((resolve) => setTimeout(resolve, 1200));
}
