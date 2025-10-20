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
      {/* Background Image */}
      <div className="section-bg hero-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">

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

    </section>
  )
}
