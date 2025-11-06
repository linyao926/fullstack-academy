import React from 'react';
import { FaPlay, FaCode, FaAward, FaUsers, FaComments, FaBriefcase } from 'react-icons/fa';
import { BsLayoutWtf } from 'react-icons/bs';
import { LuServer, LuDatabase, LuShield, LuRocket } from 'react-icons/lu';
import { type Feature, type ModuleContent } from '../types';

export const MODULES: ModuleContent[] = [
  { 
    id: 'frontend-fundamentals',
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
    id: 'modern-frontend-with-react',
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
    id: 'backend-development-with-nodejs',
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
    id: 'databases-and-data-modeling',
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
    id: 'testing-and-security',
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
    id: 'devops-and-deployment',
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

export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Perfect for beginners',
    price: '$299',
    duration: '3 months access',
    popular: false,
    features: [
      'Access to 100+ video lessons',
      '5 fullstack projects',
      'Community support',
      'Certificate of completion',
      'Lifetime access to course materials'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    subtitle: 'Most popular choice',
    price: '$599',
    duration: '6 months access',
    popular: true,
    features: [
      'Access to 300+ video lessons',
      '15 fullstack projects',
      '1-on-1 mentorship',
      'Certificate of completion',
      'Career guidance',
      'Job placement assistance',
      'Lifetime access to course materials',
      'Priority support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'For serious learners',
    price: '$999',
    duration: '12 months access',
    popular: false,
    features: [
      'Access to 500+ video lessons',
      '25 fullstack projects',
      'Dedicated mentor',
      'Certificate of completion',
      'Career guidance',
      'Job placement guarantee',
      'Interview preparation',
      'Portfolio review',
      'Lifetime access to course materials',
      '24/7 priority support',
      'Exclusive networking events'
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Frontend Developer at Google',
    avatar: 'SJ',
    review: 'This bootcamp transformed my career! The hands-on projects and mentorship helped me land my dream job.'
  },
  {
    name: 'Michael Chen',
    role: 'Full Stack Engineer at Meta',
    avatar: 'MC',
    review: 'Best investment I ever made. The curriculum is comprehensive and the instructors are world-class.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Software Engineer at Amazon',
    avatar: 'ER',
    review: 'From zero coding knowledge to employed in 6 months. The job placement assistance was incredible!'
  }
];