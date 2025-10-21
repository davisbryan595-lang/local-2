"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

interface NavbarProps {
  scrollY: number
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const scrolled = scrollY > 24

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-molten nav-scrolled' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#top" className="block">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5c758e804cba4fa3a488e9088887877b%2Fa9707f64ddf549f99a2b80f188df10f0?format=webp&width=800"
                alt="Local Lakefront logo"
                className="logo-image w-28 h-28 md:w-32 md:h-32 object-contain animate-float animate-glow-pulse hover-glow"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#top" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
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
            <a href="#top" className="block text-foreground hover:text-primary transition-colors py-2">Home</a>
            <a href="#services" className="block text-foreground hover:text-primary transition-colors py-2">Services</a>
            <a href="#gallery" className="block text-foreground hover:text-primary transition-colors py-2">Gallery</a>
            <a href="#pricing" className="block text-foreground hover:text-primary transition-colors py-2">Pricing</a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors py-2">Contact</a>
            <a href="tel:863-215-9440" className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg w-fit">
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        )}
      </div>

    </nav>
  )
}
