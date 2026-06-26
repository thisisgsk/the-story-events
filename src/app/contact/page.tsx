'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './contact.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  weddingDate: string;
  guestCount: string;
  budget: string;
  destination: string;
  weddingType: string;
  message: string;
}

const initialForm: FormData = {
  name: '', email: '', phone: '', weddingDate: '',
  guestCount: '', budget: '', destination: '', weddingType: '', message: '',
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
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1800&q=80"
            alt="Contact The Story Events"
            fill priority sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <AnimatedSection animation="fadeIn">
            <span className={styles.heroLabel}>Contact & Enquire</span>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <h1 className={styles.heroTitle}>Let&apos;s Begin Planning<br />Your Story</h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={400}>
            <p className={styles.heroSubtitle}>
              Share your vision with us. We&apos;ll respond within 24 hours with a personalised consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Lead Form */}
            <div className={styles.formWrapper}>
              <AnimatedSection animation="slideLeft">
                <div className={styles.formHeader}>
                  <span className="section-label">Enquire Now</span>
                  <h2 className={styles.formTitle}>Tell Us About Your Dream Wedding</h2>
                  <p className={styles.formSubtitle}>
                    The more detail you share, the better we can tailor our response to your vision.
                  </p>
                </div>

                {submitted ? (
                  <div className={styles.successBox}>
                    <div className={styles.successIcon}>✦</div>
                    <h3>Thank You, {form.name.split(' ')[0]}!</h3>
                    <p>We&apos;ve received your enquiry and will be in touch within 24 hours. In the meantime, feel free to browse our portfolio for inspiration.</p>
                    <Link href="/weddings" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                      Browse Weddings
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">Full Name *</label>
                        <input id="name" name="name" type="text" className="form-input" required
                          placeholder="Your full name" value={form.name} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address *</label>
                        <input id="email" name="email" type="email" className="form-input" required
                          placeholder="your@email.com" value={form.email} onChange={handleChange} />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone Number *</label>
                        <input id="phone" name="phone" type="tel" className="form-input" required
                          placeholder="+91 98XXX XXXXX" value={form.phone} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="weddingDate">Expected Wedding Date</label>
                        <input id="weddingDate" name="weddingDate" type="date" className="form-input"
                          value={form.weddingDate} onChange={handleChange} />
                      </div>
                    </div>

                    <div className={styles.formRow}>
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
                        <label className="form-label" htmlFor="budget">Budget Range (INR)</label>
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

                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="destination">Destination of Interest</label>
                        <select id="destination" name="destination" className="form-select" value={form.destination} onChange={handleChange}>
                          <option value="">Select destination</option>
                          <option value="udaipur">Udaipur</option>
                          <option value="jaipur">Jaipur</option>
                          <option value="goa">Goa</option>
                          <option value="kerala">Kerala</option>
                          <option value="hyderabad">Hyderabad</option>
                          <option value="manali">Manali</option>
                          <option value="open">Open to Suggestions</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="weddingType">Wedding Style</label>
                        <select id="weddingType" name="weddingType" className="form-select" value={form.weddingType} onChange={handleChange}>
                          <option value="">Select style</option>
                          <option value="palace">Palace / Heritage</option>
                          <option value="beach">Beach / Coastal</option>
                          <option value="mountain">Mountain / Hill Station</option>
                          <option value="intimate">Intimate / Micro Wedding</option>
                          <option value="grand">Grand Celebration</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Tell Us Your Vision</label>
                      <textarea id="message" name="message" className="form-textarea" rows={5}
                        placeholder="Describe your dream wedding — the mood, the aesthetic, the details that matter to you most..."
                        value={form.message} onChange={handleChange} />
                    </div>

                    <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={loading}>
                      {loading ? 'Sending...' : 'Send My Enquiry ✦'}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className={styles.infoWrapper}>
              <AnimatedSection animation="slideRight" delay={150}>
                <div className={styles.infoCard}>
                  <h3 className={styles.infoTitle}>Get In Touch</h3>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>📍</div>
                    <div>
                      <p className={styles.infoItemLabel}>Studio Address</p>
                      <p className={styles.infoItemText}>
                        Level 4, Maker Maxity<br />
                        Bandra Kurla Complex<br />
                        Mumbai, Maharashtra 400051
                      </p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>📞</div>
                    <div>
                      <p className={styles.infoItemLabel}>Phone</p>
                      <a href="tel:+919820000000" className={styles.infoItemText}>+91 98200 00000</a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>✉</div>
                    <div>
                      <p className={styles.infoItemLabel}>Email</p>
                      <a href="mailto:hello@thestoryevents.com" className={styles.infoItemText}>hello@thestoryevents.com</a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>🕐</div>
                    <div>
                      <p className={styles.infoItemLabel}>Studio Hours</p>
                      <p className={styles.infoItemText}>Monday – Saturday<br />10:00 AM – 7:00 PM IST</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919820000000?text=Hello%2C%20I%27d%20love%20to%20enquire%20about%20planning%20my%20wedding."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappCta}
                >
                  <span className={styles.whatsappIcon}>💬</span>
                  <div>
                    <p className={styles.whatsappTitle}>Prefer to WhatsApp?</p>
                    <p className={styles.whatsappSub}>Chat with our concierge team instantly</p>
                  </div>
                  <span className={styles.whatsappArrow}>→</span>
                </a>

                {/* Response Promise */}
                <div className={styles.promise}>
                  <span className={styles.promiseIcon}>✦</span>
                  <p>We respond to every enquiry within <strong>24 hours</strong>, personally — not with an automated reply.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapOverlay}>
            <div className={styles.mapPin}>📍</div>
            <p className={styles.mapText}>The Story Events Studio<br />Bandra Kurla Complex, Mumbai</p>
          </div>
        </div>
      </section>
    </>
  );
}
