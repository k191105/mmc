'use client';

import React from 'react';
import Link from 'next/link';
import styles from './CaseStudiesPage.module.css';
// import Image from 'next/image'; // Future use

// Placeholder data - will be moved to config/case-studies.ts later (Task relevant to types/case-study.ts)
const placeholderCaseStudies = [
  {
    id: 'cs1',
    title: 'Boosting E-commerce Conversion by 35% for AlphaRetail',
    summary: 'Implemented a hyper-personalization engine resulting in a significant uplift in conversion rates and average order value.',
    imageUrl: '/images/placeholder-case-study-1.jpg', // Replace with actual image path
    slug: '/case-studies/alpharetail-conversion',
    tags: ['E-commerce', 'Personalization', 'CRO'],
    client: 'AlphaRetail',
    service: 'Personalized Marketing Automation',
    date: '2023-10-15',
  },
  {
    id: 'cs2',
    title: '2.5x Lead Generation Increase for BetaCorp SaaS',
    summary: 'Revamped lead scoring and segmentation strategy, coupled with targeted content, dramatically increasing qualified leads.',
    imageUrl: '/images/placeholder-case-study-2.jpg',
    slug: '/case-studies/betacorp-leadgen',
    tags: ['SaaS', 'Lead Generation', 'Segmentation'],
    client: 'BetaCorp',
    service: 'Advanced Customer Segmentation',
    date: '2023-08-22',
  },
  {
    id: 'cs3',
    title: 'Streamlining Customer Data for GammaTech Solutions',
    summary: 'Unified disparate customer data sources into a single view, enabling real-time orchestration and improved customer service.',
    imageUrl: '/images/placeholder-case-study-3.jpg',
    slug: '/case-studies/gammatech-data',
    tags: ['Data Platform', 'Orchestration', 'CDP'],
    client: 'GammaTech Solutions',
    service: 'Real-Time Data Orchestration',
    date: '2024-01-05',
  },
    {
    id: 'cs4',
    title: 'Fueling Growth with Advanced Analytics for DeltaMart',
    summary: 'Leveraged advanced analytics to uncover key growth opportunities, resulting in a 20% increase in marketing ROI.',
    imageUrl: '/images/placeholder-case-study-4.jpg',
    slug: '/case-studies/deltamart-analytics',
    tags: ['Retail', 'Analytics', 'Growth Strategy'],
    client: 'DeltaMart',
    service: 'Growth Strategy & Analytics',
    date: '2023-11-30',
  },
];

interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  slug: string;
  tags?: string[];
  client: string;
  service: string;
  date: string;
}

const CaseStudiesPage = () => {
  return (
    <div className={styles.caseStudiesPageContainer}>
      <header className={styles.pageHeader}>
        <h1>Our Success Stories</h1>
        <p>See how we've partnered with businesses to achieve exceptional results.</p>
      </header>

      <div className={styles.caseStudiesGrid}>
        {placeholderCaseStudies.map((study: CaseStudy) => (
          <Link href={study.slug} key={study.id} className={styles.caseStudyCardLink}>
            <article className={styles.caseStudyCard}>
              <div className={styles.cardImageWrapper}>
                {/* <Image src={study.imageUrl} alt={study.title} width={400} height={250} className={styles.cardImage} /> */}
                <img src={study.imageUrl} alt={study.title} className={styles.cardImage} /> 
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.caseStudyTitle}>{study.title}</h2>
                <p className={styles.caseStudySummary}>{study.summary}</p>
                <div className={styles.cardMeta}>
                  <span>Client: {study.client}</span>
                  <span>Service: {study.service}</span>
                </div>
                {study.tags && study.tags.length > 0 && (
                  <div className={styles.tagsContainer}>
                    {study.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                )}
                 <span className={styles.readMoreLink}>Read Full Study &rarr;</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
