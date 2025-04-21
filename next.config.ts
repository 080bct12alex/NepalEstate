import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === 'development'
          ? 'http://127.0.0.1:5001/api/:path*'
          : 'https://nepalestateapi.netlify.app/.netlify/functions/api/:path*'
      }
    ];
  }
};

export default nextConfig;
