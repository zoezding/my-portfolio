# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Core Development Workflow:**
- `npm run dev` - Start development server at localhost:3000
- `npm run build` - Build static site to ./out/ directory
- `npm run start` - Start production server locally
- `npm run lint` - Run ESLint for code quality checks

**Deployment:**
- Automatic deployment via GitHub Actions on push to main branch
- Manual deployment trigger available via GitHub Actions "workflow_dispatch"

## Architecture Overview

This is a personal portfolio website built with **Next.js 15.x** using the App Router, **Tailwind CSS 3.x** for styling, and **TypeScript** for type safety. The site is configured for static export and optimized for GitHub Pages deployment.

### Core Technologies
- **Next.js**: React framework with App Router for static site generation
- **Tailwind CSS**: Utility-first CSS framework with PostCSS integration
- **TypeScript**: Strict mode enabled for type safety
- **React**: Component-based UI library
- **GitHub Pages**: Deployment target with automatic workflows

### Content Management System
The site uses a custom **markdown processing system** built with:
- Content utilities in `src/lib/content.ts` using `gray-matter` and `remark`
- Content stored in `/content/about/` directory (outside src for easier access)
- Two main content pieces: `short-description.md` (home page) and `long-description.md` (about page)
- Content loaded server-side and rendered as HTML via `remark-html`

### Component Architecture
**App Router structure with React components:**
1. **Root Layout** (`src/app/layout.tsx`): 
   - Global layout with Next.js Metadata API for SEO
   - Inter font configuration and global CSS imports
   - Structured data and comprehensive meta tags
2. **Navigation Components** (`Header.tsx`, `Footer.tsx`):
   - Client-side React components with useState for mobile menu
   - usePathname hook for active state management
   - Responsive navigation with Tailwind CSS
3. **Page Components** (`src/app/page.tsx`, `src/app/about/page.tsx`):
   - Server components that load markdown content
   - Home page with hero section pulling from short description content
   - About page with long-form content and skills/experience sections

### Styling System
- **Tailwind CSS 3.x** with PostCSS integration
- **Global CSS** in `src/app/globals.css` with CSS custom properties for theming
- **Design System**: Minimal aesthetic with generous white space, Inter font family
- **Responsive Design**: Mobile-first approach with sm/md/lg breakpoints
- **Component Styling**: Tailwind classes directly in TSX components

### GitHub Pages Configuration
**Key configuration in `next.config.ts`:**
- `output: 'export'` - Static site generation mode
- `basePath: '/my-portfolio'` - Repository path for GitHub Pages
- `assetPrefix: '/my-portfolio/'` - Asset prefix for proper loading
- `images: { unoptimized: true }` - Disable image optimization for static export

**Deployment Pipeline:**
- GitHub Actions workflow in `.github/workflows/deploy.yml`
- Triggers on push to main branch or manual dispatch
- Node.js 18.x build environment with npm cache
- Builds to `./out/` and deploys via `actions/deploy-pages@v4`

## Important Patterns

### Content Updates
When updating content, modify the markdown files in `/content/about/`:
- `short-description.md` - Updates home page introduction
- `long-description.md` - Updates about page biography
- Both files require frontmatter with `title` and optional `description` fields
- Content is processed server-side during build using `gray-matter` and `remark`

### SEO Optimization
SEO is handled through Next.js Metadata API:
- Root layout (`src/app/layout.tsx`) provides default metadata
- Individual pages can export metadata objects to override defaults
- Structured data (JSON-LD) for Person schema in root layout
- Open Graph and Twitter Card meta tags configured globally

### TypeScript Patterns
The codebase uses TypeScript interfaces for type safety:
- `ContentFrontmatter` and `ContentData` interfaces in `src/types/content.ts`
- Strict TypeScript configuration with Next.js
- Server and client component patterns with proper typing

### GitHub Pages Deployment Notes
- Repository must have GitHub Pages enabled with "GitHub Actions" as source
- Update `next.config.ts` basePath and assetPrefix to match your repository name
- Update metadata base URL in `src/app/layout.tsx` to match your GitHub Pages URL
- Deployment status visible in repository Actions tab
- Site available at `https://yourusername.github.io/repository-name`