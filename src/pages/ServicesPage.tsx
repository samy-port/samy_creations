import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ArrowLeft,
  CheckCircle2,
  Filter,
  MessageSquare,
} from 'lucide-react';
import { servicesList, ServiceItem } from '../data/servicesData';
import { Logo } from '../components/Logo';

interface ServicesPageProps {
  currentLogoMask: string;
  onNavigateHome: () => void;
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

const WHATSAPP_NUMBER = '917981845968';

export const StandaloneServicesPage: React.FC<ServicesPageProps> = ({
  currentLogoMask,
  onNavigateHome,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filterCategories = ['All', 'Marketing & Growth', 'Brand & Web', 'Analytics & Search'];

  const filteredServices = servicesList.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilter === 'All') return matchesSearch;
    if (selectedFilter === 'Marketing & Growth') {
      return (
        matchesSearch &&
        ['smm', 'paid-advertising', 'content-marketing', 'lead-generation'].includes(service.id)
      );
    }
    if (selectedFilter === 'Brand & Web') {
      return matchesSearch && ['branding', 'website-creation'].includes(service.id);
    }
    if (selectedFilter === 'Analytics & Search') {
      return (
        matchesSearch && ['sem', 'seo', 'analytics-reporting', 'local-seo'].includes(service.id)
      );
    }
    return matchesSearch;
  });

  const getWhatsAppLink = (serviceTitle?: string) => {
    const text = serviceTitle
      ? `Hi Samy_Creations, I am interested in your ${serviceTitle} service.`
      : `Hi Samy_Creations, I'd like to connect with you.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white flex flex-col font-sans">
      {/* Standalone Header / Navbar */}
      <header className="relative z-30 px-6 py-6 w-full border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0">
        <nav className="liquid-glass rounded-full max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button onClick={onNavigateHome} className="flex items-center gap-3 group cursor-pointer">
            <Logo maskColor={currentLogoMask} className="h-8" showText={false} />
            <span className="font-mono text-xs md:text-sm font-semibold text-white/80 group-hover:text-white uppercase tracking-widest">
              samy_creations
            </span>
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2 text-white/80 hover:text-white text-xs md:text-sm font-medium transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
            {/* Connect Button (WhatsApp) */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass rounded-full px-6 py-2 text-xs md:text-sm text-white font-medium hover:bg-emerald-600 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Connect</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Standalone Services Content */}
      <main className="flex-1 py-16 md:py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.08)_0%,_transparent_70%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-blue-400 font-mono uppercase tracking-widest inline-block mb-6 border border-blue-500/30">
              Services & Capabilities Catalog
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-tight mb-6">
              Our Professional <em className="italic">Services</em>
            </h1>
            <p className="text-white/70 text-base md:text-xl leading-relaxed font-normal max-w-2xl mx-auto">
              Comprehensive growth solutions designed to elevate brand authority, scale qualified leads, and maximize return on ad spend.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-white/10 pb-8">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
              <Filter className="w-4 h-4 text-white/40 shrink-0 mr-1" />
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedFilter === cat
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'liquid-glass text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-3 max-w-sm w-full border border-white/10">
              <Search className="w-4 h-4 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..."
                className="bg-transparent text-white placeholder:text-white/40 text-sm focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="liquid-glass rounded-3xl p-8 md:p-10 border border-white/10 hover:border-blue-500/40 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden bg-black/60"
              >
                <span className="absolute top-6 right-8 text-5xl md:text-6xl font-mono font-extrabold text-white/5 group-hover:text-blue-500/10 transition-colors pointer-events-none">
                  {service.number}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="liquid-glass rounded-2xl p-3.5 border border-white/10 group-hover:bg-white/10 transition-all">
                      {iconMap[service.iconName]}
                    </div>
                    <span className="text-white/40 text-xs font-mono tracking-widest uppercase">
                      {service.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl text-white font-medium mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-white/70 text-sm md:text-base leading-relaxed font-normal whitespace-pre-line mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Deliverables Included</span>
                  </div>

                  {/* WhatsApp Inquire Button for each service */}
                  <a
                    href={getWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass rounded-full px-5 py-2 text-xs text-white font-medium hover:bg-emerald-600 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Inquire</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20 liquid-glass rounded-3xl p-8 border border-white/10">
              <p className="text-white/50 text-base mb-2">No services match your search filter.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('All');
                }}
                className="text-blue-400 text-sm font-medium underline cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Standalone Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="liquid-glass rounded-3xl p-8 md:p-10 max-w-xl w-full bg-black/90 border border-white/15 shadow-2xl relative"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-blue-400 text-xs font-mono uppercase tracking-widest">
                  Service #{selectedService.number}
                </span>
                <button
                  onClick={() => setSelectedService(null)}
                  className="liquid-glass rounded-full p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-3xl text-white font-semibold mb-3">{selectedService.title}</h3>
              <p className="text-white/50 text-sm mb-6">{selectedService.tagline}</p>

              <div className="liquid-glass rounded-2xl p-5 mb-6 text-white/80 text-sm leading-relaxed whitespace-pre-line">
                {selectedService.description}
              </div>

              <div className="space-y-2 mb-8 text-xs text-white/70">
                <p className="font-semibold text-white mb-2">Key Deliverables:</p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Custom strategy blueprint & execution roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Dedicated campaign manager & weekly analytics reporting</span>
                </div>
              </div>

              {/* Direct WhatsApp Inquire Button */}
              <a
                href={getWhatsAppLink(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-full transition-colors cursor-pointer text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire About {selectedService.title} on WhatsApp</span>
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Standalone Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black text-white/50 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo maskColor={currentLogoMask} className="h-6" showText={false} />
            <span className="font-mono text-white/80">samy_creations</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <button onClick={onNavigateHome} className="hover:text-white transition-colors cursor-pointer">
            Return to Homepage
          </button>
        </div>
      </footer>
    </div>
  );
};
