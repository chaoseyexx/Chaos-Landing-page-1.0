"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary glow-primary" />
            <span className="text-xl font-semibold text-foreground">Nexus</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#showcase" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Showcase
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
              Live Demo
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground glow-hover-primary">
              Buy Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#showcase" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Showcase
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="text-foreground">
                  Live Demo
                </Button>
                <Button size="sm" className="bg-primary text-primary-foreground">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
