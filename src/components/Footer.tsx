import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  currentLogoMask: string;
}

export const Footer: React.FC<FooterProps> = ({ currentLogoMask }) => {
  return (
    <footer className="bg-black py-16 px-6 border-t border-white/10 relative z-10 text-white/50 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo maskColor={currentLogoMask} className="h-7" showText={false} />
          <span className="font-mono text-white/80 font-semibold">samy_creations</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#blog" className="hover:text-white transition-colors">Digital Marketing Blog</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
