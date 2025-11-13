"use client"

import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  x: number
  y: number
  rotation: number
  delay: number
  duration: number
  color: string
  width: number
  height: number
}

export default function Confetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const colors = [
      "#FFD700", // Gold
      "#FF1493", // Deep Pink
      "#00CED1", // Dark Turquoise
      "#32CD32", // Lime Green
      "#FF6347", // Tomato
      "#9370DB", // Medium Purple
      "#FFB6C1", // Light Pink
      "#87CEEB", // Sky Blue
    ]

    const generateConfetti = () => {
      const pieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10,
        rotation: Math.random() * 360,
        delay: Math.random() * 0.5,
        duration: Math.random() * 2 + 2.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: Math.random() * 10 + 4,
        height: Math.random() * 10 + 4,
      }))
      setConfetti(pieces)
    }

    generateConfetti()

    // Regenerate confetti every 4 seconds
    const interval = setInterval(generateConfetti, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.width}px`,
            height: `${piece.height}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confetti-fall ${piece.duration}s linear forwards`,
            animationDelay: `${piece.delay}s`,
            borderRadius: Math.random() > 0.5 ? "50%" : "0%",
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  )
}
