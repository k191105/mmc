'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from './CaseStudyPreview.module.css';
// import Image from 'next/image'; // Will be used when actual images are added

// Placeholder data - will be defined properly in types/case-study.ts (Task 24)
const placeholderCaseStudies = [
  {
    id: 'cs1',
    title: 'Boosting E-commerce Conversion by 35% for AlphaRetail',
    summary: 'Implemented a hyper-personalization engine resulting in a significant uplift in conversion rates and average order value.',
    imageUrl: '/images/placeholder-case-study-1.jpg', // Replace with actual image path
    slug: '/case-studies/alpharetail-conversion',
    tags: ['E-commerce', 'Personalization', 'CRO'],
  },
  {
    id: 'cs2',
    title: '2.5x Lead Generation Increase for BetaCorp SaaS',
    summary: 'Revamped lead scoring and segmentation strategy, coupled with targeted content, dramatically increasing qualified leads.',
    imageUrl: '/images/placeholder-case-study-2.jpg',
    slug: '/case-studies/betacorp-leadgen',
    tags: ['SaaS', 'Lead Generation', 'Segmentation'],
  },
  {
    id: 'cs3',
    title: 'Streamlining Customer Data for GammaTech Solutions',
    summary: 'Unified disparate customer data sources into a single view, enabling real-time orchestration and improved customer service.',
    imageUrl: '/images/placeholder-case-study-3.jpg',
    slug: '/case-studies/gammatech-data',
    tags: ['Data Platform', 'Orchestration', 'CDP'],
  },
];

interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  slug: string;
  tags?: string[];
}

const CaseStudyPreview = () => {
  return (
    <section id="case-studies-preview" className={styles.caseStudySection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Proven Success Stories</h2>
          <p className={styles.sectionSubtitle}>
            Discover how we've helped ambitious brands like yours achieve remarkable results through data-driven strategies and expert execution.
          </p>
        </div>

        <div className={styles.caseStudiesGrid}>
          {placeholderCaseStudies.map((study: CaseStudy) => (
            <Card
              key={study.id}
              variant="interactive"
              shadow="lg"
              padding="none" // Padding will be handled by internal elements of the card for image full bleed
              href={study.slug}
              className={styles.caseStudyCard}
            >
              <div className={styles.cardImageWrapper}>
                {/* Placeholder for Next/Image component */}
                <img src={study.imageUrl} alt={study.title} className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.caseStudyTitle}>{study.title}</h3>
                <p className={styles.caseStudySummary}>{study.summary}</p>
                {study.tags && study.tags.length > 0 && (
                  <div className={styles.tagsContainer}>
                    {study.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                )}
                <div className={styles.readMoreLink}>Read Case Study &rarr;</div>
              </div>
            </Card>
          ))}
        </div>

        <div className={styles.viewAllCaseStudiesCta}>
          <Button href="/case-studies" variant="primary" size="large">
            Explore All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview; 