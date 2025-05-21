'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const navItems = [
    { label: 'Services', href: '#services-showcase' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Case Studies', href: '#case-studies-preview' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo} onClick={isMobileMenuOpen ? handleMobileLinkClick : undefined}>
          MMC
        </Link>

        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <Button href="#contact-cta" variant="primary" size="medium" className={styles.ctaButton}>
            Get Started
          </Button>
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          className={styles.mobileNavOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMobileMenu}
        >
          <motion.nav 
            className={styles.mobileNav}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={handleMobileLinkClick}
              >
                {item.label}
              </Link>
            ))}
            <Button href="#contact-cta" variant="primary" size="large" className={styles.mobileCtaButton} onClick={handleMobileLinkClick}>
                Get Started
            </Button>
            <Link href="/portal" className={`${styles.mobileNavLink} ${styles.portalLinkMobile}`} onClick={handleMobileLinkClick}>
                Client Portal
            </Link>
          </motion.nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
