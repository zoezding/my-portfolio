# Personal Portfolio Website

A clean, minimal personal portfolio website built with Next.js and Tailwind CSS, optimized for GitHub Pages deployment.

## ✨ Features

- **🎨 Clean Design**: Minimal aesthetic with generous white space and modern typography
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **⚡ Fast Performance**: Built with Next.js for optimal loading speeds and React ecosystem
- **🔍 SEO Optimized**: Comprehensive meta tags, Open Graph, and structured data
- **♿ Accessible**: ARIA labels, semantic HTML, and proper heading hierarchy
- **📝 Markdown Content**: Easy content management with markdown files
- **🚀 Auto Deploy**: GitHub Actions workflow for automatic deployment

## 🏗️ Project Structure

```text
/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── favicon.ico         # Site favicon
│   └── .nojekyll          # GitHub Pages configuration
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO
│   │   ├── page.tsx        # Home page
│   │   ├── about/page.tsx  # About page
│   │   └── globals.css     # Global styles and CSS variables
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── SEO.tsx         # SEO component
│   ├── lib/
│   │   └── content.ts      # Content utilities
│   └── types/
│       └── content.ts      # TypeScript interfaces
├── content/about/
│   ├── short-description.md  # Home page intro
│   └── long-description.md   # About page content
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

### Development Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:3000`      |
| `npm run build`           | Build production site to `./out/`               |
| `npm run start`           | Start production server locally                 |
| `npm run lint`            | Run ESLint for code quality checks              |

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

3. **Configure Repository Settings**
   - Update `next.config.ts`:
     ```typescript
     const nextConfig: NextConfig = {
       output: 'export',
       basePath: '/your-repository-name',
       assetPrefix: '/your-repository-name/',
       // ... other config
     };
     ```

4. **Automatic Deployment**
   - Every push to `main` branch triggers automatic deployment
   - View deployment status in the "Actions" tab
   - Site will be available at `https://yourusername.github.io/your-repository-name`

### Manual Deployment

```bash
# Build the site
npm run build

# The built site is in ./out/
# Upload contents to your hosting provider
```

## ✏️ Customization

### Content Management

1. **Update Personal Information**
   - Edit `/content/about/short-description.md` for home page intro
   - Edit `/content/about/long-description.md` for about page content
   - Update name and title in page components and layout

2. **Add Social Links**
   - Edit `/src/components/Footer.tsx`
   - Update the social media links with your profiles

3. **SEO and Metadata**
   - Update `/src/app/layout.tsx` and `/src/components/SEO.tsx`
   - Modify structured data and meta tags
   - Add Open Graph images

### Styling

- **CSS Variables**: Modify `/src/app/globals.css` for theme customization
- **Tailwind Classes**: Update component styles directly in `.tsx` files
- **Typography**: Inter font configured in layout with Tailwind CSS
- **Tailwind Config**: Customize design system in `tailwind.config.ts`

### Adding New Pages

1. Create new `page.tsx` file in `/src/app/[route]/`
2. Add navigation link to Header component
3. Follow existing patterns for consistency
4. Use Next.js App Router conventions

## 🔧 Configuration

### Environment Variables

Create `.env` file for local development:
```bash
# Optional: Analytics tracking ID
PUBLIC_ANALYTICS_ID=your-analytics-id
```

### GitHub Pages Settings

Ensure these settings in your repository:
- **Source**: Deploy from a branch → GitHub Actions
- **Custom domain**: Optional, configure if using custom domain
- **Enforce HTTPS**: Recommended to enable

## 🎯 Future Enhancements

The codebase is structured to easily add:
- 📂 Portfolio/projects section
- 📝 Blog functionality  
- 📧 Contact form
- 🌙 Dark mode toggle
- 🌍 Internationalization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/username/my-portfolio/issues).

## 📞 Support

If you have questions or need help with setup:
- Create an issue in this repository
- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit the [Next.js Discord community](https://discord.gg/nextjs)
