export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string; // Exactly 2 lines
  iconName: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: 'branding',
    number: '01',
    title: 'Branding',
    tagline: 'Identity & Visual Strategy',
    description:
      'Crafting distinctive visual identities, logo marks, and brand voice guidelines that captivate target audiences.\nWe turn core business values into memorable, high-impact brand experiences that stand out in crowded markets.',
    iconName: 'Sparkles',
  },
  {
    id: 'sem',
    number: '02',
    title: 'SEM (Search Engine Marketing)',
    tagline: 'High-Intent Search Ads',
    description:
      'Driving targeted, immediate search traffic through strategic keyword selection and high-converting campaign setup.\nWe maximize your ROI by continuously refining ad positioning, quality scores, and click-through rates.',
    iconName: 'Search',
  },
  {
    id: 'website-creation',
    number: '03',
    title: 'Website Creation',
    tagline: 'Modern Web Engineering',
    description:
      'Building ultra-fast, high-converting digital experiences tailored with modern glassmorphic aesthetics.\nOur web applications combine seamless user experience, responsive layout, and robust frontend technology.',
    iconName: 'Globe',
  },
  {
    id: 'seo',
    number: '04',
    title: 'SEO (Search Engine Optimization)',
    tagline: 'Organic Authority & Traffic',
    description:
      'Elevating your organic visibility through technical site optimization, authority building, and content strategy.\nWe position your brand at the top of search engine result pages for high-value transactional queries.',
    iconName: 'TrendingUp',
  },
  {
    id: 'smm',
    number: '05',
    title: 'SMM (Social Media Marketing)',
    tagline: 'Audience Engagement & Growth',
    description:
      'Engaging your target audience with compelling visual assets and active community management across platforms.\nWe foster organic brand loyalty while expanding your social reach exponentially with viral content.',
    iconName: 'Share2',
  },
  {
    id: 'paid-advertising',
    number: '06',
    title: 'Paid Advertising',
    tagline: 'Multi-Channel Ad Spend',
    description:
      'Running high-yield paid campaigns across Meta, Google, TikTok, and LinkedIn with hyper-precise audience targeting.\nWe optimize media spend in real time to lower customer acquisition costs and boost revenue scale.',
    iconName: 'Target',
  },
  {
    id: 'content-marketing',
    number: '07',
    title: 'Content Marketing',
    tagline: 'Thought Leadership & Copy',
    description:
      'Publishing authoritative guides, strategic copy, and multimedia assets that educate and convert readers.\nWe build sustainable organic momentum by solving your target audience’s most pressing business challenges.',
    iconName: 'FileText',
  },
  {
    id: 'lead-generation',
    number: '08',
    title: 'Lead Generation',
    tagline: 'Automated Funnel Systems',
    description:
      'Designing automated funnel systems and targeted lead magnets that capture qualified prospect contact data.\nWe convert cold interest into sales-ready leads for your business growth and sales pipeline.',
    iconName: 'Users',
  },
  {
    id: 'analytics-reporting',
    number: '09',
    title: 'Analytics & Reporting',
    tagline: 'Data Dashboards & Attribution',
    description:
      'Delivering clear, actionable data dashboards and multi-channel attribution tracking for your campaigns.\nWe transform complex analytics into clear strategic decisions that scale your business predictably.',
    iconName: 'BarChart3',
  },
  {
    id: 'local-seo',
    number: '10',
    title: 'Local SEO',
    tagline: 'Regional Map Dominance',
    description:
      'Dominating local map packs and regional search queries to bring nearby customers straight to your doorstep.\nWe optimize Google Business Profiles and local citation networks to drive foot traffic and direct calls.',
    iconName: 'MapPin',
  },
];
