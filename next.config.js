/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  future: {
    webpack5: false,
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
