import React from 'react';
import { FaPlay, FaCode, FaAward, FaUsers, FaComments, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import { BsLayoutWtf } from 'react-icons/bs';
import { LuServer, LuDatabase, LuShield, LuRocket } from 'react-icons/lu';
import { type Module, type Feature, type PricingPlan, type Testimonial, type ModuleContent } from '../types';

export const MODULES: ModuleContent[] = [
  { 
    icon: React.createElement(BsLayoutWtf),
    title: 'Module 1: Frontend Fundamentals', 
    weeks: 4,
    topics: [
      'HTML5 & Semantic Markup',
      'CSS3, Flexbox & Grid',
      'Responsive Design & Mobile-First',
      'JavaScript ES6+ Fundamentals',
      'Git & GitHub Workflow'
    ]
  },
  { 
    icon: React.createElement(FaCode),
    title: 'Module 2: Modern Frontend with React', 
    weeks: 6,
    topics: [
      'React Hooks & Component Lifecycle',
      'State Management with Redux & Context API',
      'React Router & Navigation',
      'TypeScript with React',
      'Tailwind CSS & UI Libraries',
      'Project: Build a Social Media Dashboard'
    ]
  },
  { 
    icon: React.createElement(LuServer),
    title: 'Module 3: Backend Development with Node.js', 
    weeks: 6,
    topics: [
      'Node.js & Express.js Fundamentals',
      'RESTful API Design & Best Practices',
      'Authentication & Authorization (JWT, OAuth)',
      'Express Middleware & Error Handling',
      'File Uploads & Image Processing',
      'Project: Build a Blog API'
    ]
  },
  { 
    icon: React.createElement(LuDatabase),
    title: 'Module 4: Databases & Data Modeling', 
    weeks: 5,
    topics: [
      'SQL & PostgreSQL',
      'MongoDB & Mongoose ODM',
      'Database Design & Relationships',
      'Query Optimization & Indexing',
      'Redis for Caching',
      'Project: E-commerce Backend with Database'
    ]
  },
  { 
    icon: React.createElement(LuShield),
    title: 'Module 5: Testing & Security', 
    weeks: 3,
    topics: [
      'Unit Testing with Jest',
      'Integration & E2E Testing',
      'Security Best Practices (OWASP)',
      'Input Validation & Sanitization',
      'Rate Limiting & DDoS Protection'
    ]
  },
  { 
    icon: React.createElement(LuRocket),
    title: 'Module 6: DevOps & Deployment', 
    weeks: 4,
    topics: [
      'Docker & Containerization',
      'CI/CD with GitHub Actions',
      'Cloud Deployment (AWS, Vercel, Heroku)',
      'Monitoring & Logging',
      'Performance Optimization',
      'Capstone Project: Deploy Full-stack Application'
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    icon: React.createElement(FaPlay),
    title: 'HD Video Lessons',
    description: '300+ high-quality video lessons covering frontend, backend, and DevOps. Updated regularly with latest technologies.'
  },
  {
    icon: React.createElement(FaCode),
    title: 'Real-World Projects',
    description: 'Build 15+ fullstack projects from scratch including e-commerce, social media, and SaaS applications.'
  },
  {
    icon: React.createElement(FaAward),
    title: 'Industry Certificate',
    description: 'Earn a recognized certificate upon completion to boost your resume and LinkedIn profile.'
  },
  {
    icon: React.createElement(FaUsers),
    title: '1-on-1 Mentorship',
    description: 'Get direct support from experienced developers. Code reviews, career guidance, and technical interviews.'
  },
  {
    icon: React.createElement(FaComments),
    title: 'Active Community',
    description: 'Join 10,000+ students in our Discord community. Network, collaborate, and learn together.'
  },
  {
    icon: React.createElement(FaBriefcase),
    title: 'Career Support',
    description: 'Job placement assistance, interview preparation, and connections with hiring companies.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    subtitle: 'Perfect for beginners',
    price: '$299',
    duration: '3 months access',
    features: [
      'Access to 150+ video lessons',
      '5 guided projects',
      'Email support',
      'Learning materials & resources',
      'Certificate of completion',
      'Community access'
    ]
  },
  {
    name: 'Professional',
    subtitle: 'Most popular choice',
    price: '$599',
    duration: '6 months access',
    popular: true,
    features: [
      'Everything in Starter',
      'Access to 300+ video lessons',
      '15 fullstack projects',
      'Weekly 1-on-1 mentorship',
      'Detailed code reviews',
      'Job search assistance',
      'Lifetime access to content',
      'Priority support'
    ]
  },
  {
    name: 'Premium',
    subtitle: 'Complete career transformation',
    price: '$999',
    duration: '12 months access',
    features: [
      'Everything in Professional',
      'Personalized learning path',
      'Unlimited 1-on-1 mentorship',
      'Work on real company projects',
      'Monthly live workshops',
      'Job guarantee program',
      'Mock interview practice',
      'Direct company introductions',
      'Resume & portfolio review'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Fullstack Developer at Tech Innovate',
    avatar: 'SM',
    review: 'After 6 months, I landed my first job earning $85k/year. The curriculum is practical and mentors are incredibly supportive. Best investment I\'ve made!'
  },
  {
    name: 'Marcus Chen',
    role: 'Backend Engineer at StartupCo',
    avatar: 'MC',
    review: 'From zero coding knowledge to building full applications. The structured path and hands-on projects made all the difference. Worth every penny!'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Software Engineer at CloudTech',
    avatar: 'ER',
    review: 'This bootcamp helped me successfully transition careers. The mentors are always available and the community is amazing. Highly recommended!'
  }
];