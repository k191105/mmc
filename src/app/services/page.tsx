'use client';

import React from 'react';
import Link from 'next/link';
import styles from './ServicesPage.module.css';

// Placeholder data - will be moved to config/services.ts later (Task 19)
const placeholderServices = [
  {
    id: '1',
    title: 'Personalized Marketing Automation',
    description: 'Engage customers with tailored experiences at scale. We implement and optimize marketing automation platforms for maximum impact.',
    icon: '⚙️',
    slug: '/services/personalization',
  },
  {
    id: '2',
    title: 'Advanced Customer Segmentation',
    description: 'Unlock deeper insights into your audience. We define and activate precise customer segments for targeted campaigns and product development.',
    icon: '📊',
    slug: '/services/segmentation',
  },
  {
    id: '3',
    title: 'Real-Time Data Orchestration',
    description: 'Connect disparate data sources to create a unified customer view and enable immediate, context-aware interactions across all touchpoints.',
    icon: '🔄',
    slug: '/services/orchestration',
  },
  {
    id: '4',
    title: 'Growth Strategy & Analytics',
    description: 'Leverage data to fuel sustainable growth. We provide strategic consulting and advanced analytics to uncover opportunities and measure success.',
    icon: '📈',
    slug: '/services/growth-analytics',
  },
];

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode; // Can be string (emoji) or a React component
  slug: string;
}

const ServicesPage = () => {
  return (
    <div className={styles.servicesPageContainer}>
      <header className={styles.pageHeader}>
        <h1>Our Services</h1>
        <p>Discover how we can help your business grow.</p>
      </header>

      <div className={styles.servicesList}>
        {placeholderServices.map((service: Service) => (
          <Link href={service.slug} key={service.id} className={styles.serviceCardLink}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIconWrapper}>
                <span className={styles.serviceIcon}>{service.icon}</span>
              </div>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              <span className={styles.learnMoreLink}>Learn More &rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
