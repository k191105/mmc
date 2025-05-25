'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styles from './ServiceDetailPage.module.css';
import Button from '@/components/ui/Button';

// Placeholder data - will be moved to config/services.ts later (Task 19)
const placeholderServices = [
  {
    id: '1',
    title: 'Personalized Marketing Automation',
    detailedDescription: 'Our Personalized Marketing Automation service helps you engage customers with tailored experiences at scale. We implement and optimize leading marketing automation platforms, ensuring you deliver the right message to the right person at the right time. This includes setting up complex workflows, integrating with your CRM, segmenting audiences, and A/B testing campaigns for maximum impact. We focus on creating seamless customer journeys that nurture leads and drive conversions.',
    icon: '⚙️',
    slug: 'personalization',
    keyBenefits: [
      'Increased lead nurturing efficiency',
      'Higher conversion rates',
      'Improved customer retention',
      'Scalable personalized communication',
    ],
    caseStudyLink: '/case-studies/automation-success' // Example link
  },
  {
    id: '2',
    title: 'Advanced Customer Segmentation',
    detailedDescription: 'Unlock deeper insights into your audience with our Advanced Customer Segmentation service. We go beyond basic demographics to define and activate precise customer segments based on behavior, purchase history, engagement levels, and predictive analytics. This allows for highly targeted marketing campaigns, personalized product recommendations, and more effective product development strategies. We help you understand who your customers are and what they need.',
    icon: '📊',
    slug: 'segmentation',
    keyBenefits: [
      'Enhanced targeting precision',
      'Improved campaign ROI',
      'Deeper customer understanding',
      'Optimized product development',
    ],
    caseStudyLink: '/case-studies/segmentation-insights'
  },
  {
    id: '3',
    title: 'Real-Time Data Orchestration',
    detailedDescription: 'Our Real-Time Data Orchestration service connects your disparate data sources to create a unified customer view. This enables immediate, context-aware interactions across all touchpoints, from your website and mobile app to email and customer service channels. We help you break down data silos and build a cohesive data infrastructure that powers real-time personalization and decision-making.',
    icon: '🔄',
    slug: 'orchestration',
    keyBenefits: [
      'Unified customer profiles',
      'Consistent cross-channel experiences',
      'Faster response to customer actions',
      'Improved operational efficiency',
    ],
    caseStudyLink: '/case-studies/data-orchestration-value'
  },
  {
    id: '4',
    title: 'Growth Strategy & Analytics',
    detailedDescription: 'Leverage data to fuel sustainable growth with our Growth Strategy & Analytics service. We provide strategic consulting and advanced analytics to help you uncover new opportunities, optimize your marketing spend, and measure success effectively. Our services include market analysis, competitive benchmarking, KPI development, performance dashboards, and data-driven growth hacking techniques.',
    icon: '📈',
    slug: 'growth-analytics',
    keyBenefits: [
      'Data-driven decision making',
      'Identification of new growth levers',
      'Maximized marketing ROI',
      'Clear performance visibility',
    ],
    caseStudyLink: '/case-studies/analytics-driven-growth'
  },
];

interface Service {
  id: string;
  title: string;
  detailedDescription: string;
  icon: React.ReactNode;
  slug: string;
  keyBenefits: string[];
  caseStudyLink?: string;
}

const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const service = placeholderServices.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className={styles.notFoundContainer}>
        <h1>Service Not Found</h1>
        <p>The service you are looking for does not exist.</p>
        <Button href="/services" variant="primary">Back to Services</Button>
      </div>
    );
  }

  return (
    <div className={styles.detailPageContainer}>
      <header className={styles.serviceHeader}>
        <span className={styles.serviceIconHeader}>{service.icon}</span>
        <h1 className={styles.serviceTitleHeader}>{service.title}</h1>
      </header>

      <section className={styles.serviceContent}>
        <div className={styles.descriptionSection}>
          <h2>Detailed Overview</h2>
          <p>{service.detailedDescription}</p>
        </div>

        <aside className={styles.keyBenefitsSection}>
          <h3>Key Benefits</h3>
          <ul>
            {service.keyBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          {service.caseStudyLink && (
            <Button href={service.caseStudyLink} variant="secondary" className={styles.ctaButton}>
              View Case Study
            </Button>
          )}
          <Button href="/contact" variant="primary" className={styles.ctaButton}>
            Request a Consultation
          </Button>
        </aside>
      </section>

      <div className={styles.backLinkWrapper}>
        <Button href="/services" variant="text" leftIcon={<span>&larr;</span>}>
          Back to All Services
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
