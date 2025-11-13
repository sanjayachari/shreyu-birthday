"use client"

import { useEffect, useState } from "react"
import Confetti from "@/components/confetti"
import BirthdayHero from "@/components/birthday-hero"
import Sparkles from "@/components/sparkles"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 relative">
      {/* Animated background blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Sparkles */}
      <Sparkles />

      {/* Confetti */}
      <Confetti />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <BirthdayHero />
      </div>
    </div>
  )
}
