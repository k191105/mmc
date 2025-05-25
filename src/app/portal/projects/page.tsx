'use client';

import React from 'react';
import styles from './ProjectsPage.module.css';
import Button from '@/components/ui/Button';

const ProjectsPage = () => {
  return (
    <div className={styles.comingSoonPageContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.comingSoonTitle}>Client Portal: Projects</h1>
        <p className={styles.comingSoonSubtitle}>
          Manage your ongoing projects and view project history.
        </p>
        <div className={styles.iconPlaceholder}>
          <span>&#x1F4C1;</span> {/* Folder icon */}
        </div>
        <h2 className={styles.stayTuned}>Coming Soon!</h2>
        <p className={styles.message}>
          This section of the client portal is under development. Soon you'll be able to track project progress, access deliverables, and communicate with your project team right here.
        </p>
        <div className={styles.buttonContainer}>
          <Button href="/portal" variant="primary" size="large">
            Back to Portal Home
          </Button>
          <Button href="/" variant="secondary" size="large">
            Back to Main Site
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;