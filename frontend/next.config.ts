/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rescue.org",
      },
    ],
  },
};

module.exports = nextConfig;
