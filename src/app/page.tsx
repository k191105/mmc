import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import Features from '@/components/sections/Features';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import CollectivePower from '@/components/sections/CollectivePower';
import CaseStudyPreview from '@/components/sections/CaseStudyPreview';
import CTASection from '@/components/sections/CTASection';
import FAQ from '@/components/sections/FAQ';
import styles from './page.module.css'; // We can create this for page-specific styles if needed

export default function HomePage() {
  return (
    <div className={styles.homePage}> {/* Optional: for page-specific layout/styles */}
      <Hero />
      <SocialProof />
      <CollectivePower />
      <ServicesShowcase />
      <Features />
      <CaseStudyPreview />
      <FAQ />
      <CTASection />
    </div>
  );
}
