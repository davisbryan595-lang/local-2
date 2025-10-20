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
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", phone: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your waterfront? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex gap-4 hover-glow p-6 rounded-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                <a href="tel:863-215-9440" className="text-primary hover:text-primary/80 transition-colors">
                  863-215-9440
                </a>
                <p className="text-sm text-muted-foreground mt-1">Matthew Dilts</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 hover-glow p-6 rounded-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">Contact via phone for fastest response</p>
              </div>
            </div>

            {/* Service Areas */}
            <div className="flex gap-4 hover-glow p-6 rounded-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Service Areas</h3>
                <p className="text-muted-foreground">Polk County, Lake County, Hernando County & surrounding areas</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-xl border border-primary/20 bg-card/50 backdrop-blur"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-background border border-primary/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tell us about your project"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover-glow transition-all"
            >
              <Send size={18} />
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
