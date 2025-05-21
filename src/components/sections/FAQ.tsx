'use client';

import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestionButton} onClick={onClick} aria-expanded={isOpen}>
        <span>{question}</span>
        <motion.span 
          className={styles.faqIcon}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.faqAnswer}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: 'var(--space-3)' },
              collapsed: { opacity: 0, height: 0, marginTop: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const faqData = [
  {
    question: "How long does it typically take to see results?",
    answer: "Most clients see measurable revenue impact within 60-90 days. We begin with quick wins in your highest-leverage channels while simultaneously building longer-term personalization and orchestration capabilities."
  },
  {
    question: "Do you replace our existing marketing team?",
    answer: "No, we augment your team's capabilities. We work collaboratively with your marketing, product, and data teams, transferring knowledge and upskilling your staff while implementing solutions."
  },
  {
    question: "What marketing platforms do you have experience with?",
    answer: "We're platform-agnostic but have deep expertise across major CDPs (Segment, mParticle), ESPs (Braze, Iterable, Klaviyo), CRMs (Salesforce, HubSpot), and analytics tools (Amplitude, Mixpanel, Google Analytics)."
  },
  {
    question: "What size companies do you typically work with?",
    answer: "We work with growth-stage startups through enterprise organizations. Our sweet spot is companies with $5M-$500M in annual revenue who are ready to mature their data-driven marketing capabilities."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className={styles.faqSection}>
      <div className={`container ${styles.faqContainer}`}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 