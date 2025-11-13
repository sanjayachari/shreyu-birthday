import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Happy Birthday Shreyuu! 🎉",
  description: "A joyful birthday celebration with sparks and confetti!",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/happy-person-celebrating-birthday-smiling.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/happy-person-celebrating-birthday-smiling.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/happy-person-celebrating-birthday-smiling.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/happy-person-celebrating-birthday-smiling.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
