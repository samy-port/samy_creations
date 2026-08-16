import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Instagram, Twitter, Globe, Sparkles, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

interface HeroSectionProps {
  currentLogoMask: string;
  onNavigateServices?: () => void;
  onNavigateBlog?: () => void;
  onNavigatePricing?: () => void;
}

const phrases = [
  'samy_creations',
  'Know it then all.',
  'Digital Marketing Agency',
  'Pioneering Creative Excellence',
];

const WHATSAPP_LINK = 'https://wa.me/917981845968?text=Hi%20Samy_Creations,%20I%27d%20like%20to%20connect%20with%20you.';

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLogoMask,
  onNavigateServices,
  onNavigateBlog,
  onNavigatePricing,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const opacityRef = useRef<number>(0);
  const isFadingRef = useRef<boolean>(false);
  const [email, setEmail] = useState('');

  // Typing animation state
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentPhrase.substring(0, displayText.length - 1)
            : currentPhrase.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const setOpacity = (val: number) => {
      opacityRef.current = Math.max(0, Math.min(1, val));
      video.style.opacity = opacityRef.current.toString();
    };

    const fade = (start: number, end: number, durationMs: number, onComplete?: () => void) => {
      isFadingRef.current = true;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        setOpacity(start + (end - start) * progress);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          isFadingRef.current = false;
          if (onComplete) onComplete();
        }
      };
      requestAnimationFrame(step);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
      if (opacityRef.current === 0 && !isFadingRef.current) {
        fade(0, 1, 500);
      }
    };

    const handleTimeUpdate = () => {
      if (video.duration && !isFadingRef.current) {
        const remaining = video.duration - video.currentTime;
        if (remaining <= 0.55 && opacityRef.current > 0) {
          fade(opacityRef.current, 0, 500);
        }
      }
    };

    const handleEnded = () => {
      setOpacity(0);
      setTimeout(() => {
        if (!video) return;
        video.currentTime = 0;
        video
          .play()
          .then(() => {
            fade(0, 1, 500);
          })
          .catch(() => {});
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        muted
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
        style={{ opacity: 0 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-[1]" />

      {/* Navbar */}
      <header className="relative z-20 px-6 py-6 w-full">
        <nav className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left Side Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center" aria-label="samy_creations logo">
              <Logo maskColor={currentLogoMask} className="h-8" showText={false} />
            </a>
            <div className="hidden md:flex items-center gap-8 ml-8">
              <button
                onClick={onNavigateServices}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={onNavigateBlog}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Blog
              </button>
              <button
                onClick={onNavigatePricing}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Pricing
              </button>
              <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                About
              </a>
            </div>
          </div>

          {/* Right Side - Removed Sign Up button, Connect links directly to WhatsApp */}
          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-emerald-600 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Connect</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-8 md:py-12 text-center max-w-5xl mx-auto w-full mt-4 md:mt-8">
        {/* Animated Typing Badge */}
        <div className="liquid-glass rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 inline-flex items-center gap-2.5 border border-white/15 shadow-xl">
          <Sparkles className="w-4 h-4 text-blue-400 animate-spin" />
          <span className="font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-300 font-bold">
            {displayText}
          </span>
          <span className="text-blue-400 font-bold animate-pulse text-base">|</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap font-serif mb-8">
          Samy_<em className="italic">Creations</em>
        </h1>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-xl w-full mb-6">
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="bg-transparent text-white placeholder:text-white/40 focus:outline-none flex-1 text-sm md:text-base border-none"
            />
            <button
              type="submit"
              aria-label="Submit Email"
              className="bg-white rounded-full p-3 text-black hover:bg-white/90 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer shrink-0"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>

        {/* Subtitle */}
        <p className="text-white text-sm leading-relaxed px-4 max-w-lg mx-auto mb-8 font-normal">
          Stay updated with the latest news and digital marketing insights from{' '}
          <span className="font-mono font-semibold text-blue-400">samy_creations</span>. Subscribe to our newsletter today and never miss out on exciting updates.
        </p>

        {/* Manifesto Button */}
        <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer">
          Manifesto
        </button>
      </main>

      {/* Social Icons Footer */}
      <footer className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          href="#"
          aria-label="Instagram"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="#"
          aria-label="Website"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Globe className="w-5 h-5" />
        </a>
      </footer>
    </div>
  );
};
