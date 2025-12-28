"use client"

import { siteConfig } from "@/content/site"
import { Cormorant_Garamond } from "next/font/google"
import { TornPaperEdge } from "@/components/torn-paper-edge"
import { motion } from "motion/react"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export function Invitation() {
  const [weddingMonth = "January", weddingDayRaw = "28", weddingYear = "2026"] =
    siteConfig.wedding.date.split(" ")
  const weddingDayNumber = weddingDayRaw.replace(/[^0-9]/g, "") || "28"
  const ceremonyTime = siteConfig.wedding.time
  const groomName = siteConfig.couple.groomNickname || siteConfig.couple.groom
  const brideName = siteConfig.couple.brideNickname || siteConfig.couple.bride
  const ceremonyDayShort = siteConfig.ceremony.day
    ? siteConfig.ceremony.day.slice(0, 3).toUpperCase()
    : "WED"

  return (
    <section id="invitation" className="relative py-20 sm:py-24 md:py-28 lg:py-32 bg-[#FAF9F5]">
      {/* Torn paper edge at top */}
      <TornPaperEdge position="top" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          variants={staggerChildren}
        >
          {/* Invitation Text - Elegant matching hero section */}
          <motion.div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8" variants={fadeInUp}>
            <p
              className={`${cormorant.className} text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#91729E] leading-relaxed font-light`}
              style={{ 
                letterSpacing: "0.03em",
                textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)",
              }}
            >
              Together with our families,
              <br />
              <span className="text-[#91729E]/90">we joyfully invite you to witness our union.</span>
            </p>
          </motion.div>

          {/* Decorative divider matching hero style */}
          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-4"
            variants={fadeInUp}
          >
            <span className="h-px w-12 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-[#91729E]/40 to-[#91729E]/60" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#91729E]/30 border border-[#91729E]/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#91729E]/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#91729E]/30 border border-[#91729E]/40" />
            <span className="h-px w-12 sm:w-20 md:w-24 bg-gradient-to-l from-transparent via-[#91729E]/40 to-[#91729E]/60" />
          </motion.div>

          {/* Names - Elegant script style matching hero section */}
          <motion.div className="space-y-3 sm:space-y-4 md:space-y-5" variants={fadeInUp}>
            <h1
              className="style-script-regular text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#91729E]"
              style={{ 
                letterSpacing: "0.02em",
                textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)",
              }}
            >
              {groomName}
            </h1>
            <motion.p
              className={`${cormorant.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#91729E] font-light`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,0.2), 0 1px 4px rgba(0,0,0,0.15)",
              }}
            >
              &
            </motion.p>
            <h1
              className="style-script-regular text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#91729E]"
              style={{ 
                letterSpacing: "0.02em",
                textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)",
              }}
            >
              {brideName}
            </h1>
          </motion.div>

          {/* Decorative divider matching hero style */}
          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-4"
            variants={fadeInUp}
          >
            <span className="h-px w-12 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-[#91729E]/40 to-[#91729E]/60" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#91729E]/30 border border-[#91729E]/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#91729E]/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#91729E]/30 border border-[#91729E]/40" />
            <span className="h-px w-12 sm:w-20 md:w-24 bg-gradient-to-l from-transparent via-[#91729E]/40 to-[#91729E]/60" />
          </motion.div>

          {/* Date & Time - Matching hero section style */}
          <motion.div className="space-y-5 sm:space-y-6 md:space-y-8" variants={fadeInUp}>
            <div
              className={`${cormorant.className} flex flex-col items-center gap-4 sm:gap-5 md:gap-6 text-[#91729E]`}
            >
              <span 
                className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-[0.2em] font-light"
                style={{
                  textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)",
                }}
              >
                {weddingMonth}
              </span>

              <div className="flex w-full items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                <span 
                  className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-[0.25em] font-light"
                  style={{
                    textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  {ceremonyDayShort}
                </span>
                <motion.span 
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light leading-none"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  {weddingDayNumber}
                </motion.span>
                <span 
                  className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-[0.25em] font-light"
                  style={{
                    textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  {ceremonyTime.split(",")[0]}
                </span>
              </div>

              <span 
                className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-[0.2em] font-light"
                style={{
                  textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)",
                }}
              >
                {weddingYear}
              </span>
            </div>
          </motion.div>

          {/* Decorative divider matching hero style */}
          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-4"
            variants={fadeInUp}
          >
            <span className="h-px w-12 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-[#91729E]/40 to-[#91729E]/60" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#91729E]/30 border border-[#91729E]/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#91729E]/40" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#91729E]/30 border border-[#91729E]/40" />
            <span className="h-px w-12 sm:w-20 md:w-24 bg-gradient-to-l from-transparent via-[#91729E]/40 to-[#91729E]/60" />
          </motion.div>

          {/* Venue - Matching hero section style */}
          <motion.div className="space-y-3 sm:space-y-4" variants={fadeInUp}>
            <p
              className={`${cormorant.className} text-base sm:text-lg md:text-xl lg:text-2xl text-[#91729E] uppercase tracking-[0.18em] font-light`}
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)",
              }}
            >
              {siteConfig.ceremony.venue}
            </p>
            <p
              className={`${cormorant.className} text-sm sm:text-base md:text-lg lg:text-xl text-[#91729E]/85 italic font-light`}
              style={{ 
                letterSpacing: "0.02em",
                textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              Reception to follow at {siteConfig.reception.venue}
            </p>
          </motion.div>

          {/* Message - Matching hero section style */}
          <motion.div className="pt-6 sm:pt-8 md:pt-10" variants={fadeInUp}>
            <p
              className={`${cormorant.className} text-base sm:text-lg md:text-xl lg:text-2xl text-[#91729E] leading-relaxed max-w-2xl mx-auto font-light`}
              style={{ 
                letterSpacing: "0.02em",
                textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)",
              }}
            >
              Your presence, prayers, and love will mean the world to us.
            </p>
          </motion.div>

          {/* CTA Button - Matching hero section style */}
          <motion.div className="pt-8 sm:pt-10 md:pt-12" variants={fadeInUp}>
            <motion.a
              href="#guest-list"
              className={`${cormorant.className} inline-block px-12 sm:px-14 md:px-16 lg:px-20 py-4 sm:py-4.5 md:py-5 bg-[#91729E] text-white uppercase tracking-[0.2em] text-sm sm:text-base md:text-lg font-medium rounded-sm shadow-[0_6px_20px_rgba(145,114,158,0.4)] transition-all duration-300 hover:bg-[#7a5d85] hover:shadow-[0_8px_28px_rgba(145,114,158,0.5)] relative overflow-hidden group`}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Confirm Attendance</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Torn paper edge at bottom */}
      <TornPaperEdge position="bottom" />
    </section>
  )
}
