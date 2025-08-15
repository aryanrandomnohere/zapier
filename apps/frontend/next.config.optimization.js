// Additional Next.js configuration for optimization
// This file should be merged with your existing next.config.js

const nextConfigOptimization = {
  // Enable webpack bundle splitting for better performance
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize for production builds
    if (!dev && !isServer) {
      // Enable tree shaking for react-icons and lucide-react
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-icons/ai': 'react-icons/ai/index.esm.js',
        'react-icons/bi': 'react-icons/bi/index.esm.js',
        'react-icons/bs': 'react-icons/bs/index.esm.js',
        'react-icons/cg': 'react-icons/cg/index.esm.js',
        'react-icons/di': 'react-icons/di/index.esm.js',
        'react-icons/fa': 'react-icons/fa/index.esm.js',
        'react-icons/fc': 'react-icons/fc/index.esm.js',
        'react-icons/fi': 'react-icons/fi/index.esm.js',
        'react-icons/gi': 'react-icons/gi/index.esm.js',
        'react-icons/go': 'react-icons/go/index.esm.js',
        'react-icons/gr': 'react-icons/gr/index.esm.js',
        'react-icons/hi': 'react-icons/hi/index.esm.js',
        'react-icons/im': 'react-icons/im/index.esm.js',
        'react-icons/io': 'react-icons/io/index.esm.js',
        'react-icons/io5': 'react-icons/io5/index.esm.js',
        'react-icons/li': 'react-icons/li/index.esm.js',
        'react-icons/lu': 'react-icons/lu/index.esm.js',
        'react-icons/md': 'react-icons/md/index.esm.js',
        'react-icons/pi': 'react-icons/pi/index.esm.js',
        'react-icons/ri': 'react-icons/ri/index.esm.js',
        'react-icons/rx': 'react-icons/rx/index.esm.js',
        'react-icons/si': 'react-icons/si/index.esm.js',
        'react-icons/sl': 'react-icons/sl/index.esm.js',
        'react-icons/tb': 'react-icons/tb/index.esm.js',
        'react-icons/tfi': 'react-icons/tfi/index.esm.js',
        'react-icons/ti': 'react-icons/ti/index.esm.js',
        'react-icons/vsc': 'react-icons/vsc/index.esm.js',
        'react-icons/wi': 'react-icons/wi/index.esm.js',
      };

      // Optimize chunk splitting
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          // Create separate chunks for heavy libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
          },
          icons: {
            test: /[\\/]node_modules[\\/](react-icons|lucide-react)[\\/]/,
            name: 'icons',
            priority: 20,
            chunks: 'all',
          },
          ui: {
            test: /[\\/]app[\\/](ui|components)[\\/]/,
            name: 'ui-components',
            priority: 20,
            chunks: 'all',
          },
          recoil: {
            test: /[\\/]node_modules[\\/](recoil|@recoiljs)[\\/]/,
            name: 'recoil',
            priority: 15,
            chunks: 'all',
          },
        },
      };

      // Enable additional optimizations
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    return config;
  },

  // Optimize CSS and JS
  experimental: {
    // Enable CSS optimization
    optimizeCss: true,
    // Enable font optimization
    optimizeFonts: true,
    // Enable image optimization
    images: {
      formats: ['image/avif', 'image/webp'],
      minimumCacheTTL: 300,
    },
  },

  // Compress responses
  compress: true,

  // Enable React strict mode for better performance
  reactStrictMode: true,

  // Power by header removal for security and smaller response size
  poweredByHeader: false,

  // Production optimizations
  productionBrowserSourceMaps: false,
  
  // Static optimization
  generateBuildId: async () => {
    return 'optimized-build';
  },

  // Bundle analyzer (uncomment for bundle analysis)
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // },
};

module.exports = nextConfigOptimization;

// Usage instructions:
// 1. Merge this with your existing next.config.js file
// 2. Install @next/bundle-analyzer if you want to analyze bundle size:
//    npm install --save-dev @next/bundle-analyzer
// 3. Run ANALYZE=true npm run build to analyze bundle size
// 4. The OptimizedIcon component we created will work with these optimizations
