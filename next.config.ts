import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['mone.flatheme.net', 'img.youtube.com'],
    formats: ['image/avif', 'image/webp'],
  },
  /* config options here */
};

export default nextConfig;
