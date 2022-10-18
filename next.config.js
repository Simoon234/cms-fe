/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  future: {
    webpack5: false,
  },
  images: {
      domains: ['localhost', 'cdn-icons-png.flaticon.com', 'encrypted-tbn0.gstatic.com', 'www.seekpng.com', 'i.pinimg.com'],
  },

}

module.exports = nextConfig
