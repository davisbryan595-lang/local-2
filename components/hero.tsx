"use client"

import { useState } from "react"
import { ChevronDown, Phone } from "lucide-react"

interface HeroProps {
  scrollY: number
}

export default function Hero({ scrollY }: HeroProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section className="relative w-full h-screen overflow-hidden pt-20">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=lakefront%20restoration%20waterfront%20cleanup%20trees%20aquatic%20weed%20removal)",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <svg viewBox="0 0 200 200" className="w-32 h-32 mx-auto" fill="none">
            <defs>
              <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(85, 239, 196)" />
                <stop offset="100%" stopColor="rgb(45, 212, 191)" />
              </linearGradient>
            </defs>
            {/* Snake body */}
            <path
              d="M50 80 Q70 60 90 70 Q110 80 100 100 Q90 120 70 110 Q50 100 50 80"
              fill="url(#snakeGradient)"
              opacity="0.9"
            />
            <path
              d="M100 100 Q120 90 140 100 Q150 110 140 130 Q120 140 100 130"
              fill="url(#snakeGradient)"
              opacity="0.8"
            />
            {/* Head */}
            <circle cx="140" cy="100" r="8" fill="url(#snakeGradient)" />
            <circle cx="143" cy="98" r="2" fill="white" />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 text-balance">Local Lakefront</h1>
        <p className="text-xl md:text-2xl text-primary/80 mb-2 font-semibold">Your Waterfront, Perfected.</p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Professional waterfront restoration, tree removal, and aquatic weed removal services
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="tel:863-215-9440"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover-glow text-lg"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Phone size={20} />
            Call Now: 863-215-9440
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-all"
          >
            Get a Quote
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>

      {/* Animated Snake at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-20">
        <svg
          viewBox="0 0 1000 100"
          className="w-full h-full animate-snake-slither"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 50 Q50 30 100 50 Q150 70 200 50 Q250 30 300 50 Q350 70 400 50 Q450 30 500 50 Q550 70 600 50 Q650 30 700 50 Q750 70 800 50 Q850 30 900 50 Q950 70 1000 50"
            stroke="currentColor"
            strokeWidth="8"
            className="text-primary opacity-40"
          />
          <circle cx="1000" cy="50" r="4" fill="currentColor" className="text-primary" />
        </svg>
      </div>
    </section>
  )
}
