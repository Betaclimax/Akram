/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-domain.com'], 
    unoptimized: true, 
  },
  basePath: '/your-base-path',
}

module.exports = nextConfig