const isProd = process.env.NODE_ENV === "production";

/**
 * Define the base path explicitly for GitHub Pages
 */
const basePath = isProd ? "/imrankhalid001.github.io" : "";

/**
 * Next.js Configuration
 */
const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true, // Required for Next.js images on GitHub Pages
  },
  publicRuntimeConfig: {
    basePath: basePath,
  },
};

module.exports = nextConfig;
