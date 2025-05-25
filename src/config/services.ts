import { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: '1',
    slug: 'data-driven-strategy',
    title: 'Data-Driven Strategy',
    shortDescription: 'Leverage data to inform your marketing strategy.',
    longDescription: 'Our data-driven strategy service helps you understand your audience, identify growth opportunities, and make informed decisions. We analyze your existing data, conduct market research, and develop a comprehensive strategy tailored to your business goals.',
    benefits: ['Clearer understanding of your target audience', 'Identification of new market opportunities', 'Improved marketing ROI', 'Actionable insights for decision-making'],
    icon: 'BsGraphUp' // Example icon, you might use a library like react-icons
  },
  {
    id: '2',
    slug: 'personalization-segmentation',
    title: 'Personalization & Segmentation',
    shortDescription: 'Deliver tailored experiences to your customers.',
    longDescription: 'With our personalization and segmentation service, you can deliver highly relevant content and offers to individual customers. We help you segment your audience based on behavior, demographics, and preferences, and implement personalization tactics across all touchpoints.',
    benefits: ['Increased customer engagement', 'Higher conversion rates', 'Improved customer loyalty', 'More effective marketing campaigns'],
    icon: 'BsPersonLinesFill'
  },
  {
    id: '3',
    slug: 'real-time-orchestration',
    title: 'Real-Time Orchestration',
    shortDescription: 'Engage customers with timely and relevant interactions.',
    longDescription: 'Our real-time orchestration service enables you to react to customer behavior 순간 and deliver contextual experiences. We help you set up marketing automation workflows and integrate your marketing technology stack to create seamless customer journeys.',
    benefits: ['Improved customer experience', 'Increased operational efficiency', 'Faster response to market changes', 'Enhanced lead nurturing capabilities'],
    icon: 'BsGearFill'
  }
];
