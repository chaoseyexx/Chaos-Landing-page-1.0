# Ultra-Modern Dark Landing Page Template

A premium, fully-responsive dark theme landing page template built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion. Perfect for SaaS products, digital agencies, and modern web applications.

![Template Preview](public/placeholder.svg?height=400&width=800&query=modern+dark+landing+page+preview)

## ✨ Features

- **Ultra-Modern Design**: Futuristic dark theme with glassmorphism effects and neon accents
- **Smooth Animations**: Powered by Framer Motion for buttery-smooth interactions
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS v4**: Latest utility-first CSS framework
- **shadcn/ui Components**: Beautiful, accessible UI components
- **SEO Optimized**: Built with Next.js 15 App Router for optimal performance
- **Easy Customization**: Well-organized, modular component structure

## 📦 What's Included

### Sections
- **Navigation**: Sticky header with smooth scroll and mobile menu
- **Hero**: Eye-catching hero section with animated gradient text and CTA buttons
- **Features**: Grid layout showcasing key features with icons and hover effects
- **Showcase**: Visual product showcase with glassmorphism cards
- **Testimonials**: Customer testimonials with avatar and rating display
- **Pricing**: Three-tier pricing cards with highlighted popular plan
- **FAQ**: Accordion-style frequently asked questions
- **Newsletter**: Email subscription form with validation
- **Footer**: Comprehensive footer with links and social media

### Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui
- Lucide Icons

## 🚀 Quick Start

### Installation

1. **Download and extract** the template files

2. **Install dependencies**:
\`\`\`bash
npm install
# or
pnpm install
# or
yarn install
\`\`\`

3. **Run the development server**:
\`\`\`bash
npm run dev
# or
pnpm dev
# or
yarn dev
\`\`\`

4. **Open your browser** and navigate to `http://localhost:3000`

## 🎨 Customization Guide

### Colors

The template uses a carefully crafted color scheme defined in `app/globals.css`. To customize:

\`\`\`css
@theme inline {
  /* Background Colors */
  --color-background: #0F1117;
  --color-card: #1a1d29;
  
  /* Text Colors */
  --color-foreground: #E4E6EB;
  --color-muted-foreground: #9ca3af;
  
  /* Accent Colors */
  --color-primary: #6C63FF;      /* Purple accent */
  --color-secondary: #FF6584;    /* Pink accent */
  
  /* Adjust these values to match your brand */
}
\`\`\`

### Typography

Fonts are configured in `app/layout.tsx`. The template uses **Outfit** for headings and body text:

\`\`\`tsx
import { Outfit } from 'next/font/google'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit'
})
\`\`\`

To change fonts, replace `Outfit` with your preferred Google Font or custom font.

### Content

Each section is a separate component in the `components/` directory:

- `components/hero.tsx` - Hero section content
- `components/features.tsx` - Feature cards
- `components/pricing.tsx` - Pricing tiers
- `components/testimonials.tsx` - Customer reviews
- `components/faq.tsx` - FAQ items
- etc.

Simply open the component file and update the content arrays and text.

### Images

Replace placeholder images in the `public/` directory:
- `public/placeholder-logo.svg` - Your logo
- `public/placeholder.svg` - General images
- `public/placeholder-user.jpg` - User avatars

### Animations

Animations are configured using Framer Motion. Adjust timing and effects in individual component files:

\`\`\`tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }} // Adjust duration here
>
\`\`\`

## 📱 Responsive Design

The template is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Responsive utilities are built into Tailwind CSS (e.g., `md:`, `lg:` prefixes).

## 🔧 Advanced Customization

### Adding New Sections

1. Create a new component in `components/`:
\`\`\`tsx
// components/new-section.tsx
export function NewSection() {
  return (
    <section className="py-20">
      {/* Your content */}
    </section>
  )
}
\`\`\`

2. Import and add to `app/page.tsx`:
\`\`\`tsx
import { NewSection } from '@/components/new-section'

export default function Home() {
  return (
    <>
      {/* ... existing sections ... */}
      <NewSection />
    </>
  )
}
\`\`\`

### Modifying Animations

All animations use Framer Motion. Common patterns:

\`\`\`tsx
// Fade in from bottom
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}

// Scale on hover
whileHover={{ scale: 1.05 }}

// Stagger children
variants={{
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }
}}
\`\`\`

## 📄 File Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── navigation.tsx       # Header navigation
│   ├── hero.tsx            # Hero section
│   ├── features.tsx        # Features grid
│   ├── showcase.tsx        # Product showcase
│   ├── testimonials.tsx    # Customer testimonials
│   ├── pricing.tsx         # Pricing cards
│   ├── faq.tsx             # FAQ accordion
│   ├── newsletter.tsx      # Email subscription
│   ├── footer.tsx          # Footer section
│   └── ui/                 # shadcn/ui components
├── public/                 # Static assets
└── lib/
    └── utils.ts            # Utility functions
\`\`\`

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The template works on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted

## 💡 Tips for Success

1. **Customize the colors** to match your brand identity
2. **Replace all placeholder content** with your actual content
3. **Optimize images** before deploying (use WebP format)
4. **Test on multiple devices** to ensure responsiveness
5. **Add your analytics** (Google Analytics, Plausible, etc.)
6. **Set up SEO metadata** in `app/layout.tsx`

## 📝 License

This template is licensed for commercial use. You can:
- Use it for unlimited personal and commercial projects
- Modify and customize as needed
- Create client projects

You cannot:
- Resell or redistribute the template as-is
- Claim it as your own creation

## 🆘 Support

If you need help or have questions:
- Check the documentation above
- Review the code comments in each component
- Refer to [Next.js Documentation](https://nextjs.org/docs)
- Refer to [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🎉 Thank You!

Thank you for purchasing this template! We hope it helps you create something amazing.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
