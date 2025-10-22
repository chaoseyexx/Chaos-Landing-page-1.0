"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -z-10" />

          <div className="text-center mb-8">
            <motion.div
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="w-8 h-8 text-primary" />
            </motion.div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Stay Updated</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Get notified about new templates, updates, and exclusive deals. No spam, unsubscribe anytime.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background/50 border-border"
            />
            <Button type="submit" className="bg-primary text-primary-foreground glow-hover-primary">
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
