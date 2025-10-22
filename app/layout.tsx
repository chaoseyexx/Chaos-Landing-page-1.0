import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ultra Modern Landing Template - Premium Next.js Template",
  description:
    "A futuristic, ultra-modern dark theme landing page template built with Next.js, TypeScript, and TailwindCSS. Perfect for SaaS, startups, and portfolios.",
  generator: "v0.app",
  keywords: ["landing page", "template", "nextjs", "dark theme", "modern", "saas", "startup"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
