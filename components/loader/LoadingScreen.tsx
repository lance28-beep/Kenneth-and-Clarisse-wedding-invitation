import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    // Simulate loading time
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 1000); // Wait for fade out animation
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const year = new Date().getFullYear();

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Paper texture base - matching Hero.tsx */}
      <div className="absolute inset-0 z-0">
        {/* Base paper color */}
        <div className="absolute inset-0 bg-[#FAF9F5]" />
        
        {/* Paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(163, 141, 120, 0.03) 2px, rgba(163, 141, 120, 0.03) 4px),
              repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(163, 141, 120, 0.03) 2px, rgba(163, 141, 120, 0.03) 4px),
              radial-gradient(circle at 20% 30%, rgba(203, 185, 163, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(163, 141, 120, 0.08) 0%, transparent 50%),
              linear-gradient(135deg, rgba(244, 241, 234, 0.5) 0%, rgba(245, 245, 245, 0.3) 50%, rgba(250, 249, 245, 0.5) 100%)
            `,
            backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%'
          }}
        />
        
        {/* Subtle paper grain texture */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 py-12 w-full max-w-md mx-auto min-h-screen">
        {/* Monogram - matching Hero.tsx style */}
        <div className="mb-12 sm:mb-16">
          <div 
            className="text-center text-5xl sm:text-7xl md:text-8xl"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 700,
              lineHeight: '1.2',
              color: 'rgb(74, 93, 78)',
            }}
          >
            K | M
          </div>
        </div>

        {/* Copywriting paragraph */}
        <div className="text-center mb-8 sm:mb-10 max-w-xs sm:max-w-md px-4">
          <p
            className="text-sm sm:text-base leading-relaxed text-[#4a5d4e]/80 italic"
            style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 400 }}
          >
            Please wait a moment while we set the scene, tune the music, and open the doors to celebrate love, life, and forever.
          </p>
        </div>

        {/* Loading text */}
        <div className="text-center mb-8 sm:mb-12">
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#4a5d4e] mb-4"
            style={{ fontFamily: '"Cinzel", serif', fontWeight: 500 }}
          >
            Loading Invitation
          </p>

          {/* Simple progress bar */}
          <div className="relative w-48 sm:w-64 h-0.5 mx-auto bg-[#CBB9A3]/30 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-[#A38D78] transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Copyright - matching footer style */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center px-4">
          <p
            className="text-[10px] sm:text-xs text-[#4a5d4e]/70 leading-relaxed"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            © {year} Clarisse & Kenneth — crafted with love, prayers, and gratitude.
          </p>
        </div>
      </div>
    </div>
  );
};