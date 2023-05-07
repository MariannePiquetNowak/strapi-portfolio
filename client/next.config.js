/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.mariannepiquet.fr',
        port: '1337',
        pathname: '/uploads/',
      },
    ],
  },
}

module.exports = nextConfig
