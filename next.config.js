/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  distDir: 'out',
  images: {
    unoptimized: true, // Not needed—no images used
  },
  experimental: {
    optimizePackageImports: ['@headlessui/react'], // Not used, but future-safe
  },
};

export default nextConfig;