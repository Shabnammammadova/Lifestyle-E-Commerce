/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lifestyle-eta.vercel.app'
            
          },
          {
            protocol: 'https',
            hostname: 'utfs.io'
            
          },
        ],
      },
};

export default nextConfig;
