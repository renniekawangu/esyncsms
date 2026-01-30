# eSync Portfolio Website

A modern, mobile-first React + Vite portfolio website for eSync Student Management System, built with Tailwind CSS and Lucide icons.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
esync/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with CTA
│   │   ├── Features.jsx        # Features grid
│   │   ├── Roles.jsx           # Role-based access overview
│   │   ├── Pricing.jsx         # Pricing section
│   │   ├── PricingCard.jsx     # Reusable pricing card
│   │   ├── WhyChoose.jsx       # Why Choose eSync section
│   │   ├── Contact.jsx         # Contact information
│   │   └── Footer.jsx          # Footer with links
│   ├── utils/
│   │   ├── icons.jsx           # Icon components from lucide-react
│   │   └── iconMap.js          # Icon name mappings
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles & Tailwind directives
├── esync.portfolio.json        # Content data (all text from JSON)
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS plugins
├── tsconfig.json               # TypeScript config
└── README.md                   # This file
```

## 🎨 Key Features

✅ **Mobile-First Design** - Responsive from 320px to 2560px
✅ **Data from JSON** - All content loaded from `esync.portfolio.json`
✅ **Smooth Navigation** - Anchor links with smooth scrolling
✅ **Accessible HTML** - Semantic tags, proper ARIA labels
✅ **Production-Ready** - Clean, maintainable, well-organized code
✅ **Modern Stack** - React 18, Vite, Tailwind CSS, Lucide Icons

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icon library
- **PostCSS & Autoprefixer** - CSS processing

## 📦 Sections

1. **Navigation Bar** - Sticky header with mobile hamburger menu
2. **Hero Section** - Eye-catching headline with CTA buttons
3. **Features Grid** - 6 feature cards with icons (3-column on desktop, 1 on mobile)
4. **Roles Overview** - 6 role-based access cards with icons
5. **Pricing** - 3 pricing tiers with feature lists (Premium highlighted)
6. **Why Choose eSync** - Benefits grid with checkmark icons
7. **Contact** - Email and phone contact options
8. **Footer** - Links, brand info, copyright

## 🎯 Customization

To update content, simply edit `esync.portfolio.json`:

```json
{
  "brand": { ... },
  "hero": { ... },
  "features": [ ... ],
  "roles": [ ... ],
  "pricing": [ ... ],
  "whyChoose": [ ... ],
  "contact": { ... },
  "footer": { ... }
}
```

All changes will automatically reflect in the website.

## 🎨 Colors

Defined in `tailwind.config.js`:
- **Primary Color**: `#0F4C81` (eSync Blue)
- **Secondary Color**: `#22A699` (eSync Green)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

## ✨ Best Practices Applied

- ✓ Component-based architecture
- ✓ DRY (Don't Repeat Yourself) - reusable components
- ✓ Semantic HTML with proper heading hierarchy
- ✓ Accessible color contrast & ARIA labels
- ✓ Smooth animations & transitions
- ✓ Zero hardcoded content (all from JSON)
- ✓ Clean code with consistent naming
- ✓ Mobile-first CSS approach

## 🚀 Deployment

The website can be deployed to any static hosting service:

- **Vercel**: Connect your Git repo, auto-deploys on push
- **Netlify**: Simple drag-and-drop or Git integration
- **AWS S3 + CloudFront**: Use the `dist/` folder
- **GitHub Pages**: Build and push dist folder

## 📝 License

© 2026 eSync. All rights reserved.

---

Built with ❤️ for Zambian schools.
# esyncsms
