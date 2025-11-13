"use client"

import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  hue: number
}

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 2,
        hue: Math.random() * 60 + 0, // Warm colors (red to yellow)
      }))
      setSparkles(newSparkles)
    }

    generateSparkles()

    // Regenerate sparkles every 3 seconds for continuous effect
    const interval = setInterval(generateSparkles, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full animate-sparkle-float"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: `hsl(${sparkle.hue}, 100%, 60%)`,
            boxShadow: `0 0 ${sparkle.size * 3}px hsl(${sparkle.hue}, 100%, 60%)`,
            animation: `sparkle-float ${sparkle.duration}s ease-out forwards`,
            animationDelay: `${sparkle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
