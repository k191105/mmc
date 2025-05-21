'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button'; // Reusing our Button for nav
import styles from './TestimonialCarousel.module.css';

// Placeholder data
const testimonials = [
  {
    id: 't1',
    quote: "Working with MMC was a game-changer. Their data-driven approach transformed our marketing strategy and delivered exceptional results we hadn't thought possible.",
    author: 'Jane Doe',
    company: 'CEO, AlphaTech Solutions',
    avatarUrl: '/images/avatar-placeholder-1.jpg', // Placeholder avatar
  },
  {
    id: 't2',
    quote: "The insights and personalization strategies implemented by The Modern Marketing Collective have significantly boosted our customer engagement and loyalty. Highly recommended!",
    author: 'John Smith',
    company: 'CMO, BetaGrowth Inc.',
    avatarUrl: '/images/avatar-placeholder-2.jpg',
  },
  {
    id: 't3',
    quote: "From segmentation to real-time orchestration, MMC's expertise is unparalleled. They are true partners in driving growth through intelligent marketing.",
    author: 'Alice Brown',
    company: 'Head of Marketing, Gamma Innovations',
    avatarUrl: '/images/avatar-placeholder-3.jpg',
  },
];

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  avatarUrl?: string;
}

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!testimonials || testimonials.length === 0) {
    return null; // Don't render if no testimonials
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className={styles.testimonialSection}>
      <div className={`container ${styles.testimonialContainer}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          {/* Optional: Subtitle if needed */}
        </div>

        <div className={styles.carouselWrapper}>
          <Card variant="flat" padding="large" shadow="none" className={styles.testimonialCard}>
            {currentTestimonial.avatarUrl && (
              <img 
                src={currentTestimonial.avatarUrl}
                alt={`${currentTestimonial.author}'s avatar`}
                className={styles.avatar}
              />
            )}
            <blockquote className={styles.quote}>
              <p>"{currentTestimonial.quote}"</p>
            </blockquote>
            <figcaption className={styles.caption}>
              <p className={styles.author}>{currentTestimonial.author}</p>
              <p className={styles.company}>{currentTestimonial.company}</p>
            </figcaption>
          </Card>

          {testimonials.length > 1 && (
            <div className={styles.carouselNavigation}>
              <Button 
                onClick={handlePrev} 
                variant="outline" 
                size="medium"
                aria-label="Previous testimonial"
                className={styles.navButton}
              >
                &larr; {/* Left arrow */}
              </Button>
              <Button 
                onClick={handleNext} 
                variant="outline" 
                size="medium"
                aria-label="Next testimonial"
                className={styles.navButton}
              >
                &rarr; {/* Right arrow */}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
