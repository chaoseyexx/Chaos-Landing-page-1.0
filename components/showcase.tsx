"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="showcase" className="py-20 lg:py-32 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/25 rounded-full blur-[180px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
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
            See It In Action
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Experience the power and elegance of our platform with real-world examples and interactive demos.
          </motion.p>
        </div>

        <motion.div className="relative max-w-5xl mx-auto" style={{ y }}>
          <motion.div
            className="glass-card rounded-2xl p-4 lg:p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            style={{
              boxShadow:
                "0 0 40px rgba(108, 99, 255, 0.3), 0 0 80px rgba(108, 99, 255, 0.2), 0 20px 60px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.15)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(108,99,255,0.15)_1.5px,transparent_1.5px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

              <div className="relative z-10 text-center">
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/30 flex items-center justify-center backdrop-blur-sm"
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(108, 99, 255, 0.5)",
                        "0 0 40px rgba(108, 99, 255, 0.8)",
                        "0 0 20px rgba(108, 99, 255, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <p className="text-muted-foreground text-lg font-medium">Interactive Demo Preview</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-secondary/25 blur-3xl"
            animate={{
              y: [0, 30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-primary/25 blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 9,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
