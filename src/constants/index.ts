import type {
  TNavLink,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Highlights",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Digital Marketing",
    description:
      "Campaign planning, audience targeting, Meta Ads, and brand growth.",
  },
  {
    title: "Social Media Management",
    description:
      "Content planning, scheduling, page optimization, and audience engagement.",
  },
  {
    title: "E-commerce Management",
    description:
      "Product listings, catalog organization, store content, and customer experience.",
  },
  {
    title: "Marketing Creatives",
    description:
      "Social media ad creatives, promotional graphics, and marketing visuals.",
  },
];

const technologies = [
  {
    name: "Digital Marketing",
    skills: [
      "Meta Ads Manager",
      "Facebook & Instagram Ads",
      "Campaign Planning",
      "Campaign Execution",
      "Audience Targeting",
      "Online Brand Promotion",
      "Marketing Content",
    ],
  },
  {
    name: "Social Media",
    skills: [
      "Content Planning",
      "Publishing",
      "Creative Development",
      "Promotional Content",
      "Brand Communication",
      "Content Editing",
    ],
  },
  {
    name: "E-commerce",
    skills: [
      "Shopify",
      "Amazon Seller Central",
      "Product Research",
      "Listings & Catalogs",
      "Orders & Inventory",
      "Product Pages",
      "Promotions",
    ],
  },
  {
    name: "Creative & Platforms",
    skills: [
      "Facebook",
      "Instagram",
      "Canva",
      "CapCut",
      "Google Docs",
      "Google Sheets",
      "Google Drive",
    ],
  },
];

const experiences: TExperience[] = [
  {
    title: "Digital Marketing Intern",
    companyName: "Power Developers",
    icon: "PD",
    iconBg: "#915EFF",
    date: "August 2025 – Present",
    points: [
      "Set up and manage Meta Ads campaigns for Facebook and Instagram.",
      "Manage social media activities for UK-based mobile shops, including content planning, creative development, and publishing.",
      "Manage product listings and store operations across Amazon and Shopify.",
      "Conduct product research and maintain product pages and descriptions.",
      "Coordinate orders and inventory across online selling platforms.",
      "Support e-commerce marketing activities and promotional campaigns.",
    ],
  },
];
const testimonials: TTestimonial[] = [];
const projects: TProject[] = [];

const selectedExperience = [
  {
    title: "Social Media Management",
    subtitle: "UK-based mobile shops",
    description:
      "Manage social media accounts, publish planned content, and support promotional activities to maintain a consistent online presence.",
    skills: ["Social Media", "Content Publishing", "Promotions"],
  },
  {
    title: "E-commerce Operations",
    subtitle: "Amazon & Shopify",
    description:
      "Support a brand's online operations through product research, listings, order and inventory coordination, product page updates, and marketing promotions.",
    skills: ["Amazon", "Shopify", "Store Operations"],
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  selectedExperience,
};
