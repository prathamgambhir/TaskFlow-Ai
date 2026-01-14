# SaaS Landing Page

A modern, responsive SaaS landing page built with Next.js, Tailwind CSS, and Framer Motion. This project was created to practice UI/UX design, animations, and modern frontend technologies.

## Features

- **Modern UI/UX Design** - Clean, both dark and light themed design with purple accents
- **Smooth Animations** - Fluid animations using Framer Motion
- **Responsive Layout** - Fully responsive for all screen sizes
- **Multiple Sections**:
  - Navbar with mobile menu
  - Hero section with animated elements
  - Logo ticker
  - Features showcase
  - Product showcase
  - Testimonials
  - FAQs
  - Call to action
  - Footer

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Language**: TypeScript

## Live 
- Open [http://taskflowwai.vercel.app](http://localhost:3000) in your browser.
  

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd saas-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

## Project Structure

```
saas-app/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── page.tsx       # Main landing page
│   │   ├── layout.tsx     # Root layout
│   │   └── globals.css    # Global styles
│   ├── assets/            # Images and static files
│   │   └── images/        # Image assets
│   ├── components/        # Reusable components
│   │   ├── button.tsx
│   │   ├── feature-cards.tsx
│   │   ├── testimonials-column.tsx
│   │   └── Icons/         # Custom icon components
│   └── sections/          # Page sections
│       ├── navbar.tsx
│       ├── hero.tsx
│       ├── features.tsx
│       ├── logo-ticker.tsx
│       ├── product-showcase.tsx
│       ├── testimonials.tsx
│       ├── faq.tsx
│       ├── calltoaction.tsx
│       └── footer.tsx
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

This is a practice project, but feel free to:
- Fork the repository
- Create a feature branch
- Submit pull requests
- Report issues

## License

This project is open source and available under the MIT License.

