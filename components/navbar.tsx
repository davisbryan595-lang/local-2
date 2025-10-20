"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

interface NavbarProps {
  scrollY: number
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={`nav-molten fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "border-b border-primary/20" : ""
      }`}
    >
      <div className="nav-snake-bg" aria-hidden="true">
        <video className="nav-snake-video" autoPlay loop muted playsInline>
          <source src="https://videos.pexels.com/video-files/8985269/8985269-hd_2048_858_24fps.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <path
                  d="M30 40 Q40 30 50 35 Q60 40 65 50 Q70 60 60 70 Q50 75 40 70 Q30 65 25 55"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Local Lakefront</h1>
              <p className="text-xs text-muted-foreground">Waterfront Perfected</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a
              href="tel:863-215-9440"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover-glow"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-primary/20">
            <a href="#services" className="block text-foreground hover:text-primary transition-colors py-2">
              Services
            </a>
            <a href="#gallery" className="block text-foreground hover:text-primary transition-colors py-2">
              Gallery
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors py-2">
              Contact
            </a>
            <a
              href="tel:863-215-9440"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg w-fit"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        )}
      </div>

    </nav>
  )
}
