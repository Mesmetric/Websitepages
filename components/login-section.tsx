"use client"

import { motion } from "framer-motion"
import { useAuth } from "@/context/auth-context"
import LoginForm from "@/components/admin/login-form"
import AdminDashboard from "@/components/admin/dashboard"

export default function LoginSection() {
  const { isAuthenticated } = useAuth()

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
            {isAuthenticated ? "Admin Dashboard" : "Admin Login"}
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-400"></span>
          </h2>
        </motion.div>

        <motion.div variants={item} className="mt-8">
          {isAuthenticated ? <AdminDashboard /> : <LoginForm />}
        </motion.div>
      </motion.div>
    </div>
  )
}

