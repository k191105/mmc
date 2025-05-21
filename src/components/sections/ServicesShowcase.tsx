'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from './ServicesShowcase.module.css';

// Placeholder data - will be moved to config/services.ts later (Task 19)
const placeholderServices = [
  {
    id: '1',
    title: 'Personalized Marketing Automation',
    description: 'Engage customers with tailored experiences at scale. We implement and optimize marketing automation platforms for maximum impact.',
    icon: '⚙️', // Placeholder icon, replace with actual SVG or icon component
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

const ServicesShowcase = () => {
  return (
    <section id="services-showcase" className={styles.servicesSection}>
      <div className={`container ${styles.servicesContainer}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Core Expertise</h2>
          <p className={styles.sectionSubtitle}>
            We help businesses like yours thrive in a data-driven world by delivering intelligent marketing solutions that drive measurable results.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {placeholderServices.map((service: Service) => (
            <Card
              key={service.id}
              variant="interactive"
              shadow="lg"
              padding="large"
              href={service.slug} // Link the whole card
              className={styles.serviceCard}
            >
              <div className={styles.serviceIconWrapper}>
                <span className={styles.serviceIcon}>{service.icon}</span>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              {/* 
                Alternatively, if we don't want the whole card to be a link, 
                we can place a button/link inside the card:
                <div className={styles.serviceLinkWrapper}>
                  <Button href={service.slug} variant="text" rightIcon={<span>&rarr;</span>}>
                    Learn More
                  </Button>
                </div>
              */}
            </Card>
          ))}
        </div>

        <div className={styles.viewAllServicesCta}>
          <Button href="/services" variant="primary" size="large">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
