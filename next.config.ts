import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only use basePath for GitHub Pages deployment
  ...(isProduction && isGitHubPages && {
    basePath: '/my-portfolio',
    assetPrefix: '/my-portfolio/',
  }),
};

export default nextConfig;