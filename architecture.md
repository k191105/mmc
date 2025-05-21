# The Modern Marketing Collective - Next.js Website Architecture

This document outlines the complete architecture for The Modern Marketing Collective website - a sophisticated digital presence for a data-driven growth consultancy focused on personalization, segmentation, and real-time orchestration.

## Core Purpose

The MMC website serves as a:
- **Consultancy showcase** - demonstrating strategic expertise
- **Data marketing product hub** - highlighting tactical implementation capabilities
- **Lead generation engine** - converting visitors into qualified prospects

## Architecture Overview

The website is built with Next.js, leveraging its hybrid static/server rendering capabilities, file-based routing, and API routes to create a high-performance, SEO-friendly experience.

## File & Folder Structure

```
mmc-website/
├── .env.local                  # Environment variables
├── .env.production             # Production environment variables
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
├── public/                     # Static assets
│   ├── fonts/                  # Custom fonts
│   ├── images/                 # Static images
│   ├── favicon.ico             # Site favicon
│   └── robots.txt              # SEO crawl instructions
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with navigation and footer
│   │   ├── page.tsx            # Homepage
│   │   ├── about/              # About page
│   │   │   └── page.tsx        
│   │   ├── services/           # Services section
│   │   │   ├── page.tsx        # Services overview
│   │   │   └── [slug]/         # Dynamic service pages
│   │   │       └── page.tsx    
│   │   ├── case-studies/       # Case studies section
│   │   │   ├── page.tsx        # Case studies overview
│   │   │   └── [slug]/         # Dynamic case study pages
│   │   │       └── page.tsx
│   │   ├── insights/           # Blog/insights
│   │   │   ├── page.tsx        # Blog overview
│   │   │   └── [slug]/         # Individual blog posts
│   │   │       └── page.tsx
│   │   ├── contact/            # Contact/lead generation
│   │   │   └── page.tsx
│   │   └── portal/             # Client portal (protected)
│   │       ├── layout.tsx      # Portal layout with authentication
│   │       ├── page.tsx        # Dashboard
│   │       ├── projects/       # Client projects
│   │       └── analytics/      # Client analytics
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # Basic UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── ...
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── ...
│   │   ├── sections/           # Page section components
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesShowcase.tsx
│   │   │   ├── CaseStudyGrid.tsx
│   │   │   ├── TestimonialCarousel.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── ...
│   │   ├── features/           # Feature components
│   │   │   ├── DataVisualizer.tsx
│   │   │   ├── ServiceComparison.tsx
│   │   │   ├── ROICalculator.tsx
│   │   │   └── ...
│   │   └── portal/             # Client portal components -- JUST EMPTY FOR NOW. DO NOT IMPLEMENT.
│   │       ├── Dashboard.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── AnalyticsGraph.tsx
│   │       └── ...
│   ├── hooks/                  # Custom React hooks
│   │   ├── useFormSubmission.ts
│   │   ├── useScrollAnimation.ts
│   │   ├── useClientData.ts
│   │   └── ...
│   ├── lib/                    # Utility functions and libraries
│   │   ├── api.ts              # API utilities
│   │   ├── analytics.ts        # Analytics integration
│   │   ├── validation.ts       # Form validation utilities
│   │   └── helpers.ts          # General helper functions
│   ├── services/               # Service layer -- DO NOT IMPLEMENT ANYTHING HERE. JUST EMPTY. 
│   │   ├── contentService.ts   # CMS interaction
│   │   ├── authService.ts      # Authentication
│   │   ├── analyticsService.ts # Analytics service
│   │   └── notificationService.ts # Notification service
│   ├── styles/                 # Global styles
│   │   ├── globals.css         # Base styles
│   │   ├── variables.css       # CSS variables
│   │   └── animations.css      # CSS animations
│   ├── types/                  # TypeScript type definitions
│   │   ├── content.ts          # Content types
│   │   ├── service.ts          # Service types
│   │   ├── case-study.ts       # Case study types
│   │   └── ...
│   ├── context/                # React context for state management
│   │   ├── authContext.tsx     # Authentication context
│   │   ├── themeContext.tsx    # Theme context
│   │   └── dataContext.tsx     # Data provider context
│   └── config/                 # Configuration files
│       ├── navigation.ts       # Navigation structure
│       ├── services.ts         # Services configuration
│       └── seo.ts              # SEO configuration
└── api/                        # API routes and serverless functions
    ├── contact.ts              # Contact form submission
    ├── newsletter.ts           # Newsletter signup
    ├── portal/                 # Client portal API endpoints
    │   ├── auth.ts             # Authentication endpoints
    │   ├── projects.ts         # Projects endpoints
    │   └── analytics.ts        # Analytics endpoints
    └── webhooks/               # External service webhooks
        ├── crm.ts              # CRM integration
        └── payments.ts         # Payment processing
```

## Component Architecture

### Key Components

1. **Layout Components**
   - Header with adaptive navigation
   - Footer with contact information and social links
   - Services navigation with highlighted specialties

2. **Page Sections**
   - Hero sections with dynamic content based on service focus
   - Case study showcases with filterable results
   - Service explanations with interactive diagrams
   - Testimonial carousels with client quotes
   - Data visualization sections demonstrating capabilities

3. **Interactive Features**
   - ROI Calculator for service offering impact estimation
   - Service comparison tool with interactive selection
   - Form submissions with real-time validation
   - Interactive data visualizations for case studies

4. **Portal Components** --- Coming Soon. DO NOT IMPLEMENT THIS YET.
   - Client dashboard with project overviews
   - Analytics visualizations with real-time data
   - Document sharing and collaboration tools
   - Project timeline and milestone tracking

## State Management

The application uses a combination of state management approaches:

1. **React Context API**
   - `AuthContext`: Manages user authentication state
   - `ThemeContext`: Handles theme preferences and customization
   - `DataContext`: Provides data to components across the application

2. **Server Components**
   - Leverages Next.js server components for data fetching
   - Pre-renders content-heavy pages for SEO optimization
   - Streams dynamic content for improved performance

3. **React Query**
   - Used for client-side data fetching and caching
   - Manages API call states (loading, error, success)
   - Handles background refetching for real-time data

4. **Local Component State**
   - Used for UI-specific state (form inputs, toggles, etc.)
   - Manages temporary user interactions

## Service Connections

### Content Management

- **Headless CMS** (e.g., Contentful, Sanity, or Strapi)
  - Manages case studies, service descriptions, and blog posts
  - Provides structured content with rich media support
  - Enables marketing team to update content without developer intervention

### Authentication & Portal

- **Auth Provider** (e.g., Auth0, Clerk, or NextAuth.js)
  - Handles client portal authentication
  - Manages user sessions and permissions
  - Integrates with CRM for user information

### Marketing & Analytics

- **CRM Integration** (e.g., HubSpot, Salesforce)
  - Processes contact form submissions
  - Tracks leads and customer journey
  - Connects website interactions to customer profiles

- **Analytics Tools** (e.g., Google Analytics, Segment, Mixpanel)
  - Tracks user behavior and conversion metrics
  - Provides insights for website optimization
  - Demonstrates MMC's own data capabilities

### Client Data Integration

- **Dashboard API Layer**
  - Connects to client data sources
  - Aggregates metrics and KPIs
  - Provides real-time reporting capabilities

## Data Flow

1. **Public-Facing Content**
   - Content is primarily fetched at build time from the CMS
   - Incremental Static Regeneration (ISR) keeps content fresh
   - Minimal client-side fetching for interactive elements

2. **Lead Generation**
   - Forms submit data to API endpoints
   - API routes process and validate submissions
   - CRM webhooks propagate lead information
   - Confirmation notifications are sent to users

3. **Client Portal**
   - Authentication validates user credentials
   - Protected routes check session validity
   - Dashboard fetches real-time data from APIs
   - Updates are pushed via webhooks or polling

## SEO & Performance Optimization

- **Static Generation** for content-heavy pages
- **Image Optimization** with Next.js Image component
- **Metadata API** for dynamic SEO tags
- **Structured Data** for rich search results
- **Responsive Design** for all device types
- **Core Web Vitals** optimization

## Security Considerations

- **Authentication** for client portal access
- **API Rate Limiting** to prevent abuse
- **CSRF Protection** for form submissions
- **Content Security Policy** implementation
- **Data Encryption** for sensitive information

## Development Workflow

1. **Local Development**
   - `npm run dev` for local development server
   - Environment variables for service connections

2. **Continuous Integration**
   - GitHub Actions for automated testing and linting
   - Preview deployments for pull requests

3. **Deployment**
   - Vercel or Netlify for hosting and deployment
   - Environment-specific configuration
   - Automatic branch deployments

## Future Extensibility

The architecture is designed to accommodate future growth:

1. **Additional Service Offerings**
   - Dynamic service pages based on CMS content
   - Modular components for new service showcases

2. **Enhanced Portal Features**
   - Real-time data orchestration visualization
   - Client-specific reporting dashboards
   - Integration with additional marketing tools

3. **Multilingual Support**
   - Internationalized routing
   - Language-specific content variations
   - Regional service offerings

This architecture balances showcasing MMC's expertise in data-driven marketing while providing a scalable framework for future growth and client engagement.