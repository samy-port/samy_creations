import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardData {
  tag: string;
  title: string;
  description: string;
  videoUrl: string;
}

interface ServicesSectionProps {
  onNavigateServices?: () => void;
}

const servicesData: ServiceCardData[] = [
  {
    tag: 'Brand & Identity',
    title: 'Branding & Visual Strategy',
    description:
      'Crafting distinctive visual identities, logo marks, and brand voice guidelines that captivate target audiences and build brand authority.',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
  },
  {
    tag: 'Paid Performance',
    title: 'SEM & Search Ads',
    description:
      'Driving high-intent search traffic through strategic keyword bidding, quality score optimization, and high-converting campaign funnels.',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigateServices }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="bg-black py-28 md:py-40 px-6 overflow-hidden relative border-t border-white/10">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-end mb-12 md:mb-16"
        >
          <div>
            <span className="text-blue-400 text-xs font-mono uppercase tracking-widest block mb-2">
              Featured Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl text-white tracking-tight font-normal">What we do</h2>
          </div>

          <button
            onClick={onNavigateServices}
            className="liquid-glass rounded-full px-6 py-2.5 text-xs md:text-sm text-white font-medium hover:bg-blue-600 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Explore All 10 Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Two Featured Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onClick={onNavigateServices}
              className="liquid-glass rounded-3xl overflow-hidden group flex flex-col cursor-pointer border border-white/5 hover:border-blue-500/40 transition-all duration-500"
            >
              {/* Card Video Area */}
              <div className="aspect-video overflow-hidden relative w-full">
                <video
                  src={service.videoUrl}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="uppercase tracking-widest text-white/40 text-xs font-medium font-mono">
                    {service.tag}
                  </span>
                  <div className="liquid-glass rounded-full p-2 text-white flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-medium group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed font-normal">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
