"use client"

import { Trees, Droplets, Trash2 } from "lucide-react"

interface ServicesProps {
  scrollY: number
}

const services = [
  {
    icon: Trees,
    title: "Tree Removal",
    description: "Professional tree removal services for waterfront properties, ensuring safe and efficient clearing.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Droplets,
    title: "Aquatic Weed Removal",
    description: "Expert aquatic weed management to restore water clarity and improve lakefront aesthetics.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Trash2,
    title: "Junk & Debris Removal",
    description: "Complete debris removal and cleanup services for pristine waterfront restoration.",
    color: "from-accent/20 to-accent/5",
  },
]

export default function Services({ scrollY }: ServicesProps) {
  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
      <div className="section-bg services-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skilled waterfront solutions — fast, safe, and sustainable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-xl border border-primary/20 bg-gradient-to-br ${service.color} hover-float transition-all duration-300 cursor-pointer`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon */}
                <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon size={32} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Learn More</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
