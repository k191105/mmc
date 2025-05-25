import React from 'react';

interface CaseStudiesLayoutProps {
  children: React.ReactNode;
}

export default function CaseStudiesLayout({ children }: CaseStudiesLayoutProps) {
  return (
    <>
      {children}
    </>
  );
} 