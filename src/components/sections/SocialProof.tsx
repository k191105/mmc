'use client';

import React from 'react';
import styles from './SocialProof.module.css';
// import Image from 'next/image'; // If using Next.js Image component for logos

// Placeholder logos - replace with actual paths and alt text
const logos = [
  { src: '/logos/placeholder-logo-1.svg', alt: 'Client/Partner 1', width: 120, height: 40 },
  { src: '/logos/placeholder-logo-2.svg', alt: 'Client/Partner 2', width: 120, height: 40 },
  { src: '/logos/placeholder-logo-3.svg', alt: 'Client/Partner 3', width: 120, height: 40 },
  { src: '/logos/placeholder-logo-4.svg', alt: 'Client/Partner 4', width: 120, height: 40 },
  { src: '/logos/placeholder-logo-5.svg', alt: 'Client/Partner 5', width: 120, height: 40 },
  // Add more logos as needed
];

const SocialProof = () => {
  return (
    <section className={styles.socialProofSection}>
      <div className={`container ${styles.socialProofContainer}`}>
        <p className={styles.introText}>
          WE ARE PARTNERED WITH MORE THAN 50+ COMPANIES AROUND THE GLOBE
        </p>
        <div className={styles.logoGrid}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              {/* If using next/image: */}
              {/* <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} /> */}
              {/* For simple img tags: */}
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof; 