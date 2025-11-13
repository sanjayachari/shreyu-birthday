"use client"

import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

export default function BirthdayHero() {
  const [animate, setAnimate] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Happy Birthday"

  useEffect(() => {
    setAnimate(true)
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)

    const imageTimer = setTimeout(() => {
      setShowImage(true)
    }, 2000)

    return () => {
      clearInterval(typingInterval)
      clearTimeout(imageTimer)
    }
  }, [])

  // 🎉 Celebration effect function
  const triggerCelebration = () => {
    const duration = 2 * 1000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 4,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        },
      })
      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()
  }

  return (
    <div className="text-center px-4 py-8">
      <div className="space-y-4 sm:space-y-6">
        {/* Animated Emoji */}
        <div className="text-6xl sm:text-8xl animate-bounce">🎉</div>

        {/* Main Title */}
        <div className="space-y-2 sm:space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white drop-shadow-2xl tracking-tighter min-h-[1em] flex items-center justify-center">
            <span>{displayedText}</span>
            {displayedText.length < fullText.length && (
              <span className="ml-1 inline-block w-[0.08em] h-[1em] bg-white animate-pulse" />
            )}
          </h1>

          <h2
            className={`text-3xl sm:text-5xl lg:text-7xl font-black transition-all duration-1000 transform ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              background: "linear-gradient(135deg, #FFD700, #FFA500, #FF1493)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(255,255,255,0.5)",
            }}
          >
            Shreyuu ✨
          </h2>
        </div>

        {showImage && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-spin opacity-75"
                style={{ animationDuration: "3s" }}
              />
              <img
                src="/happy-person-celebrating-birthday-smiling.jpg"
                alt="Birthday celebration"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-8 border-white shadow-2xl animate-[scaleUp_0.6s_ease-out] drop-shadow-2xl"
              />
            </div>
          </div>
        )}

        <p
          className={`text-lg sm:text-2xl lg:text-3xl text-white/90 font-medium drop-shadow-lg transition-all duration-1000 delay-300 transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Another year of magic and moments! 🌟
        </p>

        {/* 🎊 Celebration Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-12 transition-all duration-1000 delay-500 transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={triggerCelebration}
            className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-purple-600 font-bold text-lg rounded-full hover:scale-110 hover:shadow-2xl transition-all duration-300 active:scale-95"
          >
            Celebrate 🎊
          </button>

          <button
            onClick={triggerCelebration}
            className="px-8 py-4 sm:px-10 sm:py-5 bg-white/20 backdrop-blur-md text-white font-bold text-lg rounded-full border-2 border-white hover:bg-white/30 hover:scale-110 transition-all duration-300 active:scale-95"
          >
            Share Joy 💝
          </button>
        </div>

        <div
          className={`mt-12 sm:mt-16 flex justify-center gap-4 text-4xl sm:text-5xl animate-pulse transition-all duration-1000 delay-700 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>🎈</span>
          <span>🎁</span>
          <span>🎈</span>
        </div>
      </div>
    </div>
  )
}
