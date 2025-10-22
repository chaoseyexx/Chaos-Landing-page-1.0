import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Nexus transformed how we ship products. What used to take weeks now takes hours. The developer experience is unmatched.",
      author: "Sarah Chen",
      role: "CTO at TechCorp",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    {
      quote:
        "The performance improvements were immediate. Our page load times dropped by 60% and our team productivity doubled.",
      author: "Michael Rodriguez",
      role: "Lead Engineer at StartupXYZ",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    {
      quote:
        "Best investment we made this year. The platform scales effortlessly and the support team is incredibly responsive.",
      author: "Emily Watson",
      role: "VP Engineering at ScaleUp",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  ]

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Loved by Developers</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Join thousands of teams building the future with Nexus
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-card p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
