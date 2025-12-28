import React, { useEffect, useMemo, useState } from 'react';
import { FadeIn } from './FadeIn';

interface HeroProps {
  onOpen: () => void;
  visible: boolean;
}

const desktopImages: string[] = [
  '/desktop-background/couple (1).jpeg',
  '/desktop-background/couple (2).jpeg',
  '/desktop-background/couple (3).jpeg',
  '/desktop-background/couple (4).jpeg',
  '/desktop-background/couple (5).jpeg',
];

const mobileImages: string[] = [
  '/mobile-background/couple (1).jpeg',
  '/mobile-background/couple (2).jpeg',
  '/mobile-background/couple (3).jpeg',
  '/mobile-background/couple (6).jpeg',
  '/mobile-background/couple (7).jpeg',
];

export const Hero: React.FC<HeroProps> = ({ onOpen, visible }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;

    const media = window.matchMedia('(max-width: 768px)');
    const handleChange = () => setIsMobile(media.matches);
    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 5);
    }, 5500);
    return () => clearInterval(timer);
  }, [mounted]);


  const images = useMemo(() => (isMobile ? mobileImages : desktopImages), [isMobile]);

  return (
    <div className={`fixed inset-0 z-30 flex items-center justify-center overflow-hidden transition-all duration-1000 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      {/* Paper texture base */}
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

      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Couple"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-70' : 'opacity-0'}`}
          />
        ))}

        {/* Paper color overlay - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1EA]/40 via-[#FAF9F5]/50 to-[#F5F5F5]/40 pointer-events-none" />
        <div className="absolute inset-0 bg-[#CBB9A3]/10 pointer-events-none" />

        {/* Mist/Fade overlay effect - stronger in corners, lighter in center */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-left corner mist */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_top_left,#FAF9F5_0%,#FAF9F5_30%,rgba(250,249,245,0.7)_50%,rgba(250,249,245,0.3)_70%,transparent_100%)]" />
          {/* Top-right corner mist */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_top_right,#FAF9F5_0%,#FAF9F5_30%,rgba(250,249,245,0.7)_50%,rgba(250,249,245,0.3)_70%,transparent_100%)]" />
          {/* Bottom-left corner mist */}
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_bottom_left,#FAF9F5_0%,#FAF9F5_30%,rgba(250,249,245,0.7)_50%,rgba(250,249,245,0.3)_70%,transparent_100%)]" />
          {/* Bottom-right corner mist */}
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_bottom_right,#FAF9F5_0%,#FAF9F5_30%,rgba(250,249,245,0.7)_50%,rgba(250,249,245,0.3)_70%,transparent_100%)]" />
          
          {/* Top edge mist fade */}
          <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-[#FAF9F5]/90 via-[#FAF9F5]/50 to-transparent" />
          {/* Bottom edge mist fade */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#FAF9F5]/90 via-[#FAF9F5]/50 to-transparent" />
          {/* Left edge mist fade */}
          <div className="absolute top-0 bottom-0 left-0 w-1/4 bg-gradient-to-r from-[#FAF9F5]/80 via-[#FAF9F5]/30 to-transparent" />
          {/* Right edge mist fade */}
          <div className="absolute top-0 bottom-0 right-0 w-1/4 bg-gradient-to-l from-[#FAF9F5]/80 via-[#FAF9F5]/30 to-transparent" />
          
          {/* Center mist fade - much lighter */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_50%,rgba(250,249,245,0.15)_70%,rgba(250,249,245,0.3)_100%)]" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 w-full max-w-md mx-auto h-full">
        
        {/* Top Logo/Monogram */}
        <FadeIn show={visible} delay={300} className="mb-auto mt-8">
          <div 
            className="text-center text-4xl sm:text-6xl md:text-7xl"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 700,
              lineHeight: '1.2',
              color: 'rgb(74, 93, 78)',
            }}
          >
            K | C
          </div>
        </FadeIn>

        <div className="flex-1" />

        <div className="flex flex-col items-center justify-end w-full gap-4 pb-14 sm:pb-16 md:pb-20">
          <FadeIn show={visible} delay={600}>
          <h2
            className="text-6xl md:text-8xl text-[#4a5d4e] transform -rotate-6 drop-shadow-lg opacity-95"
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontWeight: 400,
              textShadow: '0 4px 12px rgba(74, 93, 78, 0.2), 0 2px 6px rgba(74, 93, 78, 0.15)',
            }}
          >
            You are
          </h2>
          </FadeIn>
          
          <FadeIn show={visible} delay={900}>
          <h1
            className="text-5xl md:text-7xl text-[#4a5d4e] font-bold tracking-wider uppercase drop-shadow-[0_6px_16px_rgba(74,93,78,0.25)]"
            style={{
              fontFamily: '"Cinzel", serif',
              fontWeight: 700,
              textShadow: '0 4px 12px rgba(74, 93, 78, 0.3), 0 2px 8px rgba(74, 93, 78, 0.2)',
            }}
          >
            Invited!
          </h1>
          </FadeIn>

          <FadeIn show={visible} delay={1500}>
          <button 
            onClick={() => {
              onOpen();
            }}
            className="group relative px-10 py-4 bg-[#A38D78] text-[#FAF9F5] font-serif text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#CBB9A3] shadow-lg hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 rounded-sm overflow-hidden border border-[#CBB9A3]/40"
          >
            <span
              className="relative z-10 text-[#FAF9F5] drop-shadow-md"
              style={{ fontFamily: '"Cinzel", serif', fontWeight: 500 }}
            >
              Open Invitation
            </span>
            {/* Button sheen effect */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 group-hover:animate-[shimmer_1s_infinite]" />
          </button>
          </FadeIn>
        </div>

        {/* Bottom Spacer */}
        <div className="h-4" />
      </div>
    </div>
  );
};