"use client"

import { useAuth } from "@/context/auth-context"
import LoginForm from "@/components/admin/login-form"
import AdminDashboard from "@/components/admin/dashboard"

export default function AdminPage() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center p-4">
      <div className="container max-w-4xl mx-auto">{isAuthenticated ? <AdminDashboard /> : <LoginForm />}</div>
    </div>
  )
}

