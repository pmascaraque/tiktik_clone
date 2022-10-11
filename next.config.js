/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.wikia.nocookie.net', 'lh3.googleusercontent.com', 'upload.wikimedia.org', 'es.wikipedia.org']
  },
  swcMinify: true,
}

module.exports = nextConfig
