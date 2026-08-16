export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  tags: string[];
  content: {
    type: 'paragraph' | 'heading' | 'quote' | 'list';
    text?: string;
    items?: string[];
  }[];
}

export const blogsData: BlogPost[] = [
  {
    id: 'ai-performance-marketing-2026',
    title: 'The Future of AI-Driven Performance Marketing in 2026',
    excerpt:
      'Discover how predictive machine learning, real-time creative bidding, and autonomous campaign optimization are redefining digital ROI.',
    category: 'AI & Performance',
    readTime: '6 min read',
    date: 'Aug 14, 2026',
    author: {
      name: 'Samuel Samy',
      role: 'Head of Growth & Strategy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    coverImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    tags: ['AI Marketing', 'PPC', 'Algorithmic Bidding', 'Conversion Rate'],
    content: [
      {
        type: 'heading',
        text: 'The Paradigm Shift from Manual Bidding to Generative Intelligence',
      },
      {
        type: 'paragraph',
        text: 'Digital marketing in 2026 is no longer about adjusting cost-per-click bids manually or running A/B tests over weeks. Autonomous media buying agents analyze real-time buyer sentiment across social channels, dynamically tailoring creative assets down to individual user profiles.',
      },
      {
        type: 'quote',
        text: 'The brands that win in 2026 don’t just automate ads—they personalize storytelling at millisecond speeds.',
      },
      {
        type: 'heading',
        text: 'Core Pillar 1: Predictive Customer Lifetime Value (pLTV)',
      },
      {
        type: 'paragraph',
        text: 'By training machine learning models on first-party telemetry data, marketers can now predict a customer’s 12-month value on day one. Bidding algorithms instantly adjust target ROAS according to predicted intent rather than immediate basket value.',
      },
      {
        type: 'heading',
        text: 'Key Strategies for Immediate Adoption:',
      },
      {
        type: 'list',
        items: [
          'Implement server-side conversion API (CAPI) tracking to overcome browser cookie restrictions.',
          'Feed high-intent micro-conversions back into algorithmic ad platforms.',
          'Utilize generative video synthesis to scale localized ad variants across Meta, TikTok, and YouTube.',
        ],
      },
    ],
  },
  {
    // Second blog post
    id: 'neuromarketing-dark-mode-conversions',
    title: 'Neuromarketing & Visual Aesthetics: Turning Curiosity into Conversion',
    excerpt:
      'Why high-contrast dark modes, liquid glass interfaces, and micro-interactions trigger dopamine responses that drive user engagement.',
    category: 'UX & Neuromarketing',
    readTime: '5 min read',
    date: 'Aug 10, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    },
    coverImage:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80',
    tags: ['UI/UX Design', 'Neuromarketing', 'Dark Mode', 'Glassmorphism'],
    content: [
      {
        type: 'heading',
        text: 'The Cognitive Mechanics of Premium Dark UI',
      },
      {
        type: 'paragraph',
        text: 'High-contrast dark interfaces reduce cognitive load by eliminating bright glare and focusing visual weight directly onto focal call-to-action elements. When paired with subtle ambient glows and smooth motion physics, users experience an elevated perception of brand authority and luxury.',
      },
      {
        type: 'quote',
        text: 'Visual elegance is not decoration; it is subtle behavioral guidance.',
      },
      {
        type: 'paragraph',
        text: 'Micro-animations act as tactile feedback in a digital medium. When a glass card subtly responds to cursor movements, it reassures the user that the interface is responsive, increasing session duration by up to 34%.',
      },
    ],
  },
  {
    // Third blog post
    id: 'seo-search-generative-experience',
    title: 'Navigating Search Generative Experience (SGE) & Entity SEO',
    excerpt:
      'How AI search engines like Perplexity and Google SGE crawl, evaluate, and cite brands in conversational answers.',
    category: 'SEO & Organic Growth',
    readTime: '8 min read',
    date: 'Aug 04, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'SEO & Knowledge Graph Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    coverImage:
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&auto=format&fit=crop&q=80',
    tags: ['SEO', 'Search Generative Experience', 'Schema Markup', 'Entity Graph'],
    content: [
      {
        type: 'heading',
        text: 'From Keywords to Knowledge Entities',
      },
      {
        type: 'paragraph',
        text: 'Traditional keyword stuffing is officially obsolete. Generative AI engines search for entity authority, verified citations, structured Schema.org markup, and semantic topical clusters when synthesizing responses.',
      },
      {
        type: 'heading',
        text: 'Actionable Steps to Win SGE Rankings:',
      },
      {
        type: 'list',
        items: [
          'Publish original, primary-research data and industry case studies that LLMs must cite.',
          'Build complete Organization and Product Schema graphs connecting your brand across Wikidata and Crunchbase.',
          'Optimize content for direct answer format with explicit summaries at the top of long-form guides.',
        ],
      },
    ],
  },
  {
    // Fourth blog post
    id: 'omnichannel-attribution-privacy-first',
    title: 'Mastering Omnichannel Attribution in a First-Party Data World',
    excerpt:
      'How modern growth teams combine media mix modeling (MMM) and incrementality testing without relying on third-party cookies.',
    category: 'Analytics & Attribution',
    readTime: '7 min read',
    date: 'Jul 28, 2026',
    author: {
      name: 'Samuel Samy',
      role: 'Head of Growth & Strategy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    coverImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    tags: ['Marketing Analytics', 'Attribution', 'First-Party Data', 'Growth Hacking'],
    content: [
      {
        type: 'heading',
        text: 'The Death of Last-Click Attribution',
      },
      {
        type: 'paragraph',
        text: 'Relying solely on Google Analytics last-click tracking distorts budget allocation toward bottom-of-funnel retargeting while starving top-of-funnel brand building. Modern attribution pairs automated Media Mix Modeling with geo-lift incrementality experiments to measure true organic causality.',
      },
    ],
  },
];
