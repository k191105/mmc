'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
  // Variants can be simplified or adjusted based on the new layout
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundElements}>
        {/* These could be absolutely positioned divs with gradients, shapes, or even a subtle particle animation */}
        <div className={`${styles.bgShape} ${styles.shape1}`}></div>
        <div className={`${styles.bgShape} ${styles.shape2}`}></div>
        <div className={`${styles.bgShape} ${styles.shape3}`}></div>
      </div>
      <div className={`container ${styles.heroContainer}`}>
        {/* Left Column: Text Content */}
        <motion.div 
          className={styles.textContent}
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <motion.p className={styles.achievementText} variants={itemVariants}>
            Trusted by Forward-Thinking Brands Since 2020
          </motion.p>
          <motion.h1
            className={styles.headline}
            variants={itemVariants}
          >
            Data-Driven Growth That Delivers <span className={styles.highlightText}>Real Results</span>
          </motion.h1>
          <motion.p
            className={styles.subheadline}
            variants={itemVariants}
          >
            Transform how you monetize customer relationships with personalized, segmented, and orchestrated marketing strategies.
          </motion.p>
          <motion.div
            className={styles.statsContainer}
            variants={itemVariants}
          >
            <p className={styles.statsText}>200+ Companies Scaled</p>
            {/* Placeholder for more stats if needed */}
          </motion.div>
          <motion.div
            className={styles.ctaContainer}
            variants={itemVariants}
          >
            <Button href="/contact" variant="primary" size="large" className={styles.ctaButton}>
              Book a Free Strategy Session
            </Button>
            <Button href="/case-studies" variant="outline" size="large" className={styles.ctaButton}>
              See Our Case Studies
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Element */}
        <motion.div 
          className={styles.visualContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Placeholder for Dashboard Preview Image/Component */}
          <div className={styles.dashboardPreviewPlaceholder}>
            <p>Dashboard Preview Here</p>
            {/* In a real scenario, this would be an <Image> component or a more complex SVG/component */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
