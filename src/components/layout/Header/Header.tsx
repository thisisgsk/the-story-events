'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useStickyHeader } from '@/hooks/useStickyHeader';
import styles from './Header.module.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Destination Specialists', href: '/destination-specialists' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Venues', href: '/venues' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const { isScrolled } = useStickyHeader(60);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const headerClass = `${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerTransparent}`;

  return (
    <>
      <header className={headerClass}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={handleHomeClick}>
            <div className={styles.logoWhite}>
              <Image src="/logo-white.png" alt="The Story Events" width={160} height={48} style={{ objectFit: 'contain' }} priority />
            </div>
            <div className={styles.logoMaroon}>
              <Image src="/logo-maroon.png" alt="The Story Events" width={160} height={48} style={{ objectFit: 'contain' }} priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.href} className={styles.navItem}>
                <Link 
                  href={item.href} 
                  className={styles.navLink}
                  onClick={item.href === '/' ? handleHomeClick : undefined}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.headerActions}>
            <Link href="/contact" className={styles.ctaBtn}>
              Enquire Now
            </Link>
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ''}`}
        aria-hidden={!mobileOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navItems.map((item, i) => (
            <div key={item.href} style={{ textAlign: 'center', width: '100%' }}>
              <Link
                href={item.href}
                className={styles.mobileNavLink}
                onClick={(e) => {
                  if (item.href === '/') {
                    handleHomeClick(e);
                  } else {
                    setMobileOpen(false);
                  }
                }}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {item.label}
              </Link>
            </div>
          ))}
          <div className={styles.mobileDivider} />
          <Link href="/contact" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>
            Enquire Now
          </Link>
        </nav>
      </div>
    </>
  );
}
