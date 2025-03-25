"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

type Project = {
  id: string
  title: string
  category: "application" | "web-development" | "ui-ux"
  image: string
}

export default function PortfolioSection() {
  const [filter, setFilter] = useState<string>("all")

  const projects: Project[] = [
    { id: "1", title: "Nagrik App", category: "application", image: "/placeholder.svg?height=200&width=300" },
    { id: "2", title: "Ambition Guru", category: "application", image: "/placeholder.svg?height=200&width=300" },
    { id: "3", title: "Sooka", category: "application", image: "/placeholder.svg?height=200&width=300" },
    { id: "4", title: "Takmo", category: "application", image: "/placeholder.svg?height=200&width=300" },
    { id: "5", title: "Saara", category: "application", image: "/placeholder.svg?height=200&width=300" },
    { id: "6", title: "iFood", category: "application", image: "/placeholder.svg?height=200&width=300" },
    { id: "7", title: "MeroDate", category: "application", image: "/placeholder.svg?height=200&width=300" },
    { id: "8", title: "Weather App", category: "application", image: "/placeholder.svg?height=200&width=300" },
    { id: "9", title: "Music App", category: "application", image: "/placeholder.svg?height=200&width=300" },
    { id: "10", title: "Movie App", category: "application", image: "/placeholder.svg?height=200&width=300" },
    {
      id: "11",
      title: "GitHub Users Search App",
      category: "web-development",
      image: "/placeholder.svg?height=200&width=300",
    },
    { id: "12", title: "Car Zone", category: "web-development", image: "/placeholder.svg?height=200&width=300" },
    { id: "13", title: "Movie", category: "web-development", image: "/placeholder.svg?height=200&width=300" },
    { id: "14", title: "Fitness Zone", category: "web-development", image: "/placeholder.svg?height=200&width=300" },
    { id: "15", title: "E-Commerce", category: "web-development", image: "/placeholder.svg?height=200&width=300" },
    { id: "16", title: "Netflix Clone", category: "web-development", image: "/placeholder.svg?height=200&width=300" },
    { id: "17", title: "Houseman", category: "ui-ux", image: "/placeholder.svg?height=200&width=300" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

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
            Portfolio
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-400"></span>
          </h2>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-4 mt-8 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === "all" ? "bg-amber-500 text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("application")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === "application" ? "bg-amber-500 text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"}`}
          >
            Applications
          </button>
          <button
            onClick={() => setFilter("web-development")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === "web-development" ? "bg-amber-500 text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"}`}
          >
            Web Development
          </button>
          <button
            onClick={() => setFilter("ui-ux")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === "ui-ux" ? "bg-amber-500 text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"}`}
          >
            UI/UX
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="group relative overflow-hidden rounded-lg bg-zinc-800"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-300 capitalize">{project.category.replace("-", " ")}</p>
                  <div className="mt-4">
                    <button className="flex items-center gap-1 text-sm text-amber-400 hover:text-amber-300 transition-colors">
                      View Project <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

