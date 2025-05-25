'use client';

import React, { useState, FormEvent } from 'react';
import styles from './ContactPage.module.css';
import Button from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // For now, this will construct a mailto link.
    // Later, this will be replaced with an API call to a backend service.
    const mailtoLink = `mailto:ssinghal79@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    // Reset form after a short delay, or handle this based on actual submission success
    setTimeout(() => {
        setFormData({
            name: '',
            email: '',
            company: '',
            subject: '',
            message: '',
        });
        // setIsSubmitted(false); // Optionally reset submitted state if user might send another
    }, 2000);
  };

  return (
    <div className={styles.contactPageContainer}>
      <header className={styles.pageHeader}>
        <h1>Get in Touch</h1>
        <p>We're here to answer your questions and help you achieve your marketing goals. Fill out the form below, and we'll get back to you shortly.</p>
      </header>

      {isSubmitted ? (
        <div className={styles.submissionSuccess}>
          <h2>Thank You!</h2>
          <p>Your message has been prepared for sending. Please complete the action in your email client.</p>
          <p>If your email client didn't open, you can manually send your message to ssinghal79@gmail.com.</p>
          <Button href="/" variant="primary" className={styles.homeButton}>Back to Home</Button>
        </div>
      ) : (
        <div className={styles.contactFormWrapper}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="e.g., Jane Doe"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="e.g., jane.doe@example.com"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="company">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="e.g., Acme Corp"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="e.g., Project Inquiry"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.formTextarea}
                placeholder="Tell us more about your project or question..."
              />
            </div>

            <div className={styles.submitButtonWrapper}>
              <Button type="submit" variant="primary" size="large" className={styles.submitButton}>
                Send Message
              </Button>
            </div>
          </form>

          <aside className={styles.contactInfoSidebar}>
            <h3>Contact Information</h3>
            <p>Prefer to reach out directly? Here are other ways to connect:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:ssinghal79@gmail.com">ssinghal79@gmail.com</a></li>
              <li><strong>Phone:</strong> (123) 456-7890 (Placeholder)</li> 
              <li><strong>Address:</strong> 123 Marketing Lane, Growth City, GC 54321 (Placeholder)</li>
            </ul>
            <h4>Office Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
          </aside>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
