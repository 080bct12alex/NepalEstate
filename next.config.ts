import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 
                   (process.env.NODE_ENV === 'development' 
                     ? 'http://127.0.0.1:5001' 
                     : 'https://nepalestateapi.netlify.app');
    
    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/api/:path*`
      }
    ];
  }
};

export default nextConfig;
