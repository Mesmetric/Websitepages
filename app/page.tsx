"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { useAuth } from "@/context/auth-context"
import AboutSection from "@/components/about-section"
import ResumeSection from "@/components/resume-section"
import PortfolioSection from "@/components/portfolio-section"
import VideosSection from "@/components/videos-section"
import ContactSection from "@/components/contact-section"
import LoginSection from "@/components/login-section"

// Social media icon mapping
const socialIcons: Record<string, React.ReactNode> = {
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  ),
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  ),
  youtube: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  ),
  dribbble: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
    </svg>
  ),
  website: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  codepen: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
      <line x1="12" y1="22" x2="12" y2="15.5"></line>
      <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
      <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
      <line x1="12" y1="2" x2="12" y2="8.5"></line>
    </svg>
  ),
  figma: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
    </svg>
  ),
}

export default function Home() {
  const { siteData, isAuthenticated } = useAuth()
  const [activeSection, setActiveSection] = useState("about")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Filter enabled social links
  const enabledSocialLinks = siteData.customSocialLinks.filter((link) => link.enabled)

  // Render social icon based on icon name
  const renderSocialIcon = (iconName: string) => {
    return socialIcons[iconName] || socialIcons.website
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white relative">
      {/* Gradient lines for edges */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Profile Sidebar */}
        <div className="lg:w-1/4 lg:sticky lg:top-8 lg:self-start">
          <Card className="bg-zinc-900/80 backdrop-blur-sm border-none rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,200,0,0.15)]">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <div className="bg-zinc-800 rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                  <Image
                    src={siteData.profileImage || "/placeholder.svg"}
                    alt={siteData.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-zinc-900">
                  <motion.div
                    className="w-full h-full bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(72, 187, 120, 0.7)",
                        "0 0 0 10px rgba(72, 187, 120, 0)",
                        "0 0 0 0 rgba(72, 187, 120, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 0.5, 1],
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 0.5,
                    }}
                  />
                </div>
              </div>

              <motion.h1
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {siteData.name}
              </motion.h1>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-black border-none px-4 py-1 mb-8 font-medium"
                >
                  {siteData.title}
                </Badge>
              </motion.div>

              <div className="w-full space-y-4">
                <motion.div
                  className="flex items-center gap-3 bg-zinc-800/50 p-3 rounded-lg hover:bg-zinc-800 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-zinc-400 text-sm">EMAIL</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-sm">{siteData.email}</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 bg-zinc-800/50 p-3 rounded-lg hover:bg-zinc-800 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-zinc-400 text-sm">PHONE</span>
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span className="text-sm">{siteData.phone}</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 bg-zinc-800/50 p-3 rounded-lg hover:bg-zinc-800 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-zinc-400 text-sm">LOCATION</span>
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span className="text-sm">{siteData.location}</span>
                </motion.div>
              </div>

              <div className="flex gap-3 mt-6 flex-wrap">
                {enabledSocialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:bg-amber-500 hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={link.name}
                  >
                    {renderSocialIcon(link.icon)}
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          <Card className="bg-zinc-900/80 backdrop-blur-sm border-none rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all duration-500">
            <CardContent className="p-0">
              {/* Navigation */}
              <div
                className={`flex justify-end p-4 bg-zinc-800/50 backdrop-blur-md sticky top-0 z-10 transition-all duration-300 rounded-t-xl ${scrollY > 50 ? "shadow-md" : ""}`}
              >
                <nav className="flex gap-6">
                  <motion.button
                    onClick={() => setActiveSection("about")}
                    className={`text-sm font-medium relative ${activeSection === "about" ? "text-amber-400" : "text-gray-300 hover:text-amber-300"}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    About
                    {activeSection === "about" && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400"
                        layoutId="activeSection"
                      />
                    )}
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveSection("resume")}
                    className={`text-sm font-medium relative ${activeSection === "resume" ? "text-amber-400" : "text-gray-300 hover:text-amber-300"}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Resume
                    {activeSection === "resume" && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400"
                        layoutId="activeSection"
                      />
                    )}
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveSection("portfolio")}
                    className={`text-sm font-medium relative ${activeSection === "portfolio" ? "text-amber-400" : "text-gray-300 hover:text-amber-300"}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Portfolio
                    {activeSection === "portfolio" && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400"
                        layoutId="activeSection"
                      />
                    )}
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveSection("videos")}
                    className={`text-sm font-medium relative ${activeSection === "videos" ? "text-amber-400" : "text-gray-300 hover:text-amber-300"}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Videos
                    {activeSection === "videos" && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400"
                        layoutId="activeSection"
                      />
                    )}
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveSection("contact")}
                    className={`text-sm font-medium relative ${activeSection === "contact" ? "text-amber-400" : "text-gray-300 hover:text-amber-300"}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact
                    {activeSection === "contact" && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400"
                        layoutId="activeSection"
                      />
                    )}
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveSection("login")}
                    className={`text-sm font-medium relative ${activeSection === "login" ? "text-amber-400" : "text-gray-300 hover:text-amber-300"}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isAuthenticated ? "Admin" : "Login"}
                    {activeSection === "login" && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400"
                        layoutId="activeSection"
                      />
                    )}
                  </motion.button>
                </nav>
              </div>

              {/* Content Sections */}
              <AnimatePresence mode="wait">
                {activeSection === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AboutSection />
                  </motion.div>
                )}

                {activeSection === "resume" && (
                  <motion.div
                    key="resume"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ResumeSection />
                  </motion.div>
                )}

                {activeSection === "portfolio" && (
                  <motion.div
                    key="portfolio"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PortfolioSection />
                  </motion.div>
                )}

                {activeSection === "videos" && (
                  <motion.div
                    key="videos"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <VideosSection />
                  </motion.div>
                )}

                {activeSection === "contact" && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ContactSection />
                  </motion.div>
                )}

                {activeSection === "login" && (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LoginSection />
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

