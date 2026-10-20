'use client';

import { useState } from 'react';
import {
  EMPTY_ENQUIRY,
  submitEnquiry,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryFieldKey,
  type EnquiryValues,
} from '@/lib/enquiry';

interface FieldConfig {
  label: string;
  kind: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

const FIELDS: Record<EnquiryFieldKey, FieldConfig> = {
  name: { label: 'Couple / Family Name', kind: 'text', required: true, placeholder: 'Your names' },
  email: { label: 'Email Address', kind: 'email', required: true, placeholder: 'your@email.com' },
  phone: { label: 'Phone Number', kind: 'tel', required: true, placeholder: '+91 98XXX XXXXX' },
  weddingDate: { label: 'Wedding Date / Tentative Month', kind: 'text', placeholder: 'e.g. November 2026' },
  destination: { label: 'Preferred Destination', kind: 'text', placeholder: 'e.g. Udaipur, Goa, or Undecided' },
  venue: { label: 'Preferred Venue (if any)', kind: 'text', placeholder: 'e.g. Taj Lake Palace' },
  guestCount: {
    label: 'Estimated Guest Count',
    kind: 'select',
    options: [
      { value: '', label: 'Select range' },
      { value: 'under-50', label: 'Under 50 (Intimate)' },
      { value: '50-150', label: '50 – 150 Guests' },
      { value: '150-300', label: '150 – 300 Guests' },
      { value: '300-500', label: '300 – 500 Guests' },
      { value: '500+', label: '500+ Guests (Grand)' },
    ],
  },
  budget: {
    label: 'Estimated Budget Range',
    kind: 'select',
    options: [
      { value: '', label: 'Select range' },
      { value: 'under-25l', label: 'Under ₹25 Lakhs' },
      { value: '25-50l', label: '₹25 – 50 Lakhs' },
      { value: '50-100l', label: '₹50 Lakhs – 1 Crore' },
      { value: '1-3cr', label: '₹1 – 3 Crore' },
      { value: '3cr+', label: '₹3 Crore+' },
    ],
  },
  functions: { label: 'Functions Planned', kind: 'text', placeholder: 'e.g. Mehendi, Sangeet, Wedding, Reception' },
  message: {
    label: 'Message / Wedding Vision',
    kind: 'textarea',
    placeholder: 'Describe your dream wedding — the mood, the aesthetic, the details that matter to you most...',
  },
};

/** Layout: which fields share a row. Rows with no rendered fields are skipped. */
const ROWS: EnquiryFieldKey[][] = [
  ['name', 'email'],
  ['phone', 'weddingDate'],
  ['destination', 'venue'],
  ['guestCount', 'budget'],
  ['functions'],
  ['message'],
];

export const ALL_ENQUIRY_FIELDS: EnquiryFieldKey[] = ROWS.flat();

interface EnquiryFormProps {
  /** Where this form lives — sent along with the enquiry (e.g. "contact-page"). */
  source: string;
  /** Which fields to show. Defaults to the full Contact page form. */
  fields?: EnquiryFieldKey[];
  initialValues?: Partial<EnquiryValues>;
  /** Prefix for input ids, so two forms on one page never share ids. */
  idPrefix?: string;
  submitLabel?: string;
  /** Visible rows of the message box. */
  messageRows?: number;
  onSuccess?: (values: EnquiryValues) => void;
  /** What to show after a successful submit. Defaults to nothing (the form disappears). */
  renderSuccess?: (values: EnquiryValues) => React.ReactNode;
}

export default function EnquiryForm({
  source,
  fields = ALL_ENQUIRY_FIELDS,
  initialValues,
  idPrefix = '',
  submitLabel = 'Send My Enquiry ✦',
  messageRows = 5,
  onSuccess,
  renderSuccess,
}: EnquiryFormProps) {
  const [form, setForm] = useState<EnquiryValues>({ ...EMPTY_ENQUIRY, ...initialValues });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const idOf = (key: EnquiryFieldKey) => `${idPrefix}${key}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const key = e.target.name as EnquiryFieldKey;
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    // Clear a field's error as soon as the visitor starts fixing it.
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const found = validateEnquiry(form, fields);
    setErrors(found);
    const firstInvalid = fields.find((key) => found[key]);
    if (firstInvalid) {
      document.getElementById(idOf(firstInvalid))?.focus();
      return;
    }

    setLoading(true);
    setSubmitError(false);
    try {
      await submitEnquiry({ ...form, source, page: window.location.pathname });
      setSubmitted(true);
      onSuccess?.(form);
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <>{renderSuccess?.(form)}</>;

  const renderField = (key: EnquiryFieldKey) => {
    const config = FIELDS[key];
    const id = idOf(key);
    const error = errors[key];
    const common = {
      id,
      name: key,
      value: form[key],
      onChange: handleChange,
      'aria-invalid': error ? true : undefined,
      'aria-describedby': error ? `${id}-error` : undefined,
      'aria-required': config.required ? true : undefined,
    } as const;
    const invalidClass = 'aria-[invalid=true]:border-red-600';

    return (
      <div className="form-group" key={key}>
        <label className="form-label" htmlFor={id}>
          {config.label}
          {config.required ? ' *' : ''}
        </label>

        {config.kind === 'select' ? (
          <select {...common} className={`form-select ${invalidClass}`}>
            {config.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : config.kind === 'textarea' ? (
          <textarea {...common} className={`form-textarea ${invalidClass}`} rows={messageRows} placeholder={config.placeholder} />
        ) : (
          <input
            {...common}
            type={config.kind}
            className={`form-input ${invalidClass}`}
            placeholder={config.placeholder}
            required={config.required}
          />
        )}

        {error && (
          <p id={`${id}-error`} className="text-[0.8rem] leading-[1.5] text-red-700">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {ROWS.map((row) => {
        const present = row.filter((key) => fields.includes(key));
        if (present.length === 0) return null;
        if (present.length === 1) return renderField(present[0]);
        return (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2" key={row.join('-')}>
            {present.map(renderField)}
          </div>
        );
      })}

      {submitError && (
        <p role="alert" className="text-[0.85rem] leading-[1.6] text-red-700">
          Sorry, something went wrong sending your enquiry. Please try again, or reach us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary self-start min-w-[220px] justify-center mt-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        disabled={loading}
      >
        {loading ? 'Sending...' : submitLabel}
      </button>
    </form>
  );
}
