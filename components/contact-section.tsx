"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, MapPin, ExternalLink } from "lucide-react"
import { useAuth } from "@/context/auth-context"

export default function ContactSection() {
  const { siteData } = useAuth()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    // Here you would typically send the form data to a server
    alert("Message sent successfully!")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

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

  // Create Google Maps URL from location
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteData.location)}`

  return (
    <div className="p-6">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <h2 className="text-2xl font-bold mb-4 relative inline-block">
            Contact
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-400"></span>
          </h2>
        </motion.div>

        <motion.div variants={item} className="mt-8">
          <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8 group">
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
              <div className="text-center p-4 bg-black/50 backdrop-blur-sm rounded-lg">
                <MapPin className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                <h3 className="font-semibold">{siteData.location}</h3>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-amber-400 flex items-center justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View on Google Maps <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
        </motion.div>

        <motion.form variants={item} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Full name"
                value={formState.name}
                onChange={handleChange}
                required
                className="bg-zinc-800/50 border-zinc-700 focus:border-amber-500 focus:ring-amber-500"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={formState.email}
                onChange={handleChange}
                required
                className="bg-zinc-800/50 border-zinc-700 focus:border-amber-500 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formState.subject}
              onChange={handleChange}
              required
              className="bg-zinc-800/50 border-zinc-700 focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formState.message}
              onChange={handleChange}
              required
              className="min-h-[150px] bg-zinc-800/50 border-zinc-700 focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  )
}

