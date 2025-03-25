"use client"

import { motion } from "framer-motion"
import { useAuth } from "@/context/auth-context"
import Image from "next/image"

export default function AboutSection() {
  const { siteData } = useAuth()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="p-6">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <h2 className="text-2xl font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-400"></span>
          </h2>
        </motion.div>

        <motion.div variants={item} className="mt-6 space-y-4 text-gray-300">
          <p className="leading-relaxed">{siteData.about}</p>
          <p className="leading-relaxed">
            If you're seeking a skilled Flutter developer to breathe life into your project and exceed your
            expectations, I am here to collaborate and create magic together. Reach out, and let's transform your vision
            into a reality!
          </p>
        </motion.div>

        <motion.div variants={item} className="mt-12">
          <h2 className="text-2xl font-bold mb-4 relative inline-block">
            What I'm Doing
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-400"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div
            variants={item}
            className="group bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,200,0,0.1)] cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="text-amber-400">
                <div className="w-12 h-12 border border-amber-400/30 rounded-lg flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  Mobile Apps
                </h3>
                <p className="text-gray-400">Professional development of applications for Android and iOS.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="group bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,200,0,0.1)] cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="text-amber-400">
                <div className="w-12 h-12 border border-amber-400/30 rounded-lg flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18" />
                    <path d="M13 3v18" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  Web Development
                </h3>
                <p className="text-gray-400">High-quality development of sites at the professional level.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="group bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,200,0,0.1)] cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="text-amber-400">
                <div className="w-12 h-12 border border-amber-400/30 rounded-lg flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  UI/UX Design
                </h3>
                <p className="text-gray-400">The most modern and high-quality design made at a professional level.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="group bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,200,0,0.1)] cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="text-amber-400">
                <div className="w-12 h-12 border border-amber-400/30 rounded-lg flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  Backend Development
                </h3>
                <p className="text-gray-400">
                  High-performance backend services designed for scalability and seamless user experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="mt-12">
          <h2 className="text-2xl font-bold mb-4 relative inline-block">
            Skills
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-400"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          {siteData.skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden mb-2">
                <Image
                  src={skill.logo || "/placeholder.svg?height=64&width=64"}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

