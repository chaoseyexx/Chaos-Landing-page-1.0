import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Showcase } from "@/components/showcase"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  )
}
