import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Zap,
  MessageSquare,
} from 'lucide-react';
import { pricingPackages } from '../data/pricingData';
import { Logo } from '../components/Logo';

interface PricingPageProps {
  currentLogoMask: string;
  onNavigateHome: () => void;
}

const WHATSAPP_NUMBER = '917981845968';

export const StandalonePricingPage: React.FC<PricingPageProps> = ({
  currentLogoMask,
  onNavigateHome,
}) => {
  const getWhatsAppLink = (packageName?: string) => {
    const text = packageName
      ? `Hi Samy_Creations, I am interested in your ${packageName} package.`
      : `Hi Samy_Creations, I'd like to connect with you.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white flex flex-col font-sans">
      {/* Standalone Navbar */}
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

      {/* Main Pricing Content */}
      <main className="flex-1 py-16 md:py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.08)_0%,_transparent_70%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-blue-400 font-mono uppercase tracking-widest inline-block mb-6 border border-blue-500/30">
              Conquer Your Brand's Potential
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-tight mb-6">
              Growth & Scale <em className="italic">Packages</em>
            </h1>
            <p className="text-white/70 text-base md:text-xl leading-relaxed font-normal">
              Transparent, ROI-focused investment tiers designed for startups, growing brands, and enterprise market leaders.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
            {pricingPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`liquid-glass rounded-3xl p-8 md:p-10 border transition-all duration-500 flex flex-col justify-between relative ${
                  pkg.isPopular
                    ? 'border-blue-500 bg-blue-950/20 shadow-2xl scale-105 z-10'
                    : 'border-white/10 hover:border-white/20 bg-black/60'
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3 text-center">{pkg.name}</h3>
                  <p className="text-white/60 text-xs md:text-sm text-center leading-relaxed mb-8 min-h-[40px]">
                    {pkg.subtitle}
                  </p>

                  <div className="text-center py-6 border-y border-white/10 mb-8">
                    <span className="text-white/40 text-xs uppercase font-mono block mb-1">Price</span>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-extrabold text-white font-serif">{pkg.price}</span>
                      <span className="text-white/60 text-sm">{pkg.period}</span>
                    </div>
                    {pkg.setupFee && (
                      <span className="text-blue-400 text-xs font-mono block mt-2">
                        {pkg.setupOptional ? 'Optional Setup:' : 'One-Time Setup:'} {pkg.setupFee}
                      </span>
                    )}
                  </div>

                  <div className="mb-8">
                    <span className="text-xs uppercase font-mono font-semibold tracking-wider text-blue-400 block mb-4">
                      Includes:
                    </span>
                    <ul className="space-y-3">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-white/80">
                          <Zap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.monthlyDeliverables && (
                    <div className="pt-6 border-t border-white/10 mb-8">
                      <span className="text-xs uppercase font-mono font-semibold tracking-wider text-emerald-400 block mb-4">
                        Monthly Deliverables:
                      </span>
                      <ul className="space-y-2.5">
                        {pkg.monthlyDeliverables.map((del, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-xs text-white/70">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <a
                  href={getWhatsAppLink(pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer text-center block ${
                    pkg.isPopular
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg'
                      : 'liquid-glass text-white hover:bg-emerald-600 border border-white/15'
                  }`}
                >
                  Inquire on WhatsApp
                </a>
              </motion.div>
            ))}
          </div>

          <div className="liquid-glass rounded-full p-4 md:p-6 border border-white/15 max-w-2xl mx-auto text-center flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-mono text-base md:text-lg font-bold">+91 79818 45968</span>
            </div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white font-semibold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider hover:bg-emerald-500 transition-all cursor-pointer"
            >
              WhatsApp Connect
            </a>
          </div>
        </div>
      </main>

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
