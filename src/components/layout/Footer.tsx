import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

// Placeholder social media icons (replace with actual icons or an icon library)
const SocialIcon = ({ label, href, children }: { label: string, href: string, children: React.ReactNode }) => (
  <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
    {children}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              MMC
            </Link>
            <p className={styles.footerSlogan}>
              Data-Driven Growth. Real-Time Results.
            </p>
          </div>
          <div className={styles.footerLinksGrid}>
            <div className={styles.footerLinkSection}>
              <h5 className={styles.footerLinkTitle}>Company</h5>
              <Link href="/about" className={styles.footerLink}>About Us</Link>
              <Link href="/careers" className={styles.footerLink}>Careers</Link> {/* Placeholder */}
              <Link href="/contact" className={styles.footerLink}>Contact</Link>
            </div>
            <div className={styles.footerLinkSection}>
              <h5 className={styles.footerLinkTitle}>Services</h5>
              <Link href="/services" className={styles.footerLink}>All Services</Link>
              <Link href="/services/personalization" className={styles.footerLink}>Personalization</Link> {/* Placeholder */}
              <Link href="/services/segmentation" className={styles.footerLink}>Segmentation</Link> {/* Placeholder */}
            </div>
            <div className={styles.footerLinkSection}>
              <h5 className={styles.footerLinkTitle}>Resources</h5>
              <Link href="/insights" className={styles.footerLink}>Insights Blog</Link>
              <Link href="/case-studies" className={styles.footerLink}>Case Studies</Link>
              <Link href="/faq" className={styles.footerLink}>FAQ</Link> {/* Placeholder */}
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} The Modern Marketing Collective. All rights reserved.
        </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.footerLinkSmall}>Privacy Policy</Link>
            <Link href="/terms-of-service" className={styles.footerLinkSmall}>Terms of Service</Link>
          </div>
          <div className={styles.socialIconsContainer}>
            <SocialIcon label="LinkedIn" href="#">
              {/* Placeholder for LinkedIn Icon SVG or Font Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </SocialIcon>
            <SocialIcon label="Twitter / X" href="#">
              {/* Placeholder for Twitter Icon SVG or Font Icon */}
               <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </SocialIcon>
             <SocialIcon label="GitHub" href="#">
                {/* Placeholder for GitHub Icon */}
                <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
