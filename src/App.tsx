import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedVideoSection } from './components/FeaturedVideoSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { StandaloneServicesPage } from './pages/ServicesPage';
import { StandaloneBlogPage } from './pages/BlogPage';
import { StandalonePricingPage } from './pages/PricingPage';

export const App: React.FC = () => {
  // Page view state: 'home' | 'services' | 'blog' | 'pricing'
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'blog' | 'pricing'>('home');

  // State for dynamic logo mask color (e.g. 'bg-blue-600', 'bg-cyan-400', 'bg-gradient-to-r...')
  const [currentLogoMask, setCurrentLogoMask] = useState<string>('bg-blue-600');

  if (currentPage === 'services') {
    return (
      <StandaloneServicesPage
        currentLogoMask={currentLogoMask}
        onNavigateHome={() => {
          setCurrentPage('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  if (currentPage === 'blog') {
    return (
      <StandaloneBlogPage
        currentLogoMask={currentLogoMask}
        onNavigateHome={() => {
          setCurrentPage('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onLogoMaskChange={(newMaskClass) => setCurrentLogoMask(newMaskClass)}
      />
    );
  }

  if (currentPage === 'pricing') {
    return (
      <StandalonePricingPage
        currentLogoMask={currentLogoMask}
        onNavigateHome={() => {
          setCurrentPage('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white font-sans">
      <HeroSection
        currentLogoMask={currentLogoMask}
        onNavigateServices={() => {
          setCurrentPage('services');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateBlog={() => {
          setCurrentPage('blog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigatePricing={() => {
          setCurrentPage('pricing');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection
        onNavigateServices={() => {
          setCurrentPage('services');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
      <BlogSection
        currentLogoMask={currentLogoMask}
        onLogoMaskChange={(newMaskClass) => setCurrentLogoMask(newMaskClass)}
      />
      <Footer currentLogoMask={currentLogoMask} />
    </div>
  );
};

export default App;
