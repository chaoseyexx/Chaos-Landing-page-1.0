"use client"

import { Zap, Shield, Globe, Code, Layers, Rocket } from "lucide-react"
import { motion } from "framer-motion"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with edge computing and global CDN distribution for instant load times.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption, DDoS protection, and compliance with SOC 2, GDPR, and HIPAA.",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy to 150+ edge locations worldwide with automatic scaling and zero configuration.",
    },
    {
      icon: Code,
      title: "Developer First",
      description: "Intuitive APIs, comprehensive docs, and CLI tools that developers love to use.",
    },
    {
      icon: Layers,
      title: "Full Stack",
      description: "Frontend, backend, database, and serverless functions all in one integrated platform.",
    },
    {
      icon: Rocket,
      title: "Ship Faster",
      description: "From idea to production in minutes with instant previews and automated deployments.",
    },
  ]

  return (
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl lg:text-5xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Everything You Need to Build
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            A complete toolkit designed for modern development teams who demand speed, reliability, and scalability
            without compromise.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-xl hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 relative"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/10 blur-xl transition-all duration-300" />
                <feature.icon className="w-7 h-7 text-primary relative z-10" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
