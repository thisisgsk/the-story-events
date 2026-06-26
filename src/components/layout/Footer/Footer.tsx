import Link from 'next/link';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Destination Weddings', href: '/destination-weddings' },
  { label: 'Services', href: '/services' },
  { label: 'Weddings & Events', href: '/weddings' },
  { label: 'Our Philosophy', href: '/philosophy' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact & Enquire', href: '/contact' },
];

const guideLinks = [
  { label: 'Destination Guides', href: '/venues-guides/destinations' },
  { label: 'Venue Guides', href: '/venues-guides/venues' },
  { label: 'Wedding Checklist', href: '/venues-guides/planning-guides/destination-wedding-checklist' },
  { label: 'How to Choose a Venue', href: '/venues-guides/planning-guides/how-to-choose-a-venue' },
  { label: 'Wedding Timeline', href: '/venues-guides/planning-guides/wedding-timeline-planning' },
  { label: 'Guest Hospitality Guide', href: '/venues-guides/planning-guides/guest-hospitality-guide' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>The Story Events</Link>
          <p className={styles.tagline}>Luxury Wedding Planners</p>
          <p className={styles.brandDesc}>
            We plan extraordinary weddings across India&apos;s most breathtaking destinations — with calm precision, genuine warmth, and relentless attention to the details that make a day unforgettable.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">📷</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">f</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Pinterest">P</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">▶</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Quick Links</p>
          <div className={styles.colLinks}>
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.colLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Resources</p>
          <div className={styles.colLinks}>
            {guideLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.colLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Get In Touch</p>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <p className={styles.contactText}>
              The Story Events Studio<br />
              Level 4, Maker Maxity<br />
              Bandra Kurla Complex<br />
              Mumbai, Maharashtra 400051
            </p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📞</span>
            <p className={styles.contactText}>
              <a href="tel:+919820000000">+91 98200 00000</a>
            </p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>✉</span>
            <p className={styles.contactText}>
              <a href="mailto:hello@thestoryevents.com">hello@thestoryevents.com</a>
            </p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>💬</span>
            <p className={styles.contactText}>
              <a href="https://wa.me/919820000000" target="_blank" rel="noopener noreferrer">
                WhatsApp Concierge
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} The Story Events. All rights reserved. Crafted with love.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.bottomLink}>Terms</Link>
          <Link href="/sitemap" className={styles.bottomLink}>Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
