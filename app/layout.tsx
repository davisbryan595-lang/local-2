import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Local Lakefront - Waterfront Restoration",
  description:
    "Professional waterfront restoration, tree removal, and aquatic weed removal services in Polk, Lake, and Hernando Counties.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <div className="site-bg-video-container" aria-hidden="true">
          <video className="site-bg-video" autoPlay loop muted playsInline>
            <source src="https://videos.pexels.com/video-files/8985269/8985269-hd_2048_858_24fps.mp4" type="video/mp4" />
          </video>
          <div className="site-bg-overlay" />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
