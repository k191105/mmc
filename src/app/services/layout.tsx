import React from 'react';

interface ServicesLayoutProps {
  children: React.ReactNode;
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  return (
    <>
      {children}
    </>
  );
} 