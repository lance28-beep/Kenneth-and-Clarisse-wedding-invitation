"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/section"
import { Cormorant_Garamond } from "next/font/google"
import { siteConfig } from "@/content/site"
import { TornPaperEdge } from "@/components/torn-paper-edge"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
})

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "When is the wedding?",
    answer:
      `Our wedding will be held on ${siteConfig.ceremony.date} (${siteConfig.ceremony.day}) at ${siteConfig.ceremony.time}. We kindly ask guests to arrive by ${siteConfig.ceremony.guestsTime} to help us begin promptly.`,
  },
  {
    question: "Where will the ceremony and reception take place?",
    answer:
      `The ceremony will be held at ${siteConfig.ceremony.location}. The reception will follow at ${siteConfig.reception.location}. You can find detailed directions, addresses, and maps in the Details section above.`,
  },
  {
    question: "What time should I arrive?",
    answer:
      `Kindly arrive by ${siteConfig.ceremony.guestsTime} so we can begin the ceremony promptly at exactly ${siteConfig.ceremony.time}. The entourage will arrive at ${siteConfig.ceremony.entourageTime}. Your punctuality means so much to us!`,
  },
  {
    question: "How do I RSVP?",
    answer:
      `Please RSVP on or before ${siteConfig.details.rsvp.deadline} through the RSVP section on this invitation. Simply search for your name in the guest list, confirm your attendance, and let us know if you'll be bringing companions. We kindly ask for your response to help us prepare for the big day.`,
  },
  {
    question: "Can I bring a plus one or additional guests?",
    answer:
      "Each invitation includes a specific number of reserved seats. Please check your invitation details in the RSVP section. If you need to request additional seats, you can use the 'Request to Join' feature, and we'll do our best to accommodate based on availability.",
  },
  {
    question: "Is there a dress code?",
    answer:
      `Yes! We kindly request our guests to dress in formal attire matching our Purple & Sage motif. Please see the Attire section in Details for specific guidelines:\n\nPrincipal Sponsors:\n• Male: ${siteConfig.dressCode.sponsors.male}\n• Female: ${siteConfig.dressCode.sponsors.female}\n\nGuests:\n• Gents: ${siteConfig.dressCode.guests.gents}\n• Ladies: ${siteConfig.dressCode.guests.ladies}`,
  },
  {
    question: "Will there be assigned seating?",
    answer:
      "Yes, there will be assigned seating at the reception. Your table number will be displayed in the Book of Guests section once your RSVP is confirmed. Our reception team will gladly guide you to your table so you can relax and enjoy the celebration.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, parking is available at both venues. Please follow the parking signs and instructions from our venue coordinators.",
  },
  {
    question: "What should I give as a gift?",
    answer:
      "With all that we have, we are truly blessed. Your presence and prayers are what we request most. However, if you desire to give nonetheless, a monetary gift to help us begin our new life together would be humbly appreciated. You can find our gift registry information in the Gift Guide section.",
  },
  {
    question: "Can I take photos and videos during the ceremony?",
    answer:
      "We have a professional photographer and videographer capturing our special moments. We kindly ask that you keep your phones on silent and refrain from taking photos during the ceremony. However, we'd love to see your photos and videos from the reception! Please check the Snap & Share section for details on how to upload them.",
  },
  {
    question: "Where can I access wedding photos and resources?",
    answer:
      "You can access all our wedding photos, videos, and other resources through our [DRIVE_LINK]Google Drive folder[/DRIVE_LINK]. Feel free to download and share your favorite memories!",
  },
  {
    question: "What if I have dietary restrictions or allergies?",
    answer:
      "Please let us know about any dietary restrictions or allergies when you RSVP. We want to ensure everyone can enjoy the celebration comfortably.",
  },
  {
    question: "Will the wedding be indoors or outdoors?",
    answer:
      "Both the ceremony and reception will be held at covered venues, so we're prepared for any weather. However, we recommend checking the weather forecast and dressing accordingly.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section
      id="faq"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-[#FAF9F5]"
    >
      {/* Torn paper edge at top */}
      <TornPaperEdge position="top" />
      
      {/* Paper texture background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #4a5d4e 2px, #4a5d4e 4px),
                            repeating-linear-gradient(90deg, transparent, transparent 2px, #4a5d4e 2px, #4a5d4e 4px)`,
          }}
        />
      </div>
      
      {/* Torn paper edge at bottom */}
      {/* <TornPaperEdge position="bottom" /> */}

      {/* Section Header */}
      <div className="relative z-10 text-center mb-6 sm:mb-9 md:mb-12 px-3 sm:px-4">
        {/* Small label */}
        <p
          className={`${cormorant.className} text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] text-[#4a5d4e] mb-2 font-light`}
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
        >
          Questions & Answers
        </p>

        <h2
          className="style-script-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#4a5d4e] mb-1.5 sm:mb-3 md:mb-4"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
        >
          Frequently Asked Questions
        </h2>

        {/* Simple divider */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-[#4a5d4e]/40 to-transparent" />
          <div className="w-1.5 h-1.5 bg-[#4a5d4e]/60 rounded-full" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-[#4a5d4e]/40 to-transparent" />
        </div>
      </div>

      {/* FAQ content */}
      <div className="relative z-10 max-w-4xl mx-auto px-3 sm:px-5">
        {/* Main card */}
        <div className="relative bg-[#FAF9F5]/98 backdrop-blur-md border border-[#D0D0D0]/40 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md overflow-hidden">
          {/* Paper texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #4a5d4e 2px, #4a5d4e 4px),
                              repeating-linear-gradient(90deg, transparent, transparent 2px, #4a5d4e 2px, #4a5d4e 4px)`,
            }}
          />
          
          {/* FAQ items */}
          <div className="relative p-2.5 sm:p-4 md:p-5 lg:p-6">
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                const contentId = `faq-item-${index}`
                return (
                  <div
                    key={index}
                    className="rounded-lg sm:rounded-xl border border-[#D0D0D0]/40 bg-white/50 hover:border-[#4a5d4e]/60 hover:bg-white/70 transition-all duration-300 overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="group w-full px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#4a5d4e]/50 focus-visible:ring-offset-2 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className={`${cormorant.className} font-semibold text-[#243127] pr-2 sm:pr-3 md:pr-4 text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed transition-colors duration-200 group-hover:text-[#4a5d4e]`} style={{ fontWeight: 300 }}>
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#4a5d4e]/60 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#4a5d4e]" : ""} w-4 h-4 sm:w-5 sm:h-5`}
                        aria-hidden
                      />
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-white/30 border-t border-[#D0D0D0]/40">
                          {item.answer.includes("[RSVP_LINK]") ? (
                            <p className={`${cormorant.className} text-[#243127] font-medium leading-relaxed sm:leading-loose text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre-line tracking-wide`} style={{ fontWeight: 300 }}>
                              {item.answer.split("[RSVP_LINK]")[0]}
                              <a 
                                href="#guest-list" 
                                className="text-[#4a5d4e] underline font-bold hover:text-[#4a5d4e]/80 transition-colors"
                                onClick={(e) => {
                                  e.preventDefault()
                                  document.getElementById('guest-list')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                              >
                                {item.answer.match(/\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/)?.[1]}
                              </a>
                              {item.answer.split("[/RSVP_LINK]")[1]}
                            </p>
                          ) : item.answer.includes("[DRIVE_LINK]") ? (
                            <p className={`${cormorant.className} text-[#243127] font-medium leading-relaxed sm:leading-loose text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre-line tracking-wide`} style={{ fontWeight: 300 }}>
                              {item.answer.split("[DRIVE_LINK]")[0]}
                              <a 
                                href="https://drive.google.com/drive/folders/1kOrf64ay6vx0pIeIjavvWp31B8nFWowQ?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#4a5d4e] underline font-bold hover:text-[#4a5d4e]/80 transition-colors"
                              >
                                {item.answer.match(/\[DRIVE_LINK\](.*?)\[\/DRIVE_LINK\]/)?.[1]}
                              </a>
                              {item.answer.split("[/DRIVE_LINK]")[1]}
                            </p>
                          ) : (
                            <p className={`${cormorant.className} text-[#243127] font-medium leading-relaxed sm:leading-loose text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre-line tracking-wide`} style={{ fontWeight: 300 }}>
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
