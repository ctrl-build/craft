import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages compatibility
  // Use static export for Cloudflare Pages (avoids Turbopack issues)
  output: 'export',
  
  // Optimize images - set to unoptimized for Cloudflare Pages
  // Cloudflare will handle image optimization through their CDN
  images: {
    unoptimized: true,
  },
  
  // Ensure proper static generation
  trailingSlash: false,
};

export default nextConfig;
