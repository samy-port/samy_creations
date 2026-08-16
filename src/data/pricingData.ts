export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  subtitle: string;
  price: string;
  period: string;
  setupFee?: string;
  setupOptional?: boolean;
  includes: string[];
  monthlyDeliverables?: string[];
  ctaText: string;
  phoneNumber: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'basic-growth',
    name: 'Basic Growth Package',
    subtitle: 'Perfect for startups and local businesses building their online presence.',
    price: '₹22,500',
    period: '/month',
    setupFee: '₹5,000',
    setupOptional: true,
    includes: [
      'Brand Strategy & Identity Development',
      'Graphic Design & Creative Services',
      'Social Media Marketing',
    ],
    ctaText: 'Get Started',
    phoneNumber: '+91 79818 45968',
  },
  {
    id: 'premium-growth',
    name: 'Premium Growth Package',
    isPopular: true,
    badge: '50% Off Special',
    subtitle: 'Ideal for businesses looking to generate consistent traffic and qualified leads.',
    price: '₹40,000',
    period: '/month',
    setupFee: '₹5,000',
    setupOptional: false,
    includes: [
      'Brand Strategy & Identity Development',
      'Graphic Design & Creative Services',
      'Search Engine Optimization (SEO)',
      'Content Marketing',
      'Social Media Marketing',
    ],
    ctaText: 'Choose Premium',
    phoneNumber: '+91 79818 45968',
  },
  {
    id: 'gold-performance',
    name: 'Gold Performance Package',
    badge: 'Enterprise & Scale',
    subtitle: 'Best for businesses focused on scaling revenue through organic and paid marketing.',
    price: '₹77,500',
    period: '/month',
    setupFee: 'Included Free',
    setupOptional: false,
    includes: [
      'Brand Strategy & Identity Development',
      'Graphic Design & Creative Services',
      'Website & Conversion Optimization (One-Time Setup Included)',
      'Search Engine Optimization (SEO)',
      'Content Marketing',
      'Social Media Marketing',
      'Lead Generation',
      'Paid Advertising Management',
    ],
    monthlyDeliverables: [
      'Complete Marketing Strategy',
      'Social Media Management',
      'SEO Execution',
      'Content Creation',
      'Lead Funnel Management',
      'Meta Ads Management',
      'Google Ads Management',
      'Monthly Analytics & Performance Reports',
      'Continuous Campaign Optimization',
    ],
    ctaText: 'Scale Performance',
    phoneNumber: '+91 79818 45968',
  },
];
