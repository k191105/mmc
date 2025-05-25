'use client';

import React from 'react';
import styles from './ApproachPage.module.css';
import Button from '@/components/ui/Button';

const ApproachPage = () => {
  return (
    <div className={styles.approachPageContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.comingSoonTitle}>Our Approach</h1>
        <p className={styles.comingSoonSubtitle}>
          We're currently refining the details of how we articulate our unique three-tier model.
        </p>
        <div className={styles.iconPlaceholder}>
          <span>&#x1F6E0;&#xFE0F;</span> {/* Construction icon */}
        </div>
        <h2 className={styles.stayTuned}>Coming Soon!</h2>
        <p className={styles.message}>
          A detailed explanation of our Strategic Transformation, Specialized Agency Execution, and Technical Implementation tiers is under construction. 
          We're excited to share more about how this powerful combination drives success for our clients.
        </p>
        <p className={styles.message}>
          Please check back shortly, or contact us if you have immediate questions.
        </p>
        <div className={styles.buttonContainer}>
          <Button href="/contact" variant="primary" size="large">
            Contact Us
          </Button>
          <Button href="/" variant="secondary" size="large">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApproachPage; 