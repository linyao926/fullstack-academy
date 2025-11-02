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
  name: string;
  subtitle: string;
  price: string;
  duration: string;
  popular?: boolean;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  review: string;
}

export interface FooterLink {
  label: string;
  href: string;
}