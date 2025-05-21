'use client';

import React from 'react';
import styles from './Features.module.css';
// import Image from 'next/image'; // If using next/image for visuals

// Placeholder for icons - in a real app, these might be SVGs or an icon library
const PlaceholderIcon = ({ name }: { name: string }) => (
  <div className={styles.iconPlaceholder}></div>
);

const featuresData = [
  {
    icon: <PlaceholderIcon name="Bridge" />,
    title: "Full-Stack Expertise",
    description: "We bridge strategy and execution, from C-suite OKRs to technical implementation in your martech stack."
  },
  {
    icon: <PlaceholderIcon name="Graph" />,
    title: "Revenue-Focused",
    description: "We measure success in revenue gains, not vanity metrics or surface-level engagement."
  },
  {
    icon: <PlaceholderIcon name="Departments" />,
    title: "Cross-Functional Impact",
    description: "Our work influences product, pricing, onboarding, and retention—not just marketing."
  },
  {
    icon: <PlaceholderIcon name="Engineering" />,
    title: "Engineered Approach",
    description: "We apply structured experimentation and data science to marketing challenges."
  }
];

const Features = () => {
  return (
    <section id="why-choose-us" className={styles.featuresSection}>
      <div className={`container ${styles.featuresContainer}`}>
        <h2 className={styles.sectionTitle}>Why Partner with MMC</h2>
        <div className={styles.featuresGrid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 