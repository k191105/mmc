'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styles from './CaseStudyDetailPage.module.css';
import Button from '@/components/ui/Button';
// import Image from 'next/image'; // Future use

// Placeholder data - will be moved to config/case-studies.ts later
const placeholderCaseStudies = [
  {
    id: 'cs1',
    title: 'Boosting E-commerce Conversion by 35% for AlphaRetail',
    slug: 'alpharetail-conversion',
    client: 'AlphaRetail Inc.',
    industry: 'E-commerce',
    service: ['Personalized Marketing Automation', 'Conversion Rate Optimization'],
    date: 'October 15, 2023',
    problem: 'AlphaRetail was struggling with stagnant conversion rates and low AOV despite significant traffic to their online store. Their generic marketing approach failed to engage customers effectively.',
    solution: `We implemented a comprehensive personalization strategy powered by a leading marketing automation platform. This involved:\n- Deep customer segmentation based on behavior and purchase history.\n- Dynamic content and product recommendations across the website and email campaigns.\n- Automated abandoned cart recovery flows with personalized incentives.\n- A/B testing various personalization tactics to optimize performance.`,
    results: [
      { metric: '35%', description: 'Increase in overall conversion rate' },
      { metric: '25%', description: 'Lift in Average Order Value (AOV)' },
      { metric: '15%', description: 'Reduction in cart abandonment rate' },
      { metric: 'Improved', description: 'Customer engagement and loyalty' },
    ],
    imageUrl: '/images/placeholder-case-study-1.jpg',
    tags: ['E-commerce', 'Personalization', 'CRO', 'Marketing Automation'],
    testimonial: {
      quote: 'The personalization strategy implemented by MMC transformed our business. We saw an immediate and substantial impact on our key metrics.',
      author: 'Jane Doe, CEO of AlphaRetail',
    }
  },
  {
    id: 'cs2',
    title: '2.5x Lead Generation Increase for BetaCorp SaaS',
    slug: 'betacorp-leadgen',
    client: 'BetaCorp Software',
    industry: 'SaaS / B2B Technology',
    service: ['Advanced Customer Segmentation', 'Content Marketing', 'Lead Generation'],
    date: 'August 22, 2023',
    problem: 'BetaCorp, a B2B SaaS provider, faced challenges in generating a consistent flow of qualified leads. Their existing lead generation efforts were broad and lacked targeting, resulting in low conversion from MQL to SQL.',
    solution: `Our team developed and executed a multi-faceted lead generation strategy:\n- Conducted in-depth market research and persona development.\n- Implemented advanced lead scoring and segmentation models within their CRM.\n- Created targeted content (ebooks, webinars, blog posts) aligned with different stages of the buyer journey.\n- Launched Account-Based Marketing (ABM) pilot programs for key target accounts.`,
    results: [
      { metric: '2.5x', description: 'Increase in marketing qualified leads (MQLs) per month' },
      { metric: '40%', description: 'Improvement in MQL to SQL conversion rate' },
      { metric: 'Significant', description: 'Growth in organic traffic and search rankings' },
    ],
    imageUrl: '/images/placeholder-case-study-2.jpg',
    tags: ['SaaS', 'Lead Generation', 'Segmentation', 'Content Marketing', 'B2B'],
  },
  // ... add more detailed case studies here, similar to cs1 and cs2
   {
    id: 'cs3',
    title: 'Streamlining Customer Data for GammaTech Solutions',
    slug: 'gammatech-data',
    client: 'GammaTech Solutions',
    industry: 'Technology Services',
    service: ['Real-Time Data Orchestration', 'Customer Data Platform (CDP)'],
    date: 'January 05, 2024',
    problem: 'GammaTech had customer data scattered across multiple, disconnected systems, making it impossible to get a unified view of their customers. This led to inconsistent customer experiences and inefficient operations.',
    solution: `We designed and implemented a Customer Data Platform (CDP) to centralize and unify all customer data. Key activities included:\n- Mapping all existing data sources and defining a unified data model.\n- Integrating various systems (CRM, support desk, marketing tools) with the CDP.\n- Setting up real-time data synchronization and identity resolution.\n- Providing training and support to GammaTech teams on leveraging the new platform.`,
    results: [
      { metric: 'Unified', description: '360-degree customer view achieved' },
      { metric: '20%', description: 'Reduction in customer service resolution time' },
      { metric: 'Enhanced', description: 'Personalization capabilities across all touchpoints' },
      { metric: 'Improved', description: 'Data governance and compliance' },
    ],
    imageUrl: '/images/placeholder-case-study-3.jpg',
    tags: ['Data Platform', 'Orchestration', 'CDP', 'Customer Experience'],
     testimonial: {
      quote: 'MMC\'s expertise in data orchestration was invaluable. We now have a clear, actionable view of our customers that we never had before.',
      author: 'John Smith, CTO of GammaTech Solutions',
    }
  },
   {
    id: 'cs4',
    title: 'Fueling Growth with Advanced Analytics for DeltaMart',
    slug: 'deltamart-analytics',
    client: 'DeltaMart Retail',
    industry: 'Retail',
    service: ['Growth Strategy & Analytics', 'Business Intelligence'],
    date: 'November 30, 2023',
    problem: 'DeltaMart, a growing retail chain, needed a more data-driven approach to understand customer behavior, optimize inventory, and identify new growth avenues. Their existing analytics capabilities were limited and manual.',
    solution: `We partnered with DeltaMart to establish an advanced analytics function:\n- Developed a comprehensive KPI framework aligned with their business objectives.\n- Implemented a modern Business Intelligence (BI) platform with interactive dashboards.\n- Conducted deep-dive analyses on customer purchasing patterns, product performance, and campaign effectiveness.\n- Provided recommendations for pricing optimization, inventory management, and targeted marketing initiatives.`,
    results: [
      { metric: '20%', description: 'Increase in marketing ROI through better targeting' },
      { metric: '10%', description: 'Reduction in stockouts due to improved forecasting' },
      { metric: 'Actionable', description: 'Insights leading to new product category expansion' },
      { metric: 'Empowered', description: 'Teams with self-service analytics capabilities' },
    ],
    imageUrl: '/images/placeholder-case-study-4.jpg',
    tags: ['Retail', 'Analytics', 'Growth Strategy', 'BI'],
  },
];

interface CaseStudyResult {
  metric: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
}

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  service: string[];
  date: string;
  problem: string;
  solution: string;
  results: CaseStudyResult[];
  imageUrl: string;
  tags?: string[];
  testimonial?: Testimonial;
}

const CaseStudyDetailPage = () => {
  const params = useParams();
  const slug = params?.slug as string;

  // Find the case study by slug. Note: slugs in placeholder data don't have leading slash.
  const study = placeholderCaseStudies.find(cs => cs.slug === slug);

  if (!study) {
    return (
      <div className={styles.notFoundContainer}>
        <h1>Case Study Not Found</h1>
        <p>The case study you are looking for does not exist or the link is incorrect.</p>
        <Button href="/case-studies" variant="primary">Back to Case Studies</Button>
      </div>
    );
  }

  return (
    <article className={styles.detailPageContainer}>
      <header className={styles.studyHeader}>
        <div className={styles.headerContent}>
          <p className={styles.metaInfo}>{study.client} &bull; {study.industry} &bull; {study.date}</p>
          <h1 className={styles.studyTitle}>{study.title}</h1>
          <div className={styles.serviceTags}>
            {study.service.map(s => <span key={s} className={styles.serviceTag}>{s}</span>)}
          </div>
        </div>
        <div className={styles.headerImageWrapper}>
          {/* <Image src={study.imageUrl} alt={study.title} width={600} height={400} className={styles.headerImage} /> */}
          <img src={study.imageUrl} alt={study.title} className={styles.headerImage} />
        </div>
      </header>

      <div className={styles.studyBody}>
        <section className={styles.problemSection}>
          <h2>The Challenge</h2>
          <p>{study.problem}</p>
        </section>

        <section className={styles.solutionSection}>
          <h2>Our Solution</h2>
          {study.solution.split('\n').map((paragraph, index) => (
            <p key={index} className={styles.solutionParagraph}>
              {paragraph.startsWith('-') ? <span className={styles.bulletPoint}>{paragraph.substring(1).trim()}</span> : paragraph}
            </p>
          ))}
        </section>

        <section className={styles.resultsSection}>
          <h2>Key Results</h2>
          <div className={styles.resultsGrid}>
            {study.results.map((result, index) => (
              <div key={index} className={styles.resultItem}>
                <span className={styles.resultMetric}>{result.metric}</span>
                <p className={styles.resultDescription}>{result.description}</p>
              </div>
            ))}
          </div>
        </section>

        {study.testimonial && (
          <section className={styles.testimonialSection}>
            <blockquote>
              <p>"{study.testimonial.quote}"</p>
              <footer>&mdash; {study.testimonial.author}</footer>
            </blockquote>
          </section>
        )}
      </div>

      {study.tags && study.tags.length > 0 && (
        <section className={styles.tagsFooter}>
          <h3>Related Tags</h3>
          <div className={styles.tagsContainer}>
            {study.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </section>
      )}

      <div className={styles.navigationFooter}>
        <Button href="/case-studies" variant="secondary" leftIcon={<span>&larr;</span>}>
          All Case Studies
        </Button>
        <Button href="/contact" variant="primary">
          Discuss Your Project
        </Button>
      </div>
    </article>
  );
};

export default CaseStudyDetailPage;
