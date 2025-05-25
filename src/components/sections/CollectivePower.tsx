'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import styles from './CollectivePower.module.css';
// import Image from 'next/image'; // For the model visual later

const CollectivePower = () => {
  return (
    <section className={styles.solutionSection} id="approach">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>The Power of the Collective</h2>
          <p className={styles.sectionSubtitle}>
            Our three-tier model creates a seamless ecosystem that transforms marketing into a growth engine.
          </p>
        </div>
        <div className={styles.modelContainer}>
          <div className={styles.modelVisual}>
            {/* Placeholder for visual element */}
            {/* <Image src="/images/collective-model-visual.png" alt="Three-tier collective model" width={580} height={400} /> */}
            <div className={styles.visualPlaceholder}>
              <span className={styles.visualIcon}>🔗</span> {/* Chain link icon for ecosystem idea */}
              <p className={styles.visualPlaceholderText}>Visual Representation of the Three-Tier Model</p>
              <div className={styles.tierCirclesContainer}>
                <div className={styles.tierCircle} style={{ '--tier-color': 'var(--color-accent-blue)' } as React.CSSProperties}>S</div>
                <div className={styles.tierCircle} style={{ '--tier-color': 'var(--color-steel-blue)' } as React.CSSProperties}>A</div>
                <div className={styles.tierCircle} style={{ '--tier-color': 'var(--color-light-gray)', color: 'var(--color-black)' } as React.CSSProperties}>T</div>
              </div>
            </div>
          </div>
          <div className={styles.modelDescription}>
            <h3 className={styles.descriptionTitle}>A New Approach to Marketing Transformation</h3>
            <div className={`${styles.tier} ${styles.tierStrategic}`}>
              <h4 className={styles.tierTitle}><span className={styles.tierIconLetter} style={{backgroundColor: 'var(--color-accent-blue)', color: 'var(--color-black)' }}>S</span> Strategic Transformation</h4>
              <p className={styles.tierText}>Former CMOs and CDOs providing executive-level guidance and strategic roadmaps for marketing transformation.</p>
            </div>
            <div className={`${styles.tier} ${styles.tierAgency}`}>
              <h4 className={styles.tierTitle}><span className={styles.tierIconLetter} style={{backgroundColor: 'var(--color-steel-blue)'}}>A</span> Specialized Agency Execution</h4>
              <p className={styles.tierText}>Best-in-class agencies delivering cohesive execution across content, digital, events, and creative.</p>
            </div>
            <div className={`${styles.tier} ${styles.tierTechnical}`}>
              <h4 className={styles.tierTitle}><span className={styles.tierIconLetter} style={{backgroundColor: 'var(--color-light-gray)', color: 'var(--color-black)' }}>T</span> Technical Implementation</h4>
              <p className={styles.tierText}>Hands-on specialists configuring and optimizing marketing technology, data platforms, and automation.</p>
            </div>
            <div className={styles.ctaWrapper}>
                <Button href="/approach" variant="primary" size="medium"> 
                    See How It Works
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectivePower; 