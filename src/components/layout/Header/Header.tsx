'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useStickyHeader } from '@/hooks/useStickyHeader';
import styles from './Header.module.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Destination Weddings', href: '/destination-weddings' },
  { label: 'Services', href: '/services' },
  { label: 'Weddings & Events', href: '/weddings' },
  {
    label: 'Venues & Guides',
    href: '/venues-guides',
    children: [
      { label: 'Destination Guides', href: '/venues-guides/destinations' },
      { label: 'Venue Guides', href: '/venues-guides/venues' },
      { label: 'Planning Guides', href: '/venues-guides/planning-guides' },
    ],
  },
  {
    label: 'Our Philosophy',
    href: '/philosophy',
  },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const { isScrolled } = useStickyHeader(60);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
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
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                  {item.children && <span className={styles.dropArrow}>▾</span>}
                </Link>
                {item.children && (
                  <div className={styles.dropdown}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className={styles.dropLink}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
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
                onClick={() => setMobileOpen(false)}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className={styles.mobileSubLinks}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={styles.mobileSubLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
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
