"use client"

import React from "react"

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/10 to-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every job is unique—pricing depends on location, size, and access. Contact us for a free, no‑obligation estimate.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="pricing-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">How We Price</h3>
            <ul className="mb-6 text-muted-foreground">
              <li className="py-1">Location and travel distance</li>
              <li className="py-1">Tree size, density, and condition</li>
              <li className="py-1">Access for equipment and crew</li>
              <li className="py-1">Debris hauling and disposal needs</li>
            </ul>
          </div>

          <div className="pricing-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">Get an Estimate</h3>
            <p className="text-muted-foreground mb-6">Share your project details and we’ll schedule a quick on‑site visit.</p>
            <div className="space-y-3 mb-6 text-muted-foreground">
              <div>• Call: 863‑215‑9440</div>
              <div>• Or use the form below to request a quote</div>
            </div>
            <div className="flex gap-3">
              <a href="tel:863-215-9440" className="liquid-btn inline-block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">Call Now</a>
              <a href="#contact" className="inline-block w-full text-center border-2 border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary/10 transition-all">Request a Quote</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
