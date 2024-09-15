/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lifestyle-eta.vercel.app',
          },
        ],
      },
};

export default nextConfig;
