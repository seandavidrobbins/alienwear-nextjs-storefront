/** @type {import('next').NextConfig} */
const getRedirects = require("./lib/redirects.js");
const getHeaders = require("./lib/headers.js");

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  /**
   * We specify which domains are allowed to be optimized.
   * This is needed to ensure that external urls can't be abused.
   * @see https://nextjs.org/docs/basic-features/image-optimization#domains
   */
  images: {
    domains: ["alien-wear.local"],
  },
  async headers() {
    return await getHeaders();
  },
  async redirects() {
    return await getRedirects();
  },
};

module.exports = nextConfig;
