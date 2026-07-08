import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.platformschools.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
