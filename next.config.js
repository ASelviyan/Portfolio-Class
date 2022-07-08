/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // no https//
    // an array of white listed domains 
    domains: ['placekitten.com']
  }
}

module.exports = nextConfig
