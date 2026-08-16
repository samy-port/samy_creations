import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Sparkles,
  Search,
  Globe,
  TrendingUp,
  Share2,
  Target,
  FileText,
  Users,
  BarChart3,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { servicesList, ServiceItem } from '../data/servicesData';
import { Logo } from './Logo';

interface ServicesPageProps {
  currentLogoMask: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-blue-400" />,
  Search: <Search className="w-6 h-6 text-cyan-400" />,
  Globe: <Globe className="w-6 h-6 text-purple-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-400" />,
  Share2: <Share2 className="w-6 h-6 text-pink-400" />,
  Target: <Target className="w-6 h-6 text-amber-400" />,
  FileText: <FileText className="w-6 h-6 text-indigo-400" />,
  Users: <Users className="w-6 h-6 text-teal-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-blue-400" />,
  MapPin: <MapPin className="w-6 h-6 text-rose-400" />,
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ currentLogoMask }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <div id="services-page" className="bg-black py-28 md:py-40 px-6 overflow-hidden relative border-t border-white/10">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.08)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Logo maskColor={currentLogoMask} className="h-7" showText={false} />
            <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase font-mono">
              samy_creations services
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl text-white tracking-tight font-normal mb-6 leading-tight">
            Comprehensive Digital Marketing Capabilities
          </h1>

          <p className="text-white/60 text-base md:text-lg leading-relaxed font-normal">
            Tailored growth solutions engineered to elevate your brand presence, scale traffic, and generate predictable revenue.
          </p>
        </motion.div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {servicesList.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="liquid-glass rounded-3xl p-8 md:p-10 border border-white/10 hover:border-blue-500/40 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Corner Watermark Number */}
              <span className="absolute top-6 right-8 text-5xl md:text-6xl font-mono font-extrabold text-white/5 group-hover:text-blue-500/10 transition-colors pointer-events-none">
                {service.number}
              </span>

              <div>
                {/* Icon & Category Tagline */}
                <div className="flex items-center justify-between mb-6">
                  <div className="liquid-glass rounded-2xl p-3.5 border border-white/10 group-hover:bg-white/10 transition-all">
                    {iconMap[service.iconName]}
                  </div>

                  <span className="text-white/40 text-xs font-mono tracking-widest uppercase">
                    {service.tagline}
                  </span>
                </div>

                {/* Section Title */}
                <h3 className="text-2xl md:text-3xl text-white font-medium mb-4 tracking-tight group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  {service.title}
                </h3>

                {/* 2-Line Description */}
                <p className="text-white/70 text-sm md:text-base leading-relaxed font-normal whitespace-pre-line mb-8">
                  {service.description}
                </p>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Full Service Strategy</span>
                </div>

                <a
                  href="#contact"
                  className="liquid-glass rounded-full px-5 py-2 text-xs text-white font-medium group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
