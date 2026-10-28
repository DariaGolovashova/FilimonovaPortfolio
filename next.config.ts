import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ac.goit.global',
      },
      {
        protocol: 'https',
        hostname: 'wfiemtdgxszjvxgrbzbk.supabase.co',
      },
    ],
  },
};

export default nextConfig;
