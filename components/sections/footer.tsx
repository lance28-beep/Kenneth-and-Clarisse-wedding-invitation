"use client"

import { useState, useEffect } from "react"
import { Instagram, Twitter, Facebook, MapPin, Calendar, Clock, Heart, Music2 } from "lucide-react"
import { siteConfig } from "@/content/site"
import { Cormorant_Garamond } from "next/font/google"
import { TornPaperEdge } from "@/components/torn-paper-edge"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
})

export function Footer() {
  const year = new Date().getFullYear()
  const ceremonyDate = siteConfig.ceremony.date
  const ceremonyTime = siteConfig.ceremony.time
  const receptionTime = siteConfig.reception.time
  const ceremonyVenue = siteConfig.ceremony.venue
  const receptionVenue = siteConfig.reception.venue

  const [ceremonyMonth = "December", ceremonyDayRaw = "21", ceremonyYear = "2025"] = ceremonyDate.split(" ")
  const ceremonyDayNumber = ceremonyDayRaw.replace(/[^0-9]/g, "") || "21"

  const quotes = [
    `"I have found the one whom my soul loves." – Song of Solomon 3:4`,
    "Welcome to our wedding website! We've found a love that's a true blessing, and we give thanks to God for writing the beautiful story of our journey together.",
    "Thank you for your love, prayers, and support. We can't wait to celebrate this joyful day together!",
  ]

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
      }, 3000)
      return () => clearTimeout(pauseTimeout)
    }

    if (isDeleting) {
      if (displayedText.length > 0) {
        const deleteTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 30)
        return () => clearTimeout(deleteTimeout)
      } else {
        setIsDeleting(false)
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
      }
    } else {
      const currentQuote = quotes[currentQuoteIndex]
      if (displayedText.length < currentQuote.length) {
        const typeTimeout = setTimeout(() => {
          setDisplayedText(currentQuote.slice(0, displayedText.length + 1))
        }, 50)
        return () => clearTimeout(typeTimeout)
      } else {
        setIsPaused(true)
        setIsDeleting(true)
      }
    }
  }, [displayedText, isDeleting, isPaused, currentQuoteIndex, quotes])

  const nav = [
    { label: "Home", href: "#home" },
    { label: "Events", href: "#details" },
    { label: "Gallery", href: "#gallery" },
    { label: "RSVP", href: "#guest-list" },
  ] as const

  return (
    <footer 
      className="relative z-20 mt-12 sm:mt-16 overflow-hidden bg-[#FAF9F5]"
    >
      {/* Torn paper edge at top */}
      <TornPaperEdge position="top" />
      
      {/* Paper texture background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle paper texture effect */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #4a5d4e 2px, #4a5d4e 4px),
                          repeating-linear-gradient(90deg, transparent, transparent 2px, #4a5d4e 2px, #4a5d4e 4px)`,
        }} />
        {/* Soft sage green accents */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#4a5d4e]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#4a5d4e]/5 via-transparent to-transparent" />
      </div>
      
      {/* Monogram - centered at top */}
      <div className="relative z-10 flex flex-col items-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 mb-5 sm:mb-6 md:mb-8">
        <div className="relative">
          <div 
            className="text-center"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 700,
              fontSize: '3rem',
              lineHeight: '1.2',
              color: 'rgb(74, 93, 78)',
            }}
          >
            K | M
          </div>
        </div>

        {/* Names & Date below monogram */}
        <div className="mt-3 sm:mt-4 md:mt-5 text-center">
          <p
            className={`${cormorant.className} tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-sm md:text-base text-[#4a5d4e] uppercase font-light`}
            style={{ 
              letterSpacing: "0.02em",
              textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
            }}
          >
            {siteConfig.couple.groomNickname} & {siteConfig.couple.brideNickname}
          </p>
          <p
            className={`${cormorant.className} text-sm sm:text-base md:text-lg text-[#4a5d4e]/85 mt-1 sm:mt-2 font-light`}
            style={{ 
              letterSpacing: "0.02em",
              textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
            }}
          >
            {ceremonyDate}
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8 md:mb-10">
          {/* Couple Info */}
          <div className="lg:col-span-2">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 sm:w-12 md:h-12 bg-[#4a5d4e]/10 rounded-full flex items-center justify-center border border-[#4a5d4e]/20 flex-shrink-0">
                  <Heart className="w-5 h-5 sm:w-6 md:w-6 text-[#4a5d4e]" fill="#4a5d4e" />
                </div>
                <h3 
                  className="style-script-regular text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4a5d4e]"
                  style={{ 
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)"
                  }}
                >
                  {siteConfig.couple.groomNickname} & {siteConfig.couple.brideNickname}
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className={`flex items-center gap-3 ${cormorant.className} text-[#4a5d4e] font-light`}>
                  <Calendar className="w-4 h-4 sm:w-5 md:w-5 text-[#4a5d4e] flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg" style={{ 
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                  }}>{ceremonyDate}</span>
                </div>
                <div className={`flex items-center gap-3 ${cormorant.className} text-[#4a5d4e]/85 font-light`}>
                  <MapPin className="w-4 h-4 sm:w-5 md:w-5 text-[#4a5d4e] flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base leading-relaxed" style={{ 
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                  }}>{ceremonyVenue}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF9F5]/98 backdrop-blur-md border border-[#D0D0D0]/40 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md p-4 sm:p-5 md:p-6">
              <blockquote 
                className={`${cormorant.className} text-[#4a5d4e] italic text-sm sm:text-base md:text-lg leading-relaxed min-h-[60px] sm:min-h-[70px] md:min-h-[80px] font-light`}
                style={{ 
                  letterSpacing: "0.02em",
                  textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                }}
              >
                "{displayedText}
                <span className="inline-block w-0.5 h-4 sm:h-5 md:h-6 bg-[#4a5d4e] ml-1 animate-pulse">|</span>"
              </blockquote>
              <div className="flex items-center gap-2 mt-3 sm:mt-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#4a5d4e]/60 rounded-full" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#4a5d4e]/40 rounded-full" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#4a5d4e]/60 rounded-full" />
              </div>
            </div>
          </div>

          {/* Event Details quick tiles */}
          <div className="space-y-4 sm:space-y-5">
            <div className="bg-[#FAF9F5]/98 backdrop-blur-md border border-[#D0D0D0]/40 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md p-4 sm:p-5 hover:border-[#4a5d4e]/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 md:h-10 bg-[#4a5d4e]/10 rounded-full flex items-center justify-center border border-[#4a5d4e]/20 flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 md:w-5 text-[#4a5d4e]" />
                </div>
                <h4 
                  className={`${cormorant.className} font-semibold text-base sm:text-lg md:text-xl text-[#4a5d4e]`}
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}
                >
                  Ceremony
                </h4>
              </div>
              <div className={`space-y-2 sm:space-y-3 ${cormorant.className} text-[#4a5d4e]/85 text-xs sm:text-sm leading-relaxed font-light`}>
                <div className="flex items-start gap-3">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 text-[#4a5d4e] flex-shrink-0 mt-0.5" />
                  <span style={{ 
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                  }}>{ceremonyVenue}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-3.5 h-3.5 sm:w-4 text-[#4a5d4e] flex-shrink-0" />
                  <span style={{ 
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                  }}>{ceremonyTime}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF9F5]/98 backdrop-blur-md border border-[#D0D0D0]/40 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md p-4 sm:p-5 hover:border-[#4a5d4e]/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 md:h-10 bg-[#4a5d4e]/10 rounded-full flex items-center justify-center border border-[#4a5d4e]/20 flex-shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 md:w-5 text-[#4a5d4e]" fill="#4a5d4e" />
                </div>
                <h4 
                  className={`${cormorant.className} font-semibold text-base sm:text-lg md:text-xl text-[#4a5d4e]`}
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}
                >
                  Reception
                </h4>
              </div>
              <div className={`space-y-2 sm:space-y-3 ${cormorant.className} text-[#4a5d4e]/85 text-xs sm:text-sm leading-relaxed font-light`}>
                <div className="flex items-start gap-3">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 text-[#4a5d4e] flex-shrink-0 mt-0.5" />
                  <span style={{ 
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                  }}>{receptionVenue}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-3.5 h-3.5 sm:w-4 text-[#4a5d4e] flex-shrink-0" />
                  <span style={{ 
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                  }}>{receptionTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact + Quick Links */}
          <div className="space-y-6 sm:space-y-7">
            <div>
              <h4 
                className={`${cormorant.className} font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-5 flex items-center gap-2 sm:gap-3 text-[#4a5d4e]`}
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}
              >
                <div className="w-1.5 sm:w-2 h-6 sm:h-7 md:h-8 bg-[#4a5d4e]/30 rounded-full" /> Follow Us
              </h4>
              <div className="flex items-center gap-3 flex-wrap">
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#4a5d4e]/10 border border-[#4a5d4e]/20 hover:bg-[#4a5d4e]/20 hover:border-[#4a5d4e]/40 transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#4a5d4e]" />
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#4a5d4e]/10 border border-[#4a5d4e]/20 hover:bg-[#4a5d4e]/20 hover:border-[#4a5d4e]/40 transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#4a5d4e]" />
                </a>
                <a 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#4a5d4e]/10 border border-[#4a5d4e]/20 hover:bg-[#4a5d4e]/20 hover:border-[#4a5d4e]/40 transition-all duration-200 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Music2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#4a5d4e]" />
                </a>
                <a 
                  href="https://x.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#4a5d4e]/10 border border-[#4a5d4e]/20 hover:bg-[#4a5d4e]/20 hover:border-[#4a5d4e]/40 transition-all duration-200 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-[#4a5d4e]" />
                </a>
              </div>
            </div>

            <div>
              <h5 
                className={`${cormorant.className} font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-[#4a5d4e]`}
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}
              >
                Quick Links
              </h5>
              <div className="space-y-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block text-[#4a5d4e]/85 hover:text-[#4a5d4e] transition-colors duration-200 ${cormorant.className} text-xs sm:text-sm leading-relaxed font-light`}
                    style={{ 
                      letterSpacing: "0.02em",
                      textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-[#D0D0D0]/40 pt-5 sm:pt-6 md:pt-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-5">
            <div className="text-center md:text-left">
              <p 
                className={`text-[#4a5d4e] ${cormorant.className} text-xs sm:text-sm leading-relaxed font-light`}
                style={{ 
                  letterSpacing: "0.02em",
                  textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                }}
              >
                © {year} {siteConfig.couple.groomNickname} & {siteConfig.couple.brideNickname} — crafted with love, prayers, and gratitude.
              </p>
              <p 
                className={`text-[#4a5d4e]/85 ${cormorant.className} text-xs sm:text-sm mt-1 leading-relaxed font-light`}
                style={{ 
                  letterSpacing: "0.02em",
                  textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                }}
              >
                This celebration site was designed to share our story and joy with you.
              </p>
            </div>
            
            <div className="text-center md:text-right space-y-1">
              <p 
                className={`text-[#4a5d4e]/85 ${cormorant.className} text-xs sm:text-sm font-light`}
                style={{ 
                  letterSpacing: "0.02em",
                  textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                }}
              >
                Developed by{" "}
                <a 
                  href="https://lance28-beep.github.io/portfolio-website/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#4a5d4e] hover:text-[#3d4d3f] transition-colors duration-200 underline decoration-[#4a5d4e]/60 hover:decoration-[#4a5d4e]/80"
                >
                  Lance Valle
                </a>
              </p>
              <p 
                className={`text-[#4a5d4e]/85 ${cormorant.className} text-xs sm:text-sm font-light`}
                style={{ 
                  letterSpacing: "0.02em",
                  textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                }}
              >
                Want a website like this? Visit{" "}
                <a 
                  href="https://www.facebook.com/WeddingInvitationNaga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#4a5d4e] hover:text-[#3d4d3f] transition-colors duration-200 underline decoration-[#4a5d4e]/60 hover:decoration-[#4a5d4e]/80"
                >
                  Wedding Invitation Naga
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Torn paper edge at bottom */}
      {/* <TornPaperEdge position="bottom" /> */}
    </footer>
  )
}
