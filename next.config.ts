import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "www.kaise.nl" },
      { protocol: "http",  hostname: "www.kaise.nl" },
      { protocol: "https", hostname: "kitchensusan.nl" },
    ],
  },
};

export default nextConfig;
