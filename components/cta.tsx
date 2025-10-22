import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 lg:p-16 rounded-2xl">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-muted-foreground mb-10 text-pretty leading-relaxed max-w-2xl mx-auto">
            Join thousands of developers who are already building the future with Nexus. Start your free trial today, no
            credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="glow-effect group">
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
