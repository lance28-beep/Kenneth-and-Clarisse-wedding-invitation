"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Share2, Copy, Download, Check } from "lucide-react"
import { Section } from "@/components/section"
import { QRCodeCanvas } from "qrcode.react"
import { siteConfig } from "@/content/site"
import { Cormorant_Garamond } from "next/font/google"
import { TornPaperEdge } from "@/components/torn-paper-edge"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
})

export function SnapShare() {
  const [copiedHashtagIndex, setCopiedHashtagIndex] = useState<number | null>(null)
  const [copiedAllHashtags, setCopiedAllHashtags] = useState(false)
  const [copiedDriveLink, setCopiedDriveLink] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const websiteUrl = typeof window !== "undefined" ? window.location.href : "https://example.com"
  const driveLink = siteConfig.snapShare?.googleDriveLink || "https://drive.google.com/drive/folders/1kOrf64ay6vx0pIeIjavvWp31B8nFWowQ?usp=sharing"
  const hashtags = [
    "#TodaysMarkMyLifetimewithCath",
    "#IWillMARKYouForeverCATH",
    "#MARKedforlifewithCATHY"
  ]
  const allHashtagsText = hashtags.join(" ")
  const groomNickname = siteConfig.couple.groomNickname
  const brideNickname = siteConfig.couple.brideNickname
  const sanitizedGroomName = groomNickname.replace(/\s+/g, "")
  const sanitizedBrideName = brideNickname.replace(/\s+/g, "")

  const shareText = `Celebrate ${groomNickname} & ${brideNickname}'s wedding! Explore the details and share your special memories: ${websiteUrl} ${allHashtagsText} ✨`

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])


  const shareOnSocial = (platform: "instagram" | "facebook" | "twitter" | "tiktok") => {
    const encodedUrl = encodeURIComponent(websiteUrl)
    const encodedText = encodeURIComponent(shareText)

    const urls: Record<string, string> = {
      instagram: `https://www.instagram.com/`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
      tiktok: `https://www.tiktok.com/`,
    }

    const target = urls[platform]
    if (target) {
      window.open(target, "_blank", "width=600,height=400")
    }
  }

  const downloadQRCode = () => {
    const canvas = document.getElementById("snapshare-qr") as HTMLCanvasElement | null
    if (!canvas) return
    const link = document.createElement("a")
    link.download = `${sanitizedGroomName.toLowerCase()}-${sanitizedBrideName.toLowerCase()}-wedding-qr.png`
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  const downloadDriveQRCode = () => {
    const canvas = document.getElementById("drive-qr") as HTMLCanvasElement | null
    if (!canvas) return
    const link = document.createElement("a")
    link.download = "drive-qr.png"
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  const copyHashtag = async (hashtag: string, index: number) => {
    try {
      await navigator.clipboard.writeText(hashtag)
      setCopiedHashtagIndex(index)
      setTimeout(() => setCopiedHashtagIndex(null), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const copyAllHashtags = async () => {
    try {
      await navigator.clipboard.writeText(allHashtagsText)
      setCopiedAllHashtags(true)
      setTimeout(() => setCopiedAllHashtags(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const copyDriveLink = async () => {
    if (driveLink) {
      try {
        await navigator.clipboard.writeText(driveLink)
        setCopiedDriveLink(true)
        setTimeout(() => setCopiedDriveLink(false), 2000)
      } catch (err) {
        console.error("Failed to copy: ", err)
      }
    }
  }

  return (
    <Section
      id="snap-share"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FAF9F5]"
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 
            className="style-script-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#4a5d4e] mb-2"
            style={{ 
              letterSpacing: "0.02em",
              textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)"
            }}
          >
            Capture & Share the Celebration
          </h2>
          <p 
            className={`${cormorant.className} text-sm sm:text-base text-[#4a5d4e]/85 max-w-2xl mx-auto mt-4 leading-relaxed font-light`}
            style={{ 
              letterSpacing: "0.02em",
              textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
            }}
          >
            Capture the beautiful moments of {groomNickname} & {brideNickname}'s wedding day. Share your favorite memories so our keepsake gallery glows with every smile, embrace, and celebration from this special day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Gallery Section */}
          <div className="bg-[#FAF9F5]/98 backdrop-blur-md border border-[#D0D0D0]/40 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md overflow-hidden">
            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              <h3 
                className={`${cormorant.className} text-xl sm:text-2xl md:text-3xl text-[#4a5d4e] mb-4 sm:mb-6 text-center font-light`}
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}
              >
                Our Favorite Moments
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md border border-[#4a5d4e]/20 hover:border-[#4a5d4e]/40 transition-all">
                  <Image src="/desktop-background/couple (5).jpeg" alt="Wedding moment 1" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md border border-[#4a5d4e]/20 hover:border-[#4a5d4e]/40 transition-all">
                  <Image src="/desktop-background/couple (6).jpeg" alt="Wedding moment 2" fill className="object-cover" />
                </div>
                <div className="relative col-span-2 aspect-[3/2] rounded-lg overflow-hidden shadow-md border border-[#4a5d4e]/20 hover:border-[#4a5d4e]/40 transition-all">
                  <Image src="/desktop-background/couple (1).jpeg" alt="Wedding moment 3" fill className="object-cover" />
                </div>
              </div>
              <p 
                className={`${cormorant.className} text-[#4a5d4e]/85 text-sm sm:text-base text-center mt-4 sm:mt-6 leading-relaxed font-light`}
                style={{ 
                  letterSpacing: "0.02em",
                  textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                }}
              >
                Share your snapshots to be featured in our keepsake gallery.
              </p>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Share Website Section */}
            <div className="bg-[#FAF9F5]/98 backdrop-blur-md border border-[#D0D0D0]/40 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md overflow-hidden">
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 text-center">
                <h3 
                  className={`${cormorant.className} text-xl sm:text-2xl md:text-3xl text-[#4a5d4e] mb-3 sm:mb-4 font-light`}
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}
                >
                  Share Our Wedding Website
                </h3>
                <p 
                  className={`${cormorant.className} text-[#4a5d4e]/85 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed font-light`}
                  style={{ 
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                  }}
                >
                  Spread the word about {groomNickname} & {brideNickname}'s wedding celebration. Share this QR code with friends and family so they can join the celebration.
                </p>
                <div className="mx-auto inline-flex flex-col items-center bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-[#4a5d4e]/30 mb-4 sm:mb-6">
                  <div className="mb-3 p-3 rounded-lg bg-white border border-[#4a5d4e]/30">
                    <QRCodeCanvas 
                      id="snapshare-qr" 
                      value={websiteUrl} 
                      size={isMobile ? 140 : 180} 
                      includeMargin 
                      className="bg-white" 
                      fgColor="#4a5d4e"
                      bgColor="#FFFFFF"
                    />
                  </div>
                  <button
                    onClick={downloadQRCode}
                    className={`${cormorant.className} flex items-center gap-2 mx-auto px-4 py-2 rounded-sm bg-[#4a5d4e] text-white hover:bg-[#3d4d3f] transition-colors text-xs sm:text-sm font-semibold shadow-sm`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download QR</span>
                  </button>
                </div>
                <p 
                  className={`${cormorant.className} text-[#4a5d4e]/85 text-xs sm:text-sm leading-relaxed font-light`}
                  style={{ 
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                  }}
                >
                  Scan with any camera app to open the full invitation and schedule.
                </p>
              </div>
            </div>

            {/* Hashtags Section */}
            <div className="bg-[#FAF9F5]/98 backdrop-blur-md border border-[#D0D0D0]/40 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md overflow-hidden">
              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <h3 
                  className={`${cormorant.className} text-xl sm:text-2xl md:text-3xl text-[#4a5d4e] mb-3 sm:mb-4 text-center font-light`}
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}
                >
                  Use Our Hashtags
                </h3>
                <p 
                  className={`${cormorant.className} text-[#4a5d4e]/85 text-sm sm:text-base text-center mb-4 sm:mb-6 leading-relaxed font-light`}
                  style={{ 
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                  }}
                >
                  Tag your photos and posts with our wedding hashtags to join the celebration!
                </p>
                
                <div className="space-y-3 mb-4 sm:mb-6">
                  {hashtags.map((hashtag, index) => (
                    <div
                      key={index}
                      className="bg-white/50 rounded-lg p-3 sm:p-4 border border-[#D0D0D0]/40 hover:border-[#4a5d4e]/60 hover:bg-white/70 transition-all duration-300 shadow-sm"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <span className={`${cormorant.className} text-[#4a5d4e] font-semibold text-sm sm:text-base break-all flex-1 text-center sm:text-left`}>
                          {hashtag}
                        </span>
                        <button
                          onClick={() => copyHashtag(hashtag, index)}
                          className={`${cormorant.className} flex items-center gap-2 px-4 py-2 rounded-sm bg-[#4a5d4e] text-white hover:bg-[#3d4d3f] transition-colors text-xs sm:text-sm font-semibold shadow-sm whitespace-nowrap flex-shrink-0 ${
                            copiedHashtagIndex === index ? "bg-green-600 hover:bg-green-700" : ""
                          }`}
                        >
                          {copiedHashtagIndex === index ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={copyAllHashtags}
                  className={`${cormorant.className} w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm border border-[#4a5d4e]/30 text-[#4a5d4e] hover:bg-[#4a5d4e]/5 hover:border-[#4a5d4e]/40 transition-colors text-xs sm:text-sm font-semibold shadow-sm ${
                    copiedAllHashtags ? "bg-green-50 border-green-300 text-green-700" : ""
                  }`}
                >
                  {copiedAllHashtags ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>All Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy All Hashtags</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-[#FAF9F5]/98 backdrop-blur-md border border-[#D0D0D0]/40 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md overflow-hidden">
              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <h3 
                  className={`${cormorant.className} text-xl sm:text-2xl md:text-3xl text-[#4a5d4e] mb-3 sm:mb-4 text-center font-light`}
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}
                >
                  Share on Social Media
                </h3>
                <p 
                  className={`${cormorant.className} text-[#4a5d4e]/85 text-sm sm:text-base text-center mb-4 sm:mb-6 leading-relaxed font-light`}
                  style={{ 
                    letterSpacing: "0.02em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                  }}
                >
                  Help spread the word about {groomNickname} & {brideNickname}'s wedding celebration. Share the event across your favorite platforms.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => shareOnSocial("instagram")}
                    className={`${cormorant.className} flex items-center justify-center gap-2 bg-[#4a5d4e] text-white px-4 py-2.5 rounded-sm hover:bg-[#3d4d3f] transition-colors text-xs sm:text-sm font-semibold shadow-sm`}
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </button>
                  <button
                    onClick={() => shareOnSocial("facebook")}
                    className={`${cormorant.className} flex items-center justify-center gap-2 bg-[#4a5d4e] text-white px-4 py-2.5 rounded-sm hover:bg-[#3d4d3f] transition-colors text-xs sm:text-sm font-semibold shadow-sm`}
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </button>
                  <button
                    onClick={() => shareOnSocial("tiktok")}
                    className={`${cormorant.className} flex items-center justify-center gap-2 bg-[#4a5d4e] text-white px-4 py-2.5 rounded-sm hover:bg-[#3d4d3f] transition-colors text-xs sm:text-sm font-semibold shadow-sm`}
                  >
                    <Share2 className="w-4 h-4" />
                    <span>TikTok</span>
                  </button>
                  <button
                    onClick={() => shareOnSocial("twitter")}
                    className={`${cormorant.className} flex items-center justify-center gap-2 bg-[#4a5d4e] text-white px-4 py-2.5 rounded-sm hover:bg-[#3d4d3f] transition-colors text-xs sm:text-sm font-semibold shadow-sm`}
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Google Drive Section */}
            {driveLink && (
              <div className="bg-[#FAF9F5]/98 backdrop-blur-md border border-[#D0D0D0]/40 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md overflow-hidden">
                <div className="p-4 sm:p-5 md:p-6 lg:p-8 text-center">
                  <h3 
                    className={`${cormorant.className} text-xl sm:text-2xl md:text-3xl text-[#4a5d4e] mb-3 sm:mb-4 font-light`}
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.08)" }}
                  >
                    Upload Your Photos & Videos
                  </h3>
                  <p 
                    className={`${cormorant.className} text-[#4a5d4e]/85 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-light`}
                    style={{ 
                      letterSpacing: "0.02em",
                      textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                    }}
                  >
                    Help us capture our special day! Scan the QR or use the actions below to drop your clips into our shared Drive.
                  </p>
                  <div className="mx-auto inline-flex flex-col items-center bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-[#4a5d4e]/30 mb-4 sm:mb-6">
                    <div className="mb-3 p-3 rounded-lg bg-white border border-[#4a5d4e]/30">
                      <QRCodeCanvas 
                        id="drive-qr" 
                        value={driveLink || "https://drive.google.com/drive/folders/1kOrf64ay6vx0pIeIjavvWp31B8nFWowQ?usp=sharing"} 
                        size={isMobile ? 130 : 180} 
                        includeMargin 
                        className="bg-white" 
                        fgColor="#4a5d4e"
                        bgColor="#FFFFFF"
                      />
                    </div>
                    <p className={`${cormorant.className} text-[#4a5d4e] text-xs sm:text-sm`}>📱 Scan with your camera app</p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={copyDriveLink}
                      className={`${cormorant.className} flex items-center justify-center gap-2 px-4 py-2 rounded-sm border border-[#4a5d4e]/30 text-[#4a5d4e] hover:bg-[#4a5d4e]/5 hover:border-[#4a5d4e]/40 transition-colors text-xs sm:text-sm font-semibold shadow-sm ${
                        copiedDriveLink ? "bg-green-50 border-green-300 text-green-700" : ""
                      }`}
                    >
                      {copiedDriveLink ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={downloadDriveQRCode}
                      className={`${cormorant.className} flex items-center justify-center gap-2 px-4 py-2 rounded-sm bg-[#4a5d4e] text-white hover:bg-[#3d4d3f] transition-colors text-xs sm:text-sm font-semibold shadow-sm`}
                    >
                      <Download className="w-4 h-4" />
                      <span>Download QR</span>
                    </button>
                    <a
                      href={driveLink || "https://drive.google.com/drive/folders/1kOrf64ay6vx0pIeIjavvWp31B8nFWowQ?usp=sharing"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cormorant.className} flex items-center justify-center gap-2 px-4 py-2 rounded-sm border border-[#4a5d4e]/30 text-[#4a5d4e] hover:bg-[#4a5d4e]/5 hover:border-[#4a5d4e]/40 transition-colors text-xs sm:text-sm font-semibold shadow-sm`}
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Open Drive</span>
                    </a>
                  </div>
                  <p 
                    className={`${cormorant.className} text-[#4a5d4e]/85 text-xs sm:text-sm mt-3 leading-relaxed font-light`}
                    style={{ 
                      letterSpacing: "0.02em",
                      textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
                    }}
                  >
                    or tap "Open Drive" to access the Google Drive folder.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <div className="bg-[#FAF9F5]/98 backdrop-blur-md border border-[#D0D0D0]/40 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md p-6 sm:p-8 max-w-3xl mx-auto">
            <p 
              className={`${cormorant.className} text-[#4a5d4e]/85 text-sm sm:text-base leading-relaxed mb-4 font-light`}
              style={{ 
                letterSpacing: "0.02em",
                textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
              }}
            >
              Thank you for helping make {groomNickname} & {brideNickname}'s wedding celebration memorable. Your photos and messages create beautiful memories
              that will last a lifetime—keep sharing the joy throughout the evening.
            </p>
            <div 
              className={`${cormorant.className} text-[#4a5d4e] text-xs sm:text-sm font-light`}
              style={{ 
                letterSpacing: "0.02em",
                textShadow: "0 2px 8px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)"
              }}
            >
              See you in the celebration
            </div>
          </div>
        </div>
      </div>

      {/* Torn paper edge at bottom */}
      <TornPaperEdge position="bottom" />
    </Section>
  )
}