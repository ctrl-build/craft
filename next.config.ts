import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages configuration
  // Cloudflare Pages has native Next.js support - no special output needed
  
  // Image optimization - Cloudflare handles this automatically
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // Ensure proper static asset handling
  trailingSlash: false,
};

export default nextConfig;
