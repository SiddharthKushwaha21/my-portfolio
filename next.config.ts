import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  compress: true,

  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
