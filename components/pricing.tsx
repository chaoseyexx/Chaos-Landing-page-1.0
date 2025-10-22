"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for side projects and experimentation",
      features: ["Unlimited projects", "100GB bandwidth", "Community support", "Basic analytics", "SSL certificates"],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "For professional developers and small teams",
      features: [
        "Everything in Starter",
        "1TB bandwidth",
        "Priority support",
        "Advanced analytics",
        "Custom domains",
        "Team collaboration",
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with advanced needs",
      features: [
        "Everything in Pro",
        "Unlimited bandwidth",
        "Dedicated support",
        "SLA guarantees",
        "Advanced security",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 14,
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
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Start free and scale as you grow. No hidden fees, no surprises.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, scale: plan.popular ? 1.02 : 1.03 }}
            >
              <Card
                className={`p-8 relative h-full ${plan.popular ? "glass-card border-primary/50" : "glass-card"}`}
                style={
                  plan.popular
                    ? {
                        boxShadow: "0 0 40px rgba(108, 99, 255, 0.3), 0 0 80px rgba(108, 99, 255, 0.2)",
                      }
                    : undefined
                }
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(108, 99, 255, 0.5)",
                        "0 0 30px rgba(108, 99, 255, 0.7)",
                        "0 0 20px rgba(108, 99, 255, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    Most Popular
                  </motion.div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                  </div>
                </div>
                <Button
                  className={`w-full mb-6 transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(108,99,255,0.6)]"
                      : "hover:border-primary/50"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
