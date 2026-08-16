import React from 'react';

interface LogoProps {
  className?: string;
  maskColor?: string; // e.g. "bg-blue-600", "bg-cyan-400", "bg-gradient-to-r..."
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-8',
  maskColor = 'bg-blue-500',
  showText = false, // Set to false so text near logo icon is removed
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Icon Mark Mask */}
      <div
        className={`h-8 w-8 shrink-0 ${maskColor} transition-all duration-300`}
        style={{
          WebkitMaskImage: `url('/samy_creations_logo.png')`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskImage: `url('/samy_creations_logo.png')`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
        }}
      />

      {/* Optional Brand Text */}
      {showText && (
        <span
          className={`font-bold text-xs md:text-sm tracking-[0.12em] uppercase font-display whitespace-nowrap bg-clip-text text-transparent ${maskColor} transition-all duration-300 leading-none`}
        >
          SAMY<span className="opacity-70">_</span>CREATIONS
        </span>
      )}
    </div>
  );
};
