import type { TNavLink, TExperience, TTestimonial, TProject } from '../types';

export const navLinks: TNavLink[] = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'tech',
    title: 'Skills',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Digital Marketing',
    description:
      'Meta Ads campaigns, audience targeting, and brand growth strategies designed to improve visibility and conversion.',
  },
  {
    title: 'Social Media Management',
    description:
      'Content planning, publishing, page optimization, and engagement strategy for business growth across social platforms.',
  },
  {
    title: 'E-commerce Management',
    description:
      'Store and catalog operations across Shopify and Amazon, covering product listings, inventory, and customer experience.',
  },
  {
    title: 'Web & Digital Solutions',
    description:
      'Practical digital work that blends business thinking, online storefront operations, and modern web technology understanding.',
  },
];

const technologies = [
  {
    name: 'Digital Marketing',
    skills: [
      'Meta Ads Manager',
      'Campaign Management',
      'Social Media Marketing',
      'Content Strategy',
      'Social Media Management',
    ],
  },
  {
    name: 'E-commerce Management',
    skills: [
      'Shopify',
      'Amazon Seller Central',
      'Product Research',
      'Product Listings',
      'Inventory Management',
      'Order Management',
      'Product Page Optimization',
    ],
  },
  {
    name: 'Creative and Productivity Tools',
    skills: ['Canva', 'CapCut', 'Google Docs', 'Google Sheets', 'Google Drive'],
  },
  {
    name: 'Technology',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design', 'Web Fundamentals'],
  },
];

const experiences: TExperience[] = [
  {
    title: 'Digital Marketing Intern',
    companyName: 'Power Developers',
    icon: 'PD',
    iconBg: '#38BDF8',
    date: 'August 2025 – Present',
    points: [
      'Set up and manage Meta Ads campaigns for Facebook and Instagram.',
      'Plan and publish social content, develop creatives, and support promotional activity for UK-based mobile shops.',
      "Support a brand's Amazon Seller Central and Shopify store operations, including product research, listings, and product-page updates.",
      'Coordinate order and inventory tasks across online selling platforms.',
    ],
  },
];
const testimonials: TTestimonial[] = [];
const projects: TProject[] = [];

const selectedExperience = [
  {
    title: 'ACM Technologies — E-commerce Website',
    subtitle: 'Mobile accessories business',
    description:
      'An e-commerce website project for a mobile accessories business, intended to provide customers with an online shopping experience.',
    role: 'Project role and individual responsibilities were not specified in the provided project details.',
    tools: [],
    responsibilities: [
      'Project scope: an e-commerce website for a mobile accessories business.',
      'Specific implemented features, tools, and project status have not been verified, so no catalog, cart, checkout, or admin features are claimed.',
    ],
  },
  {
    title: 'Amazon Seller Central Operations',
    subtitle: 'Confidential brand',
    description:
      'Support e-commerce operations through product research, product listings, and ongoing marketplace store coordination.',
    role: 'E-commerce operations support',
    tools: ['Amazon Seller Central'],
    responsibilities: [
      'Conduct product research and maintain product listings.',
      'Support store operations, order and inventory management, and advertising activities.',
    ],
  },
  {
    title: 'Shopify Store Management',
    subtitle: 'Confidential brand',
    description:
      'Help manage an online storefront and its day-to-day product and operational content.',
    role: 'Shopify store operations support',
    tools: ['Shopify'],
    responsibilities: [
      'Maintain product listings, descriptions, and product pages.',
      'Support store operations, inventory and order tasks, and promotions.',
    ],
  },
  {
    title: 'Social Media & Meta Ads',
    subtitle: 'Client identities withheld',
    description:
      'Manage social media activity and support paid campaign operations for businesses while keeping client identities private.',
    role: 'Digital marketing and social media support',
    tools: ['Meta Ads Manager', 'Facebook', 'Instagram', 'Canva', 'CapCut'],
    responsibilities: [
      'Set up and manage Meta Ads campaigns, including campaign and audience setup.',
      'Plan, create, and publish social content and promotional creatives.',
      'Support ongoing social media platform management.',
    ],
  },
];

export { services, technologies, experiences, testimonials, projects, selectedExperience };
