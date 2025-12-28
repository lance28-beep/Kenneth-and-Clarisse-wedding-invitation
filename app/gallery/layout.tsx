"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Hide the global navbar while on /gallery
    const navbar = document.querySelector("nav") as HTMLElement | null
    if (navbar) navbar.style.display = "none"
    return () => {
      if (navbar) navbar.style.display = ""
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#4a5d4e] font-sans">
      {/* Simple top bar with only Back link - matching paper style */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF9F5]/95 border-b border-[#4a5d4e]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-12 sm:h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-[#4a5d4e] font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#4a5d4e]/30 hover:bg-[#4a5d4e]/10 hover:border-[#4a5d4e]/50 transition-all duration-200 font-sans text-sm sm:text-base"
          >
            <span className="text-base sm:text-lg">←</span>
            <span className="hidden xs:inline">Back to main page</span>
            <span className="xs:hidden">Back</span>
          </Link>
          <div className="text-xs sm:text-sm text-[#4a5d4e]/70 font-sans font-medium">Gallery</div>
        </div>
      </div>
      {children}
    </div>
  )
}






