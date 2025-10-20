"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"

interface ContactProps {
  scrollY: number
}

export default function Contact({ scrollY }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", phone: "", email: "", message: "" })
    }, 2000)
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 to-background">
      <div className="section-bg contact-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your waterfront? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl border border-primary/20 bg-card/50 backdrop-blur">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-background border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone</label>
              <input id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-background border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-background border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg bg-background border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" />
            </div>

            <div className="flex gap-4">
              <a href="tel:863-215-9440" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover-glow">
                <Phone />
                Call Now: 863-215-9440
              </a>

              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/20 bg-card/60 text-foreground font-semibold hover-glow">
                <Send />
                Send Message
              </button>
            </div>
          </form>

          {/* Map & Phone CTA */}
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden border border-primary/20">
              <iframe
                title="Service Area Map"
                src="https://www.google.com/maps?q=Polk+County+FL&output=embed"
                className="w-full h-72"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="p-6 rounded-xl border border-primary/20 bg-card/60 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Ready to start?</h3>
              <p className="text-muted-foreground mb-4">Call us for a free consultation and quote.</p>
              <a href="tel:863-215-9440" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover-glow">
                <Phone />
                863-215-9440
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
