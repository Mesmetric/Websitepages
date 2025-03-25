"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Lock, User } from "lucide-react"

export default function LoginForm() {
  const { login } = useAuth()
  const [formData, setFormData] = useState({ name: "", password: "" })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const success = login(formData.name, formData.password)
    if (!success) {
      setError("Invalid credentials. Please try again.")
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-zinc-700/30">
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-md text-red-200 text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Admin Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="pl-10 bg-zinc-900/80 border-zinc-700"
                placeholder="Enter admin name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="pl-10 bg-zinc-900/80 border-zinc-700"
                placeholder="Enter password"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-black">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

