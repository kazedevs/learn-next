import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enable styled-components support
    styledComponents: true,
  },
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you use
  },
  // Remove experimental features that might cause TypeScript errors
};

export default nextConfig;
