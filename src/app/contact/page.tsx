'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

interface FormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  weddingDate: string;
  guestCount: string;
  venue: string;
  budget: string;
  functions: string;
  message: string;
}

const initialForm: FormData = {
  name: '', email: '', phone: '', destination: '', weddingDate: '',
  guestCount: '', venue: '', budget: '', functions: '', message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // simulate submission
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1800&q=80"
            alt="Contact The Story Events"
            fill priority sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{ backgroundImage: 'linear-gradient(180deg, rgba(42,24,18,0.25) 0%, rgba(42,24,18,0.62) 100%)' }}
          />
        </div>
        <div className="relative z-[2] text-center px-6 md:px-8 lg:px-12 xl:px-16 pt-16 pb-8">
          <AnimatedSection animation="fadeIn">
            <span className="inline-block font-label text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-4">Contact & Enquire</span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold text-white leading-[1.1] mb-5">Let&apos;s Begin Planning<br />Your Story</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={400}>
            <p className="text-lg text-white/75 max-w-[48ch] mx-auto leading-[1.7]">
              Share your vision with us. We&apos;ll respond within 24 hours with a personalised consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:items-start">
            {/* Lead Form */}
            <div>
              <AnimatedSection animation="slideLeft">
                <div className="mb-8">
                  <span className="section-label">Enquire Now</span>
                  <h2 className="font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-bold text-primary mb-3">Tell Us About Your Dream Wedding</h2>
                  <p className="text-primary text-base leading-[1.7]">
                    The more detail you share, the better we can tailor our response to your vision.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-cream border border-accent/40 rounded-xl px-8 py-12 text-center">
                    <div className="text-[2.5rem] text-accent mb-5">✦</div>
                    <h3 className="font-display text-3xl text-primary mb-3">Thank You, {form.name.split(' ')[0]}!</h3>
                    <p className="text-primary leading-[1.75] max-w-[40ch] mx-auto">We&apos;ve received your enquiry and will be in touch within 24 hours. In the meantime, feel free to browse our portfolio for inspiration.</p>
                    <Link href="/weddings" className="btn btn-primary mt-6">
                      Browse Weddings
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">Couple / Family Name *</label>
                        <input id="name" name="name" type="text" className="form-input" required
                          placeholder="Your names" value={form.name} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address *</label>
                        <input id="email" name="email" type="email" className="form-input" required
                          placeholder="your@email.com" value={form.email} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone Number *</label>
                        <input id="phone" name="phone" type="tel" className="form-input" required
                          placeholder="+91 98XXX XXXXX" value={form.phone} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="weddingDate">Wedding Date / Tentative Month</label>
                        <input id="weddingDate" name="weddingDate" type="text" className="form-input"
                          placeholder="e.g. November 2026" value={form.weddingDate} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="destination">Preferred Destination</label>
                        <input id="destination" name="destination" type="text" className="form-input"
                          placeholder="e.g. Udaipur, Goa, or Undecided" value={form.destination} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="venue">Preferred Venue (if any)</label>
                        <input id="venue" name="venue" type="text" className="form-input"
                          placeholder="e.g. Taj Lake Palace" value={form.venue} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="guestCount">Estimated Guest Count</label>
                        <select id="guestCount" name="guestCount" className="form-select" value={form.guestCount} onChange={handleChange}>
                          <option value="">Select range</option>
                          <option value="under-50">Under 50 (Intimate)</option>
                          <option value="50-150">50 – 150 Guests</option>
                          <option value="150-300">150 – 300 Guests</option>
                          <option value="300-500">300 – 500 Guests</option>
                          <option value="500+">500+ Guests (Grand)</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="budget">Estimated Budget Range</label>
                        <select id="budget" name="budget" className="form-select" value={form.budget} onChange={handleChange}>
                          <option value="">Select range</option>
                          <option value="under-25l">Under ₹25 Lakhs</option>
                          <option value="25-50l">₹25 – 50 Lakhs</option>
                          <option value="50-100l">₹50 Lakhs – 1 Crore</option>
                          <option value="1-3cr">₹1 – 3 Crore</option>
                          <option value="3cr+">₹3 Crore+</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="functions">Functions Planned</label>
                      <input id="functions" name="functions" type="text" className="form-input"
                        placeholder="e.g. Mehendi, Sangeet, Wedding, Reception" value={form.functions} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Message / Wedding Vision</label>
                      <textarea id="message" name="message" className="form-textarea" rows={5}
                        placeholder="Describe your dream wedding — the mood, the aesthetic, the details that matter to you most..."
                        value={form.message} onChange={handleChange} />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary self-start min-w-[220px] justify-center mt-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send My Enquiry ✦'}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div>
              <AnimatedSection animation="slideRight" delay={150}>
                <div className="bg-white border border-accent/40 rounded-xl p-8 mb-5 shadow-md">
                  <h3 className="font-display text-2xl text-primary mb-8">Get In Touch</h3>

                  <div className="flex gap-4 mb-6 items-start">
                    <div className="text-[1.1rem] shrink-0 mt-0.5 text-accent">📍</div>
                    <div>
                      <p className="font-label text-[0.62rem] tracking-[0.15em] uppercase text-primary mb-1">Studio Address</p>
                      <p className="text-sm text-primary leading-[1.7]">
                        Level 4, Maker Maxity<br />
                        Bandra Kurla Complex<br />
                        Mumbai, Maharashtra 400051
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6 items-start">
                    <div className="text-[1.1rem] shrink-0 mt-0.5 text-accent">📞</div>
                    <div>
                      <p className="font-label text-[0.62rem] tracking-[0.15em] uppercase text-primary mb-1">Phone</p>
                      <a href="tel:+919820000000" className="text-sm text-primary leading-[1.7] no-underline transition-colors duration-150 ease-out hover:text-accent">+91 98200 00000</a>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-6 items-start">
                    <div className="text-[1.1rem] shrink-0 mt-0.5 text-accent">✉</div>
                    <div>
                      <p className="font-label text-[0.62rem] tracking-[0.15em] uppercase text-primary mb-1">Email</p>
                      <a href="mailto:hello@thestoryevents.com" className="text-sm text-primary leading-[1.7] no-underline transition-colors duration-150 ease-out hover:text-accent">hello@thestoryevents.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="text-[1.1rem] shrink-0 mt-0.5 text-accent">🕐</div>
                    <div>
                      <p className="font-label text-[0.62rem] tracking-[0.15em] uppercase text-primary mb-1">Studio Hours</p>
                      <p className="text-sm text-primary leading-[1.7]">Monday – Saturday<br />10:00 AM – 7:00 PM IST</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919820000000?text=Hello%2C%20I%27d%20love%20to%20enquire%20about%20planning%20my%20wedding."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg px-6 py-5 no-underline mb-5 transition-all duration-150 ease-out shadow-[0_4px_16px_rgba(37,211,102,0.25)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)]"
                  style={{ backgroundImage: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                >
                  <span className="text-[1.6rem] shrink-0">💬</span>
                  <div>
                    <p className="font-heading text-base font-semibold text-white">Prefer to WhatsApp?</p>
                    <p className="text-xs text-white/75 mt-0.5">Chat with our concierge team instantly</p>
                  </div>
                  <span className="ml-auto text-white text-[1.2rem] shrink-0">→</span>
                </a>

                {/* Response Promise */}
                <div className="flex gap-3 items-start p-4 bg-cream rounded-md border border-accent/40">
                  <span className="text-accent text-[0.85rem] shrink-0 mt-[3px]">✦</span>
                  <p className="text-sm text-primary leading-[1.65]">We respond to every enquiry within <strong>24 hours</strong>, personally — not with an automated reply.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section>
        <div
          className="h-[320px] bg-cream relative flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=60')] before:bg-cover before:bg-center before:opacity-[0.08]"
        >
          <div className="relative text-center z-[1]">
            <div className="text-[3rem] mb-3">📍</div>
            <p className="font-heading text-lg text-primary font-medium leading-[1.5]">The Story Events Studio<br />Bandra Kurla Complex, Mumbai</p>
          </div>
        </div>
      </section>
    </>
  );
}
