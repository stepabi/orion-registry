/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Orionlab Kasm registry',
    description: 'The official store for orionlab kasm.',
    icon: '/img/logo.svg',
    listUrl: 'https://stepabi.github.io/orion-registry/',
    contactUrl: 'https://stepabi.github.io/orion-registry/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/orion-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
