'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import styles from './CTASection.module.css';

const CTASection = () => {
  return (
    <section id="contact-cta" className={styles.ctaSection}>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.ctaHeadline}>
            Ready to Elevate Your Marketing Strategy?
          </h2>
          <p className={styles.ctaSubtext}>
            Let's discuss how The Modern Marketing Collective can help you unlock new growth opportunities and achieve your business objectives through data-driven insights and expert execution.
          </p>
          <div className={styles.buttonContainer}>
            <Button href="/contact" variant="primary" size="large">
              Get in Touch
            </Button>
            {/* Optional secondary CTA, e.g., for a newsletter or a resource download */}
            {/* <Button href="/newsletter" variant="outline" size="large"> 
              Join Our Newsletter
            </Button> */}
          </div>
        </div>
        {/* Optional: Decorative elements or a background image can be added here */}
        {/* <div className={styles.decorativeShape}></div> */}
      </div>
    </section>
  );
};

export default CTASection; 