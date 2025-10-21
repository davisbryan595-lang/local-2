"use client"

import React from "react"

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$299",
      features: ["Shoreline cleanup", "Debris removal", "Up to 2 hours"],
    },
    {
      name: "Standard",
      price: "$599",
      features: ["Everything in Basic", "Tree trimming", "Aquatic weed spot treatment"],
      popular: true,
    },
    {
      name: "Premium",
      price: "$1099",
      features: ["Everything in Standard", "Full aquatic weed removal", "Priority scheduling"],
    },
  ]

  return (
    <section id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/10 to-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Simple, transparent pricing for common jobs. Contact us for custom quotes.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.popular ? "shadow-lg scale-105" : ""}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <div className="price">Starting at <span className="text-2xl ml-2">{plan.price}</span></div>
              </div>
              <ul className="mb-6 text-muted-foreground">
                {plan.features.map((f) => (
                  <li key={f} className="py-1">{f}</li>
                ))}
              </ul>
              <a href="#contact" className="liquid-btn inline-block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                <span>Choose {plan.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
