import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Destination Specialists', href: '/destination-specialists' },
  { label: 'Portfolio', href: '/portfolio' },
];

const guideLinks = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Venues', href: '/venues' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const contactLinkClass = 'transition-colors duration-150 ease-out hover:text-accent';

export default function Footer() {
  return (
    <footer className="bg-primary text-white/70 pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 gap-12 mb-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:gap-8">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-flex mb-4">
            <Image src="/logo-white.png" alt="The Story Events" width={200} height={60} style={{ objectFit: 'contain' }} />
          </Link>
          <p className="text-sm leading-[1.8] text-white/55 max-w-[30ch] mb-6">
            We plan extraordinary weddings across India&apos;s most breathtaking destinations — with calm precision, genuine warmth, and relentless attention to the details that make a day unforgettable.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 text-[0.85rem] no-underline transition-all duration-150 ease-out hover:border-accent hover:text-accent hover:-translate-y-0.5">📷</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 text-[0.85rem] no-underline transition-all duration-150 ease-out hover:border-accent hover:text-accent hover:-translate-y-0.5">f</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 text-[0.85rem] no-underline transition-all duration-150 ease-out hover:border-accent hover:text-accent hover:-translate-y-0.5">P</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 text-[0.85rem] no-underline transition-all duration-150 ease-out hover:border-accent hover:text-accent hover:-translate-y-0.5">▶</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-label text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-white/85 mb-5">Quick Links</p>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/50 no-underline transition-colors duration-150 ease-out leading-[1.4] hover:text-accent">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <p className="font-label text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-white/85 mb-5">Resources</p>
          <div className="flex flex-col gap-3">
            {guideLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/50 no-underline transition-colors duration-150 ease-out leading-[1.4] hover:text-accent">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-label text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-white/85 mb-5">Get In Touch</p>
          <div className="flex gap-3 items-start mb-4">
            <span className="text-accent text-[0.9rem] mt-0.5 shrink-0">📍</span>
            <p className="text-sm text-white/50 leading-[1.6]">
              The Story Events Studio<br />
              Level 4, Maker Maxity<br />
              Bandra Kurla Complex<br />
              Mumbai, Maharashtra 400051
            </p>
          </div>
          <div className="flex gap-3 items-start mb-4">
            <span className="text-accent text-[0.9rem] mt-0.5 shrink-0">📞</span>
            <p className="text-sm text-white/50 leading-[1.6]">
              <a href="tel:+919820000000" className={contactLinkClass}>+91 98200 00000</a>
            </p>
          </div>
          <div className="flex gap-3 items-start mb-4">
            <span className="text-accent text-[0.9rem] mt-0.5 shrink-0">✉</span>
            <p className="text-sm text-white/50 leading-[1.6]">
              <a href="mailto:hello@thestoryevents.com" className={contactLinkClass}>hello@thestoryevents.com</a>
            </p>
          </div>
          <div className="flex gap-3 items-start mb-4">
            <span className="text-accent text-[0.9rem] mt-0.5 shrink-0">💬</span>
            <p className="text-sm text-white/50 leading-[1.6]">
              <a href="https://wa.me/919820000000" target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
                WhatsApp Concierge
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 pt-6 border-t border-white/[0.08] flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} The Story Events. All rights reserved. Crafted with love.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-xs text-white/30 no-underline transition-colors duration-150 ease-out hover:text-white/60">Privacy Policy</Link>
          <Link href="/terms" className="text-xs text-white/30 no-underline transition-colors duration-150 ease-out hover:text-white/60">Terms</Link>
          <Link href="/sitemap" className="text-xs text-white/30 no-underline transition-colors duration-150 ease-out hover:text-white/60">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
