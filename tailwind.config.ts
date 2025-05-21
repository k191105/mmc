import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-bg': '#0A0F1F',        // Near Black / Dark Slate
        'brand-light-text': '#E0E7EF',   // Pastel White / Light Grey
        'brand-primary-blue': '#3B5998',  // Muted Dark Blue (Primary Accent)
        'brand-secondary-blue': '#1E293B', // Darker Grey Blue (Borders / Secondary)
        'brand-highlight-blue': '#5C7BAD', // Brighter Muted Blue (Interactive)
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};
export default config; 