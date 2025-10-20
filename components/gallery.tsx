"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryProps {
  scrollY: number
}

const beforeAfterPairs = [
  {
    title: "Lakefront Restoration",
    before: "/overgrown-lakefront-before-cleanup.jpg",
    after: "/restored-clean-lakefront-after-cleanup.jpg",
  },
  {
    title: "Tree Removal Project",
    before: "/dense-trees-waterfront-before-removal.jpg",
    after: "/cleared-waterfront-after-tree-removal.jpg",
  },
  {
    title: "Aquatic Weed Removal",
    before: "/lake-covered-aquatic-weeds-before.jpg",
    after: "/clear-water-lake-after-weed-removal.jpg",
  },
]

const additionalImages = [
  "https://images.pexels.com/photos/19872375/pexels-photo-19872375.jpeg",
  "https://images.pexels.com/photos/33108373/pexels-photo-33108373.jpeg",
  "https://images.pexels.com/photos/30108585/pexels-photo-30108585.jpeg",
  "https://images.pexels.com/photos/9246492/pexels-photo-9246492.jpeg",
  "https://images.pexels.com/photos/4876671/pexels-photo-4876671.jpeg",
]

export default function Gallery({ scrollY }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + beforeAfterPairs.length) % beforeAfterPairs.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % beforeAfterPairs.length)
  }

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, newPosition)))
  }

  const current = beforeAfterPairs[activeIndex]

  return (
    <section id="gallery" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="section-bg gallery-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the transformation we bring to waterfront properties
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="mb-12">
          <div
            className="relative w-full h-96 rounded-xl overflow-hidden border-2 border-primary/30 cursor-col-resize group"
            onClick={handleSliderChange}
          >
            {/* After Image (Background) */}
            <img
              src={current.after || "/placeholder.svg"}
              alt="After"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Image (Overlay) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
              <img
                src={current.before || "/placeholder.svg"}
                alt="Before"
                className="w-full h-full object-cover"
                style={{ width: `${100 / (sliderPosition / 100)}%` }}
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize group-hover:w-2 transition-all"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                <ChevronLeft size={20} className="inline mr-1" />
                <ChevronRight size={20} className="inline" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 rounded text-sm font-semibold text-primary">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded text-sm font-semibold text-primary">
              After
            </div>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-bold text-foreground mt-6 text-center">{current.title}</h3>

          {/* Additional gallery grid */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalImages.map((src, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden border border-primary/20">
                <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-44 object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {beforeAfterPairs.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
