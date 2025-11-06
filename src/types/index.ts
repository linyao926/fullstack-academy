import React from 'react';

export interface Module {
  title: string;
  weeks: number;
}

export interface ModuleContent extends Module {
  icon: React.ReactNode;
  topics: string[];
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PricingPlan {
  id?: string;
  name: string;
  subtitle: string;
  price: string;
  duration: string;
  popular: boolean;
  features: string[];
  onEnrollClick?: () => void;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  review: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
}

export interface NavLink {
  label: string;
  path?: string;
  hash?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}