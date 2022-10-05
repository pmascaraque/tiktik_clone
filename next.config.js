/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.wikia.nocookie.net']
  },
  swcMinify: true,
}

module.exports = nextConfig
