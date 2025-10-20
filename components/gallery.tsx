"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
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
  "https://images.pexels.com/photos/29475063/pexels-photo-29475063.jpeg",
  "https://images.pexels.com/photos/18124948/pexels-photo-18124948.jpeg",
]

export default function Gallery({ scrollY }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + beforeAfterPairs.length) % beforeAfterPairs.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % beforeAfterPairs.length)
  }

  const updateSliderFromClientX = (clientX: number) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const pos = ((clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, pos)))
  }

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging) return
      updateSliderFromClientX(e.clientX)
    }
    const onUp = () => setIsDragging(false)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
  }, [isDragging])

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    updateSliderFromClientX(e.clientX)
  }

  const current = beforeAfterPairs[activeIndex]

  return (
    <section id="gallery" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="section-bg gallery-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See the transformation we bring to waterfront properties</p>
        </div>

        {/* Before/After Slider */}
        <div className="mb-12">
          <div
            ref={sliderRef}
            onPointerDown={handlePointerDown}
            className="relative w-full h-96 rounded-xl overflow-hidden border-2 border-primary/30 cursor-col-resize group touch-none"
          >
            {/* After Image (Background) */}
            <img src={current.after || "/placeholder.svg"} alt="After" className="absolute inset-0 w-full h-full object-cover" />

            {/* Before Image (Overlay) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
              <img src={current.before || "/placeholder.svg"} alt="Before" className="w-full h-full object-cover" />
            </div>

            {/* Reflection Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-background/10 to-transparent mix-blend-overlay" />

            {/* Slider Handle */}
            <div className="absolute top-0 bottom-0 w-1" style={{ left: `${sliderPosition}%` }}>
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                <ChevronLeft size={16} className="inline mr-1" />
                <ChevronRight size={16} className="inline" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 rounded text-sm font-semibold text-primary">Before</div>
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded text-sm font-semibold text-primary">After</div>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-bold text-foreground mt-6 text-center">{current.title}</h3>

          {/* Masonry Grid */}
          <div className="mt-8 masonry-grid">
            {[...additionalImages, current.after, current.before].map((src, idx) => (
              <div key={idx} className="masonry-item group rounded-lg overflow-hidden relative">
                <img src={src} alt={`Gallery ${idx + 1}`} className="w-full object-cover h-full" onClick={() => setLightboxSrc(src)} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all">
                  <div className="bg-background/60 text-foreground px-3 py-1 rounded">View</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={handlePrev} className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            <ChevronLeft size={24} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {beforeAfterPairs.map((_, index) => (
              <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/60"}`} />
            ))}
          </div>

          <button onClick={handleNext} className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setLightboxSrc(null)}>
          <img src={lightboxSrc} alt="Preview" className="max-w-[90vw] max-h-[90vh] object-contain rounded" />
        </div>
      )}
    </section>
  )
}
