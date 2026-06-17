# Portfolio Build — Walkthrough

## What was built

A premium **AI & ML Engineer portfolio** for Vishal Prajapati, inspired by [shaktisinh.engineer](https://www.shaktisinh.engineer/) structure but with a completely different **"Deep Tech / Cyber Neon"** dark theme.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vite + React 18 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | React Icons (Heroicons v2 + Simple Icons) |
| Typography | JetBrains Mono (headings) + Inter (body) |

## Theme — "Deep Tech / Cyber Neon"

Completely different from the reference portfolio's soft pastel lavender/rose theme:

- **Dark-first** design with deep navy (#0a0f1a) background
- **Electric Cyan** (#06b6d4) primary accent
- **Vivid Violet** (#8b5cf6) secondary accent
- **Warm Amber** (#f59e0b) tertiary accent
- **Dark glassmorphism** cards with cyan glow borders
- **Neon glow effects** instead of soft shadows
- **JetBrains Mono** headings for a techy monospaced feel

## File Structure

```
Portfolio/
├── index.html                    # SEO-optimized HTML entry
├── package.json                  # Vite + React + Tailwind
├── vite.config.js                # Vite config
├── tailwind.config.js            # Tailwind v3 with custom theme
├── postcss.config.js             # PostCSS config
├── public/
│   └── VISHAL_PRAJAPATI_RESUME-2.pdf
├── src/
│   ├── main.jsx                  # React entry point
│   ├── App.jsx                   # Root component
│   ├── index.css                 # Tailwind directives + design system
│   ├── data/
│   │   └── portfolio.js          # All resume data centralized
│   └── components/
│       ├── Navbar.jsx            # Fixed glassmorphic navbar
│       ├── Hero.jsx              # Full-viewport hero section
│       ├── About.jsx             # Bio + profile card
│       ├── Skills.jsx            # Categorized skill tags
│       ├── Projects.jsx          # Project showcase cards
│       ├── Experience.jsx        # Timeline layout
│       ├── Education.jsx         # Education cards
│       ├── Achievements.jsx      # Awards + certifications
│       ├── Contact.jsx           # Contact cards
│       └── Footer.jsx            # Footer + scroll-to-top
```

## Components Summary

| Component | Key Features |
|---|---|
| **Navbar** | Glassmorphic blur on scroll, dark/light toggle with animated icon swap, mobile hamburger with full-screen overlay, body scroll lock |
| **Hero** | Animated gradient blobs, availability badge, gradient text name, two CTAs, social icons, scroll-down arrow |
| **About** | Two-column layout, bio + 4 icon highlights, 3 stats cards, glass profile card with VP monogram + spinning ring |
| **Skills** | 2×2 grid, color-coded categories (cyan/violet/amber/emerald), flex-wrapped skill tags with hover effects |
| **Projects** | 3 project cards with gradient accent bar, description, bullet points, tech tags, GitHub links |
| **Experience** | Vertical timeline with gradient line, pulsing dot for current role, glass cards with bullet points |
| **Education** | 2-column cards with gradient cap icon, "Current" badge, board/period/score info |
| **Achievements** | Achievement cards with gradient icons, certification badges with shield icons |
| **Contact** | 4 contact cards (Email, LinkedIn, GitHub, Phone), hover glow + sliding arrow |
| **Footer** | Copyright + social icons, fixed scroll-to-top button with AnimatePresence |

## What was verified

- ✅ Vite dev server starts without errors at `http://localhost:5173/`
- ✅ All 10 components compile and render
- ✅ Fixed `@apply` group utility CSS error in Tailwind v3
- ✅ SEO meta tags (title, description, OG, Twitter cards)
- ✅ Resume PDF accessible at `/VISHAL_PRAJAPATI_RESUME-2.pdf`

## How to run

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```
