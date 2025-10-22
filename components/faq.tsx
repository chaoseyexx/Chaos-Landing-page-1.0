"use client"

import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What's included in the template?",
      answer:
        "The template includes all source code, components, assets, and documentation. You get a fully functional Next.js application with TypeScript, TailwindCSS, Framer Motion animations, and all the sections you see on this page.",
    },
    {
      question: "Can I use this for client projects?",
      answer:
        "Yes! The license allows you to use this template for unlimited personal and commercial projects. You can customize it for your clients and charge them for your services.",
    },
    {
      question: "Do I get free updates?",
      answer:
        "Yes, all future updates and improvements are included free of charge. Once you purchase, you'll have lifetime access to all updates via your download link.",
    },
    {
      question: "What if I need help customizing it?",
      answer:
        "We provide comprehensive documentation and code comments to help you customize everything. If you need additional support, you can reach out via email and we'll help you get started.",
    },
    {
      question: "Is it mobile responsive?",
      answer:
        "The template is built mobile-first and fully responsive across all devices. Every component is optimized for phones, tablets, and desktop screens.",
    },
  ]

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Everything you need to know about the template
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-accent/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-foreground pr-8">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
