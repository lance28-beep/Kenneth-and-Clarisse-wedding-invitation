"use client"

import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import Stack from "@/components/stack"
import { motion } from "motion/react"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export function Narrative() {
  const storyParagraphs =
    siteConfig.narratives?.groom
      ?.trim()
      .split(/\n\s*\n/)
      .filter(Boolean) ?? []

  return (
    <Section
      id="narrative"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-[#FAF9F5]"
    >
      {/* Background elements with sage green motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Vertical sage gradients to frame the story */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#4a5d4e]/8 via-[#4a5d4e]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#4a5d4e]/8 via-[#4a5d4e]/5 to-transparent" />
        {/* Soft radial light in sage green */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,93,78,0.08),transparent_55%)] opacity-60" />
        {/* Subtle diagonal wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a5d4e]/5 via-transparent to-[#4a5d4e]/3 mix-blend-soft-light" />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-3 sm:space-y-4 md:space-y-5">
            <p
              className={`${cormorant.className} text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] text-[#4a5d4e] font-light`}
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}
            >
              Our Love Story
            </p>
            <h2
              className="style-script-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#4a5d4e]"
              style={{ 
                textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)",
                letterSpacing: "0.02em"
              }}
            >
              From Friends to Forever
            </h2>
            <p
              className={`${cormorant.className} text-sm sm:text-base md:text-lg text-[#4a5d4e]/80 italic font-light max-w-2xl mx-auto`}
              style={{ 
                textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)",
                letterSpacing: "0.02em"
              }}
            >
              A beautiful journey that began with friendship and blossomed into a love story we&apos;re excited to share with you
            </p>

            {/* Decorative flourish */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-[#4a5d4e]/40 to-transparent" />
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#4a5d4e]/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </motion.div>
              <div className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent via-[#4a5d4e]/40 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Main Content - Centered Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-center lg:items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left Spacer */}
          <div className="hidden lg:block"></div>

          {/* Interactive Stack Component - Center */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Enhanced glow effect with sage green motif */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a5d4e]/15 via-[#4a5d4e]/10 to-[#4a5d4e]/12 rounded-full blur-3xl -z-10 w-full h-full max-w-sm animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4a5d4e]/12 via-transparent to-[#4a5d4e]/10 rounded-full blur-2xl -z-10 w-full h-full max-w-sm" />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#4a5d4e]/10 via-transparent to-[#4a5d4e]/8 rounded-full blur-xl -z-10 w-full h-full max-w-sm" />

              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 240, height: 280 }}
                cardsData={[
                  { id: 1, img: "/desktop-background/couple (2).jpeg" },
                  { id: 2, img: "/desktop-background/couple (3).jpeg" },
                  { id: 3, img: "/desktop-background/couple (5).jpeg" },
                  { id: 4, img: "/desktop-background/couple (6).jpeg" },

                ]}
                animationConfig={{ stiffness: 260, damping: 20 }}
              />

              <motion.p 
                className={`${cormorant.className} text-center text-xs md:text-sm text-[#4a5d4e] mt-4 font-light tracking-wide`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}
              >
                <span className="text-[#4a5d4e]/70">✨</span> Drag to explore our moments <span className="text-[#4a5d4e]/70">✨</span>
              </motion.p>
            </div>
          </div>

          {/* Right Spacer */}
          <div className="hidden lg:block"></div>
        </motion.div>

        {/* Story Text */}
        <motion.div 
          className="mt-10 md:mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="space-y-4 md:space-y-6" aria-live="polite">
            {storyParagraphs.map((paragraph, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                {/* First paragraph with drop cap */}
                {index === 0 ? (
                  <p className={`${cormorant.className} text-sm md:text-base lg:text-lg leading-relaxed text-[#4a5d4e] text-pretty font-light pl-3 md:pl-6`} style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}>
                    <span className={`${cormorant.className} float-left text-3xl md:text-5xl lg:text-6xl font-bold text-[#4a5d4e] leading-none mr-2 mt-1`} style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2), 0 1px 4px rgba(0,0,0,0.15)" }}>
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.slice(1)}
                  </p>
                ) : (
                  <p className={`${cormorant.className} text-sm md:text-base lg:text-lg leading-relaxed text-[#4a5d4e] text-pretty font-light pl-3 md:pl-6`} style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}>
                    {paragraph}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Divider and CTA */}
          <motion.div 
            className="mt-10 md:mt-14 space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Decorative divider with sage green motif */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#4a5d4e]/40 to-[#4a5d4e]/30" />
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg className="w-5 h-5 text-[#4a5d4e]/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
              </motion.div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#4a5d4e]/40 to-[#4a5d4e]/30" />
            </div>

            {/* Enhanced CTA Button with sage motif */}
            <div className="flex justify-center">
              <motion.a
                href="#guest-list"
                className={`${cormorant.className} group relative w-full sm:w-auto px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-white font-medium text-sm sm:text-base md:text-lg rounded-[2rem] transition-all duration-500 text-center overflow-hidden shadow-xl hover:shadow-2xl border-2 border-[#4a5d4e]/30 hover:border-[#4a5d4e]/50`}
                style={{ 
                  backgroundImage: "linear-gradient(135deg, #4a5d4e, #3d4d3f)",
                  boxShadow: "0 10px 40px rgba(74,93,78,0.4), 0 4px 12px rgba(74,93,78,0.3)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = "linear-gradient(135deg, #3d4d3f, #4a5d4e)";
                  e.currentTarget.style.boxShadow = "0 16px 55px rgba(74,93,78,0.5), 0 6px 18px rgba(74,93,78,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage = "linear-gradient(135deg, #4a5d4e, #3d4d3f)";
                  e.currentTarget.style.boxShadow = "0 10px 40px rgba(74,93,78,0.4), 0 4px 12px rgba(74,93,78,0.3)";
                }}
              >
                {/* Pulsing glow effect with sage accent */}
                <motion.div 
                  className="absolute inset-0 bg-[#4a5d4e]/40 rounded-[2rem] blur-2xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {/* Secondary glow */}
                <motion.div 
                  className="absolute inset-0 bg-[#4a5d4e]/20 rounded-[2rem] blur-xl"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                
                {/* Enhanced gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Double shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                <div className="absolute inset-0 translate-x-full group-hover:-translate-x-full transition-transform duration-1200 delay-200 bg-gradient-to-l from-transparent via-white/15 to-transparent"></div>
                
                {/* Enhanced sparkle effects */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + (i % 3) * 40}%`,
                    }}
                    animate={{
                      scale: [0, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    delay: i * 0.28,
                      ease: "easeInOut",
                    }}
                  >
                    <svg className="w-3 h-3 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </motion.div>
                ))}
                
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-[2rem] border-2 border-white/10 group-hover:border-white/30 transition-all duration-500"></div>
                <motion.div 
                  className="absolute inset-0 rounded-[2rem] border-2 border-white/20"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Decorative waves on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ y: 0 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg className="w-full h-full" fill="none" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z" fill="white" opacity="0.1"/>
                  </svg>
                </motion.div>
                
                {/* Button content */}
                <span className="relative z-10 tracking-wide uppercase inline-flex items-center gap-3 font-medium text-white">
                  Join Our Celebration
                  <motion.svg 
                    className="w-5 h-5 md:w-6 md:h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
                
                {/* Enhanced decorative corner ornaments */}
                <motion.div 
                  className="absolute top-2 left-2 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute top-2 right-2 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
                <motion.div 
                  className="absolute bottom-2 left-2 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.div 
                  className="absolute bottom-2 right-2 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  )
}
