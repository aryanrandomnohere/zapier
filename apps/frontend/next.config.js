/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  typescript: {
    // ❌ WARNING: This allows production builds to successfully complete
    // even if your project has type errors.
    ignoreBuildErrors: true,
  },

  eslint: {
    // ❌ WARNING: This allows production builds to successfully complete
    // even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },

  images: {
    domains: ['zapier-images.imgix.net'],
  },
}

module.exports = nextConfig
