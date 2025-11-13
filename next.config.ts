import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages compatibility
  // Cloudflare Pages supports Next.js natively, no special output mode needed
  
  // Optimize images - set to unoptimized for Cloudflare Pages
  // Cloudflare will handle image optimization through their CDN
  images: {
    unoptimized: true,
  },
  
  // Ensure proper static generation
  trailingSlash: false,
  
  // Enable static exports if needed (optional)
  // output: 'export', // Uncomment if you want fully static export
};

export default nextConfig;
