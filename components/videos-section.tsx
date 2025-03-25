"use client"

import { motion } from "framer-motion"
import { Calendar, ExternalLink } from "lucide-react"

export default function VideosSection() {
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

  const videos = [
    {
      id: 1,
      title: "Flutter Vs. Flock: Cross-Platform Evaluation",
      date: "Nov 18, 2023",
      description:
        "Explore the differences between Flutter and Flock, a new tool focused on faster development and compatibility with cross-platform frameworks.",
      image: "/placeholder.svg?height=200&width=350",
      gradient: "from-blue-900 to-purple-900",
    },
    {
      id: 2,
      title: "Flutter's Impact On Future Cross-Platform Apps",
      date: "Nov 15, 2023",
      description:
        "Explore Flutter's growing influence on cross-platform app development in 2024 and its future potential across mobile and IoT platforms.",
      image: "/placeholder.svg?height=200&width=350",
      gradient: "from-purple-800 to-purple-600",
    },
    {
      id: 3,
      title: "Building Responsive UIs with Flutter",
      date: "Oct 22, 2023",
      description:
        "Learn how to create beautiful, responsive user interfaces that work across multiple screen sizes using Flutter's flexible layout system.",
      image: "/placeholder.svg?height=200&width=350",
      gradient: "from-cyan-800 to-blue-600",
    },
    {
      id: 4,
      title: "State Management in Flutter: A Complete Guide",
      date: "Oct 10, 2023",
      description:
        "A comprehensive overview of different state management approaches in Flutter, from simple solutions to advanced patterns.",
      image: "/placeholder.svg?height=200&width=350",
      gradient: "from-amber-700 to-orange-600",
    },
  ]

  return (
    <div className="p-6">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <h2 className="text-2xl font-bold mb-4 relative inline-block">
            Videos
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-400"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-xl bg-zinc-800 hover:shadow-[0_0_15px_rgba(255,200,0,0.1)] transition-all duration-300"
            >
              <div
                className={`aspect-video w-full overflow-hidden bg-gradient-to-r ${video.gradient} p-6 flex items-center justify-center`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white text-center">{video.title}</h3>
              </div>
              <div className="p-4">
                <div className="flex items-center text-sm text-zinc-400 mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span>{video.date}</span>
                </div>
                <p className="text-sm text-zinc-300 mb-4">{video.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-400">Videos</span>
                  <button className="flex items-center gap-1 text-sm text-amber-400 hover:text-amber-300 transition-colors">
                    Watch Video <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

