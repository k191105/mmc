'use client';

import React from 'react';
import styles from './StrategySessionPage.module.css'; // Will use a generic coming soon style or create specific if needed
import Button from '@/components/ui/Button';

const StrategySessionPage = () => {
  return (
    <div className={styles.comingSoonPageContainer}> {/* Using a generic class name for styling */}
      <div className={styles.contentWrapper}>
        <h1 className={styles.comingSoonTitle}>Free Strategy Session</h1>
        <p className={styles.comingSoonSubtitle}>
          Let's talk about your marketing challenges and opportunities.
        </p>
        <div className={styles.iconPlaceholder}>
        <span>&#x1F4C5;</span> {/* Calendar icon */}
        </div>
        <h2 className={styles.stayTuned}>Coming Soon!</h2>
        <p className={styles.message}>
          We are currently setting up our booking system for free strategy sessions. 
          This page will soon allow you to schedule a consultation with one of our experts.
        </p>
        <p className={styles.message}>
          In the meantime, please reach out to us via our contact page to discuss your needs.
        </p>
        <div className={styles.buttonContainer}>
          <Button href="/contact" variant="primary" size="large">
            Contact Us Now
          </Button>
          <Button href="/" variant="secondary" size="large">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StrategySessionPage; 