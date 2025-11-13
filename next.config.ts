import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages configuration
  // For Next.js 16, Cloudflare Pages has native support
  
  // Image optimization - Cloudflare handles this automatically
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // Ensure proper static asset handling
  trailingSlash: false,
  
  // Base path (empty for root domain)
  basePath: "",
  
  // Asset prefix (empty for root domain)
  assetPrefix: "",
};

export default nextConfig;
