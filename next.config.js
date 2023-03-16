/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  distDir: ".next",
  assetPrefix: "." 
}

module.exports = nextConfig
