import fs from "fs/promises"
import path from "path"
import Link from "next/link"
import MasonryGallery from "@/components/masonry-gallery"
import { siteConfig } from "@/content/site"
import { TornPaperEdge } from "@/components/torn-paper-edge"

// Generate on each request so newly added images in public/ appear without a rebuild
export const dynamic = "force-dynamic"

async function getImagesFrom(dir: string) {
  const abs = path.join(process.cwd(), "public", dir)
  try {
    const entries = await fs.readdir(abs, { withFileTypes: true })
    return entries
      .filter((e) => e.isFile())
      .map((e) => `/${dir}/${e.name}`)
      .filter((p) => p.match(/\.(jpe?g|png|webp|gif)$/i))
      .sort((a, b) => a.localeCompare(b))
  } catch {
    return []
  }
}

export default async function GalleryPage() {
  const { brideNickname, groomNickname } = siteConfig.couple
  const galleryHashtag = `#${brideNickname.replace(/\s+/g, "")}And${groomNickname.replace(/\s+/g, "")}Wedding`

  const [desktop, mobile] = await Promise.all([
    getImagesFrom("desktop-background"),
    getImagesFrom("mobile-background"),
  ])
  const images = [
    ...desktop.map((src) => ({ src, category: "desktop" as const })),
    ...mobile.map((src) => ({ src, category: "mobile" as const })),
  ]

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#91729E] relative overflow-hidden font-sans">
      {/* Torn paper edge at top */}
      <TornPaperEdge position="top" />
      
      {/* Simple paper texture background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle paper texture effect */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #91729E 2px, #91729E 4px),
                          repeating-linear-gradient(90deg, transparent, transparent 2px, #91729E 2px, #91729E 4px)`,
        }} />
        {/* Soft sage green accents */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#91729E]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#91729E]/5 via-transparent to-transparent" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
          {/* Decorative element above title */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-12 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#91729E]/40 to-[#91729E]/60" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#91729E]/50 border border-[#91729E]/40" />
            <div className="w-12 sm:w-20 md:w-24 h-px bg-gradient-to-l from-transparent via-[#91729E]/40 to-[#91729E]/60" />
          </div>
          
          <h1
            className="style-script-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#91729E] mb-2 sm:mb-3 md:mb-4"
            style={{ 
              letterSpacing: "0.02em",
              textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)"
            }}
          >
            Our Love Story Gallery
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#91729E]/85 font-light max-w-2xl mx-auto leading-relaxed px-2 font-sans italic" style={{ 
            letterSpacing: "0.02em",
            textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
          }}>
            Every photograph tells a story of Catherine & Mark's journey to forever
          </p>
          
          {/* Decorative element below subtitle */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <div className="w-12 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#91729E]/40 to-[#91729E]/60" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#91729E]/50 border border-[#91729E]/40" />
            <div className="w-12 sm:w-20 md:w-24 h-px bg-gradient-to-l from-transparent via-[#91729E]/40 to-[#91729E]/60" />
          </div>
        </div>

        {images.length === 0 ? (
          <div className="text-center text-[#91729E]/80">
            <p className="font-light font-sans">
              No images found. Add files to{" "}
              <code className="px-2 py-1 bg-[#91729E]/10 rounded border border-[#91729E]/20 text-[#91729E] font-sans">
                public/desktop-background
              </code>{" "}
              or{" "}
              <code className="px-2 py-1 bg-[#91729E]/10 rounded border border-[#91729E]/20 text-[#91729E] font-sans">
                public/mobile-background
              </code>
              .
            </p>
          </div>
        ) : (
          <MasonryGallery images={images} />
        )}
      </section>

      {/* Torn paper edge at bottom */}
      <TornPaperEdge position="bottom" />
    </main>
  )
}


