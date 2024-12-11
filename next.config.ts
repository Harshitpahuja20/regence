import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // Add static file serving from public folder
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/public/assets/:path*',
      },
    ];
  },

  // Optional: webpack configuration
  webpack: (config) => {
    config.resolve.alias['@assets'] = path.resolve(__dirname, 'public/assets');
    return config;
  }
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Add static file serving from public folder
//   async rewrites() {
//     return [
//       {
//         source: '/assets/:path*',
//         destination: '/public/assets/:path*',
//       },
//     ];
//   },

 
//   webpack: (config) => {
//     config.resolve.alias['@assets'] = path.resolve(__dirname, 'public/assets');
//     return config;
//   }
// };

// module.exports = nextConfig;
