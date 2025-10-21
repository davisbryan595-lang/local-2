"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-card border-t border-primary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#top" className="inline-block">
              <div className="w-20 h-20 relative overflow-hidden rounded-md animate-float">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5c758e804cba4fa3a488e9088887877b%2Fa9707f64ddf549f99a2b80f188df10f0?format=webp&width=800"
                  alt="Local Lakefront logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <p className="text-muted-foreground mt-2">Your waterfront, perfected.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Tree Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Aquatic Weed Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Junk & Debris Removal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-muted-foreground mb-2">
              <a href="tel:863-215-9440" className="hover:text-primary transition-colors">
                863-215-9440
              </a>
            </p>
            <p className="text-muted-foreground text-sm">Matthew Dilts</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Local Lakefront. All rights reserved. Your waterfront, perfected.
          </p>
        </div>
      </div>
    </footer>
  )
}
